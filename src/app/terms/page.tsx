import type { Metadata } from "next";
import { buildPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms and Conditions - QuicklifyTools Usage Terms",
  description:
    "Review QuicklifyTools terms and conditions for tool usage, service limitations, third-party services, and legal responsibilities.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: April 12, 2026</p>

      <div className="mt-8 space-y-4 leading-relaxed text-zinc-600">
        <p>
          Welcome to {site.domain}. These Terms &amp; Conditions (&quot;Terms&quot;) govern your
          use of {site.name}. If you do not agree, please do not use the site.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Use of the service</h2>
        <p>
          The tools are provided &quot;as is&quot; for lawful, personal, or internal business use.
          You are responsible for the files you upload or process and for complying with applicable
          laws and third-party rights (including copyrights and trademarks).
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">No warranties</h2>
        <p>
          We strive for reliability but do not guarantee uninterrupted or error-free operation.
          Output quality (for example, compression or conversion) may vary by file. You use the
          service at your own risk.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {site.name} and its operators are not liable for
          any indirect, incidental, special, consequential, or punitive damages, or for loss of data,
          profits, or business, arising from your use of the site.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Third-party services</h2>
        <p>
          Features such as image compression may rely on third-party providers (for example,
          Cloudinary). Their services are subject to their own terms. We are not responsible for
          third-party outages or actions.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Changes</h2>
        <p>
          We may modify these Terms or the site at any time. Continued use after changes constitutes
          acceptance of the updated Terms.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Contact</h2>
        <p>
          Questions about these Terms? Visit our{" "}
          <a href="/contact" className="text-zinc-900 underline">
            Contact
          </a>{" "}
          page.
        </p>
        <p>
          For practical usage examples, see our{" "}
          <a href="/guides/how-to-compress-image-to-50kb" className="text-zinc-900 underline">
            image compression guide
          </a>{" "}
          and{" "}
          <a href="/guides/best-free-pdf-converter-online-guide" className="text-zinc-900 underline">
            PDF converter guide
          </a>
          .
        </p>
      </div>
    </div>
  );
}
