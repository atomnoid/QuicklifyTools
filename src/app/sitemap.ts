import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/tools/image-compressor",
    "/tools/pdf-to-jpg",
    "/tools/jpg-to-pdf",
    "/guides/how-to-compress-image-to-50kb",
    "/guides/compress-image-for-whatsapp-instagram",
    "/guides/best-free-pdf-converter-online-guide",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/tools") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/tools") ? 0.9 : 0.7,
  }));
}
