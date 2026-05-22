import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPageTemplate } from "@/components/CaseStudyPageTemplate";
import { caseStudies, caseStudyBySlug } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const c = caseStudyBySlug(slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/case-studies/${slug}` },
  };
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const c = caseStudyBySlug(slug);
  if (!c) notFound();
  return <CaseStudyPageTemplate study={c} />;
}
