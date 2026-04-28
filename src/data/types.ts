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
  seo?: {
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
  paidAds?: {
    summary: { label: string; value: string; note?: string }[];
    columnLabels?: {
      leads?: string;
      cpl?: string;
      qualified?: string;
      cpql?: string;
      deals?: string;
      costPerDeal?: string;
    };
    hiddenColumns?: string[];
    monthly: {
      month: string;
      spend: number;
      sessions?: number;
      leads: number;
      cpl: number;
      qualified: number;
      cpql: number;
      deals?: number;
      revenue?: number;
      roas?: number;
    }[];
  };
  localSeo?: {
    summary: { label: string; value: string; growth: string; from: string }[];
    monthly: {
      month: string;
      gbpViews: number;
      mapsImpressions: number;
      gbpCalls: number;
      directionRequests: number;
    }[];
  };
  organicConversions?: {
    summary: { label: string; value: string; growth?: string; note?: string }[];
    columnLabels?: {
      formFills?: string;
      calls?: string;
      totalLeads?: string;
      conversionRate?: string;
    };
    monthly: {
      month: string;
      formFills: number;
      calls: number;
      totalLeads: number;
      conversionRate: number;
    }[];
    sources: { source: string; percentage: number; leads: number }[];
  };
  keywordOpportunities?: {
    intro?: string;
    keywords: {
      keyword: string;
      monthlyVolume: number;
      difficulty: number;          // 0-100
      difficultyLabel: string;     // "Easy" | "Medium" | "Hard" | "Very Hard"
      currentRank: string;         // e.g. "Not Ranking", "#47", etc.
      projectedRank: string;       // e.g. "Top 5", "Top 10"
      projectedTimeframe: string;  // e.g. "3-4 months", "6-8 months"
      estimatedTraffic: number;    // monthly traffic if ranked
      note?: string;               // brief upside note
    }[];
  };
  impact: { label: string; value: string; growth: string }[];
}
