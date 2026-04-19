import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import { servicePages as services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { locations } from "@/lib/locations";
import { caseStudies } from "@/lib/caseStudies";

const kindTitles = {
  servicing: "Servicing",
  maintenance: "Maintenance",
  repair: "Servicing & Repair",
  installers: "Installers",
} as const;

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Full sitemap for Biomass Engineers Limited — all pages, services, locations and resources.",
};

const mainPages = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/our-team" },
  { label: "Accreditations", href: "/about/accreditations" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Affiliate Companies", href: "/affiliate-companies" },
  { label: "Contact", href: "/contact" },
];

const infoPages = [
  { label: "Existing Biomass Boilers", href: "/existing-biomass-boilers" },
  { label: "Renewable Heat Incentive (RHI)", href: "/renewable-heat-incentive-rhi" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

type Group = { heading: string; links: { label: string; href: string }[] };

function SitemapGroup({ heading, links }: Group) {
  return (
    <div>
      <h2 className="font-display text-lg mb-3 text-[var(--amber)]">{heading}</h2>
      <ul className="space-y-1.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm hover:text-[var(--amber)] transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  const serviceLinks = services.map((s) => ({ label: s.h1, href: `/${s.slug}` }));
  const brandLinks = brands.map((b) => ({ label: b.name, href: `/biomass-boilers/${b.slug}` }));
  const locationLinks = locations.map((l) => ({ 
    label: `${l.city} — ${kindTitles[l.kind as keyof typeof kindTitles] || "Service"}`, 
    href: `/${l.slug}` 
  }));

  const uniqueLocationLinks = Array.from(new Map(locationLinks.map(l => [l.href, l])).values());
  const caseStudyLinks = caseStudies.map((c) => ({ label: c.title, href: `/case-studies/${c.slug}` }));

  return (
    <>
      <Hero
        eyebrow="Navigation"
        title="Sitemap"
        subtitle="Every page on the Biomass Engineers Limited website."
      />
      <section className="bg-[var(--cream)]">
        <div className="container-bx section px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <SitemapGroup heading="Main pages" links={mainPages} />
            <SitemapGroup heading="Services" links={serviceLinks} />
            <SitemapGroup heading="Brands" links={[{ label: "All Biomass Boilers", href: "/biomass-boilers" }, ...brandLinks]} />
            <SitemapGroup heading="Case Studies" links={[{ label: "All Case Studies", href: "/case-studies" }, ...caseStudyLinks]} />
            <SitemapGroup heading="Locations" links={uniqueLocationLinks} />
            <SitemapGroup heading="Information" links={infoPages} />
          </div>
        </div>
      </section>
    </>
  );
}
