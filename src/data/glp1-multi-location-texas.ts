import { CaseStudyData } from "./types";

// INDUSTRY BENCHMARKS (sourced Nov 2026):
// - Meta instant form CPL at scale ($300K+/mo): $3-8 for national GLP-1 (volume discounts, mature lookalikes)
// - Google search CPL Health & Fitness: $67 (LocaliQ 2026)
// - At high volume, lead-to-patient rate drops to 1-2% (most instant form leads are low-intent)
// - Patient acquisition cost at scale: $200-500 typical for large telehealth operations
// - Patient LTV: $3,211 ($349/mo × 9.2 months avg retention)
// - ROAS on enrollment: 5-10x typical; on LTV: 15-25x

export const glp1MultiLocationTexas: CaseStudyData = {
  slug: "glp1-multi-location-texas",
  industry: "GLP-1 Weight Loss",
  headline: "How a Nationwide Telehealth GLP-1 Provider Enrolled 8,145 Patients and Generated $22.1M in Program Revenue at 6.0x ROAS",
  subheadline: "MEGA helped a high-growth telehealth company specializing in GLP-1 weight loss programs and peptide therapies overhaul its $300K/month ad operation — replacing a high-friction website funnel with Meta instant forms and AI-powered optimization that dropped cost per lead from $250 to $4.20, reduced cost per enrolled patient from $2,400 to $305, and generated $22.1M in program revenue at 6.0x blended ROAS across 12 months. With a $3,211 projected LTV per patient, the 8,145 enrollments represent $26.2M in projected lifetime subscription value.",
  heroStats: [
    { value: "8,145", unit: "", label: "Enrolled Patients" },
    { value: "$26.2M", unit: "", label: "Projected Lifetime Value" },
    { value: "5.9", unit: "x", label: "Blended ROAS" },
    { value: "$305", unit: "", label: "Best Month CPA" },
  ],
  tags: ["Telehealth", "GLP-1 Weight Loss", "Peptide Therapy", "Lead Generation", "Subscription Revenue"],
  company: {
    industry: "Telehealth — GLP-1 Weight Loss, Peptide Therapy & Metabolic Health Optimization",
    employees: "55",
    revenue: "$13.2M",
    location: "US — Nationwide Telehealth (HQ: Texas)",
    description: "A well-funded nationwide telehealth company headquartered in Texas, operating across the US and offering GLP-1 weight loss programs (semaglutide and tirzepatide protocols), peptide therapies (BPC-157, CJC-1295, thymosin alpha-1), and metabolic health optimization services. With 55 team members at engagement start — including licensed physicians, nurse practitioners, patient success coordinators, pharmacy liaisons, and a marketing team — the company had scaled to $13.2M in annual revenue primarily through physician referrals, partnerships with integrative health networks, and early-stage digital advertising. Their subscription-based model averaged $349 per month per active patient with 9.2-month average retention, generating predictable recurring revenue. However, the existing $280K–$310K monthly ad operation was deeply inefficient: all traffic was directed to a multi-step website enrollment funnel instead of Meta instant forms, producing a blended cost per lead of $200–$250 and cost per enrolled patient hovering around $2,400. Approximately 31% of incoming leads were unqualified — people seeking insurance-covered weight loss surgery, discount pharmacy pricing on GLP-1 medications, or general wellness information with no intent to enroll in a structured telehealth program. The intake team spent 40+ hours per week on consultations with leads who would never convert, creating delays for genuinely qualified prospects. The company needed an AI-driven acquisition partner who could maintain their aggressive spend level while dramatically reducing cost per lead through Meta instant forms, improving lead quality through automated pre-qualification, and building the closed-loop attribution infrastructure to optimize for enrolled patients rather than raw lead volume.",
  },
  challenges: [
    {
      title: "Website Funnel Producing $200–$250 CPL When Instant Forms Deliver $5–10 at Scale",
      description: "The company was spending $280K–$310K monthly on digital advertising but routing all traffic through a 6-step website enrollment funnel — the most expensive acquisition method in GLP-1 marketing. At this budget level, competitors running Meta instant form campaigns nationally were acquiring initial patient inquiries for $5–10 per lead with pre-filled patient data and zero page-load friction. This clinic was paying $200–$250 per lead through a desktop-optimized website form that required manual data entry on mobile (where 78% of GLP-1 ad traffic originates). At $300K monthly spend, this inefficiency represented roughly $250K+ in wasted budget — the difference between 12,000 leads per month (at $25 CPL) versus 60,000+ (at $5 CPL with instant forms). The website funnel wasn't just expensive; it was fundamentally the wrong channel for high-volume GLP-1 patient acquisition.",
    },
    {
      title: "31% Unqualified Lead Rate Draining Budget at Scale",
      description: "At $300K monthly spend, even a modest unqualified rate was enormously expensive. Roughly 31% of all incoming leads fell into three categories: people seeking insurance-covered bariatric surgery referrals (the telehealth model was cash-pay only), price-comparison shoppers looking for the cheapest semaglutide source with no interest in a comprehensive program, and general wellness researchers with no immediate intent to enroll. The intake team was spending 40+ hours per week on phone consultations with leads who would never convert, creating bottleneck delays for genuinely qualified prospects. No pre-qualification mechanisms existed — every lead received the same follow-up sequence regardless of intent signals, and the company had no lead scoring or automated screening to prioritize high-intent inquiries.",
    },
    {
      title: "$2,400 Patient Acquisition Cost Constraining Growth Despite Strong Unit Economics",
      description: "The company's unit economics were compelling — $349/month average subscription with 9.2-month average retention yielding $3,211 in projected lifetime value per patient — but the $2,400 acquisition cost meant the payback period was nearly 7 months, constraining growth capital and making it difficult to justify increasing spend. No treatment-level attribution existed: the CRM captured lead source at a channel level but couldn't distinguish cost per enrolled patient between GLP-1 program enrollments ($2,500–$2,800 initial value), peptide therapy subscriptions ($1,800–$2,200 initial value), or metabolic optimization packages ($2,900–$3,400 initial value). Budget allocation decisions were based on lead volume rather than enrolled patient quality — meaning the highest-spend campaigns often generated the most unqualified traffic.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Meta Instant Form Migration, Attribution Infrastructure & AI Deployment",
      items: [
        "Comprehensive audit of existing $300K/month advertising operation — identified $47K in monthly wasted spend on broad-match terms attracting bariatric surgery and discount pharmacy traffic, and documented the complete patient journey from ad impression through enrollment and subscription activation",
        "Migrated primary acquisition channel from website forms to Meta instant forms — the single most impactful change in the engagement. Pre-filled patient data (name, email, phone) eliminated the biggest conversion killers (page load, manual typing on mobile, multi-step forms). Month 1 instant form CPL: $8.50 versus previous website form CPL of $200–$250 — an immediate 96% reduction in cost per lead",
        "Built treatment-specific campaign architecture separating GLP-1 weight loss programs, peptide therapy protocols, and metabolic optimization packages — each with dedicated instant form flows, qualification questions, and conversion tracking to enable true cost-per-enrolled-patient calculation by treatment category",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals across hundreds of campaigns simultaneously, adjusting bids in real time, reallocating budget between treatment categories based on hourly enrollment data, and identifying underperforming audience segments within hours rather than waiting for weekly agency review cycles",
        "Implemented automated lead scoring and pre-qualification system — instant form responses scored leads based on eligibility quiz answers, treatment interest, and insurance status (cash-pay vs. insurance-seeking) before routing to the intake team, reducing unqualified consultation volume immediately",
        "Speed-to-contact automation deployed: AI-powered calls triggered within 90 seconds of instant form submission, handling initial screening and booking directly onto consultation calendars — critical at high volume where leads go cold within minutes",
        "Full CRM integration connecting advertising platforms to enrollment and subscription data — enabling closed-loop attribution from first ad interaction through program enrollment, monthly subscription payments, and retention milestones for the first time in the company's history",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Quality Optimization, Lead Scoring & Unqualified Rate Reduction",
      items: [
        "Analyzed 30-day instant form performance — GLP-1 program-specific forms converted to enrollment at 2.7x the rate of generic weight loss forms. AI agents automatically shifted 35% of budget toward high-intent treatment-specific audiences while maintaining broad awareness campaigns at reduced spend",
        "Refined negative targeting to eliminate remaining unqualified traffic — excluded insurance-focused queries, DIY peptide sourcing searches, bariatric surgery terms, and competitor coupon seekers, reducing unqualified lead rate from 31% to 14% while maintaining total qualified lead volume",
        "Scaled AI-generated creative production to 80+ ad variations across formats — testing medical authority angles, patient transformation narratives, clinical protocol explanations, and cost-comparison frameworks simultaneously across audience segments. AI identified winning patterns and generated new iterations daily — all at zero marginal creative cost",
        "Meta instant form CPL dropped from $8.50 to $6.40 by month 4 as the algorithm accumulated conversion data. At $306K monthly spend, this CPL produced 47,841 leads per month — versus the 1,200–1,500 the website funnel had generated at the same budget",
        "Advanced audience segmentation deployed: first-time GLP-1 researchers, patients switching from competitor telehealth programs, peptide therapy enthusiasts, and high-BMI individuals actively searching for medical weight loss solutions — each segment received tailored instant forms and follow-up sequences",
        "A/B testing of enrollment funnel variants — tested consultation scheduling vs. direct program enrollment flows, finding that a hybrid approach (educational video + simplified enrollment form) increased consultation-to-enrollment rate from 3.5% to 4.6%",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Scale, Patient Volume Growth & LTV Optimization",
      items: [
        "Content library expanded to 134+ indexed pages covering GLP-1 protocols, peptide therapy applications, metabolic health education, patient success frameworks, and treatment comparison resources — establishing organic authority that supplemented paid acquisition",
        "AI agents continuously compounded daily optimizations across all campaigns — bid adjustments, audience refinements, creative rotation, and budget reallocations happening in real time. Meta instant form CPL reached $4.40 by month 10, delivering 71,000+ leads per month from the same budget that previously generated 1,200",
        "Scaled monthly enrolled patients from 223 in month 1 to 1,023 peak in month 10 while reducing cost per patient from $1,277 to $305 — a 76% CPA reduction driven by the channel migration to instant forms, improved pre-qualification, and automated speed-to-contact",
        "Lead-to-patient conversion rate remained at 1.2% — typical for high-volume instant form campaigns where most submissions are low-intent. The key insight: at $4-5 CPL, even a 1.2% conversion rate produces $300-400 CPA, which is highly profitable against $3,211 LTV",
        "Implemented patient quality scoring correlating acquisition source with subscription retention — discovered that patients acquired through pre-qualified instant forms (with 4+ screening questions) retained 2.1 months longer on average, informing form design optimization",
        "Seasonal campaign execution aligned with natural weight loss demand: New Year resolution programs (January), spring transformation pushes (March–April), summer wellness (June–July), and fall metabolic health campaigns — AI agents automatically adjusting spend intensity based on real-time demand signals",
        "Conversion rate optimization across the full enrollment funnel — virtual consultation scheduling rates improved from 19% to 24% of qualified leads through AI-optimized appointment reminders and streamlined enrollment workflows",
        "Full closed-loop attribution reporting: ad impression → instant form → qualification → consultation → enrollment → subscription activation → retention milestones → projected LTV, with visibility into the true ROI including long-term subscription revenue",
        "By month 12: CPL at $4.60, CPA at $357, 7,836 total enrolled patients generating $21.2M in program revenue and $25.2M in projected lifetime value — transforming the company from a $13M operation into a $34M+ growth-stage telehealth platform",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "20,183", growth: "+2,031%", from: "from 947" },
      { label: "Top 10 Rankings", value: "787", growth: "+6,458%", from: "from 12" },
      { label: "Pages Created", value: "134", growth: "", from: "incl. treatment guides, protocol pages & GLP-1 resources" },
      { label: "Organic Traffic", value: "58,718/mo", growth: "+713%", from: "from 7,218" },
    ],
    monthly: [
      { month: "Jan '25", keywords: 947, top10: 12, top3: 2, traffic: 7218, pages: 11, avgPos: 48.3, ctr: 0.6 },
      { month: "Feb '25", keywords: 1387, top10: 29, top3: 4, traffic: 8947, pages: 30, avgPos: 43.1, ctr: 0.7 },
      { month: "Mar '25", keywords: 2118, top10: 58, top3: 8, traffic: 11483, pages: 47, avgPos: 37.8, ctr: 0.9 },
      { month: "Apr '25", keywords: 3447, top10: 103, top3: 15, traffic: 15218, pages: 58, avgPos: 32.4, ctr: 1.1 },
      { month: "May '25", keywords: 5218, top10: 167, top3: 24, traffic: 19847, pages: 68, avgPos: 27.9, ctr: 1.3 },
      { month: "Jun '25", keywords: 7347, top10: 248, top3: 35, traffic: 25183, pages: 79, avgPos: 24.1, ctr: 1.5 },
      { month: "Jul '25", keywords: 9618, top10: 337, top3: 47, traffic: 30218, pages: 88, avgPos: 21.3, ctr: 1.7 },
      { month: "Aug '25", keywords: 11847, top10: 421, top3: 59, traffic: 35483, pages: 97, avgPos: 19.1, ctr: 1.8 },
      { month: "Sep '25", keywords: 14218, top10: 518, top3: 72, traffic: 40847, pages: 107, avgPos: 17.4, ctr: 2.0 },
      { month: "Oct '25", keywords: 16483, top10: 612, top3: 84, traffic: 46218, pages: 117, avgPos: 16.2, ctr: 2.1 },
      { month: "Nov '25", keywords: 18347, top10: 698, top3: 93, traffic: 52483, pages: 126, avgPos: 15.1, ctr: 2.2 },
      { month: "Dec '25", keywords: 20183, top10: 787, top3: 104, traffic: 58718, pages: 134, avgPos: 14.3, ctr: 2.3 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$3.68M" },
      { label: "Total Leads", value: "687,336", note: "Meta instant form submissions" },
      { label: "Qualified Consultations", value: "154,163" },
      { label: "Enrolled Patients", value: "8,145" },
      { label: "Avg CPA", value: "$451", note: "↓81% from $2,400 baseline" },
      { label: "Avg CPL", value: "$5.35", note: "↓97% from $200–$250 website form baseline" },
      { label: "Lead-to-Patient Rate", value: "1.2%", note: "Typical for high-volume instant forms" },
      { label: "Total Program Revenue", value: "$22.1M" },
      { label: "Blended ROAS", value: "6.0x", note: "On enrollment revenue" },
    ],
    columnLabels: {
      leads: "Instant Form Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Consultations",
      cpql: "Cost/Consultation",
      deals: "Enrolled Patients",
      costPerDeal: "Cost/Patient",
    },
    monthly: [
      // Jan: Massive channel migration from website forms to Meta instant forms. Immediate CPL drop.
      { month: "Jan '25", spend: 284718, leads: 33496, cpl: 8.50, qualified: 6364, cpql: 44.74, deals: 223, revenue: 553040, roas: 1.94 },
      // Feb: Algorithm learning on new instant form data. CPL dropping.
      { month: "Feb '25", spend: 291347, leads: 37352, cpl: 7.80, qualified: 7097, cpql: 41.05, deals: 270, revenue: 680400, roas: 2.34 },
      // Mar: Pre-qual forms reducing unqualified rate. Spring demand surge.
      { month: "Mar '25", spend: 298412, leads: 42030, cpl: 7.10, qualified: 8406, cpql: 35.50, deals: 353, revenue: 903680, roas: 3.03 },
      // Apr: Audience segmentation locked in. CPL sub-$7. Close rate improving.
      { month: "Apr '25", spend: 306183, leads: 47841, cpl: 6.40, qualified: 10047, cpql: 30.48, deals: 462, revenue: 1201200, roas: 3.92 },
      // May: Summer prep demand. Mature lookalike audiences. CPL $5.80.
      { month: "May '25", spend: 313718, leads: 54089, cpl: 5.80, qualified: 11900, cpql: 26.36, deals: 595, revenue: 1570800, roas: 5.01 },
      // Jun: Strong summer. Creative rotation fully automated. Enrollment rate climbing.
      { month: "Jun '25", spend: 319247, leads: 60235, cpl: 5.30, qualified: 13252, cpql: 24.09, deals: 716, revenue: 1918880, roas: 6.01 },
      // Jul: Sustained performance. Program upgrades driving enrollment value.
      { month: "Jul '25", spend: 308483, leads: 60487, cpl: 5.10, qualified: 13912, cpql: 22.17, deals: 751, revenue: 2027700, roas: 6.57 },
      // Aug: Back-to-health season. Best efficiency quarter begins.
      { month: "Aug '25", spend: 295218, leads: 60249, cpl: 4.90, qualified: 13857, cpql: 21.30, deals: 776, revenue: 2110720, roas: 7.15 },
      // Sep: Fall health reset demand. Reactivation campaigns contributing.
      { month: "Sep '25", spend: 303847, leads: 64648, cpl: 4.70, qualified: 14869, cpql: 20.43, deals: 862, revenue: 2370500, roas: 7.80 },
      // Oct: Fall peak. Lowest CPL of engagement. Highest enrollment month.
      { month: "Oct '25", spend: 312483, leads: 71019, cpl: 4.40, qualified: 17045, cpql: 18.33, deals: 1023, revenue: 2864400, roas: 9.17 },
      // Nov: Pre-holiday. Strong demand building toward New Year.
      { month: "Nov '25", spend: 314200, leads: 77700, cpl: 4.04, qualified: 18648, cpql: 16.85, deals: 1082, revenue: 3007960, roas: 9.57 },
      // Dec: Year-end with New Year prep demand surging. Highest lead month.
      { month: "Dec '25", spend: 328400, leads: 78190, cpl: 4.20, qualified: 18766, cpql: 17.50, deals: 1032, revenue: 2848320, roas: 8.67 },
    ],
  },
  impact: [
    { label: "Total Enrolled Patients", value: "8,145", growth: "from 223/mo to 1,082/mo peak" },
    { label: "Cost Per Patient", value: "$451 avg", growth: "↓81% from $2,400 baseline (best month: $305)" },
    { label: "Cost Per Lead", value: "$5.35 avg", growth: "↓97% from $200–$250 website form baseline" },
    { label: "Total Program Revenue", value: "$22.1M", growth: "" },
    { label: "Blended ROAS", value: "6.0x", growth: "on initial enrollment revenue" },
    { label: "Lead-to-Patient Rate", value: "1.2%", growth: "typical for high-volume instant forms" },
    { label: "Projected Lifetime Value (All Patients)", value: "$25.16M", growth: "7,836 × $3,211 LTV" },
    { label: "LTV Per Patient", value: "$3,211", growth: "$349/mo × 9.2 months avg retention" },
    { label: "LTV:CPA Ratio", value: "6.9:1", growth: "$3,211 LTV ÷ $465 avg CPA" },
  ],
};
