import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { blogs } from "@/lib/blogs";
import { buildPageMetadata, site } from "@/lib/site";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import fs from "fs";
import path from "path";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata(props: BlogPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return buildPageMetadata({
    title: blog.title,
    description: blog.description,
    path: `/blog/${blog.slug}`,
  });
}

async function getBlogContent(slug: string) {
  const filePath = path.join(process.cwd(), `blog-${slug.replace(/-/g, '-')}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent;
}

export default async function BlogPage(props: BlogPageProps) {
  const { slug } = await props.params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const content = await getBlogContent(blog.slug);

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    image: `${site.url}/favicon.svg`,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/favicon.svg`,
      },
    },
    datePublished: blog.date,
    dateModified: blog.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${blog.slug}`,
    },
  };

  return (
    <div>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-zinc-600 hover:text-zinc-900">
            Home
          </Link>
          <span className="mx-2 text-zinc-400">/</span>
          <Link href="/blog" className="text-zinc-600 hover:text-zinc-900">
            Blog
          </Link>
          <span className="mx-2 text-zinc-400">/</span>
          <span className="text-zinc-900">{blog.title}</span>
        </nav>

        <div className="mb-6 inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-zinc-600">
          {blog.category}
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
          {blog.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          {blog.description}
        </p>

        <div className="mt-4 text-sm text-zinc-500">
          Published on{" "}
          {new Date(blog.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>

        <div className="mx-auto mt-8 max-w-5xl px-4 sm:px-6">
          <AdPlaceholder label="Blog header ad slot (responsive rectangle)" />
        </div>

        <div className="prose prose-zinc prose-headings:font-semibold prose-h2:text-2xl prose-h3:text-xl prose-p:text-base prose-p:leading-relaxed prose-a:text-zinc-900 prose-a:underline prose-a:hover:text-zinc-700 prose-strong:text-zinc-900 prose-ul:list-disc prose-ol:list-decimal prose-li:my-2 mx-auto mt-8 max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6">
          <AdPlaceholder label="Blog footer ad slot (responsive rectangle)" />
        </div>

        <div className="mt-12 rounded-xl border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold text-zinc-900">Related Articles</h3>
          <div className="mt-4 space-y-3">
            {blogs
              .filter((b) => b.slug !== blog.slug && b.category === blog.category)
              .slice(0, 3)
              .map((relatedBlog) => (
                <Link
                  key={relatedBlog.slug}
                  href={`/blog/${relatedBlog.slug}`}
                  className="block rounded-lg border border-border bg-white p-4 transition hover:shadow-md"
                >
                  <h4 className="font-medium text-zinc-900">{relatedBlog.title}</h4>
                  <p className="mt-1 text-sm text-zinc-600 line-clamp-2">
                    {relatedBlog.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
    </div>
  );
}
