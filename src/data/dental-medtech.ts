import { CaseStudyData } from "./types";

export const dentalMedtech: CaseStudyData = {
  slug: "dental-medtech",
  industry: "Dental Medtech",
  headline: "How a National Dental Medtech Company Generated $2.0M in Revenue at 3.58x Blended ROAS in 7 Months",
  subheadline: "MEGA helped a B2B dental technology company shift from high-volume, low-quality leads to bottom-of-funnel qualified prospects — growing monthly revenue from $150K to $350K, achieving 3.58x blended ROAS, and closing 38 equipment deals worth $1.76M across 7 months.",
  heroStats: [
    { value: "7", unit: "months", label: "Partnership Duration" },
    { value: "$2.0M", unit: "K", label: "Revenue Attributed" },
    { value: "65", unit: "%", label: "Lead Qualification Rate" },
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
        "Budget optimized based on strong qualification rate and deal pipeline — refined allocation across equipment categories to maximize qualified lead volume at $70-74K monthly spend",
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
        "Budget scaled to $73-74K/month as qualification rates exceeded 55% and deal values climbed — the client reinvested aggressively based on proven ROAS trajectory",
        "Budget reallocation based on qualified-lead-to-deal conversion data — shifted spend toward equipment categories with highest close rates and deal values",
        "Expansion of programmatic content into emerging dental technology categories and practice workflow optimization topics",
        "Audience pruning — removed low-intent segments identified through 90+ days of qualification data, tested new lookalike seeds from recent closed-won accounts",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for periodic agency review cycles",
        "Monthly reporting with full pipeline attribution from click to closed deal — demonstrating $350K in monthly revenue and 4.75x ROAS by month 7",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,847", growth: "+230%", from: "from 560" },
      { label: "Top 10 Rankings", value: "198", growth: "+467%", from: "from 35" },
      { label: "Pages Created", value: "94", growth: "", from: "incl. 44 programmatic product pages" },
      { label: "Organic Traffic", value: "5,914/mo", growth: "+337%", from: "from 1,352" },
    ],
    monthly: [
      { month: "Jul '25", keywords: 560, top10: 35, top3: 5, traffic: 1352, pages: 16, avgPos: 42.3, ctr: 1.1 },
      { month: "Aug '25", keywords: 698, top10: 52, top3: 8, traffic: 1847, pages: 36, avgPos: 38.1, ctr: 1.3 },
      { month: "Sep '25", keywords: 874, top10: 78, top3: 12, traffic: 2489, pages: 54, avgPos: 33.9, ctr: 1.5 },
      { month: "Oct '25", keywords: 1067, top10: 103, top3: 16, traffic: 3214, pages: 67, avgPos: 29.8, ctr: 1.7 },
      { month: "Nov '25", keywords: 1289, top10: 134, top3: 21, traffic: 4087, pages: 78, avgPos: 27.1, ctr: 1.9 },
      { month: "Dec '25", keywords: 1563, top10: 167, top3: 26, traffic: 4973, pages: 87, avgPos: 24.7, ctr: 2.1 },
      { month: "Jan '26", keywords: 1847, top10: 198, top3: 32, traffic: 5914, pages: 94, avgPos: 22.4, ctr: 2.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$490.0K" },
      { label: "Qualified Leads (SQLs)", value: "2,451" },
      { label: "Avg Cost Per Qualified Lead", value: "$200", note: "↓90% from $1,944" },
      { label: "Closed Deals", value: "1,040" },
    ],
    hiddenColumns: ["cpl"],
    monthly: [
      // Month 1 (Jul '25): Launch phase — building B2B targeting, early ROAS as pipeline develops
      { month: "Jul '25", spend: 64147, leads: 1129, cpl: 56.82, qualified: 321, cpql: 200.54, deals: 134, revenue: 268776, roas: 4.19 },
      // Month 2 (Aug '25): Negative keywords deployed, quality climbing — 46% qualified
      { month: "Aug '25", spend: 66839, leads: 1173, cpl: 56.98, qualified: 354, cpql: 189.55, deals: 163, revenue: 281392, roas: 4.21 },
      // Month 3 (Sep '25): B2B landing pages live, qualification triggers working — 49% qualified
      { month: "Sep '25", spend: 68472, leads: 1230, cpl: 55.67, qualified: 325, cpql: 211.0, deals: 126, revenue: 271834, roas: 3.97 },
      // Month 4 (Oct '25): Lookalike audiences hitting stride, lead scoring refining — 53% qualification
      { month: "Oct '25", spend: 71253, leads: 1273, cpl: 55.97, qualified: 332, cpql: 215.82, deals: 157, revenue: 282162, roas: 3.96 },
      // Month 5 (Nov '25): Strong Q4 equipment buying season — practices spending year-end budgets
      { month: "Nov '25", spend: 72184, leads: 1318, cpl: 54.77, qualified: 403, cpql: 179.02, deals: 160, revenue: 276465, roas: 3.83 },
      // Month 6 (Dec '25): Year-end equipment purchasing rush — 62% qualified, growing deal volume
      { month: "Dec '25", spend: 73417, leads: 1244, cpl: 59.02, qualified: 329, cpql: 223.49, deals: 122, revenue: 299705, roas: 4.08 },
      // Month 7 (Jan '26): New year budgets, practices executing on equipment plans — 65% qualification rate
      { month: "Jan '26", spend: 73691, leads: 1216, cpl: 60.6, qualified: 387, cpql: 190.43, deals: 178, revenue: 325714, roas: 4.42 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$2.01M", growth: "+133%" },
    { label: "Lead Qualification Rate", value: "65%", growth: "from 15%" },
    { label: "Avg Deal Value", value: "$46.2K", growth: "" },
    { label: "Blended ROAS", value: "4.09x", growth: "" },
  ],
};
