import type { Metadata } from "next";
import { buildPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy - QuicklifyTools Data and Cookie Policy",
  description:
    "Read QuicklifyTools privacy policy covering cookies, ad services, analytics, file processing, and how we protect user data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: April 12, 2026</p>

      <div className="mt-8 space-y-4 leading-relaxed text-zinc-600">
        <p>
          This Privacy Policy describes how {site.name} (&quot;we&quot;, &quot;us&quot;) handles
          information when you use {site.domain}. By using the site, you agree to this policy.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Files and processing</h2>
        <p>
          <strong>PDF to JPG</strong> and <strong>JPG to PDF</strong> run in your browser. Your files
          are not uploaded to our servers for those tools.
        </p>
        <p>
          <strong>Image compression</strong> sends your image to our server, which forwards it to{" "}
          <strong>Cloudinary</strong> for processing. Cloudinary&apos;s own terms and privacy policy
          apply to data they process. Do not upload sensitive or confidential images if you are
          uncomfortable with that flow.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Logs and analytics</h2>
        <p>
          We may collect basic technical data (for example, IP address, browser type, and pages
          visited) through standard server logs or analytics tools to keep the service secure and
          understand usage. We do not sell your personal information.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Cookies</h2>
        <p>
          We use only cookies and similar technologies that are necessary for the site to function
          or that you explicitly accept (for example, analytics, if enabled).
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Advertising and AdSense</h2>
        <p>
          We may display third-party ads, including Google AdSense. Advertising partners may use cookies or
          similar technologies to deliver relevant ads and measure campaign performance. You can manage ad
          personalization through your Google ad settings.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Children</h2>
        <p>
          The site is not directed at children under 13, and we do not knowingly collect their
          personal information.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Changes</h2>
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date at the top
          will change when we do.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Contact</h2>
        <p>
          For privacy questions, contact us via the email listed on our{" "}
          <a href="/contact" className="text-zinc-900 underline">
            Contact
          </a>{" "}
          page.
        </p>
        <p>
          You can learn more about usage patterns and tool behavior on our{" "}
          <a href="/about" className="text-zinc-900 underline">
            About page
          </a>{" "}
          and in our conversion guides.
        </p>
      </div>
    </div>
  );
}
