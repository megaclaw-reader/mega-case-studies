import { CaseStudyData } from "./types";

export const internetServiceProvider: CaseStudyData = {
  slug: "internet-service-provider",
  industry: "Internet Service Provider",
  headline: "How a Regional Fiber ISP Grew Subscriber Signups 247% by Combining Hyper-Local Paid Campaigns With a Content-Driven SEO Strategy Across 14 Service Areas",
  subheadline: "MEGA helped a mid-size fiber internet provider scale monthly ad spend from $10K to $17.5K while reducing cost per qualified lead from $312 to $173 — generating $1.27M in attributed first-year subscriber revenue over 10 months.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "$1.27", unit: "M", label: "Revenue Attributed" },
    { value: "45", unit: "%", label: "CPQL Reduction" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Subscriber Acquisition", "Multi-Market Expansion"],
  company: {
    industry: "Internet Service Provider — Fiber & Broadband",
    employees: "127",
    revenue: "$14.2M",
    location: "Southeastern United States (14 service areas across NC, SC, and GA)",
    description: "A growing regional fiber-to-the-home internet provider serving residential and small business customers across 14 service areas in North Carolina, South Carolina, and Georgia. The company offered symmetrical gigabit fiber plans starting at $59.99/month, business-grade dedicated fiber at $149-$499/month, and managed Wi-Fi bundles. With a 4.6-star rating across 847 reviews and a reputation for reliability in markets underserved by national carriers, the ISP had built strong word-of-mouth in early markets but was struggling to scale subscriber acquisition as they expanded into new territories. Their digital marketing had been largely reactive — basic search ads with generic messaging, a corporate website with no market-specific landing pages, and zero organic visibility in newly launched service areas. Customer acquisition cost had ballooned to $412 as they expanded beyond their original footprint, and they needed a scalable strategy to drive signups in both established and greenfield markets without the brand recognition advantages of Spectrum, AT&T, or Comcast.",
  },
  challenges: [
    {
      title: "Expanding Into New Markets With Zero Digital Presence or Brand Recognition",
      description: "Each new service area launch — whether Greenville SC, Augusta GA, or Asheville NC — meant starting from absolute zero in digital visibility. The company had no organic rankings, no local landing pages, and no review presence in these markets. Meanwhile, incumbent providers like Spectrum and AT&T had saturated local search results with years of accumulated domain authority and hundreds of localized pages. Paid campaigns in new markets were producing leads at $87 each but only 23% qualified — many were outside the fiber coverage footprint, already under contract with competitors, or confused about availability. The cost per qualified lead in new markets averaged $378 compared to $218 in established ones, making geographic expansion financially unsustainable at the current acquisition trajectory.",
    },
    {
      title: "No Differentiation Strategy Against National Carriers With Massive Ad Budgets",
      description: "Competing against Comcast, Spectrum, and AT&T meant going up against companies spending $50-100M annually on national advertising. The ISP's generic ad copy — 'Fast fiber internet in your area' — was indistinguishable from competitor messaging and failed to communicate the tangible advantages of a local fiber provider: symmetrical upload speeds, no data caps, no contracts, local customer support, and significantly higher reliability scores. Landing pages presented plan pricing without addressing the switching barriers that kept customers locked into national carriers: early termination fears, equipment return hassles, and skepticism about a lesser-known provider. Conversion rate on paid traffic sat at 2.1% — well below the 4-5% benchmark for ISP landing pages with clear competitive positioning.",
    },
    {
      title: "Organic Search Invisible for High-Intent Internet Shopping Queries",
      description: "The company ranked for just 94 keywords, almost exclusively branded terms. They were completely absent from high-intent queries like 'best internet provider [city]', 'fiber internet available in my area', 'internet service near me', 'gigabit internet [city]', and 'internet providers [zip code]' — searches that represent customers actively shopping for a new provider. Three national competitors and two comparison/review sites dominated the top 10 for every target market. Organic traffic was 312 visits/month across all 14 markets — effectively zero meaningful visibility. Given that 68% of broadband shoppers research providers online before contacting one, this organic gap represented thousands of monthly missed opportunities across their service footprint.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Market-Specific Infrastructure",
      items: [
        "Comprehensive site audit — crawlability, page speed (critical for an ISP's credibility), mobile responsiveness, and indexing health across all market-specific URLs",
        "Created 14 dedicated market landing pages — one per service area — with localized content including coverage maps, local speed test comparisons vs. incumbent providers, neighborhood availability checkers, and market-specific customer testimonials",
        "Implemented call tracking with AI-powered analysis — tagging each inquiry by service area, residential vs. business, current provider, contract status, and lead quality score based on coverage verification",
        "Keyword research targeting 'internet provider [city]', 'fiber internet [city]', 'best internet [city]', 'gigabit internet near me', 'internet service [zip]', and comparison queries like '[competitor] vs fiber' across all 14 markets",
        "Generated 15 initial articles — fiber vs. cable speed comparison guides, work-from-home internet requirement calculators, gaming latency explainers, and 'internet providers in [city]' comprehensive guides for top 5 markets",
        "Technical SEO foundation — local business schema for each service area, broadband provider structured data, FAQ schema for common ISP questions, and internal linking architecture connecting market pages to relevant content",
        "Competitor ad intelligence analysis — dissected messaging, offers, and landing page strategies of Spectrum, AT&T, and Comcast in each target market",
        "Launched initial paid campaigns at $10K/month across top 8 established markets — broad targeting to establish baseline conversion data and identify highest-intent audience segments",
        "Set up coverage-verification qualification flow — leads instantly checked against the fiber footprint database to filter out addresses outside serviceable areas before sales team engagement",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Competitive Positioning & Audience Segmentation",
      items: [
        "Analyzed 30 days of call recordings — discovered that 71% of qualified leads mentioned frustration with current provider reliability, 54% specifically cited upload speed limitations for remote work, and 38% asked about contract-free options",
        "Rebuilt all landing pages around competitive positioning framework: side-by-side speed comparisons (especially upload), reliability uptime data, no-contract guarantee, and local support differentiators — conversion rate jumped from 2.1% to 3.4% within 3 weeks",
        "Created audience segments based on switching triggers: remote workers (upload speed), gamers (latency), families (multiple devices/no caps), small businesses (dedicated fiber/SLA), and cord-cutters (streaming reliability)",
        "Generated 22 additional articles — 'Spectrum vs. fiber in [city]' comparison pages, remote work internet speed guides, streaming quality calculators, small business internet requirements, and neighborhood-level availability announcements",
        "Launched programmatic service area pages for 47 neighborhoods and zip codes across the 14 markets — 'fiber internet in [neighborhood/zip]' targeting micro-local search intent",
        "Restructured paid campaigns by audience segment — separate ad groups for remote workers, gamers, families, and businesses with tailored messaging and dedicated landing page variants",
        "Increased budget to $10,800 as initial data validated cost-efficient segments in established markets",
        "Added negative targeting to exclude renters in apartment complexes without fiber infrastructure and addresses outside coverage zones",
        "Weekly business profile updates across all 14 market locations with speed test results, customer stories, and service expansion announcements",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Content Scaling & New Market Activation",
      items: [
        "60-day ICP analysis complete — highest-value residential subscribers were homeowners aged 28-52 in neighborhoods with median income above $72K who had been with their current provider 2+ years. Business leads converted best from companies with 5-30 employees in professional services",
        "Expanded paid campaigns into 4 newest service areas with market-specific competitive positioning based on which national carrier dominated each territory",
        "Generated 18 additional content pieces — 'best internet for gaming in [city]', 'work from home internet guide [state]', ISP comparison hub pages, fiber installation FAQ series, and community broadband impact content",
        "Backlink campaigns — local business associations, tech and telecom publications, community news outlets covering fiber expansion, and 'best of' roundups in each market",
        "Budget scaled to $12,100 — summer moving season creating natural demand surge for internet service signups across all markets",
        "CRO optimization — added real-time chat with coverage verification, simplified signup to 4 steps, introduced 'switch guarantee' messaging addressing cancellation anxiety, and added speed test comparison widget",
        "Launched retargeting campaigns segmented by market and funnel stage — coverage checkers who didn't sign up received competitive comparison ads, plan page visitors received promotional offers",
        "Review generation campaigns across all 14 market GBP profiles — 127 new reviews added over the next 4 months",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Compound Growth & Multi-Market Scaling",
      items: [
        "Budget scaled progressively from $13,200 to $17,500 as CPQL improvements validated increased investment — each new market reached efficiency within 45 days vs. 90+ days at the start",
        "Content engine producing 12-15 pieces monthly — coverage expansion announcements, seasonal guides (back-to-school internet needs, holiday streaming preparation), competitive comparison updates as carriers changed pricing",
        "Automated phone call analysis generating weekly ICP reports — switching triggers, competitor mentions, and objection patterns fed directly into ad copy testing and landing page optimization",
        "Neighborhood-level landing pages expanded to 89 total across all markets — long-tail local searches driving increasingly efficient organic subscriber acquisition",
        "A/B testing landing page variants by market maturity — newer markets emphasized brand trust and local testimonials, established markets focused on upgrade promotions and referral incentives",
        "Business subscriber pipeline developed with dedicated landing pages, case studies of local businesses using the service, and SLA-focused messaging for the professional services segment",
        "Monthly content refresh on all market comparison pages to reflect current competitor pricing and plan changes",
        "Full-funnel attribution reporting: visit → coverage check → lead → qualified lead → installation scheduled → active subscriber, segmented by market, channel, and audience segment",
        "By month 10, new market launch playbook refined to achieve CPQL below $190 within 30 days of campaign activation — enabling confident expansion planning into 6 additional markets",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,471", growth: "+8,910%", from: "from 94" },
      { label: "Top 10 Rankings", value: "743", growth: "+6,091%", from: "from 12" },
      { label: "Pages Created", value: "214", growth: "", from: "incl. 89 neighborhood pages" },
      { label: "Organic Traffic", value: "14,823/mo", growth: "+4,652%", from: "from 312" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 94, top10: 12, top3: 2, traffic: 312, pages: 18, avgPos: 52.3, ctr: 0.6 },
      { month: "Feb 2025", keywords: 247, top10: 31, top3: 4, traffic: 589, pages: 47, avgPos: 46.1, ctr: 0.8 },
      { month: "Mar 2025", keywords: 578, top10: 67, top3: 9, traffic: 1243, pages: 72, avgPos: 38.7, ctr: 1.1 },
      { month: "Apr 2025", keywords: 1087, top10: 124, top3: 18, traffic: 2714, pages: 97, avgPos: 32.4, ctr: 1.4 },
      { month: "May 2025", keywords: 1893, top10: 198, top3: 31, traffic: 4387, pages: 118, avgPos: 28.1, ctr: 1.7 },
      { month: "Jun 2025", keywords: 2947, top10: 287, top3: 47, traffic: 6219, pages: 138, avgPos: 25.3, ctr: 1.9 },
      { month: "Jul 2025", keywords: 4126, top10: 389, top3: 64, traffic: 8147, pages: 157, avgPos: 23.1, ctr: 2.1 },
      { month: "Aug 2025", keywords: 5483, top10: 487, top3: 83, traffic: 10234, pages: 176, avgPos: 21.4, ctr: 2.3 },
      { month: "Sep 2025", keywords: 6912, top10: 612, top3: 104, traffic: 12567, pages: 196, avgPos: 19.8, ctr: 2.5 },
      { month: "Oct 2025", keywords: 8471, top10: 743, top3: 128, traffic: 14823, pages: 214, avgPos: 18.6, ctr: 2.7 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$137.1K" },
      { label: "Qualified Leads", value: "897" },
      { label: "Avg Cost Per Qualified Lead", value: "$173", note: "↓45% from $312" },
      { label: "New Subscribers Activated", value: "412", note: "avg first-year value $1,087" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "Subscribers",
    },
    monthly: [
      // Jan 2025: $10K start — broad campaigns across 8 established markets, gathering baseline data
      { month: "Jan 2025", spend: 10000, leads: 187, cpl: 53, qualified: 32, cpql: 313, deals: 14, revenue: 15218, roas: 1.52 },
      // Feb 2025: $10.8K — initial ICP data from calls, first landing page improvements
      { month: "Feb 2025", spend: 10800, leads: 213, cpl: 51, qualified: 41, cpql: 263, deals: 19, revenue: 20653, roas: 1.91 },
      // Mar 2025: $11.2K — competitive positioning rebuild showing results, conversion rate climbing
      { month: "Mar 2025", spend: 11200, leads: 247, cpl: 45, qualified: 56, cpql: 200, deals: 27, revenue: 29349, roas: 2.62 },
      // Apr 2025: $12.0K — spring moving season begins, audience segmentation live
      { month: "Apr 2025", spend: 12000, leads: 278, cpl: 43, qualified: 68, cpql: 176, deals: 34, revenue: 36958, roas: 3.08 },
      // May 2025: $12.8K — peak moving season, new market campaigns activated
      { month: "May 2025", spend: 12800, leads: 302, cpl: 42, qualified: 79, cpql: 162, deals: 39, revenue: 42393, roas: 3.31 },
      // Jun 2025: $13.2K — strong summer demand, moving + remote work signups
      { month: "Jun 2025", spend: 13200, leads: 317, cpl: 42, qualified: 84, cpql: 157, deals: 42, revenue: 45654, roas: 3.46 },
      // Jul 2025: $14.5K — mid-summer push, all 14 markets now active
      { month: "Jul 2025", spend: 14500, leads: 341, cpl: 43, qualified: 93, cpql: 156, deals: 46, revenue: 50002, roas: 3.45 },
      // Aug 2025: $16.1K — back-to-school surge, families upgrading for student needs
      { month: "Aug 2025", spend: 16100, leads: 389, cpl: 41, qualified: 112, cpql: 144, deals: 54, revenue: 58698, roas: 3.64 },
      // Sep 2025: $15.0K — post-summer normalization, but efficiency gains sustaining volume
      { month: "Sep 2025", spend: 15000, leads: 348, cpl: 43, qualified: 98, cpql: 153, deals: 47, revenue: 51089, roas: 3.41 },
      // Oct 2025: $17.5K — confident scale-up, CPQL optimized, Q4 push for holiday streaming demand
      { month: "Oct 2025", spend: 17500, leads: 423, cpl: 41, qualified: 121, cpql: 145, deals: 57, revenue: 61959, roas: 3.54 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$1.27M", growth: "+247%" },
    { label: "New Subscribers", value: "412", growth: "+247%" },
    { label: "Cost Per Qualified Lead", value: "$145", growth: "↓45%" },
    { label: "Blended ROAS", value: "3.26x", growth: "" },
  ],
};
