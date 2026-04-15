import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact QuicklifyTools - Support and Business Inquiries",
  description:
    "Contact QuicklifyTools for support, partnerships, or feedback. Reach us by email or contact form for fast assistance.",
  path: "/contact",
});

export default function ContactPage() {
  const email = "ayushsocials511@gmail.com";

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-20">
      <div className="card-soft w-full p-8 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          Have a question about our free online tools? Reach us by email or use the contact form below.
          We are happy to help with support, quality feedback, and business inquiries.
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
      <ContactForm />
    </div>
  );
}
