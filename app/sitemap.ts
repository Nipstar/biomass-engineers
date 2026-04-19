import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { servicePages } from "@/lib/services";
import { brands } from "@/lib/brands";
import { caseStudies } from "@/lib/caseStudies";
import { locations } from "@/lib/locations";
import { getAllSlugs } from "@/lib/blog";

const base = site.url;

const staticRoutes = [
  "/",
  "/about",
  "/about/our-team",
  "/about/accreditations",
  "/affiliate-companies",
  "/blog",
  "/case-studies",
  "/contact",
  "/cookie-policy",
  "/existing-biomass-boilers",
  "/faqs",
  "/gallery",
  "/privacy-policy",
  "/renewable-heat-incentive-rhi",
  "/sitemap",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.8,
  }));

  const services: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${base}/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const brandPages: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${base}/biomass-boilers/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationPages: MetadataRoute.Sitemap = Array.from(new Map(locations.map(l => [`${base}/${l.slug}`, l])).values()).map((l) => ({
    url: `${base}/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...statics, ...services, ...caseStudyPages, ...locationPages, ...blogPosts];
}
