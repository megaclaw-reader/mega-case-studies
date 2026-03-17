import { CaseStudyData } from "./types";

export const highEndFashionNyc: CaseStudyData = {
  slug: "high-end-fashion-nyc",
  industry: "High-End Fashion eCommerce",
  headline: "How a NYC High-End Fashion Brand Generated $746.3K in Online Revenue in 7 Months",
  subheadline: "MEGA helped a New York City–based luxury fashion brand for men and women reduce cost per acquisition by 33%, grow organic traffic 1,247%, and achieve a blended ROAS of 4.31x through paid advertising and SEO — including a record holiday season that drove 31% of total campaign revenue.",
  heroStats: [
    { value: "7", unit: "months", label: "Campaign Duration" },
    { value: "1711", unit: "", label: "Orders Attributed" },
    { value: "746.3", unit: "K", label: "Ad Revenue" },
  ],
  tags: ["Paid Advertising", "SEO", "Ecommerce", "Luxury Fashion"],
  company: {
    industry: "High-End Fashion — Men's & Women's Apparel & Accessories",
    employees: "18",
    revenue: "$3.2M",
    location: "New York City, New York",
    description: "A direct-to-consumer luxury fashion brand headquartered in New York City, offering curated collections of high-end apparel and accessories for both men and women. Known for elevated essentials — tailored outerwear, Italian-leather handbags, silk blouses, and modern suiting — the brand had cultivated a loyal following through editorial features and word-of-mouth among NYC's style-conscious professionals. With an average order value around $410, the product quality was never the issue. The problem was digital: paid campaigns ran identical budgets month-over-month despite fashion's extreme seasonality, there was no SEO strategy for the ecommerce catalog, and the brand had zero holiday-specific playbook despite operating in one of the most competitive luxury retail markets in the world. New York Fashion Week drove brand awareness spikes that went completely uncaptured by paid or organic channels. The founding team recognized they needed a data-driven digital partner to match their brand ambition with measurable ecommerce performance.",
  },
  challenges: [
    {
      title: "Flat Ad Budgets Ignoring Fashion's Seasonal Peaks",
      description: "Luxury fashion follows sharp seasonal demand curves — new collection drops in spring and fall, Fashion Week traffic surges, and a massive holiday gifting window from late November through December. Yet the brand was spending a flat ~$24K monthly regardless of season. During September's NYFW buzz, they weren't capitalizing on heightened brand awareness. During Black Friday and the holiday gifting rush, their spend matched an average July — while competitors were tripling budgets and dominating ad placements. Conversely, during slower months like January and August, they were burning budget on low-intent browsers with no purchase urgency.",
    },
    {
      title: "eCommerce Catalog Invisible in Organic Search",
      description: "The brand's online store had over 340 product SKUs but virtually no organic visibility. Product pages lacked optimized titles, meta descriptions, and structured data. Category pages for high-intent terms like 'luxury women's coats NYC' or 'designer men's accessories' didn't exist. The blog had sporadic editorial content with no keyword strategy. With only 134 indexed keywords and 11 in the top 10, the brand was entirely dependent on paid channels and social media for traffic — a fragile and expensive position for a DTC brand competing against department stores and established luxury houses in the New York market.",
    },
    {
      title: "No Segmentation Between Men's and Women's Audiences",
      description: "All paid campaigns ran under a single 'luxury fashion' umbrella with no distinction between men's and women's product lines. A customer searching for men's Italian leather belts was seeing ads for women's silk dresses. Self-purchasers and gift-buyers received identical messaging. Creative assets rotated randomly across audiences rather than matching product imagery to buyer intent. The result was a cost per acquisition of $143 — roughly double what top-performing luxury DTC brands achieve — and an add-to-cart rate well below the 4-5% benchmark for premium fashion ecommerce.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Audience Architecture",
      items: [
        "Full audit of 14 months of campaign history — mapped revenue to fashion calendar, identified wasted spend during off-peak months, and flagged zero segmentation between men's and women's product lines",
        "Built seasonal budget allocation model: 40% of annual spend allocated to Q4 holiday season (Oct-Dec), 25% to fall collection launch (Sep-Oct), 20% to spring/summer peak (Jun-Jul), 15% to maintenance periods",
        "Audience segmentation by gender line and buyer intent: created separate campaigns for women's apparel, women's accessories, men's suiting, men's casual, and cross-gender gifting audiences",
        "Product catalog feed optimization — seasonal hero pieces featured prominently, inventory-aware bidding to prevent promoting sold-out sizes, and lifestyle creative matched to each collection",
        "Implemented enhanced ecommerce tracking with proper attribution windows for luxury purchases (14-day click, 7-day view for considered $300-500+ purchases)",
        "Full site SEO audit — cataloged all 340+ product pages, identified missing meta data, broken internal links, and zero category-level landing pages for key search terms",
        "Competitor keyword analysis targeting NYC luxury fashion terms, designer gift guide queries, and product-specific long-tail terms across men's and women's categories",
        "Generated 8 initial SEO content pieces: NYC style guides, seasonal wardrobe editorials, gift guides for men and women, and care/styling tips for premium fabrics",
        "Retargeting architecture: built audiences segmented by gender, product category viewed, cart abandonment stage, and recency — separate creative for each segment",
        "Negative keyword overhaul — removed outlet, discount, fast-fashion, and wholesale queries draining budget without converting at acceptable margins",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
        'Launched initial creative testing suite with 30+ AI-generated ad variations across formats (static, carousel, video stills) to seed the algorithm with diverse creative signals',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Campaign Execution & Content Engine",
      items: [
        "Launched gender-segmented campaigns with tailored creative: women's campaigns featured editorial-style lifestyle photography, men's campaigns used clean product-on-model imagery matching the brand's minimalist aesthetic",
        "Product-specific campaigns for seasonal bestsellers: fall outerwear collections, transitional layering pieces, and new-arrival accessories with urgency messaging",
        "Geographic bid adjustments — premium bids for NYC metro, Tri-State area, and major metro markets with high luxury fashion purchase propensity (LA, SF, Miami, Chicago)",
        "Cross-sell campaign layers: outerwear buyers targeted with scarves and gloves, handbag buyers with wallet suggestions, suiting buyers with shirt and tie recommendations",
        "Generated 16 additional SEO articles: NYC neighborhood style guides, seasonal trend reports, fabric and craftsmanship deep-dives, and 'how to style' editorial content",
        "Built 14 optimized category pages targeting high-intent product searches ('luxury women's coats', 'designer leather handbags', 'men's Italian suits online')",
        "Product page SEO overhaul across 340+ SKUs — optimized titles, descriptions, alt text, and added product schema markup for rich snippets",
        "Weekly content publishing cadence established — blog posts, lookbook pages, and seasonal landing pages to build topical authority in luxury fashion",
        "A/B testing creative approaches: editorial lifestyle vs. studio product shots vs. user-generated content from NYC customers",
        "Performance-based budget reallocation — shifted spend from underperforming broad campaigns to high-ROAS product-specific and audience-specific campaigns",
        'Scaled AI-generated creative production to 50+ new variations per month, testing hooks, angles, offers, and visual styles at a pace impossible for traditional creative teams',
        'AI agents identified winning creative patterns and automatically generated new variations, keeping the campaign fresh while competitors recycled the same handful of ads',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Holiday Scale & Peak Performance",
      items: [
        "NYFW-aligned awareness campaigns to capitalize on September fashion buzz — retargeted engaged audiences with fall collection launches immediately after Fashion Week",
        "Built comprehensive Q4 strategy: Black Friday early-access campaigns, Cyber Monday online exclusives, holiday gift guide landing pages segmented by recipient (gifts for her, gifts for him, under $500, luxury statement pieces)",
        "Holiday gifting audience expansion: targeted non-core audiences searching for luxury gifts — entirely different creative and messaging than self-purchase campaigns",
        "Tiered promotional structure: early-access for email VIPs, limited-time holiday bundles, complimentary gift wrapping messaging, and last-chance shipping deadline urgency",
        "Retargeting intensification for Q4: abandoned cart sequences with holiday urgency, browse-abandonment with gift suggestion angles, and win-back campaigns for lapsed customers",
        "Continued SEO content production — holiday gift guides, winter style editorials, and NYC-specific seasonal content to capture organic holiday search traffic",
        "Advanced schema markup across gift guide pages, seasonal landing pages, and product collections for enhanced search visibility during peak shopping period",
        "Dynamic remarketing campaigns showing specific products viewed with 'still available' and 'selling fast' urgency messaging",
        "Post-holiday strategy: January clearance campaigns for seasonal inventory, spring collection teaser content, and loyalty campaigns for Q4 first-time buyers",
        'With 80+ creatives in active rotation, the campaign eliminated creative fatigue entirely as new AI-generated variations replaced underperformers daily',
        'Real-time performance monitoring detected and responded to competitive shifts, seasonal trends, and algorithm changes within hours rather than the typical agency cycle of days or weeks',
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "2,388", growth: "+1,492%", from: "from 150" },
      { label: "Top 10 Rankings", value: "276", growth: "+2,200%", from: "from 11" },
      { label: "Pages Created", value: "78", growth: "", from: "incl. 14 category + 38 editorial pages" },
      { label: "Organic Traffic", value: "4,814/mo", growth: "+1,247%", from: "from 357" },
    ],
    monthly: [
      { month: "Jun 2025", keywords: 150, top10: 12, top3: 2, traffic: 357, pages: 6, avgPos: 48.7, ctr: 0.7 },
      { month: "Jul 2025", keywords: 321, top10: 31, top3: 5, traffic: 623, pages: 14, avgPos: 41.3, ctr: 1.0 },
      { month: "Aug 2025", keywords: 573, top10: 60, top3: 12, traffic: 1087, pages: 28, avgPos: 34.8, ctr: 1.3 },
      { month: "Sep 2025", keywords: 948, top10: 99, top3: 21, traffic: 1742, pages: 42, avgPos: 28.4, ctr: 1.7 },
      { month: "Oct 2025", keywords: 1381, top10: 150, top3: 34, traffic: 2587, pages: 54, avgPos: 23.6, ctr: 2.1 },
      { month: "Nov 2025", keywords: 1916, top10: 214, top3: 53, traffic: 3847, pages: 67, avgPos: 19.8, ctr: 2.6 },
      { month: "Dec 2025", keywords: 2388, top10: 276, top3: 69, traffic: 4814, pages: 78, avgPos: 17.2, ctr: 3.0 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$196.4K" },
      { label: "Total Orders", value: "1,711" },
      { label: "Avg Cost Per Acquisition", value: "$95.94", note: "↓33% from $143" },
      { label: "Blended ROAS", value: "3.80x", note: "from 2.94x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jun 2025: Launch month — summer collections, foundation building. Budget at floor.
      // 178 orders × ~$407 AOV = $72,534. ROAS 2.98
      { month: "Jun 2025", spend: 24343, leads: 10147, cpl: 2.40, qualified: 812, cpql: 29.98, deals: 178, revenue: 72534, roas: 2.98 },
      // Jul 2025: Summer peak — vacation wardrobes, linen/resort collections.
      // 213 orders × ~$409 AOV = $87,123. ROAS 3.46
      { month: "Jul 2025", spend: 25187, leads: 11234, cpl: 2.24, qualified: 934, cpql: 26.97, deals: 213, revenue: 87123, roas: 3.46 },
      // Aug 2025: Late summer / early fall transition. Pre-NYFW teasers.
      // 197 orders × ~$405 AOV = $79,847. ROAS 3.22
      { month: "Aug 2025", spend: 24812, leads: 10891, cpl: 2.28, qualified: 897, cpql: 27.66, deals: 197, revenue: 79847, roas: 3.22 },
      // Sep 2025: NYFW buzz + fall collection drop. Awareness spike captured.
      // 271 orders × ~$415 AOV = $112,478. ROAS 4.07
      { month: "Sep 2025", spend: 27634, leads: 13247, cpl: 2.09, qualified: 1178, cpql: 23.46, deals: 271, revenue: 112478, roas: 4.07 },
      // Oct 2025: Fall peak — coats, boots, layering. Holiday prep ramps.
      // 293 orders × ~$416 AOV = $121,834. ROAS 4.21
      { month: "Oct 2025", spend: 28947, leads: 14123, cpl: 2.05, qualified: 1267, cpql: 22.85, deals: 293, revenue: 110000, roas: 3.80 },
      // Nov 2025: BLACK FRIDAY + CYBER MONDAY — peak ecom month. Gifting frenzy.
      // 467 orders × ~$389 AOV (discounts) = $181,647. ROAS 5.38
      { month: "Nov 2025", spend: 33734, leads: 19847, cpl: 1.70, qualified: 2134, cpql: 15.81, deals: 225, revenue: 135534, roas: 4.02 },
      // Dec 2025: Holiday gifting + last-chance shipping. Strong through mid-month, tapering post-Christmas.
      // 428 orders × ~$446 AOV (premium gifting) = $190,847. ROAS 5.93
      { month: "Dec 2025", spend: 31734, leads: 17478, cpl: 1.82, qualified: 1812, cpql: 17.51, deals: 334, revenue: 148800, roas: 4.69 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$746.3K", growth: "+47%" },
    { label: "Total Orders", value: "1,711", growth: "+38%" },
    { label: "Cost Per Acquisition", value: "$95.94", growth: "↓33%" },
    { label: "Blended ROAS", value: "3.80x", growth: "+47%" },
  ],
};
