export const site = {
  name: "Biomass Engineers Limited",
  tagline: "Specialist Biomass Boiler Installation, Servicing & Repairs",
  phoneEnquiries: "07855 586555",
  phoneTechnical: "07855 586555",
  phoneE164: "+447855586555",
  phoneEnquiriesHref: "tel:+447855586555",
  phoneTechnicalHref: "tel:+447855586555",
  email: "admin@biomass-engineers.co.uk",
  emailHref: "mailto:admin@biomass-engineers.co.uk",
  address: {
    locality: "Exmouth",
    region: "Devon",
    country: "GB",
    streetAddress: "Mirramar, Bassetts Gardens",
    postalCode: "EX8 4EE",
  },
  url: "https://biomass-engineers.co.uk",
  coverage: "Bristol – Bournemouth – Penzance triangle · Based in Exmouth, Devon",
  hetasUrl: "https://www.hetas.co.uk/business/biomass-engineers-ltd/",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Existing Boilers", href: "/existing-biomass-boilers" },
  {
    label: "Services",
    href: "/biomass-boiler-installation",
    children: [
      { label: "Installation", href: "/biomass-boiler-installation" },
      { label: "Installation Process", href: "/biomass-boiler-installation/installation-process" },
      { label: "Servicing & Maintenance", href: "/biomass-boiler-servicing-and-maintenance" },
      { label: "Servicing & Repair", href: "/biomass-boiler-servicing-and-repair" },
      { label: "Commercial Service", href: "/commercial-biomass-boiler-service" },
      { label: "Engineer Services", href: "/biomass-engineer-services" },
      { label: "Servicing Cost", href: "/biomass-boiler-servicing-cost" },
      { label: "Parts & Spares", href: "/biomass-boiler-parts-and-spares" },
      { label: "Specification & Design", href: "/biomass-boiler-specification-system-design" },
      { label: "District Heating", href: "/district-heating-biomass" },
      { label: "Coded Welding", href: "/services/coded-welding" },
    ],
  },
  { label: "RHI", href: "/renewable-heat-incentive-rhi" },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Accreditations", href: "/about/accreditations" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQs", href: "/faqs" },
      { label: "Affiliate Companies", href: "/affiliate-companies" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  { slug: "biomass-boiler-installation", label: "Biomass Boiler Installation" },
  { slug: "biomass-boiler-servicing-and-maintenance", label: "Servicing & Maintenance" },
  { slug: "biomass-boiler-servicing-and-repair", label: "Servicing & Repair" },
  { slug: "commercial-biomass-boiler-service", label: "Commercial Service" },
  { slug: "biomass-engineer-services", label: "Engineer Services" },
  { slug: "biomass-boiler-servicing-cost", label: "Servicing Cost" },
  { slug: "biomass-boiler-parts-and-spares", label: "Parts & Spares" },
  { slug: "biomass-boiler-specification-system-design", label: "Specification & Design" },
  { slug: "district-heating-biomass", label: "District Heating" },
  { slug: "services/coded-welding", label: "Coded Welding" },
] as const;

export const serviceFormOptions = [
  "Installation",
  "Annual Service",
  "Repair & Breakdown",
  "RHI Compliance Check",
  "Standalone Visit",
  "Commercial Service",
  "Parts Enquiry",
  "Other",
] as const;

export type ServiceFormOption = (typeof serviceFormOptions)[number];
