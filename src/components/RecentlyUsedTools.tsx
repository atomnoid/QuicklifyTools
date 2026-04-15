"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { tools } from "@/lib/site";

const STORAGE_KEY = "quicklify_recent_tools";

type ToolHref = (typeof tools)[number]["href"];

export function RecentlyUsedTools() {
  const [recentHrefs, setRecentHrefs] = useState<ToolHref[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as ToolHref[];
      if (Array.isArray(parsed)) {
        setRecentHrefs(parsed.slice(0, 3));
      }
    } catch {
      setRecentHrefs([]);
    }
  }, []);

  const items = useMemo(
    () => recentHrefs.map((href) => tools.find((tool) => tool.href === href)).filter(Boolean),
    [recentHrefs],
  );

  if (!items.length) return null;

  return (
    <section className="mx-auto mt-8 max-w-5xl px-4 pb-12 sm:px-6">
      <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900">Recently Used Tools</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Jump back into your previous tasks and continue where you left off.
        </p>
        <ul className="mt-4 space-y-2">
          {items.map((tool) => (
            <li key={tool!.href}>
              <Link href={tool!.href} className="text-sm font-medium text-zinc-900 underline hover:no-underline">
                {tool!.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
