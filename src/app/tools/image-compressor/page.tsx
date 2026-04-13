import type { Metadata } from "next";
import { ToolPageLayout } from "@/components/ToolPageLayout";
import { ImageCompressorTool } from "@/components/tools/ImageCompressorTool";
import { seoKeywords, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fastest Image Compressor Online Free Tool",
  description:
    "Compress image to 10kb, 20kb, or 50kb with our fastest image compressor online free tool and reduce image size without losing quality.",
  keywords: seoKeywords,
  openGraph: {
    title: "Image Compressor Online Free",
    description:
      "Compress image without losing quality with Cloudinary-powered optimization and quick download.",
    url: `${site.url}/tools/image-compressor`,
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: "/tools/image-compressor" },
};

export default function ImageCompressorPage() {
  return (
    <ToolPageLayout
      title="Image Compressor"
      description="Upload an image. We send it to Cloudinary with automatic quality optimization, then you can download the smaller file."
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
        <h2 className="text-lg font-semibold text-zinc-900">
          Fast image optimization for social and web uploads
        </h2>
        <p>
          This page is designed for users who need the fastest image compressor online free experience
          without complicated options. You can compress image to 10kb for strict form limits, compress
          image to 20kb for lightweight previews, or compress image to 50kb for profile photos and
          documents. The optimization flow is built to reduce image size without losing quality in normal
          use cases, helping creators, students, and business teams publish faster files with less effort.
        </p>

        <h3 className="text-base font-semibold text-zinc-900">How to use</h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>Upload your image file from mobile or desktop.</li>
          <li>Wait while the compressor processes your file in seconds.</li>
          <li>Check original and output size, then download the result.</li>
        </ol>

        <h3 className="text-base font-semibold text-zinc-900">Features</h3>
        <ul className="list-inside list-disc space-y-2">
          <li>Supports practical targets like compress image to 10kb, 20kb, and 50kb.</li>
          <li>Cloudinary-powered optimization with up to 90% image compression on supported files.</li>
          <li>Simple upload and download workflow with no extra setup required.</li>
          <li>Useful for make image smaller for WhatsApp and compress image for Instagram upload.</li>
        </ul>

        <p>
          If your main goal is faster page speed, this utility helps you shrink large uploads before they
          reach your CMS or social channel. The result is often better engagement because images load
          quickly, especially on mobile data connections. It is also helpful when client portals reject
          oversized images and you need a quick conversion without opening design software.
        </p>
        <p>
          For best quality, start with the original file and avoid repeated re-compression. If you also
          need document conversion, visit our{" "}
          <a href="/tools/pdf-to-jpg" className="font-medium text-zinc-900 underline">
            PDF to JPG tool
          </a>{" "}
          and{" "}
          <a href="/tools/jpg-to-pdf" className="font-medium text-zinc-900 underline">
            JPG to PDF tool
          </a>{" "}
          to complete your full image and PDF workflow.
        </p>

        <h3 className="text-base font-semibold text-zinc-900">FAQ</h3>
        <div className="space-y-3">
          <p>
            <strong>Can I compress image to 50kb exactly?</strong> You can target this range, but exact
            output may vary based on image detail and dimensions.
          </p>
          <p>
            <strong>Will quality stay usable?</strong> In most cases yes, because the tool aims to reduce
            image size without losing quality for practical web and social usage.
          </p>
          <p>
            <strong>Can this help with WhatsApp and Instagram?</strong> Yes, you can make image smaller
            for WhatsApp and compress image for Instagram upload quickly from one page.
          </p>
        </div>
      </section>
    </ToolPageLayout>
  );
}
