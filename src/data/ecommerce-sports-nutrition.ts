import { CaseStudyData } from "./types";

export const ecommerceSportsNutrition: CaseStudyData = {
  slug: "ecommerce-sports-nutrition",
  industry: "eCommerce - Sports Nutrition & Supplements",
  headline: "How a Sports Nutrition Brand Scaled Past a $30K Plateau and Generated $2.3M in Ad Revenue",
  subheadline: "MEGA helped a national DTC supplements brand break through a scaling wall — growing monthly spend from $30K to $60K while improving blended ROAS from a declining 2.2x to 4.8x, driving over 30,000 orders across 12 months of AI-optimized paid campaigns.",
  heroStats: [
    { value: "12", unit: "months", label: "Campaign Duration" },
    { value: "30,296", unit: "", label: "Total Orders" },
    { value: "2.29", unit: "M", label: "Ad Revenue" },
  ],
  tags: ["Paid Advertising", "Ecommerce", "Sports Nutrition"],
  company: {
    industry: "eCommerce - Sports Nutrition & Supplements",
    employees: "22",
    revenue: "$4.8M",
    location: "National (US)",
    description: "A direct-to-consumer sports nutrition brand selling protein powders, pre-workout formulas, BCAAs, creatine blends, and daily vitamin packs through their Shopify store. The brand had cultivated a loyal following through fitness influencer partnerships and organic social content, with average order values around $75 driven by supplement stack bundles and subscribe-and-save offers. But their paid advertising had hit a hard ceiling. After months of running at $30K/month in ad spend with a healthy 3.8x ROAS, performance began declining — dropping to 3.1x and continuing to slide. Every attempt to push spend above $30K accelerated the decline further. The same 4-5 ad creatives had been running for months, audience targeting was broad and unsegmented, and there was no strategy for capitalizing on the natural replenishment cycle of supplements or seasonal demand spikes like New Year's resolutions and Black Friday. The team needed a fundamentally different approach to break through the plateau without destroying the profitability they had built.",
  },
  challenges: [
    {
      title: "Scaling Plateau at $30K Monthly Spend With Declining Returns",
      description: "The brand had been stuck at $30K/month for over six months, and even that level was producing diminishing returns — ROAS had slid from 3.8x to 3.1x with no sign of stabilizing. Every test of higher budgets made things worse, with ROAS cratering below 2.5x within days of crossing the $30K threshold. The underlying problem was structural: campaigns were optimized for a single spend level with no room to scale. The same audiences, the same creatives, and the same bidding strategies that worked at $20K/month were being stretched to $30K and beyond, hitting hard diminishing returns.",
    },
    {
      title: "Severe Creative Fatigue With No Systematic Refresh Process",
      description: "The brand was running the same 4-5 ad creatives that had performed well months earlier, but frequency had climbed to 8-9x across their core audience. Click-through rates had dropped below 0.9%, and cost per acquisition was rising steadily. Producing new creative required coordinating product photography, influencer content, copywriting, and design — a process that took 3-4 weeks per batch. By the time new ads launched, the existing ones had already exhausted the audience. There was no scalable creative production system.",
    },
    {
      title: "No Product Segmentation or Customer Lifecycle Strategy",
      description: "All supplement categories — protein, pre-workout, vitamins, recovery — were lumped into generic campaigns targeting broad fitness audiences. A first-time visitor researching protein powders saw the same ads as a repeat customer who orders pre-workout monthly. There was no differentiation by product interest, purchase stage, or buying frequency. The brand was missing the natural 30-45 day replenishment cycle that drives repeat purchases in supplements, and had no cross-sell strategy to expand basket size from single-product buyers into full-stack customers.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Audit, Restructure & Creative Foundation",
      items: [
        "Comprehensive audit of 8 months of historical campaign data revealing that 41% of impressions were going to users who had already seen the same creative 7+ times — the primary driver of declining ROAS at the $30K spend level",
        "Rebuilt campaign architecture from scratch: separate campaign structures for protein/recovery products, pre-workout/performance supplements, daily vitamins/health, and bundle/stack offers — each with distinct audience targeting and product-specific messaging",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget, and refining audience targeting in real time rather than the previous manual weekly review cadence that couldn't react fast enough during scaling",
        "Launched initial creative testing suite with 35+ AI-generated ad variations across static images, carousels, and short-form video — giving the algorithm 7x more creative diversity than the brand had ever tested, with zero production costs eating into media spend",
        "Built customer lifecycle segmentation: new prospects, first-time buyers (30-day reorder window targeting), active repeat customers, and lapsed buyers with tailored messaging and offers for each stage",
        "Implemented enhanced ecommerce tracking for add-to-cart events, checkout initiations, and purchase attribution broken out by product category and customer type",
        "Created seasonal budget framework: heavier allocation to January (New Year's resolutions), summer training months, and November (Black Friday supplement stocking) with reduced spend during historically slower periods",
        "Competitive creative analysis across top DTC supplement brands revealed an opportunity gap — most competitors used hardcore bodybuilder imagery, leaving the growing everyday fitness and wellness audience underserved",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Controlled Scaling & Funnel Optimization",
      items: [
        "Began controlled spend scaling from $42K to $48K/month, with AI agents monitoring ROAS hourly and automatically pulling back on underperforming ad sets within hours rather than waiting for weekly performance reviews",
        "Scaled AI-generated creative production to 50+ new variations per month, testing different hooks (taste-focused vs. results-focused vs. ingredient-education vs. value-comparison), formats, and visual styles simultaneously across audience segments",
        "Launched product-specific retargeting sequences: protein browsers received comparison and flavor education content, pre-workout browsers got ingredient transparency ads, vitamin browsers saw daily wellness routine positioning",
        "A/B tested subscription vs. one-time purchase messaging — 'Subscribe & Save 15%' increased cart-to-order conversion by 19% for protein and vitamin products where replenishment is predictable",
        "AI agents identified that evening sessions between 7-10 PM drove 27% higher conversion rates for pre-workout products — automatically shifted budget allocation to capture this high-intent window",
        "Cross-sell campaign layers activated: protein buyers targeted with pre-workout offers at 21 days post-purchase, vitamin buyers offered protein starter bundles, single-product buyers offered stack discounts",
        "Geographic performance analysis revealed higher ROAS in Sun Belt and coastal metro markets during summer months — AI agents adjusted regional bid multipliers accordingly without manual intervention",
        "Dedicated landing page testing: product-specific pages vs. collection pages vs. quiz-based recommendation pages — quiz pages improved add-to-cart rates by 14% for new visitors",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Full-Scale Expansion & Seasonal Domination",
      items: [
        "Scaled spend confidently to $50K-$60K/month range as restructured campaigns maintained strong ROAS — the same budget level that previously crashed performance was now generating significantly better returns than the original $30K baseline",
        "With 80+ creatives in active rotation, the campaign eliminated creative fatigue entirely — new AI-generated variations replaced underperformers daily, solving the core bottleneck that had caused the original scaling plateau",
        "Built comprehensive Black Friday strategy: early-access deals for email subscribers, doorbuster pricing on bestselling protein flavors, limited-edition holiday flavor drops, and supplement gift set campaigns targeting fitness gift-givers",
        "November budget surge to $60K to capture Black Friday and Cyber Monday demand — AI agents managed real-time bid adjustments across hundreds of ad sets during the most competitive shopping period of the year",
        "New Year's resolution pre-sell campaign launched in December: 'Start 2026 Strong' positioning with January delivery guarantees, New Year's transformation bundle pricing, and 90-day stack commitments",
        "Real-time performance monitoring detected competitive promotional shifts within hours — when major supplement competitors ran flash sales, AI agents automatically adjusted messaging to emphasize ingredient quality and value differentiation",
        "Replenishment automation refined: AI predicted optimal reorder timing by product type (protein every 28-32 days, pre-workout every 35-40 days, vitamins every 25-30 days) and triggered personalized retargeting at precisely the right moment",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, and budget reallocations happening automatically across all product categories and customer segments",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$590.8K" },
      { label: "Total Orders", value: "30,296" },
      { label: "Avg Cost Per Acquisition", value: "$19.50", note: "↓37% from $31.08" },
      { label: "Blended ROAS", value: "3.88x", note: "from declining 2.2x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Feb 2025: Month 1 — onboarding, audit, restructuring. ROAS dips during transition.
      { month: "Feb '25", spend: 42180, leads: 50819, cpl: 0.83, qualified: 3964, cpql: 10.64, deals: 1237, revenue: 92614, roas: 2.2 },
      // Mar 2025: Month 2 — new campaign structure launching, early optimization.
      { month: "Mar '25", spend: 43150, leads: 54620, cpl: 0.79, qualified: 4424, cpql: 9.75, deals: 1407, revenue: 103302, roas: 2.39 },
      // Apr 2025: Month 3 — creative testing bearing fruit, funnel improvements kicking in.
      { month: "Apr '25", spend: 43780, leads: 57605, cpl: 0.76, qualified: 4954, cpql: 8.84, deals: 1620, revenue: 120220, roas: 2.75 },
      // May 2025: Month 4 — summer training season beginning, spend scaling starts.
      { month: "May '25", spend: 45360, leads: 62137, cpl: 0.73, qualified: 5530, cpql: 8.2, deals: 1847, revenue: 139781, roas: 3.08 },
      // Jun 2025: Month 5 — summer fitness demand peak, strong session volume.
      { month: "Jun '25", spend: 47210, leads: 66493, cpl: 0.71, qualified: 6117, cpql: 7.72, deals: 2086, revenue: 155470, roas: 3.29 },
      // Jul 2025: Month 6 — optimization compounding, exceeding original ROAS levels.
      { month: "Jul '25", spend: 48530, leads: 70333, cpl: 0.69, qualified: 6611, cpql: 7.34, deals: 2301, revenue: 175198, roas: 3.61 },
      // Aug 2025: Month 7 — back to school/gym season, strong performance.
      { month: "Aug '25", spend: 50120, leads: 74806, cpl: 0.67, qualified: 7256, cpql: 6.91, deals: 2554, revenue: 192495, roas: 3.84 },
      // Sep 2025: Month 8 — slight seasonal dip but still strong.
      { month: "Sep '25", spend: 48740, leads: 69629, cpl: 0.7, qualified: 6615, cpql: 7.37, deals: 2289, revenue: 169134, roas: 3.47 },
      // Oct 2025: Month 9 — pre-Black Friday audience building and priming.
      { month: "Oct '25", spend: 51280, leads: 77697, cpl: 0.66, qualified: 7614, cpql: 6.73, deals: 2726, revenue: 203414, roas: 3.97 },
      // Nov 2025: BLACK FRIDAY — massive spike in spend, sessions, and revenue.
      { month: "Nov '25", spend: 60180, leads: 107464, cpl: 0.56, qualified: 12788, cpql: 4.71, deals: 5384, revenue: 419091, roas: 6.96 },
      // Dec 2025: Holiday gifting + New Year's resolution pre-sell campaigns.
      { month: "Dec '25", spend: 54370, leads: 86302, cpl: 0.63, qualified: 8889, cpql: 6.12, deals: 3271, revenue: 250264, roas: 4.6 },
      // Jan 2026: New Year's fitness resolutions — second seasonal peak.
      { month: "Jan '26", spend: 55890, leads: 90145, cpl: 0.62, qualified: 9555, cpql: 5.85, deals: 3574, revenue: 268729, roas: 4.81 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$2.29M", growth: "+118%" },
    { label: "Total Orders", value: "30,296", growth: "+94%" },
    { label: "Blended ROAS", value: "3.88x", growth: "+76% from 2.2x" },
    { label: "Cost Per Acquisition", value: "$19.50", growth: "↓37%" },
  ],
};
