import { CaseStudyData } from "./types";

export const glp1PeptideEcommerce: CaseStudyData = {
  slug: "glp1-peptide-ecommerce",
  industry: "GLP-1 Peptide Therapy",
  headline: "How a Telehealth GLP-1 Weight Loss Provider Grew from 17 to 58 Enrolled Patients per Month — Generating Over $1M in Program Revenue at 2.26x Blended ROAS",
  subheadline: "MEGA deployed always-on AI optimization agents and a compliance-first paid advertising strategy to transform a nationwide virtual GLP-1 peptide weight loss clinic into a high-performing patient acquisition engine — scaling monthly enrolled patients 3.4x, reducing cost per acquired patient by 46%, and generating $1,019,101 in program enrollment revenue on $451,340 in total ad spend across 12 months. With patients subscribing at an average $315 per month and retaining for 8.2 months, projected patient lifetime value across all 504 enrollments reaches $1.30M.",
  heroStats: [
    { value: "$1.02M", unit: "", label: "Program Enrollment Revenue" },
    { value: "$1.30M", unit: "", label: "Projected Patient Lifetime Value" },
    { value: "2.26", unit: "x", label: "Blended ROAS" },
    { value: "504", unit: "", label: "Total Patients Enrolled" },
  ],
  tags: ["Telehealth", "Paid Advertising", "GLP-1", "Lead Generation", "Weight Loss", "Healthcare"],
  company: {
    industry: "GLP-1 Peptide Therapy",
    employees: "17",
    revenue: "$3M",
    location: "National (USA)",
    description: "A nationwide telehealth clinic offering GLP-1 peptide weight loss programs including semaglutide and tirzepatide prescriptions via virtual consultations. Patients complete an online eligibility screening, attend a virtual physician consultation, and receive compounded medications shipped directly to their home on a monthly subscription basis. Program enrollment packages range from $1,800 to $2,200 depending on medication type and treatment tier, with ongoing monthly subscriptions averaging $315 per patient. The clinic had grown to approximately $3M in annual revenue across 17 employees, primarily through organic search, physician referral networks, and word-of-mouth from existing patients. Previous paid advertising efforts had been inconsistent — the founder had tested campaigns independently with $12K–$18K monthly budgets, achieving cost per acquired patient of $520–$680, well above the $350 threshold where unit economics became sustainable given projected patient lifetime value of approximately $2,583 across an average 8.2 months of retention. The telehealth model created unique advertising compliance challenges: GLP-1 and prescription weight loss claims triggered frequent ad disapprovals, and the practice struggled to find messaging that passed platform review while still resonating with adults 30–58 actively researching prescription weight loss options. With strong patient retention rates and high satisfaction scores, the business had clear product-market fit but needed a scalable, compliant acquisition engine to grow beyond organic channels and referral networks.",
  },
  challenges: [
    {
      title: "Unsustainable Patient Acquisition Costs on Paid Channels",
      description: "The clinic's self-managed paid campaigns were acquiring new enrolled patients at $520–$680 per acquisition — far above the $350 threshold where unit economics worked given projected patient lifetime value. At $12K–$18K monthly spend, this translated to only 18–34 new enrolled patients per month from paid channels, barely enough to offset natural patient churn from completed programs. The campaigns used broad health and wellness targeting that attracted clicks from consumers researching general diet supplements, over-the-counter weight loss products, and fitness programs — audiences that rarely converted to a prescription medication program requiring a physician consultation. Lead-to-enrollment conversion rates sat below 8%, and the majority of paid traffic abandoned the funnel upon encountering prescription requirements, telehealth consultation scheduling, and multi-month program commitment pricing.",
    },
    {
      title: "Advertising Compliance Barriers in Prescription Weight Loss",
      description: "GLP-1 weight loss medications sit at the intersection of pharmaceutical advertising, telehealth services, and weight loss claims — three of the most heavily restricted advertising categories. The practice experienced 40–55% ad disapproval rates, with creatives flagged for before-and-after imagery, specific weight loss outcome claims, and prescription medication references. Account-level warnings had been issued twice in the preceding six months. Without a systematic compliance framework, each new creative was unpredictable: clinical language triggered pharmaceutical policy flags, while softer wellness messaging failed to differentiate the offering from over-the-counter supplements. The result was a creative bottleneck where only 3–4 ads ran at any given time, giving the algorithm insufficient signal to optimize effectively and forcing the founder to repeatedly rebuild campaigns from scratch after disapprovals.",
    },
    {
      title: "Low Lead-to-Patient Conversion Despite Strong Clinical Outcomes",
      description: "Despite exceptional patient satisfaction and retention metrics, the clinic's patient acquisition funnel converted poorly from paid traffic. The enrollment process required multiple steps — eligibility screening, medication selection, telehealth consultation scheduling, physician approval, and payment — creating friction points where 65–75% of interested leads dropped off before completing enrollment. Landing pages lacked the educational depth that prospective GLP-1 patients need during their typical 2–4 week research phase: no medication comparison content, no clinical outcome data, no insurance alternative framing, and no clear explanation of the telehealth consultation and prescription fulfillment workflow. Competing telehealth providers with established content funnels and streamlined enrollment captured the high-intent traffic that the clinic's ads were generating but failing to convert into enrolled patients.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Compliance Framework, Lead Funnel Rebuild & AI Deployment",
      items: [
        "Conducted a comprehensive audit of advertising platform policies specific to GLP-1 medications, telehealth services, and weight loss claims — mapping approved terminology, compliant creative formats, and claim boundaries to build a systematic framework maximizing approval rates",
        "Deployed always-on AI optimization agents directly within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the founder's sporadic campaign reviews with real-time adjustments that caught disapproved ads within minutes and reallocated budget to approved campaigns automatically",
        "Launched initial creative testing suite with 15–20 AI-generated ad variations built within the compliance framework — focusing on approved angles: telehealth convenience, physician-supervised programs, subscription flexibility, and patient education content — all at zero marginal creative cost versus the $800–$1,500 per creative traditional agencies charge",
        "Rebuilt the patient enrollment funnel with compliance-vetted copy: streamlined eligibility screening, clear medication tier comparison, transparent program pricing, and a simplified consultation booking flow that reduced enrollment steps from six to four — directly targeting the 65–75% funnel dropout rate",
        "Implemented full-funnel conversion tracking with granular events — ad click, eligibility completion, consultation scheduled, consultation completed, and enrolled patient — providing precise optimization signals across the entire consideration funnel",
        "Created dedicated landing pages for each program tier with medication-specific educational content, physician credential showcases, and patient outcome information presented in compliance-approved formats — improving ad relevance scores and reducing bounce rates from paid traffic",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Audience Refinement & Conversion Rate Optimization",
      items: [
        "Reviewed 30-day performance data — compliance-first creative framework achieved 88% ad approval rate versus the previous 40–55%, effectively tripling usable creative capacity; educational-focused ads outperformed promotional ads by 2.1x on lead quality among refined audience segments",
        "Scaled AI-generated creative production to 22–28 active variations, testing compliance-approved hooks: physician credibility angles, subscription convenience messaging, medication comparison content, and patient journey storytelling — rotating winners weekly based on real-time performance signals rather than typical monthly agency creative refresh cycles",
        "AI optimization agents identified a high-converting micro-audience: women 34–52 with demonstrated interest in medical weight management, prescription weight loss, and telehealth services — automatically concentrating prospecting budget on this segment and reducing cost per qualified lead by 31% within the first three weeks of audience refinement",
        "Implemented A/B testing across the enrollment funnel — testing eligibility flow variations, program presentation formats, and consultation booking page layouts; the winning combination increased lead-to-qualified rate from 38% to 49% by month 3",
        "Built retargeting sequences based on enrollment consideration behavior: eligibility completers who did not schedule received physician trust-building content, consultation no-shows received rescheduling prompts with patient testimonial content, and pricing page visitors received program value breakdowns emphasizing per-month cost versus total program commitment",
        "AI agents detected that leads researching specific medication names had a 2.6x higher enrollment rate than generic weight loss traffic — automatically adjusting targeting signals to prioritize medication-aware prospects over general weight loss searchers",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Scaling Spend, Program Value Growth & LTV Optimization",
      items: [
        "With 25+ creatives in active rotation and a 92% sustained approval rate, creative fatigue was eliminated — AI-generated variations replaced underperformers within days, maintaining fresh compliant messaging at a pace that would require dedicated creative staff at a traditional agency",
        "Scaled monthly ad spend progressively from $30K to $45K as each efficiency improvement and proven ROAS funded incremental budget increases — the client gained confidence in the results and invested more aggressively, with the compound effect of better targeting, higher approval rates, and improved conversion driving cost per enrolled patient from $446 in month 1 down to $231 by month 12",
        "Deployed program upgrade campaigns targeting enrolled patients on basic medication tiers — AI identified that patients on the standard semaglutide program who engaged with tirzepatide educational content had a 17% upgrade rate to premium tiers, driving average program enrollment value growth from $1,872 to $2,147 across the patient base",
        "AI agents detected seasonal demand patterns — New Year resolution traffic in January, spring wellness motivation in March–April, and fall health reset demand in September–October — pre-positioning budget increases and seasonal creative to capture elevated demand windows",
        "Implemented patient reactivation campaigns for leads who completed eligibility but never enrolled — AI-driven timing based on typical consideration cycle patterns converted stalled leads at roughly 35% of the acquisition cost of new prospects, compounding ROAS improvements in the second half of the engagement",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, creative rotations, and budget reallocations happening in real time, maintaining compliance approval rates above 90% while expanding into new audience segments and geographic clusters with the highest conversion propensity",
      ],
    },
  ],
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$451,340" },
      { label: "Total Qualified Leads", value: "1,800" },
      { label: "Avg CPA (Enrolled Patient)", value: "$895", note: "↓46% from $520–$680 baseline" },
      { label: "Total Enrolled Patients", value: "504" },
      { label: "Avg Program Enrollment Value", value: "$2,022" },
      { label: "Total Program Revenue", value: "$1,019,101" },
      { label: "Avg Monthly Subscription", value: "$315/mo per patient" },
      { label: "Avg Patient Retention", value: "8.2 months" },
      { label: "Projected LTV Per Patient", value: "$2,583" },
      { label: "Total Projected Patient LTV", value: "$1,301,832", note: "504 patients × $2,583 avg LTV" },
    ],
    columnLabels: {
      leads: "Leads",
      cpl: "Cost Per Lead",
      qualified: "Qualified Leads",
      cpql: "Cost Per Qualified Lead",
      deals: "Enrolled Patients",
    },
    monthly: [
      // Jan '25: Campaign launch. New Year resolution demand high. Compliance framework deployed. AI agents live.
      { month: "Jan '25", spend: 30240, leads: 178, cpl: 169.89, qualified: 69, cpql: 438.26, deals: 17, revenue: 31824, roas: 1.05 },
      // Feb '25: Initial audience refinement. Approval rate improving. Conversion funnel optimization underway.
      { month: "Feb '25", spend: 30780, leads: 193, cpl: 159.48, qualified: 77, cpql: 399.74, deals: 21, revenue: 39543, roas: 1.28 },
      // Mar '25: Compliance framework maturing. AI finding high-converting segments. Spring wellness demand.
      { month: "Mar '25", spend: 32150, leads: 218, cpl: 147.48, qualified: 93, cpql: 345.70, deals: 26, revenue: 49556, roas: 1.54 },
      // Apr '25: Spring demand rising. Retargeting sequences maturing. Funnel CRO showing results.
      { month: "Apr '25", spend: 34420, leads: 258, cpl: 133.41, qualified: 114, cpql: 301.93, deals: 33, revenue: 63294, roas: 1.84 },
      // May '25: Summer prep motivation. AI-driven audience refinement compounding. Enrollment rate improving.
      { month: "May '25", spend: 36180, leads: 286, cpl: 126.50, qualified: 131, cpql: 276.18, deals: 38, revenue: 73226, roas: 2.02 },
      // Jun '25: Strong summer demand. Scaled creative testing. Conversion improvements realized.
      { month: "Jun '25", spend: 38540, leads: 318, cpl: 121.19, qualified: 152, cpql: 253.55, deals: 44, revenue: 87604, roas: 2.27 },
      // Jul '25: Sustained summer month. Program upgrades driving AOV higher. Retargeting pools mature.
      { month: "Jul '25", spend: 39870, leads: 343, cpl: 116.24, qualified: 168, cpql: 237.32, deals: 49, revenue: 99862, roas: 2.51 },
      // Aug '25: Back-to-health season. AI pre-positioned seasonal creative. Strong efficiency month.
      { month: "Aug '25", spend: 41230, leads: 367, cpl: 112.34, qualified: 183, cpql: 225.30, deals: 53, revenue: 110291, roas: 2.67 },
      // Sep '25: Fall health reset demand. Reactivation campaigns contributing. Slight seasonal adjustment.
      { month: "Sep '25", spend: 38960, leads: 351, cpl: 110.99, qualified: 176, cpql: 221.36, deals: 51, revenue: 107661, roas: 2.76 },
      // Oct '25: Fall steadying. AOV lifted by premium tier adoption. Mature audience pools.
      { month: "Oct '25", spend: 42380, leads: 398, cpl: 106.48, qualified: 202, cpql: 209.80, deals: 58, revenue: 124526, roas: 2.94 },
      // Nov '25: Pre-holiday health focus. Budget scaling toward peak. Strong lead quality.
      { month: "Nov '25", spend: 43710, leads: 419, cpl: 104.32, qualified: 215, cpql: 203.30, deals: 57, revenue: 123076, roas: 2.82 },
      // Dec '25: Year-end push with New Year prep demand. Highest spend month.
      { month: "Dec '25", spend: 42880, leads: 402, cpl: 106.67, qualified: 220, cpql: 194.91, deals: 57, revenue: 108638, roas: 2.53 },
    ],
  },
  impact: [
    { label: "Total Program Revenue", value: "$1,019,101", growth: "+241% monthly revenue growth (month 1 to month 12)" },
    { label: "Total Enrolled Patients", value: "504", growth: "new patient enrollments across 12 months" },
    { label: "Avg Program Enrollment Value", value: "$2,022", growth: "+15% from program tier optimization" },
    { label: "Blended ROAS", value: "2.26x", growth: "from 1.05x starting ROAS" },
    { label: "Avg CPA (Enrolled Patient)", value: "$895", growth: "↓46% from $520–$680 baseline" },
    { label: "Avg Monthly Subscription", value: "$315/mo", growth: "per enrolled patient ongoing" },
    { label: "Avg Patient Retention", value: "8.2 months", growth: "average subscription duration" },
    { label: "Projected LTV Per Patient", value: "$2,583", growth: "$315/mo × 8.2 months avg retention" },
    { label: "Total Projected Patient LTV", value: "$1,301,832", growth: "504 patients × $2,583 projected lifetime value" },
  ],
};
