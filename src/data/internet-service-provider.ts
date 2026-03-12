import { CaseStudyData } from "./types";

export const internetServiceProvider: CaseStudyData = {
  slug: "internet-service-provider",
  industry: "Internet Service Provider",
  headline: "How a National ISP Scaled Subscriber Acquisition 218% With AI-Driven Paid Campaigns and a Content-Led SEO Strategy",
  subheadline: "MEGA helped a nationwide internet service provider grow monthly ad spend from $10K to $18.4K while cutting cost per qualified lead from $287 to $152 — generating $430.4K in attributed first-year subscriber revenue over 10 months.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "430", unit: "K", label: "Revenue Attributed" },
    { value: "47", unit: "%", label: "CPQL Reduction" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Subscriber Acquisition", "National Scaling"],
  company: {
    industry: "Internet Service Provider — Fiber & Broadband",
    employees: "312",
    revenue: "$38.7M",
    location: "Nationwide United States",
    description: "A mid-sized national internet service provider offering fiber, fixed wireless, and hybrid broadband plans to residential and SMB customers across 23 states. The company had built strong infrastructure in secondary and tertiary markets where national cable giants underinvested, positioning itself as a high-speed, low-contract alternative with plans ranging from $49.99/month residential to $299/month dedicated business fiber. Despite a 4.4-star average across 2,100+ reviews and genuine product-market fit in underserved markets, their digital marketing lagged well behind their infrastructure buildout. Paid campaigns were broad, untargeted, and hemorrhaging budget on unqualified clicks from users outside serviceable areas. Organic visibility was virtually nonexistent in newer markets, and the website lacked localized content for the majority of their 180+ service areas. They needed a scalable acquisition engine that could keep pace with their aggressive expansion into 15 new markets planned for 2025.",
  },
  challenges: [
    {
      title: "Nationwide Expansion With No Scalable Digital Acquisition Strategy",
      description: "The company operated in 23 states but only had meaningful digital presence in 6 of their original markets. New market launches relied almost entirely on direct mail, billboard advertising, and local radio — channels with no attribution and declining response rates. Their website had zero market-specific landing pages, meaning a potential customer in Boise searching 'fast internet near me' landed on the same generic homepage as someone in Knoxville. Paid campaigns were geo-targeted broadly by state rather than by actual service area, resulting in 41% of ad clicks coming from addresses outside their coverage footprint. The cost per qualified lead had ballooned to $287 as expansion accelerated, and the sales team was spending 35% of their time fielding inquiries from people they couldn't actually serve.",
    },
    {
      title: "Competing Against Cable Incumbents With 10x the Ad Budget",
      description: "In every market, they faced entrenched competitors — Comcast, Spectrum, Cox, CenturyLink — with marketing budgets 10-50x larger and decades of brand recognition. Their generic ad copy ('High-speed internet, low prices') was indistinguishable from competitor messaging and failed to communicate the real advantages: symmetrical upload speeds, no data caps, no annual contracts, and local customer support with under-60-second hold times. Landing page conversion rate sat at 1.9%, well below the 4-5% benchmark for ISP pages with differentiated positioning. Potential subscribers simply couldn't tell why they should switch from a known brand to this provider.",
    },
    {
      title: "Organic Search Nonexistent for High-Intent Provider Shopping Queries",
      description: "The company ranked for only 107 keywords nationally, nearly all branded. They were invisible for high-intent queries like 'best internet provider [city]', 'fiber internet near me', 'internet providers in [zip code]', and '[competitor] alternatives' — searches representing active provider shoppers. Organic traffic was a paltry 347 visits/month across all 180+ service areas. With 72% of broadband shoppers researching providers online before making contact, the organic gap represented tens of thousands of monthly missed opportunities. Competitors and comparison sites like BroadbandNow, HighSpeedInternet.com, and Allconnect dominated the first page for every target query.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Market-Level Infrastructure",
      items: [
        "Comprehensive site audit — crawlability, Core Web Vitals (page speed is credibility for an ISP), mobile responsiveness, and indexing gaps across 180+ service areas",
        "Created 23 state-level hub pages and 87 initial city/market landing pages with localized content: coverage maps, speed test comparisons vs. local incumbents, availability checkers, and market-specific testimonials",
        "Implemented AI-powered call tracking — tagging inquiries by service area, residential vs. business, current provider, contract status, and coverage verification score",
        "Keyword research across all target markets: 'internet provider [city]', 'fiber internet [city]', 'best internet [zip]', 'gigabit internet near me', and competitor comparison queries like '[cable company] vs fiber'",
        "Generated 18 initial articles — fiber vs. cable speed comparison guides, remote work internet calculators, gaming latency explainers, and 'best internet in [city]' guides for top 12 markets",
        "Technical SEO foundation — local business schema per market, ISP/broadband structured data, FAQ schema, and hub-spoke linking architecture connecting state pages → city pages → neighborhood content",
        "Competitive ad intelligence — analyzed Spectrum, Comcast, AT&T, and Cox messaging, offers, and landing strategies across top 15 markets",
        "Launched initial paid campaigns at $10,000/month focused on top 12 established markets with highest subscriber density potential",
        "Built real-time coverage verification flow — leads checked against the address-level serviceability database before reaching sales, eliminating wasted follow-up on unserviceable inquiries",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Competitive Positioning & Audience Segmentation",
      items: [
        "Analyzed 30 days of call recordings — 67% of qualified leads cited reliability frustration with current provider, 51% mentioned upload speed for remote work, 43% asked about no-contract options",
        "Rebuilt landing pages around competitive positioning: side-by-side speed comparisons (especially uploads), uptime reliability data, no-contract guarantee, and local support with hold-time metrics — conversion rate jumped from 1.9% to 3.6% within 3 weeks",
        "Created audience segments by switching trigger: remote workers (upload speed), gamers (latency/jitter), families (multiple devices/no caps), small businesses (dedicated fiber/SLA), cord-cutters (streaming reliability)",
        "Generated 24 additional articles — '[Comcast/Spectrum/Cox] vs fiber in [city]' comparison pages, remote work speed guides, multi-device bandwidth calculators, and small business connectivity requirements",
        "Launched programmatic pages for 134 zip codes and neighborhoods across all active markets — hyperlocal 'fiber internet in [neighborhood]' targeting micro-intent searchers",
        "Restructured paid campaigns by audience segment — separate ad groups for remote workers, gamers, families, and businesses with tailored copy and dedicated landing page variants",
        "Budget increased to $10,700 as early data validated efficient segments in established markets",
        "Implemented negative targeting for apartment complexes without fiber infrastructure and addresses outside coverage zones across all campaigns",
        "Established weekly competitive pricing monitoring — auto-updating comparison content when incumbents changed plans or pricing in target markets",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Content Engine & Multi-Market Scaling",
      items: [
        "60-day ICP analysis — highest-value residential subscribers were homeowners aged 30-54 in areas with median household income above $68K, with current provider tenure of 2+ years. Business leads converted best from 5-40 employee companies in professional services and tech",
        "Expanded paid campaigns into 8 newest market launches with pre-built competitive positioning playbooks customized to each market's dominant incumbent",
        "Generated 22 additional content pieces — 'best internet for streaming in [city]', 'work from home internet guide [state]', ISP comparison hub pages, fiber installation FAQ series, and broadband availability coverage announcements",
        "National backlink campaigns — telecom and tech publications, remote work resource sites, community broadband advocacy organizations, and 'best of' internet provider roundups",
        "Budget scaled to $12,300 — summer moving season creating natural demand surge for new internet service signups across all markets",
        "CRO optimization — added real-time chat with coverage verification, simplified signup to 3 steps, introduced 'switch guarantee' addressing cancellation anxiety, added live speed test comparison widget pulling real data from local infrastructure",
        "Launched retargeting campaigns segmented by market and funnel stage — coverage checkers who bounced received competitive comparison ads, plan viewers received promotional first-month offers",
        "Review generation campaigns across all active GBP profiles — 218 new reviews added over subsequent 4 months",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Compound Growth & National Scaling",
      items: [
        "Budget scaled progressively from $13,800 to $18,400 as CPQL improvements validated increased investment — new markets reaching acquisition efficiency within 30 days vs. 75+ days at the start",
        "Content engine producing 15-20 pieces monthly — coverage expansion announcements, seasonal guides (back-to-school bandwidth, holiday streaming preparation, tax season work-from-home), competitive comparison updates as carriers adjusted pricing quarterly",
        "AI-powered call analysis generating weekly reports — switching triggers, competitor mentions, objection patterns feeding directly into ad copy testing and landing page variant optimization",
        "Market-specific landing pages expanded to 247 total across all states and cities — long-tail local searches driving increasingly efficient organic subscriber acquisition with near-zero marginal cost",
        "A/B testing landing page variants by market maturity — new markets emphasized trust signals and local testimonials, established markets focused on upgrade promotions and referral bonuses",
        "Business subscriber pipeline built out with dedicated B2B landing pages, local business case studies, and SLA-focused messaging for the professional services and healthcare verticals",
        "Monthly content refresh on all market comparison pages reflecting current competitor pricing, speed offerings, and promotional changes",
        "Full-funnel attribution: ad click → coverage check → lead → qualified lead → installation scheduled → active subscriber, segmented by market, channel, audience segment, and switching trigger",
        "By month 10, new market launch playbook refined to achieve CPQL below $165 within 21 days of campaign activation — enabling confident pipeline for 15 additional market launches in 2026",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,847", growth: "+8,170%", from: "from 107" },
      { label: "Top 10 Rankings", value: "791", growth: "+5,492%", from: "from 14" },
      { label: "Pages Created", value: "247", growth: "", from: "incl. 134 neighborhood/zip pages" },
      { label: "Organic Traffic", value: "15,412/mo", growth: "+4,342%", from: "from 347" },
    ],
    monthly: [
      // Month 1: Baseline — inherited site with branded-only rankings, audit underway
      { month: "Jan 2025", keywords: 107, top10: 14, top3: 2, traffic: 347, pages: 21, avgPos: 51.7, ctr: 0.6 },
      // Month 2: State hubs and initial city pages indexing, first articles published
      { month: "Feb 2025", keywords: 274, top10: 36, top3: 5, traffic: 643, pages: 56, avgPos: 45.3, ctr: 0.8 },
      // Month 3: Programmatic zip code pages indexing, comparison content gaining traction
      { month: "Mar 2025", keywords: 612, top10: 74, top3: 11, traffic: 1387, pages: 84, avgPos: 37.9, ctr: 1.1 },
      // Month 4: Hockey stick begins — long-tail local queries breaking through at scale
      { month: "Apr 2025", keywords: 1143, top10: 138, top3: 21, traffic: 2891, pages: 112, avgPos: 31.6, ctr: 1.4 },
      // Month 5: Compounding — comparison pages ranking, summer moving season boosting volume
      { month: "May 2025", keywords: 2017, top10: 213, top3: 34, traffic: 4718, pages: 139, avgPos: 27.4, ctr: 1.7 },
      // Month 6: Strong growth — backlink efforts compounding, hub pages gaining authority
      { month: "Jun 2025", keywords: 3184, top10: 312, top3: 52, traffic: 6843, pages: 162, avgPos: 24.7, ctr: 1.9 },
      // Month 7: Authority established — some head terms cracking page 1, featured snippets appearing
      { month: "Jul 2025", keywords: 4523, top10: 418, top3: 71, traffic: 8917, pages: 184, avgPos: 22.3, ctr: 2.1 },
      // Month 8: Organic traffic crosses 10K — content flywheel fully operational
      { month: "Aug 2025", keywords: 5891, top10: 524, top3: 89, traffic: 11234, pages: 207, avgPos: 20.6, ctr: 2.3 },
      // Month 9: Continued compounding across 23 states
      { month: "Sep 2025", keywords: 7342, top10: 658, top3: 112, traffic: 13478, pages: 228, avgPos: 19.1, ctr: 2.5 },
      // Month 10: Full compound effect — dominant local presence across majority of service areas
      { month: "Oct 2025", keywords: 8847, top10: 791, top3: 134, traffic: 15412, pages: 247, avgPos: 17.9, ctr: 2.7 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$136.9K" },
      { label: "Qualified Leads", value: "824" },
      { label: "Avg Cost Per Qualified Lead", value: "$166", note: "↓42% from $287" },
      { label: "New Subscribers Activated", value: "437", note: "avg first-year value $1,068" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "Subscribers",
    },
    monthly: [
      // Month 1: $10K floor — broad campaigns across 12 established markets, gathering baseline
      { month: "Jan 2025", spend: 10000, leads: 193, cpl: 52, qualified: 35, cpql: 286, deals: 16, revenue: 17088, roas: 1.71 },
      // Month 2: $10.7K — call data informing first optimizations, landing page improvements
      { month: "Feb 2025", spend: 10700, leads: 218, cpl: 49, qualified: 43, cpql: 249, deals: 21, revenue: 22428, roas: 2.10 },
      // Month 3: $11.4K — competitive positioning rebuild live, conversion rate climbing
      { month: "Mar 2025", spend: 11400, leads: 261, cpl: 44, qualified: 58, cpql: 197, deals: 29, revenue: 30972, roas: 2.72 },
      // Month 4: $12.3K — spring moving season begins, audience segmentation deployed
      { month: "Apr 2025", spend: 12300, leads: 294, cpl: 42, qualified: 71, cpql: 173, deals: 25, revenue: 26700, roas: 2.17 },
      // Month 5: $13.1K — peak moving season, new market campaigns activated
      { month: "May 2025", spend: 13100, leads: 318, cpl: 41, qualified: 82, cpql: 160, deals: 41, revenue: 43788, roas: 3.34 },
      // Month 6: $13.8K — strong summer demand, remote work + moving signups surging
      { month: "Jun 2025", spend: 13800, leads: 337, cpl: 41, qualified: 89, cpql: 155, deals: 44, revenue: 46992, roas: 3.41 },
      // Month 7: $15.2K — all markets now active, mid-summer push
      { month: "Jul 2025", spend: 15200, leads: 362, cpl: 42, qualified: 98, cpql: 155, deals: 49, revenue: 52332, roas: 3.44 },
      // Month 8: $16.7K — back-to-school bandwidth surge, families upgrading
      { month: "Aug 2025", spend: 16700, leads: 407, cpl: 41, qualified: 118, cpql: 142, deals: 57, revenue: 60876, roas: 3.64 },
      // Month 9: $15.3K — post-summer normalization, efficiency gains sustaining volume
      { month: "Sep 2025", spend: 15300, leads: 361, cpl: 42, qualified: 103, cpql: 149, deals: 49, revenue: 52332, roas: 3.42 },
      // Month 10: $18.4K — confident scale-up, Q4 push for holiday streaming demand
      { month: "Oct 2025", spend: 18400, leads: 447, cpl: 41, qualified: 127, cpql: 145, deals: 61, revenue: 65148, roas: 3.54 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$418.7K", growth: "+218%" },
    { label: "New Subscribers", value: "437", growth: "+218%" },
    { label: "Cost Per Qualified Lead", value: "$145", growth: "↓47%" },
    { label: "Blended ROAS", value: "3.06x", growth: "" },
  ],
};
