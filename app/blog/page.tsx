import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CTAStrip } from "@/components/CTAStrip";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biomass Boiler Blog & Guides",
  description:
    "Practical guides on biomass boiler servicing, installation, fuel, RHI compliance and commercial heating systems from Biomass Engineers Limited.",
};

const categoryColour: Record<string, string> = {
  Servicing: "bg-[var(--green)] text-[var(--cream)]",
  Fuel: "bg-[var(--amber)] text-[var(--charcoal)]",
  RHI: "bg-[var(--charcoal)] text-[var(--cream)]",
  Installation: "bg-[var(--green-mid)] text-[var(--cream)]",
  Troubleshooting: "bg-[var(--amber)] text-[var(--charcoal)]",
  Commercial: "bg-[var(--green)] text-[var(--cream)]",
  Agricultural: "bg-[var(--green-mid)] text-[var(--cream)]",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Hero
        eyebrow="Blog"
        title="Guides & insights"
        subtitle="Practical advice on biomass boilers — servicing, fuel, RHI, installation and commercial systems."
      />

      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-[var(--white)] border-2 border-[var(--charcoal)] p-8 mb-10 hover:offset-amber transition-all"
            >
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <span className={`text-xs font-semibold px-2 py-1 ${categoryColour[featured.category] ?? "bg-[var(--green)] text-[var(--cream)]"}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-[var(--muted)]">{featured.date}</span>
                <span className="text-xs text-[var(--muted)]">{featured.readTime}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-3 group-hover:text-[var(--amber)] transition-colors">
                {featured.title}
              </h2>
              <p className="text-[var(--mid)] max-w-2xl">{featured.description}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-[var(--green)] group-hover:text-[var(--amber)]">
                Read article →
              </span>
            </Link>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[var(--white)] border-2 border-[var(--charcoal)] p-6 flex flex-col hover:offset-amber transition-all"
              >
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 ${categoryColour[post.category] ?? "bg-[var(--green)] text-[var(--cream)]"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{post.readTime}</span>
                </div>
                <h2 className="font-display text-xl mb-2 group-hover:text-[var(--amber)] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--mid)] flex-1 mb-4">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--muted)]">{post.date}</span>
                  <span className="text-sm font-semibold text-[var(--green)] group-hover:text-[var(--amber)]">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
