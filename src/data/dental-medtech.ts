import { CaseStudyData } from "./types";

export const dentalMedtech: CaseStudyData = {
  slug: "dental-medtech",
  industry: "Dental Medtech",
  headline: "How a National Dental Medtech Company Transformed Lead Quality and Generated $740K in 7 Months",
  subheadline: "MEGA helped a B2B dental technology company shift from high-volume, low-quality leads to bottom-of-funnel qualified prospects — tripling qualification rates, reducing cost per qualified lead by 31%, and closing $740K in new equipment deals across 7 months.",
  heroStats: [
    { value: "7", unit: "months", label: "Partnership Duration" },
    { value: "740.5", unit: "K", label: "Revenue Attributed" },
    { value: "47", unit: "%", label: "Lead Qualification Rate" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "AI-Powered Optimization", "Lead Quality"],
  company: {
    industry: "Dental Medtech",
    employees: "34",
    revenue: "$4.8M",
    location: "Nationwide US",
    description: "A B2B dental technology company selling advanced imaging systems, CAD/CAM equipment, and practice management solutions to dental practices and clinics nationwide. The company had built a solid product reputation among early adopters but struggled to scale their digital marketing beyond trade shows and referrals. Their existing paid campaigns generated a high volume of inquiries — but the vast majority were unqualified: individual consumers, students, or practices too small to afford their equipment tier. The sales team was drowning in low-quality leads while missing the high-value prospects actually ready to purchase.",
  },
  challenges: [
    {
      title: "High Volume, Low Quality Leads",
      description: "Paid campaigns were generating 80+ inquiries per month, but only 15-18% were genuinely qualified — dental practices or group practices with the budget and intent to purchase equipment in the $15K-$75K range. The sales team spent more time disqualifying leads than closing deals, creating frustration and wasted pipeline effort.",
    },
    {
      title: "Misaligned Targeting and Messaging",
      description: "Ad campaigns used broad dental industry keywords that attracted consumers searching for dental care, dental students researching equipment, and small practices browsing without purchase intent. Landing pages lacked the specificity needed to pre-qualify B2B buyers and filter out unqualified traffic before form submission.",
    },
    {
      title: "Weak Organic Presence for High-Intent Queries",
      description: "The company ranked for fewer than 280 keywords organically, with almost no presence for high-intent B2B queries like 'dental imaging system comparison' or 'CAD/CAM equipment for dental practices.' Competitors with stronger content programs were capturing the research-phase traffic that eventually converted to sales inquiries.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Lead Quality Audit",
      items: [
        "Complete audit of historical lead data — mapped every inquiry from the past 6 months against CRM outcomes to identify which channels, keywords, and ad groups produced qualified vs. unqualified leads",
        "Rebuilt campaign architecture around B2B buyer intent signals — separated campaigns by equipment category (imaging, CAD/CAM, practice management) with dedicated landing pages for each",
        "Implemented aggressive negative keyword strategy to exclude consumer dental queries, student searches, and informational-only traffic patterns",
        "Created B2B-specific landing pages with qualification triggers — practice size selectors, equipment budget ranges, and timeline indicators that pre-filtered leads before submission",
        "Full technical SEO audit — site speed optimization, crawlability fixes, and structured data markup for product pages and comparison content",
        "Generated 16 initial articles targeting mid-funnel B2B queries: equipment comparison guides, ROI calculators for dental technology investments, and practice workflow optimization content",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management and audience refinement — replacing the previous set-it-and-forget-it campaign structure with real-time adjustments",
        "CRM integration for closed-loop attribution tracking lead source through to closed deal, enabling true cost-per-qualified-lead measurement",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Quality Optimization & Content Engine",
      items: [
        "Reviewed 30-day lead quality data and identified three keyword clusters driving 70% of unqualified traffic — paused or restructured all three",
        "Launched lookalike audiences built from CRM data on closed-won dental practices, targeting practices with similar size, location density, and technology adoption patterns",
        "Generated 14 additional SEO articles focused on bottom-of-funnel comparison content and dental technology buying guides",
        "Programmatic landing pages for equipment categories targeting specific practice types (general dentistry, orthodontics, oral surgery, pediatric)",
        "AI agents analyzed lead quality signals daily, automatically adjusting bid modifiers based on which audience segments produced qualified leads vs. tire-kickers — compounding small daily improvements into measurable qualification rate gains",
        "Retargeting campaigns specifically for pricing page visitors and comparison guide readers — the highest-intent behavioral signals",
        "Added structured data schema for product pages, FAQ content, and organization markup to improve search visibility for equipment-specific queries",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale Qualified Pipeline",
      items: [
        "Reviewed 60-day data and expanded into adjacent high-intent keyword territories — dental practice financing queries, equipment upgrade timing, and technology ROI content",
        "Lead scoring model deployed integrating ad engagement signals with CRM qualification data — automated routing of high-score leads directly to senior sales reps",
        "Backlink campaigns targeting dental industry publications, practice management blogs, and continuing education platforms",
        "Advanced audience segmentation by practice size, specialty, and equipment lifecycle stage — different messaging for practices replacing aging equipment vs. first-time buyers",
        "AI optimization agents detected seasonal patterns in dental equipment purchasing cycles and proactively shifted budget allocation to capture Q4 budget-spending urgency",
        "Content refresh cycle for underperforming articles with updated product specifications and competitive comparisons",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization & Revenue Maximization",
      items: [
        "Budget reallocation based on qualified-lead-to-deal conversion data — shifted spend toward equipment categories with highest close rates and deal values",
        "Expansion of programmatic content into emerging dental technology categories and practice workflow optimization topics",
        "Audience pruning — removed low-intent segments identified through 90+ days of qualification data, tested new lookalike seeds from recent closed-won accounts",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for periodic agency review cycles",
        "Monthly reporting with full pipeline attribution from click to closed deal, enabling precise ROI measurement on every dollar spent",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,147", growth: "+310%", from: "from 279" },
      { label: "Top 10 Rankings", value: "142", growth: "+547%", from: "from 22" },
      { label: "Pages Created", value: "87", growth: "", from: "incl. 41 programmatic product pages" },
      { label: "Organic Traffic", value: "3,847/mo", growth: "+387%", from: "from 789" },
    ],
    monthly: [
      { month: "Jul '25", keywords: 279, top10: 22, top3: 3, traffic: 789, pages: 16, avgPos: 44.1, ctr: 1.0 },
      { month: "Aug '25", keywords: 367, top10: 34, top3: 5, traffic: 1042, pages: 34, avgPos: 39.3, ctr: 1.2 },
      { month: "Sep '25", keywords: 498, top10: 51, top3: 8, traffic: 1478, pages: 52, avgPos: 34.7, ctr: 1.4 },
      { month: "Oct '25", keywords: 643, top10: 72, top3: 11, traffic: 2013, pages: 64, avgPos: 30.2, ctr: 1.6 },
      { month: "Nov '25", keywords: 801, top10: 96, top3: 15, traffic: 2641, pages: 73, avgPos: 27.4, ctr: 1.8 },
      { month: "Dec '25", keywords: 963, top10: 118, top3: 19, traffic: 3187, pages: 81, avgPos: 25.1, ctr: 2.1 },
      { month: "Jan '26", keywords: 1147, top10: 142, top3: 24, traffic: 3847, pages: 87, avgPos: 23.3, ctr: 2.3 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$183.6K" },
      { label: "Qualified Leads (SQLs)", value: "127" },
      { label: "Avg Cost Per Qualified Lead", value: "$1,446", note: "↓31% from $2,071" },
      { label: "Closed Deals", value: "31" },
    ],
    monthly: [
      // Month 1 (Jul '25): Inherited campaigns, auditing — high volume but terrible quality. 82 leads, only 15% qualified
      { month: "Jul '25", spend: 24847, leads: 82, cpl: 303, qualified: 12, cpql: 2071, deals: 2, revenue: 58400, roas: 2.35 },
      // Month 2 (Aug '25): Campaign restructure live, negative keywords deployed — volume drops but quality starts improving
      { month: "Aug '25", spend: 25213, leads: 64, cpl: 394, qualified: 15, cpql: 1681, deals: 3, revenue: 87300, roas: 3.46 },
      // Month 3 (Sep '25): B2B landing pages live, qualification triggers working — quality climbing to 28%
      { month: "Sep '25", spend: 26478, leads: 57, cpl: 464, qualified: 16, cpql: 1655, deals: 4, revenue: 113700, roas: 4.29 },
      // Month 4 (Oct '25): Lookalike audiences hitting stride, lead scoring refining — 33% qualification rate
      { month: "Oct '25", spend: 27134, leads: 51, cpl: 532, qualified: 17, cpql: 1596, deals: 4, revenue: 127800, roas: 4.71 },
      // Month 5 (Nov '25): Strong Q4 equipment buying season — practices spending year-end budgets
      { month: "Nov '25", spend: 28391, leads: 56, cpl: 507, qualified: 23, cpql: 1234, deals: 6, revenue: 121500, roas: 4.28 },
      // Month 6 (Dec '25): Year-end equipment purchasing rush, highest deal volume — 42% qualified
      { month: "Dec '25", spend: 27847, leads: 49, cpl: 568, qualified: 24, cpql: 1160, deals: 7, revenue: 131400, roas: 4.72 },
      // Month 7 (Jan '26): New year budgets, practices executing on equipment plans — 47% qualification rate
      { month: "Jan '26", spend: 23693, leads: 43, cpl: 551, qualified: 20, cpql: 1185, deals: 5, revenue: 100400, roas: 4.24 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$740.5K", growth: "+168%" },
    { label: "Lead Qualification Rate", value: "47%", growth: "from 15%" },
    { label: "Avg Deal Value", value: "$23.9K", growth: "" },
    { label: "Blended ROAS", value: "4.03x", growth: "" },
  ],
};
