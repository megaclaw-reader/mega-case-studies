export interface CaseStudyData {
  slug: string;
  industry: string;
  headline: string;
  subheadline: string;
  heroStats: { value: string; unit: string; label: string }[];
  tags: string[];
  company: {
    industry: string;
    employees: string;
    revenue: string;
    location: string;
    description: string;
  };
  challenges: { title: string; description: string }[];
  strategy: {
    phase: number;
    months: string;
    title: string;
    items: string[];
  }[];
  seo: {
    summary: { label: string; value: string; growth: string; from: string }[];
    monthly: {
      month: string;
      keywords: number;
      top10: number;
      top3: number;
      traffic: number;
      pages: number;
      avgPos: number;
      ctr: number;
    }[];
  };
  paidAds: {
    summary: { label: string; value: string; note?: string }[];
    monthly: {
      month: string;
      spend: number;
      leads: number;
      cpl: number;
      qualified: number;
      cpql: number;
      deals: number;
      revenue: number;
      roas: number;
    }[];
  };
  impact: { label: string; value: string; growth: string }[];
}
