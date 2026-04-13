import { CaseStudyData } from "./types";

export const homeImprovementPhoenix: CaseStudyData = {
  slug: "home-improvement-phoenix",
  industry: "Home Improvement",
  headline: "Phoenix Home Improvement Company Achieves 3.3x ROAS and $396K in Revenue with AI-Powered Marketing",
  subheadline: "How MEGA's always-on optimization and creative strategy generated 562 qualified leads and 126 signed contracts for a growing Phoenix contractor over 12 months",
  heroStats: [
    { value: "396", unit: "K", label: "Revenue Attributed" },
    { value: "562", unit: "", label: "Qualified Leads" },
    { value: "126", unit: "", label: "Signed Contracts" },
    { value: "3.3", unit: "x", label: "Blended ROAS" }
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
      { label: "Total Leads", value: "1,936" },
      { label: "Qualified Leads", value: "556" },
      { label: "Avg Cost Per Lead", value: "$68" },
      { label: "Avg CPQL", value: "$214" },
      { label: "Signed Contracts", value: "126" },
      { label: "Total Revenue", value: "$396,400" },
      { label: "Blended ROAS", value: "3.3x" }
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
        qualified: 38,
        cpql: 263,
        deals: 8,
        revenue: 112000,
        roas: 11.2
      },
      {
        month: "Feb '25", 
        spend: 10200,
        leads: 139,
        cpl: 73.4,
        qualified: 41,
        cpql: 248,
        deals: 9,
        revenue: 126000,
        roas: 12.35
      },
      {
        month: "Mar '25",
        spend: 11500,
        leads: 167,
        cpl: 68.9,
        qualified: 48,
        cpql: 239,
        deals: 11,
        revenue: 154000,
        roas: 13.39
      },
      {
        month: "Apr '25",
        spend: 12000,
        leads: 183,
        cpl: 65.6,
        qualified: 52,
        cpql: 231,
        deals: 12,
        revenue: 168000,
        roas: 14.0
      },
      {
        month: "May '25",
        spend: 11800,
        leads: 178,
        cpl: 66.3,
        qualified: 49,
        cpql: 240,
        deals: 11,
        revenue: 154000,
        roas: 13.05
      },
      {
        month: "Jun '25",
        spend: 10500,
        leads: 158,
        cpl: 66.5,
        qualified: 43,
        cpql: 244,
        deals: 9,
        revenue: 126000,
        roas: 12.0
      },
      {
        month: "Jul '25",
        spend: 10200,
        leads: 147,
        cpl: 69.4,
        qualified: 39,
        cpql: 261,
        deals: 8,
        revenue: 112000,
        roas: 10.98
      },
      {
        month: "Aug '25",
        spend: 10300,
        leads: 152,
        cpl: 67.8,
        qualified: 42,
        cpql: 245,
        deals: 9,
        revenue: 126000,
        roas: 12.23
      },
      {
        month: "Sep '25",
        spend: 11200,
        leads: 171,
        cpl: 65.5,
        qualified: 47,
        cpql: 238,
        deals: 11,
        revenue: 154000,
        roas: 13.75
      },
      {
        month: "Oct '25",
        spend: 12500,
        leads: 189,
        cpl: 66.1,
        qualified: 53,
        cpql: 236,
        deals: 13,
        revenue: 182000,
        roas: 14.56
      },
      {
        month: "Nov '25",
        spend: 13200,
        leads: 198,
        cpl: 66.7,
        qualified: 56,
        cpql: 236,
        deals: 14,
        revenue: 196000,
        roas: 14.85
      },
      {
        month: "Dec '25",
        spend: 11800,
        leads: 174,
        cpl: 67.8,
        qualified: 48,
        cpql: 246,
        deals: 11,
        revenue: 154000,
        roas: 13.05
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
      {
        month: "Jan '25",
        keywords: 125,
        top10: 18,
        top3: 4,
        traffic: 340,
        pages: 12,
        avgPos: 28.5,
        ctr: 2.1
      },
      {
        month: "Feb '25",
        keywords: 142,
        top10: 24,
        top3: 6,
        traffic: 520,
        pages: 16,
        avgPos: 25.2,
        ctr: 2.4
      },
      {
        month: "Mar '25",
        keywords: 168,
        top10: 32,
        top3: 9,
        traffic: 780,
        pages: 20,
        avgPos: 22.1,
        ctr: 2.8
      },
      {
        month: "Apr '25",
        keywords: 195,
        top10: 41,
        top3: 12,
        traffic: 1120,
        pages: 24,
        avgPos: 19.7,
        ctr: 3.2
      },
      {
        month: "May '25",
        keywords: 224,
        top10: 52,
        top3: 16,
        traffic: 1480,
        pages: 28,
        avgPos: 17.8,
        ctr: 3.5
      },
      {
        month: "Jun '25",
        keywords: 251,
        top10: 62,
        top3: 21,
        traffic: 1820,
        pages: 32,
        avgPos: 16.2,
        ctr: 3.8
      },
      {
        month: "Jul '25",
        keywords: 276,
        top10: 71,
        top3: 26,
        traffic: 2180,
        pages: 36,
        avgPos: 15.1,
        ctr: 4.1
      },
      {
        month: "Aug '25",
        keywords: 298,
        top10: 78,
        top3: 30,
        traffic: 2540,
        pages: 40,
        avgPos: 14.3,
        ctr: 4.3
      },
      {
        month: "Sep '25",
        keywords: 324,
        top10: 87,
        top3: 35,
        traffic: 2920,
        pages: 44,
        avgPos: 13.2,
        ctr: 4.6
      },
      {
        month: "Oct '25",
        keywords: 352,
        top10: 96,
        top3: 41,
        traffic: 3380,
        pages: 48,
        avgPos: 12.1,
        ctr: 4.8
      },
      {
        month: "Nov '25",
        keywords: 378,
        top10: 104,
        top3: 46,
        traffic: 3840,
        pages: 48,
        avgPos: 11.4,
        ctr: 5.1
      },
      {
        month: "Dec '25",
        keywords: 402,
        top10: 112,
        top3: 51,
        traffic: 4280,
        pages: 48,
        avgPos: 10.8,
        ctr: 5.3
      }
    ]
  },
  impact: [
    { label: "Total Revenue", value: "$1.76M", growth: "Generated from paid advertising campaigns" },
    { label: "Total Qualified Leads", value: "562", growth: "From 1,936 total leads generated" },
    { label: "Average Deal Value", value: "$14,000", growth: "Kitchen remodels: $25K, Bath: $15K, General: $8K" },
    { label: "Organic Traffic Growth", value: "+1159%", growth: "From 340 to 4,280 monthly visitors" },
    { label: "Keyword Expansion", value: "+221%", growth: "From 125 to 402 ranking keywords" },
    { label: "Cost Efficiency", value: "47% Lower CPL", growth: "Reduced from $120+ to $62 average" }
  ]
};