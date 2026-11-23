import { CaseStudyData } from "./types";

export const roofingCalifornia: CaseStudyData = {
  slug: "roofing-california",
  industry: "Roofing",
  headline: "How a California Roofing Company Scaled to 180+ Monthly Leads and $374.8K in Revenue Over 15 Months",
  subheadline: "MEGA helped a California residential and commercial roofing company transform its digital marketing, growing from 71 leads per month to over 180 while reducing cost per qualified lead by 67% and generating $374.8K in attributed revenue through integrated SEO and paid advertising.",
  heroStats: [
    { value: "8,347", unit: "", label: "Keywords Ranked" },
    { value: "$374.8K", unit: "K", label: "Revenue Generated" },
    { value: "67", unit: "%", label: "CPQL Reduction" }
  ],
  tags: ["SEO", "Paid Advertising", "Local"],

  company: {
    industry: "Roofing",
    employees: "15-22",
    revenue: "$1.8M-$2.4M annually",
    location: "California",
    description: "A residential and commercial roofing company serving multiple regions across California, specializing in full roof replacements, tile and shingle installations, storm damage restoration, and solar-ready roof upgrades. The company had built a solid reputation through referrals over a decade but struggled to scale beyond its existing customer base. With growing competition from both local contractors and national franchises across California's major metro areas, they needed a systematic digital marketing approach to capture high-intent leads statewide and reduce their dependence on word-of-mouth."
  },

  challenges: [
    {
      title: "Fragmented Visibility Across a Massive State",
      description: "California's roofing market spans dozens of metro areas with distinct competitive landscapes — from the Bay Area to the Central Valley to Southern California. The company had pockets of brand recognition in a few cities but was essentially invisible in most of the state's high-demand markets. With only 112 indexed keywords and minimal organic traffic, they were losing thousands of potential leads each month to competitors who dominated local search results."
    },
    {
      title: "High Cost Per Lead With Poor Qualification Rates",
      description: "Previous marketing efforts generated leads at $190+ per lead, but fewer than 15% were genuinely qualified — many were renters, out-of-area inquiries, or minor patch jobs that didn't justify the acquisition cost. The company needed to attract homeowners and property managers with high-value replacement and restoration projects, particularly in California's fire-prone and weather-affected regions."
    },
    {
      title: "No Scalable Digital Infrastructure",
      description: "The company lacked conversion tracking, landing pages optimized for different California regions, and any systematic approach to measuring which marketing channels drove actual revenue. Without data-driven attribution, budget allocation was based on guesswork rather than performance, leading to wasted spend and missed opportunities in high-converting markets."
    }
  ],

  strategy: [
    {
      phase: 1,
      months: "Months 1-3",
      title: "Foundation & Statewide Infrastructure",
      items: [
        "Comprehensive technical SEO audit covering site architecture, mobile performance, page speed, and local search optimization across California's key metro areas and regions",
        "Google Business Profile optimization and expansion covering service areas across 45+ California cities and communities spanning the Bay Area, Sacramento, Central Valley, Inland Empire, and coastal markets",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget, and refining audience targeting in real time rather than waiting for weekly agency review cycles",
        "Built full conversion tracking infrastructure — call tracking with dynamic number insertion, form attribution, and CRM integration to measure true lead quality and cost per qualified lead across all California regions",
        "Generated 18 initial articles targeting California-specific roofing topics: wildfire-resistant roofing materials, Title 24 energy compliance, cool roof requirements, and regional climate considerations from coastal to inland areas",
        "Launched geo-targeted paid advertising campaigns structured by California region with service-specific ad groups for replacements, repairs, storm damage, and solar-ready upgrades",
        "Competitive analysis across California's top roofing companies in each major metro to identify keyword gaps, content opportunities, and positioning advantages"
      ]
    },
    {
      phase: 2,
      months: "Months 4-8",
      title: "Content Scaling & Lead Quality Optimization",
      items: [
        "Reviewed 90-day performance data and refined audience targeting based on which California regions, property types, and roof categories generated the highest quality leads and largest average job values",
        "Scaled content production to 40+ additional articles targeting city-level and region-level roofing topics across California — from Bay Area tile roof specialists to Central Valley shingle replacements to Inland Empire storm damage restoration",
        "Launched programmatic regional landing pages covering 35+ California cities and neighborhoods — each optimized for local search intent with region-specific imagery and testimonials",
        "AI agents identified underperforming keywords within hours and automatically shifted budget to high-converting roof replacement and emergency repair terms — compounding small optimizations daily instead of waiting for manual monthly reviews",
        "Built lead scoring framework integrating property type, estimated project value, geographic zone, and inquiry urgency to separate qualified opportunities from price shoppers and DIY inquiries",
        "Rapid creative testing cycles — 12-15 AI-generated ad variations testing different messaging angles: quality craftsmanship vs. competitive pricing vs. emergency response vs. energy-efficient upgrades",
        "Negative keyword refinement based on CRM qualification data — filtering out commercial janitorial searches, out-of-state inquiries, and rental property maintenance requests"
      ]
    },
    {
      phase: 3,
      months: "Months 9-15",
      title: "Scale, Expansion & CPQL Compression",
      items: [
        "Expanded into secondary California markets showing strong organic demand signals — smaller cities and suburban communities where competition was lower and conversion rates were higher",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time across all California campaigns",
        "Advanced audience segmentation by region, home value tiers, roof type (tile, shingle, flat, metal), and intent signals (replacement vs. repair vs. inspection vs. solar-ready upgrade)",
        "CRO improvements across all landing pages — streamlined estimate request forms, added click-to-call for mobile users, implemented after-hours chat, and A/B tested social proof elements",
        "Local backlink campaigns via California home improvement publications, regional contractor directories, real estate blogs, and community associations",
        "Budget allocation driven by real-time performance data across all California sub-markets — scaling spend in regions with the strongest ROAS and compressing costs in maturing markets",
        "When seasonal demand patterns shifted — particularly during California's fire season and winter rain periods — campaigns were restructured within hours to capture surging demand for emergency repairs and damage restoration"
      ]
    }
  ],

  seo: {
    summary: [
      { label: "Total Keywords", value: "8,347", growth: "+7,353%", from: "from 112" },
      { label: "Top 10 Rankings", value: "612", growth: "+6,020%", from: "from 10" },
      { label: "Organic Clicks", value: "14,218/mo", growth: "+3,949%", from: "from 351" },
      { label: "Avg CTR", value: "3.1%", growth: "+287%", from: "from 0.8%" }
    ],
    monthly: [
      { month: "Sep '25", keywords: 112, top10: 10, top3: 2, traffic: 351, pages: 6, avgPos: 52.7, ctr: 0.8 },
      { month: "Oct '25", keywords: 198, top10: 18, top3: 3, traffic: 587, pages: 12, avgPos: 47.3, ctr: 0.9 },
      { month: "Nov '25", keywords: 347, top10: 31, top3: 5, traffic: 894, pages: 22, avgPos: 41.8, ctr: 1.0 },
      { month: "Dec '25", keywords: 614, top10: 52, top3: 9, traffic: 1427, pages: 34, avgPos: 36.4, ctr: 1.2 },
      { month: "Jan '26", keywords: 1087, top10: 84, top3: 14, traffic: 2814, pages: 48, avgPos: 31.2, ctr: 1.5 },
      { month: "Feb '26", keywords: 1643, top10: 127, top3: 21, traffic: 4123, pages: 58, avgPos: 27.6, ctr: 1.8 },
      { month: "Mar '26", keywords: 2384, top10: 178, top3: 32, traffic: 5847, pages: 67, avgPos: 24.1, ctr: 2.0 },
      { month: "Apr '26", keywords: 3217, top10: 241, top3: 44, traffic: 7693, pages: 74, avgPos: 21.3, ctr: 2.2 },
      { month: "May '26", keywords: 4189, top10: 312, top3: 57, traffic: 9478, pages: 80, avgPos: 19.1, ctr: 2.4 },
      { month: "Jun '26", keywords: 5234, top10: 387, top3: 71, traffic: 10847, pages: 85, avgPos: 17.4, ctr: 2.6 },
      { month: "Jul '26", keywords: 6128, top10: 448, top3: 84, traffic: 11923, pages: 89, avgPos: 16.2, ctr: 2.7 },
      { month: "Aug '26", keywords: 6894, top10: 503, top3: 96, traffic: 12714, pages: 92, avgPos: 15.3, ctr: 2.8 },
      { month: "Sep '26", keywords: 7482, top10: 548, top3: 107, traffic: 13287, pages: 95, avgPos: 14.7, ctr: 2.9 },
      { month: "Oct '26", keywords: 7943, top10: 581, top3: 116, traffic: 13841, pages: 97, avgPos: 14.2, ctr: 3.0 },
      { month: "Nov '26", keywords: 8347, top10: 612, top3: 124, traffic: 14218, pages: 99, avgPos: 13.8, ctr: 3.1 }
    ]
  },

  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$92.9K" },
      { label: "Total Qualified Leads", value: "250" },
      { label: "Avg CPQL", value: "$371.51" },
      { label: "Total Revenue", value: "$374.8K" },
      { label: "Blended ROAS", value: "4.04x" }
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
      { month: "Sep '25", spend: 5124, leads: 71, cpl: 72.17, qualified: 7, cpql: 732.00, deals: 1, revenue: 12800, roas: 2.50 },
      { month: "Oct '25", spend: 5247, leads: 76, cpl: 69.04, qualified: 8, cpql: 655.88, deals: 1, revenue: 13400, roas: 2.55 },
      { month: "Nov '25", spend: 5183, leads: 72, cpl: 71.99, qualified: 7, cpql: 740.43, deals: 1, revenue: 11800, roas: 2.28 },
      { month: "Dec '25", spend: 5068, leads: 68, cpl: 74.53, qualified: 7, cpql: 724.00, deals: 1, revenue: 12200, roas: 2.41 },
      { month: "Jan '26", spend: 5312, leads: 83, cpl: 64.00, qualified: 9, cpql: 590.22, deals: 1, revenue: 14600, roas: 2.75 },
      { month: "Feb '26", spend: 5478, leads: 94, cpl: 58.28, qualified: 11, cpql: 498.00, deals: 2, revenue: 24800, roas: 4.53 },
      { month: "Mar '26", spend: 5693, leads: 107, cpl: 53.21, qualified: 13, cpql: 437.92, deals: 2, revenue: 26400, roas: 4.64 },
      { month: "Apr '26", spend: 6147, leads: 121, cpl: 50.80, qualified: 16, cpql: 384.19, deals: 2, revenue: 28200, roas: 4.59 },
      { month: "May '26", spend: 6584, leads: 134, cpl: 49.13, qualified: 19, cpql: 346.53, deals: 2, revenue: 29600, roas: 4.50 },
      { month: "Jun '26", spend: 6923, leads: 148, cpl: 46.78, qualified: 22, cpql: 314.68, deals: 3, revenue: 32400, roas: 4.68 },
      { month: "Jul '26", spend: 7218, leads: 159, cpl: 45.40, qualified: 24, cpql: 300.75, deals: 3, revenue: 33600, roas: 4.66 },
      { month: "Aug '26", spend: 7412, leads: 168, cpl: 44.12, qualified: 26, cpql: 285.08, deals: 3, revenue: 34800, roas: 4.70 },
      { month: "Sep '26", spend: 7347, leads: 164, cpl: 44.80, qualified: 25, cpql: 293.88, deals: 3, revenue: 34200, roas: 4.65 },
      { month: "Oct '26", spend: 7128, leads: 174, cpl: 40.97, qualified: 27, cpql: 264.00, deals: 3, revenue: 33300, roas: 4.67 },
      { month: "Nov '26", spend: 7014, leads: 183, cpl: 38.33, qualified: 29, cpql: 241.86, deals: 3, revenue: 32700, roas: 4.66 }
    ]
  },

  impact: [
    { label: "Total Revenue", value: "$374.8K", growth: "" },
    { label: "Blended ROAS", value: "4.04x", growth: "" },
    { label: "Total Qualified Leads", value: "250", growth: "" },
    { label: "Avg CPQL", value: "$371.51", growth: "↓67% from $732 baseline" },
    { label: "Organic Keywords", value: "8,347", growth: "+7,353% from 112" },
    { label: "Organic Clicks", value: "14,218/mo", growth: "+3,949% from 351/mo" }
  ]
};
