import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/lib/site";
import { buildPageMetadata } from "@/lib/site";

interface ToolPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all tools at build time
export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// Generate metadata for each tool page
export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return buildPageMetadata({
    title: tool.title,
    description: tool.description,
    path: `/tools/${tool.slug}`,
  });
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-zinc-600 hover:text-zinc-900">
          Home
        </Link>
        <span className="mx-2 text-zinc-400">/</span>
        <Link href="/tools" className="text-zinc-600 hover:text-zinc-900">
          Tools
        </Link>
        <span className="mx-2 text-zinc-400">/</span>
        <span className="text-zinc-900">{tool.title}</span>
      </nav>

      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          {tool.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          {tool.description}
        </p>
      </div>

      <div className="mt-12 rounded-xl border border-border bg-surface p-8 text-center">
        <p className="text-zinc-600">
          Tool interface coming soon. This is a placeholder for the {tool.title} functionality.
        </p>
        <Link
          href="/tools"
          className="mt-6 inline-block rounded-lg bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800"
        >
          Back to Tools
        </Link>
      </div>
    </div>
  );
}
