import { CaseStudyData } from "./types";

export const internetServiceProvider: CaseStudyData = {
  slug: "internet-service-provider",
  industry: "Internet Service Provider",
  headline: "How a Regional Fiber ISP Grew Qualified Sign-Ups 247% Across 6 States by Aligning Paid Campaigns With Hyper-Local Availability Data",
  subheadline: "MEGA helped a fiber-optic internet provider scale monthly ad spend from $10K to $17.2K while cutting cost per qualified sign-up from $312 to $118 — generating $1.87M in new subscriber revenue over 10 months through availability-matched targeting and aggressive organic authority building.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "$1.87", unit: "M", label: "New Subscriber Revenue" },
    { value: "62", unit: "%", label: "CPQL Reduction" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Subscriber Acquisition", "Multi-State Expansion"],
  company: {
    industry: "Internet Service Provider — Fiber-Optic Broadband",
    employees: "87",
    revenue: "$11.6M",
    location: "Headquartered in Virginia — serving VA, NC, SC, GA, TN, and expanding into FL",
    description: "A growing fiber-optic internet service provider delivering residential and small business broadband across six southeastern states. The company had built a strong reputation for reliable gigabit service and responsive local support — differentiators against national cable and telecom incumbents. With 14,200 active subscribers and a network footprint covering 127 communities, they were aggressively expanding into new markets while trying to increase penetration in existing service areas. Their challenge was twofold: in established markets, they were losing share to aggressive pricing from cable competitors running $49.99/month promotional bundles. In new markets, they had zero brand awareness and were competing against entrenched providers with decades of name recognition. Digital marketing had been handled by an internal team of two — running basic campaigns with a flat $8K/month budget, a dated website with no address-level availability checker, and minimal organic presence outside their home state. They needed a partner who could build a scalable acquisition engine that worked across vastly different market maturity levels while keeping customer acquisition costs sustainable as they expanded.",
  },
  challenges: [
    {
      title: "Wasted Ad Spend on Prospects Outside the Service Footprint",
      description: "The biggest pain point was geographic precision. Unlike most businesses that serve an entire city, an ISP's serviceable area follows fiber routes — often covering some streets in a neighborhood but not others. The existing paid campaigns targeted entire metro areas and zip codes, meaning 35-40% of ad clicks came from addresses where the company couldn't actually provide service. These visitors would enter their address on the website, see 'service not available,' and bounce — representing thousands of dollars in wasted spend each month. There was no integration between the network availability database and campaign targeting, and the landing pages had no pre-qualification mechanism to filter out unserviceable addresses before a prospect engaged with the sales process.",
    },
    {
      title: "Near-Zero Organic Visibility in New and Existing Markets",
      description: "The company's website ranked for just 94 keywords nationally, almost all branded terms in their home state of Virginia. For high-intent searches like 'fiber internet [city name],' 'best internet provider [state],' 'gigabit internet near me,' and 'internet service [community name]' — they were invisible. National competitors like Comcast, AT&T, Spectrum, and Google Fiber dominated page one across every market they served. The website had a single generic 'Coverage Areas' page rather than individual city, community, or neighborhood pages — missing hundreds of long-tail local search opportunities. Content marketing was nonexistent beyond a blog with four posts from 2023.",
    },
    {
      title: "No Clear Differentiation Strategy Against Cable Incumbents",
      description: "In every market, the company was competing against providers offering $49.99 introductory bundles with massive brand awareness and marketing budgets. Their actual value proposition — symmetrical gigabit speeds, no data caps, no contract lock-ins, local customer support — wasn't being communicated effectively in campaigns or on the website. Ad copy was generic ('Fast Internet in [City]'), landing pages lacked speed comparison tools or testimonials from local customers, and there was no content strategy addressing the questions prospects actually asked: 'Is fiber worth it?', 'What's the difference between fiber and cable?', 'Why is my internet so slow?' The result was poor click-through rates and even poorer conversion rates against competitors who, despite inferior service, had decades of brand trust.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation: Availability Integration & Market Segmentation",
      items: [
        "Full site audit — technical SEO baseline across 127 community service areas, mobile performance, page speed, and crawlability assessment",
        "Integrated the company's fiber availability API into landing page pre-qualification — prospects enter their address before seeing pricing, ensuring every lead is in a serviceable area",
        "Built dedicated landing pages for each of the 6 states with city-level sub-pages for the 38 largest markets — each featuring local speed comparisons, customer testimonials, and address checker",
        "Keyword research across all 6 states — targeting 'internet provider [city],' 'fiber internet [state],' 'best internet [community],' speed comparison queries, and ISP switching intent terms",
        "Generated 18 initial content pieces — fiber vs. cable comparison guides, 'Is fiber worth it?' educational content, internet speed guides for remote workers and gamers, and 'switching from [competitor]' landing pages",
        "Implemented call tracking with source attribution — distinguishing residential inquiries from small business leads and tagging by market maturity (established vs. new expansion area)",
        "Technical SEO — schema markup for ISP service areas, FAQ schema for speed/pricing questions, broadband service structured data, and sitemap restructuring for 127+ community pages",
        "Launched initial paid campaigns segmented by state and market maturity at $10K/month — established Virginia markets received proven messaging while new expansion states received awareness-focused campaigns",
        "Competitor ad intelligence analysis — identified messaging gaps where cable competitors focused on price bundles while ignoring speed reliability, no-contract flexibility, and local support",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Market-Specific Optimization & Content Authority Building",
      items: [
        "Analyzed 30 days of availability-matched lead data — conversion rate from ad click to qualified sign-up jumped from 4.2% to 11.7% once unserviceable addresses were filtered pre-click",
        "Identified top-performing market segments: remote workers searching for upload speed terms converted 2.8x higher than general 'internet provider' searches — shifted budget allocation accordingly",
        "Generated 24 additional content pieces — community-specific internet guides ('Internet Options in [Community Name]'), work-from-home speed requirement calculators, gaming latency content, and small business bandwidth planning guides",
        "Launched programmatic community pages for all 127 service areas — each with local speed test data, coverage maps, nearby customer reviews, and competitive speed comparisons",
        "Built comparison landing pages: '[Company] vs. Comcast,' '[Company] vs. AT&T,' '[Company] vs. Spectrum' for each state — directly addressing the switching consideration with speed, price, and contract comparison tables",
        "Scaled budget to $10,400 based on 30-day CPQL data confirming availability-matching was eliminating wasted spend",
        "A/B tested ad messaging — 'No Data Caps, No Contracts' outperformed generic speed claims by 34% in click-through rate",
        "Retargeting campaigns for address-checker visitors who confirmed availability but didn't sign up — personalized by plan tier interest",
        "Small business campaign launch targeting office managers and IT decision-makers in commercial zones within the service footprint",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Expansion Market Acceleration & Organic Compounding",
      items: [
        "Community pages beginning to rank — 23 pages in top 20 positions for '[community] internet' queries, driving first meaningful organic sign-ups in expansion markets",
        "Phone call analysis revealed that prospects who mentioned 'switching from [competitor]' had 67% higher close rates — created dedicated switching campaigns with installation scheduling CTAs",
        "Scaled budget to $12,000 as CPQL continued declining — new expansion markets in NC and GA reaching cost efficiency within 15% of established VA markets",
        "Generated 14 additional technical content pieces — bandwidth calculator tools, fiber installation FAQ series, 'What to expect when switching' guides reducing post-sign-up churn",
        "Backlink acquisition campaign — local business partnerships, community sponsorship pages, technology publication features, and broadband industry directory listings",
        "Launched seasonal summer campaign targeting families and college students moving to areas within the service footprint — 'Move-In Internet Deals' with same-day installation messaging",
        "CRO optimization — simplified sign-up flow from 6 steps to 3, added real-time installation date selector, implemented chat support on pricing pages",
        "Small business segment refined — identified that medical offices, law firms, and real estate agencies had highest average revenue per account ($189/month vs. $79/month residential)",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Scaled Growth Engine & Multi-State Organic Dominance",
      items: [
        "Budget scaled from $13.2K to $17.2K as compounding data from availability-matched targeting drove CPQL steadily downward — each new month's data refined audience segments further",
        "Organic traffic surpassed 11,800 visits/month by month 10 — community pages ranking #1-3 for 'internet provider' queries in 31 of 127 service areas",
        "Content engine producing 8-12 pieces monthly — speed comparison updates, new community launch announcements, customer success stories, and broadband education content",
        "Florida expansion market campaigns launched with dedicated state-level budget allocation — leveraging playbook refined across VA, NC, SC, GA, and TN",
        "Back-to-school campaign (Aug-Sep) drove highest sign-up volume of the engagement — families upgrading for remote learning and streaming needs",
        "Automated reporting dashboard — real-time visibility into cost per sign-up by state, market maturity level, residential vs. business segment, and campaign type",
        "Ongoing A/B testing of landing page messaging by market — established markets responded to reliability/uptime messaging while new markets responded to speed comparison content",
        "Review generation program — 247 new reviews across business profiles in 6 states, improving local pack visibility in community-level searches",
        "By month 10, organic channel producing 189 qualified sign-ups/month at zero marginal acquisition cost — effectively subsidizing paid channel economics and enabling aggressive expansion market spending",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,347", growth: "+8,782%", from: "from 94" },
      { label: "Top 10 Rankings", value: "891", growth: "+8,810%", from: "from 10" },
      { label: "Pages Created", value: "312", growth: "", from: "incl. 127 community service pages" },
      { label: "Organic Traffic", value: "11,847/mo", growth: "+4,238%", from: "from 273" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 94, top10: 10, top3: 1, traffic: 273, pages: 14, avgPos: 52.3, ctr: 0.6 },
      { month: "Feb 2025", keywords: 187, top10: 18, top3: 2, traffic: 412, pages: 56, avgPos: 47.8, ctr: 0.7 },
      { month: "Mar 2025", keywords: 478, top10: 47, top3: 6, traffic: 893, pages: 112, avgPos: 39.4, ctr: 0.9 },
      { month: "Apr 2025", keywords: 1034, top10: 119, top3: 14, traffic: 1847, pages: 158, avgPos: 31.2, ctr: 1.2 },
      { month: "May 2025", keywords: 1893, top10: 213, top3: 28, traffic: 3214, pages: 189, avgPos: 26.7, ctr: 1.5 },
      { month: "Jun 2025", keywords: 2847, top10: 327, top3: 47, traffic: 4891, pages: 218, avgPos: 23.1, ctr: 1.7 },
      { month: "Jul 2025", keywords: 3912, top10: 448, top3: 68, traffic: 6423, pages: 247, avgPos: 20.8, ctr: 1.9 },
      { month: "Aug 2025", keywords: 5234, top10: 587, top3: 94, traffic: 8147, pages: 271, avgPos: 18.9, ctr: 2.1 },
      { month: "Sep 2025", keywords: 6847, top10: 741, top3: 127, traffic: 9923, pages: 294, avgPos: 17.3, ctr: 2.3 },
      { month: "Oct 2025", keywords: 8347, top10: 891, top3: 163, traffic: 11847, pages: 312, avgPos: 16.1, ctr: 2.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$131.1K" },
      { label: "Qualified Sign-Ups", value: "874" },
      { label: "Avg Cost Per Qualified Sign-Up", value: "$150", note: "↓62% from $312" },
      { label: "New Subscribers Activated", value: "637", note: "avg subscriber value $1,412/yr" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Sign-Ups",
      cpql: "Cost/Qualified",
      deals: "Activated Subscribers",
    },
    monthly: [
      // Jan 2025: $10K start, broad targeting, no availability filtering yet, high CPQL
      { month: "Jan 2025", spend: 10000, leads: 147, cpl: 68, qualified: 32, cpql: 312, deals: 21, revenue: 29652, roas: 2.97 },
      // Feb 2025: $10.4K, availability-matched landing pages go live mid-month
      { month: "Feb 2025", spend: 10400, leads: 168, cpl: 62, qualified: 47, cpql: 221, deals: 34, revenue: 48008, roas: 4.62 },
      // Mar 2025: $11.2K, full availability integration, CPQL drops significantly
      { month: "Mar 2025", spend: 11200, leads: 198, cpl: 57, qualified: 63, cpql: 178, deals: 46, revenue: 64952, roas: 5.80 },
      // Apr 2025: $12K, spring moving season boost + refined targeting
      { month: "Apr 2025", spend: 12000, leads: 224, cpl: 54, qualified: 79, cpql: 152, deals: 58, revenue: 81896, roas: 6.82 },
      // May 2025: $12.8K, switching campaigns performing well, moving season continues
      { month: "May 2025", spend: 12800, leads: 237, cpl: 54, qualified: 87, cpql: 147, deals: 63, revenue: 88956, roas: 6.95 },
      // Jun 2025: $13.2K, summer family installations + small business segment
      { month: "Jun 2025", spend: 13200, leads: 243, cpl: 54, qualified: 91, cpql: 145, deals: 67, revenue: 94604, roas: 7.17 },
      // Jul 2025: $13.8K, mid-summer — slight seasonal dip in urgency but efficiency holds
      { month: "Jul 2025", spend: 13800, leads: 228, cpl: 61, qualified: 84, cpql: 164, deals: 59, revenue: 83308, roas: 6.04 },
      // Aug 2025: $14.5K, back-to-school surge, families upgrading for remote learning
      { month: "Aug 2025", spend: 14500, leads: 267, cpl: 54, qualified: 108, cpql: 134, deals: 79, revenue: 111548, roas: 7.69 },
      // Sep 2025: $15.8K, continued back-to-school + FL expansion market launch
      { month: "Sep 2025", spend: 15800, leads: 289, cpl: 55, qualified: 121, cpql: 131, deals: 89, revenue: 125668, roas: 7.95 },
      // Oct 2025: $17.2K, peak efficiency — availability matching + 10 months of data refinement
      { month: "Oct 2025", spend: 17200, leads: 312, cpl: 55, qualified: 146, cpql: 118, deals: 108, revenue: 152496, roas: 8.87 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "847", growth: "+2,717%", note: "3/mo → 189/mo" },
      { label: "Address Checks (Organic)", value: "523", growth: "+2,615%", note: "2/mo → 117/mo" },
      { label: "Phone/Chat Inquiries", value: "324", growth: "+2,880%", note: "1/mo → 72/mo" },
      { label: "Avg Conversion Rate", value: "1.89%", note: "from organic traffic" },
    ],
    columnLabels: {
      formFills: "Address Checks",
      calls: "Phone/Chat",
      totalLeads: "Total Leads",
      conversionRate: "Conv. Rate",
    },
    monthly: [
      { month: "Jan 2025", formFills: 2, calls: 1, totalLeads: 3, conversionRate: 1.10 },
      { month: "Feb 2025", formFills: 4, calls: 2, totalLeads: 6, conversionRate: 1.46 },
      { month: "Mar 2025", formFills: 9, calls: 5, totalLeads: 14, conversionRate: 1.57 },
      { month: "Apr 2025", formFills: 21, calls: 12, totalLeads: 33, conversionRate: 1.79 },
      { month: "May 2025", formFills: 38, calls: 19, totalLeads: 57, conversionRate: 1.77 },
      { month: "Jun 2025", formFills: 54, calls: 28, totalLeads: 82, conversionRate: 1.68 },
      { month: "Jul 2025", formFills: 68, calls: 37, totalLeads: 105, conversionRate: 1.63 },
      { month: "Aug 2025", formFills: 87, calls: 49, totalLeads: 136, conversionRate: 1.67 },
      { month: "Sep 2025", formFills: 103, calls: 58, totalLeads: 161, conversionRate: 1.62 },
      { month: "Oct 2025", formFills: 117, calls: 72, totalLeads: 189, conversionRate: 1.60 },
    ],
    sources: [
      { source: "Organic Search", percentage: 61, leads: 517 },
      { source: "Community Pages (Direct)", percentage: 27, leads: 229 },
      { source: "Referral / Backlinks", percentage: 12, leads: 101 },
    ],
  },
  impact: [
    { label: "New Subscriber Revenue", value: "$1.87M", growth: "+412%" },
    { label: "Activated Subscribers", value: "637", growth: "+247%" },
    { label: "Cost Per Qualified Sign-Up", value: "$118", growth: "↓62%" },
    { label: "Blended ROAS", value: "6.52x", growth: "" },
  ],
};
