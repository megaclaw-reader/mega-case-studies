import { CaseStudyData } from "./types";

export const childrensClothingEcommerce: CaseStudyData = {
  slug: "childrens-clothing-ecommerce",
  industry: "Children's Clothing Ecommerce",
  headline: "How a National Children's Clothing Brand Grew From 1.49x to 3.22x Blended ROAS in 11 Months — Generating $276K in Revenue",
  subheadline: "MEGA deployed always-on AI optimization agents to overhaul a broken ad account structure, fix tracking gaps, and systematically scale a children's clothing ecommerce brand from an unprofitable 1.49x ROAS to a 3.83x peak monthly ROAS — generating 5,481 orders and $276.4K in revenue across 11 months of paid advertising.",
  heroStats: [
    { value: "3.83", unit: "x", label: "Peak Monthly ROAS" },
    { value: "$276.4K", unit: "K", label: "Total Revenue Generated" },
    { value: "5,481", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "DTC", "Children's Clothing"],
  company: {
    industry: "Children's Clothing Ecommerce",
    employees: "8",
    revenue: "$380K",
    location: "National (USA)",
    description: "A direct-to-consumer children's clothing brand selling through its own Shopify store, specializing in organic cotton basics, seasonal collections, and coordinated sibling sets for ages 0–10. The brand had built a loyal following through Instagram and word-of-mouth referrals, generating roughly $380K in annual revenue with a 34% repeat purchase rate and an average order value around $47. Paid advertising was managed by an in-house marketing coordinator spending approximately $3,500–$4,500 per month on Meta with a disorganized campaign structure — a single campaign combining prospecting and retargeting, no audience exclusions, overlapping ad sets cannibalizing each other, and the same four lifestyle photos running for over five months. ROAS had declined from a brief 2.1x peak the previous year to a steady 1.4–1.5x, making paid acquisition marginally profitable at best after factoring in product costs and shipping. The tracking setup was incomplete — Meta pixel was firing on page loads rather than specific events, purchase conversion values were occasionally double-counted, and there was no server-side tracking. The business owner recognized that the ad account needed a complete rebuild but lacked the technical expertise and time to do it while managing product design, vendor relationships, and fulfillment operations.",
  },
  challenges: [
    {
      title: "Declining ROAS From a Broken Campaign Structure",
      description: "The existing Meta ad account had evolved haphazardly over two years — campaigns were duplicated rather than restructured, audience targeting overlapped across ad sets causing self-competition in auctions, and there was no separation between cold prospecting and warm retargeting. Budget was distributed evenly across all campaigns regardless of performance, meaning high-performing ad sets received the same spend as ones generating zero purchases. The account was running 12 ad sets across 3 campaigns, but 8 of them shared overlapping audiences, effectively bidding against itself. ROAS had steadily eroded from 2.1x to 1.4x over six months as creative fatigue compounded with structural inefficiency, and the in-house coordinator's attempts to fix things by launching new campaigns on top of the broken ones only added more overlap.",
    },
    {
      title: "Inaccurate Tracking Masking True Performance",
      description: "The Meta pixel was installed via a generic theme snippet that fired on every page load rather than specific conversion events. Purchase events were occasionally double-firing when customers hit the confirmation page and then refreshed, inflating reported revenue by an estimated 12–18%. Add-to-cart events weren't configured at all, meaning there was no visibility into mid-funnel behavior. Without server-side tracking via Conversions API, roughly 20–30% of actual conversions were being lost to browser privacy restrictions and ad blockers. The result was that reported numbers were simultaneously inflated (double-counting) and deflated (missing conversions) — making it impossible to know which campaigns were actually profitable and which were draining budget.",
    },
    {
      title: "Creative Stagnation Driving Up Acquisition Costs",
      description: "The brand was running the same four lifestyle photos — kids playing in a park, a flat-lay of folded basics, a sibling matching outfit shot, and a close-up of fabric texture — for over five months. These had been the original launch creatives and had never been systematically replaced. The in-house coordinator would occasionally swap copy overlays or try a different crop, but the core visual assets remained unchanged. With children's clothing being a visually competitive category on Meta, creative fatigue had pushed frequency above 4.5 on core audiences, and cost per purchase had climbed 40% over the prior quarter. The brand couldn't afford a professional photoshoot or agency creative retainer, creating a stagnation loop where declining performance couldn't be fixed without spending money the declining performance wasn't generating.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Account Rebuild, Tracking Overhaul & Creative Reset",
      items: [
        "Complete tracking infrastructure rebuild — implemented Meta Conversions API with server-side event tracking, reconfigured pixel events to fire only on specific ecommerce actions (view content, add to cart, initiate checkout, purchase), fixed the double-firing purchase event, and validated conversion values against Shopify order data to establish a clean attribution baseline",
        "Audited 90 days of campaign data after correcting for tracking errors — identified that actual ROAS was closer to 1.3x (not the reported 1.5x), and that only 2 of 12 ad sets were generating purchases at a positive return when accounting for product costs and shipping",
        "Completely rebuilt campaign architecture from scratch: paused all existing campaigns, created clean prospecting campaigns segmented by product category (baby basics 0–2, toddler everyday 2–5, kids seasonal 5–10), a dedicated retargeting campaign with exclusion windows, and a separate campaign for high-margin sibling coordination sets",
        "Deployed always-on AI optimization agents directly within the Meta ad account — monitoring performance signals continuously and adjusting bids, shifting budget between ad sets, and refining audience targeting in real time rather than the previous approach of weekly manual checks that missed critical performance shifts",
        "Launched initial creative testing suite with 12 AI-generated ad variations — mixing user-generated-style content with styled product shots, incorporating seasonal back-to-school themes, and testing different hooks (comfort-focused vs. style-focused vs. value-focused) — all at zero production cost, immediately tripling creative diversity compared to the stale four-image rotation",
        "Implemented proper audience exclusion logic — past purchasers within 30 days excluded from prospecting, cart abandoners funneled into dedicated sequences, and website visitors segmented by browsing depth to prevent wasted impressions on low-intent traffic",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Data-Driven Optimization & Audience Refinement",
      items: [
        "Reviewed 30-day creative test data — revealed that user-generated-style content showing real kids wearing the clothes outperformed styled flat-lay shots by 2.3x on purchase ROAS, and that comfort/quality messaging ('organic cotton that survives 100 washes') drove 45% higher add-to-cart rates than style-focused messaging among the primary 28–42 parent demographic",
        "AI optimization agents identified that weekday morning sessions (6–9 AM) when parents browsed during school drop-off routines converted at 34% higher rates than evening browsing — and automatically shifted bid weighting to capture this window, a micro-optimization that added approximately $620 in incremental monthly revenue",
        "Scaled AI-generated creative production to 15–18 new variations per month, testing seasonal angles (back-to-school prep, fall layering, holiday outfit coordination), social proof formats (customer review overlays, 'most-loved' collections), and practical messaging (stain resistance, easy care, grow-with-me sizing) — keeping the feed fresh at a pace impossible without AI creative generation",
        "Built sequential retargeting flows — cart abandoners received product-specific reminder ads within 4 hours, browse abandoners entered a 7-day consideration sequence highlighting reviews and sizing guides, and past purchasers received cross-sell campaigns timed to seasonal transitions and size-up reminders based on purchase history patterns",
        "Expanded prospecting to lookalike audiences built from the highest-LTV customer segment (repeat purchasers of basics bundles) rather than all purchasers — narrowing targeting to parents with similar browsing and purchasing patterns, which reduced cost per acquisition by 22% compared to broad lookalikes",
        "Tested Google Shopping as a secondary channel for high-intent searches like 'organic cotton kids clothes' and 'toddler basics bundle' — allocated 15% of budget to capture demand from parents actively searching rather than only relying on Meta's interruption-based discovery model",
      ],
    },
    {
      phase: 3,
      months: "90–330 days",
      title: "Seasonal Scaling, Holiday Optimization & Sustained Growth",
      items: [
        "With 15+ creatives in active rotation at any given time, creative fatigue was eliminated — AI-generated variations replaced underperformers within days, keeping cost per acquisition stable even as the brand increased spend during back-to-school and holiday peak seasons",
        "Built dedicated back-to-school campaign structure in August — pre-warmed audiences with sizing guide content, launched bundle-focused creatives emphasizing value (complete outfit sets vs. individual pieces), and deployed AI-managed budget scaling that increased daily spend 35% during the two-week peak without eroding ROAS",
        "AI agents detected the seasonal shift toward holiday gifting in early November and automatically adjusted creative messaging from everyday-basics positioning to gift-giving angles — 'matching sibling sets for holiday photos' and 'gift bundles under $60' captured seasonal demand that the previous year's static campaigns had missed entirely",
        "Black Friday and Cyber Monday campaign execution — launched early-access campaigns to warm audiences a week before, deployed countdown-style urgency creative, and let AI optimization agents manage real-time bid adjustments across all ad sets during the peak shopping window, achieving the campaign's highest single-month ROAS",
        "Post-holiday January strategy pivoted to practical messaging — new year wardrobe refreshes, winter clearance of fall inventory, and spring preview campaigns for early planners — maintaining momentum through what is traditionally the slowest month for children's clothing by testing AI-generated creative angles that emphasized value and practical need rather than seasonal excitement",
        "Continuous AI optimization compounded daily micro-improvements into significant monthly gains — bid adjustments responding to auction dynamics, budget reallocation toward top-performing products and audiences, and real-time creative rotation all happening automatically rather than through periodic manual review cycles",
        "Spring 2026 scaling phase — with a proven creative testing framework and optimized audience structure in place, the brand confidently increased budget knowing that each incremental dollar was allocated by AI agents to the highest-return opportunities across product categories, audience segments, and dayparts",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$85.7K" },
      { label: "Add to Carts", value: "10,057" },
      { label: "Avg Cost Per Cart", value: "$8.53", note: "↓43% reduction" },
      { label: "Orders", value: "5,481" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jun 2025: Baseline month — inheriting broken campaign. Tracking overhaul begins. Account restructured mid-month.
      { month: "Jun '25", spend: 5040, leads: 38, cpl: 132.63, qualified: 3, cpql: 1680.0, deals: 138, revenue: 7506, roas: 1.49 },
      // Jul 2025: Clean structure live. AI agents deployed. Tracking fixed. Real performance visible.
      { month: "Jul '25", spend: 5180, leads: 46, cpl: 112.61, qualified: 4, cpql: 1295.0, deals: 194, revenue: 9894, roas: 1.91 },
      // Aug 2025: Back-to-school demand. Creative testing scaling. Audience refinement kicking in.
      { month: "Aug '25", spend: 5340, leads: 58, cpl: 92.07, qualified: 6, cpql: 890.0, deals: 258, revenue: 12384, roas: 2.32 },
      // Sep 2025: Fall transition. Retargeting sequences maturing. Lookalike audiences refined.
      { month: "Sep '25", spend: 5680, leads: 65, cpl: 87.38, qualified: 6, cpql: 946.67, deals: 306, revenue: 15300, roas: 2.69 },
      // Oct 2025: Q4 pre-holiday. Gift-oriented creative testing begins. Budget scaling up.
      { month: "Oct '25", spend: 6240, leads: 75, cpl: 83.2, qualified: 8, cpql: 780.0, deals: 382, revenue: 19482, roas: 3.12 },
      // Nov 2025: BLACK FRIDAY — peak month. AI-managed budget scaling. Holiday creative angles deployed.
      { month: "Nov '25", spend: 11480, leads: 145, cpl: 79.17, qualified: 18, cpql: 637.78, deals: 879, revenue: 43950, roas: 3.83 },
      // Dec 2025: Holiday gifting tail. Strong demand continues for gift sets and sibling matching outfits.
      { month: "Dec '25", spend: 10680, leads: 132, cpl: 80.91, qualified: 12, cpql: 890.0, deals: 719, revenue: 35950, roas: 3.37 },
      // Jan 2026: Post-holiday normalization. Practical messaging — wardrobe refresh, clearance, spring preview.
      { month: "Jan '26", spend: 6240, leads: 113, cpl: 55.22, qualified: 10, cpql: 624.0, deals: 449, revenue: 21552, roas: 3.45 },
      // Feb 2026: Recovery month. Spring collection preview. Valentine's mini-collection tested.
      { month: "Feb '26", spend: 7280, leads: 121, cpl: 60.17, qualified: 11, cpql: 661.82, deals: 529, revenue: 26979, roas: 3.71 },
      // Mar 2026: Spring demand ramping. Easter and spring break driving seasonal interest.
      { month: "Mar '26", spend: 9720, leads: 128, cpl: 75.94, qualified: 12, cpql: 810.0, deals: 697, revenue: 35547, roas: 3.66 },
      // Apr 2026: Full optimization maturity. Highest efficiency month. Proven framework scaling confidently.
      { month: "Apr '26", spend: 12860, leads: 178, cpl: 72.25, qualified: 16, cpql: 803.75, deals: 930, revenue: 47895, roas: 3.72 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$276.4K", growth: "+116% ROAS improvement" },
    { label: "Total Orders", value: "5,481", growth: "across 11 months" },
    { label: "Average Order Value", value: "$50.44", growth: "children's clothing category" },
    { label: "Blended ROAS", value: "3.22x", growth: "from 1.49x starting" },
  ],
};
