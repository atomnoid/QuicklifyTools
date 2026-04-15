import Link from "next/link";
import { site, tools } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold text-zinc-900">{site.name}</p>
            <p className="mt-2 text-sm text-zinc-600">
              Free online tools for images and PDFs. Fast, simple, and mobile-friendly.
            </p>
            <p className="mt-4 text-sm text-zinc-600">
              Contact:{" "}
              <a href="mailto:ayushsocials511@gmail.com" className="underline hover:no-underline">
                ayushsocials511@gmail.com
              </a>
            </p>
            <Link href="/contact" className="mt-2 inline-block text-sm text-zinc-700 underline hover:no-underline">
              Contact Us
            </Link>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900">Tools</p>
            <ul className="mt-3 space-y-2">
              {tools.map((t) => (
                <li key={t.slug}>
                  <Link href={t.href} className="text-sm text-zinc-600 hover:text-zinc-900">
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900">Legal</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-zinc-600 hover:text-zinc-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-zinc-600 hover:text-zinc-900">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-zinc-600 hover:text-zinc-900">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/guides/best-free-pdf-converter-online-guide" className="text-sm text-zinc-600 hover:text-zinc-900">
                  Blog / Guides
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-8 text-center text-xs text-zinc-500">
          © {year} {site.domain}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
