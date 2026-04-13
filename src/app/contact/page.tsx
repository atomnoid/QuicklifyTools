import type { Metadata } from "next";
import { seoKeywords, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact QuicklifyTools Support Team",
  description:
    "Contact QuicklifyTools for support, feedback, or partnership requests related to image and PDF tools.",
  keywords: seoKeywords,
  openGraph: {
    title: `Contact ${site.name}`,
    description: `Get in touch with ${site.name} for support, feedback, or business questions.`,
    url: `${site.url}/contact`,
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const email = "ayushsocials511@gmail.com";

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-20">
      <div className="card-soft w-full p-8 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          If you have any questions, suggestions, or feedback, feel free to reach out to us.
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-7 inline-flex rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
        >
          {email}
        </a>

        <p className="mt-5 text-xs text-zinc-500 sm:text-sm">
          We usually respond within 24–48 hours.
        </p>
        <p className="mt-6 text-sm text-zinc-600">
          Need a quick answer? Visit{" "}
          <a href="/about" className="font-medium text-zinc-900 underline">
            About
          </a>{" "}
          or explore our{" "}
          <a href="/guides/best-free-pdf-converter-online-guide" className="font-medium text-zinc-900 underline">
            PDF converter guide
          </a>
          .
        </p>
      </div>
    </div>
  );
}
