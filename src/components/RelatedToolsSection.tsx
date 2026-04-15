import Link from "next/link";
import type { ToolSlug } from "@/lib/site";
import { tools } from "@/lib/site";

type RelatedToolsSectionProps = {
  currentToolSlug?: ToolSlug;
};

export function RelatedToolsSection({ currentToolSlug }: RelatedToolsSectionProps) {
  const related = tools.filter((tool) => tool.slug !== currentToolSlug).slice(0, 3);

  return (
    <section className="mt-8 rounded-xl border border-border bg-surface/60 p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-zinc-900">🔥 Try These Tools Next</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        Keep your workflow moving with these free online tools. No signup required, and each tool works
        instantly in your browser.
      </p>
      <ul className="mt-4 space-y-3">
        {related.map((tool) => (
          <li key={tool.slug}>
            <Link href={tool.href} className="font-medium text-zinc-900 underline hover:no-underline">
              {tool.title}
            </Link>
            <p className="mt-1 text-sm text-zinc-600">{tool.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
