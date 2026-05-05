import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/site";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Free Online Tools - Image Compressor, PDF Converter",
  description: "Compress images, convert PDF to JPG, merge JPGs to PDF - fast, free, and mobile-friendly tools.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Free Online Tools
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Fast, free, and mobile-friendly tools for your daily tasks
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={tool.href}
            className="group rounded-xl border border-border bg-surface p-6 transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-700">
              {tool.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              {tool.description}
            </p>
            <div className="mt-4 text-sm font-medium text-zinc-900 group-hover:text-zinc-700">
              Open Tool →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
