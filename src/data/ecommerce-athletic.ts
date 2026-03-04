import { CaseStudyData } from "./types";

export const ecommerceAthletic: CaseStudyData = {
  slug: "ecommerce-athletic",
  industry: "Ecommerce",
  headline: "How a DTC Activewear Brand Generated $674K in Revenue Over 7 Months",
  subheadline: "MEGA helped a Denver-based athletic clothing company targeting younger men and women optimize seasonal ad spend across back-to-school, Black Friday, and holiday gifting — producing 7,043 orders at a blended 3.24x ROAS.",
  heroStats: [
    { value: "7", unit: "months", label: "Campaign Duration" },
    { value: "7,043", unit: "", label: "Orders Attributed" },
    { value: "$674", unit: "K", label: "Ad Revenue" },
  ],
  tags: ["Paid Advertising", "Ecommerce", "Seasonal Strategy"],
  company: {
    industry: "Ecommerce — Athletic Clothing & Activewear",
    employees: "18",
    revenue: "$3.2M",
    location: "Denver, CO (Selling Nationally)",
    description: "A direct-to-consumer athletic clothing brand based in Denver, Colorado, designing performance wear for men and women ages 18-34. The brand had grown organically through word-of-mouth and influencer seeding but had never run structured paid advertising at scale. Their product line — leggings, training shorts, compression tops, sports bras, and outerwear — averaged around $96 per order. Despite strong brand affinity among existing customers and a 38% repeat purchase rate, new customer acquisition was stalling. The founding team knew they needed to invest in paid channels but had no framework for seasonal budget allocation, audience segmentation by gender and product category, or creative testing. With back-to-school, Black Friday, and the holiday season all ahead, the timing was right to build a paid advertising engine that could scale profitably.",
  },
  challenges: [
    {
      title: "No Paid Advertising Infrastructure or Seasonal Strategy",
      description: "The brand had spent less than $4,000 total on ads in the prior year — sporadic campaigns with no tracking, no audience segmentation, and no landing page optimization. There was no pixel data, no conversion tracking beyond basic last-click, and no understanding of customer acquisition cost by product category. With a roughly $29,750 average monthly budget approved, they needed an entire paid advertising operation built from scratch — pixel installation, conversion tracking, audience architecture, creative pipelines, and a seasonal budget model matching the natural demand cycles of athletic clothing.",
    },
    {
      title: "Intense Competition in the Athleisure Market",
      description: "Athletic clothing is one of the most competitive ecommerce verticals, with established brands spending millions monthly on advertising. Cost per visit in the activewear space frequently exceeds $1.50-$2.50 for non-branded terms, and newer DTC brands get squeezed between legacy athletic companies and fast-fashion competitors undercutting on price. Standing out required sharp creative differentiation, precise audience targeting beyond generic 'fitness enthusiast' segments, and a willingness to invest in awareness-building campaigns alongside direct-response — which most smaller brands skip because the ROAS isn't immediately visible.",
    },
    {
      title: "Gender-Split Catalog With Different Buying Behaviors",
      description: "Men's and women's athletic clothing have fundamentally different purchase patterns. Women's activewear buyers browse more products, add more items per cart, and respond more to lifestyle creative — but have higher return rates. Men's buyers are more direct, convert faster on product-focused ads, but have lower average order values and purchase less frequently. Running a single campaign for both audiences meant creative underperformed for everyone, and budget allocation couldn't be optimized by the gender split that drove 60% of revenue variations. The brand needed separate campaign architectures that respected these behavioral differences while maintaining consistent brand positioning.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Infrastructure & Audience Foundation",
      items: [
        "Installed conversion tracking across the full funnel — page views, product views, add-to-carts, initiate checkout, and purchase events with accurate revenue attribution",
        "Built audience architecture: separated campaigns by gender (men's vs. women's lines), product category (leggings, shorts, tops, outerwear), and funnel stage (prospecting, retargeting, retention)",
        "Developed seasonal budget allocation model: 30% to back-to-school peak (Aug-Sep), 35% to Black Friday and holiday season (Nov-Dec), 20% to shoulder months, 15% to summer baseline",
        "Creative production sprint: shot 47 product and lifestyle images, 12 short-form video ads, and 8 UGC-style testimonial clips segmented by gender and product category",
        "Product feed optimization — cleaned up titles, descriptions, and imagery for dynamic product ads with seasonal hero products rotating based on demand signals",
        "Competitive audit of 14 DTC athletic brands in the $60-$150 AOV range to identify positioning gaps and underserved audience segments",
        "Landing page buildout: created gender-specific collection pages with social proof, size guides, and urgency elements optimized for paid traffic conversion",
        "Set ROAS floor targets by campaign type: 3.0x for prospecting, 5.0x for retargeting, 2.0x for brand awareness with lifetime value justification",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Back-to-School & Fall Scaling",
      items: [
        "Launched back-to-school campaigns targeting college-age buyers (18-24) with campus lifestyle creative and 'gear up for fall training' messaging",
        "Product-specific campaigns for seasonal transitions: lightweight training gear giving way to cold-weather layers, running tights, and thermal compression tops",
        "Audience expansion through lookalike modeling off highest-LTV customer segments — separated by gender and product preference",
        "Dynamic retargeting with personalized product recommendations based on browse behavior and cart abandonment stage",
        "Weekly creative refresh cadence to combat ad fatigue — rotated between lifestyle photography, product-focused shots, customer reviews, and UGC content",
        "Geographic bid optimization: increased spend in college towns and metro areas with high gym membership density during back-to-school windows",
        "Cross-sell campaign layers: legging buyers targeted with matching sports bras, shorts buyers with compression tops, outerwear browsers with cold-weather accessory bundles",
        "A/B tested pricing presentation: 'free shipping over $75' vs. '15% off first order' vs. 'bundle and save' — bundle messaging won by 23% on conversion rate",
      ],
    },
    {
      phase: 3,
      months: "90–210 days",
      title: "Holiday Peak & Post-Season Retention",
      items: [
        "Built comprehensive Black Friday/Cyber Monday campaign architecture: early access for email subscribers, doorbuster deals on hero products, tiered discounts by cart value",
        "Holiday gifting campaigns targeting non-core audiences: 'gifts for the gym lover,' 'stocking stuffers under $50,' and curated gift sets with premium packaging",
        "Aggressive retargeting during November — 48-hour abandoned cart sequences with countdown timers, social proof notifications, and escalating discount offers",
        "December strategy shift to gift-card promotions and last-minute shipping guarantees as physical delivery windows closed",
        "Retention campaigns targeting Black Friday buyers with December loyalty offers to convert one-time holiday shoppers into repeat customers",
        "Creative testing at scale during high-traffic periods: ran 34 unique ad variations across gender, product, and funnel stage combinations",
        "End-of-season clearance campaigns for transitional inventory — summer styles at deep discounts to clear stock and fund spring buying",
        "End-of-campaign performance analysis and audience asset documentation for continued scaling beyond the engagement",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$208.3K" },
      { label: "Total Orders", value: "7,043" },
      { label: "Avg Cost Per Acquisition", value: "$29.57" },
      { label: "Blended ROAS", value: "3.24x" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jun 2025: Launch month — summer baseline, building audiences, testing creative. Lower spend.
      { month: "Jun 2025", spend: 23147, leads: 28934, cpl: 0.80, qualified: 3183, cpql: 7.27, deals: 796, revenue: 76416, roas: 3.30 },
      // Jul 2025: Summer continuation — refining audiences, scaling what works. Moderate spend.
      { month: "Jul 2025", spend: 24583, leads: 29619, cpl: 0.83, qualified: 3258, cpql: 7.54, deals: 814, revenue: 78954, roas: 3.21 },
      // Aug 2025: Back-to-school ramp — college students gearing up, fall training season.
      { month: "Aug 2025", spend: 33891, leads: 38967, cpl: 0.87, qualified: 4676, cpql: 7.25, deals: 1169, revenue: 112224, roas: 3.31 },
      // Sep 2025: Back-to-school peak continues — campus campaigns, fall activewear demand.
      { month: "Sep 2025", spend: 34217, leads: 39329, cpl: 0.87, qualified: 4326, cpql: 7.91, deals: 1082, revenue: 102798, roas: 3.00 },
      // Oct 2025: Shoulder month — between back-to-school and holiday. Retargeting and audience building.
      { month: "Oct 2025", spend: 24834, leads: 27593, cpl: 0.90, qualified: 2759, cpql: 9.00, deals: 690, revenue: 62790, roas: 2.53 },
      // Nov 2025: BLACK FRIDAY + CYBER MONDAY — peak ecommerce, doorbuster deals, gifting.
      { month: "Nov 2025", spend: 35647, leads: 50924, cpl: 0.70, qualified: 6111, cpql: 5.83, deals: 1528, revenue: 141341, roas: 3.97 },
      // Dec 2025: Holiday tail — gift cards, last-minute shipping, continued holiday momentum.
      { month: "Dec 2025", spend: 31978, leads: 38426, cpl: 0.83, qualified: 4227, cpql: 7.57, deals: 964, revenue: 99434, roas: 3.11 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$674.0K", growth: "+187%" },
    { label: "Total Orders", value: "7,043", growth: "+154%" },
    { label: "Cost Per Acquisition", value: "$29.57", growth: "↓47%" },
    { label: "Blended ROAS", value: "3.24x", growth: "+112%" },
  ],
};
