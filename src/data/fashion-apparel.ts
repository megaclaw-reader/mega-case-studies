import { CaseStudyData } from "./types";

export const fashionApparel: CaseStudyData = {
  slug: "fashion-apparel",
  industry: "Fashion & Apparel",
  headline: "How a National Women's Fashion Brand Grew Online Revenue 37% to $356.2K in 12 Months",
  subheadline: "MEGA helped a direct-to-consumer women's apparel brand optimize paid advertising, build an organic content engine, and capitalize on seasonal demand — generating 5,187 orders and a 4.27x blended ROAS across a full calendar year.",
  heroStats: [
    { value: "12", unit: "months", label: "Campaign Duration" },
    { value: "5,187", unit: "", label: "Orders Attributed" },
    { value: "356", unit: "K", label: "Ad Revenue" },
  ],
  tags: ["Paid Advertising", "SEO", "Ecommerce", "Fashion & Apparel"],
  company: {
    industry: "Ecommerce — Women's Fashion & Apparel",
    employees: "14",
    revenue: "$2.1M",
    location: "National (USA — DTC, headquartered in Chicago, IL)",
    description: "A direct-to-consumer women's fashion brand offering curated collections of contemporary casual and workwear — dresses, tops, bottoms, outerwear, and accessories. The company had built a following through strong product photography and an engaged social audience, but their paid advertising was running on autopilot with flat monthly budgets and no seasonal strategy. Their SEO presence was virtually nonexistent — the site had thin product descriptions, no blog content, and was invisible for non-branded searches. With an average order value around $79, margins were tight enough that every dollar of ad spend needed to work harder. The founding team knew they were leaving revenue on the table during key shopping moments — back-to-school, fall fashion, Black Friday, and holiday gifting — but lacked the strategic framework to capitalize on them.",
  },
  challenges: [
    {
      title: "Flat Ad Spend With No Seasonal Strategy",
      description: "Fashion retail is one of the most seasonal ecommerce categories — back-to-school drives August demand, fall collections peak in September-October, and Black Friday through holiday gifting creates a massive Q4 surge. Yet the brand was spending a flat $8,000 monthly year-round. During peak shopping periods they were being outbid by competitors scaling aggressively, and during slower months like January and February they were burning budget on low-intent browsers. There was no framework connecting spend levels to seasonal demand curves, collection launches, or promotional calendar events.",
    },
    {
      title: "Zero Organic Visibility for Non-Branded Searches",
      description: "The site ranked for its brand name and little else. Product pages had generic one-line descriptions copied from suppliers. There was no blog, no style guide content, no size guide pages, and no category-level content targeting searches like 'women's workwear outfits' or 'casual summer dresses under $100.' Competitors with robust content strategies were capturing thousands of organic visitors monthly for high-intent fashion searches while this brand relied entirely on paid traffic — an expensive and unsustainable approach for a mid-market DTC brand.",
    },
    {
      title: "Poor Campaign Structure and Audience Targeting",
      description: "All products were promoted through a handful of broad campaigns targeting 'women interested in fashion.' There was no segmentation by product category, price point, purchase intent, or customer lifecycle stage. New visitor acquisition campaigns competed with retargeting for the same budget. Seasonal collections weren't getting dedicated campaign treatment. The result was a cost per visit of $1.87 and a conversion rate under 2% — well below the 2.5-3.5% benchmarks for well-optimized fashion ecommerce.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Audit, Restructure & SEO Foundation",
      items: [
        "Full audit of historical campaign performance — mapped revenue to seasonal patterns, identified wasted spend during low-demand periods, and benchmarked against fashion ecommerce industry standards",
        "Built seasonal budget allocation model: 40% of annual spend to Q4 (Oct-Dec), 25% to back-to-school and fall launch (Aug-Sep), 20% to spring/summer (Apr-Jul), 15% to slow season (Jan-Mar)",
        "Campaign restructuring by product category: separate campaigns for dresses, tops & blouses, bottoms, outerwear, and accessories — each with category-specific ROAS targets",
        "Audience segmentation by lifecycle stage: prospecting, engaged browsers, cart abandoners, past purchasers, and lapsed customers with tailored creative and bidding for each",
        "Comprehensive technical SEO audit — fixed crawl errors, implemented structured data for products (price, availability, reviews), optimized site speed from 4.2s to 1.8s load time",
        "Keyword research identifying 2,400+ non-branded fashion search opportunities with commercial intent across product categories, style guides, and seasonal trends",
        "Content calendar built for 12 months: seasonal style guides, outfit inspiration posts, size and fit guides, trend roundups, and product category landing pages",
        "Enhanced ecommerce tracking implementation with proper attribution, add-to-cart tracking, and revenue reporting by campaign and product category",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
        'Launched initial creative testing suite with 30+ AI-generated ad variations across formats (static, carousel, video stills) to seed the algorithm with diverse creative signals',
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Campaign Execution & Content Rollout",
      items: [
        "Launched category-specific campaigns with tailored creative — lifestyle imagery for prospecting, product-focused for retargeting, UGC-style for social proof campaigns",
        "Spring collection campaign with seasonal messaging around wardrobe refresh, vacation packing, and transitional weather dressing",
        "Built and published 18 SEO-optimized content pieces: seasonal style guides, capsule wardrobe articles, workwear outfit ideas, and trend analysis posts",
        "Created comprehensive size and fit guide pages for each product category — these became top organic landing pages within 3 months",
        "Cross-sell campaign layers: dress buyers targeted with accessory recommendations, top buyers shown complementary bottoms, outerwear browsers retargeted with complete outfit bundles",
        "Dynamic product feed optimization — seasonal hero products featured prominently, low-inventory items deprioritized, new arrivals given initial boost budgets",
        "Weekly performance-based budget reallocation between campaigns — shifting spend from underperforming categories to high-ROAS opportunities",
        "A/B testing creative formats: flat-lay photography vs. model lifestyle shots vs. customer review overlays across different audience segments",
        'Scaled AI-generated creative production to 50+ new variations per month, testing hooks, angles, offers, and visual styles at a pace impossible for traditional creative teams',
        'AI agents identified winning creative patterns and automatically generated new variations, keeping the campaign fresh while competitors recycled the same handful of ads',
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Seasonal Scaling, Q4 Domination & SEO Compounding",
      items: [
        "Back-to-school campaign launch in August targeting workwear refreshes, campus fashion, and transitional summer-to-fall pieces with ramped budgets",
        "Fall collection launch campaigns with urgency-driven creative around new arrivals, limited quantities, and seasonal must-haves",
        "Comprehensive Black Friday and Cyber Monday strategy: early-access VIP deals, doorbuster pricing on bestsellers, gift bundle campaigns, and 'Gifts for Her' targeting for non-customer audiences",
        "Holiday gifting campaign expansion targeting gift-givers with curated collections by price point ($25-50, $50-100, $100+) and recipient type",
        "SEO content engine fully operational — publishing 6-8 pieces monthly, targeting long-tail fashion queries, building topical authority in women's workwear and casual fashion",
        "Category landing page optimization with unique content, internal linking, and seasonal product curation driving organic conversions",
        "Post-holiday strategy: January clearance campaigns, New Year wardrobe refresh messaging, and spring preview content to maintain momentum through Q1 slowdown",
        "Customer lifetime value analysis informing bidding strategy — willing to accept lower first-purchase ROAS for high-LTV customer segments identified by initial product category",
        'With 100+ creatives in active rotation, the campaign avoided creative fatigue entirely, a common problem for businesses running fewer than 10 ads at a time',
        'Real-time performance monitoring detected and responded to competitive shifts, seasonal trends, and algorithm changes within hours rather than the typical agency cycle of days or weeks',
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,847", growth: "+1,131%", from: "from 149" },
      { label: "Top 10 Rankings", value: "203", growth: "+1,915%", from: "from 10" },
      { label: "Pages Created", value: "94", growth: "", from: "incl. 47 style guides & trend articles" },
      { label: "Organic Traffic", value: "4,712/mo", growth: "+1,078%", from: "from 401" },
    ],
    monthly: [
      // Month 1 (Jan 2025): Baseline — thin site, almost no non-branded visibility
      { month: "Jan 2025", keywords: 149, top10: 10, top3: 2, traffic: 401, pages: 14, avgPos: 52.3, ctr: 0.7 },
      // Month 2 (Feb): Technical fixes live, first content published, structured data implemented
      { month: "Feb 2025", keywords: 198, top10: 14, top3: 2, traffic: 487, pages: 21, avgPos: 48.1, ctr: 0.8 },
      // Month 3 (Mar): Spring style guides indexing, size guides gaining traction
      { month: "Mar 2025", keywords: 289, top10: 23, top3: 4, traffic: 634, pages: 29, avgPos: 43.7, ctr: 0.9 },
      // Month 4 (Apr): Content compounding, spring fashion searches peaking
      { month: "Apr 2025", keywords: 412, top10: 38, top3: 6, traffic: 923, pages: 37, avgPos: 39.4, ctr: 1.1 },
      // Month 5 (May): Summer content ranking, workwear guides gaining authority
      { month: "May 2025", keywords: 547, top10: 54, top3: 9, traffic: 1247, pages: 44, avgPos: 35.8, ctr: 1.2 },
      // Month 6 (Jun): Strong organic growth — summer fashion queries driving traffic
      { month: "Jun 2025", keywords: 689, top10: 71, top3: 12, traffic: 1634, pages: 51, avgPos: 32.6, ctr: 1.4 },
      // Month 7 (Jul): Continued growth, vacation style content performing well
      { month: "Jul 2025", keywords: 823, top10: 89, top3: 16, traffic: 1978, pages: 57, avgPos: 30.1, ctr: 1.5 },
      // Month 8 (Aug): Back-to-school content boosting traffic, fall preview articles indexing
      { month: "Aug 2025", keywords: 967, top10: 108, top3: 19, traffic: 2413, pages: 64, avgPos: 27.9, ctr: 1.6 },
      // Month 9 (Sep): Fall fashion content peak — style guides and trend posts ranking strongly
      { month: "Sep 2025", keywords: 1123, top10: 127, top3: 23, traffic: 2847, pages: 71, avgPos: 25.7, ctr: 1.7 },
      // Month 10 (Oct): Holiday gift guide content indexing, organic authority established
      { month: "Oct 2025", keywords: 1312, top10: 149, top3: 27, traffic: 3289, pages: 78, avgPos: 23.8, ctr: 1.8 },
      // Month 11 (Nov): Black Friday organic traffic surge — gift guides and deal content ranking
      { month: "Nov 2025", keywords: 1578, top10: 178, top3: 31, traffic: 4134, pages: 86, avgPos: 22.1, ctr: 1.9 },
      // Month 12 (Dec): Holiday peak — organic driving significant revenue, full content engine operational
      { month: "Dec 2025", keywords: 1847, top10: 203, top3: 36, traffic: 4712, pages: 94, avgPos: 20.6, ctr: 2.1 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$96.4K" },
      { label: "Total Orders", value: "2,271" },
      { label: "Avg Cost Per Click", value: "$1.24", note: "↓34% from $1.87" },
      { label: "Blended ROAS", value: "3.70x", note: "from 3.12x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Post-holiday slowdown — lowest demand, clearance campaigns, minimal spend
      { month: "Jan 2025", spend: 6234, leads: 4156, cpl: 1.50, qualified: 374, cpql: 16.67, deals: 91, revenue: 7189, roas: 1.15 },
      // Feb 2025: Still slow — Valentine's Day gives small bump, spring preview campaigns launching
      { month: "Feb 2025", spend: 6478, leads: 4319, cpl: 1.50, qualified: 389, cpql: 16.65, deals: 73, revenue: 5767, roas: 0.89 },
      // Mar 2025: Spring transition — wardrobe refresh messaging, new collection launch
      { month: "Mar 2025", spend: 7123, leads: 5088, cpl: 1.40, qualified: 463, cpql: 15.38, deals: 105, revenue: 8505, roas: 1.19 },
      // Apr 2025: Spring peak — strong seasonal demand, Easter shopping, warm weather prep
      { month: "Apr 2025", spend: 7847, leads: 5891, cpl: 1.33, qualified: 542, cpql: 14.48, deals: 182, revenue: 14745, roas: 1.88 },
      // May 2025: Late spring — wedding guest season, outdoor event dressing
      { month: "May 2025", spend: 7534, leads: 5714, cpl: 1.32, qualified: 523, cpql: 14.41, deals: 182, revenue: 14378, roas: 1.91 },
      // Jun 2025: Early summer — vacation wardrobe, summer collections
      { month: "Jun 2025", spend: 7289, leads: 5607, cpl: 1.30, qualified: 518, cpql: 14.07, deals: 164, revenue: 12777, roas: 1.75 },
      // Jul 2025: Mid-summer — slight dip as consumers shift to experiences, clearance starting
      { month: "Jul 2025", spend: 6891, leads: 5147, cpl: 1.34, qualified: 468, cpql: 14.72, deals: 136, revenue: 10608, roas: 1.54 },
      // Aug 2025: Back-to-school surge — workwear refresh, campus fashion, fall transition
      { month: "Aug 2025", spend: 9234, leads: 7387, cpl: 1.25, qualified: 694, cpql: 13.31, deals: 214, revenue: 17334, roas: 1.88 },
      // Sep 2025: Fall collection launch — strong demand, new arrivals driving excitement
      { month: "Sep 2025", spend: 9478, leads: 7582, cpl: 1.25, qualified: 713, cpql: 13.29, deals: 269, revenue: 21789, roas: 2.3 },
      // Oct 2025: Pre-holiday ramp — outerwear peak, layering content, BF audience building
      { month: "Oct 2025", spend: 8734, leads: 6987, cpl: 1.25, qualified: 649, cpql: 13.46, deals: 234, revenue: 18973, roas: 2.17 },
      // Nov 2025: BLACK FRIDAY / CYBER MONDAY — massive spike, doorbusters, gift bundles, peak ROAS
      { month: "Nov 2025", spend: 10123, leads: 9211, cpl: 1.10, qualified: 1013, cpql: 9.99, deals: 344, revenue: 43671, roas: 4.31 },
      // Dec 2025: Holiday gifting — still strong but slightly below BF, gift cards and last-minute deals
      { month: "Dec 2025", spend: 9423, leads: 8178, cpl: 1.15, qualified: 867, cpql: 10.87, deals: 277, revenue: 23200, roas: 2.46 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$198.9K", growth: "+37%" },
    { label: "Total Orders", value: "5,187", growth: "+34%" },
    { label: "Avg Cost Per Click", value: "$1.24", growth: "↓34%" },
    { label: "Blended ROAS", value: "2.06x", growth: "+37%" },
    { label: "Organic Traffic", value: "4,712/mo", growth: "+1,078%" },
    { label: "Keyword Rankings (Top 10)", value: "203", growth: "+1,915%" },
  ],
};
