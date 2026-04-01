import { CaseStudyData } from "./types";

export const dentalMedtech: CaseStudyData = {
  slug: "dental-medtech",
  industry: "Dental Medtech",
  headline: "How a National Dental Medtech Company Generated $2.35M in Revenue at 4.72x Blended ROAS in 7 Months",
  subheadline: "MEGA helped a B2B dental technology company shift from high-volume, low-quality leads to bottom-of-funnel qualified prospects — scaling monthly revenue past $365K, achieving 4.76x ROAS, and closing 53 equipment deals worth $2.35M across 7 months.",
  heroStats: [
    { value: "7", unit: "months", label: "Partnership Duration" },
    { value: "2,352.1", unit: "K", label: "Revenue Attributed" },
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
        "Budget scaled to $75-77K/month as qualification rates exceeded 55% and deal values climbed — the client reinvested aggressively based on proven ROAS trajectory",
        "Budget reallocation based on qualified-lead-to-deal conversion data — shifted spend toward equipment categories with highest close rates and deal values",
        "Expansion of programmatic content into emerging dental technology categories and practice workflow optimization topics",
        "Audience pruning — removed low-intent segments identified through 90+ days of qualification data, tested new lookalike seeds from recent closed-won accounts",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for periodic agency review cycles",
        "Monthly reporting with full pipeline attribution from click to closed deal — demonstrating $365K+ in monthly revenue and 4.76x ROAS by month 7",
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
      { label: "Total Ad Spend", value: "$498.1K" },
      { label: "Qualified Leads (SQLs)", value: "335" },
      { label: "Avg Cost Per Qualified Lead", value: "$1,487", note: "↓28% from $2,071" },
      { label: "Closed Deals", value: "53" },
    ],
    monthly: [
      // Month 1 (Jul '25): Aggressive launch with refined B2B targeting from day one — 46% qualification rate
      { month: "Jul '25", spend: 64147, leads: 82, cpl: 782, qualified: 38, cpql: 1688, deals: 7, revenue: 301000, roas: 4.69 },
      // Month 2 (Aug '25): Negative keywords deployed, quality climbing — 52% qualified
      { month: "Aug '25", spend: 66483, leads: 79, cpl: 841, qualified: 41, cpql: 1621, deals: 7, revenue: 312900, roas: 4.71 },
      // Month 3 (Sep '25): B2B landing pages live, qualification triggers working — 54% qualified
      { month: "Sep '25", spend: 69214, leads: 84, cpl: 824, qualified: 45, cpql: 1538, deals: 7, revenue: 325400, roas: 4.70 },
      // Month 4 (Oct '25): Lookalike audiences hitting stride, lead scoring refining — 56% qualification
      { month: "Oct '25", spend: 71847, leads: 87, cpl: 826, qualified: 49, cpql: 1467, deals: 8, revenue: 339200, roas: 4.72 },
      // Month 5 (Nov '25): Strong Q4 equipment buying season — practices spending year-end budgets
      { month: "Nov '25", spend: 73912, leads: 91, cpl: 812, qualified: 52, cpql: 1421, deals: 8, revenue: 349600, roas: 4.73 },
      // Month 6 (Dec '25): Year-end equipment purchasing rush — 61% qualified, strong deal volume
      { month: "Dec '25", spend: 75634, leads: 88, cpl: 859, qualified: 54, cpql: 1400, deals: 8, revenue: 358400, roas: 4.74 },
      // Month 7 (Jan '26): New year budgets, practices executing on equipment plans — 66% qualification rate
      { month: "Jan '26", spend: 76813, leads: 85, cpl: 904, qualified: 56, cpql: 1372, deals: 8, revenue: 365600, roas: 4.76 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$2,352.1K", growth: "+168%" },
    { label: "Lead Qualification Rate", value: "66%", growth: "from 15%" },
    { label: "Avg Deal Value", value: "$44.4K", growth: "" },
    { label: "Blended ROAS", value: "4.72x", growth: "" },
  ],
};
