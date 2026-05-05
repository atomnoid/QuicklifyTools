import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogs } from "@/lib/blogs";

/**
 * Dynamic Sitemap for Next.js App Router
 * 
 * This file automatically generates a sitemap.xml that includes:
 * - Homepage (/)
 * - All blog posts (/blog/[slug])
 * 
 * The sitemap is accessible at: https://quicklifytools.com/sitemap.xml
 * 
 * SEO Best Practices:
 * - Includes all important pages
 * - Provides lastModified dates for search engines
 * - Uses absolute URLs with the domain
 * - Automatically updates when blog data changes
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get current date for homepage lastModified
  const currentDate = new Date();

  // Base URL from site configuration
  const baseUrl = site.url;

  // Static pages (homepage)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  // Dynamic blog pages
  // Maps over all blogs and creates sitemap entries for each
  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    // Use the blog's date as lastModified (convert string to Date)
    lastModified: new Date(blog.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Combine static and dynamic pages
  // You can easily add more pages here (tools, guides, etc.)
  return [...staticPages, ...blogPages];
}
