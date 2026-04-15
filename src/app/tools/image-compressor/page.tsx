import type { Metadata } from "next";
import Link from "next/link";
import { RelatedToolsSection } from "@/components/RelatedToolsSection";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ImageCompressorTool } from "@/components/tools/ImageCompressorTool";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Free Online Image Compressor - Fast, No Signup Required",
  description:
    "Compress JPG, PNG, and WebP images instantly with secure and private processing. Free online image compressor that works in your browser with no signup required.",
  path: "/tools/image-compressor",
});

export default function ImageCompressorPage() {
  return (
    <ToolPageLayout
      title="Image Compressor"
      description="Free online image compressor that helps you reduce file size quickly. No signup required and works instantly in your browser."
      toolHref="/tools/image-compressor"
      icon={
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
      }
    >
      <ImageCompressorTool />
      <section className="mt-8 space-y-4 border-t border-border pt-8 text-sm leading-relaxed text-zinc-600">
        <h2 className="text-lg font-semibold text-zinc-900">What this tool does</h2>
        <p>
          QuicklifyTools Image Compressor is built for real-world upload problems: oversized product photos,
          profile pictures that fail document portals, and blog images that slow down your pages. This free
          online tool gives you a clean upload-to-download workflow with no signup required. It works
          instantly in your browser and is optimized for both desktop and mobile users.
        </p>
        <p>
          The compression engine focuses on balancing file size and quality, so your image remains usable
          for social posts, websites, and email attachments. Whether you need to compress image to 50KB for
          an application form, or simply reduce a hero image for faster page speed, the process is simple
          and reliable. Secure and private processing is a core part of the experience, and we never add
          distracting complexity.
        </p>

        <h2 className="text-base font-semibold text-zinc-900">How to Use</h2>
        <ol className="list-inside list-decimal space-y-2">
          <li>Upload a JPG, PNG, or WebP image from your device.</li>
          <li>Let the tool process your file and optimize quality automatically.</li>
          <li>Review the output file size and visual quality.</li>
          <li>Download the compressed image and upload it where needed.</li>
        </ol>

        <h2 className="text-base font-semibold text-zinc-900">Best Use Cases</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Compressing images for Instagram posts, reels covers, and story uploads.</li>
          <li>Making images smaller for faster website performance and SEO.</li>
          <li>Reducing file size for email attachments and team communication.</li>
          <li>Meeting strict file limits for forms, resumes, and online applications.</li>
        </ul>

        <h2 className="text-base font-semibold text-zinc-900">Benefits</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Free online tool with no signup required.</li>
          <li>Works instantly in your browser on mobile and desktop.</li>
          <li>Secure and private processing with a clean user experience.</li>
          <li>Fast workflow that saves time for creators, freelancers, and teams.</li>
        </ul>

        <h2 className="text-base font-semibold text-zinc-900">Pro Tips</h2>
        <p>
          Start with your original image whenever possible, because repeated compression can gradually reduce
          clarity. If text appears soft after compression, resize the source image before running another
          pass. For web publishing, compress first, then upload to your CMS to reduce bandwidth costs and
          improve page speed.
        </p>
        <p>
          If your project includes documents, pair this with{" "}
          <Link href="/tools/pdf-to-jpg" className="font-medium text-zinc-900 underline">
            PDF to JPG tool
          </Link>{" "}
          and{" "}
          <Link href="/tools/jpg-to-pdf" className="font-medium text-zinc-900 underline">
            JPG to PDF tool
          </Link>{" "}
          so you can handle both visual and document workflows in one place.
        </p>

        <h2 className="text-base font-semibold text-zinc-900">FAQ</h2>
        <div className="space-y-3">
          <p>
            <strong>Is this image compressor free to use?</strong> Yes. It is a free online tool with no
            signup required.
          </p>
          <p>
            <strong>Does it work on iPhone and Android?</strong> Yes. It works instantly in your browser on
            mobile and desktop devices.
          </p>
          <p>
            <strong>Can I compress image to 50KB exactly?</strong> You can usually get close, but exact file
            size depends on image details and dimensions.
          </p>
          <p>
            <strong>Is my image data private?</strong> We prioritize secure and private processing and keep
            the workflow focused on safe file handling.
          </p>
        </div>
      </section>
      <RelatedToolsSection currentToolSlug="image-compressor" />
    </ToolPageLayout>
  );
}
