"use client";

import { useCallback, useState } from "react";

function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

export function ImageCompressorTool() {
  const [status, setStatus] = useState<"idle" | "processing" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("compressed");

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
    setOriginalSize(null);
    setCompressedSize(null);
    setDownloadUrl(null);
    setFileName("compressed");
  }, []);

  const onFile = useCallback(async (file: File | null) => {
    if (!file) return;
    reset();
    setOriginalSize(file.size);
    setStatus("processing");
    setError(null);

    const form = new FormData();
    form.append("file", file);

    try {
      const res = await fetch("/api/compress-image", {
        method: "POST",
        body: form,
      });
      const data = (await res.json()) as {
        error?: string;
        url?: string;
        originalSize?: number;
        compressedSize?: number;
      };

      if (!res.ok) {
        throw new Error(data.error || "Compression failed.");
      }

      if (!data.url) throw new Error("No download URL returned.");

      setDownloadUrl(data.url);
      setCompressedSize(data.compressedSize ?? null);
      if (typeof data.originalSize === "number") setOriginalSize(data.originalSize);
      const base = file.name.replace(/\.[^.]+$/, "") || "image";
      setFileName(`${base}-compressed`);
      setStatus("done");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setStatus("error");
    }
  }, [reset]);

  const download = useCallback(async () => {
    if (!downloadUrl) return;
    const res = await fetch(downloadUrl);
    const blob = await res.blob();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName.includes(".") ? fileName : `${fileName}.jpg`;
    a.click();
    URL.revokeObjectURL(a.href);
  }, [downloadUrl, fileName]);

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-zinc-700">Upload image</label>
        <input
          type="file"
          accept="image/*"
          className="input-dropzone"
          onChange={(e) => onFile(e.target.files?.[0] ?? null)}
          disabled={status === "processing"}
        />
      </div>

      {status === "processing" && (
        <div className="flex items-center gap-3 rounded-lg bg-surface px-4 py-3 text-sm text-zinc-700">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-800" />
          Compressing with Cloudinary…
        </div>
      )}

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      {status === "done" && originalSize != null && compressedSize != null && (
        <dl className="grid gap-3 rounded-xl bg-surface p-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-zinc-500">Original size</dt>
            <dd className="font-medium text-zinc-900">{formatBytes(originalSize)}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">After compression</dt>
            <dd className="font-medium text-zinc-900">{formatBytes(compressedSize)}</dd>
          </div>
        </dl>
      )}

      {status === "done" && downloadUrl && (
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={download}
            className="btn-primary"
          >
            Download
          </button>
          <button
            type="button"
            onClick={reset}
            className="btn-secondary"
          >
            Compress another
          </button>
        </div>
      )}
    </div>
  );
}
