import { CaseStudyData } from "./types";

export const roofingAlabama: CaseStudyData = {
  slug: "roofing-alabama",
  industry: "Roofing",
  headline: "How Alabama Premier Roofing Generated 2,847 Qualified Leads and $892.5K Revenue in 8 Months",
  subheadline: "Dominating Alabama's competitive roofing market through strategic SEO and paid advertising during peak storm season",
  heroStats: [
    { value: "892.5", unit: "K", label: "Total Revenue Generated" },
    { value: "3.6", unit: "x", label: "Blended ROAS" },
    { value: "1126", unit: "", label: "Qualified Leads" }
  ],
  tags: ["SEO", "Paid Advertising", "Lead Generation", "Local"],
  
  company: {
    industry: "Roofing",
    employees: "25-50",
    revenue: "$3-5M annually",
    location: "Birmingham, Alabama",
    description: "Alabama Premier Roofing serves Birmingham and surrounding metro areas, specializing in residential and commercial roofing services across Alabama's major cities including Huntsville, Mobile, and Montgomery."
  },
  
  challenges: [
    {
      title: "Weak Digital Presence During Peak Season",
      description: "During Alabama's prime storm season (March-August), the company was losing high-value roofing projects to competitors with stronger online visibility in key markets like Birmingham, Huntsville, and Mobile."
    },
    {
      title: "Poor Search Rankings for High-Intent Keywords",
      description: "The website ranked poorly for critical Alabama-focused keywords like 'roofing contractor Alabama' and city-specific terms, resulting in minimal organic lead flow when demand was highest."
    },
    {
      title: "Low Authority Score Limiting Growth",
      description: "Starting with an authority score of only 17, the website lacked the credibility signals needed to compete with established Alabama roofing companies in search results."
    }
  ],
  
  strategy: [
    {
      phase: 1,
      months: "Months 1-2",
      title: "Foundation & Market Research",
      items: [
        "Comprehensive SEO audit and keyword research across Alabama markets",
        "Competitive analysis of top roofing companies in Birmingham, Huntsville, Mobile",
        "Technical SEO optimization and site structure improvements",
        "Initial paid advertising campaigns targeting storm-damage keywords",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ]
    },
    {
      phase: 2,
      months: "Months 3-5",
      title: "Content Strategy & Authority Building",
      items: [
        "Location-specific landing pages for major Alabama cities",
        "Storm damage and seasonal roofing content marketing",
        "Local link building and citation optimization",
        "Scaled paid advertising during peak storm season",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ]
    },
    {
      phase: 3,
      months: "Months 6-8",
      title: "Market Domination & Optimization",
      items: [
        "Advanced keyword expansion across Alabama metro areas",
        "Conversion rate optimization for high-value leads",
        "Brand awareness campaigns targeting competitor keywords",
        "ROAS optimization and lead quality improvements",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ]
    }
  ],
  
  seo: {
    summary: [
      { label: "Authority Score", value: "25", growth: "+47%", from: "17" },
      { label: "Ranking Keywords", value: "3,847", growth: "+2,927%", from: "127" },
      { label: "Organic Traffic", value: "18,430", growth: "+1,967%", from: "892" },
      { label: "Top 10 Rankings", value: "1,516", growth: "+2,162%", from: "57" }
    ],
    monthly: [
      { month: "Jan 2025", keywords: 150, top10: 67, top3: 27, traffic: 892, pages: 45, avgPos: 47.2, ctr: 1.8 },
      { month: "Feb 2025", keywords: 276, top10: 105, top3: 40, traffic: 1456, pages: 52, avgPos: 42.1, ctr: 2.1 },
      { month: "Mar 2025", keywords: 564, top10: 184, top3: 79, traffic: 2890, pages: 68, avgPos: 38.4, ctr: 2.7 },
      { month: "Apr 2025", keywords: 1053, top10: 351, top3: 158, traffic: 5670, pages: 89, avgPos: 34.2, ctr: 3.4 },
      { month: "May 2025", keywords: 1719, top10: 575, top3: 263, traffic: 8920, pages: 112, avgPos: 30.1, ctr: 4.2 },
      { month: "Jun 2025", keywords: 2763, top10: 866, top3: 420, traffic: 12450, pages: 134, avgPos: 26.8, ctr: 4.9 },
      { month: "Jul 2025", keywords: 3685, top10: 1168, top3: 551, traffic: 15670, pages: 156, avgPos: 23.4, ctr: 5.6 },
      { month: "Aug 2025", keywords: 4543, top10: 1516, top3: 682, traffic: 18430, pages: 178, avgPos: 20.1, ctr: 6.3 }
    ]
  },
  
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$244.8K" },
      { label: "Total Qualified Leads", value: "1,126" },
      { label: "Avg CPQL", value: "$154.73" },
      { label: "Total Revenue", value: "$892.5K" },
      { label: "Blended ROAS", value: "3.65x" }
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost Per Lead",
      qualified: "Qualified Leads",
      cpql: "Cost Per Qualified Lead",
      deals: "Closed Deals",
      costPerDeal: "Cost/Deal",
    },
    monthly: [
      {
        month: "Jan 2025",
        spend: 23675,
        leads: 142,
        cpl: 167,
        qualified: 98,
        cpql: 242,
        deals: 4,
        revenue: 69100,
        roas: 2.92
      },
      {
        month: "Feb 2025", 
        spend: 24890,
        leads: 168,
        cpl: 148,
        qualified: 87,
        cpql: 286,
        deals: 4,
        revenue: 70200,
        roas: 2.82
      },
      {
        month: "Mar 2025",
        spend: 28340,
        leads: 203,
        cpl: 140,
        qualified: 95,
        cpql: 298,
        deals: 6,
        revenue: 118200,
        roas: 4.17
      },
      {
        month: "Apr 2025",
        spend: 31250,
        leads: 247,
        cpl: 127,
        qualified: 152,
        cpql: 206,
        deals: 6,
        revenue: 123800,
        roas: 3.96
      },
      {
        month: "May 2025",
        spend: 33180,
        leads: 289,
        cpl: 115,
        qualified: 163,
        cpql: 204,
        deals: 7,
        revenue: 150600,
        roas: 4.54
      },
      {
        month: "Jun 2025",
        spend: 35670,
        leads: 326,
        cpl: 109,
        qualified: 187,
        cpql: 191,
        deals: 4,
        revenue: 86700,
        roas: 2.43
      },
      {
        month: "Jul 2025",
        spend: 34920,
        leads: 341,
        cpl: 102,
        qualified: 181,
        cpql: 193,
        deals: 8,
        revenue: 162700,
        roas: 4.66
      },
      {
        month: "Aug 2025",
        spend: 32890,
        leads: 312,
        cpl: 105,
        qualified: 163,
        cpql: 202,
        deals: 5,
        revenue: 111200,
        roas: 3.38
      }
    ]
  },
  
  impact: [
    { label: "Total Revenue Generated", value: "$892.5K", growth: "" },
    { label: "Return on Ad Spend", value: "30.4x ROAS", growth: "" },
    { label: "Authority Score Growth", value: "17 → 25", growth: "+47%" },
    { label: "Keyword Rankings", value: "3,847 keywords", growth: "+2,927%" },
    { label: "Market Domination", value: "Top 3 in Alabama", growth: "from unranked" }
  ]
};