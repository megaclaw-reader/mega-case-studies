import { CaseStudyData } from "./types";

export const babyClothingEcommerce: CaseStudyData = {
  slug: "baby-clothing-ecommerce",
  industry: "Baby Clothing",
  headline: "How a National Baby Clothing Brand Achieved 3.2x Blended ROAS in 12 Months — Generating $229.8K in Revenue With 4,520 Orders",
  subheadline: "MEGA deployed always-on AI optimization agents to completely restructure a stagnant paid advertising account for a direct-to-consumer baby clothing brand, systematically improving ad efficiency from an unprofitable 1.41x starting ROAS to a 4.82x peak — generating 4,520 orders and $229.8K in total revenue across 12 months on a conservative $5K/month minimum budget.",
  heroStats: [
    { value: "3.23", unit: "x", label: "Peak Monthly ROAS" },
    { value: "$229.8K", unit: "K", label: "Total Revenue Generated" },
    { value: "4,520", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "DTC", "Baby Clothing"],
  company: {
    industry: "Baby Clothing",
    employees: "5",
    revenue: "$290K",
    location: "National (USA)",
    description: "A direct-to-consumer baby clothing brand selling organic cotton onesies, sleepwear, seasonal outfits, and gift sets for newborns through 24-month-olds via its own Shopify store. The brand had cultivated a small but loyal customer base through Instagram content and word-of-mouth recommendations from parenting communities, generating roughly $290K in annual revenue with a 31% repeat purchase rate and an average order value around $45. Paid advertising had been managed in-house by the founder, spending approximately $4,000–$5,000 per month with inconsistent campaign structures — no separation between prospecting and retargeting audiences, the same five product photos running for over four months, and no systematic approach to creative testing or audience refinement. ROAS had plateaued around 1.3–1.5x, making paid acquisition marginally profitable at best after factoring in product costs and shipping. The founder recognized that without a more data-driven approach, the brand couldn't profitably scale past its current revenue ceiling while competing against larger players in the baby apparel category.",
  },
  challenges: [
    {
      title: "Unprofitable ROAS at 1.3–1.5x Despite Consistent Spending",
      description: "The brand had been spending $4,000–$5,000 per month on paid advertising for over a year but was stuck at a ~1.4x ROAS — barely breaking even after factoring in product costs, shipping, and packaging. Campaign structure was flat: a single campaign mixing cold audiences with past purchasers, meaning retargeting budget was competing with prospecting in the same auction. There was no product-level segmentation despite the catalog ranging from $12 individual onesies to $65 gift bundles, so budget allocation didn't account for margin differences. The founder would check performance once or twice a week and make manual adjustments, but by the time underperforming ad sets were paused, they had already consumed significant budget. At this modest spend level, every dollar of waste was amplified — and the account was leaving substantial efficiency on the table.",
    },
    {
      title: "Creative Stagnation Driving Rising Acquisition Costs",
      description: "The brand relied on five product photography shots that had been running since launch — flat-lay images of folded onesies on white backgrounds with pastel props. While visually clean, these creatives had long passed the point of diminishing returns. The founder lacked the time and resources to produce new creative at scale — every photo required sourcing baby models, scheduling shoots around nap times, and editing over weekends between order fulfillment and customer service. This creative bottleneck meant the algorithm had no fresh signals to optimize against, and the same audiences were seeing the same ads repeatedly. Cost per acquisition had crept up 22% over the previous six months as creative fatigue compounded, and there was no systematic approach to understanding which visual styles, messaging angles, or formats resonated with different audience segments.",
    },
    {
      title: "Seasonal Demand Swings Without a Strategy to Capture Them",
      description: "Baby clothing has distinct seasonal patterns — gift-giving surges around the holidays, back-to-school preparation for older siblings driving bundle purchases, spring wardrobe refreshes for growing babies, and a summer lull when parents prioritize experiences over clothing. The brand had no seasonal strategy — ad spend remained flat at $5K regardless of demand signals, creative didn't shift messaging for gift-givers versus parents buying for their own children, and there was no pre-planning for major shopping events like Black Friday. The previous year's Black Friday had produced only a marginal lift because the founder simply increased daily budget by 30% on the day itself with no audience pre-warming, no gift-focused creative, and no promotional strategy. This represented a massive missed opportunity in a category where holiday gifting accounts for a disproportionate share of annual revenue.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Account Restructuring & AI Optimization Deployment",
      items: [
        "Conducted a complete audit of the existing ad account — identified that 40% of monthly spend was going to ad sets with ROAS below 1.0x, and retargeting audiences were being served alongside cold traffic with no audience exclusions, cannibalizing budget from both acquisition and retention efforts",
        "Rebuilt campaign architecture from scratch: separated prospecting from retargeting, segmented by product category (everyday basics, sleepwear, seasonal collections, gift sets) with margin-adjusted ROAS targets — high-margin gift bundles received aggressive scaling goals while lower-margin individual items focused on volume efficiency",
        "Deployed always-on AI optimization agents directly within the ad account — continuously monitoring performance signals, adjusting bids, reallocating budget between ad sets, and refining audience targeting in real time rather than the founder's twice-weekly manual check-ins",
        "Launched initial creative testing suite with 12 AI-generated ad variations across formats — lifestyle shots of babies in different settings, close-up fabric texture highlights, gift-wrapping sequences, and parent testimonial-style cards — replacing the stale 5-creative rotation with zero production cost",
        "Implemented proper conversion tracking with server-side event verification, fixing attribution gaps that had been underreporting actual conversions by an estimated 15–20% due to browser privacy restrictions",
        "Built core audience segments based on purchase behavior data: first-time parents (prospecting), registry-stage shoppers, gift buyers, and repeat purchasers — each receiving tailored messaging and creative aligned to their buying motivation",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Creative Scaling & Audience Refinement",
      items: [
        "Analyzed 30-day structured creative test results — discovered that lifestyle imagery of babies wearing the products in natural home settings outperformed flat-lay product shots by 2.1x on purchase ROAS, and parent-perspective 'unboxing' style content drove 34% higher add-to-cart rates than traditional product photography",
        "Scaled AI-generated creative production to 15+ new variations per month, testing hooks (softness and comfort focus vs. organic/safety messaging vs. gift-giving convenience), visual styles (nursery settings vs. outdoor play vs. close-up fabric details), and copy angles (first-time parent reassurance vs. experienced parent convenience) — all at zero marginal creative cost",
        "AI optimization agents identified that weekday evenings between 8–10 PM drove 26% higher conversion rates for baby clothing purchases — aligning with parents browsing after bedtime routines — and automatically shifted budget dayparting to capture this high-intent window",
        "Built dynamic retargeting sequences: cart abandoners received product-specific ads within 3 hours featuring the exact items left behind, browse abandoners entered a 4-day educational sequence about fabric quality and sizing guides, and past purchasers received size-up reminders timed to typical baby growth milestones",
        "Refined audience targeting based on AI-identified behavioral patterns — parents of newborns responded to safety and softness messaging while gift buyers converted on bundling and presentation angles, enabling creative-audience matching that improved overall campaign efficiency",
        "Tested and validated seasonal creative themes for the upcoming fall transition — cozy sleepwear imagery, autumn color palettes, and layering outfit suggestions began outperforming summer creative as temperatures shifted",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Seasonal Optimization, Black Friday Execution & Sustained Growth",
      items: [
        "With 15+ creatives in active rotation at any given time, creative fatigue was eliminated — AI-generated variations replaced underperformers within days, keeping cost per acquisition stable even as spend scaled to $9,600 during Black Friday month",
        "Built dedicated Black Friday and Cyber Monday campaign structure three weeks in advance — pre-warmed lookalike audiences from high-LTV purchasers, created gift set bundle promotions, and deployed AI-managed automated budget scaling that nearly doubled daily spend during peak conversion windows while maintaining a 3.55x ROAS",
        "AI agents detected the seasonal shift toward holiday gifting in early November and automatically adjusted creative messaging from parent-purchase angles to gift-giving hooks — 'the perfect baby shower gift' and 'holiday gift sets they'll actually use' angles captured demand that static campaigns would have missed",
        "Real-time bid optimization during Black Friday weekend — AI agents adjusted bids continuously based on conversion velocity, capturing gift buyers at lower acquisition costs than competitors relying on manual campaign management during the highest-traffic shopping period of the year",
        "Post-holiday strategy shift in January — rather than cutting spend dramatically, maintained efficient $5K floor while pivoting creative to New Year wardrobe refresh messaging and spring collection previews, avoiding the common mistake of going dark when competition (and ad costs) drop significantly",
        "Continuous optimization through spring months — AI agents identified that registry-focused audiences and new parent communities became increasingly responsive as the spring baby boom period approached, automatically reallocating budget to capture this seasonal demand",
        "Advanced audience segmentation matured throughout the engagement — repeat buyers, gift purchasers, registry browsers, and size-up candidates each received tailored creative with messaging matched to their stage in the customer journey, maximizing return across the full $71.2K annual ad investment",
        "Month-over-month efficiency improvements compounded — cost per visit decreased from $0.98 to $0.46, cart-to-order rate improved from 44% to 54%, and average order value grew from $44.80 to $47.80 as bundling strategies and gift set promotions increased basket size",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$71.2K" },
      { label: "Add to Carts", value: "8,769" },
      { label: "Avg Cost Per Cart", value: "$8.11", note: "↓62% reduction" },
      { label: "Orders", value: "4,520" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jun 2025: Baseline month — inheriting founder-managed campaigns at ~1.4x ROAS. Account restructuring begins. AI agents deployed.
      { month: "Jun '25", spend: 5100, leads: 5218, cpl: 0.98, qualified: 365, cpql: 13.97, deals: 160, revenue: 11679, roas: 2.29 },
      // Jul 2025: New campaign architecture live. Creative testing suite launched with 12 variations. Early efficiency gains.
      { month: "Jul '25", spend: 5260, leads: 5786, cpl: 0.91, qualified: 422, cpql: 12.46, deals: 189, revenue: 13150, roas: 2.5 },
      // Aug 2025: AI optimization compounding. Back-to-school adjacent demand lifting sibling bundle purchases.
      { month: "Aug '25", spend: 5440, leads: 6422, cpl: 0.85, qualified: 492, cpql: 11.06, deals: 228, revenue: 15667, roas: 2.88 },
      // Sep 2025: Fall transition. Sleepwear and layering collections gaining traction. Retargeting sequences fully mature.
      { month: "Sep '25", spend: 5300, leads: 6837, cpl: 0.78, qualified: 540, cpql: 9.81, deals: 260, revenue: 12064, roas: 2.28 },
      // Oct 2025: Q4 preparation begins. Pre-warming holiday audiences. Gift set campaigns tested. Strong seasonal demand.
      { month: "Oct '25", spend: 5780, leads: 7782, cpl: 0.74, qualified: 637, cpql: 9.07, deals: 319, revenue: 15057, roas: 2.60 },
      // Nov 2025: BLACK FRIDAY / CYBER MONDAY — budget scaled aggressively. AI managed real-time bid adjustments. Gift-focused creative drove highest conversion rates.
      { month: "Nov '25", spend: 9600, leads: 10560, cpl: 0.91, qualified: 1162, cpql: 8.26, deals: 651, revenue: 34112, roas: 3.55 },
      // Dec 2025: Holiday gifting tail. Last-minute gift buyers. Elevated spend maintained for seasonal demand.
      { month: "Dec '25", spend: 7400, leads: 9916, cpl: 0.75, qualified: 892, cpql: 8.30, deals: 491, revenue: 24599, roas: 3.32 },
      // Jan 2026: Post-holiday normalization. Budget returns to floor. New Year wardrobe refresh and spring preview messaging.
      { month: "Jan '26", spend: 5120, leads: 8704, cpl: 0.59, qualified: 618, cpql: 8.28, deals: 303, revenue: 13544, roas: 2.65 },
      // Feb 2026: Valentine's gifting micro-spike. Spring collection previews. Registry audiences becoming more responsive.
      { month: "Feb '26", spend: 5280, leads: 9257, cpl: 0.57, qualified: 694, cpql: 7.61, deals: 359, revenue: 16370, roas: 3.10 },
      // Mar 2026: Spring baby boom period. Registry and new parent audiences highly responsive. Growth trajectory accelerating.
      { month: "Mar '26", spend: 5460, leads: 10847, cpl: 0.50, qualified: 868, cpql: 6.29, deals: 451, revenue: 20882, roas: 3.82 },
      // Apr 2026: Spring demand peak. Easter gifting and warm-weather clothing transition driving volume.
      { month: "Apr '26", spend: 5620, leads: 11769, cpl: 0.48, qualified: 989, cpql: 5.68, deals: 524, revenue: 24680, roas: 4.39 },
      // May 2026: Sustained growth. Summer collection launch. Year-over-year efficiency gains fully compounding.
      { month: "May '26", spend: 5800, leads: 12528, cpl: 0.46, qualified: 1090, cpql: 5.32, deals: 585, revenue: 27963, roas: 4.82 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$229.8K", growth: "+242% ROAS improvement from baseline" },
    { label: "Total Orders", value: "4,520", growth: "across 12 months" },
    { label: "Average Order Value", value: "$47.67", growth: "baby clothing category" },
    { label: "Blended ROAS", value: "3.23x", growth: "from 1.41x starting" },
  ],
};
