import { CaseStudyData } from "./types";

export const fashionApparel: CaseStudyData = {
  slug: "fashion-apparel",
  industry: "Fashion & Apparel",
  headline: "How a National Women's Fashion Brand Scaled Ad Spend 4x and Generated $915.4K in Revenue Across a Full Seasonal Cycle",
  subheadline: "MEGA built a seasonal scaling framework for a direct-to-consumer women's apparel brand — ramping monthly ad spend from $10K to $40K during peak demand, driving 6,922 orders at a 3.89x blended ROAS, and building a 5,960-keyword organic presence generating 12,400 monthly visitors.",
  heroStats: [
    { value: "$915.4K", unit: "", label: "Ad-Attributed Revenue" },
    { value: "6,922", unit: "", label: "Orders" },
    { value: "3.89", unit: "x", label: "Blended ROAS" },
    { value: "12", unit: "months", label: "Campaign Duration" },
  ],
  tags: ["Paid Advertising", "SEO", "Ecommerce", "Fashion & Apparel"],
  company: {
    industry: "Ecommerce — Women's Fashion & Apparel",
    employees: "14",
    revenue: "$2.1M",
    location: "National (USA — DTC, headquartered in Chicago, IL)",
    description: "A direct-to-consumer women's fashion brand offering curated collections of contemporary casual and workwear — dresses, tops, bottoms, outerwear, and accessories. The company had built a following through strong product photography and an engaged social audience, but their paid advertising was running on autopilot with flat monthly budgets and no seasonal strategy. Their SEO presence was virtually nonexistent — the site had thin product descriptions, no blog content, and was invisible for non-branded searches. With an average order value around $127, margins required every dollar of ad spend to work harder. The founding team knew they were leaving revenue on the table during key shopping moments — back-to-school, fall fashion, Black Friday, and holiday gifting — but lacked the strategic framework to capitalize on them.",
  },
  challenges: [
    {
      title: "Flat Ad Spend With No Seasonal Strategy",
      description: "Fashion retail is one of the most seasonal ecommerce categories — back-to-school drives August demand, fall collections peak in September-October, and Black Friday through holiday gifting creates a massive Q4 surge. Yet the brand was spending a flat $8,000 monthly year-round. During peak shopping periods they were being outbid by competitors scaling aggressively, and during slower months like January and February they were burning budget on low-intent browsers. There was no framework connecting spend levels to seasonal demand curves, collection launches, or promotional calendar events.",
    },
    {
      title: "Zero Organic Visibility for Non-Branded Searches",
      description: "The site ranked for its brand name and little else. Product pages had generic one-line descriptions copied from suppliers. There was no blog, no style guide content, no size guide pages, and no category-level content targeting searches like 'women's workwear outfits' or 'casual summer dresses under $150.' Competitors with robust content strategies were capturing thousands of organic visitors monthly for high-intent fashion searches while this brand relied entirely on paid traffic — an expensive and unsustainable approach for a mid-market DTC brand.",
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
        "Built seasonal budget allocation model: 40% of annual spend concentrated in Q4 (Oct-Dec), 25% to back-to-school and fall launch (Aug-Sep), 20% to spring/summer (Apr-Jul), 15% to slow season (Jan-Mar)",
        "Campaign restructuring by product category: separate campaigns for dresses, tops & blouses, bottoms, outerwear, and accessories — each with category-specific ROAS targets",
        "Audience segmentation by lifecycle stage: prospecting, engaged browsers, cart abandoners, past purchasers, and lapsed customers with tailored creative and bidding for each",
        "Comprehensive technical SEO audit — fixed crawl errors, implemented structured data for products (price, availability, reviews), optimized site speed from 4.2s to 1.8s load time",
        "Keyword research identifying 2,400+ non-branded fashion search opportunities with commercial intent across product categories, style guides, and seasonal trends",
        "Content calendar built for 12 months: seasonal style guides, outfit inspiration posts, size and fit guides, trend roundups, and product category landing pages",
        "Enhanced ecommerce tracking implementation with proper attribution, add-to-cart tracking, and revenue reporting by campaign and product category",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence",
        "Launched initial creative testing suite with 10-15 AI-generated creative variations across formats (static, carousel, video stills) to seed the algorithm with diverse creative signals",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Spring Campaign Execution & Content Rollout",
      items: [
        "Launched category-specific campaigns with tailored creative — lifestyle imagery for prospecting, product-focused for retargeting, UGC-style for social proof campaigns",
        "Spring collection campaign with seasonal messaging around wardrobe refresh, vacation packing, and transitional weather dressing",
        "Built and published 18 SEO-optimized content pieces: seasonal style guides, capsule wardrobe articles, workwear outfit ideas, and trend analysis posts",
        "Created comprehensive size and fit guide pages for each product category — these became top organic landing pages within 3 months",
        "Cross-sell campaign layers: dress buyers targeted with accessory recommendations, top buyers shown complementary bottoms, outerwear browsers retargeted with complete outfit bundles",
        "Dynamic product feed optimization — seasonal hero products featured prominently, low-inventory items deprioritized, new arrivals given initial boost budgets",
        "Weekly performance-based budget reallocation between campaigns — shifting spend from underperforming categories to high-ROAS opportunities",
        "A/B testing creative formats: flat-lay photography vs. model lifestyle shots vs. customer review overlays across different audience segments",
        "Scaled AI-generated creative production to fresh creative variations each week, testing hooks, angles, offers, and visual styles at a pace impossible for traditional creative teams",
        "AI agents identified winning creative patterns and automatically generated new variations, keeping the campaign fresh while competitors recycled the same handful of ads",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Seasonal Scaling, Q4 Domination & SEO Compounding",
      items: [
        "Back-to-school campaign launch in August — ramped budget from $13K to $18K targeting workwear refreshes, campus fashion, and transitional summer-to-fall pieces",
        "Fall collection launch campaigns in September with urgency-driven creative around new arrivals, limited quantities, and seasonal must-haves — budget scaled to $22K",
        "October pre-holiday ramp to $28K — outerwear peak, layering content, and Black Friday audience building through engagement campaigns",
        "Comprehensive Black Friday and Cyber Monday strategy at $40K peak spend: early-access VIP deals, doorbuster pricing on bestsellers, gift bundle campaigns, and 'Gifts for Her' targeting for non-customer audiences",
        "Holiday gifting campaign at $35K in December targeting gift-givers with curated collections by price point ($50-100, $100-150, $150+) and recipient type",
        "SEO content engine fully operational — publishing 6-8 pieces monthly, targeting long-tail fashion queries, building topical authority in women's workwear and casual fashion",
        "Category landing page optimization with unique content, internal linking, and seasonal product curation driving organic conversions",
        "Post-holiday strategy: January budget pulled back to $10K for clearance campaigns, New Year wardrobe refresh messaging, and spring preview content to maintain momentum through Q1 slowdown",
        "Customer lifetime value analysis informing bidding strategy — willing to accept lower first-purchase ROAS for high-LTV customer segments identified by initial product category",
        "Real-time performance monitoring detected and responded to competitive shifts, seasonal trends, and algorithm changes within hours rather than the typical agency cycle of days or weeks",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "5,960", growth: "+2,880%", from: "from 200" },
      { label: "Top 10 Rankings", value: "412", growth: "+2,843%", from: "from 14" },
      { label: "Pages Created", value: "94", growth: "", from: "incl. 47 style guides & trend articles" },
      { label: "Organic Traffic", value: "12,400/mo", growth: "+1,450%", from: "from 800" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 200, top10: 14, top3: 2, traffic: 800, pages: 12, avgPos: 42.3, ctr: 1.2 },
      { month: "Feb 2025", keywords: 320, top10: 24, top3: 4, traffic: 1100, pages: 18, avgPos: 39.8, ctr: 1.4 },
      { month: "Mar 2025", keywords: 510, top10: 42, top3: 7, traffic: 1600, pages: 26, avgPos: 37.1, ctr: 1.6 },
      { month: "Apr 2025", keywords: 840, top10: 72, top3: 12, traffic: 2400, pages: 34, avgPos: 34.2, ctr: 1.8 },
      { month: "May 2025", keywords: 1280, top10: 108, top3: 18, traffic: 3400, pages: 42, avgPos: 31.4, ctr: 2.0 },
      { month: "Jun 2025", keywords: 1780, top10: 148, top3: 24, traffic: 4400, pages: 50, avgPos: 28.9, ctr: 2.2 },
      { month: "Jul 2025", keywords: 2340, top10: 192, top3: 31, traffic: 5500, pages: 57, avgPos: 26.7, ctr: 2.3 },
      { month: "Aug 2025", keywords: 3020, top10: 238, top3: 38, traffic: 6800, pages: 64, avgPos: 24.8, ctr: 2.5 },
      { month: "Sep 2025", keywords: 3780, top10: 286, top3: 46, traffic: 8200, pages: 72, avgPos: 23.1, ctr: 2.6 },
      { month: "Oct 2025", keywords: 4520, top10: 334, top3: 54, traffic: 9600, pages: 80, avgPos: 21.6, ctr: 2.7 },
      { month: "Nov 2025", keywords: 5280, top10: 378, top3: 62, traffic: 11200, pages: 88, avgPos: 20.3, ctr: 2.9 },
      { month: "Dec 2025", keywords: 5960, top10: 412, top3: 68, traffic: 12400, pages: 94, avgPos: 19.2, ctr: 3.0 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$235.3K" },
      { label: "Total Orders", value: "6,922" },
      { label: "Total Revenue", value: "$915.4K" },
      { label: "Blended ROAS", value: "3.89x", note: "from 2.1x baseline" },
      { label: "Avg Cost Per Visit", value: "$1.10", note: "↓41% from $1.87" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Post-holiday slowdown — clearance campaigns, lowest spend, Q1 rebuilding
      { month: "Jan 2025", spend: 10247, leads: 7426, cpl: 1.38, qualified: 371, cpql: 27.62, deals: 159, revenue: 18126, roas: 1.77 },
      // Feb 2025: Still slow — Valentine's bump, spring preview campaigns launching
      { month: "Feb 2025", spend: 10834, leads: 8085, cpl: 1.34, qualified: 421, cpql: 25.73, deals: 186, revenue: 21762, roas: 2.01 },
      // Mar 2025: Spring transition — wardrobe refresh messaging, new collection launch
      { month: "Mar 2025", spend: 12156, leads: 9497, cpl: 1.28, qualified: 522, cpql: 23.29, deals: 237, revenue: 28677, roas: 2.36 },
      // Apr 2025: Spring peak — strong seasonal demand, Easter shopping, warm weather prep
      { month: "Apr 2025", spend: 14378, leads: 11785, cpl: 1.22, qualified: 683, cpql: 21.05, deals: 318, revenue: 39432, roas: 2.74 },
      // May 2025: Late spring — wedding guest season, outdoor event dressing, summer preview
      { month: "May 2025", spend: 15423, leads: 13071, cpl: 1.18, qualified: 784, cpql: 19.67, deals: 366, revenue: 46116, roas: 2.99 },
      // Jun 2025: Early summer — vacation wardrobe, summer collections, slight seasonal dip
      { month: "Jun 2025", spend: 14687, leads: 12771, cpl: 1.15, qualified: 741, cpql: 19.82, deals: 345, revenue: 42090, roas: 2.87 },
      // Jul 2025: Mid-summer — consumers shift to experiences, mid-season sale, budget held back for BTS
      { month: "Jul 2025", spend: 13214, leads: 11798, cpl: 1.12, qualified: 649, cpql: 20.36, deals: 307, revenue: 36533, roas: 2.76 },
      // Aug 2025: Back-to-school surge — workwear refresh, campus fashion, fall transition pieces
      { month: "Aug 2025", spend: 18347, leads: 16988, cpl: 1.08, qualified: 1053, cpql: 17.42, deals: 510, revenue: 65280, roas: 3.56 },
      // Sep 2025: Fall collection launch — new arrivals excitement, layering season begins
      { month: "Sep 2025", spend: 22156, leads: 21304, cpl: 1.04, qualified: 1363, cpql: 16.26, deals: 660, revenue: 86460, roas: 3.90 },
      // Oct 2025: Pre-holiday ramp — outerwear peak, BF audience building, gift guide content
      { month: "Oct 2025", spend: 28423, leads: 29003, cpl: 0.98, qualified: 1914, cpql: 14.85, deals: 928, revenue: 126208, roas: 4.44 },
      // Nov 2025: BLACK FRIDAY / CYBER MONDAY — peak spend, doorbusters, gift bundles, highest conversion
      { month: "Nov 2025", spend: 40178, leads: 45657, cpl: 0.88, qualified: 3287, cpql: 12.22, deals: 1643, revenue: 231663, roas: 5.77 },
      // Dec 2025: Holiday gifting — strong but below BF, gift cards, last-minute deals, AOV boost from gift sets
      { month: "Dec 2025", spend: 35247, leads: 38312, cpl: 0.92, qualified: 2604, cpql: 13.54, deals: 1263, revenue: 173031, roas: 4.91 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$915.4K", growth: "+3.89x ROAS (from 2.1x baseline)" },
    { label: "Total Orders", value: "6,922", growth: "scaled $10K→$40K monthly" },
    { label: "Peak Month (Nov BF/CM)", value: "$231.7K", growth: "5.77x ROAS on $40K spend" },
    { label: "Avg Cost Per Visit", value: "$1.10", growth: "↓41% from $1.87" },
    { label: "Organic Traffic", value: "12,400/mo", growth: "+1,450%" },
    { label: "Organic Keywords", value: "5,960", growth: "+2,880%" },
  ],
};
