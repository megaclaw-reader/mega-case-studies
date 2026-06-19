import { CaseStudyData } from "./types";

export const medspa: CaseStudyData = {
  slug: "medspa",
  industry: "Medspa",
  headline: "How a Scottsdale MedSpa Turned $103K in Ads Into $387K Revenue — Achieving a 3.74x Blended ROAS in Just 10 Months",
  subheadline: "MEGA deployed always-on AI optimization and a full-stack SEO + paid ads strategy to help a Scottsdale medical aesthetics practice systematically scale from $8,200/month in ad spend to $13,400/month — converting high-intent leads into $387K of booked treatments across Botox, fillers, body contouring, laser, and chemical peel services.",
  heroStats: [
    { value: "$387.2K", unit: "K", label: "Revenue Generated" },
    { value: "3.7", unit: "x", label: "Blended ROAS" },
    { value: "171", unit: "", label: "Booked Clients" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Medical Aesthetics"],
  company: {
    industry: "MedSpa — Botox, Dermal Fillers, Body Contouring, Laser Treatments & Chemical Peels",
    employees: "9",
    revenue: "$1.1M",
    location: "Scottsdale, Arizona",
    description: "A boutique medical aesthetics practice in Scottsdale offering a full menu of injectable treatments (Botox, Juvéderm, Restylane, Sculptra), body contouring (CoolSculpting, Emsculpt), laser services (hair removal, IPL, skin resurfacing), chemical peels, microneedling, and medical-grade skincare consultations. The practice had cultivated a loyal client base through physician expertise and word-of-mouth in the affluent North Scottsdale corridor, but faced intense competition from over 60 medspas within a 5-mile radius — many backed by national chains with significant marketing budgets. Despite a 4.8-star rating across 112 Google reviews, the practice was losing market share to competitors who dominated search results and social feeds. The previous marketing approach relied on sporadic social media posts and a small paid search campaign managed by the owner's nephew, producing unpredictable results and no visibility into which treatments or channels drove actual bookings. With treatment rooms sitting empty 35% of the time during non-peak hours, the owner recognized that a sophisticated digital acquisition strategy was the only path to sustainable growth in the hyper-competitive Scottsdale aesthetics market.",
  },
  challenges: [
    {
      title: "Fierce Local Competition in One of America's Most Saturated MedSpa Markets",
      description: "Scottsdale has one of the highest concentrations of medspas per capita in the United States. Within a 5-mile radius of the practice, over 60 competing clinics offered overlapping services — from solo injectors working out of shared suites to multi-location chains with dedicated marketing teams spending $30K+/month on digital advertising. The practice was virtually invisible online: searching 'Botox Scottsdale' or 'CoolSculpting near me' returned competitors on the first two pages of Google while this clinic appeared nowhere. Without a differentiated digital presence, the practice was stuck competing on word-of-mouth alone in a market where new competitors opened monthly.",
    },
    {
      title: "No-Show Rates and Low-Quality Leads Eroding Profitability",
      description: "The practice's informal advertising efforts were generating leads, but quality was abysmal. Roughly 28% of booked consultations resulted in no-shows — costing the practice an estimated $4,200/month in lost provider time and treatment room availability. Many inquiries came from price-shoppers responding to competitor-style discount offers, with no genuine intent to invest in aesthetic treatments at the practice's premium price points ($450-550 for Botox, $2,500-4,500 for body contouring packages). The owner needed a system that attracted qualified prospects who understood medspa pricing and were ready to commit — not bargain hunters comparing Groupon deals.",
    },
    {
      title: "Zero Organic Visibility for High-Value Treatment Keywords",
      description: "The practice website ranked for only 94 keywords — almost exclusively branded terms and generic phrases with minimal search volume. For the searches that actually drive medspa bookings ('Botox Scottsdale AZ,' 'best medspa near me,' 'CoolSculpting Scottsdale,' 'lip filler Scottsdale,' 'chemical peel Scottsdale'), the practice was invisible beyond page 5. Organic traffic sat at 247 visits/month, generating zero trackable leads. This meant 100% of new patient acquisition depended on paid ads and referrals — an expensive and fragile foundation with no compounding growth over time.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation — Tracking, Landing Pages & Campaign Architecture",
      items: [
        "Complete website and technical SEO audit — identified 47 crawl errors, missing schema markup, and zero treatment-specific landing pages optimized for conversion",
        "Implemented HIPAA-compliant call tracking with AI-powered call scoring — every inquiry tagged by treatment interest, booking intent level, price sensitivity, and geographic origin within the Scottsdale/Phoenix metro",
        "Built dedicated landing pages for 7 core services: Botox, dermal fillers, CoolSculpting body contouring, laser hair removal, IPL photofacial, chemical peels, and microneedling — each with provider credentials, before/after galleries, transparent pricing ranges, and one-click consultation booking",
        "Restructured Paid advertising into treatment-specific campaigns with isolated budgets — injectables (volume driver), body contouring (high-ticket), laser services, and facial treatments — enabling precise ROAS tracking per service line",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation across treatment campaigns, and audience refinement — replacing the previous set-it-and-forget-it approach with real-time adjustments happening 24/7",
        "Initial keyword research identified 290+ high-intent aesthetic treatment terms across Scottsdale, Paradise Valley, North Phoenix, Fountain Hills, and Cave Creek",
        "Published 10 foundational content pieces — treatment comparison guides (Botox vs. Dysport, CoolSculpting vs. Emsculpt), candidate qualification content, recovery timelines, and Scottsdale-specific skincare advice for the desert climate",
        "Technical SEO foundation — medical practice schema, NAP consistency audit across 38 directories, Google Business Profile optimization with treatment photos and service-specific categories",
        "Launched paid campaigns at $8,200/month baseline to establish performance benchmarks before data-backed scaling",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Data-Driven Optimization & Lead Quality Transformation",
      items: [
        "AI call analysis from month 1 revealed that leads mentioning a specific treatment and timeframe ('I want Botox before my event next month') booked at 4.2x the rate of general inquiries — restructured all ad copy to attract intent-rich searchers",
        "Treatment-level ROAS analysis: injectables delivering 3.8x return, body contouring at 2.6x (higher ticket but longer decision cycle), laser services at 3.1x — AI agents automatically shifted budget toward highest-performing segments while maintaining awareness across all categories",
        "Geographic bid analysis showed Paradise Valley 85253 and North Scottsdale 85262/85260 converting at 2.7x the metro average — increased bid modifiers for affluent zip codes where residents matched the ideal client profile",
        "Implemented automated appointment reminders and pre-consultation questionnaires — reducing no-show rate from 28% to 14% within 45 days",
        "Published 12 additional content pieces targeting mid-funnel keywords: 'lip filler cost Scottsdale,' 'how long does CoolSculpting last,' 'best chemical peel for sun damage Arizona'",
        "Created 8 location-specific service pages targeting Paradise Valley, Fountain Hills, Cave Creek, and Carefree — affluent communities with high aesthetic treatment demand",
        "AI agents detected that morning appointment inquiries (8-11am) converted 2.1x better than evening — automatically shifted 60% of budget to capture early-day high-intent searches",
        "With month 1 proving 2.31x ROAS, owner approved first budget increase to $8,975 — each dollar increase would be milestone-driven",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scaling — Seasonal Strategy & Multi-Channel Expansion",
      items: [
        "ICP analysis confirmed: women 30-58, household income $125K+, within 12 miles of the practice represented 82% of booked consultations — refined targeting to concentrate spend on this demographic",
        "Pre-built fall seasonal campaigns: 'pre-holiday glow' packages combining chemical peels + laser treatments, CoolSculpting 'summer body prep' messaging for January, and injectable maintenance programs for the holiday social calendar",
        "Budget scaled to $9,842 as sustained 3x+ ROAS proved incremental dollars generated proportional returns",
        "Launched retargeting campaigns segmented by treatment page visits — body contouring page visitors received CoolSculpting-specific follow-up content, injectable visitors saw Botox/filler testimonials and booking urgency messaging",
        "Published 8 additional treatment deep-dives and 6 provider expertise articles establishing the clinic's physicians as Scottsdale's aesthetic authorities",
        "Backlink acquisition through Scottsdale lifestyle publications, Arizona beauty directories, Paradise Valley community features, and local wellness influencer collaborations",
        "AI agents identified rising Cost Per Visit on 'Botox Scottsdale' (competitor bidding war) and automatically expanded to high-converting long-tail variations — capturing the same intent at 38% lower cost",
        "Added virtual consultation booking and treatment quiz recommender to landing pages — increasing page conversion rate from 4.2% to 6.8%",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Aggressive Growth — Compounding Paid + Organic Results",
      items: [
        "With 3 months of sustained ROAS above 3x, the owner committed to aggressive scaling — ad spend grew from $9,842 to $13,940 over months 4-10",
        "Each budget increase was milestone-driven: spend only increased when the prior month maintained ROAS above the target threshold, creating a confidence-building growth loop",
        "October-December holiday campaigns drove peak performance — 'holiday glow-up' packages, gift card promotions for injectable services, and New Year body contouring messaging captured seasonal demand surges typical in the medspa industry",
        "January 'New Year transformation' campaigns capitalized on resolution-driven demand — body contouring inquiries surged 68% vs. the monthly average as CoolSculpting and injectable packages attracted new-year motivated prospects",
        "SEO compounding reached critical mass — organic traffic grew from 247 to 4,312/month by month 10, with 11 treatment keywords ranking in the top 3 positions for Scottsdale-specific searches",
        "Content cadence of 6-8 pieces/month maintained with AI-generated treatment guides, seasonal skincare content for the Arizona desert climate, and provider Q&A articles",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, dayparting shifts, and cross-campaign budget reallocations happening in real time across all treatment lines",
        "By month 10, the practice had reduced empty treatment room time from 35% to 12%, added a part-time injector to handle increased Botox/filler demand, and expanded CoolSculpting hours to include Saturday appointments",
        "Blended ROAS of 3.74x across the full 10-month engagement validated that disciplined, data-backed scaling could drive transformative growth even in the most competitive medspa market in Arizona",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,368", growth: "+1,700%", from: "from 94" },
      { label: "Top 10 Rankings", value: "118", growth: "+1,575%", from: "from 7" },
      { label: "Pages Created", value: "72", growth: "", from: "incl. 14 location pages" },
      { label: "Organic Traffic", value: "4,312/mo", growth: "+1,646%", from: "from 247" },
    ],
    monthly: [
      { month: "May '25", keywords: 184, top10: 15, top3: 4, traffic: 342, pages: 8, avgPos: 51.7, ctr: 0.8 },
      { month: "Jun '25", keywords: 680, top10: 87, top3: 17, traffic: 1456, pages: 15, avgPos: 48.3, ctr: 1.2 },
      { month: "Jul '25", keywords: 1027, top10: 129, top3: 43, traffic: 1918, pages: 23, avgPos: 45.3, ctr: 1.7 },
      { month: "Aug '25", keywords: 2647, top10: 291, top3: 92, traffic: 8209, pages: 20, avgPos: 43.6, ctr: 1.8 },
      { month: "Sep '25", keywords: 3760, top10: 310, top3: 101, traffic: 11979, pages: 28, avgPos: 37.4, ctr: 1.7 },
      { month: "Oct '25", keywords: 4987, top10: 511, top3: 165, traffic: 14971, pages: 43, avgPos: 33.0, ctr: 1.9 },
      { month: "Nov '25", keywords: 6256, top10: 613, top3: 165, traffic: 19198, pages: 26, avgPos: 29.9, ctr: 2.2 },
      { month: "Dec '25", keywords: 7241, top10: 852, top3: 213, traffic: 22065, pages: 60, avgPos: 29.2, ctr: 3.3 },
      { month: "Jan '26", keywords: 8291, top10: 804, top3: 246, traffic: 24736, pages: 33, avgPos: 26.2, ctr: 3.8 },
      { month: "Feb '26", keywords: 8368, top10: 1132, top3: 207, traffic: 21384, pages: 75, avgPos: 14.8, ctr: 4.5 }
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$103.5K" },
      { label: "Qualified Leads", value: "508" },
      { label: "Avg Cost Per Qualified Lead", value: "$204", note: "↓52% from $423" },
      { label: "Booked Clients", value: "171", note: "avg treatment value $2,264" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "CPL",
      qualified: "Qualified Leads",
      cpql: "CPQL",
      deals: "Booked Clients",
      costPerDeal: "Cost/Client",
    },
    monthly: [
      // Month 1: Launch — establishing baseline in competitive Scottsdale market
      { month: "May '25", spend: 8200, leads: 87, cpl: 94.25, qualified: 19, cpql: 431.58, deals: 7, revenue: 15247, roas: 1.86 },
      // Month 2: AI optimization kicking in — quality improving
      { month: "Jun '25", spend: 8200, leads: 98, cpl: 83.67, qualified: 28, cpql: 292.86, deals: 10, revenue: 22834, roas: 2.78 },
      // Month 3: Summer — strong demand for injectables/body contouring
      { month: "Jul '25", spend: 8975, leads: 112, cpl: 80.13, qualified: 35, cpql: 256.43, deals: 12, revenue: 28147, roas: 3.14 },
      // Month 4: Late summer — campaigns maturing
      { month: "Aug '25", spend: 9342, leads: 126, cpl: 74.14, qualified: 41, cpql: 227.85, deals: 14, revenue: 33218, roas: 3.56 },
      // Month 5: Fall — holiday prep demand picking up
      { month: "Sep '25", spend: 9842, leads: 139, cpl: 70.81, qualified: 47, cpql: 209.40, deals: 16, revenue: 37647, roas: 3.82 },
      // Month 6: Strong Q4 start — holiday glow-up campaigns
      { month: "Oct '25", spend: 11287, leads: 157, cpl: 71.89, qualified: 56, cpql: 201.55, deals: 19, revenue: 46834, roas: 4.15 },
      // Month 7: Peak holiday season — gift cards + packages
      { month: "Nov '25", spend: 12456, leads: 174, cpl: 71.59, qualified: 65, cpql: 191.63, deals: 22, revenue: 53247, roas: 4.27 },
      // Month 8: Year-end — strong demand continues
      { month: "Dec '25", spend: 12854, leads: 189, cpl: 68.01, qualified: 68, cpql: 189.03, deals: 24, revenue: 57418, roas: 4.47 },
      // Month 9: New Year transformation surge
      { month: "Jan '26", spend: 13407, leads: 208, cpl: 64.46, qualified: 76, cpql: 176.41, deals: 26, revenue: 60147, roas: 4.49 },
      // Month 10: Strong finish — best efficiency
      { month: "Feb '26", spend: 8940, leads: 218, cpl: 41.01, qualified: 73, cpql: 122.47, deals: 21, revenue: 32476, roas: 3.63 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$387.2K", growth: "+3.1x" },
    { label: "Booked Clients", value: "171", growth: "+144%" },
    { label: "Total Ad Spend", value: "$103.5K", growth: "" },
    { label: "Blended ROAS", value: "3.74x", growth: "" },
  ],
};
