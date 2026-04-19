import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPageTemplate } from "@/components/CaseStudyPageTemplate";
import { caseStudies, caseStudyBySlug } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/case-studies/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const c = caseStudyBySlug(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
  };
}

export default async function Page(props: PageProps<"/case-studies/[slug]">) {
  const { slug } = await props.params;
  const c = caseStudyBySlug(slug);
  if (!c) notFound();
  return <CaseStudyPageTemplate study={c} />;
}
