import { CaseStudyData } from "./types";

export const consumerFinancialServices: CaseStudyData = {
  slug: "consumer-financial-services",
  industry: "Consumer Financial Services",
  headline: "How a National Consumer Financial Services Company Increased Qualified Leads 145% With AI-Powered Paid Advertising",
  subheadline: "MEGA helped a consumer financial services company build a scalable lead generation engine nationwide, reducing cost per qualified lead 48% and generating $77.1K in attributed revenue over 5 months.",
  heroStats: [
    { value: "5", unit: "months", label: "Partnership Duration" },
    { value: "83", unit: "", label: "Qualified Leads Generated" },
    { value: "$77.1K", unit: "", label: "Revenue Attributed" },
  ],
  tags: ["Paid Advertising"],
  company: {
    industry: "Consumer Financial Services",
    employees: "28",
    revenue: "$4.2M",
    location: "Nationwide",
    description: "A consumer financial services company operating nationwide, offering personal loans, debt consolidation, and credit advisory services to individuals seeking financial solutions. With average deal values ranging from $2,800 to $3,200 per closed client, the company had relied primarily on purchased lead lists and affiliate partnerships to drive new business — generating inconsistent volume at unpredictable costs. Prior paid advertising attempts had produced high volumes of unqualified inquiries from individuals who didn't meet basic eligibility criteria, inflating cost per acquisition and frustrating the sales team. The company needed a systematic approach to generating qualified inbound leads at a sustainable cost while scaling nationally.",
  },
  challenges: [
    {
      title: "High Cost Per Qualified Lead With Low Conversion Rates",
      description: "The company's previous advertising efforts averaged a cost per qualified lead above $290, with only 28% of total leads meeting basic qualification criteria. The sales team spent significant time filtering through unqualified inquiries — individuals with credit profiles, income levels, or debt situations that fell outside the company's lending parameters. The result was wasted ad spend and a frustrated sales organization that had lost confidence in digital marketing as a growth channel.",
    },
    {
      title: "Inconsistent Lead Volume and Pipeline Visibility",
      description: "Monthly qualified lead volume fluctuated between 15 and 35 with no predictable pattern. The company's reliance on third-party lead aggregators meant pricing and volume were dictated by external partners, and lead quality varied dramatically week to week. There was no systematic attribution connecting marketing spend to closed deals, making it impossible to calculate true customer acquisition cost or forecast revenue from marketing investment.",
    },
    {
      title: "National Scale Without Geographic Targeting Infrastructure",
      description: "Operating across all 50 states meant the company faced dramatically different competitive landscapes, regulatory environments, and consumer behaviors by region. Previous campaigns used a one-size-fits-all national approach with no geographic bid adjustments, regional creative variations, or state-specific compliance messaging. High-cost markets like California and New York consumed disproportionate budget without proportional return, while underserved markets with lower competition remained untapped.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full audit of prior paid advertising campaigns — identified $1,800/month in wasted spend on broad keywords attracting unqualified traffic seeking free credit reports and government assistance programs",
        "Implemented proper conversion tracking with CRM integration to track leads from ad click through qualification, sales contact, and closed deal — establishing true cost per acquisition baseline",
        "Built comprehensive keyword strategy targeting high-intent consumer financial services searches — debt consolidation quotes, personal loan pre-qualification, and credit improvement services",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget, and refining audience targeting in real time rather than waiting for weekly agency review cycles",
        "Launched initial campaigns with 12 AI-generated ad variations testing different hooks: urgency-based messaging, savings quantification, and eligibility pre-qualification framing",
        "Created geographic bid modifiers based on state-level regulatory requirements and competitive density — reducing bids in saturated coastal markets while increasing investment in underserved regions with lower competition and strong demand signals",
        "Implemented negative keyword lists to systematically exclude searches for free government programs, bankruptcy filings, and payday lending — the primary sources of unqualified traffic in prior campaigns",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Optimization & Scaling",
      items: [
        "Reviewed 30-day performance data and refined targeting based on CRM qualification feedback — identified that leads from debt consolidation searches converted to qualified at 2.4x the rate of general personal loan searches",
        "Expanded ad creative testing to 20+ variations with AI generating new iterations based on winning patterns — testing financial savings calculators, pre-qualification messaging, and trust-building compliance language",
        "AI agents identified underperforming geographic segments within hours and automatically shifted budget to top-performing regions — compounding small daily optimizations instead of waiting for monthly agency reviews",
        "Launched retargeting campaigns for visitors who started but didn't complete lead forms — recovering an estimated 15% of abandoned applications",
        "Refined audience segmentation by credit profile indicators and financial intent signals, reducing unqualified lead volume while increasing overall qualified lead count",
        "Built landing page variants tailored to specific financial product categories — debt consolidation, personal loans, and credit advisory — improving relevance scores and reducing cost per click across all campaigns",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Scaled budget allocation based on 60-day attribution data — shifted investment toward debt consolidation and credit advisory campaigns showing strongest qualified lead to closed deal ratios",
        "Advanced audience segmentation using financial behavior signals — targeting consumers actively researching debt solutions, comparing loan rates, and visiting financial education content",
        "AI agents analyzed conversion patterns across hundreds of geographic and demographic segments, identifying micro-opportunities invisible to manual review — a regional surge in debt consolidation demand was captured within hours of detection",
        "Expanded creative testing to include testimonial-style ads (anonymized) and educational content positioning the company as a trusted financial resource rather than a hard-sell lender",
        "Continuous optimization compounded daily improvements into significant monthly gains — bid adjustments, audience refinements, and budget reallocations happening in real time rather than the typical agency cycle of days or weeks",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Budget reallocation driven by full-funnel attribution data — prioritized campaigns and regions with highest revenue per marketing dollar, not just lowest cost per lead",
        "Seasonal campaign adjustments for tax season and New Year financial resolution surge — ramped spend in January and February to capture elevated demand for debt consolidation and financial planning services",
        "Audience pruning removed low-converting segments while lookalike modeling expanded reach to prospects matching the profile of highest-value closed clients",
        "Weekly reporting with complete attribution from ad impression through qualified lead to closed deal and revenue — enabling data-driven budget forecasting for the next quarter",
        "When New Year demand surged in January, AI agents restructured campaigns within hours to capture the seasonal opportunity — reallocating budget to high-intent keywords that would take traditional agencies days to identify and act on",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$35.9K" },
      { label: "Qualified Leads", value: "83" },
      { label: "Avg Cost Per Qualified Lead", value: "$432", note: "↓48% from $607" },
      { label: "New Clients Acquired", value: "25" },
    ],
    monthly: [
      { month: "Oct '25", spend: 6675, leads: 68, cpl: 98.16, qualified: 11, cpql: 606.82, deals: 3, revenue: 8550, roas: 1.28 },
      { month: "Nov '25", spend: 7124, leads: 87, cpl: 81.89, qualified: 14, cpql: 508.86, deals: 4, revenue: 11680, roas: 1.64 },
      { month: "Dec '25", spend: 6843, leads: 82, cpl: 83.45, qualified: 14, cpql: 488.79, deals: 4, revenue: 12320, roas: 1.80 },
      { month: "Jan '26", spend: 7392, leads: 112, cpl: 66.00, qualified: 19, cpql: 389.05, deals: 6, revenue: 18900, roas: 2.56 },
      { month: "Feb '26", spend: 7856, leads: 138, cpl: 56.93, qualified: 25, cpql: 314.24, deals: 8, revenue: 25680, roas: 3.27 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$77.1K", growth: "+200%" },
    { label: "Qualified Leads Generated", value: "83", growth: "11 → 25/mo" },
    { label: "Avg Deal Value", value: "$3.1K", growth: "" },
    { label: "Blended ROAS", value: "2.15x", growth: "" },
  ],
};
