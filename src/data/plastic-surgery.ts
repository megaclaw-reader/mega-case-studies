import { CaseStudyData } from "./types";

export const plasticSurgery: CaseStudyData = {
  slug: "plastic-surgery",
  industry: "Plastic Surgery",
  headline:
    "How an Arizona Plastic Surgery Practice Reduced Cost Per Consultation 42% and Booked 18 Procedures in 10 Months With AI-Powered Marketing",
  subheadline:
    "MEGA helped a plastic surgery practice in Arizona combine paid advertising with organic search growth — generating 76 qualified consultations, booking 18 procedures, and attributing $95.9K in revenue over 10 months with a modest ad budget.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "76", unit: "", label: "Qualified Consultations" },
    { value: "$95.9K", unit: "", label: "Revenue Attributed" },
  ],
  tags: ["Local SEO", "Paid Advertising", "Lead Generation", "Plastic Surgery"],
  company: {
    industry: "Plastic Surgery",
    employees: "10",
    revenue: "$1.9M",
    location: "Arizona",
    description:
      "A board-certified plastic surgery practice in Arizona offering cosmetic and reconstructive procedures including breast augmentation, rhinoplasty, abdominoplasty, body contouring, and non-surgical injectables. The practice had developed a steady referral base over seven years but was losing ground to competitors investing heavily in digital marketing across the Arizona market. With a small marketing budget and no prior digital advertising experience, the practice needed an efficient strategy to generate qualified consultation requests from patients actively researching procedures in their area.",
  },
  challenges: [
    {
      title: "Limited Digital Footprint in a Competitive Arizona Market",
      description:
        "The practice ranked for fewer than 85 keywords organically and had minimal visibility for high-intent procedure searches in Arizona. Competitors with larger marketing budgets dominated search results for terms like breast augmentation, rhinoplasty, and body contouring in the Phoenix metro area. The website lacked procedure-specific landing pages, had no structured content strategy, and Core Web Vitals scores were below average on mobile devices.",
    },
    {
      title: "No Paid Advertising Infrastructure or Lead Attribution",
      description:
        "The practice had never invested in paid search advertising and had no call tracking, form attribution, or CRM integration to measure marketing performance. All new patient acquisition came through physician referrals and word-of-mouth, which had plateaued. There was no way to distinguish between high-value surgical inquiries and lower-value injectable appointments, making it impossible to calculate true cost per qualified consultation.",
    },
    {
      title: "Modest Budget Requiring Maximum Efficiency",
      description:
        "With a starting monthly ad budget of $3,500 — well below what most plastic surgery competitors spend — every dollar needed to work harder. The practice couldn't afford the broad-reach strategies used by larger competitors and needed precise targeting to generate qualified surgical consultation requests rather than price-shopping inquiries or out-of-area interest.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Infrastructure",
      items: [
        "Full site audit — technical SEO review covering site speed, mobile responsiveness, schema markup for medical practices, and crawlability of procedure-specific pages",
        "Conversion tracking setup — implemented call tracking, form attribution, and consultation request tracking to establish baseline metrics and closed-loop reporting",
        "Competitor analysis across the Arizona plastic surgery market — identified keyword gaps, content opportunities, and advertising strategies of top local competitors",
        "Keyword research spanning rhinoplasty, breast augmentation, body contouring, facelift, and non-surgical treatments specific to Arizona search patterns",
        "Generated 6 initial content pieces — procedure guides for top services, recovery timeline articles, and Arizona-specific cosmetic surgery pages",
        "Launched initial paid search campaigns targeting high-intent procedure queries with dedicated landing pages for the three highest-revenue procedures",
        "Deployed always-on AI optimization agents within the ad account for continuous bid management and budget allocation — monitoring performance signals and adjusting in real time rather than waiting for weekly review cycles",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Optimization & Content Scaling",
      items: [
        "Reviewed 30-day performance data to identify which procedure campaigns generated the highest consultation rates and lowest cost per qualified lead",
        "Generated 8 additional content pieces — procedure comparison guides, patient FAQ pages, and cost expectation articles targeting long-tail informational queries",
        "Built location-specific landing pages for key Arizona metro areas to capture geo-targeted procedure searches",
        "AI agents analyzed daily performance signals and reallocated budget toward top-performing procedure campaigns within hours of identifying trends — capturing opportunities a traditional agency would address at the next scheduled review",
        "Negative keyword refinement to filter out insurance-related queries, informational searches with low conversion intent, and out-of-state traffic",
        "Landing page A/B testing — tested consultation request form variations, added virtual consultation CTAs, and optimized page load speeds on mobile",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Expansion & Refinement",
      items: [
        "Expanded paid campaigns to include additional procedure categories based on consultation data from the first 60 days",
        "Local citation building and directory optimization across medical directories and Arizona-specific business listings",
        "Advanced audience segmentation by procedure interest and geographic proximity for more targeted spend allocation",
        "Real-time AI optimization compounded small daily improvements into meaningful monthly gains — bid adjustments, audience refinements, and budget shifts happening continuously rather than in periodic review cycles",
        "Content refresh cycle — updated underperforming articles with enhanced procedure details based on actual search query patterns from the Arizona market",
        "Set up retargeting campaigns to stay visible to prospective patients during the 3-6 month research phase typical of elective cosmetic procedures",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Budget reallocation toward highest-converting procedure categories — shifted spend based on consultation-to-procedure conversion data",
        "Seasonal campaign adjustments — increased budget during peak demand periods for body contouring and pre-event facial procedures",
        "Expanded content strategy targeting emerging procedure trends and long-tail keyword opportunities in the Arizona cosmetic surgery market",
        "Continued AI-driven optimization with performance compounding — each month's data informing more precise targeting, bidding, and budget decisions",
        "Monthly reporting with consultation attribution and revenue-per-procedure analysis to demonstrate marketing ROI by service line",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,847", growth: "+2,073%", from: "from 85" },
      { label: "Top 10 Rankings", value: "68", growth: "+1,600%", from: "from 4" },
      { label: "Pages Created", value: "34", growth: "", from: "incl. 16 procedure + location pages" },
      { label: "Organic Traffic", value: "3,218/mo", growth: "+1,187%", from: "from 250" },
    ],
    monthly: [
      { month: "Jan '26", keywords: 85, top10: 4, top3: 0, traffic: 250, pages: 0, avgPos: 53.1, ctr: 0.4 },
      { month: "Feb '26", keywords: 127, top10: 6, top3: 1, traffic: 389, pages: 6, avgPos: 48.4, ctr: 0.5 },
      { month: "Mar '26", keywords: 198, top10: 10, top3: 2, traffic: 573, pages: 14, avgPos: 43.7, ctr: 0.6 },
      { month: "Apr '26", keywords: 312, top10: 17, top3: 3, traffic: 847, pages: 20, avgPos: 39.2, ctr: 0.7 },
      { month: "May '26", keywords: 487, top10: 24, top3: 5, traffic: 1198, pages: 24, avgPos: 35.8, ctr: 0.8 },
      { month: "Jun '26", keywords: 694, top10: 32, top3: 7, traffic: 1587, pages: 27, avgPos: 32.6, ctr: 0.8 },
      { month: "Jul '26", keywords: 923, top10: 41, top3: 9, traffic: 1943, pages: 29, avgPos: 30.1, ctr: 0.9 },
      { month: "Aug '26", keywords: 1187, top10: 49, top3: 12, traffic: 2374, pages: 31, avgPos: 28.3, ctr: 0.9 },
      { month: "Sep '26", keywords: 1498, top10: 58, top3: 15, traffic: 2791, pages: 33, avgPos: 26.7, ctr: 1.0 },
      { month: "Oct '26", keywords: 1847, top10: 68, top3: 18, traffic: 3218, pages: 34, avgPos: 25.1, ctr: 1.0 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$42.5K" },
      { label: "Qualified Consultations", value: "76" },
      { label: "Avg Cost Per Qualified Lead", value: "$559" },
      { label: "Procedures Booked", value: "18" },
    ],
    columnLabels: {
      qualified: "Consultations",
      cpql: "Cost/Consultation",
      deals: "Procedures",
    },
    monthly: [
      { month: "Jan '26", spend: 3518, leads: 16, cpl: 219.88, qualified: 4, cpql: 879.50, deals: 1, revenue: 5200, roas: 1.48 },
      { month: "Feb '26", spend: 3572, leads: 19, cpl: 188.00, qualified: 5, cpql: 714.40, deals: 1, revenue: 4800, roas: 1.34 },
      { month: "Mar '26", spend: 3689, leads: 23, cpl: 160.39, qualified: 6, cpql: 614.83, deals: 1, revenue: 5700, roas: 1.55 },
      { month: "Apr '26", spend: 4023, leads: 27, cpl: 149.00, qualified: 7, cpql: 574.71, deals: 2, revenue: 10400, roas: 2.59 },
      { month: "May '26", spend: 4387, leads: 31, cpl: 141.52, qualified: 8, cpql: 548.38, deals: 2, revenue: 11700, roas: 2.67 },
      { month: "Jun '26", spend: 4612, leads: 34, cpl: 135.65, qualified: 9, cpql: 512.44, deals: 2, revenue: 9800, roas: 2.13 },
      { month: "Jul '26", spend: 4894, leads: 37, cpl: 132.27, qualified: 10, cpql: 489.40, deals: 2, revenue: 12300, roas: 2.51 },
      { month: "Aug '26", spend: 4713, leads: 38, cpl: 124.03, qualified: 9, cpql: 523.67, deals: 2, revenue: 10800, roas: 2.29 },
      { month: "Sep '26", spend: 4518, leads: 36, cpl: 125.50, qualified: 8, cpql: 564.75, deals: 2, revenue: 11400, roas: 2.52 },
      { month: "Oct '26", spend: 4567, leads: 42, cpl: 108.74, qualified: 10, cpql: 456.70, deals: 3, revenue: 13800, roas: 3.02 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$95.9K", growth: "" },
    { label: "Procedures Booked", value: "18", growth: "" },
    { label: "Cost Per Consultation", value: "$559", growth: "↓42%" },
    { label: "Blended ROAS", value: "2.26x", growth: "" },
  ],
};
