import { CaseStudyData } from "./types";

export const dentalMedtech: CaseStudyData = {
  slug: "dental-medtech",
  industry: "Dental Medtech",
  headline: "How a National Dental Medtech Company Generated $1.3M in Revenue at 3.9x Blended ROAS in 7 Months",
  subheadline: "MEGA helped a B2B dental technology company shift from high-volume, low-quality leads to bottom-of-funnel qualified prospects — scaling monthly revenue past $327K, achieving 4.76x ROAS, and closing 34 equipment deals worth $1.3M across 7 months.",
  heroStats: [
    { value: "7", unit: "months", label: "Partnership Duration" },
    { value: "1,304.7", unit: "K", label: "Revenue Attributed" },
    { value: "66", unit: "%", label: "Lead Qualification Rate" },
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
      title: "Scale Qualified Pipeline & Budget Expansion",
      items: [
        "Reviewed 60-day data and expanded into adjacent high-intent keyword territories — dental practice financing queries, equipment upgrade timing, and technology ROI content",
        "Lead scoring model deployed integrating ad engagement signals with CRM qualification data — automated routing of high-score leads directly to senior sales reps",
        "Budget increase approved based on strong qualification rate and deal pipeline — scaled monthly spend from $39K to $48K as the system proved ROI",
        "Backlink campaigns targeting dental industry publications, practice management blogs, and continuing education platforms",
        "Advanced audience segmentation by practice size, specialty, and equipment lifecycle stage — different messaging for practices replacing aging equipment vs. first-time buyers",
        "AI optimization agents detected seasonal patterns in dental equipment purchasing cycles and proactively shifted budget allocation to capture Q4 budget-spending urgency",
        "Content refresh cycle for underperforming articles with updated product specifications and competitive comparisons",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Aggressive Scale & Revenue Maximization",
      items: [
        "Budget scaled to $65-69K/month as qualification rates exceeded 55% and deal values climbed — the client reinvested aggressively based on proven ROAS trajectory",
        "Budget reallocation based on qualified-lead-to-deal conversion data — shifted spend toward equipment categories with highest close rates and deal values",
        "Expansion of programmatic content into emerging dental technology categories and practice workflow optimization topics",
        "Audience pruning — removed low-intent segments identified through 90+ days of qualification data, tested new lookalike seeds from recent closed-won accounts",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for periodic agency review cycles",
        "Monthly reporting with full pipeline attribution from click to closed deal — demonstrating $327K+ in monthly revenue and 4.76x ROAS by month 7",
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
      { label: "Total Ad Spend", value: "$334.6K" },
      { label: "Qualified Leads (SQLs)", value: "196" },
      { label: "Avg Cost Per Qualified Lead", value: "$1,707", note: "↓18% from $2,071" },
      { label: "Closed Deals", value: "34" },
    ],
    monthly: [
      // Month 1 (Jul '25): Inherited campaigns, auditing — high volume but terrible quality. 78 leads, only 15% qualified
      { month: "Jul '25", spend: 24847, leads: 78, cpl: 319, qualified: 12, cpql: 2071, deals: 2, revenue: 52200, roas: 2.10 },
      // Month 2 (Aug '25): Campaign restructure live, negative keywords deployed — quality improving to 25%, spend scaling up
      { month: "Aug '25", spend: 31214, leads: 71, cpl: 440, qualified: 18, cpql: 1734, deals: 3, revenue: 80800, roas: 2.59 },
      // Month 3 (Sep '25): B2B landing pages live, qualification triggers working — quality at 34%, budget increased
      { month: "Sep '25", spend: 39478, leads: 68, cpl: 581, qualified: 23, cpql: 1716, deals: 4, revenue: 126700, roas: 3.21 },
      // Month 4 (Oct '25): Lookalike audiences hitting stride, lead scoring refining — 43% qualification, budget scaling
      { month: "Oct '25", spend: 48312, leads: 65, cpl: 743, qualified: 28, cpql: 1725, deals: 5, revenue: 178300, roas: 3.69 },
      // Month 5 (Nov '25): Strong Q4 equipment buying season — practices spending year-end budgets, aggressive spend increase
      { month: "Nov '25", spend: 56847, leads: 72, cpl: 790, qualified: 35, cpql: 1624, deals: 6, revenue: 237600, roas: 4.18 },
      // Month 6 (Dec '25): Year-end equipment purchasing rush, highest deal volume — 64% qualified, revenue breaks $300K
      { month: "Dec '25", spend: 65213, leads: 67, cpl: 973, qualified: 42, cpql: 1553, deals: 7, revenue: 301900, roas: 4.63 },
      // Month 7 (Jan '26): New year budgets, practices executing on equipment plans — 66% qualification rate, peak ROAS
      { month: "Jan '26", spend: 68734, leads: 58, cpl: 1185, qualified: 38, cpql: 1809, deals: 7, revenue: 327200, roas: 4.76 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$1,304.7K", growth: "+168%" },
    { label: "Lead Qualification Rate", value: "66%", growth: "from 15%" },
    { label: "Avg Deal Value", value: "$38.4K", growth: "" },
    { label: "Blended ROAS", value: "3.90x", growth: "" },
  ],
};
