import { CaseStudyData } from "./types";

export const roofingTexas: CaseStudyData = {
  slug: "roofing-texas",
  industry: "Roofing",
  headline: "How a Texas Roofing Company Generated $489.7K in Revenue Through Paid Advertising in 8 Months",
  subheadline: "Leveraging AI-powered ad optimization to capture storm season demand and dominate Texas's competitive roofing market",
  heroStats: [
    { value: "489.7", unit: "K", label: "Total Revenue Generated" },
    { value: "3.74", unit: "x", label: "Blended ROAS" },
    { value: "587", unit: "", label: "Qualified Leads" }
  ],
  tags: ["Paid Advertising", "Lead Generation", "Local"],

  company: {
    industry: "Roofing",
    employees: "15-30",
    revenue: "$2-4M annually",
    location: "Texas",
    description: "A residential roofing company serving multiple Texas metro areas, specializing in storm damage repairs, full roof replacements, and insurance claim assistance across the Dallas-Fort Worth, Houston, and San Antonio markets."
  },

  challenges: [
    {
      title: "Inability to Capture Storm Season Demand",
      description: "Texas's spring and summer hail season drives massive roofing demand, but the company was losing high-value replacement projects to competitors running aggressive paid campaigns across major Texas metros."
    },
    {
      title: "High Cost Per Lead With Low Conversion",
      description: "Previous advertising efforts produced leads at over $210 per lead with poor qualification rates — many inquiries were price shoppers or outside the service area, wasting budget during the critical storm season window."
    },
    {
      title: "No Systematic Approach to Ad Optimization",
      description: "Campaign management relied on a traditional agency reviewing performance biweekly, missing real-time opportunities to adjust bids during high-demand weather events and competitor shifts across Texas markets."
    }
  ],

  strategy: [
    {
      phase: 1,
      months: "Months 1-2",
      title: "Foundation & Campaign Architecture",
      items: [
        "Comprehensive audit of existing ad accounts and conversion tracking setup across Google and local service ads",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget, and refining audience targeting in real time rather than waiting for biweekly agency review cycles",
        "Built geo-targeted campaign structure covering Dallas-Fort Worth, Houston, San Antonio, and Austin with storm-damage and replacement-specific ad groups",
        "Launched with 12 AI-generated creative variations for display and local campaigns, providing 3x more creative diversity than the previous agency delivered — with zero production costs eating into media spend",
        "Implemented call tracking and form submission attribution to measure true qualified lead flow"
      ]
    },
    {
      phase: 2,
      months: "Months 3-5",
      title: "Storm Season Scaling & Optimization",
      items: [
        "AI agents identified underperforming keywords within hours and automatically shifted budget to top-converting storm damage and emergency repair terms",
        "Scaled spend strategically during peak hail season months, with real-time budget reallocation responding to weather events across Texas regions",
        "Expanded keyword coverage to include insurance claim assistance and specific storm damage types that convert at higher rates",
        "Rotated in fresh ad creative weekly based on performance data, replacing underperformers within days rather than the typical monthly creative refresh cycle",
        "Audience refinement happened automatically as the AI identified which demographics, zip codes, and intent signals drove the highest quality roofing leads"
      ]
    },
    {
      phase: 3,
      months: "Months 6-8",
      title: "Market Expansion & ROAS Optimization",
      items: [
        "Expanded targeting to secondary Texas markets showing strong demand signals identified by AI analysis",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time",
        "When seasonal demand began shifting in late summer, campaigns were restructured within hours to emphasize preventive inspections and fall preparation services",
        "Conversion rate optimization on landing pages improved qualified lead rates by focusing on high-value replacement projects over small repairs",
        "Budget allocation driven by real-time performance data across all Texas metros — not arbitrary splits based on population size"
      ]
    }
  ],

  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$130.9K" },
      { label: "Total Qualified Leads", value: "587" },
      { label: "Avg CPQL", value: "$222.99" },
      { label: "Total Revenue", value: "$489,700" },
      { label: "Blended ROAS", value: "3.74x" }
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
        month: "Mar '25",
        spend: 7500,
        leads: 47,
        cpl: 159.57,
        qualified: 29,
        cpql: 258.62,
        deals: 2,
        revenue: 27400,
        roas: 3.65
      },
      {
        month: "Apr '25",
        spend: 9850,
        leads: 72,
        cpl: 136.81,
        qualified: 48,
        cpql: 205.21,
        deals: 4,
        revenue: 46800,
        roas: 4.75
      },
      {
        month: "May '25",
        spend: 12400,
        leads: 98,
        cpl: 126.53,
        qualified: 67,
        cpql: 185.07,
        deals: 4,
        revenue: 54200,
        roas: 4.37
      },
      {
        month: "Jun '25",
        spend: 28750,
        leads: 234,
        cpl: 122.86,
        qualified: 149,
        cpql: 192.95,
        deals: 6,
        revenue: 87600,
        roas: 3.05
      },
      {
        month: "Jul '25",
        spend: 26300,
        leads: 208,
        cpl: 126.44,
        qualified: 131,
        cpql: 200.76,
        deals: 7,
        revenue: 108500,
        roas: 4.13
      },
      {
        month: "Aug '25",
        spend: 22150,
        leads: 167,
        cpl: 132.63,
        qualified: 98,
        cpql: 226.02,
        deals: 4,
        revenue: 62400,
        roas: 2.82
      },
      {
        month: "Sep '25",
        spend: 14345,
        leads: 103,
        cpl: 139.27,
        qualified: 42,
        cpql: 341.55,
        deals: 3,
        revenue: 57300,
        roas: 3.99
      },
      {
        month: "Oct '25",
        spend: 9600,
        leads: 64,
        cpl: 150.0,
        qualified: 23,
        cpql: 417.39,
        deals: 2,
        revenue: 45500,
        roas: 4.74
      }
    ]
  },

  impact: [
    { label: "Total Revenue Generated", value: "$489.7K", growth: "" },
    { label: "Blended ROAS", value: "3.74x", growth: "" },
    { label: "Total Qualified Leads", value: "587", growth: "" },
    { label: "Cost Per Qualified Lead", value: "$222.99", growth: "-47% from baseline" },
    { label: "Closed Deals", value: "32 roofing projects", growth: "" }
  ]
};
