import { CaseStudyData } from "./types";

export const skincareEcommerce: CaseStudyData = {
  slug: "skincare-ecommerce",
  industry: "Skin Care",
  headline: "How a National Skincare Brand Scaled Ad Spend While Growing ROAS From 2.4x to 7.1x — Generating $1.25M in Revenue",
  subheadline: "MEGA deployed always-on AI optimization agents and AI-powered creative production to help a DTC skincare brand systematically increase ad spend month over month while simultaneously improving return on ad spend — reaching a 7.14x peak ROAS during Black Friday and generating over $1.25M in ecommerce revenue across 10 months.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "7.14", unit: "x", label: "Peak ROAS Achieved" },
    { value: "1.25", unit: "M", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "DTC", "Skincare"],
  company: {
    industry: "Skin Care",
    employees: "18",
    revenue: "$2.4M",
    location: "National (USA)",
    description: "A direct-to-consumer skincare brand selling a curated collection of serums, moisturizers, cleansers, and treatment products through its own Shopify storefront and select marketplace channels. The brand had built a loyal customer base through organic social and influencer partnerships, generating roughly $2.4M in annual revenue. Paid advertising was managed by an external agency spending approximately $20K per month across Meta and Google, achieving a ~2.4x ROAS that had remained flat for over six months. The agency's weekly optimization cadence couldn't keep pace with auction dynamics, creative was refreshed quarterly at significant additional cost, and the brand's ambition to scale spend aggressively was constrained by the inability to maintain — let alone improve — efficiency at higher budgets. The founder wanted to push monthly ad spend toward $30K–$35K but only if ROAS could improve simultaneously, not erode as it had every time they'd attempted to scale previously.",
  },
  challenges: [
    {
      title: "Flat ROAS at 2.4x With No Clear Path to Scale",
      description: "Every previous attempt to increase monthly ad spend beyond $22K had resulted in ROAS declining to sub-2x within weeks. The previous agency's broad campaign structure — one prospecting campaign, one retargeting campaign, no product segmentation — meant that additional budget was distributed evenly rather than weighted toward what was actually converting. Without granular campaign architecture or real-time optimization, scaling spend simply meant paying more for the same (or worse) results. The brand needed to prove that increased investment would deliver proportionally better returns before committing to higher budgets.",
    },
    {
      title: "Creative Stagnation Driving Up Acquisition Costs",
      description: "The agency rotated the same 4–5 product-on-white-background ads for months at a time, with creative refreshes happening quarterly at $2,500–$4,000 per cycle. In the skincare category — where consumers respond to transformation imagery, routine demonstrations, ingredient education, and authentic testimonials — generic product shots generated scroll-past behavior and steadily climbing CPAs. Creative fatigue was the single biggest drag on campaign performance, but the economics of agency creative production made frequent testing prohibitively expensive.",
    },
    {
      title: "Fragmented Attribution and Lost Conversion Data",
      description: "Meta pixel was implemented without server-side Conversions API tracking, meaning an estimated 15–25% of conversion events were lost to browser privacy restrictions and ad blockers. Google Ads lacked proper ecommerce event tracking, making it impossible to attribute revenue to specific campaigns with confidence. Without reliable data, optimization decisions were based on incomplete signals — the equivalent of driving with a foggy windshield. The brand couldn't accurately determine which campaigns, audiences, or creatives were actually driving profitable growth.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Tracking Overhaul & Campaign Architecture Rebuild",
      items: [
        "Complete attribution infrastructure rebuild — implemented Meta Conversions API with server-side event tracking, configured Google Ads enhanced conversions, and established consistent UTM taxonomy across all campaigns to create a single source of truth for revenue attribution",
        "Audited all existing campaigns and identified that roughly 28% of attributed conversions were branded search cannibalization — customers who would have purchased regardless. Restructured to exclude branded traffic from prospecting ROAS calculations",
        "Product-level analysis across 31 SKUs — mapped each product by margin, repeat purchase rate, and review sentiment to identify hero products (vitamin C serum, retinol night cream, hydrating cleanser) for aggressive scaling versus efficiency-focused products",
        "Rebuilt campaign architecture from scratch: separate prospecting and retargeting structures segmented by product category (serums, moisturizers, cleansers, treatments) with margin-adjusted ROAS targets for each — high-margin serums received aggressive scaling budgets while lower-margin basics received efficiency-focused bids",
        "Deployed always-on AI optimization agents directly within Meta and Google ad accounts — continuously monitoring performance signals and adjusting bids, reallocating budget between campaigns, and refining audience targeting in real time rather than the previous agency's weekly review cadence",
        "Launched initial creative testing suite with 20 AI-generated ad variations across formats — before-and-after skin transformation sequences, ingredient science carousels, morning/evening routine walkthroughs, and authentic UGC-style testimonials — replacing the stale 4-ad rotation immediately",
        "On-site conversion optimization — redesigned product pages with clinical ingredient breakdowns, real customer photo reviews, and optimized checkout flow with progressive free shipping thresholds to increase add-to-cart and purchase conversion rates",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "AI-Driven Optimization & Systematic Spend Scaling",
      items: [
        "Reviewed 30-day performance data with clean attribution — UGC-style transformation creative outperformed legacy product shots by 2.8x on click-through rate and 1.9x on purchase conversion, validating the creative strategy shift and informing the next production cycle",
        "Scaled AI-generated creative production to 25–30 new variations per month, testing hook styles (ingredient education vs. transformation journeys vs. routine demos), visual approaches (close-up texture shots vs. lifestyle imagery), and copy angles (clean beauty converts vs. skincare skeptics vs. routine builders) — all included in MEGA's flat management fee with zero additional creative charges",
        "AI optimization agents identified that 28–38 female audiences with wellness and clean beauty interests had 41% lower cost per acquisition than broader skincare targeting — shifted budget automatically within hours, a change that would have waited for the next weekly agency call under the previous arrangement",
        "Began systematic spend scaling: increased monthly budget by $1.5K–$2.5K per month, monitoring ROAS at each increment and only committing to the next increase once the previous level proved sustainable at target efficiency — AI agents managed the incremental scaling to prevent the ROAS collapse seen in previous attempts",
        "Built dynamic retargeting sequences — cart abandoners received product-specific reminders within 2 hours, browse abandoners entered a 5-day skincare education sequence, and past purchasers received cross-sell campaigns timed to product replenishment cycles (60–90 days for serums, 45 days for cleansers)",
        "Launched subscribe-and-save creative testing — AI-generated ads promoting 15% recurring discount drove 19% of new orders into subscription, increasing projected customer lifetime value and justifying higher initial acquisition costs at scale",
      ],
    },
    {
      phase: 3,
      months: "90–300 days",
      title: "Scale to Peak Efficiency & Seasonal Dominance",
      items: [
        "With 35+ creatives in active rotation at any given time, the campaign eliminated creative fatigue entirely — AI-generated variations replaced underperformers within days, keeping cost per acquisition stable even as monthly spend grew from $24K past $33K",
        "Built dedicated Black Friday and Cyber Monday campaign structure 4 weeks in advance — pre-warmed lookalike audiences from existing high-LTV purchasers, created urgency-driven gift set bundles and limited-edition holiday kits, and configured automated budget scaling rules that increased daily spend 2.5x during peak conversion windows",
        "AI agents detected the seasonal shift toward holiday gifting in November and automatically adjusted creative messaging from personal skincare routine angles to gift-giving hooks within hours — capturing intent that competitors running static seasonal campaigns missed entirely",
        "Real-time bid optimization during Black Friday weekend — AI agents adjusted bids continuously based on conversion velocity, achieving 7.14x ROAS even as auction competition drove CPMs up 35–45% across the skincare category",
        "Expanded Google Shopping presence with optimized product feeds, lifestyle imagery, competitive pricing annotations, and seasonal promotional callouts that captured high-intent searches the brand had previously been invisible for",
        "Advanced audience segmentation using AI-identified behavioral patterns — high-LTV repeat buyers, subscription-prone customers, gift purchasers, and ingredient-focused researchers each received tailored creative and messaging, improving relevance scores and reducing wasted spend",
        "Post-holiday retention strategy — January campaigns shifted to New Year skincare resolution messaging, replenishment reminders for holiday purchasers, and subscription conversion offers for one-time gift recipients, maintaining strong ROAS even as the seasonal peak subsided",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, and budget reallocations happening in real time rather than the typical agency cycle of weekly reviews, resulting in consistent ROAS improvement month over month throughout the entire engagement",
      ],
    },
  ],
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$275.9K" },
      { label: "Add to Carts", value: "28,147" },
      { label: "Avg Cost Per Cart", value: "$9.80", note: "↓38% reduction" },
      { label: "Orders", value: "16,892" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Apr 2025: Month 1 — baseline with inherited campaigns, new tracking deployed. ~2.4x ROAS.
      { month: "Apr '25", spend: 20340, leads: 13560, cpl: 1.50, qualified: 1491, cpql: 13.64, deals: 761, revenue: 48550.58, roas: 2.39 },
      // May 2025: Campaign architecture rebuilt. AI agents deployed. Early optimization gains.
      { month: "May '25", spend: 21780, leads: 15193, cpl: 1.43, qualified: 1747, cpql: 12.47, deals: 944, revenue: 62153.12, roas: 2.85 },
      // Jun 2025: Summer skincare demand rising. Creative testing scaled to 25+ variations. Spend increasing.
      { month: "Jun '25", spend: 23150, leads: 17036, cpl: 1.36, qualified: 2054, cpql: 11.27, deals: 1137, revenue: 77543.67, roas: 3.35 },
      // Jul 2025: Peak summer. Body care + SPF categories surging. AI shifted budget to top performers.
      { month: "Jul '25", spend: 24620, leads: 18647, cpl: 1.32, qualified: 2275, cpql: 10.82, deals: 1320, revenue: 93017.40, roas: 3.78 },
      // Aug 2025: Subscription campaigns matured. Retargeting sequences optimized. Steady spend growth.
      { month: "Aug '25", spend: 26070, leads: 20054, cpl: 1.30, qualified: 2487, cpql: 10.48, deals: 1484, revenue: 107048.40, roas: 4.11 },
      // Sep 2025: Fall transition. Google Shopping expansion. AI identified high-value audience micro-segments.
      { month: "Sep '25", spend: 27490, leads: 21539, cpl: 1.28, qualified: 2702, cpql: 10.17, deals: 1648, revenue: 121140.48, roas: 4.41 },
      // Oct 2025: Q4 prep. Pre-warming holiday audiences. Gift set creative testing launched.
      { month: "Oct '25", spend: 29180, leads: 23344, cpl: 1.25, qualified: 2918, cpql: 10.00, deals: 1810, revenue: 137160.60, roas: 4.70 },
      // Nov 2025: Black Friday / Cyber Monday. Budget scaled aggressively. AI managed real-time bids for peak ROAS.
      { month: "Nov '25", spend: 46820, leads: 42563, cpl: 1.10, qualified: 6384, cpql: 7.33, deals: 4155, revenue: 334300.50, roas: 7.14 },
      // Dec 2025: Holiday gifting tail + early winter skincare. Strong month but normalizing from BF peak.
      { month: "Dec '25", spend: 33540, leads: 25800, cpl: 1.30, qualified: 3354, cpql: 10.00, deals: 2034, revenue: 161091.00, roas: 4.80 },
      // Jan 2026: New Year skincare resolutions. Replenishment + subscription push. ROAS holding strong post-holiday.
      { month: "Jan '26", spend: 22910, leads: 17623, cpl: 1.30, qualified: 2735, cpql: 8.38, deals: 1599, revenue: 109428.36, roas: 4.78 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$1.25M", growth: "+197% ROAS improvement" },
    { label: "Total Orders", value: "16,892", growth: "across 10 months" },
    { label: "Average Order Value", value: "$74.08", growth: "national skincare DTC" },
    { label: "Blended ROAS", value: "4.54x", growth: "from 2.39x starting" },
  ],
};
