import { CaseStudyData } from "./types";

export const roofingLosAngeles: CaseStudyData = {
  slug: "roofing-los-angeles",
  industry: "Roofing",
  headline: "How a Los Angeles Roofing Company Built a Digital Pipeline From Scratch, Generating $171.2K in Revenue Over 8 Months",
  subheadline: "MEGA helped a Los Angeles residential roofing company go from near-zero digital presence to 4,487 ranked keywords, a 50% reduction in cost per qualified lead, and $171.2K in attributed revenue through combined SEO and paid advertising.",
  heroStats: [
    { value: "4,487", unit: "", label: "Keywords Ranked" },
    { value: "$171.2K", unit: "K", label: "Revenue Generated" },
    { value: "50", unit: "%", label: "CPQL Reduction" }
  ],
  tags: ["SEO", "Paid Advertising", "Local"],

  company: {
    industry: "Roofing",
    employees: "8-12",
    revenue: "$800K-$1.2M annually",
    location: "Los Angeles, CA",
    description: "A residential roofing company serving the Greater Los Angeles metro area, specializing in roof replacements, tile and flat roof repairs, and weather damage restoration. Despite years of quality craftsmanship and strong word-of-mouth referrals, the company had virtually no digital marketing presence — no organic search visibility, no paid advertising infrastructure, and no systematic way to generate leads beyond referrals and yard signs. They came to MEGA looking to build a scalable digital pipeline from the ground up in the competitive Los Angeles roofing market."
  },

  challenges: [
    {
      title: "Near-Zero Digital Presence in a Saturated Market",
      description: "The Los Angeles roofing market is one of the most competitive in California, with hundreds of contractors fighting for visibility. The company had only 131 indexed keywords, almost no organic traffic, and had never run a paid advertising campaign. They were invisible online while competitors dominated local search results for high-intent terms like 'roof replacement Los Angeles' and 'roofing contractor near me.'"
    },
    {
      title: "No Lead Generation Infrastructure",
      description: "Without any digital marketing systems in place, the company relied entirely on referrals and drive-by visibility. There was no conversion tracking, no CRM integration, no landing pages optimized for lead capture, and no way to measure marketing ROI. Starting from scratch meant building the entire funnel — from awareness through conversion — simultaneously."
    },
    {
      title: "High Unqualified Lead Volume From Previous Attempts",
      description: "The few digital marketing attempts the company had tried previously generated mostly unqualified inquiries — price shoppers, out-of-area requests, and minor repair calls that didn't justify the cost of acquisition. They needed a system that could attract high-value replacement and restoration projects, not just volume."
    }
  ],

  strategy: [
    {
      phase: 1,
      months: "Months 1-2",
      title: "Foundation & Pipeline Architecture",
      items: [
        "Complete technical SEO audit of the company's website — mobile performance, page speed, crawlability, and local search optimization for Los Angeles metro area",
        "Google Business Profile optimization covering service areas across 28 Los Angeles neighborhoods and surrounding communities including Pasadena, Glendale, Burbank, and the San Fernando Valley",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget, and refining audience targeting in real time rather than waiting for weekly agency review cycles",
        "Built conversion tracking infrastructure from scratch — call tracking, form attribution, and CRM integration to measure true lead quality and cost per qualified lead",
        "Generated 14 initial articles covering Los Angeles roofing topics: tile roof maintenance, flat roof repair guides, Santa Ana wind damage prevention, and LA building code compliance",
        "Launched paid advertising campaigns with geo-targeted structure covering Los Angeles proper, the Westside, San Fernando Valley, and San Gabriel Valley with service-specific ad groups",
        "Competitor analysis across Los Angeles's top 20 roofing companies to identify keyword gaps, content opportunities, and paid advertising positioning"
      ]
    },
    {
      phase: 2,
      months: "Months 3-5",
      title: "Content Engine & Lead Quality Optimization",
      items: [
        "Reviewed 60-day performance data and refined audience targeting based on which Los Angeles neighborhoods and property types generated the highest quality leads",
        "Generated 30+ additional articles targeting neighborhood-level roofing topics across Los Angeles communities and specific roof types common in Southern California",
        "Launched programmatic neighborhood landing pages covering 22 Los Angeles-area neighborhoods and suburbs — each optimized for local search intent",
        "AI agents identified underperforming keywords within hours and automatically shifted budget to high-converting roof replacement and emergency repair terms",
        "Rapid creative testing cycles — quality craftsmanship messaging vs. competitive pricing vs. emergency response positioning across ad formats",
        "Built lead scoring framework integrating property type, estimated job value, neighborhood, and inquiry urgency to separate qualified opportunities from price shoppers",
        "Keyword and negative keyword refinement based on CRM qualification data — filtering out commercial properties, out-of-area searches, and DIY inquiries"
      ]
    },
    {
      phase: 3,
      months: "Months 6-8",
      title: "Scale & CPQL Compression",
      items: [
        "Expanded content coverage to secondary Los Angeles markets showing strong organic demand signals identified through AI analysis of search trends",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time",
        "Advanced audience segmentation by neighborhood home value tiers, roof type (tile, shingle, flat), and intent signals (replacement vs. repair vs. inspection)",
        "CRO improvements on landing pages — streamlined estimate request forms, added click-to-call for mobile, and implemented chat for after-hours inquiries",
        "Local backlink campaigns via Los Angeles home improvement publications, neighborhood associations, and real estate blogs",
        "Budget allocation driven by real-time performance data across all Los Angeles sub-markets — not arbitrary geographic splits",
        "When seasonal demand patterns shifted, campaigns were restructured within hours to capture emerging opportunities in underserved neighborhoods"
      ]
    }
  ],

  seo: {
    summary: [
      { label: "Total Keywords", value: "4,487", growth: "+3,321%", from: "from 131" },
      { label: "Top 10 Rankings", value: "347", growth: "+8,575%", from: "from 4" },
      { label: "Organic Clicks", value: "7,842/mo", growth: "+4,257%", from: "from 180" },
      { label: "Avg CTR", value: "2.9%", growth: "+314%", from: "from 0.7%" }
    ],
    monthly: [
      { month: "Jan '26", keywords: 131, top10: 4, top3: 1, traffic: 180, pages: 4, avgPos: 54.3, ctr: 0.7 },
      { month: "Feb '26", keywords: 274, top10: 12, top3: 2, traffic: 418, pages: 14, avgPos: 46.8, ctr: 0.9 },
      { month: "Mar '26", keywords: 547, top10: 34, top3: 5, traffic: 923, pages: 28, avgPos: 38.4, ctr: 1.2 },
      { month: "Apr '26", keywords: 1038, top10: 72, top3: 11, traffic: 1847, pages: 42, avgPos: 31.7, ctr: 1.5 },
      { month: "May '26", keywords: 1842, top10: 134, top3: 22, traffic: 3241, pages: 56, avgPos: 26.3, ctr: 1.9 },
      { month: "Jun '26", keywords: 2731, top10: 198, top3: 38, traffic: 4893, pages: 68, avgPos: 22.1, ctr: 2.3 },
      { month: "Jul '26", keywords: 3587, top10: 271, top3: 54, traffic: 6318, pages: 79, avgPos: 19.4, ctr: 2.6 },
      { month: "Aug '26", keywords: 4487, top10: 347, top3: 72, traffic: 7842, pages: 88, avgPos: 17.2, ctr: 2.9 }
    ]
  },

  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$45.1K" },
      { label: "Total Qualified Leads", value: "84" },
      { label: "Avg CPQL", value: "$536" },
      { label: "Total Revenue", value: "$171.2K" },
      { label: "Blended ROAS", value: "3.80x" }
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost Per Lead",
      qualified: "Qualified Leads",
      cpql: "Cost Per Qualified Lead",
      deals: "Closed Deals",
      costPerDeal: "Cost/Deal"
    },
    monthly: [
      { month: "Jan '26", spend: 5147, leads: 26, cpl: 197.96, qualified: 7, cpql: 735.29, deals: 1, revenue: 14200, roas: 2.76 },
      { month: "Feb '26", spend: 5284, leads: 28, cpl: 188.71, qualified: 7, cpql: 754.86, deals: 1, revenue: 15800, roas: 2.99 },
      { month: "Mar '26", spend: 5412, leads: 32, cpl: 169.13, qualified: 8, cpql: 676.50, deals: 1, revenue: 16400, roas: 3.03 },
      { month: "Apr '26", spend: 5687, leads: 38, cpl: 149.66, qualified: 9, cpql: 631.89, deals: 2, revenue: 22800, roas: 4.01 },
      { month: "May '26", spend: 5923, leads: 44, cpl: 134.61, qualified: 11, cpql: 538.45, deals: 2, revenue: 24600, roas: 4.15 },
      { month: "Jun '26", spend: 6147, leads: 54, cpl: 113.83, qualified: 13, cpql: 472.85, deals: 2, revenue: 27400, roas: 4.46 },
      { month: "Jul '26", spend: 5834, leads: 58, cpl: 100.59, qualified: 14, cpql: 416.71, deals: 3, revenue: 25800, roas: 4.42 },
      { month: "Aug '26", spend: 5618, leads: 62, cpl: 90.61, qualified: 15, cpql: 374.53, deals: 3, revenue: 24200, roas: 4.31 }
    ]
  },

  impact: [
    { label: "Total Revenue", value: "$171.2K", growth: "" },
    { label: "Blended ROAS", value: "3.80x", growth: "" },
    { label: "Total Qualified Leads", value: "84", growth: "" },
    { label: "Avg CPQL", value: "$536", growth: "↓50% from $745 baseline" },
    { label: "Organic Keywords", value: "4,487", growth: "+3,321% from 131" },
    { label: "Organic Clicks", value: "7,842/mo", growth: "+4,257% from 180/mo" }
  ]
};
