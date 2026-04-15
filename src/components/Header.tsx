"use client";

import Link from "next/link";
import { useState } from "react";
import { site, tools } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/guides/how-to-compress-image-to-50kb", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 transition hover:text-zinc-700"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-zinc-700 transition hover:bg-surface sm:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav className="hidden items-center gap-5 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2 py-1 text-sm font-medium text-zinc-600 transition hover:bg-surface hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-zinc-600 transition hover:bg-surface hover:text-zinc-900"
            >
              Tools
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-1 w-56 rounded-xl border border-border bg-white py-1 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {tools.map((t) => (
                <Link
                  key={t.slug}
                  href={t.href}
                  className="block px-4 py-2 text-sm text-zinc-700 hover:bg-surface"
                >
                  {t.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {open && (
        <div className="border-t border-border bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
          <div className="flex flex-col gap-1.5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Tools
            </p>
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={t.href}
                className="rounded-lg px-3 py-2 text-sm text-zinc-700 hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {t.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
