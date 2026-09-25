import { CaseStudyData } from "./types";

export const medspaChicago: CaseStudyData = {
  slug: "medspa-chicago",
  industry: "Medspa",
  headline: "How a Chicago Medspa Grew Booked Appointments 187% While Dropping Cost Per Qualified Lead 60% Over 10 Months",
  subheadline: "MEGA helped a Chicago-area medspa scale paid advertising from $5,000 to over $6,200/month while systematically reducing cost per qualified lead from $358 to $145 — driving 168 booked appointments and $191.4K in attributed revenue through AI-powered optimization and a compounding SEO strategy across the North Shore and downtown Chicago corridor.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "$191.4K", unit: "", label: "Revenue Attributed" },
    { value: "3.45", unit: "x", label: "Blended ROAS" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Lead Generation"],
  company: {
    industry: "Medspa — Botox, Dermal Fillers, Laser Treatments, Facials & Body Contouring",
    employees: "8",
    revenue: "$890K",
    location: "Chicago, Illinois (Lincoln Park, Gold Coast & North Shore suburbs)",
    description: "A boutique medspa in the Chicago metropolitan area offering a full range of aesthetic treatments including Botox, Juvéderm and Restylane dermal fillers, laser hair removal, chemical peels, microneedling, HydraFacials, and CoolSculpting body contouring. Located in a competitive urban corridor, the practice served clients across Lincoln Park, Lakeview, Gold Coast, Wicker Park, and surrounding North Shore suburbs including Evanston and Wilmette. The business had built a loyal clientele through word-of-mouth and 78 five-star reviews, but had plateaued at roughly the same monthly appointment volume for over a year. Previous marketing efforts relied on a small local agency that ran static campaigns with monthly PDF reports and no clear attribution between ad spend and booked appointments. The owner knew there was untapped demand — especially for higher-ticket treatments like body contouring and multi-syringe filler packages — but lacked a data-driven acquisition system that could prove return on every marketing dollar before scaling further.",
  },
  challenges: [
    {
      title: "Flat Appointment Volume in One of the Most Competitive Medspa Markets in the Midwest",
      description: "Chicago's medspa market has exploded in the past five years, with over 150 aesthetic clinics competing across the metro area. Despite strong client satisfaction and excellent clinical outcomes, the practice had flatlined at roughly the same monthly client count for 14 months. Referrals and organic walk-ins couldn't fill the expanding treatment calendar, especially for higher-margin services like CoolSculpting ($1,000-$1,800+) and multi-syringe filler appointments ($700-$1,200). The owner had capacity to treat 25-35% more clients per month but no reliable system to fill those appointment slots with prospects who understood medspa pricing and were ready to book.",
    },
    {
      title: "No Visibility Into What Drove Booked Appointments vs. Wasted Spend",
      description: "The practice had been spending roughly $4,200/month on digital ads through a local Chicago agency, but results were inconsistent — some months produced 12+ consultations, others barely 4. The agency couldn't answer fundamental questions: which treatments produce the highest-value appointments? What's the actual cost to acquire a Botox client versus a body contouring client? Without appointment-level attribution, every additional dollar felt like a gamble. The owner needed proof that scaling spend would reliably scale booked appointments before committing more budget.",
    },
    {
      title: "Virtually No Organic Presence for High-Intent Chicago Aesthetic Searches",
      description: "The medspa's website ranked for only 97 keywords, almost all branded or ultra-long-tail terms with negligible volume. For high-intent searches like 'Botox Chicago,' 'medspa near me Lincoln Park,' 'CoolSculpting Chicago IL,' and 'laser hair removal Gold Coast,' the practice was invisible on the first three pages. Organic traffic sat at 187 visits per month — producing zero trackable appointment requests. In a market where Chicago residents actively research aesthetic treatments online before booking, this organic invisibility left the practice entirely dependent on paid advertising with no compounding asset being built.",
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
        "Keyword research targeting 280+ medspa and aesthetic treatment terms across Chicago, Lincoln Park, Gold Coast, Lakeview, Wicker Park, Evanston, and Wilmette",
        "Published 9 initial content pieces — treatment comparison guides, recovery timelines, candidate qualification articles, and Chicago-specific seasonal skincare content for Midwest winter weather",
        "Technical SEO foundation — local business schema markup, NAP consistency across 34 directories, Google Business Profile optimization with treatment-specific categories",
        "Launched paid campaigns at $5,012/month baseline — starting at MEGA's minimum to establish performance benchmarks before scaling",
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
        "With first month proving positive ROAS, the owner approved scaling from $5,012 to $5,234 — the first step in a data-driven budget increase strategy",
        "Published 11 additional content pieces targeting treatment-specific long-tail keywords: 'lip filler cost Chicago,' 'CoolSculpting vs Emsculpt Chicago,' 'best Botox provider Lincoln Park'",
        "Launched programmatic location pages for 12 Chicago-area neighborhoods and North Shore suburbs",
        "AI agents identified that weekday afternoon campaigns (Tuesday-Thursday 11am-4pm) converted at 2.1x the rate of evening/weekend traffic — automatically shifted budget to high-conversion windows",
        "Created retargeting audiences segmented by treatment page visits — CoolSculpting visitors received body contouring follow-up sequences, injectable page visitors saw Botox/filler appointment prompts",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Appointment Optimization & Show Rate Improvement",
      items: [
        "Deployed MEGA's AI-powered conversion agent for appointment follow-up — automated text and email confirmation sequences reduced no-shows and improved show rate from 62% to 71% by month 3",
        "60-day ICP analysis confirmed: women 27-52 in households earning $90K+ within 12 miles of the practice represented 74% of booked appointments — refined demographic targeting",
        "Budget scaled to $5,487 based on sustained positive ROAS — each dollar increase backed by data showing proportional revenue growth",
        "Seasonal strategy: spring wedding season and summer event prep drive injectable demand in Chicago — pre-built campaigns for the April-June surge",
        "Published 8 additional service-specific pages — microneedling, PRP facial, dermaplaning, laser skin resurfacing, and treatment combination packages",
        "Backlink acquisition through Chicago lifestyle publications, North Shore beauty directories, local wellness influencer collaborations, and Lincoln Park Chamber of Commerce features",
        "AI agents detected rising competition on 'CoolSculpting Chicago' keywords and automatically adjusted bids and expanded to related body contouring terms within hours — a shift that would have taken the previous agency weeks to notice",
        "CRO optimization — added virtual consultation option, treatment quiz recommender, and financing calculator for higher-ticket procedures ($1,200+)",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Scaling With Confidence — Proving the Appointment Growth Model",
      items: [
        "With 3 months of proven positive ROAS, the owner committed to steady scaling — budget grew from $5,487 to $6,218 over the remaining 7 months",
        "Each budget increase was milestone-driven: spend only increased when the previous month maintained target ROAS thresholds, creating a self-reinforcing growth loop",
        "MEGA's conversion agent continued improving show rates — by month 8, show rate reached 81%, meaning more booked appointments converted to actual treatments without additional ad spend",
        "Summer campaigns (June-August) drove peak performance — 'summer body' and 'wedding prep' campaigns captured seasonal demand surges across body contouring and injectable categories",
        "SEO compounding reached inflection point — organic traffic grew from 187 to 3,412/month by October, with 11 treatment keywords ranking in the top 3 positions",
        "Monthly content cadence of 6-8 pieces maintained, with AI-generated treatment FAQ pages, seasonal skincare guides for Chicago's climate, and provider expertise content",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, dayparting shifts, and budget reallocations happening in real time across all treatment campaigns",
        "By month 10, the practice had extended Tuesday and Thursday hours and brought on an additional aesthetic nurse to handle the increased appointment volume",
        "Cost per qualified lead dropped from $358 in month 1 to $145 by month 10 — a 60% reduction that made every dollar of the scaled budget work harder",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "4,218", growth: "+4,247%", from: "from 97" },
      { label: "Top 10 Rankings", value: "89", growth: "+1,383%", from: "from 6" },
      { label: "Pages Created", value: "54", growth: "", from: "incl. 12 location pages" },
      { label: "Organic Traffic", value: "3,412/mo", growth: "+1,724%", from: "from 187" },
    ],
    monthly: [
      { month: "Jan '25", keywords: 97, top10: 6, top3: 1, traffic: 187, pages: 6, avgPos: 52.3, ctr: 0.6 },
      { month: "Feb '25", keywords: 214, top10: 11, top3: 2, traffic: 348, pages: 9, avgPos: 49.7, ctr: 0.7 },
      { month: "Mar '25", keywords: 418, top10: 24, top3: 5, traffic: 637, pages: 11, avgPos: 46.2, ctr: 0.9 },
      { month: "Apr '25", keywords: 743, top10: 41, top3: 9, traffic: 1124, pages: 8, avgPos: 43.1, ctr: 1.1 },
      { month: "May '25", keywords: 1187, top10: 58, top3: 14, traffic: 1683, pages: 7, avgPos: 40.8, ctr: 1.3 },
      { month: "Jun '25", keywords: 1694, top10: 67, top3: 21, traffic: 2147, pages: 6, avgPos: 38.4, ctr: 1.6 },
      { month: "Jul '25", keywords: 2238, top10: 74, top3: 28, traffic: 2634, pages: 5, avgPos: 35.9, ctr: 1.8 },
      { month: "Aug '25", keywords: 2891, top10: 79, top3: 34, traffic: 2973, pages: 4, avgPos: 33.7, ctr: 2.0 },
      { month: "Sep '25", keywords: 3547, top10: 84, top3: 39, traffic: 3148, pages: 4, avgPos: 31.2, ctr: 2.2 },
      { month: "Oct '25", keywords: 4218, top10: 89, top3: 44, traffic: 3412, pages: 4, avgPos: 29.1, ctr: 2.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$55.4K" },
      { label: "Qualified Leads", value: "283" },
      { label: "Avg Cost Per Qualified Lead", value: "$196", note: "↓60% from $358" },
      { label: "Booked Appointments", value: "168", note: "avg treatment value $1,139" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost Per Lead",
      qualified: "Qualified Leads",
      cpql: "Cost Per Qualified Lead",
      deals: "Booked Appointments",
      costPerDeal: "Cost/Appointment",
    },
    monthly: [
      // Month 1: Launch — establishing baseline, high CPQL
      { month: "Jan '25", spend: 5012, leads: 47, cpl: 106.64, qualified: 14, cpql: 358.00, deals: 8, revenue: 10427, roas: 2.08 },
      // Month 2: AI optimization engaging — early improvements
      { month: "Feb '25", spend: 5012, leads: 53, cpl: 94.57, qualified: 17, cpql: 294.82, deals: 10, revenue: 13118, roas: 2.62 },
      // Month 3: Campaign maturation — show rate improving
      { month: "Mar '25", spend: 5234, leads: 61, cpl: 85.80, qualified: 21, cpql: 249.24, deals: 13, revenue: 16243, roas: 3.10 },
      // Month 4: Spring wedding season — injectable demand surging
      { month: "Apr '25", spend: 5234, leads: 68, cpl: 76.97, qualified: 24, cpql: 218.08, deals: 15, revenue: 17648, roas: 3.37 },
      // Month 5: Peak spring — strong appointment volume
      { month: "May '25", spend: 5487, leads: 74, cpl: 74.15, qualified: 27, cpql: 203.22, deals: 17, revenue: 19473, roas: 3.55 },
      // Month 6: Summer — body contouring demand rising
      { month: "Jun '25", spend: 5487, leads: 79, cpl: 69.46, qualified: 29, cpql: 189.21, deals: 18, revenue: 20318, roas: 3.70 },
      // Month 7: Mid-summer — steady growth
      { month: "Jul '25", spend: 5743, leads: 96, cpl: 59.82, qualified: 33, cpql: 174.03, deals: 19, revenue: 21847, roas: 3.80 },
      // Month 8: Late summer — pre-fall prep appointments
      { month: "Aug '25", spend: 5891, leads: 104, cpl: 56.64, qualified: 36, cpql: 163.64, deals: 20, revenue: 23412, roas: 3.97 },
      // Month 9: Fall — holiday prep starting
      { month: "Sep '25", spend: 6078, leads: 113, cpl: 53.79, qualified: 39, cpql: 155.85, deals: 21, revenue: 24893, roas: 4.10 },
      // Month 10: Strong Q4 start — best efficiency
      { month: "Oct '25", spend: 6218, leads: 121, cpl: 51.39, qualified: 43, cpql: 144.60, deals: 27, revenue: 23978, roas: 3.86 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$191.4K", growth: "+2.3x" },
    { label: "Booked Appointments", value: "168", growth: "+187%" },
    { label: "Total Ad Spend", value: "$55.4K", growth: "+24% monthly scaling" },
    { label: "Blended ROAS", value: "3.45x", growth: "" },
  ],
};
