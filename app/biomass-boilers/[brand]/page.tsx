import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandPageTemplate } from "@/components/BrandPageTemplate";
import { brands, brandBySlug } from "@/lib/brands";

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.slug }));
}

export async function generateMetadata(
  props: PageProps<"/biomass-boilers/[brand]">
): Promise<Metadata> {
  const { brand } = await props.params;
  const b = brandBySlug(brand);
  if (!b) return {};
  return {
    title: `${b.name} Biomass Boiler Servicing, Installation & Repair`,
    description: `${b.summary} Specialist servicing, installation and repair for ${b.name} biomass boilers across the UK.`,
  };
}

export default async function Page(props: PageProps<"/biomass-boilers/[brand]">) {
  const { brand } = await props.params;
  const b = brandBySlug(brand);
  if (!b) notFound();
  return <BrandPageTemplate brand={b} />;
}
