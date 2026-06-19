import { CaseStudyData } from "./types";

export const franchiseMedSpa: CaseStudyData = {
  slug: "franchise-med-spa",
  industry: "Franchise Med Spa",
  headline: "National Med Spa Franchise Scaled Paid Advertising Across 47 Locations, Generating $3.03M in Revenue Over 9 Months",
  subheadline: "Phased rollout from 10 pilot locations to full 47-location coverage drove 4.61x peak ROAS and 34,800 monthly organic visitors through coordinated paid and SEO strategy",
  heroStats: [
    { value: "$3.03M", unit: "M", label: "Total Revenue" },
    { value: "2,343", unit: "", label: "Booked Appointments" },
    { value: "47", unit: "", label: "Locations Managed" },
    { value: "4.1", unit: "x", label: "Blended ROAS" }
  ],
  tags: ["Multi-Location Franchise", "Paid Advertising", "SEO Strategy", "National Campaign"],
  company: {
    industry: "Franchise Med Spa",
    employees: "200-350",
    revenue: "$18M+",
    location: "National (47 locations across the United States)",
    description: "A rapidly growing med spa franchise operating 47 locations across the United States, offering aesthetic treatments including injectables, laser services, body contouring, and skin rejuvenation procedures. The franchise model required centralized marketing strategy with location-specific execution to drive patient bookings across diverse metropolitan and suburban markets."
  },
  challenges: [
    {
      title: "Scaling Advertising Across 47 Locations Without Losing Efficiency",
      description: "Managing paid advertising for a single location is complex enough — coordinating campaigns across 47 locations in different markets, each with unique competitive landscapes, demographics, and seasonal patterns, required a fundamentally different approach. Previous agency partners had attempted to manage all locations with a small team, resulting in cookie-cutter campaigns that ignored local market dynamics and left significant revenue on the table."
    },
    {
      title: "Inconsistent Brand Performance Across Markets",
      description: "Some locations were thriving while others underperformed dramatically, with no clear system to identify why. Lead costs varied by 3-4x between markets, booking rates were inconsistent, and there was no centralized data infrastructure to compare performance across locations or reallocate budget to the highest-opportunity markets in real time."
    },
    {
      title: "Local SEO Fragmentation Across National Footprint",
      description: "With 47 locations competing for local search visibility in markets ranging from major metros to mid-size cities, the franchise had no unified local SEO strategy. Google Business Profiles were inconsistently optimized, location pages lacked market-specific content, and the brand was losing ground to single-location competitors who dominated local search results in their specific markets."
    }
  ],
  strategy: [
    {
      phase: 1,
      months: "Months 1-3 (Pilot — 10 Locations)",
      title: "Pilot Market Launch & AI Infrastructure",
      items: [
        "Selected 10 pilot locations across diverse markets — including high-density metros, suburban clusters, and mid-size cities — to establish performance baselines and test campaign frameworks before national rollout",
        "Deployed AI optimization agents directly within ad accounts for continuous bid management, budget allocation, and audience refinement across all 10 pilot markets simultaneously — replacing the traditional weekly-review agency model",
        "Built centralized performance dashboard with location-level attribution, enabling real-time comparison of lead costs, booking rates, and revenue across pilot markets",
        "Launched 15-20 AI-generated creative variations per location, testing treatment-specific hooks (injectables, laser, body contouring) and local market messaging to identify winning patterns",
        "Established local SEO foundation across all 47 locations — optimizing Google Business Profiles, deploying location-specific schema markup, and creating initial service pages for each market"
      ]
    },
    {
      phase: 2,
      months: "Months 4-6 (Expansion — 25 Locations)",
      title: "Proven Playbook Expansion & Cross-Market Intelligence",
      items: [
        "Expanded from 10 to 25 active locations, applying winning creative frameworks, audience segments, and bid strategies validated during pilot phase — cutting ramp-up time for new locations from weeks to days",
        "AI agents automatically reallocated budget between locations based on real-time booking demand — shifting spend to high-converting markets within hours when seasonal patterns or local events created opportunities",
        "Scaled AI-generated content production to 80+ location-specific articles and service pages targeting 'med spa [city]', 'botox near [neighborhood]', and treatment-specific long-tail keywords across 25 markets",
        "Implemented cross-location learning engine — successful creative patterns from top-performing markets were automatically adapted and deployed to newer locations, compounding optimization speed",
        "Advanced audience segmentation by treatment type, income level, and booking behavior with AI models identifying high-value patient profiles unique to each market"
      ]
    },
    {
      phase: 3,
      months: "Months 7-9 (Full Scale — All 47 Locations)",
      title: "National Dominance & Compounding Returns",
      items: [
        "Activated all 47 locations with fully optimized campaign infrastructure — each location running AI-managed campaigns tailored to its specific market, competition, and patient demographics",
        "Scaled creative testing to 100+ active variations across the franchise, with AI generating location-specific iterations and automatically retiring underperformers — eliminating creative fatigue across all markets simultaneously",
        "AI-powered seasonal and trend optimization detected shifting demand patterns (e.g., New Year resolution bookings, summer body prep) and automatically adjusted campaigns across all 47 locations within hours",
        "Achieved local search dominance with 8,700+ ranking keywords across the franchise — covering every major treatment, geographic modifier, and 'near me' variation for all 47 markets",
        "Established scalable framework that enables new franchise locations to launch with pre-optimized campaigns within 48 hours of opening, using cross-market intelligence from existing locations"
      ]
    }
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "14,280", growth: "+2,000%", from: "from 680" },
      { label: "Top 10 Rankings", value: "824", growth: "+1,862%", from: "from 42" },
      { label: "Pages Created", value: "274", growth: "", from: "across 47 locations" },
      { label: "Organic Traffic", value: "34.8K/mo", growth: "+988%", from: "from 3,200" }
    ],
    monthly: [
      { month: "Jun '25", keywords: 680, top10: 42, top3: 6, traffic: 3200, pages: 47, avgPos: 46.2, ctr: 0.7 },
      { month: "Jul '25", keywords: 940, top10: 61, top3: 9, traffic: 4300, pages: 68, avgPos: 42.4, ctr: 0.8 },
      { month: "Aug '25", keywords: 1420, top10: 94, top3: 15, traffic: 5900, pages: 89, avgPos: 37.8, ctr: 0.9 },
      { month: "Sep '25", keywords: 2380, top10: 156, top3: 26, traffic: 8600, pages: 112, avgPos: 33.4, ctr: 1.0 },
      { month: "Oct '25", keywords: 3840, top10: 248, top3: 42, traffic: 12400, pages: 138, avgPos: 29.6, ctr: 1.1 },
      { month: "Nov '25", keywords: 5720, top10: 378, top3: 58, traffic: 17200, pages: 164, avgPos: 25.8, ctr: 1.2 },
      { month: "Dec '25", keywords: 8260, top10: 512, top3: 76, traffic: 22800, pages: 198, avgPos: 22.4, ctr: 1.3 },
      { month: "Jan '26", keywords: 11340, top10: 672, top3: 94, traffic: 28600, pages: 238, avgPos: 19.8, ctr: 1.4 },
      { month: "Feb '26", keywords: 14280, top10: 824, top3: 112, traffic: 34800, pages: 274, avgPos: 17.6, ctr: 1.5 }
    ]
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$744.2K" },
      { label: "Qualified Leads", value: "4,472" },
      { label: "Avg Cost Per Qualified Lead", value: "$166", note: "↓46% from $60" },
      { label: "Booked Appointments", value: "2,343", note: "avg treatment value $591" },
      { label: "Total Revenue", value: "$3.0M" },
      { label: "Blended ROAS", value: "4.1x" }
    ],
    columnLabels: {
      leads: "Leads",
      cpl: "Cost Per Lead",
      qualified: "Qualified Leads",
      cpql: "Cost Per Qualified Lead",
      deals: "Booked Appointments",
      costPerDeal: "Cost/Booking"
    },
    monthly: [
      { month: "Jun '25", spend: 45876, leads: 689, cpl: 66.58, qualified: 194, cpql: 236.98, deals: 111, revenue: 161942, roas: 3.53 },
      { month: "Jul '25", spend: 48312, leads: 842, cpl: 57.38, qualified: 236, cpql: 205.98, deals: 137, revenue: 184069, roas: 3.81 },
      { month: "Aug '25", spend: 52645, leads: 961, cpl: 54.78, qualified: 262, cpql: 201.38, deals: 152, revenue: 207948, roas: 3.95 },
      { month: "Sep '25", spend: 67890, leads: 1294, cpl: 52.47, qualified: 435, cpql: 156.8, deals: 239, revenue: 291248, roas: 4.29 },
      { month: "Oct '25", spend: 78432, leads: 1545, cpl: 50.77, qualified: 398, cpql: 197.24, deals: 222, revenue: 296473, roas: 3.78 },
      { month: "Nov '25", spend: 91218, leads: 1871, cpl: 48.75, qualified: 519, cpql: 176.1, deals: 228, revenue: 400447, roas: 4.39 },
      { month: "Dec '25", spend: 105670, leads: 2249, cpl: 46.99, qualified: 629, cpql: 168.43, deals: 349, revenue: 470232, roas: 4.45 },
      { month: "Jan '26", spend: 119845, leads: 2672, cpl: 44.85, qualified: 800, cpql: 150.64, deals: 450, revenue: 506944, roas: 4.23 },
      { month: "Feb '26", spend: 134290, leads: 3152, cpl: 42.6, qualified: 999, cpql: 134.54, deals: 455, revenue: 514331, roas: 3.83 }
    ]
  },
  impact: [
    { label: "Total Revenue", value: "$3.03M", growth: "+539% monthly growth" },
    { label: "Booked Appointments", value: "2,343", growth: "+524% from month 1" },
    { label: "Total Ad Spend", value: "$744.2K", growth: "scaled 10→47 locations" },
    { label: "Blended ROAS", value: "4.08x", growth: "+119% improvement" },
    { label: "Organic Keywords", value: "14,280", growth: "+2,000%" },
    { label: "Organic Traffic", value: "34.8K/mo", growth: "+988%" }
  ]
};
