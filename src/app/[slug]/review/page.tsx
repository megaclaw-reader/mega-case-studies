import { caseStudies } from "@/data";
import { notFound } from "next/navigation";
import ReviewPageClient from "./ReviewPageClient";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = caseStudies[slug];
  if (!data) notFound();
  return <ReviewPageClient data={data} slug={slug} />;
}
