import { CaseStudyData } from "./types";

export const ecommerceHomeFurnishings: CaseStudyData = {
  slug: "ecommerce-home-furnishings",
  industry: "eCommerce - Home Furnishings",
  headline: "How a Premium Home Furnishings Brand Scaled to $3.2M in Revenue with a 5.7x ROAS Through AI-Optimized Paid Advertising",
  subheadline: "MEGA helped a national direct-to-consumer home furnishings company eliminate wasted ad spend, fix cart abandonment issues, and build a sophisticated retargeting strategy — delivering 7,360 orders and transforming paid advertising into the company's most profitable growth channel.",
  heroStats: [
    { value: "12", unit: "months", label: "Campaign Duration" },
    { value: "7,360", unit: "", label: "Total Orders" },
    { value: "$3.27M", unit: "", label: "Total Revenue" },
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
        "Roughly 35% of paid traffic was coming from broad interest targeting that attracted browsers with no purchase intent — people looking for interior design inspiration rather than ready to buy furniture online. Cost per visit was averaging $2.87 with a session-to-cart rate of only 4.1%, well below the 7-10% benchmark for optimized home furnishings ecommerce. The campaigns lacked negative audience exclusions, proper intent signals, and purchase-readiness targeting. Budget was being split evenly across campaigns regardless of performance, meaning high-ROAS retargeting campaigns were starved while low-performing prospecting campaigns consumed disproportionate budget.",
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
      { label: "Total Orders", value: "7,360" },
      { label: "Avg Cost Per Visit", value: "$1.90", note: "↓34% from $2.87" },
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
      { month: "Jan '25", spend: 40234, leads: 15893, cpl: 2.53, qualified: 842, cpql: 47.78, deals: 348, revenue: 152904, roas: 3.8 },
      { month: "Feb '25", spend: 41127, leads: 17124, cpl: 2.4, qualified: 907, cpql: 45.34, deals: 381, revenue: 170067, roas: 4.14 },
      { month: "Mar '25", spend: 44356, leads: 20543, cpl: 2.16, qualified: 1098, cpql: 40.4, deals: 467, revenue: 210553, roas: 4.75 },
      { month: "Apr '25", spend: 46891, leads: 23012, cpl: 2.04, qualified: 1253, cpql: 37.42, deals: 537, revenue: 247572, roas: 5.28 },
      { month: "May '25", spend: 48234, leads: 24672, cpl: 1.96, qualified: 1354, cpql: 35.62, deals: 571, revenue: 259605, roas: 5.38 },
      { month: "Jun '25", spend: 45673, leads: 23541, cpl: 1.94, qualified: 1247, cpql: 36.63, deals: 518, revenue: 231538, roas: 5.07 },
      { month: "Jul '25", spend: 44128, leads: 22876, cpl: 1.93, qualified: 1198, cpql: 36.83, deals: 502, revenue: 225898, roas: 5.12 },
      { month: "Aug '25", spend: 49567, leads: 27234, cpl: 1.82, qualified: 1512, cpql: 32.78, deals: 641, revenue: 292936, roas: 5.91 },
      { month: "Sep '25", spend: 52134, leads: 29876, cpl: 1.75, qualified: 1698, cpql: 30.7, deals: 723, revenue: 337134, roas: 6.47 },
      { month: "Oct '25", spend: 53672, leads: 31243, cpl: 1.72, qualified: 1812, cpql: 29.62, deals: 769, revenue: 345582, roas: 6.44 },
      { month: "Nov '25", spend: 55243, leads: 34521, cpl: 1.6, qualified: 2234, cpql: 24.73, deals: 1147, revenue: 438927, roas: 7.95 },
      { month: "Dec '25", spend: 51892, leads: 30876, cpl: 1.68, qualified: 1712, cpql: 30.31, deals: 756, revenue: 352408, roas: 6.79 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$3.27M", growth: "+157%" },
    { label: "Total Orders", value: "7,360", growth: "+92%" },
    { label: "Blended ROAS", value: "5.70x", growth: "+171%" },
    { label: "Avg Cost Per Visit", value: "$1.90", growth: "↓34%" },
    { label: "Cart Abandonment Rate", value: "58%", growth: "↓26%" },
    { label: "Average Order Value", value: "$446", growth: "+8%" },
  ],
};
