import { caseStudies } from "@/data";
import { v2Verticals } from "@/data/v2-index";
import DirectoryClient from "./DirectoryClient";

export const metadata = {
  title: "Case Study Directory — MEGA AI",
  description: "Browse MEGA AI case studies across 31 industries. Curated results from real campaigns.",
};

type DirectoryEntry = {
  slug: string;
  industry: string;
  vertical: string;
  product: "SEO & Paid Ads" | "Just SEO" | "Just Paid Ads";
  adSpendRange: string | null;
  adSpendBucket: string | null;
  headline: string;
  location: string;
  tags: string[];
  heroStats: { value: string; unit: string; label: string }[];
};

function getProduct(data: (typeof caseStudies)[string]): DirectoryEntry["product"] {
  const hasSeo = !!data.seo;
  const hasPaid = !!data.paidAds;
  if (hasSeo && hasPaid) return "SEO & Paid Ads";
  if (hasSeo) return "Just SEO";
  return "Just Paid Ads";
}

function getAdSpendRange(data: (typeof caseStudies)[string]): string | null {
  if (!data.paidAds?.monthly?.length) return null;
  const spends = data.paidAds.monthly.map((m) => m.spend);
  const min = Math.min(...spends);
  const max = Math.max(...spends);
  const fmt = (n: number) => {
    if (n >= 1000) return `$${Math.round(n / 1000)}K`;
    return `$${n}`;
  };
  return `${fmt(min)} – ${fmt(max)}/mo`;
}

function getAdSpendBucket(data: (typeof caseStudies)[string]): string | null {
  if (!data.paidAds?.monthly?.length) return null;
  const avg =
    data.paidAds.monthly.reduce((s, m) => s + m.spend, 0) /
    data.paidAds.monthly.length;
  if (avg < 10000) return "Under $10K/mo";
  if (avg < 20000) return "$10K–$20K/mo";
  if (avg < 50000) return "$20K–$50K/mo";
  return "$50K+/mo";
}

export default function DirectoryPage() {
  // Build entries from V2 curated verticals
  const verticalGroups = v2Verticals.map((vg) => ({
    vertical: vg.vertical,
    entries: vg.studies
      .filter((data) => data != null)
      .map((data) => ({
        slug: data.slug,
        industry: data.industry,
        vertical: vg.vertical,
        product: getProduct(data),
        adSpendRange: getAdSpendRange(data),
        adSpendBucket: getAdSpendBucket(data),
        headline: data.headline,
        location: data.company.location,
        tags: data.tags,
        heroStats: data.heroStats,
      })),
  }));

  const allEntries = verticalGroups.flatMap((vg) => vg.entries);
  const verticals = verticalGroups.map((vg) => vg.vertical).sort();
  const products = ["SEO & Paid Ads", "Just SEO", "Just Paid Ads"] as const;
  const spendBuckets = ["Under $10K/mo", "$10K–$20K/mo", "$20K–$50K/mo", "$50K+/mo"];

  return (
    <DirectoryClient
      entries={allEntries}
      verticalGroups={verticalGroups}
      verticals={verticals}
      products={[...products]}
      spendBuckets={spendBuckets}
    />
  );
}
