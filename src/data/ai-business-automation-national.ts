import { CaseStudyData } from "./types";

export const aiBusinessAutomationNational: CaseStudyData = {
  slug: "ai-business-automation-national",
  industry: "AI Business Automation",
  headline: "How an AI Automation Firm Grew Qualified Meetings 233% in 9 Months Through Paid Advertising",
  subheadline: "MEGA helped a B2B AI business automation consultancy scale from scattered paid campaigns to a disciplined lead generation engine — growing booked meetings with qualified decision-makers from 9 to 30 per month while maintaining cost efficiency. Over 9 months, the firm closed 25 deals worth $222.7K in revenue at a 3.64x blended ROAS.",
  heroStats: [
    { value: "233", unit: "%", label: "Growth in Qualified Meetings" },
    { value: "25", unit: "", label: "Deals Closed" },
    { value: "$222.7", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Paid Advertising", "AI-Powered Optimization", "B2B Lead Generation"],
  company: {
    industry: "AI Business Automation",
    employees: "14",
    revenue: "$1.8M",
    location: "Denver, CO (Serving Clients Nationwide)",
    description: "A boutique AI automation consultancy based in Denver helping mid-market companies streamline operations through custom AI workflow solutions, intelligent document processing, chatbot deployment, and process automation. The firm targets operations leaders and COOs at companies with 50–500 employees across industries including logistics, healthcare administration, and professional services. With an average project value around $9,150 and a 45-day average sales cycle, the business had strong referral-based revenue but lacked a predictable paid acquisition channel. Previous attempts at Google Ads had been managed by a generalist freelancer, producing high volumes of unqualified clicks from small businesses and solopreneurs who couldn't afford enterprise automation solutions.",
  },
  challenges: [
    {
      title: "Unqualified Traffic Dominating Paid Campaigns",
      description: "Over 70% of inbound leads from paid advertising were solopreneurs, freelancers, or small businesses with budgets under $2K — well below the firm's $5K minimum project threshold. The sales team was spending 15+ hours per week on discovery calls that went nowhere, creating frustration and skepticism about paid channels as a growth lever.",
    },
    {
      title: "No Systematic Lead Qualification or Meeting Booking Process",
      description: "Leads submitted a basic contact form and waited for a manual email follow-up, often 24–48 hours later. There was no lead scoring, no automated qualification questions, and no self-scheduling option for discovery calls. By the time sales reached out, prospects had often moved on to competitors who responded faster.",
    },
    {
      title: "Inability to Differentiate From Low-Cost Automation Tools",
      description: "Generic ad copy positioned the firm alongside DIY automation platforms like Zapier and Make.com, attracting cost-conscious users looking for $50/month tools rather than $5K+ custom implementation projects. The messaging failed to communicate the consultancy's enterprise-grade approach and white-glove service model.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Qualification Infrastructure",
      items: [
        "Complete audit of existing Google Ads account — identified $1,400/mo in wasted spend on broad-match terms like 'automation tools' and 'AI chatbot free' attracting DIY users",
        "Rebuilt campaign architecture around three high-intent segments: operations automation, document processing, and AI workflow consulting — each with dedicated ad groups and landing pages",
        "Implemented multi-step qualification form replacing the basic contact form: company size, annual revenue range, automation budget, and specific pain point — filtering out sub-$5K prospects before they reached sales",
        "Deployed always-on AI optimization agents within the ad account for continuous bid management, budget allocation, and audience refinement — replacing the previous freelancer's weekly login-and-adjust approach",
        "Created negative keyword list of 280+ terms including 'free,' 'cheap,' 'tutorial,' 'course,' 'Zapier alternative,' and 'no code' to block unqualified traffic",
        "Built integrated calendar scheduling into the qualification flow — qualified prospects could book discovery calls immediately, reducing response time from 48 hours to under 5 minutes",
        "Established baseline tracking with CRM attribution: ad click → form fill → qualified meeting → proposal → closed deal",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Optimization & Qualification Refinement",
      items: [
        "A/B tested 8 landing page variants — winning version featuring ROI calculator and industry-specific case references increased qualified meeting booking rate 31%",
        "Launched LinkedIn Ads targeting operations directors and COOs at companies with 50–500 employees, complementing Google search campaigns with platform-specific B2B targeting",
        "AI agents analyzed conversion data daily, identifying that healthcare administration and logistics verticals converted at 2.7x the rate of general business queries — automatically shifting 40% of budget toward these segments",
        "Implemented retargeting sequences for pricing page visitors and case study readers with 5-touch nurture cadence emphasizing enterprise ROI and implementation timelines",
        "Refined qualification scoring: leads from companies with 100+ employees and stated automation budgets above $10K routed to senior consultants within 2 hours",
        "Negative keyword expansion — added 140+ new exclusions based on search term analysis, blocking 'RPA developer,' 'automation engineer jobs,' and similar non-buyer intent queries",
        "Began testing increased budget allocation: monitoring cost per qualified meeting stability as spend scaled from baseline",
      ],
    },
    {
      phase: 3,
      months: "90–180 days",
      title: "Scaling & Pipeline Acceleration",
      items: [
        "With cost per qualified meeting holding steady, scaled monthly spend confidently from the $6K range toward $8K+",
        "Launched account-based campaigns targeting a curated list of 150 mid-market companies identified through firmographic data as high-fit prospects",
        "AI optimization agents detected seasonal demand patterns — increased budget allocation to healthcare administration prospects during Q4 budget planning season, capturing 34% more qualified meetings in that vertical",
        "Multi-touch attribution model fully operational: budget decisions driven by actual closed-deal contribution, not platform-reported conversions",
        "Expanded geographic targeting from initial focus on Mountain West and Midwest to include Southeast and Northeast metro areas showing strong intent signals",
        "Speed of iteration advantage: when a new competitor entered the market with aggressive Google Ads, AI agents detected the CPL increase within hours and reallocated budget to LinkedIn and retargeting channels where competition was lower — a response that would have taken a traditional agency 1–2 weeks",
        "Reduced average time from qualified meeting to proposal delivery from 8 days to 3 days through streamlined discovery call process",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$61.2K" },
      { label: "Total Leads", value: "418" },
      { label: "Avg Cost Per Qualified Meeting", value: "$371", note: "Down 41% from baseline" },
      { label: "Closed Deals", value: "25" },
    ],
    columnLabels: {
      leads: "Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Meetings",
      cpql: "Cost/Meeting",
      deals: "Closed Deals",
      costPerDeal: "Cost/Deal",
    },
    monthly: [
      { month: "Jun '25", spend: 5674, leads: 27, cpl: 210, qualified: 9,  cpql: 630, deals: 1, revenue: 8700,  roas: 1.53 },
      { month: "Jul '25", spend: 5812, leads: 31, cpl: 187, qualified: 11, cpql: 528, deals: 2, revenue: 18400, roas: 3.17 },
      { month: "Aug '25", spend: 6147, leads: 36, cpl: 171, qualified: 13, cpql: 473, deals: 2, revenue: 17200, roas: 2.80 },
      { month: "Sep '25", spend: 6483, leads: 40, cpl: 162, qualified: 16, cpql: 405, deals: 3, revenue: 27900, roas: 4.30 },
      { month: "Oct '25", spend: 6891, leads: 45, cpl: 153, qualified: 18, cpql: 383, deals: 3, revenue: 26100, roas: 3.79 },
      { month: "Nov '25", spend: 7214, leads: 49, cpl: 147, qualified: 21, cpql: 344, deals: 3, revenue: 28350, roas: 3.93 },
      { month: "Dec '25", spend: 6738, leads: 53, cpl: 127, qualified: 20, cpql: 337, deals: 2, revenue: 19400, roas: 2.88 },
      { month: "Jan '26", spend: 7893, leads: 65, cpl: 121, qualified: 27, cpql: 292, deals: 4, revenue: 37600, roas: 4.76 },
      { month: "Feb '26", spend: 8361, leads: 72, cpl: 116, qualified: 30, cpql: 279, deals: 5, revenue: 39000, roas: 4.66 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$222.7K", growth: "+348%" },
    { label: "Qualified Meetings", value: "165", growth: "+233%" },
    { label: "Avg Deal Value", value: "$8,906", growth: "" },
    { label: "Blended ROAS", value: "3.64x", growth: "" },
  ],
};
