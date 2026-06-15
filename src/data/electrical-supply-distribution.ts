import { CaseStudyData } from "./types";

export const electricalSupplyDistribution: CaseStudyData = {
  slug: "electrical-supply-distribution",
  industry: "Electrical Supply",
  headline: "How a National Electrical Supply Distributor Generated $769K in Ecommerce Revenue With Paid Ads and SEO",
  subheadline: "MEGA deployed AI-powered always-on optimization and strategic SEO to help a B2B electrical supply distributor — already generating 3,500+ monthly organic sessions — grow paid advertising ROAS from 2.36x to 7.83x, triple organic traffic to 10,600+/mo, and generate over $768K in online orders across 12 months with a 5.25x blended ROAS.",
  heroStats: [
    { value: "$768.9", unit: "K", label: "Total Revenue" },
    { value: "5.3", unit: "x", label: "Blended ROAS" },
    { value: "2,227", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "SEO", "B2B"],
  company: {
    industry: "Electrical Supply / Distribution",
    employees: "42",
    revenue: "$11.5M",
    location: "National (USA)",
    description: "A national B2B electrical supply distributor selling electrical components, wiring, conduit, lighting fixtures, tools, and safety equipment through an online catalog to contractors, electricians, facility managers, and commercial businesses. The company had built steady wholesale relationships over two decades but was late to ecommerce — their online store launched just 18 months prior with minimal marketing investment. Despite carrying over 15,000 SKUs from major manufacturers, online revenue represented less than 8% of total sales. Paid advertising was managed in-house by a single marketing coordinator running flat-budget Google Shopping campaigns with no seasonal adjustments and no creative testing. Organic search visibility was negligible — the site ranked for fewer than 250 keywords, most of them branded terms. With an average online order value around $340, the business needed both paid efficiency and organic discovery to compete against electrical supply giants dominating search results and capture the growing wave of contractors ordering materials online rather than visiting physical branches.",
  },
  challenges: [
    {
      title: "Flat Budget Allocation Ignoring Construction and Seasonal Cycles",
      description: "Electrical supply demand follows clear seasonal and economic patterns — spring and summer construction booms drive surges in wire, conduit, panel, and fixture orders as commercial and residential projects ramp up. Late fall brings holiday lighting and retrofit demand. Yet the company spent a flat $10K monthly regardless of season, missing peak windows where contractors were placing large material orders for new projects. During high-demand months, they were being outbid on critical product categories by national competitors with sophisticated seasonal bidding strategies. During slower winter months, budget was burning on low-intent browsing traffic with poor conversion rates.",
    },
    {
      title: "Moderate Organic Traffic But No Commercial Keyword Dominance",
      description: "The website ranked for around 800 keywords and pulled roughly 3,500 monthly organic sessions — mostly from branded terms and a handful of long-tail product queries. But they held zero page-one positions for high-value commercial categories like 'industrial wire supplier,' 'circuit breaker wholesale,' or 'LED commercial lighting bulk.' Product pages had manufacturer-copied descriptions identical to dozens of competitor sites, and category pages for high-value segments had no unique content. The site had no resource section targeting the informational queries electricians and contractors search before placing bulk orders — terms like 'wire gauge chart,' 'NEC code requirements,' or 'commercial lighting layout guide.' The organic traffic they did generate converted poorly because it wasn't reaching buyers with purchase intent.",
    },
    {
      title: "No Buyer Segmentation Across Distinct Customer Types",
      description: "All campaigns ran under a single 'electrical supplies' umbrella with no differentiation between residential electricians ordering $200 in wire and connectors, commercial contractors placing $2,000+ conduit and panel orders, facility managers buying replacement fixtures, and DIY customers purchasing single outlets or switches. These audiences have vastly different average order values, purchase frequencies, product needs, and price sensitivities — yet they saw identical ads and landing pages. The lack of segmentation meant cost per visit sat at $2.87, well above the $1.20–$1.80 achievable with proper audience and product segmentation for B2B ecommerce.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Audit, Segmentation & SEO Foundation",
      items: [
        "Complete audit of historical campaign data — identified that 67% of ad spend was going to generic 'electrical supplies' terms competing against national chains, while high-intent product-specific terms like 'Romex 12/2 250ft' and '200 amp panel' were barely covered",
        "Built seasonal budget allocation model aligned to construction cycles: 40% of annual spend weighted to peak spring/summer (Apr–Aug), 25% to fall retrofit and holiday lighting season (Sep–Nov), 35% to winter baseline and planning season",
        "Product catalog segmentation into six campaign groups: wire and cable, circuit breakers and panels, lighting and fixtures, conduit and fittings, tools and test equipment, and safety/PPE",
        "Buyer persona segmentation: separate campaigns for commercial contractors (high AOV, bulk orders), residential electricians (medium AOV, frequent orders), facility managers (specific replacement needs), and DIY customers (low AOV, one-time purchases)",
        "Deployed always-on AI optimization agents directly within paid search and Microsoft Ads accounts — monitoring bid landscapes, adjusting Cost Per Visits based on real-time conversion signals, and reallocating budget between product categories continuously rather than relying on the previous weekly manual review",
        "Comprehensive technical SEO audit: resolved 1,247 duplicate product descriptions, added structured product data and schema markup to all SKU pages, fixed canonical issues across manufacturer variant pages blocking proper indexing",
        "Keyword research targeting 1,400+ commercial electrical supply terms across product categories with contractor-intent modifiers like 'bulk,' 'wholesale,' 'contractor pricing,' and specific part numbers",
        "Implemented enhanced ecommerce tracking with proper B2B attribution — longer click windows for considered bulk purchases and cross-device tracking for contractors researching on mobile and ordering on desktop",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Campaign Launch & Content Velocity",
      items: [
        "Launched spring construction season campaigns timed to permit activity spikes and new project starts — creative emphasized bulk pricing, fast shipping, and contractor account benefits",
        "Product-specific Shopping campaigns for high-demand spring items: Romex wire bundles, outdoor electrical boxes, GFCI outlets, panel upgrades, and underground feeder cable",
        "Category page content overhaul: wrote unique 1,000–1,500 word technical buying guides for top 35 product categories incorporating NEC code references, installation tips, and product comparison tables",
        "Published 14 SEO-optimized technical articles targeting informational queries electricians search before purchasing: 'wire gauge ampacity chart,' 'THHN vs THWN wire differences,' 'how to size a subpanel,' 'commercial lighting lumens per square foot' — each with internal links to relevant product pages",
        "AI agents identified that commercial contractor segments converted at 3.4x the rate of DIY traffic and automatically shifted 60% of budget to contractor-intent keywords and audiences within the first two weeks — a reallocation that would have taken a traditional agency a full monthly review cycle to identify and implement",
        "Built cross-sell campaign layers: wire buyers targeted with connector and box recommendations, panel buyers with breaker bundles, lighting fixture customers with dimmer and control packages",
        "Launched Google Shopping feed optimization with AI-enhanced product titles incorporating search terms contractors actually use rather than manufacturer catalog language",
      ],
    },
    {
      phase: 3,
      months: "60–90+ days",
      title: "Peak Season Scaling & Organic Compounding",
      items: [
        "Aggressive summer scaling with increased bids on high-converting product categories as construction activity peaked nationally — AI agents managed real-time bid adjustments across 23 active campaigns, automatically scaling budget to top performers during high-conversion windows",
        "Fall retrofit and lighting season push: campaigns targeting LED upgrade kits, commercial fixture replacements, holiday lighting controllers, and energy efficiency retrofit packages as building owners prepared for winter",
        "Black Friday and Cyber Monday execution: launched contractor-focused 'stock up' campaigns with bulk-order incentives — AI agents managed bid adjustments in real time across all product categories, capturing high-intent traffic from contractors placing year-end material orders at promotional pricing",
        "Content acceleration: published 18 additional technical guides, product comparison articles, and NEC code reference pages — bringing total new content to 47 pages across the engagement, establishing the site as a genuine technical resource for electrical professionals",
        "Backlink acquisition campaign secured 28 referring domains from electrical trade publications, contractor forums, code compliance resources, and industry association directories",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, and budget reallocations happening in real time rather than the typical weekly or biweekly agency review cycle, capturing opportunities that manual management consistently misses",
        "Post-holiday Q4 optimization: rather than cutting spend in December, AI agents identified year-end budget-flush purchasing from commercial accounts and maintained aggressive bidding on bulk wire, panel, and fixture orders — capturing revenue competitors left on the table by pulling back prematurely",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Organic Sessions (Mo 12)", value: "10,674/mo", growth: "+205%", from: "from 3,498" },
      { label: "Keywords Ranked", value: "5,423", growth: "+571%", from: "from 809" },
      { label: "Top 3 Rankings", value: "213", growth: "+609%", from: "from 30" },
      { label: "Organic Revenue (Est.)", value: "$487K", growth: "+283%", from: "from $127K annualized" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 809, top10: 134, top3: 30, traffic: 3498, pages: 24, avgPos: 28.7, ctr: 2.0 },
      { month: "Feb 2025", keywords: 923, top10: 152, top3: 36, traffic: 3812, pages: 31, avgPos: 27.1, ctr: 2.1 },
      { month: "Mar 2025", keywords: 1098, top10: 178, top3: 44, traffic: 4267, pages: 39, avgPos: 25.3, ctr: 2.3 },
      { month: "Apr 2025", keywords: 1334, top10: 213, top3: 54, traffic: 4823, pages: 46, avgPos: 23.6, ctr: 2.5 },
      { month: "May 2025", keywords: 1623, top10: 258, top3: 67, traffic: 5489, pages: 51, avgPos: 21.8, ctr: 2.7 },
      { month: "Jun 2025", keywords: 2012, top10: 312, top3: 83, traffic: 6234, pages: 55, avgPos: 20.1, ctr: 2.8 },
      { month: "Jul 2025", keywords: 2467, top10: 378, top3: 101, traffic: 7012, pages: 58, avgPos: 18.6, ctr: 3.0 },
      { month: "Aug 2025", keywords: 2934, top10: 443, top3: 119, traffic: 7823, pages: 61, avgPos: 17.2, ctr: 3.1 },
      { month: "Sep 2025", keywords: 3423, top10: 512, top3: 138, traffic: 8612, pages: 64, avgPos: 16.0, ctr: 3.2 },
      { month: "Oct 2025", keywords: 3978, top10: 578, top3: 159, traffic: 9423, pages: 67, avgPos: 15.1, ctr: 3.3 },
      { month: "Nov 2025", keywords: 4712, top10: 651, top3: 183, traffic: 10234, pages: 69, avgPos: 14.3, ctr: 3.4 },
      { month: "Dec 2025", keywords: 5423, top10: 724, top3: 213, traffic: 10674, pages: 71, avgPos: 13.7, ctr: 3.5 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$146.4K" },
      { label: "Total Orders", value: "2,227" },
      { label: "Avg Cost Per Visit", value: "$1.51", note: "↓47% from $2.87" },
      { label: "Blended ROAS", value: "5.3x", note: "from 2.36x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Winter baseline — slow construction season. Restructuring begins.
      { month: "Jan '25", spend: 10247, leads: 5630, cpl: 1.82, qualified: 400, cpql: 25.62, deals: 74, revenue: 24198, roas: 2.36 },
      // Feb 2025: Late winter — planning season, early orders for spring projects.
      { month: "Feb '25", spend: 10518, leads: 5909, cpl: 1.78, qualified: 437, cpql: 24.07, deals: 88, revenue: 29128, roas: 2.77 },
      // Mar 2025: Early spring — construction starts ramping.
      { month: "Mar '25", spend: 11234, leads: 6494, cpl: 1.73, qualified: 507, cpql: 22.16, deals: 106, revenue: 36252, roas: 3.23 },
      // Apr 2025: Spring construction boom begins.
      { month: "Apr '25", spend: 12847, leads: 7693, cpl: 1.67, qualified: 631, cpql: 20.36, deals: 146, revenue: 50808, roas: 3.95 },
      // May 2025: Peak spring — full construction season.
      { month: "May '25", spend: 13692, leads: 8504, cpl: 1.61, qualified: 740, cpql: 18.50, deals: 182, revenue: 61698, roas: 4.51 },
      // Jun 2025: Summer peak — commercial and residential projects at full capacity.
      { month: "Jun '25", spend: 14238, leads: 9245, cpl: 1.54, qualified: 841, cpql: 16.93, deals: 214, revenue: 75114, roas: 5.28 },
      // Jul 2025: Mid-summer — sustained high demand.
      { month: "Jul '25", spend: 13847, leads: 9170, cpl: 1.51, qualified: 862, cpql: 16.06, deals: 231, revenue: 79464, roas: 5.74 },
      // Aug 2025: Late summer — back-to-school facility upgrades.
      { month: "Aug '25", spend: 12934, leads: 8739, cpl: 1.48, qualified: 848, cpql: 15.25, deals: 234, revenue: 78624, roas: 6.08 },
      // Sep 2025: Fall — retrofit season begins. LED upgrades.
      { month: "Sep '25", spend: 11847, leads: 8114, cpl: 1.46, qualified: 803, cpql: 14.75, deals: 226, revenue: 79778, roas: 6.73 },
      // Oct 2025: Late fall — holiday lighting prep, year-end projects.
      { month: "Oct '25", spend: 11523, leads: 8058, cpl: 1.43, qualified: 814, cpql: 14.16, deals: 228, revenue: 79116, roas: 6.87 },
      // Nov 2025: BLACK FRIDAY — contractor stock-up promotions.
      { month: "Nov '25", spend: 13127, leads: 9512, cpl: 1.38, qualified: 1027, cpql: 12.78, deals: 287, revenue: 102746, roas: 7.83 },
      // Dec 2025: Year-end — commercial budget flush.
      { month: "Dec '25", spend: 10378, leads: 7360, cpl: 1.41, qualified: 758, cpql: 13.69, deals: 211, revenue: 71951, roas: 6.93 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$768.9K", growth: "+123% ROAS improvement" },
    { label: "Total Orders", value: "2,227", growth: "across 12 months" },
    { label: "Average Order Value", value: "$345", growth: "B2B electrical supplies" },
    { label: "Blended ROAS", value: "5.25x", growth: "from 2.36x starting" },
    { label: "Organic Traffic", value: "+205%", growth: "3,498→10,674/mo" },
    { label: "Keywords Ranked", value: "5,423", growth: "from 809" },
  ],
};
