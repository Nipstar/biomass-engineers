import Link from "next/link";
import { site } from "@/lib/site";

const servicesList = [
  { label: "Installation", href: "/biomass-boiler-installation" },
  { label: "Servicing & Maintenance", href: "/biomass-boiler-servicing-and-maintenance" },
  { label: "Servicing & Repair", href: "/biomass-boiler-servicing-and-repair" },
  { label: "Commercial Service", href: "/commercial-biomass-boiler-service" },
  { label: "Parts & Spares", href: "/biomass-boiler-parts-and-spares" },
  { label: "District Heating", href: "/district-heating-biomass" },
  { label: "Coded Welding", href: "/services/coded-welding" },
];

const companyList = [
  { label: "About", href: "/about" },
  { label: "Our Team", href: "/about/our-team" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const accreditations = ["HETAS Registered", "RHI Compliance", "Public Liability Insured", "Land Energy Partner"];

export function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[var(--cream)] pt-16 pb-8">
      <div className="container-bx px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl font-extrabold text-[var(--amber)]">
            Biomass Engineers
          </div>
          <div className="text-sm text-[var(--cream-dark)] mb-4">Limited</div>
          <p className="text-sm text-[var(--cream-dark)] mb-4">
            Specialist biomass boiler installation, servicing and repairs. HETAS registered, RHI compliant. South West specialist with UK-wide coverage.
          </p>
          <div className="space-y-1 text-sm">
            <a href={site.phoneEnquiriesHref} className="block hover:text-[var(--amber)]">
              {site.phoneEnquiries}
            </a>
            <a href={site.emailHref} className="block hover:text-[var(--amber)] break-all">
              {site.email}
            </a>
            <div className="text-[var(--cream-dark)] space-y-0">
              <div>{site.address.streetAddress}</div>
              <div>{site.address.locality}, {site.address.region} {site.address.postalCode}</div>
            </div>
          </div>
        </div>

        <FooterCol title="Services" items={servicesList} />
        <FooterCol title="Company" items={companyList} />

        <div>
          <div className="font-display text-base font-bold text-[var(--amber)] mb-4 tracking-wide">
            ACCREDITATIONS
          </div>
          <div className="flex flex-wrap gap-2">
            {accreditations.map((a) => (
              <span
                key={a}
                className="inline-block text-xs px-3 py-2 border-2 border-[var(--amber)] text-[var(--amber)] font-semibold"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container-bx px-4 mt-12 pt-6 border-t border-[var(--mid)] flex flex-col md:flex-row justify-between gap-3 text-xs text-[var(--cream-dark)]">
        <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-[var(--amber)]">Privacy Policy</Link>
          <Link href="/cookie-policy" className="hover:text-[var(--amber)]">Cookie Policy</Link>
          <Link href="/sitemap" className="hover:text-[var(--amber)]">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="font-display text-base font-bold text-[var(--amber)] mb-4 tracking-wide">
        {title.toUpperCase()}
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="hover:text-[var(--amber)] text-[var(--cream-dark)]">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
