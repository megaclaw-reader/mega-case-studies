import { CaseStudyData } from "./types";

export const glp1PeptideEcommerce: CaseStudyData = {
  slug: "glp1-peptide-ecommerce",
  industry: "GLP-1 Peptide Therapy",
  headline: "How a DTC GLP-1 Weight Loss Brand Scaled from 62 to 262 Monthly Subscription Orders — Generating $546K in Revenue at 4.33x Blended ROAS",
  subheadline: "MEGA deployed always-on AI optimization agents and a compliance-first paid advertising strategy to transform a direct-to-consumer GLP-1 weight loss subscription program into a high-performing ecommerce engine — scaling monthly orders 4.2x, reducing cost per new subscriber by 59%, and generating $546,293 in subscription revenue on $126,080 in total ad spend across 12 months.",
  heroStats: [
    { value: "$546K", unit: "", label: "Subscription Revenue Generated" },
    { value: "4.33", unit: "x", label: "Blended ROAS" },
    { value: "1,713", unit: "", label: "Total Subscription Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "GLP-1", "Telehealth", "Subscription", "DTC"],
  company: {
    industry: "GLP-1 Peptide Therapy",
    employees: "22",
    revenue: "$4.2M",
    location: "National (USA)",
    description: "A direct-to-consumer telehealth company offering GLP-1 weight loss subscription programs nationwide. The business provides monthly subscription packages ranging from $249 to $399 per month depending on medication type and service tier, with each subscription including compounded GLP-1 medications, telehealth physician consultations, progress monitoring, and nationwide shipping. The company had grown to approximately $4.2M in annual revenue across 22 employees, primarily through organic search, social media referrals, and word-of-mouth from satisfied patients. Paid advertising efforts had been inconsistent — the founder had tested Meta and Google campaigns independently with $6K–$8K monthly budgets, achieving cost per new subscriber of $280–$340, well above the $180 target that made unit economics work given average subscriber lifetime value of approximately $1,700 across 5.8 months of average retention. The telehealth model created advertising compliance challenges: GLP-1 and weight loss medication claims triggered frequent ad disapprovals, and the founder struggled to find messaging that passed platform review while still resonating with adults 28–55 actively researching prescription weight loss options. With strong patient retention and high satisfaction scores, the business had clear product-market fit but needed a scalable, compliant acquisition engine to grow beyond organic channels.",
  },
  challenges: [
    {
      title: "Unsustainable Customer Acquisition Costs on Paid Channels",
      description: "The company's self-managed paid campaigns were acquiring new subscribers at $280–$340 per acquisition — far above the $180 threshold that made unit economics work given average subscriber lifetime value. At $6K–$8K monthly spend, this translated to only 18–28 new subscribers per month, barely enough to offset natural churn. The campaigns used broad health and wellness targeting that attracted clicks from consumers researching general diet supplements, meal replacement programs, and fitness apps — audiences that rarely converted to a $249–$399 monthly prescription medication subscription. Session-to-order conversion rates sat below 1.2%, and the majority of paid traffic bounced within seconds of encountering prescription-specific language, telehealth consultation requirements, and monthly subscription commitment pricing.",
    },
    {
      title: "Advertising Compliance Barriers in Prescription Weight Loss",
      description: "GLP-1 weight loss medications sit at the intersection of pharmaceutical advertising, telehealth services, and weight loss claims — three of the most heavily restricted advertising categories. The company experienced 45–55% ad disapproval rates, with creatives flagged for before/after imagery, specific weight loss outcome claims, and prescription medication references. Account-level warnings had been issued twice in six months. Without a systematic compliance framework, each new creative was unpredictable: clinical language triggered pharmaceutical policy flags, while softer wellness messaging failed to differentiate the offering from over-the-counter supplements. The result was a creative bottleneck where only 3–4 ads ran at any given time, giving the algorithm insufficient signal to optimize effectively.",
    },
    {
      title: "Low Conversion Rate Despite Strong Product-Market Fit",
      description: "Despite high patient satisfaction and strong retention metrics, the ecommerce storefront converted poorly from paid traffic. The subscription signup flow required multiple steps — eligibility screening, medication selection, tier comparison, and telehealth scheduling — creating friction points where 60–70% of interested visitors dropped off before completing a subscription order. Product pages lacked the educational depth that prospective GLP-1 patients need during their 2–4 week consideration phase: no medication comparison content, no clinical outcome data, no insurance alternative framing, and no clear explanation of how the telehealth consultation and prescription fulfillment process worked. Competitors with established content funnels and streamlined checkout captured the high-intent traffic that this company's ads were generating but failing to convert.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Compliance Framework, Conversion Funnel & AI Deployment",
      items: [
        "Conducted a comprehensive audit of advertising platform policies specific to GLP-1 medications, telehealth services, and weight loss claims — mapping approved terminology, compliant creative formats, and claim boundaries to build a systematic framework maximizing approval rates across Meta and Google",
        "Deployed always-on AI optimization agents directly within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the founder's sporadic campaign reviews with real-time adjustments that caught disapproved ads within minutes and reallocated budget to approved campaigns automatically",
        "Launched initial creative testing suite with 12–15 AI-generated ad variations built within the compliance framework — focusing on approved angles: telehealth convenience, physician-supervised programs, subscription flexibility, and patient education content — all at zero marginal creative cost versus the $800–$1,500 per creative agencies typically charge",
        "Rebuilt the subscription signup funnel with compliance-vetted copy: streamlined eligibility screening, clear medication tier comparison pages, transparent pricing breakdowns, and a simplified checkout flow that reduced signup steps from seven to four — directly targeting the 60–70% funnel dropout rate",
        "Implemented enhanced ecommerce conversion tracking with granular events — session start, eligibility check completion, medication page views, tier selection, add-to-cart, and completed subscription order — providing precise optimization signals across the full consideration funnel",
        "Created dedicated landing pages for each subscription tier with medication-specific educational content, physician credential showcases, and patient outcome information presented in compliance-approved formats — improving ad relevance scores and reducing bounce rates from paid traffic",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Audience Refinement & Conversion Rate Optimization",
      items: [
        "Reviewed 30-day performance data — compliance-first creative framework achieved 87% ad approval rate versus the previous 45–55%, effectively tripling usable creative capacity; educational-focused ads outperformed promotional ads by 2.3x on ROAS among refined audience segments",
        "Scaled AI-generated creative production to 18–22 active variations, testing compliance-approved hooks: physician credibility angles, subscription convenience messaging, medication comparison content, and patient journey storytelling — rotating winners weekly based on real-time performance signals rather than typical monthly agency creative refresh cycles",
        "AI optimization agents identified a high-converting micro-audience: women 32–48 with demonstrated interest in medical weight loss, GLP-1 medications, and telehealth services — automatically concentrating prospecting budget on this segment and reducing cost per new subscriber by 28% within the first three weeks of audience refinement",
        "Implemented A/B testing across the subscription funnel — testing eligibility flow variations, tier presentation formats, and checkout page layouts; the winning combination increased session-to-order conversion rate from 1.9% to 2.7% by month 3",
        "Built retargeting sequences based on subscription consideration behavior: eligibility completers who did not proceed received physician trust-building content, tier comparison viewers saw medication-specific value propositions, and cart abandoners received subscription flexibility messaging emphasizing pause/cancel anytime policies",
        "AI agents detected that visitors researching semaglutide specifically had a 2.8x higher conversion rate than generic weight loss traffic — automatically adjusting keyword targeting and audience signals to prioritize medication-aware prospects over general weight loss searchers",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Scaling Spend, AOV Growth & Subscription Optimization",
      items: [
        "With 20+ creatives in active rotation and a 91% sustained approval rate, creative fatigue was eliminated — AI-generated variations replaced underperformers within days, maintaining fresh messaging at a pace that would require dedicated creative staff at a traditional agency",
        "Scaled monthly ad spend progressively from $8K to $14K as each efficiency improvement funded incremental budget increases — the compound effect of better targeting, higher approval rates, and improved conversion drove ROAS from 2.16x in month 1 to 6.35x by month 12",
        "Deployed tier upgrade campaigns targeting existing subscribers on basic plans — AI identified that subscribers on the $249/month tier who engaged with premium medication content had a 19% upgrade rate to the $349–$399 tier, driving average order value growth from $283 to $341 across the subscriber base",
        "AI agents detected seasonal demand patterns — New Year resolution traffic in January, summer body preparation in April–June, and fall health resets in September–October — pre-positioning budget increases and seasonal creative to capture elevated demand windows",
        "Implemented subscription reactivation campaigns for churned subscribers — AI-driven timing based on typical lapse patterns brought back former patients at roughly 40% of the acquisition cost of new subscribers, compounding ROAS improvements in the second half of the engagement",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, creative rotations, and budget reallocations happening in real time, maintaining compliance approval rates above 90% while expanding into new audience segments and geographic clusters with the highest conversion propensity",
      ],
    },
  ],
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$126,080" },
      { label: "Add to Carts", value: "4,523" },
      { label: "Avg Cost Per Acquisition", value: "$73.60", note: "↓59% from $280–$340 baseline" },
      { label: "Total Orders", value: "1,713" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan '25: Campaign launch. Compliance framework deployed. AI agents live. New Year resolution demand. High CPA expected.
      { month: "Jan '25", spend: 8120, leads: 3222, cpl: 2.52, qualified: 187, cpql: 43.42, deals: 62, revenue: 17546, roas: 2.16 },
      // Feb '25: Initial audience refinement. Approval rate improving to 87%. Conversion funnel optimization underway.
      { month: "Feb '25", spend: 8340, leads: 3461, cpl: 2.41, qualified: 211, cpql: 39.53, deals: 71, revenue: 20377, roas: 2.44 },
      // Mar '25: Compliance framework mature. AI agents finding high-converting segments. CRO improvements showing.
      { month: "Mar '25", spend: 8780, leads: 3768, cpl: 2.33, qualified: 241, cpql: 36.43, deals: 84, revenue: 24444, roas: 2.78 },
      // Apr '25: Spring weight loss demand rising. Retargeting sequences maturing. Tier upgrade campaigns testing.
      { month: "Apr '25", spend: 9240, leads: 4125, cpl: 2.24, qualified: 280, cpql: 33.00, deals: 100, revenue: 29700, roas: 3.21 },
      // May '25: Summer prep demand. AI-driven audience refinement compounding. AOV starting to lift from tier upgrades.
      { month: "May '25", spend: 9860, leads: 4565, cpl: 2.16, qualified: 324, cpql: 30.43, deals: 118, revenue: 35754, roas: 3.63 },
      // Jun '25: Peak summer demand. Scaled creative testing. Conversion rate improvements fully realized.
      { month: "Jun '25", spend: 10420, leads: 4986, cpl: 2.09, qualified: 369, cpql: 28.24, deals: 137, revenue: 42607, roas: 4.09 },
      // Jul '25: Strong summer month. Subscriber reactivation campaigns live. AOV growing from tier mix shift.
      { month: "Jul '25", spend: 10980, leads: 5382, cpl: 2.04, qualified: 409, cpql: 26.85, deals: 155, revenue: 49135, roas: 4.47 },
      // Aug '25: Back-to-school health reset demand. AI pre-positioned seasonal creative. Best efficiency month.
      { month: "Aug '25", spend: 11340, leads: 5642, cpl: 2.01, qualified: 440, cpql: 25.77, deals: 170, revenue: 54910, roas: 4.84 },
      // Sep '25: Slight seasonal pullback but strong performance maintained. Reactivation campaigns contributing.
      { month: "Sep '25", spend: 10680, leads: 5261, cpl: 2.03, qualified: 405, cpql: 26.37, deals: 154, revenue: 49126, roas: 4.60 },
      // Oct '25: Fall steadying. AOV lifted by premium tier adoption. Retargeting pools mature.
      { month: "Oct '25", spend: 11480, leads: 5798, cpl: 1.98, qualified: 464, cpql: 24.74, deals: 181, revenue: 59549, roas: 5.19 },
      // Nov '25: Holiday health gifting and New Year prep starting. Budget scaling toward peak.
      { month: "Nov '25", spend: 12760, leads: 6611, cpl: 1.93, qualified: 549, cpql: 23.24, deals: 219, revenue: 73803, roas: 5.78 },
      // Dec '25: Year-end push. All systems compounding. Highest spend and best performance month.
      { month: "Dec '25", spend: 14080, leads: 7489, cpl: 1.88, qualified: 644, cpql: 21.86, deals: 262, revenue: 89342, roas: 6.35 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$546,293", growth: "+409% monthly revenue growth" },
    { label: "Total Orders", value: "1,713", growth: "new subscription signups across 12 months" },
    { label: "Average Order Value", value: "$318.91", growth: "+20% from tier mix optimization" },
    { label: "Blended ROAS", value: "4.33x", growth: "from 2.16x starting" },
    { label: "Avg Cost Per Acquisition", value: "$73.60", growth: "↓59% from $280–$340 baseline" },
  ],
};
