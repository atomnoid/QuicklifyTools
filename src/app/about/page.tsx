import type { Metadata } from "next";
import Link from "next/link";
import { seoKeywords, site, tools } from "@/lib/site";

export const metadata: Metadata = {
  title: "About QuicklifyTools | Fast File Conversion",
  description:
    "Learn how QuicklifyTools delivers free online tools for students with practical image and PDF workflows.",
  keywords: seoKeywords,
  openGraph: {
    title: `About ${site.name}`,
    description: `Learn how ${site.name} delivers fast image and PDF utilities.`,
    url: `${site.url}/about`,
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">About {site.name}</h1>
      <div className="mt-6 space-y-4 leading-relaxed text-zinc-600">
        <p>
          {site.name} ({site.domain}) is a small suite of free, browser-friendly tools for everyday
          image and PDF tasks. We focus on speed, clarity, and mobile layouts so you can get files
          processed quickly without installing software. Our product direction is simple: build the
          most reliable online file converter experience with straightforward access for everyone.
        </p>
        <p>
          The image compressor uses{" "}
          <a
            href="https://cloudinary.com"
            className="font-medium text-zinc-900 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloudinary
          </a>{" "}
          on the server for smart quality optimization. PDF-to-JPG conversion runs entirely in your
          browser with{" "}
          <a
            href="https://mozilla.github.io/pdf.js/"
            className="font-medium text-zinc-900 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF.js
          </a>
          . JPG-to-PDF merges your photos into a PDF locally as well.
        </p>
        <h2 className="mt-10 text-xl font-semibold text-zinc-900">Tools</h2>
        <ul className="mt-3 list-inside list-disc space-y-2">
          {tools.map((t) => (
            <li key={t.slug}>
              <Link href={t.href} className="font-medium text-zinc-900 underline hover:no-underline">
                {t.title}
              </Link>
              {" — "}
              {t.description}
            </li>
          ))}
        </ul>
        <h2 className="mt-10 text-xl font-semibold text-zinc-900">Guides</h2>
        <ul className="mt-3 list-inside list-disc space-y-2">
          <li>
            <Link href="/guides/how-to-compress-image-to-50kb" className="font-medium text-zinc-900 underline">
              How to compress image to 50kb
            </Link>
          </li>
          <li>
            <Link href="/guides/compress-image-for-whatsapp-instagram" className="font-medium text-zinc-900 underline">
              Compress image for WhatsApp &amp; Instagram
            </Link>
          </li>
          <li>
            <Link href="/guides/best-free-pdf-converter-online-guide" className="font-medium text-zinc-900 underline">
              Best free PDF converter online guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
