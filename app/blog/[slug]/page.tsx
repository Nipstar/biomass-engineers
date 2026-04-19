import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";
import { JsonLd } from "@/components/JsonLd";
import { getAllSlugs, getPost } from "@/lib/blog";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return {
      title: post.title,
      description: post.description,
    };
  } catch {
    return {};
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    url: `${site.url}/blog/${post.slug}`,
  };

  const compiled = await compile(post.content, { outputFormat: "function-body" });
  const { default: Content } = await run(String(compiled), {
    ...(runtime as Parameters<typeof run>[1]),
    baseUrl: import.meta.url,
  });

  return (
    <>
      <JsonLd data={blogSchema} />
      <Hero
        eyebrow={post.category}
        title={post.title}
        subtitle={post.description}
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center mb-10 text-sm text-[var(--muted)] border-b-2 border-[var(--charcoal)] pb-6">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span className="font-semibold text-[var(--green)]">{post.category}</span>
            </div>

            <div className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:font-black prose-headings:leading-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[var(--mid)] prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-[var(--mid)] prose-ul:pl-5
              prose-ol:text-[var(--mid)] prose-ol:pl-5
              prose-li:mb-1.5
              prose-strong:text-[var(--charcoal)] prose-strong:font-semibold
              prose-a:text-[var(--green)] prose-a:underline hover:prose-a:text-[var(--amber)]
            ">
              <Content />
            </div>

            <div className="mt-12 pt-8 border-t-2 border-[var(--charcoal)] flex flex-wrap gap-4 items-center justify-between">
              <Link href="/blog" className="btn btn-green text-sm">← All articles</Link>
              <Link href="/contact" className="btn btn-green-solid text-sm">Talk to an engineer →</Link>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
