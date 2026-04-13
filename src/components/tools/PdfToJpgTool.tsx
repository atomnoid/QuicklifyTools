"use client";

import { useCallback, useState } from "react";

type Status = "idle" | "processing" | "done" | "error";

function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

export function PdfToJpgTool() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [blobs, setBlobs] = useState<Blob[]>([]);
  const [sourceName, setSourceName] = useState("document");
  const [sourceSize, setSourceSize] = useState<number | null>(null);
  const [outputSize, setOutputSize] = useState<number | null>(null);

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
    setPageCount(0);
    setBlobs([]);
    setSourceName("document");
    setSourceSize(null);
    setOutputSize(null);
  }, []);

  const run = useCallback(async (file: File | null) => {
    if (!file) return;
    reset();
    setSourceSize(file.size);
    const base = file.name.replace(/\.pdf$/i, "") || "document";
    setSourceName(base);
    setStatus("processing");
    setError(null);

    try {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

      const data = new Uint8Array(await file.arrayBuffer());
      const pdf = await pdfjs.getDocument({ data }).promise;
      const out: Blob[] = [];
      const scale = 2;

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas not supported.");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: ctx, viewport }).promise;
        const blob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new Error("Could not encode JPEG."))),
            "image/jpeg",
            0.92
          );
        });
        out.push(blob);
      }

      setBlobs(out);
      setPageCount(out.length);
      const total = out.reduce((s, b) => s + b.size, 0);
      setOutputSize(total);
      setStatus("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not convert PDF.");
      setStatus("error");
    }
  }, [reset]);

  const downloadZip = useCallback(async () => {
    if (blobs.length === 0) return;
    if (blobs.length === 1) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blobs[0]);
      a.download = `${sourceName}-1.jpg`;
      a.click();
      URL.revokeObjectURL(a.href);
      return;
    }

    const { default: JSZip } = await import("jszip");
    const zip = new JSZip();
    blobs.forEach((b, i) => {
      zip.file(`${sourceName}-${i + 1}.jpg`, b);
    });
    const zipped = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(zipped);
    a.download = `${sourceName}-pages.zip`;
    a.click();
    URL.revokeObjectURL(a.href);
  }, [blobs, sourceName]);

  const downloadOne = useCallback(
    (index: number) => {
      const b = blobs[index];
      if (!b) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.download = `${sourceName}-${index + 1}.jpg`;
      a.click();
      URL.revokeObjectURL(a.href);
    },
    [blobs, sourceName]
  );

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-zinc-700">Upload PDF</label>
        <input
          type="file"
          accept="application/pdf"
          className="input-dropzone"
          onChange={(e) => run(e.target.files?.[0] ?? null)}
          disabled={status === "processing"}
        />
      </div>

      {status === "processing" && (
        <div className="flex items-center gap-3 rounded-lg bg-surface px-4 py-3 text-sm text-zinc-700">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-800" />
          Rendering pages with PDF.js…
        </div>
      )}

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      {status === "done" && sourceSize != null && outputSize != null && (
        <dl className="grid gap-3 rounded-xl bg-surface p-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-zinc-500">PDF size</dt>
            <dd className="font-medium text-zinc-900">{formatBytes(sourceSize)}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">JPEG output (total)</dt>
            <dd className="font-medium text-zinc-900">{formatBytes(outputSize)}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-zinc-500">Pages</dt>
            <dd className="font-medium text-zinc-900">{pageCount}</dd>
          </div>
        </dl>
      )}

      {status === "done" && blobs.length > 0 && (
        <div className="space-y-4">
          <button
            type="button"
            onClick={downloadZip}
            className="btn-primary w-full sm:w-auto"
          >
            {blobs.length === 1 ? "Download JPG" : "Download all (ZIP)"}
          </button>

          {blobs.length > 1 && (
            <div className="max-h-48 space-y-2 overflow-y-auto rounded-xl border border-border p-3">
              <p className="text-xs font-medium text-zinc-500">Individual pages</p>
              <ul className="space-y-1">
                {blobs.map((_, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => downloadOne(i)}
                      className="text-sm text-zinc-700 underline hover:text-zinc-900"
                    >
                      Page {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            onClick={reset}
            className="btn-secondary"
          >
            Convert another PDF
          </button>
        </div>
      )}
    </div>
  );
}
