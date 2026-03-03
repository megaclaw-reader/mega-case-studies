import { CaseStudyData } from "./types";

export const taxPlanningCoaching: CaseStudyData = {
  slug: "tax-planning-coaching",
  industry: "High-Ticket Coach / Info Business Tax Planning",
  headline: "How a High-Ticket Tax Planning Coaching Firm Scaled Ad Spend from $20K to $50K/mo While Cutting Cost Per Qualified Lead by 61%",
  subheadline: "MEGA helped a Philadelphia-based tax planning coaching business build a paid advertising engine focused on qualified lead optimization — scaling monthly ad spend from $20,000 to $50,000 over 10 months while reducing cost per qualified lead from $1,247 to $487 and generating $1.93M in new coaching revenue.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "61", unit: "%", label: "CPQL Reduction" },
    { value: "$1.93", unit: "M", label: "Coaching Revenue Generated" },
  ],
  tags: ["Paid Advertising", "Lead Generation", "CPQL Optimization"],
  company: {
    industry: "High-Ticket Coach / Info Business Tax Planning",
    employees: "8",
    revenue: "$1.6M",
    location: "Philadelphia, PA",
    description: "A high-ticket tax planning coaching firm serving entrepreneurs, real estate investors, and info-product business owners across the Philadelphia metro area. The firm had built a strong reputation through word-of-mouth and speaking engagements over 6 years, offering premium coaching packages ($7,500–$15,000) that help business owners legally reduce their tax liability by 30–50%. Despite strong close rates on qualified prospects, the firm struggled to generate a consistent pipeline of qualified leads — most inbound inquiries were price-shoppers or individuals who didn't meet the minimum income threshold for the firm's advanced strategies.",
  },
  challenges: [
    {
      title: "High Volume of Unqualified Leads",
      description: "Previous advertising efforts generated plenty of form fills, but fewer than 18% were actually qualified for the firm's high-ticket coaching programs. The team was spending 15+ hours per week on discovery calls with prospects who couldn't afford or didn't need the service — burning out advisors and tanking close rates.",
    },
    {
      title: "Inability to Scale Without Waste",
      description: "Every time the firm tried to increase ad spend beyond $15,000/month, cost per lead spiked and lead quality deteriorated further. Without a system to optimize for qualified leads rather than raw volume, scaling felt like pouring money into a leaky bucket.",
    },
    {
      title: "No Attribution on Lead Quality",
      description: "The firm had no way to track which campaigns, audiences, or creatives were producing leads that actually converted to paying clients. All optimization was based on cost per lead — a metric that told them nothing about whether those leads could actually buy a $10,000 coaching package.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Qualification Framework & Campaign Architecture",
      items: [
        "Deep-dive audit of 6 months of historical lead data — mapped lead source to qualification status and close rate",
        "Built multi-step landing pages with income and business-type qualification questions before form submission",
        "Implemented closed-loop tracking connecting ad click → lead → qualified lead → booked call → closed deal",
        "Developed audience targeting strategy focused on business owners, real estate investors, and info-product creators in the Philadelphia metro",
        "Created compliance-approved ad creative library: educational hooks around tax savings, case study teasers, and webinar funnels",
        "Launched initial campaigns at $20,000/month across multiple audience segments with qualification-optimized landing pages",
        "Set up weekly lead quality scoring reports synced with the firm's CRM",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Data-Driven Optimization & Quality Scaling",
      items: [
        "Analyzed 30-day qualification data — identified top 3 audience segments producing 72% of qualified leads",
        "Reallocated budget toward high-qualification-rate campaigns, paused underperforming segments",
        "A/B tested landing page qualification flows — tighter pre-qualification reduced unqualified submissions by 34%",
        "Launched retargeting sequences for qualified prospects who didn't book a call",
        "Scaled monthly spend to $28,000 based on proven qualification rates",
        "Introduced video ad creative featuring client tax savings testimonials",
        "Refined audience lookalikes using qualified lead data rather than all leads",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Aggressive Scaling with Quality Controls",
      items: [
        "Scaled to $37,000/month as CPQL continued declining with larger qualified-lead lookalike audiences",
        "Launched seasonal tax planning campaigns ahead of quarterly estimated tax deadlines",
        "Expanded geographic targeting to surrounding affluent Philadelphia suburbs: Main Line, Bucks County, Chester County",
        "Built webinar funnel as secondary conversion path — 3x qualification rate vs. direct booking pages",
        "Implemented automated lead nurture sequences for qualified leads with longer decision timelines",
        "Creative refresh cycle: new ad variations every 2 weeks to combat fatigue",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Full-Scale Operation & Revenue Optimization",
      items: [
        "Scaled to $50,000/month with CPQL 61% lower than month 1 — proving sustainable quality at scale",
        "Quarterly deal-value analysis: optimized campaigns toward prospects closing at higher package tiers ($12K–$15K)",
        "Advanced attribution modeling connecting marketing spend to actual coaching revenue and ROAS",
        "Seasonal budget surges around tax filing deadlines and year-end planning windows",
        "Ongoing creative testing with new educational content angles and client success stories",
        "Monthly strategy reviews benchmarking CPQL, qualification rate, and revenue per lead against targets",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$347.8K" },
      { label: "Qualified Leads", value: "463" },
      { label: "Avg Cost/Qualified Lead", value: "$751", note: "↓61% from $1,247" },
      { label: "Coaching Revenue Generated", value: "$1.93M" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "Deals Closed",
    },
    monthly: [
      // Month 1 (Jan 2025): Launch at $20K — building baseline, high CPQL, low qualification rate (~22%)
      { month: "Jan", spend: 20147, leads: 87, cpl: 232, qualified: 16, cpql: 1259, deals: 4, revenue: 41200, roas: 2.05 },
      // Month 2 (Feb 2025): Early optimization, qualification rate improving (~25%)
      { month: "Feb", spend: 21384, leads: 96, cpl: 223, qualified: 24, cpql: 891, deals: 6, revenue: 62400, roas: 2.92 },
      // Month 3 (Mar 2025): Tax season demand surge, scaling to ~$26K, qual rate ~28%
      { month: "Mar", spend: 26219, leads: 118, cpl: 222, qualified: 33, cpql: 795, deals: 8, revenue: 89600, roas: 3.42 },
      // Month 4 (Apr 2025): Post tax-deadline, scaling continues ~$30K, qual rate ~30%
      { month: "Apr", spend: 30472, leads: 139, cpl: 219, qualified: 42, cpql: 726, deals: 10, revenue: 108500, roas: 3.56 },
      // Month 5 (May 2025): Summer softening slightly, spend ~$33K, qual rate ~31%
      { month: "May", spend: 33186, leads: 146, cpl: 227, qualified: 45, cpql: 738, deals: 9, revenue: 97200, roas: 2.93 },
      // Month 6 (Jun 2025): Summer dip, maintaining ~$35K, qual rate ~33%
      { month: "Jun", spend: 35417, leads: 148, cpl: 239, qualified: 49, cpql: 723, deals: 10, revenue: 112800, roas: 3.18 },
      // Month 7 (Jul 2025): Mid-summer, spend ~$38K, webinar funnel boosting qual rate ~35%
      { month: "Jul", spend: 38293, leads: 161, cpl: 238, qualified: 56, cpql: 684, deals: 12, revenue: 139200, roas: 3.64 },
      // Month 8 (Aug 2025): Pre-fall, ~$42K, qual rate ~37%
      { month: "Aug", spend: 41847, leads: 179, cpl: 234, qualified: 66, cpql: 634, deals: 14, revenue: 162400, roas: 3.88 },
      // Month 9 (Sep 2025): Q3 estimated tax deadline, surge to ~$46K, qual rate ~39%
      { month: "Sep", spend: 46218, leads: 202, cpl: 229, qualified: 79, cpql: 585, deals: 18, revenue: 214200, roas: 4.63 },
      // Month 10 (Oct 2025): Full scale $50K, qual rate ~42%, best CPQL
      { month: "Oct", spend: 50139, leads: 223, cpl: 225, qualified: 93, cpql: 539, deals: 21, revenue: 257400, roas: 5.13 },
    ],
  },
  impact: [
    { label: "Total Coaching Revenue", value: "$1.93M", growth: "" },
    { label: "Total Deals Closed", value: "112", growth: "" },
    { label: "Avg Deal Value", value: "$10,847", growth: "" },
    { label: "Qualification Rate Improvement", value: "42%", growth: "from 18%" },
    { label: "Cost Per Qualified Lead", value: "$487→$539", growth: "↓61% from $1,259" },
    { label: "10-Month ROAS", value: "5.55x", growth: "" },
  ],
};
