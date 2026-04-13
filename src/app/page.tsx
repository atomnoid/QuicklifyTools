import type { Metadata } from "next";
import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ToolCard } from "@/components/ToolCard";
import { seoKeywords, site, tools } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Online Tools for Images & PDFs – Fast & Simple",
  description:
    "Free online tools for students and creators. Use the fastest file converter online with no login tools free and unlimited file tools free workflows.",
  keywords: seoKeywords,
  openGraph: {
    title: "Free Online Tools for Images & PDFs – Fast & Simple",
    description:
      "Image compressor online free, PDF to JPG converter free, and JPG to PDF converter online in one clean, fast website.",
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: "/" },
};

function CompressIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
      />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
  );
}

function JpgIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 6h16M4 10h4"
      />
    </svg>
  );
}

const icons = {
  "image-compressor": <CompressIcon />,
  "pdf-to-jpg": <PdfIcon />,
  "jpg-to-pdf": <JpgIcon />,
} as const;

export default function HomePage() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/tools/{tool}`,
      "query-input": "required name=tool",
    },
  };

  return (
    <div>
      <section className="border-b border-border bg-gradient-to-b from-white to-surface px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Free Online Tools for Images &amp; PDFs – Fast &amp; Simple
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
            Compress photos with Cloudinary, turn PDFs into JPGs with PDF.js, and merge JPEGs into a
            PDF — all in your browser with a clean, mobile-friendly experience on {site.domain}.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/tools/image-compressor"
              className="btn-primary"
            >
              Start compressing
            </Link>
            <Link
              href="/tools/pdf-to-jpg"
              className="btn-secondary"
            >
              PDF to JPG
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-center text-xl font-semibold text-zinc-900 sm:text-2xl">All tools</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-zinc-600">
          Pick a tool below. Upload your file, wait a moment, then download the result.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <li key={t.slug}>
              <ToolCard
                title={t.title}
                description={t.description}
                href={t.href}
                icon={icons[t.slug]}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
        <AdPlaceholder label="Between-content ad slot (responsive rectangle)" />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6">
        <div className="rounded-xl border border-border bg-white p-6 leading-relaxed text-zinc-600 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Introduction</h2>
          <p className="mt-4">
            QuicklifyTools is built for everyday tasks where speed and simplicity matter. Our goal is to
            offer free online tools for students, creators, freelancers, and business teams who need fast
            file processing without software installation. Every workflow is designed around one clear
            path: upload, process, download. If you want the fastest file converter online with a clean
            interface, this platform is made for you.
          </p>
          <p className="mt-4">
            We keep the user experience straightforward with no login tools free access, mobile-friendly
            layouts, and short processing times. You can optimize photos for websites, convert PDF pages
            into images for social sharing, or combine JPG files into one PDF for assignment and office
            submissions. For users who handle files daily, the biggest benefit is consistency: every tool
            works similarly, so you do not relearn the interface each time.
          </p>

          <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-900">Features</h2>
          <p className="mt-4">
            The image workflow supports practical targets such as compress image to 10kb, compress image
            to 20kb, and compress image to 50kb when you need specific upload limits. We focus on reduce
            image size without losing quality and realistic outcomes like up to 90% image compression
            depending on source file type and dimensions. You can also make image smaller for WhatsApp or
            compress image for Instagram upload with a few taps.
          </p>
          <p className="mt-4">
            On the PDF side, we support pdf to jpg high quality free conversion and convert pdf to image
            without losing quality for pages that need clear details. The reverse tool helps with jpg to
            pdf in seconds for document uploads. These utilities are built as a no signup pdf converter
            experience and designed for unlimited file tools free access for regular usage.
          </p>

          <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-900">Why choose us</h2>
          <p className="mt-4">
            We prioritize trust and clarity. QuicklifyTools avoids fake promises, keeps ad areas clean,
            and explains output expectations honestly. For example, compression depends on file structure,
            so we use phrases like up to 90% image compression rather than guaranteed fixed percentages.
            This keeps the site AdSense friendly and useful for long-term users.
          </p>
          <p className="mt-4">
            The project is also optimized for search visibility and social sharing with structured data,
            metadata, Open Graph tags, and internal linking. If you are searching for the best free pdf
            converter online 2026, this site combines practical tools with helpful guides so you can get
            results quickly and understand best practices.
          </p>

          <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-900">Tool highlights</h2>
          <div className="mt-4 space-y-3">
            <p>
              <Link href="/tools/image-compressor" className="font-medium text-zinc-900 underline">
                Image Compressor
              </Link>{" "}
              — Built for quick web optimization, social uploads, and file-limit targets.
            </p>
            <p>
              <Link href="/tools/pdf-to-jpg" className="font-medium text-zinc-900 underline">
                PDF to JPG
              </Link>{" "}
              — Export clean pages for sharing, previews, and image-based workflows.
            </p>
            <p>
              <Link href="/tools/jpg-to-pdf" className="font-medium text-zinc-900 underline">
                JPG to PDF
              </Link>{" "}
              — Merge image sets into one document for school, business, and forms.
            </p>
          </div>

          <h3 className="mt-8 text-xl font-semibold tracking-tight text-zinc-900">Guides</h3>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <Link href="/guides/how-to-compress-image-to-50kb" className="text-zinc-900 underline">
                How to compress image to 50kb
              </Link>
            </li>
            <li>
              <Link
                href="/guides/compress-image-for-whatsapp-instagram"
                className="text-zinc-900 underline"
              >
                Compress image for WhatsApp &amp; Instagram
              </Link>
            </li>
            <li>
              <Link
                href="/guides/best-free-pdf-converter-online-guide"
                className="text-zinc-900 underline"
              >
                Best free PDF converter online guide
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
    </div>
  );
}
