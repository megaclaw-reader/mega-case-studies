import { CaseStudyData } from "./types";

export const swimmingPoolContractors: CaseStudyData = {
  slug: "swimming-pool-contractors",
  industry: "Swimming Pool Contractors",
  headline: "How a Phoenix Pool Contractor Cut Cost Per Qualified Lead 35% With ICP-Driven Ad Optimization",
  subheadline: "MEGA helped a residential pool contractor in Phoenix, AZ leverage form fill data and call tracking signals to build an ICP feedback loop — reducing peak-season CPQL from $500 to $325, generating 141 qualified leads, and attributing $1.29M in closed revenue over 10 months.",
  heroStats: [
    { value: "35", unit: "%", label: "CPQL Reduction" },
    { value: "141", unit: "", label: "Qualified Leads" },
    { value: "$1.29", unit: "M", label: "Revenue Attributed" },
  ],
  tags: ["Paid Advertising", "ICP Optimization", "Call Tracking"],
  company: {
    industry: "Swimming Pool Contractors",
    employees: "22",
    revenue: "$3.6M",
    location: "Phoenix, AZ",
    description: "A residential pool construction and renovation company serving the greater Phoenix metropolitan area. The company builds new inground pools, handles pool remodeling and resurfacing, and offers outdoor living space design. With 11 years of experience in the Arizona market, they had a steady referral base but were looking to scale through paid advertising. Their previous campaigns generated leads but lacked any system for tracking lead quality, identifying ideal customer profiles, or feeding conversion signals back into campaign optimization. They were spending roughly $5K/month with no visibility into which leads were actually converting to signed contracts.",
  },
  challenges: [
    {
      title: "No Lead Quality Visibility",
      description: "The company was generating 15–20 inquiries per month from paid campaigns, but had no way to distinguish between a homeowner ready to invest $50K in a new pool and someone casually browsing for pricing. Without call tracking or form fill analysis, every lead was treated equally — resulting in wasted sales time and an estimated cost per qualified lead around $500.",
    },
    {
      title: "No ICP Definition or Signal Feedback",
      description: "There was no system to capture and analyze the data points that predicted high-value customers — property size, neighborhood, budget range, pool type preference, timeline. Form fills collected a name and phone number but nothing actionable. Call recordings weren't being reviewed for qualification signals. Campaign targeting was broad and based on demographics alone, with no feedback loop from closed deals back to ad optimization.",
    },
    {
      title: "Seasonal Feast-or-Famine Pipeline",
      description: "Phoenix pool demand surges from February through June as homeowners rush to get pools built before the extreme summer heat. By July, new project inquiries drop sharply, and fall/winter months see minimal inbound activity. The company had no strategy for adjusting spend, messaging, or targeting across seasons — running the same campaigns year-round and overspending during slow months while under-investing during peak demand windows.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Instrumentation & ICP Discovery",
      items: [
        "Full audit of existing paid campaigns — identified that 40%+ of spend was going to broad match terms attracting above-ground pool shoppers, hot tub buyers, and pool maintenance seekers",
        "Implemented call tracking across all campaign landing pages with automated call recording and tagging for lead qualification scoring",
        "Redesigned quote request forms to capture ICP-relevant data points: property type, approximate lot size, pool type interest (new build vs. renovation), estimated budget range, and desired timeline",
        "Built closed-loop CRM integration connecting form fills and tracked calls to sales pipeline stages through to signed contract",
        "Historical review of past 6 months of closed deals to establish initial ICP profile: single-family homeowners, 8,000+ sq ft lots, $35K–$75K budget range, within 25 miles of central Phoenix",
        "Campaign restructure — paused underperforming ad groups, rebuilt targeting around qualified zip codes and homeowner demographics matching the initial ICP",
        "Launched first A/B tests on landing page messaging: lifestyle-focused ('backyard oasis') vs. investment-focused ('increase your home value')",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "ICP Feedback Loop Activation",
      items: [
        "Analyzed first month of enriched form fill data — identified that leads mentioning 'new build' with budgets over $40K converted to contracts at 3x the rate of renovation inquiries",
        "Call tracking analysis revealed that calls over 4 minutes had an 82% qualification rate vs. 31% for shorter calls — used call duration as a conversion signal",
        "Fed qualification signals back into campaign optimization — adjusted bidding to favor audiences and search contexts that generated longer calls and higher-budget form fills",
        "Developed neighborhood-level targeting based on ICP data — concentrated spend in 12 high-conversion zip codes where closed deals clustered",
        "A/B tested ad creative aligned to ICP insights: messaging around 'custom pool design' and 'outdoor living transformation' outperformed generic 'pool builder' messaging by 47%",
        "Seasonal ramp strategy — increased budget allocation to capture peak spring demand when homeowners are planning summer pool projects",
        "Launched retargeting campaigns for quote request page visitors who didn't complete the form, using ICP-aligned messaging",
      ],
    },
    {
      phase: 3,
      months: "90–180 days",
      title: "Signal Optimization & Scaling",
      items: [
        "ICP model refined with 3 months of closed-deal data — added 'recently purchased home' and 'homes built after 2005' as high-conversion indicators",
        "Form fill completion rate improved 28% after simplifying to a 2-step progressive form that captured key ICP signals without overwhelming prospects",
        "Call tracking scoring automated — calls scored in real-time based on duration, keywords mentioned (budget, timeline, new construction), and caller zip code",
        "Budget scaled from $5.8K to $7.2K/month as CPQL improvements justified increased spend during peak season",
        "Creative refresh cycle every 3 weeks with performance-based iteration — top creative variants generated 2.3x the qualified lead rate of bottom performers",
        "Audience exclusion lists built from unqualified lead patterns — renters, commercial property managers, and out-of-service-area inquiries filtered proactively",
      ],
    },
    {
      phase: 4,
      months: "180+ days",
      title: "Seasonal Adjustment & Compounding",
      items: [
        "Fall/winter strategy shift — reduced lead volume expectations but maintained presence with renovation and remodel messaging as new build demand decreased",
        "ICP feedback loop now running on 7+ months of data — peak-season qualification rate improved from 50% to 67% as targeting precision compounded",
        "Off-season creative testing — used lower-cost winter months to test new messaging angles and landing page variants for spring launch",
        "Pipeline attribution reporting delivered weekly — showing exact CPQL, close rate, average contract value, and revenue per ad dollar by campaign",
        "Budget recommendations for upcoming peak season based on ICP-optimized performance data and seasonal demand forecasting",
        "Developed reactivation campaigns targeting past qualified leads who didn't close — 12% conversion rate on reactivation vs. 8% on new leads",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$65.2K" },
      { label: "Qualified Leads", value: "141" },
      { label: "Peak CPQL", value: "$325", note: "↓35% from $500 baseline" },
      { label: "Contracts Signed", value: "32" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "Contracts Signed",
    },
    monthly: [
      // Month 1 (Mar 2025): Baseline — audit, instrumentation, ICP discovery. Early spring demand starting.
      { month: "Mar 2025", spend: 5000, leads: 18, cpl: 278, qualified: 10, cpql: 500, deals: 2, revenue: 78000, roas: 15.60 },
      // Month 2 (Apr 2025): Campaign restructure live, enriched forms launching, spring demand building
      { month: "Apr 2025", spend: 5200, leads: 21, cpl: 248, qualified: 12, cpql: 433, deals: 2, revenue: 85000, roas: 16.35 },
      // Month 3 (May 2025): ICP feedback loop activated, peak spring — everyone wants a pool before summer
      { month: "May 2025", spend: 5800, leads: 27, cpl: 215, qualified: 17, cpql: 341, deals: 4, revenue: 168000, roas: 28.97 },
      // Month 4 (Jun 2025): Peak demand month, ICP targeting dialed in, highest lead volume
      { month: "Jun 2025", spend: 6500, leads: 31, cpl: 210, qualified: 20, cpql: 325, deals: 5, revenue: 212000, roas: 32.62 },
      // Month 5 (Jul 2025): Still strong but Phoenix extreme heat starts slowing new project starts
      { month: "Jul 2025", spend: 7000, leads: 28, cpl: 250, qualified: 19, cpql: 368, deals: 4, revenue: 175000, roas: 25.00 },
      // Month 6 (Aug 2025): Summer winding down, fewer new build inquiries, more renovation interest
      { month: "Aug 2025", spend: 7200, leads: 24, cpl: 300, qualified: 16, cpql: 450, deals: 4, revenue: 152000, roas: 21.11 },
      // Month 7 (Sep 2025): Fall transition — demand drops, but ICP precision keeps quality reasonable
      { month: "Sep 2025", spend: 7500, leads: 20, cpl: 375, qualified: 14, cpql: 536, deals: 3, revenue: 118000, roas: 15.73 },
      // Month 8 (Oct 2025): Slower season, renovation messaging, budget continues scaling per plan
      { month: "Oct 2025", spend: 7300, leads: 17, cpl: 429, qualified: 11, cpql: 664, deals: 3, revenue: 105000, roas: 14.38 },
      // Month 9 (Nov 2025): Near-winter for Phoenix pools. Minimal demand. Off-season testing.
      { month: "Nov 2025", spend: 6700, leads: 14, cpl: 479, qualified: 8, cpql: 838, deals: 2, revenue: 72000, roas: 10.75 },
      // Month 10 (Dec 2025): Early planners returning. 10 months of ICP data makes targeting sharp for upcoming season.
      { month: "Dec 2025", spend: 7000, leads: 19, cpl: 368, qualified: 14, cpql: 500, deals: 3, revenue: 126000, roas: 18.00 },
    ],
  },
  impact: [
    { label: "Closed Revenue", value: "$1.29M", growth: "" },
    { label: "Total Pipeline", value: "$1.58M", growth: "" },
    { label: "Avg Contract Value", value: "$40,344", growth: "" },
    { label: "Blended ROAS", value: "19.8x", growth: "" },
  ],
};
