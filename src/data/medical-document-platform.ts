import { CaseStudyData } from "./types";

export const medicalDocumentPlatform: CaseStudyData = {
  slug: "medical-document-platform",
  industry: "Medical Document Management SaaS",
  headline: "How a Medical Document Platform Scaled to 421 Monthly Subscribers With AI-Powered Paid Advertising",
  subheadline: "MEGA helped a national cloud-based medical document management platform scale subscriber acquisition from 37 to 421 new sign-ups per month — achieving 7.59x ROAS through hyper-targeted campaigns that proved smart spending beats big spending.",
  heroStats: [
    { value: "7.6", unit: "x", label: "Peak ROAS" },
    { value: "1,676", unit: "", label: "Subscribers Acquired" },
    { value: "$41,900", unit: "", label: "Subscription Revenue" },
  ],
  tags: ["Paid Advertising", "SaaS", "Healthcare Tech"],
  company: {
    industry: "Medical Document Management SaaS",
    employees: "8",
    revenue: "$340K",
    location: "National (USA)",
    description: "A cloud-based medical document management platform built for independent clinics, private practices, and small healthcare groups. The platform handles patient record organization, HIPAA-compliant document sharing between providers, insurance form auto-population, and digital consent management — replacing the filing cabinets and fax machines that still dominate smaller medical offices. At $25 per month per provider seat with no contracts, the platform had earned a loyal but small user base through word-of-mouth referrals and healthcare conference demos. Despite strong 94% retention rates and a product that genuinely eliminated hours of daily paperwork, the company had no systematic acquisition engine. Growth was sporadic — a conference might bring 40 sign-ups one month, then organic search would deliver 12 the next. The founders had $1,200 per month to spend on advertising and needed a partner who could make every dollar count in a space dominated by competitors spending 10-50x more.",
  },
  challenges: [
    {
      title: "Competing on a Fraction of Competitors' Budgets",
      description: "Healthcare SaaS advertising is dominated by well-funded platforms spending $15K-$50K monthly. With $1,200 per month, the company couldn't afford broad awareness campaigns or lengthy testing phases. Every campaign needed to be surgically targeted from day one — there was no room for the typical 'spray and pray' approach that larger budgets can absorb. The margin for error was essentially zero: a single week of poorly targeted ads could waste 25% of the monthly budget with nothing to show for it.",
    },
    {
      title: "Ultra-Niche Audience Buried in a Broad Market",
      description: "The ideal customer — an office manager or practice administrator at a small medical office still using paper-based document workflows — represents a microscopic audience segment. These decision-makers don't browse SaaS review sites, rarely self-identify through standard interest targeting, and are virtually invisible in broad healthcare technology audience pools. Reaching them required understanding their exact pain points (fax machine frustrations, HIPAA audit anxiety, lost patient records) and finding the digital contexts where they actually spend time researching solutions.",
    },
    {
      title: "Low Price Point Requiring Exceptional Conversion Efficiency",
      description: "At $25 per month, even modest acquisition costs could destroy unit economics. If cost per subscriber exceeded $15-20, payback would take months — unsustainable for a bootstrapped company. The entire funnel needed to convert at above-average rates: ads needed high click-through rates, landing pages needed fast load times and immediate relevance, and the trial-to-paid conversion flow needed to be frictionless. There was no room for leaky steps anywhere in the process.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "Month 1",
      title: "Precision Foundation & Micro-Budget Testing",
      items: [
        "Installed complete conversion tracking — trial sign-ups, activation events, subscription confirmations, and monthly renewals mapped through the entire funnel",
        "Deep audience research into medical office administrators, practice managers, and clinic operations staff — identified behavioral signals that distinguish paper-dependent practices from those already using digital solutions",
        "Built hyper-focused keyword and intent targeting around high-conversion queries: HIPAA document management, medical record digitization, clinic paperwork automation, patient consent forms digital",
        "Created initial ad creative library emphasizing immediate pain points: 'Still faxing patient records?', 'HIPAA-compliant in 5 minutes', '$25/mo — cancel anytime'",
        "Launched micro-budget test campaigns across 6 audience segments at $40/day total — enough data to identify winners within 2 weeks without burning the entire monthly budget",
        "Landing page built specifically for ad traffic — one-field trial sign-up (email only), 45-second product demo video, HIPAA compliance badge, and 3 provider testimonials above the fold",
        "Aggressive negative targeting from day one — excluded enterprise IT queries, EMR/EHR comparisons, medical billing searches, healthcare job seekers, and large hospital system audiences",
        "Deployed always-on AI optimization agents for continuous bid management — essential when every dollar of a $1,200 budget needs to work",
      ],
    },
    {
      phase: 2,
      months: "Months 2–5",
      title: "Audience Refinement & Conversion Optimization",
      items: [
        "Month one data revealed that solo practitioners and 2-5 provider practices converted at 5x the rate of larger groups — all budget shifted to this segment",
        "Lookalike audiences built from the existing subscriber base became the single highest-performing campaign, generating 3x the conversion rate of interest-based targeting",
        "Creative testing across 20+ variations: workflow before/after comparisons, time-saved calculations ('Save 12 hours/week on paperwork'), compliance anxiety messaging, and peer endorsement formats",
        "Retargeting micro-audiences — trial sign-up page visitors, video viewers past 75%, and pricing page visitors — converted at 6x the prospecting rate at minimal cost",
        "Geographic optimization discovered that suburban and rural markets (practices less likely to have enterprise solutions already) converted at 40% lower cost than metro areas",
        "Day-parting analysis concentrated 70% of budget during Tuesday-Thursday business hours when office managers actively research operational solutions",
        "Trial-to-paid conversion optimization: tested onboarding email sequences, in-app guidance, and direct phone outreach for trial users — increased activation rate from 38% to 67%",
        "AI agents identified micro-segments converting at 3-4x average and automatically reallocated budget in real time, compounding small daily efficiency gains into dramatic monthly improvements",
      ],
    },
    {
      phase: 3,
      months: "Months 6–9",
      title: "Compounding Returns & Peak Efficiency",
      items: [
        "Campaigns delivering consistent 6-8x ROAS with cost per subscriber well below $5 — the advertising engine was now a predictable growth machine",
        "Referral-amplification campaigns targeting existing subscribers with shareable content, leveraging the trust-based nature of medical professional networks to drive word-of-mouth at near-zero cost",
        "Seasonal campaign adjustments for Q1 (new year practice upgrades and insurance changes) and spring (practice expansion and hiring season) driving above-average trial volumes",
        "Advanced bidding optimization toward subscription activation rather than trial sign-up, eliminating waste on users who tried the product but never onboarded",
        "Expanded creative rotation with compliance update messaging, feature announcements, and anonymized workflow transformation stories keeping ads fresh and click-through rates climbing",
        "Cross-sell campaigns promoting premium features (e-signature modules, multi-location management) to existing subscribers through targeted remarketing",
        "Continuous AI optimization compounded 9 months of learning — bid adjustments, audience refinements, and budget reallocations happening hourly rather than weekly",
        "By month 9, the platform had a repeatable engine generating 421 new subscribers monthly on $1,200 in ad spend — a return that most competitors couldn't match at 10x the budget",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$11,387" },
      { label: "Total Subscribers", value: "1,676" },
      { label: "Avg Cost Per Subscriber", value: "$6.79", note: "↓79% from $32.51 in month 1" },
      { label: "Peak ROAS", value: "7.59x", note: "from 0.77x in month 1" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Trial Sign-Ups",
      cpql: "Cost/Trial",
      deals: "Paid Subscribers",
    },
    monthly: [
      // Oct 2025: Launch. Testing audiences. Building pixel data.
      { month: "Oct 2025", spend: 1203, leads: 2134, cpl: 0.56, qualified: 89, cpql: 13.52, deals: 37, revenue: 925, roas: 0.77 },
      // Nov 2025: Healthcare admin targeting starting to click. Retargeting building.
      { month: "Nov 2025", spend: 1197, leads: 2678, cpl: 0.45, qualified: 134, cpql: 8.93, deals: 58, revenue: 1450, roas: 1.21 },
      // Dec 2025: Holiday slowdown but end-of-year budget decisions drive some activity.
      { month: "Dec 2025", spend: 1218, leads: 2413, cpl: 0.50, qualified: 117, cpql: 10.41, deals: 49, revenue: 1225, roas: 1.01 },
      // Jan 2026: New year boost. Practices upgrading systems. Lookalikes live.
      { month: "Jan 2026", spend: 1247, leads: 3456, cpl: 0.36, qualified: 243, cpql: 5.13, deals: 107, revenue: 2675, roas: 2.14 },
      // Feb 2026: Lookalikes in stride. Suburban targeting dialed in.
      { month: "Feb 2026", spend: 1189, leads: 3891, cpl: 0.31, qualified: 342, cpql: 3.48, deals: 156, revenue: 3900, roas: 3.28 },
      // Mar 2026: Creative iteration + day-parting paying off. Strong conversion.
      { month: "Mar 2026", spend: 1312, leads: 4523, cpl: 0.29, qualified: 457, cpql: 2.87, deals: 213, revenue: 5325, roas: 4.06 },
      // Apr 2026: Practice expansion season. Referral amplification live.
      { month: "Apr 2026", spend: 1356, leads: 5187, cpl: 0.26, qualified: 598, cpql: 2.27, deals: 287, revenue: 7175, roas: 5.29 },
      // May 2026: AI optimization compounding 7 months. Near-peak efficiency.
      { month: "May 2026", spend: 1278, leads: 5634, cpl: 0.23, qualified: 723, cpql: 1.77, deals: 348, revenue: 8700, roas: 6.81 },
      // Jun 2026: Peak month. 421 paid subscribers on $1,387 spend.
      { month: "Jun 2026", spend: 1387, leads: 6234, cpl: 0.22, qualified: 867, cpql: 1.60, deals: 421, revenue: 10525, roas: 7.59 },
    ],
  },
  impact: [
    { label: "Peak ROAS", value: "7.59x", growth: "from 0.77x in month 1" },
    { label: "Monthly Subscribers", value: "421", growth: "+1,038% from month 1" },
    { label: "Cost Per Subscriber", value: "$3.29", growth: "↓90% from $32.51" },
    { label: "Total Subscription Revenue", value: "$41,900", growth: "from 1,676 subscribers × $25" },
  ],
};
