import { CaseStudyData } from "./types";

export const roofingTexas: CaseStudyData = {
  slug: "roofing-texas",
  industry: "Roofing",
  headline: "How a Texas Roofing Company Generated $516.3K in Revenue Through Paid Advertising in 8 Months",
  subheadline: "Leveraging AI-powered ad optimization to capture storm season demand and dominate Texas's competitive roofing market",
  heroStats: [
    { value: "516.3", unit: "K", label: "Total Revenue Generated" },
    { value: "3.9", unit: "x", label: "Blended ROAS" },
    { value: "591", unit: "", label: "Qualified Leads" }
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
      { label: "Total Qualified Leads", value: "591" },
      { label: "Avg CPQL", value: "$221" },
      { label: "Total Revenue", value: "$516.3K" },
      { label: "Blended ROAS", value: "3.9x" }
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
      { month: "Mar 2025", spend: 7500, leads: 42, cpl: 178.57, qualified: 24, cpql: 312.5, deals: 2, revenue: 22800, roas: 3.04 },
      { month: "Apr 2025", spend: 10850, leads: 61, cpl: 177.87, qualified: 37, cpql: 293.24, deals: 3, revenue: 36200, roas: 3.34 },
      { month: "May 2025", spend: 14400, leads: 84, cpl: 171.43, qualified: 53, cpql: 271.7, deals: 5, revenue: 52400, roas: 3.64 },
      { month: "Jun 2025", spend: 19750, leads: 118, cpl: 167.37, qualified: 78, cpql: 253.21, deals: 7, revenue: 78600, roas: 3.98 },
      { month: "Jul 2025", spend: 23300, leads: 149, cpl: 156.38, qualified: 101, cpql: 230.69, deals: 8, revenue: 97400, roas: 4.18 },
      { month: "Aug 2025", spend: 21150, leads: 142, cpl: 148.94, qualified: 99, cpql: 213.64, deals: 8, revenue: 89200, roas: 4.22 },
      { month: "Sep 2025", spend: 17345, leads: 134, cpl: 129.44, qualified: 96, cpql: 180.68, deals: 7, revenue: 71300, roas: 4.11 },
      { month: "Oct 2025", spend: 16600, leads: 143, cpl: 116.08, qualified: 103, cpql: 161.17, deals: 7, revenue: 68400, roas: 4.12 },
    ]
  },

  impact: [
    { label: "Total Revenue Generated", value: "$516.3K", growth: "" },
    { label: "Blended ROAS", value: "3.94x", growth: "" },
    { label: "Total Qualified Leads", value: "591", growth: "" },
    { label: "Cost Per Qualified Lead", value: "$221", growth: "-48% from baseline" },
    { label: "Closed Deals", value: "47", growth: "" }
  ]
};
