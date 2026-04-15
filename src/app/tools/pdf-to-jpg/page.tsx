import type { Metadata } from "next";
import Link from "next/link";
import { RelatedToolsSection } from "@/components/RelatedToolsSection";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { PdfToJpgTool } from "@/components/tools/PdfToJpgTool";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Free Online PDF to JPG Converter - Fast, No Signup",
  description:
    "Convert PDF pages into high-quality JPG files in seconds. Free online PDF to JPG converter with secure and private processing, no signup required.",
  path: "/tools/pdf-to-jpg",
});

export default function PdfToJpgPage() {
  return (
    <ToolPageLayout
      title="PDF to JPG"
      description="Convert PDF pages to JPG instantly with a clean browser-based workflow. No signup required and free online for all devices."
      toolHref="/tools/pdf-to-jpg"
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
        <h2 className="text-lg font-semibold text-zinc-900">What this tool does</h2>
        <p>
          This free online PDF to JPG converter helps you turn document pages into clean image files without
          installing software. It is ideal when you need to share report pages on social media, upload
          previews to websites, or save specific sections of a PDF as visual assets for presentations. No
          signup required, and the flow works instantly in your browser.
        </p>
        <p>
          Our tool is designed around speed and reliability for global users, including USA-based teams
          working on marketing, ecommerce, and internal documentation. You can convert one page or a
          multi-page file and download outputs quickly. Secure and private processing is built into the
          experience so you can work with confidence.
        </p>

        <h2 className="text-base font-semibold text-zinc-900">How to Use</h2>
        <ol className="list-inside list-decimal space-y-2">
          <li>Upload your PDF file from mobile or desktop.</li>
          <li>Wait while each page is rendered and converted into JPG format.</li>
          <li>Preview output pages and download one image or all pages as ZIP.</li>
          <li>Use the images for web publishing, social sharing, or email.</li>
        </ol>

        <h2 className="text-base font-semibold text-zinc-900">Best Use Cases</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Creating image previews for ecommerce listings and landing pages.</li>
          <li>Sharing single PDF pages on WhatsApp, Slack, and email threads.</li>
          <li>Converting lecture notes and handouts into easy-to-view image files.</li>
          <li>Preparing document pages for social platforms and presentations.</li>
        </ul>

        <h2 className="text-base font-semibold text-zinc-900">Benefits</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Free online tool with no signup required.</li>
          <li>Works instantly in your browser on any modern device.</li>
          <li>Secure and private processing with a simple interface.</li>
          <li>High-quality output for practical business and student use.</li>
        </ul>

        <h2 className="text-base font-semibold text-zinc-900">Pro Tips</h2>
        <p>
          For long PDFs, use ZIP download to keep all converted images organized in one step. If text
          sharpness matters, begin with the cleanest source PDF available. You can also extract only the
          pages you need and keep your final files lighter for faster uploads and better UX.
        </p>
        <p>
          If you need the reverse workflow, use{" "}
          <Link href="/tools/jpg-to-pdf" className="font-medium text-zinc-900 underline">
            JPG to PDF tool
          </Link>{" "}
          and{" "}
          <Link href="/tools/image-compressor" className="font-medium text-zinc-900 underline">
            Image Compressor
          </Link>{" "}
          to build a complete document optimization pipeline.
        </p>

        <h2 className="text-base font-semibold text-zinc-900">FAQ</h2>
        <div className="space-y-3">
          <p>
            <strong>Is this converter really free?</strong> Yes, it is a free online tool and you can use
            it without creating an account.
          </p>
          <p>
            <strong>Can I convert multi-page PDFs?</strong> Yes, each page is converted and you can download
            all pages as a ZIP.
          </p>
          <p>
            <strong>Is my data processed securely?</strong> The tool is built for secure and private
            processing with a straightforward browser experience.
          </p>
          <p>
            <strong>Can I use these JPG files for websites?</strong> Yes, they are useful for web previews,
            blog visuals, and product documentation.
          </p>
        </div>
      </section>
      <RelatedToolsSection currentToolSlug="pdf-to-jpg" />
    </ToolPageLayout>
  );
}
