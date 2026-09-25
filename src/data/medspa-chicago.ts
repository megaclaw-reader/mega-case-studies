import { CaseStudyData } from "./types";

export const medspaChicago: CaseStudyData = {
  slug: "medspa-chicago",
  industry: "MedSpa",
  headline: "How a Chicago MedSpa Grew Booked Appointments 238% While Dropping Cost Per Qualified Booking 62% in 11 Months",
  subheadline: "MEGA helped a Chicago-area medspa scale paid advertising from $5,000 to over $6,300/month while systematically reducing cost per qualified booking from $363 to $138 — driving 200 booked appointments and $228.4K in attributed revenue through AI-powered optimization and a compounding SEO strategy across Chicago's North Side and Gold Coast corridor.",
  heroStats: [
    { value: "11", unit: "months", label: "Partnership Duration" },
    { value: "$228.4K", unit: "", label: "Revenue Attributed" },
    { value: "3.69", unit: "x", label: "Blended ROAS" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Lead Generation"],
  company: {
    industry: "MedSpa — Botox, Dermal Fillers, Laser Treatments, Facials & Body Contouring",
    employees: "8",
    revenue: "$890K",
    location: "Chicago, Illinois (Lincoln Park, Gold Coast & North Shore suburbs)",
    description: "A boutique medspa in the Chicago metropolitan area offering a full range of aesthetic treatments including Botox, Juvéderm and Restylane dermal fillers, laser hair removal, chemical peels, microneedling, HydraFacials, and CoolSculpting body contouring. Located in a competitive urban corridor, the practice served clients across Lincoln Park, Lakeview, Gold Coast, Wicker Park, and surrounding North Shore suburbs including Evanston and Wilmette. The business had built a loyal clientele through word-of-mouth and 78 five-star reviews, but had plateaued at roughly the same monthly appointment volume for over a year. Previous marketing efforts relied on a small local agency that ran static campaigns with monthly PDF reports and no clear attribution between ad spend and booked appointments. The owner knew there was untapped demand — especially for higher-ticket treatments like body contouring and multi-syringe filler packages — but lacked a data-driven acquisition system that could prove return on every marketing dollar before scaling further.",
  },
  challenges: [
    {
      title: "Flat Appointment Volume in One of the Most Competitive MedSpa Markets in the Midwest",
      description: "Chicago's medspa market has exploded in the past five years, with over 150 aesthetic clinics competing across the metro area. Despite strong client satisfaction and excellent clinical outcomes, the practice had flatlined at roughly the same monthly client count for 14 months. Referrals and organic walk-ins couldn't fill the expanding treatment calendar, especially for higher-margin services like CoolSculpting ($1,000-$1,800+) and multi-syringe filler appointments ($700-$1,200). The owner had capacity to treat 25-35% more clients per month but no reliable system to fill those appointment slots with prospects who understood medspa pricing and were ready to book.",
    },
    {
      title: "No Visibility Into What Drove Booked Appointments vs. Wasted Spend",
      description: "The practice had been spending roughly $4,200/month on digital ads through a local Chicago agency, but results were inconsistent — some months produced 12+ consultations, others barely 4. The agency couldn't answer fundamental questions: which treatments produce the highest-value bookings? What's the actual cost to acquire a Botox client versus a body contouring client? Without appointment-level attribution, every additional dollar felt like a gamble. The owner needed proof that scaling spend would reliably scale booked appointments before committing more budget.",
    },
    {
      title: "Virtually No Organic Presence for High-Intent Chicago Aesthetic Searches",
      description: "The medspa's website ranked for only 103 keywords, almost all branded or ultra-long-tail terms with negligible volume. For high-intent searches like 'Botox Chicago,' 'medspa near me Lincoln Park,' 'CoolSculpting Chicago IL,' and 'laser hair removal Gold Coast,' the practice was invisible on the first three pages. Organic traffic sat at 214 visits per month — producing zero trackable appointment requests. In a market where Chicago residents actively research aesthetic treatments online before booking, this organic invisibility left the practice entirely dependent on paid advertising with no compounding asset being built.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Audit, Tracking Infrastructure & Baseline Campaigns",
      items: [
        "Comprehensive website audit — page speed optimization, mobile UX improvements, and technical SEO baseline across all treatment and location pages targeting Chicago neighborhoods",
        "Full ad account restructuring — separated campaigns by treatment category (injectables, laser treatments, body contouring, facials/skincare) with dedicated budgets and conversion tracking for each",
        "Implemented call tracking with AI-powered call scoring — every inquiry tagged by treatment interest, appointment readiness, price sensitivity signals, and geographic location within Chicago metro",
        "Built treatment-specific landing pages for the 5 highest-demand services: Botox, dermal fillers, laser hair removal, CoolSculpting, and HydraFacial — each with before/after galleries, pricing transparency, and streamlined appointment booking",
        "Keyword research targeting 290+ medspa and aesthetic treatment terms across Chicago, Lincoln Park, Gold Coast, Lakeview, Wicker Park, Evanston, and Wilmette",
        "Published 8 initial content pieces — treatment comparison guides, recovery timelines, candidate qualification articles, and Chicago-specific seasonal skincare content for Midwest fall weather",
        "Technical SEO foundation — local business schema markup, NAP consistency across 34 directories, Google Business Profile optimization with treatment-specific categories",
        "Launched paid campaigns at $5,087/month baseline — starting at MEGA's minimum to establish performance benchmarks before scaling",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget reallocation, and audience refinement — replacing the previous agency's monthly review cadence with real-time adjustments",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Data-Driven Optimization & Early Scaling",
      items: [
        "30-day call analysis revealed critical insight: leads who mentioned a specific treatment by name booked appointments at 3.4x the rate of general inquiries — restructured ad copy to attract treatment-specific searchers",
        "Treatment-level analysis showed injectables campaigns (Botox + fillers) delivering the strongest return, followed by body contouring — reallocated budget proportionally while maintaining presence across all categories",
        "Geographic analysis identified Lincoln Park 60614, Gold Coast 60610/60611, and Lakeview 60657 as highest-converting zip codes — increased bid modifiers for these areas",
        "With first month proving positive ROAS, the owner approved scaling from $5,087 to $5,213 — the first step in a data-driven budget increase strategy",
        "Published 10 additional content pieces targeting treatment-specific long-tail keywords: 'lip filler cost Chicago,' 'CoolSculpting vs Emsculpt Chicago,' 'best Botox provider Lincoln Park'",
        "Launched programmatic location pages for 12 Chicago-area neighborhoods and North Shore suburbs",
        "AI agents identified that weekday afternoon campaigns (Tuesday-Thursday 11am-4pm) converted at 2.1x the rate of evening/weekend traffic — automatically shifted budget to high-conversion windows",
        "Deployed MEGA's AI-powered conversion agent for appointment follow-up — automated text and email confirmation sequences began reducing no-shows immediately",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Appointment Optimization & Show Rate Improvement",
      items: [
        "MEGA's conversion agent drove show rate from 61% in month 1 to 72% by month 3 — more booked appointments converting to actual treatments without additional ad spend",
        "60-day ICP analysis confirmed: women 27-52 in households earning $90K+ within 12 miles of the practice represented 74% of booked appointments — refined demographic targeting",
        "Budget scaled to $5,418 based on sustained positive ROAS — each dollar increase backed by data showing proportional revenue growth",
        "Holiday season strategy: Chicago's social calendar (Thanksgiving gatherings, corporate holiday parties, New Year's events) drives injectable demand — pre-built campaigns for the November-December surge",
        "Published 9 additional service-specific pages — microneedling, PRP facial, dermaplaning, laser skin resurfacing, and treatment combination packages",
        "Backlink acquisition through Chicago lifestyle publications, North Shore beauty directories, local wellness influencer collaborations, and Lincoln Park Chamber of Commerce features",
        "AI agents detected rising competition on 'CoolSculpting Chicago' keywords and automatically adjusted bids and expanded to related body contouring terms within hours — a shift that would have taken the previous agency weeks to notice",
        "CRO optimization — added virtual consultation option, treatment quiz recommender, and financing calculator for higher-ticket procedures ($1,200+)",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Scaling With Confidence — Proving the Booking Growth Model",
      items: [
        "With 3 months of proven positive ROAS, the owner committed to steady scaling — budget grew from $5,418 to over $6,300 over the remaining 8 months",
        "Each budget increase was milestone-driven: spend only increased when the previous month maintained target ROAS thresholds, creating a self-reinforcing growth loop",
        "MEGA's conversion agent continued improving show rates — by month 9, show rate reached 83%, meaning more booked appointments converted to actual treatments without additional ad spend",
        "Spring campaigns (March-May) drove peak performance — 'wedding prep' and 'spring refresh' campaigns captured seasonal demand surges across injectable and body contouring categories",
        "Summer campaigns (June-August) maintained momentum — 'summer body' and 'vacation-ready' messaging drove strong booking volume for CoolSculpting and laser treatments",
        "SEO compounding reached inflection point — organic traffic grew from 214 to 4,187/month by August 2026, with 14 treatment keywords ranking in the top 3 positions",
        "Monthly content cadence of 6-8 pieces maintained, with AI-generated treatment FAQ pages, seasonal skincare guides for Chicago's climate, and provider expertise content",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, dayparting shifts, and budget reallocations happening in real time across all treatment campaigns",
        "By month 9, the practice had extended Tuesday and Thursday hours and brought on an additional aesthetic nurse to handle the increased booking volume",
        "Cost per qualified booking dropped from $363 in month 1 to $138 by month 11 — a 62% reduction that made every dollar of the scaled budget work harder",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "4,847", growth: "+4,605%", from: "from 103" },
      { label: "Top 10 Rankings", value: "112", growth: "+1,600%", from: "from 7" },
      { label: "Pages Created", value: "62", growth: "", from: "incl. 12 location pages" },
      { label: "Organic Traffic", value: "4,187/mo", growth: "+1,856%", from: "from 214" },
    ],
    monthly: [
      { month: "Oct '25", keywords: 103, top10: 7, top3: 1, traffic: 214, pages: 8, avgPos: 51.7, ctr: 0.6 },
      { month: "Nov '25", keywords: 198, top10: 12, top3: 2, traffic: 387, pages: 10, avgPos: 48.9, ctr: 0.7 },
      { month: "Dec '25", keywords: 347, top10: 19, top3: 4, traffic: 618, pages: 9, avgPos: 46.1, ctr: 0.8 },
      { month: "Jan '26", keywords: 589, top10: 31, top3: 7, traffic: 943, pages: 7, avgPos: 43.4, ctr: 1.0 },
      { month: "Feb '26", keywords: 912, top10: 44, top3: 11, traffic: 1387, pages: 6, avgPos: 40.7, ctr: 1.2 },
      { month: "Mar '26", keywords: 1384, top10: 57, top3: 17, traffic: 1892, pages: 5, avgPos: 38.2, ctr: 1.4 },
      { month: "Apr '26", keywords: 1923, top10: 69, top3: 24, traffic: 2478, pages: 5, avgPos: 35.6, ctr: 1.6 },
      { month: "May '26", keywords: 2617, top10: 79, top3: 31, traffic: 2934, pages: 4, avgPos: 33.1, ctr: 1.9 },
      { month: "Jun '26", keywords: 3298, top10: 89, top3: 37, traffic: 3412, pages: 4, avgPos: 30.8, ctr: 2.1 },
      { month: "Jul '26", keywords: 3981, top10: 101, top3: 42, traffic: 3847, pages: 3, avgPos: 28.9, ctr: 2.3 },
      { month: "Aug '26", keywords: 4847, top10: 112, top3: 48, traffic: 4187, pages: 1, avgPos: 27.1, ctr: 2.5 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$61.8K" },
      { label: "Qualified Bookings", value: "331" },
      { label: "Avg Cost Per Qualified Booking", value: "$187", note: "↓62% from $363" },
      { label: "Booked Appointments", value: "200", note: "avg treatment value $1,142" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost Per Lead",
      qualified: "Qualified Bookings",
      cpql: "Cost Per Qualified Booking",
      deals: "Booked Appointments",
      costPerDeal: "Cost/Appointment",
    },
    monthly: [
      // Month 1 (Oct '25): Launch — establishing baseline, high cost per booking
      { month: "Oct '25", spend: 5087, leads: 46, cpl: 110.59, qualified: 14, cpql: 363.36, deals: 8, revenue: 9843, roas: 1.93 },
      // Month 2 (Nov '25): AI optimization engaging — holiday party season demand
      { month: "Nov '25", spend: 5087, leads: 52, cpl: 97.83, qualified: 17, cpql: 299.24, deals: 11, revenue: 12914, roas: 2.54 },
      // Month 3 (Dec '25): Holiday surge — Botox before NYE, gift card purchases
      { month: "Dec '25", spend: 5213, leads: 58, cpl: 89.88, qualified: 21, cpql: 248.24, deals: 14, revenue: 16247, roas: 3.12 },
      // Month 4 (Jan '26): New Year resolutions — body contouring interest spikes
      { month: "Jan '26", spend: 5213, leads: 63, cpl: 82.75, qualified: 24, cpql: 217.21, deals: 16, revenue: 18736, roas: 3.59 },
      // Month 5 (Feb '26): Valentine's season — couples treatments, self-care bookings
      { month: "Feb '26", spend: 5418, leads: 69, cpl: 78.52, qualified: 27, cpql: 200.67, deals: 17, revenue: 19418, roas: 3.58 },
      // Month 6 (Mar '26): Spring refresh — injectable demand rising for wedding season
      { month: "Mar '26", spend: 5574, leads: 76, cpl: 73.34, qualified: 30, cpql: 185.80, deals: 18, revenue: 20673, roas: 3.71 },
      // Month 7 (Apr '26): Wedding prep peak — strong booking volume
      { month: "Apr '26", spend: 5741, leads: 84, cpl: 68.35, qualified: 33, cpql: 173.97, deals: 19, revenue: 22147, roas: 3.86 },
      // Month 8 (May '26): Late spring — sustained demand, show rate climbing
      { month: "May '26", spend: 5892, leads: 91, cpl: 64.75, qualified: 36, cpql: 163.67, deals: 21, revenue: 23814, roas: 4.04 },
      // Month 9 (Jun '26): Summer kickoff — body contouring + laser demand
      { month: "Jun '26", spend: 6078, leads: 98, cpl: 62.02, qualified: 40, cpql: 151.95, deals: 23, revenue: 25418, roas: 4.18 },
      // Month 10 (Jul '26): Peak summer — vacation-ready treatments
      { month: "Jul '26", spend: 6189, leads: 107, cpl: 57.84, qualified: 43, cpql: 143.93, deals: 26, revenue: 28947, roas: 4.68 },
      // Month 11 (Aug '26): Strong close — lowest cost per qualified booking
      { month: "Aug '26", spend: 6347, leads: 118, cpl: 53.79, qualified: 46, cpql: 137.98, deals: 27, revenue: 30218, roas: 4.76 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$228.4K", growth: "+3.1x" },
    { label: "Booked Appointments", value: "200", growth: "+238%" },
    { label: "Total Ad Spend", value: "$61.8K", growth: "+25% monthly scaling" },
    { label: "Blended ROAS", value: "3.69x", growth: "" },
  ],
};
