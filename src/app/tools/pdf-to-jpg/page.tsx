import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { PdfToJpgTool } from "@/components/tools/PdfToJpgTool";
import { seoKeywords, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "PDF to JPG High Quality Free Converter",
  description:
    "Use pdf to jpg high quality free conversion and convert pdf to image without losing quality with our no signup pdf converter workflow.",
  keywords: seoKeywords,
  openGraph: {
    title: "PDF to JPG Converter Free",
    description: "Convert every PDF page into JPG quickly with browser-based PDF.js rendering.",
    url: `${site.url}/tools/pdf-to-jpg`,
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: "/tools/pdf-to-jpg" },
};

export default function PdfToJpgPage() {
  return (
    <ToolPageLayout
      title="PDF to JPG"
      description="Your PDF stays in the browser. Each page is rendered with PDF.js and exported as a JPEG."
      icon={
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      }
    >
      <PdfToJpgTool />
      <section className="mt-8 space-y-4 border-t border-border pt-8 text-sm leading-relaxed text-zinc-600">
        <h2 className="text-lg font-semibold text-zinc-900">PDF to JPG high quality free conversion</h2>
        <p>
          This page focuses on pdf to jpg high quality free output with a clean user flow. If you need to
          convert pdf to image without losing quality for reports, scanned notes, handouts, or product
          catalogs, this tool helps you export page images quickly. It is designed as a no signup pdf
          converter, so you can convert documents without creating an account or sharing extra personal
          details.
        </p>

        <h3 className="text-base font-semibold text-zinc-900">How to use</h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>Select and upload your PDF file.</li>
          <li>Wait while pages render and convert to JPG.</li>
          <li>Download one JPG or all pages as a ZIP file.</li>
        </ol>

        <h3 className="text-base font-semibold text-zinc-900">Features</h3>
        <ul className="list-inside list-disc space-y-2">
          <li>PDF.js-based rendering for clear page output.</li>
          <li>Single page or full ZIP download options.</li>
          <li>No signup pdf converter experience for quick usage.</li>
          <li>Works on desktop and mobile with simple controls.</li>
        </ul>

        <p>
          For single-page files, you can download one image directly. For longer files, all pages can be
          bundled into a ZIP so your workflow stays organized. This is especially useful for people who
          publish PDF slides to social media, upload document previews to marketplaces, or create visual
          archives for class and team material.
        </p>
        <p>
          For the best output, start with a clear source PDF and avoid recompressing images multiple
          times. If you also need a reverse conversion workflow, use our{" "}
          <a href="/tools/jpg-to-pdf" className="font-medium text-zinc-900 underline">
            JPG to PDF tool
          </a>{" "}
          and{" "}
          <a href="/tools/image-compressor" className="font-medium text-zinc-900 underline">
            Image Compressor
          </a>{" "}
          to build a complete file optimization pipeline.
        </p>

        <h3 className="text-base font-semibold text-zinc-900">FAQ</h3>
        <div className="space-y-3">
          <p>
            <strong>Is this a no signup pdf converter?</strong> Yes, upload and convert directly without
            account creation.
          </p>
          <p>
            <strong>Can I convert pdf to image without losing quality?</strong> The tool targets high
            quality output, especially when your source PDF has clear text and graphics.
          </p>
          <p>
            <strong>Does it support multiple pages?</strong> Yes, multi-page files can be downloaded as a
            ZIP for easier sharing.
          </p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
