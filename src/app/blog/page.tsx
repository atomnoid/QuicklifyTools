import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { buildPageMetadata, site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog - Tips for Indian Businesses, Creators & Website Owners",
  description:
    "Expert tips and guides for Indian small businesses, Instagram creators, and website owners. Learn about reviews, social media growth, AI tools, SEO, and earning online.",
  path: "/blog",
});

export default function BlogPage() {
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const regularBlogs = blogs.filter((blog) => !blog.featured);

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "QuicklifyTools Blog",
    description: "Tips for Indian businesses, creators, and website owners",
    url: `${site.url}/blog`,
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      url: `${site.url}/blog/${blog.slug}`,
      datePublished: blog.date,
      description: blog.description,
    })),
  };

  return (
    <div>
      <section className="border-b border-border bg-gradient-to-b from-white to-surface px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Blog for Indian Businesses & Creators
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
            Practical tips, guides, and strategies for small business owners, Instagram creators, students, and
            freelancers in India. No fluff, just actionable advice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Featured Articles</h2>
        <p className="mt-2 text-sm text-zinc-600">Our most popular and helpful guides</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group rounded-xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-zinc-600">
                {blog.category}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700">
                {blog.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                {blog.description}
              </p>
              <div className="mt-4 text-xs text-zinc-500">
                {new Date(blog.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6 sm:pb-16">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">All Articles</h2>
        <p className="mt-2 text-sm text-zinc-600">Browse all our guides and tips</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regularBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group rounded-xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-zinc-600">
                {blog.category}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-700">
                {blog.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                {blog.description}
              </p>
              <div className="mt-4 text-xs text-zinc-500">
                {new Date(blog.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogStructuredData) }}
      />
    </div>
  );
}
