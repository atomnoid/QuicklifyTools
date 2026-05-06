import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogs } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/tools",
    "/guides/how-to-compress-image-to-50kb",
    "/guides/compress-image-for-whatsapp-instagram",
    "/guides/best-free-pdf-converter-online-guide",
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const toolPages: MetadataRoute.Sitemap = [
    "/tools/image-compressor",
    "/tools/pdf-to-jpg",
    "/tools/jpg-to-pdf",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${site.url}/blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...toolPages, ...blogPages];
}
