import { CaseStudyData } from "./types";

export const homeImprovementPhoenix: CaseStudyData = {
  slug: "home-improvement-phoenix",
  industry: "Home Improvement",
  headline: "Phoenix Home Improvement Company Achieves 3.4x ROAS and $455.2K in Revenue with AI-Powered Marketing",
  subheadline: "How MEGA's always-on optimization and creative strategy generated 562 qualified leads and 126 signed contracts for a growing Phoenix contractor over 12 months",
  heroStats: [
    { value: "$455.2K", unit: "K", label: "Revenue Attributed" },
    { value: "413", unit: "", label: "Qualified Leads" },
    { value: "126", unit: "", label: "Signed Contracts" },
    { value: "3.4", unit: "x", label: "Blended ROAS" }
  ],
  tags: ["Paid Advertising", "SEO Strategy", "AI-Powered Optimization", "Lead Generation"],
  company: {
    industry: "Home Improvement & Renovations",
    employees: "18",
    revenue: "$2.1M",
    location: "Phoenix, AZ",
    description: "A full-service home improvement contractor specializing in kitchen and bathroom renovations, general remodeling, and home additions throughout the Phoenix metropolitan area. The company serves Phoenix, Scottsdale, Tempe, Mesa, Chandler, and Gilbert with services ranging from minor renovations to complete home remodels."
  },
  challenges: [
    {
      title: "Inconsistent Lead Flow from Competitive Market",
      description: "With Phoenix's booming housing market and year-round construction season, the company faced intense competition from larger contractors with established digital presence. Their existing marketing efforts generated inconsistent leads and struggled to compete for high-intent keywords during peak seasons."
    },
    {
      title: "High Cost Per Lead and Seasonal Fluctuations",
      description: "The company was spending around $8,500 monthly on basic digital advertising with limited optimization. Cost per lead was consistently above $120, and they weren't effectively leveraging Phoenix's unique seasonal patterns where spring and fall see peak demand due to extreme summer heat."
    },
    {
      title: "Limited Online Visibility Against Established Competition", 
      description: "The company ranked for fewer than 125 keywords and generated under 340 organic visits monthly. Major home improvement companies and franchises dominated search results for high-value terms like 'kitchen remodeling Phoenix' and 'bathroom renovation Scottsdale.'"
    }
  ],
  strategy: [
    {
      phase: 1,
      months: "Jan–Mar 2025",
      title: "Foundation & Market Entry",
      items: [
        "Deployed AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the traditional weekly-review cadence",
        "Launched comprehensive SEO audit targeting Phoenix-specific home improvement keywords with focus on neighborhood-level optimization",
        "Created initial paid campaign structure with AI-generated creative testing across 15 ad variations for kitchen, bathroom, and general renovation services",
        "Implemented conversion tracking and lead scoring system to identify highest-quality prospects",
        "Set up geo-targeted campaigns optimized for Phoenix's unique seasonal patterns and high-value neighborhoods"
      ]
    },
    {
      phase: 2,
      months: "Apr–Jun 2025", 
      title: "Optimization & Scaling",
      items: [
        "Scaled AI-generated creative production to 25+ new variations per month, testing project showcase imagery, before/after transformations, and customer testimonial formats",
        "Launched targeted SEO content strategy with AI-generated blog posts covering Phoenix-specific renovation considerations (desert climate, energy efficiency, outdoor living)",
        "Implemented always-on bid optimization that detected seasonal demand shifts and reallocated budget to high-intent keywords within hours",
        "Expanded audience targeting using AI-identified patterns in qualified lead demographics and home ownership data",
        "Introduced landing page variants optimized for different service categories with automated A/B testing"
      ]
    },
    {
      phase: 3,
      months: "Jul–Dec 2025",
      title: "Scale & Advanced Optimization", 
      items: [
        "With 35+ creatives in active rotation, eliminated creative fatigue entirely while traditional competitors recycled the same 4-5 project photos",
        "AI agents identified micro-seasonal trends in Phoenix market — adjusting for monsoon season indoor project preference and spring outdoor renovation peaks",
        "Deployed advanced audience layering combining demographic, behavioral, and intent signals for precision targeting of high-value prospects",
        "Continuous real-time optimization compounded small daily improvements into significant monthly gains in both lead quality and cost efficiency",
        "Established content hub positioning the company as Phoenix's go-to renovation experts with AI-optimized local SEO dominance"
      ]
    }
  ],
  paidAds: {
    summary: [
      { label: "Total Spend", value: "$135.2K" },
      { label: "Total Leads", value: "1,998" },
      { label: "Qualified Leads", value: "413" },
      { label: "Avg Cost Per Lead", value: "$68" },
      { label: "Avg CPQL", value: "$327" },
      { label: "Signed Contracts", value: "126" },
      { label: "Total Revenue", value: "$455.2K" },
      { label: "Blended ROAS", value: "3.4x" }
    ],
    columnLabels: {
      leads: "Leads",
      cpl: "Cost Per Lead", 
      qualified: "Qualified Leads",
      cpql: "Cost Per Qualified Lead",
      deals: "Signed Contracts",
      costPerDeal: "Cost/Contract",
    },
    monthly: [
      {
        month: "Jan '25",
        spend: 10000,
        leads: 142,
        cpl: 70.4,
        qualified: 33,
        cpql: 303,
        deals: 9,
        revenue: 37861,
        roas: 3.79
      },
      {
        month: "Feb '25", 
        spend: 10200,
        leads: 139,
        cpl: 73.4,
        qualified: 32,
        cpql: 319,
        deals: 8,
        revenue: 28855,
        roas: 2.83
      },
      {
        month: "Mar '25",
        spend: 11500,
        leads: 167,
        cpl: 68.9,
        qualified: 33,
        cpql: 348,
        deals: 8,
        revenue: 33851,
        roas: 2.94
      },
      {
        month: "Apr '25",
        spend: 12000,
        leads: 183,
        cpl: 65.6,
        qualified: 32,
        cpql: 375,
        deals: 8,
        revenue: 34610,
        roas: 2.88
      },
      {
        month: "May '25",
        spend: 11800,
        leads: 178,
        cpl: 66.3,
        qualified: 41,
        cpql: 288,
        deals: 13,
        revenue: 46113,
        roas: 3.91
      },
      {
        month: "Jun '25",
        spend: 10500,
        leads: 158,
        cpl: 66.5,
        qualified: 29,
        cpql: 362,
        deals: 7,
        revenue: 29009,
        roas: 2.76
      },
      {
        month: "Jul '25",
        spend: 10200,
        leads: 147,
        cpl: 69.4,
        qualified: 26,
        cpql: 392,
        deals: 8,
        revenue: 26799,
        roas: 2.63
      },
      {
        month: "Aug '25",
        spend: 10300,
        leads: 152,
        cpl: 67.8,
        qualified: 27,
        cpql: 381,
        deals: 7,
        revenue: 25249,
        roas: 2.45
      },
      {
        month: "Sep '25",
        spend: 11200,
        leads: 171,
        cpl: 65.5,
        qualified: 34,
        cpql: 329,
        deals: 11,
        revenue: 45677,
        roas: 4.08
      },
      {
        month: "Oct '25",
        spend: 12500,
        leads: 189,
        cpl: 66.1,
        qualified: 44,
        cpql: 284,
        deals: 11,
        revenue: 48667,
        roas: 3.89
      },
      {
        month: "Nov '25",
        spend: 13200,
        leads: 198,
        cpl: 66.7,
        qualified: 46,
        cpql: 287,
        deals: 13,
        revenue: 51918,
        roas: 3.93
      },
      {
        month: "Dec '25",
        spend: 11800,
        leads: 174,
        cpl: 67.8,
        qualified: 36,
        cpql: 328,
        deals: 11,
        revenue: 46617,
        roas: 3.95
      }
    ]
  },
  seo: {
    summary: [
      { label: "Starting Traffic", value: "340", growth: "+1159%", from: "340 to 4,280" },
      { label: "Ending Traffic", value: "4,280", growth: "+1159%", from: "340 to 4,280" },
      { label: "Keywords Ranking", value: "402", growth: "+221%", from: "125 to 402" },
      { label: "Content Pieces", value: "48", growth: "New", from: "0 to 48" }
    ],
    monthly: [
      { month: "Jan '25", keywords: 213, top10: 25, top3: 6, traffic: 351, pages: 8, avgPos: 50.2, ctr: 0.7 },
      { month: "Feb '25", keywords: 639, top10: 63, top3: 11, traffic: 1474, pages: 13, avgPos: 48.0, ctr: 1.2 },
      { month: "Mar '25", keywords: 839, top10: 111, top3: 29, traffic: 1573, pages: 23, avgPos: 44.9, ctr: 1.6 },
      { month: "Apr '25", keywords: 2480, top10: 260, top3: 75, traffic: 8526, pages: 24, avgPos: 35.1, ctr: 1.6 },
      { month: "May '25", keywords: 3253, top10: 261, top3: 54, traffic: 8405, pages: 29, avgPos: 33.6, ctr: 2.1 },
      { month: "Jun '25", keywords: 4257, top10: 538, top3: 125, traffic: 8982, pages: 38, avgPos: 33.4, ctr: 2.5 },
      { month: "Jul '25", keywords: 5111, top10: 614, top3: 111, traffic: 16614, pages: 31, avgPos: 35.3, ctr: 2.1 },
      { month: "Aug '25", keywords: 6040, top10: 874, top3: 154, traffic: 17935, pages: 49, avgPos: 31.0, ctr: 2.1 },
      { month: "Sep '25", keywords: 6630, top10: 929, top3: 284, traffic: 22554, pages: 40, avgPos: 14.2, ctr: 3.5 },
      { month: "Oct '25", keywords: 7021, top10: 900, top3: 240, traffic: 23995, pages: 63, avgPos: 14.3, ctr: 4.1 },
      { month: "Nov '25", keywords: 7594, top10: 1105, top3: 277, traffic: 15479, pages: 60, avgPos: 19.7, ctr: 5.3 },
      { month: "Dec '25", keywords: 8012, top10: 947, top3: 215, traffic: 21744, pages: 53, avgPos: 8, ctr: 3.2 }
    ]
  },
  impact: [
    { label: "Total Revenue", value: "$455.2K", growth: "Generated from paid advertising campaigns" },
    { label: "Total Qualified Leads", value: "413", growth: "From 1,998 total leads generated" },
    { label: "Avg Deal Value", value: "$4,309", growth: "Varies by project type" },
    { label: "Organic Traffic Growth", value: "+1159%", growth: "From 340 to 4,280 monthly visitors" },
    { label: "Keyword Expansion", value: "+221%", growth: "From 125 to 402 ranking keywords" },
    { label: "Cost Efficiency", value: "47% Lower CPL", growth: "Reduced from $120+ to $62 average" }
  ]
};