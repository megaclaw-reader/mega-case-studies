import { CaseStudyData } from "./types";

export const tequilaBrandDtc: CaseStudyData = {
  slug: "tequila-brand-dtc",
  industry: "Premium Spirits / Tequila",
  headline: "How a Premium Tequila Brand Scaled DTC Revenue to $1.37M With AI-Powered Paid Advertising",
  subheadline: "MEGA partnered with a premium DTC tequila brand to deploy always-on AI optimization and high-velocity creative testing — growing monthly ROAS from 3.14x to 7.83x, generating 18,984 orders, and producing $1.37M in ecommerce revenue over 12 months with a blended 5.89x ROAS.",
  heroStats: [
    { value: "7.83", unit: "x", label: "Peak ROAS Achieved" },
    { value: "1.37", unit: "M", label: "Revenue Generated" },
    { value: "18,984", unit: "", label: "Total Orders" },
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
      { label: "Total Ad Spend", value: "$232.5K" },
      { label: "Add to Carts", value: "36,217" },
      { label: "Avg Cost/Cart", value: "$6.42", note: "↓41% reduction" },
      { label: "Orders", value: "18,984" },
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
      { month: "Jan '25", spend: 10200, leads: 11892, cpl: 0.86, qualified: 1428, cpql: 7.14, deals: 471, revenue: 32019.00, roas: 3.14 },
      // Feb 2025: Foundation work paying off. New creative suite live. Early optimization gains.
      { month: "Feb '25", spend: 10400, leads: 12578, cpl: 0.83, qualified: 1637, cpql: 6.35, deals: 556, revenue: 38920.00, roas: 3.74 },
      // Mar 2025: Creative testing data informing strategy. Cocktail content winning. Spring entertaining demand.
      { month: "Mar '25", spend: 11300, leads: 14123, cpl: 0.80, qualified: 1837, cpql: 6.15, deals: 679, revenue: 48892.00, roas: 4.33 },
      // Apr 2025: Cinco de Mayo pre-season. Tequila-specific demand rising. Audience expansion.
      { month: "Apr '25", spend: 13800, leads: 17694, cpl: 0.78, qualified: 2301, cpql: 6.00, deals: 897, revenue: 64584.00, roas: 4.68 },
      // May 2025: CINCO DE MAYO peak + summer kickoff. Highest tequila demand outside holidays.
      { month: "May '25", spend: 16200, leads: 21384, cpl: 0.76, qualified: 2889, cpql: 5.61, deals: 1214, revenue: 90234.00, roas: 5.57 },
      // Jun 2025: Summer entertaining season. Strong ongoing demand. Creative compounding.
      { month: "Jun '25", spend: 14600, leads: 19493, cpl: 0.75, qualified: 2534, cpql: 5.76, deals: 1043, revenue: 74076.10, roas: 5.07 },
      // Jul 2025: July 4th and peak summer. BBQ/entertaining demand. Solid performance.
      { month: "Jul '25", spend: 15400, leads: 20779, cpl: 0.74, qualified: 2703, cpql: 5.70, deals: 1134, revenue: 82782.00, roas: 5.38 },
      // Aug 2025: Late summer. National Tequila Day (July 24) tail. Slight seasonal softening.
      { month: "Aug '25", spend: 13200, leads: 17421, cpl: 0.76, qualified: 2265, cpql: 5.83, deals: 928, revenue: 66806.40, roas: 5.06 },
      // Sep 2025: Fall transition. Pre-holiday audience building begins. Steady performance.
      { month: "Sep '25", spend: 15800, leads: 20259, cpl: 0.78, qualified: 2634, cpql: 6.00, deals: 1074, revenue: 76254.00, roas: 4.83 },
      // Oct 2025: Halloween entertaining + holiday season warmup. Gift-focused creative launches.
      { month: "Oct '25", spend: 24600, leads: 31538, cpl: 0.78, qualified: 4104, cpql: 5.99, deals: 1764, revenue: 128172.00, roas: 5.21 },
      // Nov 2025: BLACK FRIDAY + holiday gifting explosion. Spirits peak season. Massive spend scale-up.
      { month: "Nov '25", spend: 52800, leads: 62857, cpl: 0.84, qualified: 8171, cpql: 6.46, deals: 5274, revenue: 400824.00, roas: 7.59 },
      // Dec 2025: Holiday gifting peak continues. Gift sets dominating. Year-end celebrations.
      { month: "Dec '25", spend: 42200, leads: 47955, cpl: 0.88, qualified: 6257, cpql: 6.74, deals: 4693, revenue: 323817.00, roas: 7.67 },
    ],
  },
  seo: undefined,
  impact: [
    { label: "Total Revenue", value: "$1.37M", growth: "+149% ROAS improvement" },
    { label: "Total Orders", value: "18,984", growth: "across 12 months" },
    { label: "Average Order Value", value: "$72.34", growth: "premium tequila category" },
    { label: "Blended ROAS", value: "5.91x", growth: "from 3.14x starting" },
  ],
};
