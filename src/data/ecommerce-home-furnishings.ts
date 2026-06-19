import { CaseStudyData } from "./types";

export const ecommerceHomeFurnishings: CaseStudyData = {
  slug: "ecommerce-home-furnishings",
  industry: "eCommerce - Home Furnishings",
  headline: "How a Premium Home Furnishings Brand Scaled to $3.26M in Revenue with a 5.7x ROAS Through AI-Optimized Paid Advertising",
  subheadline: "MEGA helped a national direct-to-consumer home furnishings company eliminate wasted ad spend, fix cart abandonment issues, and build a sophisticated retargeting strategy — delivering 7,335 orders and transforming paid advertising into the company's most profitable growth channel.",
  heroStats: [
    { value: "12", unit: "months", label: "Campaign Duration" },
    { value: "7,335", unit: "", label: "Total Orders" },
    { value: "$3.26M", unit: "", label: "Total Revenue" },
  ],
  tags: ["Paid Advertising", "eCommerce", "Home Furnishings", "National"],
  company: {
    industry: "eCommerce — Premium Home Furnishings & Décor",
    employees: "34",
    revenue: "$6.8M",
    location: "National (USA — Direct-to-Consumer)",
    description:
      "A direct-to-consumer home furnishings brand specializing in mid-to-premium furniture, lighting, textiles, and decorative accessories for modern living spaces. The company had built a strong product catalog with average order values between $300 and $800, but their paid advertising strategy was hemorrhaging budget on unqualified traffic while failing to recapture the high percentage of shoppers who abandoned carts. With furniture being a considered purchase — customers often browse for weeks before buying — the existing retargeting approach was too simplistic, treating a first-time visitor the same as someone who had configured a custom sectional and added it to cart. The brand needed a complete overhaul of their paid strategy to match the longer consideration cycle inherent in home furnishings purchases.",
  },
  challenges: [
    {
      title: "Severe Cart Abandonment with No Recovery Strategy",
      description:
        "Cart abandonment rates were running at 78% — significantly above the 70% industry average for home furnishings. With average order values around $450, each abandoned cart represented substantial lost revenue. The existing retargeting setup was a single generic campaign that served the same ad to everyone who visited the site, regardless of how far they progressed in the purchase journey. There was no differentiation between someone who bounced from the homepage versus someone who spent 20 minutes configuring a custom furniture piece and abandoned at checkout. The high-value cart abandoners — the easiest revenue to recover — were getting lost in a sea of low-intent retargeting impressions.",
    },
    {
      title: "Wasted Spend on Unqualified Traffic",
      description:
        "Roughly 35% of paid traffic was coming from broad interest targeting that attracted browsers with no purchase intent — people looking for interior design inspiration rather than ready to buy furniture online. Cost per visit was averaging $3.00 with a session-to-cart rate of only 4.1%, well below the 7-10% benchmark for optimized home furnishings ecommerce. The campaigns lacked negative audience exclusions, proper intent signals, and purchase-readiness targeting. Budget was being split evenly across campaigns regardless of performance, meaning high-ROAS retargeting campaigns were starved while low-performing prospecting campaigns consumed disproportionate budget.",
    },
    {
      title: "No Seasonal Strategy for Home Furnishings Demand Cycles",
      description:
        "Home furnishings follow distinct seasonal patterns — spring refresh, back-to-school dorm season, fall home nesting, and holiday gifting — yet ad spend was flat month-over-month at roughly the same budget regardless of demand signals. Black Friday and Cyber Monday, which can drive 20-25% of annual revenue for furniture ecommerce in a single week, had no dedicated campaign strategy. The brand was also missing seasonal creative angles like New Year home makeovers, spring cleaning refreshes, and holiday entertaining preparation that drive purchase urgency in a category where consumers otherwise delay indefinitely.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Retargeting Overhaul & Audience Segmentation",
      items: [
        "Complete audit of existing paid campaigns revealing 35% of spend going to unqualified traffic with sub-1x ROAS — immediately paused underperforming broad interest campaigns and reallocated budget to high-intent audiences",
        "Built tiered retargeting funnel segmented by purchase intent: homepage visitors (low intent), category browsers (medium intent), product page viewers (high intent), and cart abandoners (highest intent) with escalating bid strategies",
        "Implemented dynamic product retargeting showing exact items viewed or added to cart, plus complementary pieces — replacing generic brand awareness ads that ignored individual browsing behavior",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing weekly manual review cycles with real-time adjustments that capture the nuanced timing of furniture purchase decisions",
        "Launched initial creative testing suite with 25+ AI-generated ad variations across formats (lifestyle imagery, product close-ups, room scene carousels, and video walkthroughs) to establish performance baselines for home furnishings audiences",
        "Installed enhanced ecommerce tracking with micro-conversion events — product configurator usage, swatch requests, room planner interactions — to build richer audience signals beyond basic pageviews",
        "Created negative audience exclusions for recent purchasers (90-day window given furniture replacement cycles), competitor employee IPs, and identified bot traffic patterns consuming 8% of click budget",
        "Developed seasonal budget allocation model: 30% to Q4 (Oct-Dec including Black Friday), 25% to spring refresh (Mar-May), 25% to fall nesting (Aug-Oct), 20% to slower periods (Jan-Feb, Jun-Jul)",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Campaign Scaling & Funnel Optimization",
      items: [
        "Launched category-specific campaigns for highest-margin product lines — seating, bedroom collections, and lighting — each with tailored creative and audience targeting optimized for the specific purchase consideration timeline",
        "Built lookalike audiences from high-AOV purchasers ($500+), segmented by product category, to find new customers with similar home furnishing purchase patterns",
        "Implemented sequential ad storytelling: first touch showed lifestyle aspiration, second touch featured product details and craftsmanship, third touch delivered social proof and urgency — matching the multi-week furniture consideration cycle",
        "Scaled AI-generated creative production to 45+ new variations per month, testing room styling angles, seasonal themes, and urgency-driven messaging at a pace that would require a dedicated creative team at an agency",
        "AI agents identified that mid-week evening sessions (Tue-Thu, 7-10pm) had 2.3x higher cart-to-order conversion rates and automatically shifted bid multipliers to capture this high-intent browsing window",
        "Cart abandonment email-to-ad coordination: retargeting sequences timed to complement email recovery campaigns, creating a cohesive multi-channel recovery experience without ad fatigue",
        "A/B tested pricing presentation strategies — showing monthly financing options ($37/mo vs $449) in ad creative increased click-through rate 34% on items over $400",
        "Weekly budget reallocation based on real-time ROAS data across campaigns, with AI agents automatically shifting spend from underperforming segments to proven winners within hours of performance signal changes",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Seasonal Domination & Black Friday Strategy",
      items: [
        "Fall home nesting campaign launch capitalizing on seasonal psychology — 'refresh your space' messaging with curated room collections driving higher AOV through bundled furniture sets",
        "Comprehensive Black Friday/Cyber Monday strategy: three-week campaign arc with early access for email subscribers, doorbuster hero products for traffic, and premium bundle deals designed to maximize AOV during the highest-intent shopping period of the year",
        "Black Friday retargeting intensification: anyone who engaged with early-access content received escalating urgency messaging with real-time inventory indicators, driving cart-to-order rates above 50% during the peak weekend",
        "Holiday gifting campaign targeting accessory and décor price points ($75-$250) to capture gift shoppers who wouldn't typically purchase furniture — expanding the customer base for future high-AOV retargeting",
        "With 70+ creatives in active rotation, the campaign eliminated creative fatigue entirely — new AI-generated variations featuring seasonal room styling replaced underperformers automatically based on real-time engagement metrics",
        "Post-holiday New Year campaign pivoting to 'fresh start' home makeover messaging, capitalizing on resolution-driven purchase intent with room-by-room transformation creative",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, and budget reallocations happening in real time across all campaign tiers",
        "Cross-sell campaigns for existing customers targeting complementary product categories based on purchase history — bedroom buyers seeing living room collections, seating buyers seeing lighting — increasing repeat purchase rate 22% over the engagement period",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$573.2K" },
      { label: "Total Orders", value: "7,335" },
      { label: "Avg Cost Per Visit", value: "$1.94", note: "↓35% from $3.00" },
      { label: "Blended ROAS", value: "5.70x", note: "from 2.1x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      { month: "Jan '25", spend: 40234, leads: 13412, cpl: 3.0, qualified: 718, cpql: 56.04, deals: 298, revenue: 131418, roas: 3.27 },
      { month: "Feb '25", spend: 41127, leads: 14567, cpl: 2.82, qualified: 789, cpql: 52.13, deals: 327, revenue: 146241, roas: 3.56 },
      { month: "Mar '25", spend: 44356, leads: 18234, cpl: 2.43, qualified: 1012, cpql: 43.83, deals: 432, revenue: 195264, roas: 4.4 },
      { month: "Apr '25", spend: 46891, leads: 21378, cpl: 2.19, qualified: 1198, cpql: 39.14, deals: 519, revenue: 239757, roas: 5.11 },
      { month: "May '25", spend: 48234, leads: 23891, cpl: 2.02, qualified: 1342, cpql: 35.94, deals: 574, revenue: 261194, roas: 5.42 },
      { month: "Jun '25", spend: 45673, leads: 23124, cpl: 1.98, qualified: 1274, cpql: 35.85, deals: 527, revenue: 236078, roas: 5.17 },
      { month: "Jul '25", spend: 44128, leads: 22567, cpl: 1.96, qualified: 1218, cpql: 36.23, deals: 509, revenue: 229049, roas: 5.19 },
      { month: "Aug '25", spend: 49567, leads: 27123, cpl: 1.83, qualified: 1534, cpql: 32.31, deals: 658, revenue: 303196, roas: 6.12 },
      { month: "Sep '25", spend: 52134, leads: 30234, cpl: 1.72, qualified: 1736, cpql: 30.03, deals: 741, revenue: 347538, roas: 6.67 },
      { month: "Oct '25", spend: 53672, leads: 32187, cpl: 1.67, qualified: 1876, cpql: 28.61, deals: 793, revenue: 374497, roas: 6.98 },
      { month: "Nov '25", spend: 55243, leads: 35678, cpl: 1.55, qualified: 2312, cpql: 23.89, deals: 1189, revenue: 441249, roas: 7.99 },
      { month: "Dec '25", spend: 51892, leads: 32456, cpl: 1.6, qualified: 1798, cpql: 28.86, deals: 768, revenue: 358656, roas: 6.91 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$3.26M", growth: "+157%" },
    { label: "Total Orders", value: "7,335", growth: "+92%" },
    { label: "Blended ROAS", value: "5.70x", growth: "+171%" },
    { label: "Avg Cost Per Visit", value: "$1.94", growth: "↓35%" },
    { label: "Cart Abandonment Rate", value: "58%", growth: "↓26%" },
    { label: "Average Order Value", value: "$445", growth: "+8%" },
  ],
};
