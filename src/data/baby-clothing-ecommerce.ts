import { CaseStudyData } from "./types";

export const babyClothingEcommerce: CaseStudyData = {
  slug: "baby-clothing-ecommerce",
  industry: "Baby Clothing",
  headline: "How a National Baby Clothing Brand Scaled From 2.31x to 4.32x Peak ROAS in 12 Months — Generating $217.6K in Revenue With 4,682 Orders",
  subheadline: "MEGA deployed always-on AI optimization agents to restructure a stagnant paid advertising account for a direct-to-consumer baby clothing brand, systematically improving ad efficiency from a 2.31x starting ROAS to a 4.32x Black Friday peak — generating 4,682 orders and $217.6K in total revenue across 12 months on a conservative $5K/month minimum budget.",
  heroStats: [
    { value: "4.32", unit: "x", label: "Peak Monthly ROAS" },
    { value: "$217.6K", unit: "K", label: "Total Revenue Generated" },
    { value: "4,682", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "DTC", "Baby Clothing"],
  company: {
    industry: "Baby Clothing",
    employees: "5",
    revenue: "$290K",
    location: "National (USA)",
    description: "A direct-to-consumer baby clothing brand selling organic cotton onesies, sleepwear, seasonal outfits, and gift sets for newborns through 24-month-olds via its own Shopify store. The brand had cultivated a small but loyal customer base through Instagram content and word-of-mouth recommendations from parenting communities, generating roughly $290K in annual revenue with a 31% repeat purchase rate and an average order value around $42. Paid advertising had been managed in-house by the founder, spending approximately $4,000–$5,000 per month with inconsistent campaign structures — no separation between prospecting and retargeting audiences, the same five product photos running for over four months, and no systematic approach to creative testing or audience refinement. ROAS had plateaued around 2.0–2.3x, and the founder recognized that without a more data-driven approach, the brand couldn't profitably scale past its current revenue ceiling while competing against larger players in the baby apparel category.",
  },
  challenges: [
    {
      title: "Plateaued ROAS at 2.0–2.3x Despite Consistent Spending",
      description: "The brand had been spending $4,000–$5,000 per month on paid advertising for over a year but couldn't break past a ~2.3x ROAS ceiling. Campaign structure was flat — a single campaign mixing cold audiences with past purchasers, meaning retargeting budget was competing with prospecting in the same auction. There was no product-level segmentation despite the catalog ranging from $12 individual onesies to $65 gift bundles, so budget allocation didn't account for margin differences. The founder would check performance once or twice a week and make manual adjustments, but by the time underperforming ad sets were paused, they had already consumed significant budget. The result was an account that generated sales but left substantial efficiency on the table — every dollar of waste was amplified at this modest budget level.",
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
        "Conducted a complete audit of the existing ad account — identified that 40% of monthly spend was going to ad sets with ROAS below 1.5x, and retargeting audiences were being served alongside cold traffic with no audience exclusions, cannibalizing budget from both acquisition and retention efforts",
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
        "With 15+ creatives in active rotation at any given time, creative fatigue was eliminated — AI-generated variations replaced underperformers within days, keeping cost per acquisition stable even as spend scaled to $9,680 during Black Friday month",
        "Built dedicated Black Friday and Cyber Monday campaign structure three weeks in advance — pre-warmed lookalike audiences from high-LTV purchasers, created gift set bundle promotions, and deployed AI-managed automated budget scaling that nearly doubled daily spend during peak conversion windows while maintaining a 4.32x ROAS",
        "AI agents detected the seasonal shift toward holiday gifting in early November and automatically adjusted creative messaging from parent-purchase angles to gift-giving hooks — 'the perfect baby shower gift' and 'holiday gift sets they'll actually use' angles captured demand that static campaigns would have missed",
        "Real-time bid optimization during Black Friday weekend — AI agents adjusted bids continuously based on conversion velocity, capturing gift buyers at lower acquisition costs than competitors relying on manual campaign management during the highest-traffic shopping period of the year",
        "Post-holiday strategy shift in January — rather than cutting spend dramatically, maintained efficient $5K floor while pivoting creative to New Year wardrobe refresh messaging and spring collection previews, avoiding the common mistake of going dark when competition (and ad costs) drop significantly",
        "Continuous optimization through spring months — AI agents identified that registry-focused audiences and new parent communities became increasingly responsive as the spring baby boom period approached, automatically reallocating budget to capture this seasonal demand",
        "Advanced audience segmentation matured throughout the engagement — repeat buyers, gift purchasers, registry browsers, and size-up candidates each received tailored creative with messaging matched to their stage in the customer journey, maximizing return across the full $70.5K annual ad investment",
        "Month-over-month efficiency improvements compounded — cost per visit decreased from $0.75 to $0.66, cart-to-order rate improved from 49% to 55%, and average order value grew from $44.20 to $46.20 as bundling strategies and gift set promotions increased basket size",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$70.5K" },
      { label: "Add to Carts", value: "9,088" },
      { label: "Avg Cost Per Cart", value: "$7.76", note: "↓17% reduction" },
      { label: "Orders", value: "4,682" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jun 2025: Baseline month — inheriting founder-managed campaigns. Account restructuring begins. AI agents deployed.
      { month: "Jun '25", spend: 5120, leads: 6827, cpl: 0.75, qualified: 546, cpql: 9.38, deals: 268, revenue: 11846, roas: 2.31 },
      // Jul 2025: New campaign architecture live. Creative testing gaining traction. Summer basics demand steady.
      { month: "Jul '25", spend: 5280, leads: 7314, cpl: 0.72, qualified: 612, cpql: 8.63, deals: 294, revenue: 12877, roas: 2.44 },
      // Aug 2025: Back-to-school adjacent demand. Older sibling purchases driving bundle orders. AI optimization compounding.
      { month: "Aug '25", spend: 5460, leads: 7800, cpl: 0.70, qualified: 679, cpql: 8.04, deals: 338, revenue: 15244, roas: 2.79 },
      // Sep 2025: Fall transition. Sleepwear and layering collections gaining traction. Retargeting sequences maturing.
      { month: "Sep '25", spend: 5180, leads: 7457, cpl: 0.69, qualified: 641, cpql: 8.08, deals: 327, revenue: 14584, roas: 2.82 },
      // Oct 2025: Q4 preparation begins. Pre-warming holiday audiences. Gift set campaigns tested.
      { month: "Oct '25", spend: 5740, leads: 8529, cpl: 0.67, qualified: 767, cpql: 7.48, deals: 396, revenue: 18335, roas: 3.19 },
      // Nov 2025: BLACK FRIDAY / CYBER MONDAY — budget scaled aggressively. AI managed real-time bid adjustments. Gift-focused creative.
      { month: "Nov '25", spend: 9680, leads: 15482, cpl: 0.63, qualified: 1548, cpql: 6.25, deals: 813, revenue: 41788, roas: 4.32 },
      // Dec 2025: Holiday gifting tail. Last-minute gift buyers. Elevated spend maintained for seasonal demand.
      { month: "Dec '25", spend: 7340, leads: 11196, cpl: 0.66, qualified: 1008, cpql: 7.28, deals: 518, revenue: 25745, roas: 3.51 },
      // Jan 2026: Post-holiday normalization. Budget returns to floor. New Year wardrobe refresh messaging.
      { month: "Jan '26", spend: 5060, leads: 7088, cpl: 0.71, qualified: 567, cpql: 8.93, deals: 279, revenue: 11802, roas: 2.33 },
      // Feb 2026: Valentine's gifting micro-spike. Spring collection previews. Steady improvement.
      { month: "Feb '26", spend: 5150, leads: 7364, cpl: 0.70, qualified: 604, cpql: 8.53, deals: 312, revenue: 13572, roas: 2.64 },
      // Mar 2026: Spring baby boom period. Registry audiences responsive. Growth trajectory resuming.
      { month: "Mar '26", spend: 5320, leads: 7847, cpl: 0.68, qualified: 659, cpql: 8.07, deals: 347, revenue: 15580, roas: 2.93 },
      // Apr 2026: Spring demand accelerating. Easter gifting and warm-weather clothing transition.
      { month: "Apr '26", spend: 5510, leads: 8265, cpl: 0.67, qualified: 710, cpql: 7.76, deals: 381, revenue: 17374, roas: 3.15 },
      // May 2026: Sustained growth. Summer collection launch. Year-over-year efficiency gains compounding.
      { month: "May '26", spend: 5640, leads: 8594, cpl: 0.66, qualified: 747, cpql: 7.55, deals: 409, revenue: 18896, roas: 3.35 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$217.6K", growth: "+45% ROAS improvement from baseline" },
    { label: "Total Orders", value: "4,682", growth: "across 12 months" },
    { label: "Average Order Value", value: "$46.49", growth: "baby clothing category" },
    { label: "Blended ROAS", value: "3.09x", growth: "from 2.31x starting" },
  ],
};
