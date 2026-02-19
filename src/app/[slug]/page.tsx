import { caseStudies } from "@/data";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/CaseStudy/CaseStudyPage";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = caseStudies[slug];
  if (!data) notFound();
  return <CaseStudyPage data={data} />;
}
