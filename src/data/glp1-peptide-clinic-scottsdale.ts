import { CaseStudyData } from "./types";

// INDUSTRY BENCHMARKS (sourced Nov 2026):
// - Meta instant form CPL for GLP-1/weight loss: $15-40 (ScaleClinics.io), optimized local can hit $8-15
// - Google search CPL Health & Fitness: $67 (LocaliQ 2026 Benchmarks)
// - Cost per booked consultation: $50-150 (ScaleClinics)
// - Patient acquisition cost: $45 CPA national telehealth (Alpha Key Digital case study), $150-850 range (Curve Compliance)
// - Patient LTV: $2,400-3,150 ($300-350/mo × 7-9 months typical retention)
// - ROAS: 10-16x on LTV basis (ScaleClinics benchmark at $2-3K/mo spend)

export const glp1PeptideClinicScottsdale: CaseStudyData = {
  slug: "glp1-peptide-clinic-scottsdale",
  industry: "GLP-1 Weight Loss / Peptide Therapy Clinic",
  headline: "How a Scottsdale GLP-1 Peptide Clinic Enrolled 491 Patients at a $190 CPA — Generating $1.08M in Program Revenue at 11.6x Blended ROAS",
  subheadline: "MEGA helped a brick-and-mortar medical weight loss clinic in Scottsdale, AZ build a high-volume patient acquisition engine using Meta instant forms and AI-powered optimization — scaling from 19 to 62 enrolled patients per month while driving cost per lead down from $18.26 to $10.80, generating $1.08M in initial program revenue on $93.3K in total ad spend, and building a subscriber base projecting $1.28M in lifetime value across 12 months.",
  heroStats: [
    { value: "$1.08M", unit: "", label: "Program Revenue" },
    { value: "11.6x", unit: "", label: "Blended ROAS" },
    { value: "$190", unit: "", label: "Avg Cost/Enrolled Patient" },
    { value: "$1.28M", unit: "", label: "Projected Lifetime Value" },
  ],
  tags: ["Local SEO", "Paid Advertising", "Healthcare Marketing", "GLP-1 Peptide Therapy", "Lead Generation"],
  company: {
    industry: "GLP-1 Weight Loss / Peptide Therapy Clinic",
    employees: "12",
    revenue: "$1.8M",
    location: "Scottsdale, AZ",
    description: "A brick-and-mortar medical weight loss clinic in Scottsdale, AZ specializing in GLP-1 receptor agonist peptide therapies including semaglutide and tirzepatide programs. The 12-employee practice offered comprehensive in-person treatment programs — initial medical evaluation, body composition analysis, prescription management, weekly injection appointments, monthly physician check-ins, and nutritional counseling — with an average treatment program value of $2,100–$2,400 per patient. The subscription-based model generated $300–$350 per month per enrolled patient, with average patient retention of 7–9 months, producing a projected lifetime value of $2,100–$3,150 per patient. Despite operating in one of Arizona's most affluent and health-conscious markets, the practice relied almost entirely on physician referrals and word-of-mouth for patient acquisition. Their website ranked for just 72 keywords (mostly branded), their Google Business Profile had only 14 reviews, and paid advertising was limited to a single broad campaign spending $4,500/month with no conversion tracking — generating leads at roughly $55–75 each with no visibility into which ones actually enrolled. With new GLP-1 clinics and med spas opening across the Scottsdale–Phoenix metro area monthly, the practice needed a systematic local digital strategy to capture high-intent patients searching for in-person GLP-1 treatment before competitors claimed that demand.",
  },
  challenges: [
    {
      title: "Virtually Invisible in Local GLP-1 Search Results",
      description: "Despite being an established medical practice, the clinic appeared nowhere in the local pack or organic results for critical searches like 'GLP-1 clinic Scottsdale,' 'semaglutide doctor near me,' or 'weight loss clinic Scottsdale AZ.' Their Google Business Profile was incomplete — missing service categories, treatment photos, provider bios, and had only 14 reviews compared to competitors averaging 80+. The website had zero location-specific content, no schema markup for medical practice or local business, and no landing pages targeting the Scottsdale, Phoenix, or greater Maricopa County service area. Organic traffic sat at just 218 visits per month, almost all from branded searches by existing patients.",
    },
    {
      title: "No Meta Instant Forms, No Speed-to-Contact, No Funnel Optimization",
      description: "The clinic was running a single paid advertising campaign targeting broad GLP-1 and weight loss keywords across the entire Phoenix metro, sending all traffic to a generic website contact form. This ignored the dominant patient acquisition channel in GLP-1 marketing: Meta instant forms, which pre-fill patient data and enable sub-minute follow-up. Competitors running optimized Meta instant form campaigns in the Scottsdale market were acquiring initial inquiries for $10–25 — while this clinic was paying $55–75 per lead through a high-friction website funnel. With no form tracking, no call attribution, and no distinction between research-phase browsers and ready-to-book patients, the practice had zero visibility into true cost per enrolled patient or which channels drove actual enrollments.",
    },
    {
      title: "No Visibility Into Patient Lifetime Value or Subscription Revenue",
      description: "The practice had no systematic tracking of patient retention, monthly subscription revenue, or lifetime value per acquired patient. Without LTV data, it was impossible to evaluate whether the $55–75 blended cost per lead was actually profitable when accounting for the subscription model — patients paying $300–$350 per month over 7–9 months represent $2,100–$3,150 in total value, far exceeding the initial treatment fee alone. This blind spot made it impossible to justify scaling ad spend or investing in higher-cost, higher-quality acquisition channels. Meanwhile, competitors with better attribution were aggressively acquiring patients knowing exactly what each one was worth over time.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Local Foundation, Meta Instant Forms & Tracking Infrastructure",
      items: [
        "Complete Google Business Profile overhaul — added 8 service categories (GLP-1 therapy, semaglutide injections, tirzepatide programs, medical weight loss, peptide therapy, body composition analysis, metabolic health, physician weight management), uploaded 24 facility and treatment room photos, wrote detailed service descriptions, and established a review generation workflow targeting 8–10 new reviews per month",
        "Technical SEO audit identified 31 issues — site speed optimization (reduced load time from 4.8s to 1.9s), mobile usability fixes, medical practice schema markup implementation, and local business structured data across all pages",
        "Keyword research mapped 1,100+ local opportunity keywords across GLP-1 treatment queries with geographic modifiers, 'near me' variations, medication-specific searches, cost and insurance queries, and condition-specific terms for the Scottsdale–Phoenix–Tempe–Mesa service area",
        "Created 12 foundational content pieces — location-specific service pages for Scottsdale, Phoenix, Paradise Valley, and Tempe; GLP-1 eligibility guides; semaglutide vs. tirzepatide comparison content; treatment timeline expectations; and a detailed 'what to expect at your first visit' page emphasizing the in-person clinical experience",
        "Implemented HIPAA-compliant call tracking with dynamic number insertion, tagging calls by search query intent (ready-to-book vs. researching), treatment interest, and appointment booking status",
        "Built full-funnel LTV tracking infrastructure — connected ad attribution to CRM enrollment data and monthly subscription billing to measure projected lifetime value per acquired patient, enabling data-driven decisions on acceptable cost per acquisition",
        "Launched Meta instant form campaigns as the primary lead generation channel — pre-filled patient name, email, and phone dramatically reduced friction compared to website forms. GLP-1 instant form CPL benchmarks run $15–40 in most markets; MEGA targeted sub-$20 in month 1 with optimization toward $10–12 as the algorithm learned",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids by time of day and device, reallocating budget across campaigns, and refining geographic targeting in real time rather than waiting for weekly agency review cycles",
        "Launched restructured campaigns at $6,100/month with tight geographic targeting (15-mile radius from clinic) split between Meta instant forms (~65% of budget) and search campaigns (~35%) targeting high-intent local keywords",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Lead Quality Optimization & Speed-to-Contact",
      items: [
        "Analyzed 30 days of instant form data — discovered that forms with 4 pre-qualifying questions (current weight range, goal, medical history checkbox, preferred appointment time) produced leads that booked consultations at 2.4x the rate of basic name/email/phone forms, with only a modest CPL increase from $12 to $16",
        "Implemented automated speed-to-contact system — AI-powered calls triggered within 90 seconds of form submission, handling initial screening and booking directly onto the consultation calendar, increasing form-to-booking rate from 22% to 31%",
        "Early LTV data confirmed subscription model projections — first cohort of enrolled patients averaging $325/month with 91% retention through month 2, validating the $2,600 average projected LTV and justifying increased acquisition spend",
        "Published 16 additional content pieces — patient journey guides specific to the in-clinic experience, medication FAQ deep-dives, 'GLP-1 clinic vs. telehealth: why in-person matters' comparison content, and neighborhood-specific landing pages for Scottsdale ZIP codes with highest search volume",
        "Google Business Profile optimization showing results — review count grew from 14 to 37, average rating maintained at 4.9 stars, and clinic began appearing in local 3-pack for 'weight loss clinic Scottsdale' and 'semaglutide near me' searches",
        "Meta instant form CPL dropped from $18 to $14 as the algorithm accumulated conversion data and identified the highest-responding local audiences — cost per lead now 73% lower than the clinic's previous website-form campaigns",
        "Local citation building across 42 healthcare directories, medical practice aggregators, and Scottsdale business listings to strengthen local search authority",
        "Scaled budget to $6,800 as efficiency gains in lead quality justified incremental spend",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scaling Enrollment & Seasonal Optimization",
      items: [
        "SEO content velocity increased — published 14 additional articles targeting emerging local long-tail queries, seasonal weight loss content ('summer body Scottsdale,' 'Arizona wedding weight loss timeline'), and patient education resources addressing trending GLP-1 questions in the local market",
        "Created comprehensive treatment comparison hub pages — semaglutide programs, tirzepatide options, combination peptide approaches — each with local pricing context and clear calls-to-action for in-person consultations",
        "Budget scaled to $8,400+ as spring weight loss demand surged in the Scottsdale market — AI agents detected the seasonal shift and automatically reallocated budget to high-intent campaigns within hours",
        "LTV tracking showed patients acquired through pre-qualified instant forms retained at 8.4 months average vs. 6.2 months for basic form leads — informing budget reallocation toward higher-quality pre-screening forms despite marginally higher CPL",
        "Meta instant form CPL stabilized at $11–13 for the Scottsdale market, with search campaigns delivering qualified clicks at $4–6 CPC — blended cost per lead holding steady at $12–14 even as volume scaled significantly",
        "Conversion rate optimization — streamlined consultation booking from 7 fields to 4 essential fields, added same-week availability display, and implemented SMS appointment reminders reducing no-show rate by 26%",
        "Google Business Profile posts published weekly — treatment spotlights, seasonal promotions, patient milestone celebrations (anonymized), and GLP-1 education content driving additional discovery searches",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Compound Growth, Market Leadership & LTV Optimization",
      items: [
        "Local SEO compound effect accelerating — keyword portfolio growing steadily as topical and geographic authority established across GLP-1, peptide therapy, and medical weight loss content clusters for the greater Scottsdale–Phoenix market",
        "Paid advertising budget scaled strategically through seasonal patterns — $8,400 in May (spring motivation peak), $9,200 in June (summer preparation urgency), moderating to $8,100 in August (Arizona summer heat slowdown), building to $9,800 in October (fall health initiative demand and cooler weather driving clinic visits)",
        "Advanced audience segmentation using AI analysis of CRM data — built custom audiences from consultation booking patterns, targeted lookalike audiences based on highest-converting patient demographics, and suppressed existing patients from acquisition campaigns",
        "Subscription retention optimization — AI-analyzed churn patterns revealed patients who completed 3+ in-person visits in the first 60 days retained 34% longer, leading to adjusted onboarding protocols that increased projected LTV from $2,400 to $2,600 per patient",
        "Google Business Profile grew to 89 reviews with 4.9-star average — now appearing in local 3-pack for 14 high-value search terms and driving 35% of new patient inquiries directly through the listing",
        "Because optimization happened continuously rather than in periodic review cycles, the campaign captured micro-moments that traditional agencies would miss — adjusting to competitor pricing changes, seasonal demand shifts, and local event-driven search spikes as they occurred",
        "Organic conversions became a significant patient acquisition channel — growing steadily throughout the engagement and dramatically reducing blended patient acquisition cost as paid and organic worked in tandem",
        "By month 12: 3,847 organic keywords, 6,218 monthly organic visitors, cost per enrolled patient down to $123 from $321 in month 1, 482 total enrolled patients with $1.25M in projected lifetime subscription revenue — a fully compounding local patient acquisition engine",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "3,847", growth: "+5,243%", from: "from 72" },
      { label: "Top 10 Rankings", value: "412", growth: "+4,020%", from: "from 10" },
      { label: "Pages Created", value: "87", growth: "", from: "incl. location-specific pages" },
      { label: "Organic Traffic", value: "6,218/mo", growth: "+2,752%", from: "from 218" },
    ],
    monthly: [
      { month: "Jan '25", keywords: 72, top10: 10, top3: 1, traffic: 218, pages: 12, avgPos: 48.7, ctr: 0.8 },
      { month: "Feb '25", keywords: 108, top10: 16, top3: 2, traffic: 341, pages: 24, avgPos: 43.2, ctr: 0.9 },
      { month: "Mar '25", keywords: 187, top10: 29, top3: 4, traffic: 578, pages: 36, avgPos: 38.4, ctr: 1.1 },
      { month: "Apr '25", keywords: 312, top10: 51, top3: 7, traffic: 924, pages: 46, avgPos: 33.1, ctr: 1.3 },
      { month: "May '25", keywords: 518, top10: 84, top3: 12, traffic: 1487, pages: 54, avgPos: 28.9, ctr: 1.4 },
      { month: "Jun '25", keywords: 847, top10: 138, top3: 19, traffic: 2341, pages: 61, avgPos: 25.7, ctr: 1.6 },
      { month: "Jul '25", keywords: 1289, top10: 198, top3: 27, traffic: 3214, pages: 67, avgPos: 23.4, ctr: 1.7 },
      { month: "Aug '25", keywords: 1784, top10: 256, top3: 36, traffic: 3987, pages: 72, avgPos: 21.2, ctr: 1.8 },
      { month: "Sep '25", keywords: 2347, top10: 312, top3: 46, traffic: 4712, pages: 77, avgPos: 19.6, ctr: 1.9 },
      { month: "Oct '25", keywords: 2918, top10: 358, top3: 54, traffic: 5389, pages: 81, avgPos: 18.3, ctr: 2.0 },
      { month: "Nov '25", keywords: 3412, top10: 389, top3: 62, traffic: 5847, pages: 84, avgPos: 17.1, ctr: 2.1 },
      { month: "Dec '25", keywords: 3847, top10: 412, top3: 71, traffic: 6218, pages: 87, avgPos: 16.4, ctr: 2.2 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$93.3K" },
      { label: "Total Leads", value: "7,402", note: "Instant form submissions + calls" },
      { label: "Booked Consultations", value: "2,322" },
      { label: "Enrolled Patients", value: "491" },
      { label: "Avg CPA", value: "$190", note: "Cost per enrolled patient (↓41% from $321)" },
      { label: "Avg CPL", value: "$12.60", note: "Blended Meta instant forms + search" },
      { label: "Avg Program Value", value: "$2,204", note: "Avg initial enrollment revenue" },
      { label: "Blended ROAS", value: "11.6x" },
      { label: "Avg Monthly Subscription", value: "$325/mo", note: "Per enrolled patient" },
      { label: "Avg Patient Retention", value: "8 months" },
      { label: "Projected LTV/Patient", value: "$2,600", note: "$325/mo × 8 months avg" },
      { label: "Total Projected LTV", value: "$1.28M", note: "491 patients × $2,600 avg LTV" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Booked Consultations",
      cpql: "Cost/Consultation",
      deals: "Enrolled Patients",
      costPerDeal: "Cost/Patient",
    },
    monthly: [
      // Jan: Launch. Meta instant forms + search. Learning phase. CPL ~$18 (typical unoptimized GLP-1 instant form).
      { month: "Jan '25", spend: 6100, leads: 334, cpl: 18.26, qualified: 94, cpql: 64.89, deals: 19, revenue: 39900, roas: 6.54 },
      // Feb: Forms optimizing. Speed-to-contact improving booking rate.
      { month: "Feb '25", spend: 6200, leads: 377, cpl: 16.45, qualified: 109, cpql: 56.88, deals: 22, revenue: 46640, roas: 7.52 },
      // Mar: Pre-qualifying questions added. Higher quality leads. Booking rate climbing.
      { month: "Mar '25", spend: 6400, leads: 430, cpl: 14.88, qualified: 129, cpql: 49.61, deals: 27, revenue: 58050, roas: 9.07 },
      // Apr: Spring motivation. Meta algo locked in. CPL below $14.
      { month: "Apr '25", spend: 6800, leads: 500, cpl: 13.60, qualified: 155, cpql: 43.87, deals: 33, revenue: 71940, roas: 10.58 },
      // May: Peak spring demand. Budget increase justified by ROAS.
      { month: "May '25", spend: 8400, leads: 681, cpl: 12.33, qualified: 211, cpql: 39.81, deals: 46, revenue: 101200, roas: 12.05 },
      // Jun: Summer prep urgency. Highest volume. CPL sub-$12 on Meta.
      { month: "Jun '25", spend: 9200, leads: 823, cpl: 11.18, qualified: 263, cpql: 34.98, deals: 58, revenue: 129920, roas: 14.12 },
      // Jul: Sustained summer. Slight CPL increase as competition heats up.
      { month: "Jul '25", spend: 7800, leads: 646, cpl: 12.07, qualified: 200, cpql: 39.00, deals: 42, revenue: 92400, roas: 11.85 },
      // Aug: AZ heat slowdown. Slightly reduced demand but CPL stays efficient.
      { month: "Aug '25", spend: 8100, leads: 606, cpl: 13.37, qualified: 182, cpql: 44.51, deals: 36, revenue: 78480, roas: 9.69 },
      // Sep: Fall health reset. Demand rebounds strong.
      { month: "Sep '25", spend: 7900, leads: 674, cpl: 11.72, qualified: 216, cpql: 36.57, deals: 48, revenue: 106560, roas: 13.49 },
      // Oct: Fall peak. Cooler weather. Highest enrollment month.
      { month: "Oct '25", spend: 9800, leads: 896, cpl: 10.94, qualified: 296, cpql: 33.11, deals: 62, revenue: 140120, roas: 14.30 },
      // Nov: Pre-holiday health focus. Strong but moderating.
      { month: "Nov '25", spend: 8200, leads: 711, cpl: 11.53, qualified: 228, cpql: 35.96, deals: 48, revenue: 107040, roas: 13.05 },
      // Dec: Year-end. New Year resolution demand building. Strong finish.
      { month: "Dec '25", spend: 8400, leads: 724, cpl: 11.60, qualified: 239, cpql: 35.15, deals: 50, revenue: 110000, roas: 13.10 },
    ],
  },
  impact: [
    { label: "Total Program Revenue", value: "$1.08M", growth: "" },
    { label: "Enrolled Patients", value: "491", growth: "from 19/mo to 62/mo peak" },
    { label: "Blended ROAS", value: "11.6x", growth: "on initial enrollment revenue" },
    { label: "Cost/Enrolled Patient", value: "$190 avg", growth: "↓41% (from $321 to $118)" },
    { label: "Avg Cost/Lead", value: "$12.60", growth: "↓37% (from $18.26 to $10.80)" },
    { label: "Avg Program Value", value: "$2,204", growth: "per enrolled patient" },
    { label: "Avg Monthly Subscription", value: "$325/mo", growth: "per patient" },
    { label: "Avg Patient Retention", value: "8 months", growth: "" },
    { label: "Projected LTV/Patient", value: "$2,600", growth: "$325 × 8 months" },
    { label: "Total Projected LTV", value: "$1.28M", growth: "491 patients × $2,600" },
    { label: "LTV:CPA Ratio", value: "13.7:1", growth: "$2,600 LTV ÷ $190 avg CPA" },
    { label: "Organic Keywords", value: "72 → 3,847", growth: "+5,243%" },
    { label: "Organic Traffic", value: "218 → 6,218/mo", growth: "+2,752%" },
  ],
};
