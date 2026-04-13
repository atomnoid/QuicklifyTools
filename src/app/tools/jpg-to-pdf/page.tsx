import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { JpgToPdfTool } from "@/components/tools/JpgToPdfTool";
import { seoKeywords, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "JPG to PDF in Seconds | Online Converter",
  description:
    "Convert JPG to PDF in seconds with a no signup pdf converter workflow built for students, professionals, and mobile users.",
  keywords: seoKeywords,
  openGraph: {
    title: "JPG to PDF Converter Online",
    description:
      "Convert JPG images into PDF pages with a fast, clean, mobile-friendly browser tool.",
    url: `${site.url}/tools/jpg-to-pdf`,
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: "/tools/jpg-to-pdf" },
};

export default function JpgToPdfPage() {
  return (
    <ToolPageLayout
      title="JPG to PDF"
      description="Select one or more JPG files. We build a single PDF with one image per page, centered on A4."
      icon={
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 6h16M4 10h4"
          />
        </svg>
      }
    >
      <JpgToPdfTool />
      <section className="mt-8 space-y-4 border-t border-border pt-8 text-sm leading-relaxed text-zinc-600">
        <h2 className="text-lg font-semibold text-zinc-900">JPG to PDF in seconds with clean layout</h2>
        <p>
          This tool is built for people who need jpg to pdf in seconds without opening desktop software.
          Upload one or more JPG files, and the converter generates a single PDF that is ready for
          assignment submissions, business paperwork, portfolio sharing, and form portals. The flow is
          simple enough for beginners while still useful for frequent users who convert files every day.
        </p>

        <h3 className="text-base font-semibold text-zinc-900">How to use</h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>Select one or more JPG images.</li>
          <li>Wait while the PDF is generated in your browser.</li>
          <li>Download the final PDF and share it anywhere.</li>
        </ol>

        <h3 className="text-base font-semibold text-zinc-900">Features</h3>
        <ul className="list-inside list-disc space-y-2">
          <li>Converts multiple JPG images into one PDF document quickly.</li>
          <li>No signup pdf converter workflow for fast usage.</li>
          <li>Mobile-friendly interface with clear controls.</li>
          <li>Useful companion to PDF to JPG and image compression tools.</li>
        </ul>

        <p>
          Because the conversion runs in-browser, your workflow stays fast on both desktop and mobile.
          This is helpful for free online tools for students who need to submit scanned notes and homework
          as PDFs, as well as freelancers who send receipts and signed pages to clients. If you are
          comparing options and looking for the best free pdf converter online 2026, this tool keeps the
          process clean, fast, and practical.
        </p>
        <p>
          For better output quality, use clear source images and select files in the order you want pages
          to appear. If you need to extract images from PDFs first, use our{" "}
          <a href="/tools/pdf-to-jpg" className="font-medium text-zinc-900 underline">
            PDF to JPG
          </a>{" "}
          tool. You can also optimize large image files with the{" "}
          <a href="/tools/image-compressor" className="font-medium text-zinc-900 underline">
            Image Compressor
          </a>{" "}
          before combining them into a final PDF.
        </p>

        <h3 className="text-base font-semibold text-zinc-900">FAQ</h3>
        <div className="space-y-3">
          <p>
            <strong>Can I create one PDF from many images?</strong> Yes, select multiple JPG files and
            the tool will combine them in your chosen order.
          </p>
          <p>
            <strong>How fast is conversion?</strong> In most cases you can create JPG to PDF in seconds,
            depending on image size and device speed.
          </p>
          <p>
            <strong>Do I need an account?</strong> No, it works as a no signup pdf converter with a quick
            upload-to-download flow.
          </p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
