import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  readTime: string;
};

export type Post = PostMeta & { content: string };

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<PostMeta, "slug">) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): Post {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return { slug, content, ...(data as Omit<PostMeta, "slug">) };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

// Per-post unique image map. Avoids reuse of images already shown elsewhere on
// the homepage (case-study cards use 350kw-district-heating, fuel-delivery-and-storage,
// heat-matrix-anaerobic). Every post gets a different image so any 3 surfaced
// on the homepage feed are guaranteed unique.
const POST_IMAGES: Record<string, string> = {
  "agricultural-biomass-heating": "/images/canva/landscape/waste-wood-shredder-with-overband-magnets.webp",
  "biomass-boiler-installation-what-to-expect": "/images/canva/landscape/ariterm-boiler-service.webp",
  "choosing-a-biomass-boiler-froling-hargassner-herz": "/images/canva/square/frolig-boiler.webp",
  "commercial-biomass-heating-is-it-right-for-your-business": "/images/canva/landscape/waste-wood-boiler.webp",
  "common-biomass-boiler-faults": "/images/canva/landscape/9.webp",
  "district-heating-with-biomass": "/images/canva/landscape/bespoke-concentration-unit.webp",
  "how-often-should-you-service-your-biomass-boiler": "/images/canva/landscape/biomass-boiler-controls.webp",
  "understanding-the-rhi-keeping-your-payments": "/images/canva/square/biomass-controller.webp",
  "what-to-do-when-biomass-boiler-stops-working": "/images/canva/landscape/food-waste-to-energy-unit.webp",
  "why-fuel-quality-matters": "/images/canva/square/tipped-fuel-delivery.webp",
  "wood-pellet-vs-wood-chip": "/images/canva/square/3.webp",
};

export function blogImageForPost(slug: string): string {
  return POST_IMAGES[slug] ?? "/images/canva/landscape/heat-matrix-anearobic-boiler.webp";
}
