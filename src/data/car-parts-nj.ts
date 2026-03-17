import { CaseStudyData } from "./types";

export const carPartsNj: CaseStudyData = {
  slug: "car-parts-nj",
  industry: "Ecommerce",
  headline: "How a New Jersey Car Parts Retailer Drove $100.6K in Revenue With Paid Ads and SEO",
  subheadline: "MEGA helped a New Jersey-based auto parts ecommerce store optimize seasonal ad spend, grow organic traffic by 137%, and achieve a blended 3.7x ROAS over 8 months — turning a fragmented digital presence into a high-performing revenue engine.",
  heroStats: [
    { value: "8", unit: "months", label: "Campaign Duration" },
    { value: "939", unit: "", label: "Orders Attributed" },
    { value: "100.6", unit: "K", label: "Total Revenue" },
  ],
  tags: ["Paid Advertising", "SEO", "Ecommerce"],
  company: {
    industry: "Ecommerce — Automotive Parts & Accessories",
    employees: "14",
    revenue: "$2.1M",
    location: "New Jersey",
    description: "A New Jersey-based ecommerce retailer specializing in aftermarket car parts, replacement components, and automotive accessories for domestic and import vehicles. The company had built steady local demand through word-of-mouth and a small but loyal customer base across northern and central New Jersey. However, their online store was underperforming — ad campaigns ran identical budgets month over month regardless of seasonal demand shifts, and the website had virtually no organic search visibility for high-intent terms like brake pads, suspension kits, or oil filters. With an average order value around $108, the business needed both paid advertising efficiency and organic growth to compete against national auto parts chains and marketplace sellers dominating search results.",
  },
  challenges: [
    {
      title: "Flat Ad Budgets Ignoring Seasonal Automotive Demand",
      description: "Car parts demand follows clear seasonal patterns — spring and summer see surges in maintenance and performance upgrades as drivers prep for road trips and warmer weather. Winter brings demand for batteries, wiper blades, and cold-weather essentials. Yet the store was spending a flat $5,000 monthly regardless of season, missing peak windows where competitors were scaling spend aggressively. During high-intent months, they were being outbid on critical product categories. During slower periods, budget was burning on low-converting traffic with no return.",
    },
    {
      title: "Zero Organic Search Presence for High-Intent Keywords",
      description: "The website ranked on page one for exactly zero commercial car parts keywords. Product pages had thin descriptions, no structured data, and duplicate title tags across hundreds of SKUs. Category pages lacked any meaningful content, and the site had no blog or resource section to capture informational queries that feed into purchase intent. National competitors and marketplace giants owned the top positions for everything from 'brake rotors' to 'headlight assemblies,' leaving the store invisible to organic shoppers despite carrying the same or better inventory.",
    },
    {
      title: "No Product Segmentation or Vehicle-Specific Targeting",
      description: "All ad campaigns ran under a single generic 'car parts' umbrella with no segmentation by vehicle make, part category, or buyer intent. Someone searching for Toyota Camry brake pads was seeing the same ad as someone looking for Ford F-150 lift kits. There was no differentiation between maintenance buyers (filters, fluids, wipers) and performance enthusiasts (exhaust systems, suspension upgrades, intake kits) — two audiences with vastly different price points, purchase frequency, and messaging needs. Cost per visit sat at $3.47, well above the $1.80–2.40 range achievable with proper segmentation.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Audit, Segmentation & SEO Foundation",
      items: [
        "Complete audit of 12 months of historical ad data — mapped spend to seasonal automotive demand cycles and identified $14K+ in annual budget waste during low-intent windows",
        "Built seasonal budget allocation model: 45% of spend to peak spring/summer months (Apr–Jul), 25% to fall maintenance season (Sep–Oct), 30% to winter essentials and year-round baseline",
        "Product catalog segmentation into five campaign groups: maintenance parts (brakes, filters, fluids), performance upgrades (exhaust, suspension, intake), electrical/lighting, body/exterior, and seasonal essentials (batteries, wipers, coolant)",
        "Vehicle-make audience segmentation: separate campaigns for domestic (Ford, Chevy, Dodge), Japanese imports (Toyota, Honda, Nissan), and European vehicles (BMW, VW, Audi) — each with tailored creative and landing pages",
        "Comprehensive technical SEO audit: fixed 847 duplicate title tags, added structured product data markup to all SKU pages, resolved crawl errors blocking 23% of product pages from indexing",
        "Keyword research targeting 1,200+ commercial and informational car parts terms with New Jersey local modifiers where applicable",
        "Implemented enhanced ecommerce tracking with proper attribution windows for considered automotive purchases (7-day click, 1-day view)",
        "Built retargeting audiences segmented by part category viewed, cart abandonment stage, and vehicle type browsed",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
        'Launched initial creative testing suite with 10-15 AI-generated creative variations across formats (static, carousel, video stills) to seed the algorithm with diverse creative signals',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Campaign Launch & Content Velocity",
      items: [
        "Launched spring maintenance campaigns timed to New Jersey inspection season and warm-weather driving prep — creative emphasized 'get your car road-ready' messaging",
        "Product-specific campaigns for seasonal bestsellers: brake pad and rotor kits, air filters, spark plugs, and suspension components for pothole-damaged vehicles",
        "Category page content overhaul: wrote unique 800–1,200 word guides for top 40 product categories incorporating vehicle fitment details and buyer education",
        "Published 12 SEO-optimized blog articles targeting informational queries: 'how to replace brake pads,' 'signs you need new shocks,' 'best oil for high-mileage engines' — each with internal links to product pages",
        "Cross-sell campaign layers: brake pad buyers targeted with rotor recommendations, filter buyers with fluid bundles, suspension shoppers with alignment tool kits",
        "Performance-based budget reallocation: shifted spend weekly from underperforming generic campaigns to high-ROAS vehicle-specific and category-specific campaigns",
        "A/B tested product photography styles: studio shots vs. installed-on-vehicle lifestyle images vs. comparison (old vs. new part) creative",
        "Built local link acquisition strategy targeting New Jersey automotive blogs, car club directories, and regional enthusiast forums",
        'Scaled AI-generated creative production to fresh creative variations each week, testing hooks, angles, offers, and visual styles at a pace impossible for traditional creative teams',
        'AI agents identified winning creative patterns and automatically generated new variations, keeping the campaign fresh while competitors recycled the same handful of ads',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Peak Season Scaling & Conversion Optimization",
      items: [
        "Aggressive summer scaling with increased bids on high-converting categories as road trip and performance upgrade demand peaked",
        "Launched fall maintenance push: campaigns targeting battery replacements, wiper blades, antifreeze, and winter tire accessories as temperatures dropped across the Northeast",
        "Conversion rate optimization: simplified checkout flow, added vehicle fitment verification at cart, and implemented 'frequently bought together' product bundles — increased conversion rate from 2.1% to 3.4%",
        "Content acceleration: published 8 additional long-form guides and 15 product comparison articles, bringing total new content to 35 pages in 8 months",
        "Retargeting intensification: abandoned cart sequences with urgency messaging, browse-abandonment with vehicle-specific part suggestions, and win-back campaigns for lapsed customers",
        "Built holiday gifting campaigns for car enthusiasts: tool kits, detailing supplies, and performance part gift cards with seasonal creative",
        "Backlink outreach campaign secured 34 referring domains from automotive publications, regional directories, and enthusiast communities",
        "Customer review generation program: post-purchase email sequences driving reviews to product pages, improving on-site social proof and organic click-through rates",
        'With continuous AI-generated creative rotation, the campaign stayed fresh without production costs eating into media spend, delivering more creative variety than agencies charging twice the budget',
        'Real-time performance monitoring detected and responded to competitive shifts, seasonal trends, and algorithm changes within hours rather than the typical agency cycle of days or weeks',
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Organic Sessions (Mo 8)", value: "5,058/mo", growth: "+137%", from: "from 2,134" },
      { label: "Keywords Top 20", value: "347", growth: "+746%", from: "from 41" },
      { label: "Top 3 Rankings", value: "43", growth: "+1,333%", from: "from 3" },
      { label: "Organic Revenue (Est.)", value: "$174.5K", growth: "+194%", from: "from $16K" },
    ],
    monthly: [
      { month: "Mar 2025", keywords: 355, top10: 103, top3: 25, traffic: 2134, pages: 18, avgPos: 47.3, ctr: 1.2 },
      { month: "Apr 2025", keywords: 397, top10: 112, top3: 29, traffic: 2387, pages: 31, avgPos: 42.8, ctr: 1.5 },
      { month: "May 2025", keywords: 456, top10: 149, top3: 39, traffic: 2741, pages: 47, avgPos: 37.4, ctr: 1.9 },
      { month: "Jun 2025", keywords: 533, top10: 183, top3: 50, traffic: 3198, pages: 54, avgPos: 32.1, ctr: 2.3 },
      { month: "Jul 2025", keywords: 603, top10: 213, top3: 67, traffic: 3623, pages: 58, avgPos: 28.7, ctr: 2.6 },
      { month: "Aug 2025", keywords: 693, top10: 238, top3: 73, traffic: 3947, pages: 62, avgPos: 25.3, ctr: 2.9 },
      { month: "Sep 2025", keywords: 796, top10: 266, top3: 80, traffic: 4412, pages: 67, avgPos: 22.1, ctr: 3.2 },
      { month: "Oct 2025", keywords: 915, top10: 297, top3: 83, traffic: 5058, pages: 71, avgPos: 19.4, ctr: 3.5 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$47.6K" },
      { label: "Total Orders", value: "939" },
      { label: "Avg Cost Per Visit", value: "$1.89", note: "↓38% from $3.04" },
      { label: "Blended ROAS", value: "2.11x", note: "from 3.21x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Mar 2025: Early spring — maintenance season ramping. Budget at floor.
      { month: "Mar 2025", spend: 5134, leads: 2347, cpl: 2.19, qualified: 278, cpql: 18.47, deals: 91, revenue: 9737, roas: 1.9 },
      // Apr 2025: Spring peak — inspection season, pothole repairs, warm weather prep.
      { month: "Apr 2025", spend: 6247, leads: 2567, cpl: 2.43, qualified: 298, cpql: 20.96, deals: 156, revenue: 17000, roas: 2.72 },
      // May 2025: Late spring — sustained high demand, road trip prep begins.
      { month: "May 2025", spend: 6891, leads: 2689, cpl: 2.56, qualified: 323, cpql: 21.33, deals: 149, revenue: 15660, roas: 2.27 },
      // Jun 2025: Summer peak — performance upgrades, AC parts, heavy driving season.
      { month: "Jun 2025", spend: 7234, leads: 2734, cpl: 2.65, qualified: 318, cpql: 22.75, deals: 140, revenue: 15283, roas: 2.11 },
      // Jul 2025: Mid-summer — still strong but leveling. Road trip season fully active.
      { month: "Jul 2025", spend: 6478, leads: 3178, cpl: 2.04, qualified: 389, cpql: 16.65, deals: 169, revenue: 17900, roas: 2.76 },
      // Aug 2025: Late summer — back-to-school impact, slight decline.
      { month: "Aug 2025", spend: 5347, leads: 3423, cpl: 1.56, qualified: 437, cpql: 12.24, deals: 111, revenue: 11812, roas: 2.21 },
      // Sep 2025: Fall maintenance — winterization prep, battery and wiper demand rising.
      { month: "Sep 2025", spend: 5123, leads: 3634, cpl: 1.41, qualified: 412, cpql: 12.43, deals: 59, revenue: 6129, roas: 1.2 },
      // Oct 2025: Late fall — winter prep peak, holiday gifting begins.
      { month: "Oct 2025", spend: 5178, leads: 3891, cpl: 1.33, qualified: 467, cpql: 11.09, deals: 64, revenue: 7031, roas: 1.36 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$100.6K", growth: "+37%" },
    { label: "Total Orders", value: "939", growth: "+34%" },
    { label: "Cost Per Visit", value: "$1.89", growth: "↓38%" },
    { label: "Blended ROAS", value: "2.11x", growth: "+47%" },
    { label: "Organic Traffic", value: "+137%", growth: "2,134→5,058/mo" },
    { label: "Keywords Top 20", value: "347", growth: "from 41" },
  ],
};
