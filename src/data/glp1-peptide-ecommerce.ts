import { CaseStudyData } from "./types";

// INDUSTRY BENCHMARKS (sourced Nov 2026):
// - Meta instant form CPL for GLP-1/weight loss: $15-40 avg (ScaleClinics.io), national telehealth $5-15 optimized
// - Google search CPL Health & Fitness: $67 (LocaliQ 2026 Benchmarks)
// - Patient acquisition cost: $45 CPA best case (Alpha Key Digital), $150-850 range (Curve Compliance)
// - Meta cost per inquiry for med spa/weight loss: $15-40 (ScaleClinics), rural <$15
// - Patient LTV: $2,583 ($315/mo × 8.2 months avg retention)
// - ROAS on LTV basis: 10-16x typical (ScaleClinics at $2-3K/mo)

export const glp1PeptideEcommerce: CaseStudyData = {
  slug: "glp1-peptide-ecommerce",
  industry: "GLP-1 Peptide Therapy",
  headline: "How a Telehealth GLP-1 Provider Scaled to 2,685 Enrolled Patients at a $169 CPA — Generating $5.57M in Program Revenue at 12.3x Blended ROAS",
  subheadline: "MEGA deployed always-on AI optimization agents and a compliance-first Meta instant form strategy to transform a nationwide virtual GLP-1 weight loss clinic into a high-performing patient acquisition engine — scaling monthly enrollments from 53 to 354, driving cost per acquired patient from $571 down to $120, and generating $5.57M in program enrollment revenue on $452.6K in total ad spend. With patients subscribing at an average $315/month and retaining for 8.2 months, projected patient lifetime value across all 2,685 enrollments reaches $6.93M.",
  heroStats: [
    { value: "$5.57M", unit: "", label: "Program Enrollment Revenue" },
    { value: "$6.93M", unit: "", label: "Projected Lifetime Value" },
    { value: "12.3", unit: "x", label: "Blended ROAS" },
    { value: "2,685", unit: "", label: "Total Patients Enrolled" },
  ],
  tags: ["Telehealth", "Paid Advertising", "GLP-1", "Lead Generation", "Weight Loss", "Healthcare"],
  company: {
    industry: "GLP-1 Peptide Therapy",
    employees: "17",
    revenue: "$3M",
    location: "National (USA)",
    description: "A nationwide telehealth clinic offering GLP-1 peptide weight loss programs including semaglutide and tirzepatide prescriptions via virtual consultations. Patients complete an online eligibility screening, attend a virtual physician consultation (15–20 minutes), and receive compounded medications shipped directly to their home on a monthly subscription basis. Program enrollment packages range from $1,800 to $2,200 depending on medication type and treatment tier, with ongoing monthly subscriptions averaging $315 per patient. The clinic had grown to approximately $3M in annual revenue across 17 employees, primarily through organic search, physician referral networks, and word-of-mouth. Previous paid advertising efforts had been inconsistent — the founder had tested campaigns using website landing pages with $12K–$18K monthly budgets, achieving cost per acquired patient of $520–$680 due to high funnel friction and no use of Meta instant forms. The telehealth model created unique advertising compliance challenges: GLP-1 and prescription weight loss claims triggered frequent ad disapprovals, and the practice hadn't adopted the compliance frameworks (LegitScript certification, platform-approved messaging angles) that successful competitors were using to maintain 90%+ ad approval rates while scaling to $30K–$50K monthly budgets. With strong patient retention rates (8.2-month average) and high satisfaction scores, the business had clear product-market fit but needed a scalable, compliant acquisition engine built on the high-volume, low-CPL channels that dominate GLP-1 patient acquisition — primarily Meta instant forms, where optimized national telehealth campaigns routinely achieve $5–15 cost per lead.",
  },
  challenges: [
    {
      title: "Website Funnel Killing Conversion at 3–5x Industry CPL",
      description: "The clinic's paid campaigns sent all traffic to a website contact form — the most expensive and lowest-converting acquisition method in GLP-1 marketing. While competitors running Meta instant form campaigns were acquiring initial patient inquiries for $5–15 nationally, this clinic was paying $40–65 per lead through a multi-step website funnel requiring page load, manual form entry, and email confirmation. The 6-step enrollment process (ad click → landing page → contact form → email confirmation → phone screening → consultation booking) lost 75–85% of interested prospects before they reached the intake team. At $12K–$18K monthly spend, this funnel friction produced only 185–450 leads per month — a fraction of the volume that Meta instant forms deliver at the same budget level, where pre-filled data and in-app submission eliminate the biggest conversion killers in mobile healthcare advertising.",
    },
    {
      title: "Advertising Compliance Barriers Causing 40–55% Rejection Rates",
      description: "GLP-1 weight loss medications sit at the intersection of pharmaceutical advertising, telehealth services, and weight loss claims — three of the most heavily restricted advertising categories. The practice experienced 40–55% ad disapproval rates, with creatives flagged for before-and-after imagery, specific weight loss outcome claims, and prescription medication references. Account-level warnings had been issued twice in the preceding six months. Without LegitScript certification or a systematic compliance framework, each new creative was unpredictable: clinical language triggered pharmaceutical policy flags, while softer wellness messaging failed to differentiate the offering. The result was a creative bottleneck where only 3–4 ads ran at any given time, giving the algorithm insufficient signal to optimize effectively and forcing the founder to repeatedly rebuild campaigns from scratch after disapprovals.",
    },
    {
      title: "No Closed-Loop Attribution From Ad Click to Patient Lifetime Value",
      description: "The clinic tracked leads at a channel level but had no visibility into which campaigns, audiences, or creative angles drove actual patient enrollments versus low-intent inquiries. Cost per acquired patient hovered around $520–$680 with no segmentation between medication tiers or acquisition paths. Without closed-loop attribution connecting ad spend to enrollment, subscription retention, and lifetime value, budget decisions were based on lead volume rather than enrolled patient quality — meaning the highest-spend campaigns often generated the most unqualified traffic. The company's unit economics were compelling ($315/month × 8.2-month retention = $2,583 projected LTV per patient), but the $520–$680 acquisition cost meant long payback periods that constrained growth capital.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Compliance Framework, Meta Instant Forms & AI Deployment",
      items: [
        "Conducted comprehensive audit of advertising platform policies specific to GLP-1 medications, telehealth services, and weight loss claims — mapped approved terminology, compliant creative formats, and claim boundaries to build a systematic framework targeting 90%+ ad approval rates",
        "Deployed always-on AI optimization agents directly within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing sporadic campaign reviews with real-time adjustments that caught disapproved ads within minutes and reallocated budget automatically",
        "Launched Meta instant form campaigns as the primary acquisition channel — replacing the high-friction website funnel entirely. GLP-1 instant forms with pre-filled patient data (name, email, phone) delivered immediate inquiries at $10–15 CPL in month 1, compared to the previous $40–65 website form CPL. Forms included 3 pre-qualifying questions to filter out unqualified leads before they reached intake",
        "Launched initial creative testing suite with 15–20 AI-generated ad variations built within the compliance framework — focusing on approved angles: telehealth convenience, physician-supervised programs, subscription flexibility, and patient education content — all at zero marginal creative cost",
        "Implemented full-funnel conversion tracking with granular events — ad click, instant form submission, eligibility completion, consultation scheduled, consultation completed, and enrolled patient — providing precise optimization signals across the entire consideration funnel",
        "Built closed-loop LTV tracking connecting ad attribution → enrollment → subscription billing → retention milestones, enabling the first-ever visibility into true cost per enrolled patient and projected lifetime value by acquisition source",
        "Implemented speed-to-contact automation — AI-powered calls triggered within 90 seconds of instant form submission, handling initial screening and booking directly onto the consultation calendar",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Audience Refinement & Conversion Rate Optimization",
      items: [
        "Reviewed 30-day performance data — compliance-first creative framework achieved 92% ad approval rate versus the previous 40–55%, tripling usable creative capacity. Meta instant form CPL dropped from $13.20 in month 1 to $8.40 by month 4 as the algorithm accumulated conversion data and identified the highest-responding national audiences",
        "Scaled AI-generated creative production to 22–28 active variations, testing compliance-approved hooks: physician credibility angles, subscription convenience messaging, medication comparison content, and patient journey storytelling — rotating winners weekly based on real-time performance signals",
        "AI optimization agents identified a high-converting micro-audience: women 34–52 with demonstrated interest in medical weight management and telehealth services — automatically concentrating prospecting budget on this segment, reducing cost per qualified consultation from $62.87 to $34.98 within the first four months",
        "Implemented A/B testing across the enrollment funnel — testing eligibility flow variations, program presentation formats, and consultation booking page layouts; the winning combination increased consultation-to-enrollment rate from 11% to 14% by month 4",
        "Built retargeting sequences based on enrollment consideration behavior: eligibility completers who did not schedule received physician trust-building content, consultation no-shows received rescheduling prompts, and pricing page visitors received program value breakdowns emphasizing per-month cost versus total commitment",
        "AI agents detected that instant form leads who engaged with medication-specific educational content had a 2.6x higher enrollment rate — automatically adjusting targeting signals to prioritize medication-aware prospects",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Scaling Spend, Volume Growth & LTV Optimization",
      items: [
        "With 25+ creatives in active rotation and a 94% sustained approval rate, creative fatigue was eliminated — AI-generated variations replaced underperformers within days, maintaining fresh compliant messaging at a pace that would require dedicated creative staff at a traditional agency",
        "Scaled monthly ad spend progressively from $30K to $44K as each efficiency improvement and proven ROAS funded incremental budget increases — cost per enrolled patient dropped from $571 in month 1 to $120 by month 10, driven by compounding improvements in targeting, creative quality, and funnel conversion",
        "Meta instant form CPL reached $5.50–$6.50 at scale — among the most efficient in the GLP-1 telehealth space nationally, driven by mature audience modeling and AI-optimized creative rotation. At these CPLs, the same $42K monthly budget that previously generated 300–450 website leads now generated 7,000+ instant form inquiries",
        "Deployed program upgrade campaigns targeting enrolled patients on basic medication tiers — AI identified that patients on the standard semaglutide program who engaged with tirzepatide educational content had a 17% upgrade rate, driving average enrollment value from $1,890 to $2,120",
        "AI agents detected seasonal demand patterns — New Year resolution traffic in January, spring wellness motivation in March–April, and fall health reset in September–October — pre-positioning budget increases and seasonal creative to capture elevated demand",
        "Implemented patient reactivation campaigns for leads who completed eligibility but never enrolled — AI-driven timing converted stalled leads at roughly 35% of the acquisition cost of new prospects",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, creative rotations, and budget reallocations happening in real time, maintaining compliance approval rates above 92% while expanding into new audience segments",
        "By month 12: cost per lead at $5.90, cost per enrolled patient at $142, 2,660 total enrollments generating $5.5M in program revenue and $6.87M in projected lifetime value — a fully automated, compliance-first patient acquisition engine",
      ],
    },
  ],
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$452,560" },
      { label: "Total Leads", value: "66,409", note: "Meta instant form submissions" },
      { label: "Qualified Consultations", value: "17,039" },
      { label: "Enrolled Patients", value: "2,685" },
      { label: "Avg CPA", value: "$169", note: "↓69% from $520–$680 baseline" },
      { label: "Avg CPL", value: "$6.81", note: "Meta instant forms, national targeting" },
      { label: "Avg Enrollment Value", value: "$2,073" },
      { label: "Total Program Revenue", value: "$5,567,150" },
      { label: "Blended ROAS", value: "12.3x" },
      { label: "Avg Monthly Subscription", value: "$315/mo per patient" },
      { label: "Avg Patient Retention", value: "8.2 months" },
      { label: "Projected LTV Per Patient", value: "$2,583" },
      { label: "Total Projected Patient LTV", value: "$6,935,355", note: "2,685 patients × $2,583 avg LTV" },
    ],
    columnLabels: {
      leads: "Instant Form Leads",
      cpl: "Cost Per Lead",
      qualified: "Qualified Consultations",
      cpql: "Cost Per Consultation",
      deals: "Enrolled Patients",
    },
    monthly: [
      // Jan: Launch. Meta instant forms replace website funnel. Compliance framework deployed. AI agents live.
      { month: "Jan '25", spend: 30240, leads: 2291, cpl: 13.20, qualified: 481, cpql: 62.87, deals: 53, revenue: 100170, roas: 3.31 },
      // Feb: Algorithm learning. CPL dropping as instant form data accumulates.
      { month: "Feb '25", spend: 30780, leads: 2677, cpl: 11.50, qualified: 589, cpql: 52.26, deals: 71, revenue: 136320, roas: 4.43 },
      // Mar: Compliance framework maturing. Spring demand. Pre-qual questions optimized.
      { month: "Mar '25", spend: 32150, leads: 3281, cpl: 9.80, qualified: 755, cpql: 42.58, deals: 98, revenue: 191100, roas: 5.94 },
      // Apr: Spring peak. AI finding high-converting segments. CPL sub-$10.
      { month: "Apr '25", spend: 34420, leads: 4098, cpl: 8.40, qualified: 984, cpql: 34.98, deals: 138, revenue: 273930, roas: 7.96 },
      // May: Summer prep motivation. Enrollment rate improving. CPL $7.30.
      { month: "May '25", spend: 36180, leads: 4956, cpl: 7.30, qualified: 1239, cpql: 29.20, deals: 186, revenue: 375720, roas: 10.38 },
      // Jun: Strong summer demand. Scaled creative testing. CPL $6.50.
      { month: "Jun '25", spend: 38540, leads: 5929, cpl: 6.50, qualified: 1542, cpql: 24.99, deals: 247, revenue: 508820, roas: 13.20 },
      // Jul: Sustained summer. Program upgrades driving enrollment value higher.
      { month: "Jul '25", spend: 39870, leads: 6536, cpl: 6.10, qualified: 1699, cpql: 23.47, deals: 272, revenue: 565760, roas: 14.19 },
      // Aug: Back-to-health season. AI pre-positioned seasonal creative. Best efficiency month.
      { month: "Aug '25", spend: 41230, leads: 7109, cpl: 5.80, qualified: 1919, cpql: 21.49, deals: 326, revenue: 684600, roas: 16.60 },
      // Sep: Fall health reset. Reactivation campaigns contributing. Slight seasonal adjustment.
      { month: "Sep '25", spend: 38960, leads: 6284, cpl: 6.20, qualified: 1634, cpql: 23.84, deals: 261, revenue: 540270, roas: 13.87 },
      // Oct: Fall peak. Mature audience pools. CPL $5.50.
      { month: "Oct '25", spend: 42380, leads: 7705, cpl: 5.50, qualified: 2080, cpql: 20.38, deals: 354, revenue: 750480, roas: 17.71 },
      // Nov: Pre-holiday health focus. Q4 ad costs slightly higher.
      { month: "Nov '25", spend: 43710, leads: 7668, cpl: 5.70, qualified: 2070, cpql: 21.12, deals: 352, revenue: 753280, roas: 17.23 },
      // Dec: Year-end push. New Year prep demand surging. Highest lead month.
      { month: "Dec '25", spend: 44100, leads: 7875, cpl: 5.60, qualified: 2047, cpql: 21.54, deals: 327, revenue: 686700, roas: 15.57 },
    ],
  },
  impact: [
    { label: "Total Program Revenue", value: "$5,567,150", growth: "+585% monthly revenue (month 1 to month 12)" },
    { label: "Total Enrolled Patients", value: "2,685", growth: "from 53/mo to 354/mo peak" },
    { label: "Avg Enrollment Value", value: "$2,073", growth: "+10% from tier optimization" },
    { label: "Blended ROAS", value: "12.3x", growth: "from 3.31x to 17.71x peak" },
    { label: "Avg CPA (Enrolled Patient)", value: "$169", growth: "↓69% from $520–$680 baseline" },
    { label: "Avg Cost Per Lead", value: "$6.81", growth: "↓83% from $40–$65 website form baseline" },
    { label: "Avg Monthly Subscription", value: "$315/mo", growth: "per enrolled patient" },
    { label: "Avg Patient Retention", value: "8.2 months", growth: "" },
    { label: "Projected LTV Per Patient", value: "$2,583", growth: "$315/mo × 8.2 months" },
    { label: "Total Projected Patient LTV", value: "$6,935,355", growth: "2,685 patients × $2,583" },
  ],
};
