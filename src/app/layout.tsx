import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { seoKeywords, site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "QuicklifyTools",
    template: "%s | QuicklifyTools",
  },
  description: site.description,
  keywords: seoKeywords,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} flex min-h-screen flex-col antialiased`}>
        <Header />
        <main className="flex-1">
          <div className="mx-auto max-w-5xl px-4 pb-4 pt-6 sm:px-6">
            <AdPlaceholder label="Header ad slot (728x90 or responsive)" />
          </div>
          {children}
          <div className="mx-auto max-w-5xl px-4 pb-10 pt-2 sm:px-6">
            <AdPlaceholder label="Footer ad slot (728x90 or responsive)" />
          </div>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
