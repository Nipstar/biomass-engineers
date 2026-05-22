import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandPageTemplate } from "@/components/BrandPageTemplate";
import { brands, brandBySlug } from "@/lib/brands";

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.slug }));
}

type Props = { params: Promise<{ brand: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { brand } = await props.params;
  const b = brandBySlug(brand);
  if (!b) return {};
  return {
    title: `${b.name} Biomass Boiler Servicing, Installation & Repair`,
    description: `${b.summary} Specialist servicing, installation and repair for ${b.name} biomass boilers across the South West — Bristol to Bournemouth to Penzance.`,
    alternates: { canonical: `/biomass-boilers/${brand}` },
  };
}

export default async function Page(props: Props) {
  const { brand } = await props.params;
  const b = brandBySlug(brand);
  if (!b) notFound();
  return <BrandPageTemplate brand={b} />;
}
