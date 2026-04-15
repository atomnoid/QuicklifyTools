import type { Metadata } from "next";
import Link from "next/link";
import { RelatedToolsSection } from "@/components/RelatedToolsSection";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { JpgToPdfTool } from "@/components/tools/JpgToPdfTool";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Free Online JPG to PDF Converter - Fast, No Signup",
  description:
    "Combine JPG images into one PDF in seconds. Free online JPG to PDF converter with secure and private processing that works instantly in your browser.",
  path: "/tools/jpg-to-pdf",
});

export default function JpgToPdfPage() {
  return (
    <ToolPageLayout
      title="JPG to PDF"
      description="Convert one or more JPG images into a clean PDF instantly. Free online, no signup required, and built for secure and private processing."
      toolHref="/tools/jpg-to-pdf"
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
        <h2 className="text-lg font-semibold text-zinc-900">What this tool does</h2>
        <p>
          QuicklifyTools JPG to PDF Converter is built for users who want fast, professional file output
          without technical friction. Upload one image or a full set of JPG files, and the tool combines
          them into a single downloadable PDF. It is a free online tool with no signup required, designed
          for students, teams, and independent professionals.
        </p>
        <p>
          This page is especially helpful for common USA audience needs such as email attachments, school
          submissions, insurance documents, receipts, and business records. Because the workflow works
          instantly in your browser, you can run quick conversions from laptop or phone and keep momentum.
          Secure and private processing keeps the experience trustworthy and production-ready.
        </p>

        <h2 className="text-base font-semibold text-zinc-900">How to Use</h2>
        <ol className="list-inside list-decimal space-y-2">
          <li>Upload one or more JPG files in your preferred page order.</li>
          <li>Let the converter generate a combined PDF in seconds.</li>
          <li>Download the PDF and review page sequence and clarity.</li>
          <li>Share the final document through email, portal, or cloud storage.</li>
        </ol>

        <h2 className="text-base font-semibold text-zinc-900">Best Use Cases</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Combining scanned pages into one shareable document.</li>
          <li>Creating PDFs for college, legal, and HR upload portals.</li>
          <li>Merging receipts and proofs for accounting or reimbursement.</li>
          <li>Packaging visual reports or portfolios for client delivery.</li>
        </ul>

        <h2 className="text-base font-semibold text-zinc-900">Benefits</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Free online converter with no signup required.</li>
          <li>Works instantly in your browser on desktop and mobile.</li>
          <li>Secure and private processing with minimal steps.</li>
          <li>Professional PDF output that is ready to share.</li>
        </ul>

        <h2 className="text-base font-semibold text-zinc-900">Pro Tips</h2>
        <p>
          Rename files before upload (for example, page-1, page-2, page-3) so final PDF order is clear and
          predictable. If your images are too heavy, compress them first for smaller PDFs and faster email
          delivery. For polished results, avoid blurry source images and keep consistent orientation.
        </p>
        <p>
          To convert existing PDF pages into images first, use{" "}
          <Link href="/tools/pdf-to-jpg" className="font-medium text-zinc-900 underline">
            PDF to JPG
          </Link>{" "}
          and optimize large files with{" "}
          <Link href="/tools/image-compressor" className="font-medium text-zinc-900 underline">
            Image Compressor
          </Link>{" "}
          before creating your final document.
        </p>

        <h2 className="text-base font-semibold text-zinc-900">FAQ</h2>
        <div className="space-y-3">
          <p>
            <strong>Can I create one PDF from many images?</strong> Yes, select multiple JPG files and
            the tool will combine them in your chosen order.
          </p>
          <p>
            <strong>Do I need to create an account?</strong> No. This free online tool works with no signup
            required.
          </p>
          <p>
            <strong>Is the process browser-based?</strong> Yes, it works instantly in your browser across
            modern devices.
          </p>
          <p>
            <strong>Can I use this for business files?</strong> Yes, it is suitable for invoices, reports,
            receipts, and document submissions.
          </p>
        </div>
      </section>
      <RelatedToolsSection currentToolSlug="jpg-to-pdf" />
    </ToolPageLayout>
  );
}
