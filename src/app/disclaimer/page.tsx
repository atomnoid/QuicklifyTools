import type { Metadata } from "next";
import { buildPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Disclaimer - QuicklifyTools Service and Content Notice",
  description:
    "Read the QuicklifyTools disclaimer on conversion accuracy, third-party dependencies, and user responsibilities when processing files.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Disclaimer</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: April 14, 2026</p>

      <div className="mt-8 space-y-4 leading-relaxed text-zinc-600">
        <p>
          The information and services on {site.domain} are provided for general informational and utility
          purposes only. While we aim for reliable results, we do not guarantee that every output will be
          complete, accurate, or suitable for your specific use case.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Tool output and quality</h2>
        <p>
          File conversion and compression quality depends on input files, resolution, format, and device
          conditions. Results may vary. You should review all output files before submitting them to
          official portals, clients, or institutions.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">No professional advice</h2>
        <p>
          Content on this website does not constitute legal, technical, or professional advice. If your
          workflow has strict compliance requirements, consult qualified professionals before relying on
          generated files.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">Third-party providers</h2>
        <p>
          Some features may rely on third-party services, including Cloudinary. We are not responsible for
          outages, policy changes, or behavior of third-party providers. Their terms and privacy policies
          apply when their services are used.
        </p>

        <h2 className="text-xl font-semibold text-zinc-900">User responsibility</h2>
        <p>
          You are responsible for ensuring that you have rights to upload and process your files and that
          your usage complies with applicable laws, copyrights, and platform rules.
        </p>
      </div>
    </div>
  );
}
