import { CaseStudyData } from "./types";

export const beautyProductsEcommerce: CaseStudyData = {
  slug: "beauty-products-ecommerce",
  industry: "Beauty Products",
  headline: "How a National Beauty Brand Scaled Ad Spend 54% While Growing ROAS From 3.2x to 5.5x — Generating $16.5M in Revenue",
  subheadline: "MEGA deployed AI-powered creative testing and always-on optimization to help a large DTC beauty brand break through creative fatigue, scale monthly ad spend from $518K to $796K, and nearly double ROAS — generating over $16.4M in ecommerce revenue across 5 months with a 4.72x blended ROAS.",
  heroStats: [
    { value: "5.48", unit: "x", label: "Peak ROAS Achieved" },
    { value: "16.5", unit: "M", label: "Revenue Generated" },
    { value: "252,579", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "DTC", "Beauty"],
  company: {
    industry: "Beauty Products",
    employees: "85",
    revenue: "$38M",
    location: "National (USA)",
    description: "A large direct-to-consumer beauty brand selling a comprehensive line of skincare, haircare, and cosmetics products through its own ecommerce platform. The brand had built a loyal customer base through influencer partnerships and organic social, generating over $35M in annual revenue with a strong repeat purchase rate. Paid advertising was managed by a mid-size agency spending $400K–$500K per month across Meta and Google, achieving a roughly 3x ROAS that the leadership team believed was leaving significant money on the table. The agency produced 8–12 new creatives per quarter at $1,500–$3,000 each, which meant the same ads ran for weeks past their performance peak. Creative fatigue was visibly eroding results — CPAs were climbing quarter over quarter while ROAS stagnated. The agency's biweekly optimization cadence couldn't keep pace with the volume of data a $500K/month account generates daily. The brand needed a partner that could match their scale ambitions with creative velocity and real-time optimization — not one that treated a half-million-dollar monthly budget with the same cadence as a $20K account.",
  },
  challenges: [
    {
      title: "Severe Creative Fatigue Eroding ROAS at Scale",
      description: "The brand was cycling through the same 8–12 ad creatives for 6–8 weeks at a time. At $500K+ monthly spend, Meta's algorithm exhausted these assets within days, not weeks — frequency climbed above 4x on core audiences while click-through rates declined 35% over Q2 2025. The previous agency's quarterly creative refresh cycle was fundamentally mismatched with the pace at which a high-spend account burns through creative. Every week of stale ads meant rising CPAs and declining ROAS, but the $1,500–$3,000 per creative production cost made frequent refreshes economically painful. The brand was stuck in a cycle where the solution to declining performance (more creative) was too expensive and too slow to implement at the frequency the account demanded.",
    },
    {
      title: "Biweekly Optimization Cadence Missing Daily Opportunities",
      description: "At $500K+ monthly spend, the account generated tens of thousands of conversion events and millions of impressions daily — each producing actionable performance signals. The previous agency reviewed performance biweekly and made batch adjustments, meaning 10–13 days of data went unactioned between each optimization cycle. Budget sat allocated to underperforming ad sets for days after they should have been paused. Winning creatives weren't scaled until the next review cycle. Audience segments that showed sudden promise weren't capitalized on until they'd already cooled. At this spend level, a single day of misallocated budget represented $15K–$20K in suboptimal spend — and the biweekly cadence meant this happened routinely.",
    },
    {
      title: "No Systematic Creative Testing Framework",
      description: "Creative decisions were driven by the agency's creative director's intuition rather than structured testing methodology. There was no systematic approach to isolating which creative elements drove performance — hooks, visual styles, product angles, copy frameworks, and CTAs were all changed simultaneously in each refresh, making it impossible to build institutional knowledge about what resonated with different audience segments. The brand had no creative performance database, no winning pattern library, and no data-driven brief process. Each creative cycle started from scratch rather than iterating on proven winners, meaning the brand never compounded creative learnings over time.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Creative Infrastructure & AI Deployment",
      items: [
        "Comprehensive audit of 90 days of campaign data across Meta and Google — identified that 73% of spend was concentrated on just 4 creatives with declining engagement metrics, while 3 newer assets showing strong early signals were starved of budget under the agency's manual allocation approach",
        "Deployed always-on AI optimization agents directly within Meta and Google ad accounts — monitoring performance signals continuously and adjusting bids, reallocating budget between ad sets, and refining audience targeting in real time rather than waiting for the biweekly agency review cycle",
        "Built MEGA's AI-powered creative testing framework from day one: systematic isolation of creative variables (hook type, visual style, product focus, copy angle, CTA format) enabling true multivariate learning rather than wholesale creative swaps",
        "Launched initial creative testing suite with 35+ AI-generated ad variations across formats — transformation before/afters, ingredient close-ups, tutorial-style clips, UGC-inspired testimonials, and product texture shots — replacing the stale 8-creative rotation and giving the algorithm diverse signals from the outset",
        "Rebuilt campaign architecture: separated prospecting from retargeting, segmented by product category (skincare, haircare, cosmetics, bundles) with margin-adjusted ROAS targets — high-margin serums and treatment products got aggressive scaling targets while commodity SKUs got efficiency-focused goals",
        "Implemented server-side conversion tracking via Meta Conversions API and enhanced Google conversion tracking to recover approximately 22% of conversion data lost to browser privacy restrictions — critical for accurate optimization at this spend level",
        "Created dynamic product feed optimization for Google Shopping and Meta Advantage+ catalog campaigns with AI-generated product descriptions, lifestyle imagery, and competitive pricing annotations",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Creative Velocity & Performance Compounding",
      items: [
        "Analyzed 30 days of structured creative test data — revealed that tutorial-style 'get ready with me' creative outperformed static product shots by 2.8x on purchase ROAS, and ingredient-education carousels drove 41% higher add-to-cart rates than lifestyle imagery among 25–44 female audiences",
        "Scaled AI-generated creative production to 80+ new variations per month, with automated creative fatigue detection pulling underperformers within 48 hours and replacing them with fresh iterations based on winning patterns — a pace that would require a 10-person creative team at traditional production costs",
        "AI optimization agents identified that evening hours (8–11 PM) drove 34% higher conversion rates for skincare products and automatically shifted budget weighting — a micro-optimization invisible in biweekly reporting but worth approximately $47K in incremental monthly revenue",
        "Built pre-Black Friday audience warming strategy: expanded prospecting audiences by 40% starting week 3 of November preparation, seeding new customer pools that would convert during the promotional window",
        "Launched cross-sell and bundle recommendation campaigns using purchase history data — customers who bought skincare were served haircare discovery ads, and multi-product buyers received exclusive bundle offers timed to replenishment cycles",
        "Developed systematic creative iteration workflow: winning hooks were paired with new visual treatments, top-performing visuals got fresh copy angles, and proven CTAs were tested across new product categories — compounding creative intelligence rather than starting fresh each cycle",
      ],
    },
    {
      phase: 3,
      months: "60–150 days",
      title: "Scale, Seasonal Peaks & ROAS Acceleration",
      items: [
        "With 100+ creatives in active rotation at any given time, creative fatigue was eliminated entirely — AI-generated variations replaced declining performers daily, keeping frequency below 2.5x on prospecting audiences even as monthly spend scaled past $750K",
        "Black Friday and Cyber Monday campaign execution: AI agents managed real-time bid adjustments across 47 active ad sets, automatically scaling budget to top performers during peak conversion windows and pulling spend from underperformers within hours — maintaining 4.88x ROAS during the most competitive auction period of the year",
        "Holiday season creative strategy: AI detected the shift from self-purchase to gift-giving intent in early November and automatically generated and tested gift-themed creative variations — gift sets, holiday packaging close-ups, and 'gifts for her' angles that captured seasonal demand competitors running static campaigns missed entirely",
        "Post-holiday optimization: rather than pulling back aggressively in January like the previous agency, AI agents identified that New Year self-care and resolution-driven demand created a secondary peak — maintained aggressive spend and captured high-intent traffic at lower auction costs while competitors retreated",
        "Advanced audience architecture using AI-identified behavioral patterns — segmented high-LTV repeat buyers, subscription-prone customers, seasonal gift purchasers, and category-specific enthusiasts (skincare-only vs. multi-category) with tailored creative and messaging for each",
        "Continuous creative intelligence compounding: by month 5, the AI had tested 400+ creative variations and built a deep pattern library — new creatives launched with built-in winning elements and achieved positive ROAS within 24 hours versus the 5–7 day learning period typical of untested creative, accelerating the flywheel with each iteration",
        "Scaled Google Shopping presence with AI-optimized product feeds and dynamic bid strategies — capturing high-intent search demand that complemented Meta's prospecting-heavy approach and improved blended ROAS across channels",
      ],
    },
  ],
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$3.49M" },
      { label: "Add to Carts", value: "416,784" },
      { label: "Avg Cost Per Cart", value: "$8.38", note: "↓22% reduction" },
      { label: "Orders", value: "252,579" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Oct 2025: Baseline month — inheriting existing campaigns at ~3.2x ROAS. Restructuring begins. AI agents deployed.
      { month: "Oct '25", spend: 518340, leads: 582714, cpl: 0.89, qualified: 48563, cpql: 10.67, deals: 26189, revenue: 1659982.60, roas: 3.20 },
      // Nov 2025: BLACK FRIDAY — massive spend scale-up. AI creative testing at full velocity. 100+ creatives in rotation.
      { month: "Nov '25", spend: 742180, leads: 776294, cpl: 0.96, qualified: 87495, cpql: 8.48, deals: 53847, revenue: 3618518.40, roas: 4.88 },
      // Dec 2025: Holiday gifting tail. Strong performance continues. Gift-themed creative driving conversions.
      { month: "Dec '25", spend: 694520, leads: 769782, cpl: 0.90, qualified: 79517, cpql: 8.73, deals: 46318, revenue: 3047724.40, roas: 4.39 },
      // Jan 2026: Post-holiday — AI identified New Year self-care demand. Maintained aggressive spend while competitors pulled back.
      { month: "Jan '26", spend: 738690, leads: 812042, cpl: 0.91, qualified: 97362, cpql: 7.59, deals: 58941, revenue: 3789906.30, roas: 5.13 },
      // Feb 2026: Creative flywheel fully mature. 400+ variations tested. ROAS peaks as compounding creative intelligence accelerates.
      { month: "Feb '26", spend: 796430, leads: 857526, cpl: 0.93, qualified: 103847, cpql: 7.67, deals: 67284, revenue: 4366731.60, roas: 5.48 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$16.48M", growth: "+71% ROAS improvement" },
    { label: "Total Orders", value: "252,579", growth: "across 5 months" },
    { label: "Average Order Value", value: "$65.16", growth: "beauty product category" },
    { label: "Blended ROAS", value: "4.72x", growth: "from 3.20x starting" },
  ],
};
