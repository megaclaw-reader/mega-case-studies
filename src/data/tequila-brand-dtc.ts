import { CaseStudyData } from "./types";

export const tequilaBrandDtc: CaseStudyData = {
  slug: "tequila-brand-dtc",
  industry: "Premium Spirits / Tequila",
  headline: "How a Premium Tequila Brand Scaled DTC Revenue to $1.63M With AI-Powered Paid Advertising",
  subheadline: "MEGA partnered with a premium DTC tequila brand to deploy always-on AI optimization and high-velocity creative testing — growing monthly ROAS from 3.03x to 7.81x, generating 22,156 orders, and producing $1.63M in ecommerce revenue over 12 months with a blended 6.41x ROAS.",
  heroStats: [
    { value: "7.81", unit: "x", label: "Peak ROAS Achieved" },
    { value: "1.63", unit: "M", label: "Revenue Generated" },
    { value: "22,156", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "DTC", "Spirits"],
  company: {
    industry: "Premium Spirits / Tequila",
    employees: "14",
    revenue: "$2.1M",
    location: "National (USA)",
    description: "A premium direct-to-consumer tequila brand offering a curated collection of blanco, reposado, and añejo expressions through its own ecommerce platform. The brand had built early traction through tastings, regional distribution, and a small but loyal social media following. Despite strong product reviews and a 92-point rating from a respected spirits publication, DTC sales remained a small fraction of total revenue. Monthly ad spend of $8K was managed in-house with limited creative assets — the same 3–4 lifestyle images had been running for months. Cost per visit was climbing while conversion rates stagnated, and the team lacked the bandwidth to produce fresh creative or systematically test what resonated with different buyer segments. The brand needed a partner who could turn a modest ad budget into a scalable DTC acquisition engine without the overhead of a traditional agency's creative production costs.",
  },
  challenges: [
    {
      title: "Creative Stagnation Driving Rising Acquisition Costs",
      description: "The brand was running the same 4 ad creatives across all campaigns — two lifestyle bottle shots and two cocktail recipe images that had been live for over 5 months. At $8K monthly spend, the algorithm had exhausted these assets long ago, with frequency climbing above 3.5x on core audiences. Click-through rates had declined 28% over the previous quarter while cost per visit rose steadily. Without a design team or agency creative budget, the brand had no systematic way to produce fresh assets at the pace the ad platforms demanded. Every month of stale creative meant higher costs and diminishing returns.",
    },
    {
      title: "No Structured Testing or Optimization Framework",
      description: "Campaign management consisted of weekly manual check-ins by the founder, who adjusted budgets based on surface-level metrics. There was no A/B testing methodology, no audience segmentation beyond basic demographics, and no systematic approach to identifying which creative elements, messaging angles, or product focuses drove purchases versus browsing. Budget allocation between prospecting and retargeting was arbitrary, and there was no attribution visibility into which touchpoints in the customer journey actually influenced purchase decisions.",
    },
    {
      title: "Seasonal Opportunity Left Uncaptured",
      description: "Spirits sales peak dramatically during the holiday season — November through December accounts for nearly 30% of annual DTC spirits revenue industry-wide. The brand had never executed a structured holiday campaign strategy, missing the window when gift-set purchases, party hosting, and end-of-year celebrations create the highest purchase intent of the year. Without pre-built audiences, gift-focused creative, and a promotional calendar, the brand was leaving its most valuable revenue months to organic chance.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Creative Infrastructure",
      items: [
        "Comprehensive audit of 90 days of campaign performance data — identified that 81% of spend was allocated to two fatigued ad sets with declining engagement, while a small cocktail-recipe carousel showed early promise but was starved of budget at just $400/month",
        "Deployed always-on AI optimization agents directly within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the founder's weekly manual check-in cadence with real-time, 24/7 optimization",
        "Full conversion tracking setup — site visits, product page views, add-to-cart events, checkout initiations, and completed purchases mapped end-to-end with server-side tracking to recover conversion data lost to browser privacy restrictions",
        "Launched initial creative testing suite with 12 AI-generated ad variations across formats — bottle photography with lifestyle context, cocktail recipe videos, heritage storytelling carousels, and tasting-note educational content — giving the algorithm 3x more creative diversity than the brand had ever run with zero production costs eating into media spend",
        "Rebuilt campaign architecture: separated prospecting from retargeting, segmented by product type (blanco, reposado, añejo, gift sets) and buyer persona (cocktail enthusiasts, tequila collectors, gift shoppers, casual spirits buyers)",
        "Landing page optimization — improved product page load speed, added social proof from spirit ratings and press mentions, streamlined checkout flow, and created dedicated landing pages for hero SKUs",
        "Audience strategy foundation: built seed audiences from existing customer lists, website visitors, and social engagers for lookalike expansion in Phase 2",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Creative Velocity & Audience Expansion",
      items: [
        "Analyzed 30 days of structured creative test data — revealed that cocktail-recipe video content outperformed static bottle shots by 2.3x on purchase ROAS, and heritage storytelling carousels drove 38% higher add-to-cart rates among 28–45 age demographics",
        "Scaled AI-generated creative production to 20+ new variations per month, testing hooks (taste profiles, occasion-based, gifting angles), visual styles (lifestyle, close-up pours, cocktail preparation), and copy frameworks — keeping creative fresh at a pace that would require a dedicated design team at traditional production costs",
        "AI agents identified that Friday and Saturday evenings drove 47% higher conversion rates and automatically shifted budget weighting to capture weekend entertaining purchase intent — a micro-optimization invisible in weekly reporting but worth meaningful incremental revenue",
        "Expanded audience targeting using lookalike modeling based on highest-AOV customers — the AI identified that craft cocktail enthusiasts and wine club members converted at 2.1x the rate of broad spirits interest targeting",
        "Retargeting campaigns deployed for product page viewers, cart abandoners, and previous purchasers approaching replenishment windows — segmented creative for each stage rather than running a single retargeting message",
        "Budget optimization testing: AI agents analyzed cost-per-acquisition across audience segments and automatically reallocated spend from broad prospecting to high-performing lookalikes, improving efficiency while maintaining volume",
        "Developed pre-holiday audience warming strategy beginning in September — expanding prospecting reach to build retargeting pools ahead of the Q4 peak season",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Seasonal Scaling & Revenue Acceleration",
      items: [
        "With 25+ creatives in active rotation at any given time, creative fatigue was eliminated — AI-generated variations replaced declining performers within 48 hours, keeping frequency below 2.8x on prospecting audiences even as spend scaled during peak months",
        "Holiday campaign execution: AI agents managed real-time bid adjustments across all active ad sets during November and December, automatically scaling budget to top performers during peak conversion windows while pulling spend from underperformers within hours — maintaining strong ROAS during the most competitive auction period of the year",
        "Gift-focused creative strategy: AI detected the shift from self-purchase to gift-giving intent in early November and generated gift-themed creative variations — gift sets, holiday packaging, cocktail kit bundles, and 'gifts for the tequila lover' angles that captured seasonal demand competitors with static campaigns missed entirely",
        "Post-holiday optimization: identified January health-conscious trend (Dry January adjacent — premium tequila positioned as 'better spirits choice') and Valentine's Day gifting opportunity, maintaining momentum rather than retreating like competitors",
        "Continuous creative intelligence compounding: by month 9, the AI had tested 150+ creative variations and built a deep pattern library — new creatives launched with built-in winning elements and achieved positive ROAS within 24 hours versus the 5–7 day learning period typical of untested creative",
        "Advanced audience architecture using AI-identified behavioral patterns — segmented high-LTV repeat buyers, gift purchasers, cocktail enthusiasts, and premium añejo collectors with tailored creative and messaging for each segment",
        "Scaled ad spend strategically during peak months while maintaining efficiency — November and December budgets increased 80%+ over baseline with ROAS actually improving due to higher purchase intent and mature creative intelligence",
      ],
    },
  ],
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$253.4K" },
      { label: "Add to Carts", value: "50,305" },
      { label: "Avg Cost/Cart", value: "$5.04", note: "↓41% reduction" },
      { label: "Orders", value: "22,156" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Baseline month — inheriting stale campaigns. Restructuring begins. AI agents deployed.
      { month: "Jan '25", spend: 10200, leads: 11163, cpl: 0.91, qualified: 1193, cpql: 8.55, deals: 429, revenue: 30888.00, roas: 3.03 },
      // Feb 2025: Foundation work paying off. New creative suite live. Early optimization gains.
      { month: "Feb '25", spend: 10400, leads: 12235, cpl: 0.85, qualified: 1387, cpql: 7.50, deals: 537, revenue: 38127.00, roas: 3.67 },
      // Mar 2025: Creative testing data informing strategy. Cocktail content winning. Spring entertaining demand.
      { month: "Mar '25", spend: 11800, leads: 14750, cpl: 0.80, qualified: 1917, cpql: 6.16, deals: 729, revenue: 52488.00, roas: 4.45 },
      // Apr 2025: Cinco de Mayo pre-season. Tequila-specific demand rising. Audience expansion.
      { month: "Apr '25", spend: 14200, leads: 18441, cpl: 0.77, qualified: 2582, cpql: 5.50, deals: 1007, revenue: 72504.00, roas: 5.11 },
      // May 2025: CINCO DE MAYO peak + summer kickoff. Highest tequila demand outside holidays.
      { month: "May '25", spend: 17600, leads: 23467, cpl: 0.75, qualified: 3520, cpql: 5.00, deals: 1478, revenue: 109372.00, roas: 6.21 },
      // Jun 2025: Summer entertaining season. Strong ongoing demand. Creative compounding.
      { month: "Jun '25", spend: 16400, leads: 24178, cpl: 0.68, qualified: 3384, cpql: 4.85, deals: 1354, revenue: 97488.00, roas: 5.95 },
      // Jul 2025: July 4th and peak summer. BBQ/entertaining demand. Solid performance.
      { month: "Jul '25", spend: 15800, leads: 24923, cpl: 0.63, qualified: 3241, cpql: 4.87, deals: 1264, revenue: 92272.00, roas: 5.84 },
      // Aug 2025: Late summer. Audience expansion continues. Strong baseline.
      { month: "Aug '25", spend: 14200, leads: 26214, cpl: 0.54, qualified: 2942, cpql: 4.83, deals: 1148, revenue: 82656.00, roas: 5.82 },
      // Sep 2025: Fall transition. Pre-holiday audience building begins. Performance accelerating.
      { month: "Sep '25", spend: 15400, leads: 27598, cpl: 0.56, qualified: 3234, cpql: 4.76, deals: 1294, revenue: 93168.00, roas: 6.05 },
      // Oct 2025: Halloween entertaining + holiday season warmup. Gift-focused creative launches.
      { month: "Oct '25", spend: 24800, leads: 31000, cpl: 0.80, qualified: 5270, cpql: 4.71, deals: 2108, revenue: 155792.00, roas: 6.28 },
      // Nov 2025: BLACK FRIDAY + holiday gifting explosion. Spirits peak season. Massive spend scale-up.
      { month: "Nov '25", spend: 54200, leads: 63765, cpl: 0.85, qualified: 12115, cpql: 4.47, deals: 5572, revenue: 423472.00, roas: 7.81 },
      // Dec 2025: Holiday gifting peak continues. Gift sets dominating. Year-end celebrations.
      { month: "Dec '25", spend: 48400, leads: 55000, cpl: 0.88, qualified: 9520, cpql: 5.08, deals: 5236, revenue: 376992.00, roas: 7.79 },
    ],
  },
  seo: undefined,
  impact: [
    { label: "Total Revenue", value: "$1.63M", growth: "+157% ROAS improvement" },
    { label: "Total Orders", value: "22,156", growth: "across 12 months" },
    { label: "Average Order Value", value: "$73.35", growth: "premium tequila category" },
    { label: "Blended ROAS", value: "6.41x", growth: "from 3.03x starting" },
  ],
};
