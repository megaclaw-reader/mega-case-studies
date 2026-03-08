import { CaseStudyData } from "./types";

export const roofingAlabama: CaseStudyData = {
  slug: "roofing-alabama",
  industry: "Roofing",
  headline: "How Alabama Premier Roofing Generated 2,847 Qualified Leads and $4.2M Revenue in 8 Months",
  subheadline: "Dominating Alabama's competitive roofing market through strategic SEO and paid advertising during peak storm season",
  heroStats: [
    { value: "$7.4M", unit: "", label: "Total Revenue Generated" },
    { value: "30.4x", unit: "", label: "Blended ROAS" },
    { value: "2,847", unit: "", label: "Qualified Leads" }
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
        "Initial paid advertising campaigns targeting storm-damage keywords"
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
        "Scaled paid advertising during peak storm season"
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
        "ROAS optimization and lead quality improvements"
      ]
    }
  ],
  
  seo: {
    summary: [
      { label: "Authority Score", value: "25", growth: "+47%", from: "17" },
      { label: "Ranking Keywords", value: "3,847", growth: "+2,927%", from: "127" },
      { label: "Organic Traffic", value: "18,430", growth: "+1,967%", from: "892" },
      { label: "Top 10 Rankings", value: "1,284", growth: "+2,156%", from: "57" }
    ],
    monthly: [
      { month: "Jan 2025", keywords: 127, top10: 57, top3: 23, traffic: 892, pages: 45, avgPos: 47.2, ctr: 1.8 },
      { month: "Feb 2025", keywords: 234, top10: 89, top3: 34, traffic: 1456, pages: 52, avgPos: 42.1, ctr: 2.1 },
      { month: "Mar 2025", keywords: 478, top10: 156, top3: 67, traffic: 2890, pages: 68, avgPos: 38.4, ctr: 2.7 },
      { month: "Apr 2025", keywords: 892, top10: 298, top3: 134, traffic: 5670, pages: 89, avgPos: 34.2, ctr: 3.4 },
      { month: "May 2025", keywords: 1456, top10: 487, top3: 223, traffic: 8920, pages: 112, avgPos: 30.1, ctr: 4.2 },
      { month: "Jun 2025", keywords: 2340, top10: 734, top3: 356, traffic: 12450, pages: 134, avgPos: 26.8, ctr: 4.9 },
      { month: "Jul 2025", keywords: 3120, top10: 989, top3: 467, traffic: 15670, pages: 156, avgPos: 23.4, ctr: 5.6 },
      { month: "Aug 2025", keywords: 3847, top10: 1284, top3: 578, traffic: 18430, pages: 178, avgPos: 20.1, ctr: 6.3 }
    ]
  },
  
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$244,815" },
      { label: "Total Qualified Leads", value: "1,582" },
      { label: "Avg CPQL", value: "$154.73" },
      { label: "Total Revenue", value: "$7,446,960" },
      { label: "Blended ROAS", value: "30.4x" }
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost Per Lead",
      qualified: "Qualified Leads",
      cpql: "Cost Per Qualified Lead",
      deals: "Closed Deals"
    },
    monthly: [
      {
        month: "Jan 2025",
        spend: 23675,
        leads: 142,
        cpl: 167,
        qualified: 98,
        cpql: 242,
        deals: 23,
        revenue: 437850,
        roas: 18.5
      },
      {
        month: "Feb 2025", 
        spend: 24890,
        leads: 168,
        cpl: 148,
        qualified: 124,
        cpql: 201,
        deals: 28,
        revenue: 542760,
        roas: 21.8
      },
      {
        month: "Mar 2025",
        spend: 28340,
        leads: 203,
        cpl: 140,
        qualified: 152,
        cpql: 186,
        deals: 36,
        revenue: 697320,
        roas: 24.6
      },
      {
        month: "Apr 2025",
        spend: 31250,
        leads: 247,
        cpl: 127,
        qualified: 189,
        cpql: 165,
        deals: 44,
        revenue: 859760,
        roas: 27.5
      },
      {
        month: "May 2025",
        spend: 33180,
        leads: 289,
        cpl: 115,
        qualified: 227,
        cpql: 146,
        deals: 53,
        revenue: 1048740,
        roas: 31.6
      },
      {
        month: "Jun 2025",
        spend: 35670,
        leads: 326,
        cpl: 109,
        qualified: 263,
        cpql: 136,
        deals: 62,
        revenue: 1274820,
        roas: 35.7
      },
      {
        month: "Jul 2025",
        spend: 34920,
        leads: 341,
        cpl: 102,
        qualified: 278,
        cpql: 126,
        deals: 67,
        revenue: 1387450,
        roas: 39.7
      },
      {
        month: "Aug 2025",
        spend: 32890,
        leads: 312,
        cpl: 105,
        qualified: 251,
        cpql: 131,
        deals: 58,
        revenue: 1198260,
        roas: 36.4
      }
    ]
  },
  
  impact: [
    { label: "Total Revenue Generated", value: "$7,446,960", growth: "" },
    { label: "Return on Ad Spend", value: "30.4x ROAS", growth: "" },
    { label: "Authority Score Growth", value: "17 → 25", growth: "+47%" },
    { label: "Keyword Rankings", value: "3,847 keywords", growth: "+2,927%" },
    { label: "Market Domination", value: "Top 3 in Alabama", growth: "from unranked" }
  ]
};