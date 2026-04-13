"use client";

import { jsPDF } from "jspdf";
import { useCallback, useState } from "react";

type Status = "idle" | "processing" | "done" | "error";

function loadImageSize(src: string): Promise<{ w: number; h: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => reject(new Error("Could not read image."));
    img.src = src;
  });
}

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(new Error("Could not read file."));
    r.readAsDataURL(file);
  });
}

export function JpgToPdfTool() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [fileName, setFileName] = useState("images");

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
    setPdfBlob(null);
    setFileName("images");
  }, []);

  const run = useCallback(async (list: FileList | null) => {
    if (!list?.length) return;
    const files = Array.from(list).filter((f) => f.type === "image/jpeg" || f.name.toLowerCase().endsWith(".jpg") || f.name.toLowerCase().endsWith(".jpeg"));
    if (files.length === 0) {
      setError("Please choose one or more JPG/JPEG images.");
      setStatus("error");
      return;
    }

    reset();
    setStatus("processing");
    setError(null);

    try {
      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 36;
      const maxW = pageW - margin * 2;
      const maxH = pageH - margin * 2;

      for (let i = 0; i < files.length; i++) {
        if (i > 0) pdf.addPage();
        const dataUrl = await fileToDataUrl(files[i]);
        const { w, h } = await loadImageSize(dataUrl);
        const ratio = Math.min(maxW / w, maxH / h, 1);
        const drawW = w * ratio;
        const drawH = h * ratio;
        const x = (pageW - drawW) / 2;
        const y = (pageH - drawH) / 2;
        pdf.addImage(dataUrl, "JPEG", x, y, drawW, drawH);
      }

      const out = pdf.output("blob");
      setPdfBlob(out);
      setFileName(files.length === 1 ? files[0].name.replace(/\.(jpe?g)$/i, "") : "images");
      setStatus("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not build PDF.");
      setStatus("error");
    }
  }, [reset]);

  const download = useCallback(() => {
    if (!pdfBlob) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(pdfBlob);
    a.download = `${fileName}.pdf`;
    a.click();
    URL.revokeObjectURL(a.href);
  }, [pdfBlob, fileName]);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-zinc-700">Upload JPG images</label>
        <input
          type="file"
          accept="image/jpeg,.jpg,.jpeg"
          multiple
          className="input-dropzone"
          onChange={(e) => run(e.target.files)}
          disabled={status === "processing"}
        />
        <p className="mt-2 text-xs text-zinc-500">JPEG only. Order matches your file selection.</p>
      </div>

      {status === "processing" && (
        <div className="flex items-center gap-3 rounded-lg bg-surface px-4 py-3 text-sm text-zinc-700">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-800" />
          Building PDF…
        </div>
      )}

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      {status === "done" && pdfBlob && (
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={download}
            className="btn-primary"
          >
            Download PDF
          </button>
          <button
            type="button"
            onClick={reset}
            className="btn-secondary"
          >
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
