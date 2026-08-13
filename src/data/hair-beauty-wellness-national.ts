import { CaseStudyData } from "./types";

export const hairBeautyWellnessNational: CaseStudyData = {
  slug: "hair-beauty-wellness-national",
  industry: "Hair, Beauty & Wellness",
  headline: "How a National DTC Beauty & Wellness Brand Scaled to a 4.36x Blended ROAS While Cutting Acquisition Costs by 66% — Generating $173.3K in Revenue in 7 Months",
  subheadline: "MEGA deployed always-on AI optimization agents and AI-generated creative testing to help a direct-to-consumer beauty and wellness brand climb from a 2.18x starting ROAS to a 6.54x peak — generating over $173K in ecommerce revenue across 7 months while steadily reducing cost per acquisition from $29.31 to $9.93.",
  heroStats: [
    { value: "6.54", unit: "x", label: "Peak ROAS Achieved" },
    { value: "$173.3", unit: "K", label: "Revenue Generated" },
    { value: "2,663", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "DTC", "Beauty & Wellness"],
  company: {
    industry: "Hair, Beauty & Wellness",
    employees: "8",
    revenue: "$410K",
    location: "National (USA)",
    description: "A direct-to-consumer beauty and wellness brand offering a curated line of clean-ingredient hair treatments, botanical skincare serums, and aromatherapy wellness products formulated for health-conscious consumers. The brand had built a loyal following through organic social media and influencer partnerships, generating approximately $400K in annual revenue with strong repeat purchase rates exceeding 35%. Paid advertising had been managed by a small traditional agency spending $3K–$4K per month, but results had plateaued at a 1.8x–2.2x ROAS with rising acquisition costs. The agency refreshed creatives quarterly — producing 3–4 new static images every three months — while the brand's competitors were flooding feeds with fresh content weekly. The founder recognized that the product line had strong market fit based on customer retention data and Net Promoter Scores above 70, but the current advertising approach wasn't translating that product strength into scalable customer acquisition. With a catalog spanning 28 SKUs across hair care, skincare, and wellness categories, there was significant cross-sell and bundle opportunity being left entirely untapped by the existing single-product-focused campaign structure.",
  },
  challenges: [
    {
      title: "Stagnant ROAS Despite Strong Product-Market Fit",
      description: "The brand's previous agency managed campaigns on a weekly review cycle — checking performance every Monday morning, making adjustments by Wednesday, and letting campaigns run unchanged through weekends when conversion patterns shifted dramatically. This meant the campaign was optimized for average performance rather than capturing peak buying windows. ROAS had flatlined between 1.8x and 2.2x for six consecutive months despite the brand's customer satisfaction scores and repeat purchase rates suggesting the product resonated strongly with buyers. The disconnect between product quality and advertising efficiency pointed to a systematic optimization gap rather than a product problem — the right customers simply weren't being reached at the right moments with the right creative.",
    },
    {
      title: "Creative Fatigue Accelerating Acquisition Cost Increases",
      description: "With only 3–4 creative assets refreshed every quarter, the campaign was running the same product-on-white-background imagery for months at a time. In a beauty and wellness category where consumers respond to transformation visuals, ingredient close-ups, routine demonstrations, and lifestyle aspirational content, static product shots generated diminishing engagement with each passing week. Cost per acquisition had increased 28% over the prior two quarters as click-through rates declined and the algorithm exhausted the limited creative pool across the brand's target audiences. The previous agency quoted $1,200–$1,800 per creative refresh, making frequent testing economically unfeasible at a $4K monthly budget — creating a vicious cycle where creative stagnation drove up costs, but higher costs left less budget available for new creative.",
    },
    {
      title: "Untapped Cross-Sell and Bundle Revenue",
      description: "Despite a 28-SKU catalog spanning three product categories, the campaign structure consisted of two campaigns — one for hair care and one for skincare — each promoting a single hero product. Wellness products received zero advertising support. There was no bundle strategy, no cross-category retargeting, and no systematic approach to moving single-product buyers into multi-category customers. Internal data showed that customers who purchased from two or more categories had a 2.4x higher lifetime value and 52% lower churn rate than single-category buyers, yet the advertising structure was actively preventing cross-category discovery by siloing audiences and creative into narrow product lanes.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation — Tracking, Architecture & Creative Launch",
      items: [
        "Comprehensive audit of six months of campaign data from the previous agency — identified that the weekly-review cadence was causing systematic budget misallocation, with 34% of spend concentrated on low-converting weekday afternoon hours while high-converting weekend evening windows were consistently under-funded",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals continuously and adjusting bids, reallocating budget across ad sets, and refining audience targeting in real time rather than the previous agency's Monday-morning review cycle",
        "Implemented server-side conversion tracking to recover approximately 22% of purchase events lost to browser privacy restrictions and ad blockers — critical for accurate optimization at modest spend levels where every tracked conversion materially impacts algorithmic decision-making",
        "Rebuilt campaign architecture from scratch: separated prospecting from retargeting, created dedicated campaigns for each product category (hair treatments, skincare serums, wellness aromatherapy, curated bundles) with margin-adjusted return targets — higher-margin serums received aggressive scaling goals while commodity replenishment items focused on efficiency",
        "Launched initial creative testing suite with 12 AI-generated ad variations — ingredient close-ups highlighting botanical actives, self-care routine demonstrations, before-and-after skin texture sequences, and bundle value comparisons — replacing the stale quarterly creative rotation and giving the algorithm diverse signals from day one at zero additional production cost",
        "Built cross-category retargeting sequences: hair care buyers entered a skincare discovery flow within 7 days, skincare purchasers received wellness product education content, and all past buyers received curated bundle offers timed to typical replenishment cycles",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Optimization — Data-Driven Scaling & Creative Velocity",
      items: [
        "Analyzed 30 days of structured creative test data — revealed that self-care routine video clips outperformed static product shots by 2.3x on purchase return, and ingredient-education carousels drove 41% higher add-to-cart rates than lifestyle imagery among the 25–44 female wellness-conscious audience segment",
        "Scaled AI-generated creative production to 14–16 new variations per month, testing hooks (ingredient science vs. morning routine vs. transformation results), visual styles (bathroom shelf aesthetics vs. close-up texture shots vs. minimalist packaging), and copy angles (clean-beauty skeptics vs. routine simplifiers vs. self-care ritualists) — all at zero production cost, keeping the full monthly budget in media spend",
        "AI optimization agents identified that Sunday evenings and Thursday mornings drove 47% higher conversion rates for wellness and self-care products — automatically shifted budget weighting to capture these high-intent windows, a micro-optimization invisible in weekly reporting but worth approximately $1,100 in incremental monthly revenue at this spend level",
        "Launched dedicated bundle campaigns featuring AI-generated creative showcasing the 'complete routine' value proposition — hair-to-skin bundles, morning-and-evening sets, and seasonal wellness collections that increased average order value by highlighting per-unit savings and routine synergy",
        "Cross-category retargeting matured: 18% of hair care customers purchased a skincare product within 21 days of their initial order, driven by automated product education sequences that built category credibility before presenting offers",
        "Implemented dynamic product-level bidding where AI agents allocated more aggressively toward high-margin SKUs during peak conversion windows and pulled back on lower-margin replenishment items during competitive auction periods",
      ],
    },
    {
      phase: 3,
      months: "90–210 days",
      title: "Scale — Seasonal Capture & Compounding Efficiency",
      items: [
        "With 14+ creatives in active rotation, eliminated creative fatigue entirely at this budget level — AI-generated variations replaced declining performers within days rather than the quarterly refresh cycle the brand experienced before, keeping cost per acquisition on a consistent downward trajectory even as seasonal competition intensified",
        "Spring wellness surge strategy: AI agents detected rising search and engagement signals around New Year self-care resolutions and spring renewal themes in January and February — automatically generated and tested seasonal creative angles (winter skin recovery routines, new year wellness ritual bundles, spring hair repair treatments) that captured intent competitors running static campaigns missed",
        "Valentine's Day and Mother's Day gift campaigns launched with AI-generated gift-themed creative 2–3 weeks before each holiday — self-care gift sets, 'treat yourself' angles, and curated bundle landing pages that captured seasonal gifting demand and attracted new customer segments through gift purchases",
        "AI agents managed real-time bid adjustments during competitive holiday auction periods, automatically scaling budget to top-performing ad sets during peak conversion windows while pulling back on underperforming audiences — achieving peak efficiency during periods when most advertisers see costs spike",
        "Bundle penetration reached 31% of total orders by month six, up from zero at campaign launch — directly increasing average order value and customer lifetime value while reducing per-unit acquisition costs across the catalog",
        "Cross-channel learning loop matured: top-performing paid ad hooks informed organic social content strategy, while customer review language from organic channels was fed back into AI creative generation — creating a reinforcing cycle that improved both paid efficiency and organic engagement simultaneously",
        "Continuous AI optimization compounded small daily improvements into dramatic monthly gains — bid adjustments, audience refinements, and budget reallocations happening in real time produced a 3x improvement in return on ad spend over the seven-month engagement, demonstrating the power of always-on optimization versus periodic agency reviews",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$39.7K" },
      { label: "Add to Carts", value: "5,483" },
      { label: "Avg Cost Per Cart", value: "$7.25", note: "↓51% reduction" },
      { label: "Orders", value: "2,663" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Dec 2025: Baseline month — inheriting stale campaigns from previous agency. Full restructuring begins. AI agents deployed.
      { month: "Dec '25", spend: 5187, leads: 5825, cpl: 0.89, qualified: 466, cpql: 11.13, deals: 177, revenue: 11328, roas: 2.18 },
      // Jan 2026: New architecture live. Creative testing with 12+ variations. New Year self-care surge captured.
      { month: "Jan '26", spend: 5123, leads: 6482, cpl: 0.79, qualified: 551, cpql: 9.30, deals: 226, revenue: 14690, roas: 2.87 },
      // Feb 2026: Valentine's Day gift campaigns. AI-optimized creative featuring self-care routines. Bundle strategy launched.
      { month: "Feb '26", spend: 5341, leads: 7163, cpl: 0.75, qualified: 659, cpql: 8.10, deals: 290, revenue: 18270, roas: 3.42 },
      // Mar 2026: Spring renewal demand. Cross-category retargeting matured. Creative velocity at 14-16 variations/month.
      { month: "Mar '26", spend: 5578, leads: 7582, cpl: 0.74, qualified: 743, cpql: 7.51, deals: 349, revenue: 23034, roas: 4.13 },
      // Apr 2026: Consistent scaling. AI agents optimizing bid timing for peak conversion windows. Bundle penetration growing.
      { month: "Apr '26", spend: 5812, leads: 8621, cpl: 0.67, qualified: 888, cpql: 6.54, deals: 444, revenue: 28416, roas: 4.89 },
      // May 2026: Mother's Day gifting push. Expanded prospecting audiences. Cross-sell sequences driving multi-category purchases.
      { month: "May '26", spend: 6247, leads: 9241, cpl: 0.68, qualified: 998, cpql: 6.26, deals: 529, revenue: 35443, roas: 5.67 },
      // Jun 2026: Peak performance month. Summer self-care demand. Compounding AI optimization reaches 6.54x ROAS.
      { month: "Jun '26", spend: 6438, leads: 10333, cpl: 0.62, qualified: 1178, cpql: 5.47, deals: 648, revenue: 42120, roas: 6.54 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$173.3K", growth: "+200% ROAS improvement" },
    { label: "Total Orders", value: "2,663", growth: "across 7 months" },
    { label: "Average Order Value", value: "$65.09", growth: "beauty & wellness category" },
    { label: "Blended ROAS", value: "4.36x", growth: "from 2.18x starting" },
  ],
};
