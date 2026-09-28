import { CaseStudyData } from "./types";

export const roofingAustinTx: CaseStudyData = {
  slug: "roofing-austin-tx",
  industry: "Roofing",
  headline: "How an Austin, TX Roofing Company Cut Booking Costs 49% While Scaling to 107 Booked Projects Per Month",
  subheadline: "AI-powered optimization and organic growth combined to drive consistent project volume and a $176 cost per booked project in Austin's competitive roofing market",
  heroStats: [
    { value: "$370.3K", unit: "K", label: "Total Revenue Generated" },
    { value: "4.11", unit: "x", label: "Blended ROAS" },
    { value: "369", unit: "", label: "Booked Projects" }
  ],
  tags: ["SEO", "Paid Advertising", "Lead Generation", "Local"],

  company: {
    industry: "Roofing",
    employees: "20-40",
    revenue: "$3-5M annually",
    location: "Austin TX",
    description: "A residential and commercial roofing company serving the greater Austin, TX metro area, specializing in storm damage repairs, full roof replacements, and preventive maintenance across Travis, Williamson, and Hays counties."
  },

  challenges: [
    {
      title: "Rising Customer Acquisition Costs With No Clear Path Down",
      description: "The company was spending over $340 per booked project through paid advertising with no systematic way to reduce costs — each month felt like starting from scratch with no compounding improvement from prior campaign learnings."
    },
    {
      title: "Minimal Organic Presence in a Saturated Local Market",
      description: "Despite years in business, the company ranked for fewer than 160 keywords organically and captured less than 650 monthly visitors from search — leaving the Austin market's growing roofing demand almost entirely to competitors with stronger digital footprints."
    },
    {
      title: "Inability to Scale Project Volume Beyond 50 Per Month",
      description: "Previous marketing efforts plateaued at roughly 48 booked projects per month. The company needed to break through 80+ monthly bookings to support crew expansion plans but couldn't do so without either dramatically increasing spend or improving conversion efficiency."
    }
  ],

  strategy: [
    {
      phase: 1,
      months: "Month 1",
      title: "Foundation & Dual-Channel Architecture",
      items: [
        "Comprehensive audit of existing ad accounts, website SEO health, and conversion tracking — identified critical gaps in call attribution and form submission tracking that were hiding true cost-per-project metrics",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget, and refining audience targeting in real time rather than waiting for the previous agency's biweekly review cycles",
        "Built geo-targeted paid campaign structure focused on Austin metro zip codes with highest roofing demand density, segmented by service type: storm damage, full replacement, and commercial roofing",
        "Launched SEO content strategy targeting high-intent local keywords — 9 service pages and location-specific content published in the first 30 days, a pace that would take a traditional agency 3-4 months",
        "Implemented unified tracking across paid and organic channels to measure true cost per booked project regardless of source"
      ]
    },
    {
      phase: 2,
      months: "Months 2-3",
      title: "Optimization & Cost Reduction",
      items: [
        "AI agents identified underperforming ad groups within hours and automatically shifted budget to high-converting storm damage and replacement terms — reducing wasted spend on low-intent repair queries",
        "Scaled organic content to 22 new pages covering neighborhood-specific roofing needs, Austin weather damage patterns, and insurance claim guidance — each piece informed by paid search data showing which topics drove the highest quality leads",
        "Audience refinement happened automatically as the AI identified which demographics, zip codes, and intent signals drove booked projects vs. tire-kicker inquiries in the Austin market",
        "A/B tested landing page variants with AI selecting winners automatically — conversion rate improvements compounded weekly rather than waiting for monthly performance reviews",
        "Budget allocation driven by real-time performance data across service categories — storm damage campaigns received dynamic budget increases during severe weather events"
      ]
    },
    {
      phase: 3,
      months: "Months 4-5",
      title: "Scaling Volume While Driving Costs Down",
      items: [
        "Organic rankings began compounding — 396 keywords in the top 10 by month 5, driving over 8,400 monthly visitors and reducing dependence on paid channels for project bookings",
        "Continuous AI optimization compounded daily improvements in paid campaigns — bid adjustments, audience refinements, and budget reallocations happening in real time drove cost per booked project from $345 down to $176",
        "Expanded keyword coverage to include commercial roofing, multi-family property maintenance, and HOA-specific terms that opened new project pipelines at lower acquisition costs",
        "Cross-channel synergies matured: organic content insights informed paid ad targeting, while paid data revealed high-converting keywords that shaped the SEO strategy — creating a flywheel that improved both channels simultaneously",
        "When spring storm season demand surged, campaigns were restructured within hours to capture high-intent emergency repair searches — a responsiveness impossible with traditional agency review cycles"
      ]
    }
  ],

  seo: {
    summary: [
      { label: "Organic Traffic", value: "8,437/mo", growth: "+1,218%", from: "641/mo" },
      { label: "Ranked Keywords", value: "2,184", growth: "+1,297%", from: "156" },
      { label: "Top 10 Rankings", value: "396", growth: "+3,209%", from: "12" },
      { label: "Top 3 Rankings", value: "87", growth: "+2,800%", from: "3" }
    ],
    monthly: [
      { month: "Feb '25", keywords: 156, top10: 12, top3: 3, traffic: 641, pages: 9, avgPos: 44.1, ctr: 1.7 },
      { month: "Mar '25", keywords: 347, top10: 48, top3: 11, traffic: 1523, pages: 18, avgPos: 33.2, ctr: 2.3 },
      { month: "Apr '25", keywords: 724, top10: 127, top3: 28, traffic: 3184, pages: 29, avgPos: 24.8, ctr: 2.9 },
      { month: "May '25", keywords: 1389, top10: 264, top3: 54, traffic: 5762, pages: 37, avgPos: 19.3, ctr: 3.4 },
      { month: "Jun '25", keywords: 2184, top10: 396, top3: 87, traffic: 8437, pages: 44, avgPos: 15.7, ctr: 4.1 }
    ]
  },

  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$90,131" },
      { label: "Total Booked Projects", value: "369" },
      { label: "Avg Cost/Booked Project", value: "$244" },
      { label: "Total Revenue", value: "$370,300" },
      { label: "Blended ROAS", value: "4.11x" }
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost Per Lead",
      qualified: "Booked Projects",
      cpql: "Cost/Booked Project",
      deals: "Closed Projects"
    },
    monthly: [
      { month: "Feb '25", spend: 16547, leads: 218, cpl: 75.90, qualified: 48, cpql: 344.73, deals: 4, revenue: 49200, roas: 2.97 },
      { month: "Mar '25", spend: 17231, leads: 267, cpl: 64.53, qualified: 58, cpql: 297.09, deals: 5, revenue: 61500, roas: 3.57 },
      { month: "Apr '25", spend: 18394, leads: 324, cpl: 56.77, qualified: 72, cpql: 255.47, deals: 7, revenue: 82600, roas: 4.49 },
      { month: "May '25", spend: 19127, leads: 389, cpl: 49.17, qualified: 84, cpql: 227.70, deals: 8, revenue: 88800, roas: 4.64 },
      { month: "Jun '25", spend: 18832, leads: 467, cpl: 40.32, qualified: 107, cpql: 175.99, deals: 9, revenue: 88200, roas: 4.68 }
    ]
  },

  impact: [
    { label: "Total Revenue Generated", value: "$370,300", growth: "" },
    { label: "Blended ROAS", value: "4.11x", growth: "" },
    { label: "Total Booked Projects", value: "369", growth: "" },
    { label: "Cost Per Booked Project", value: "$176", growth: "-49% from $345 baseline" },
    { label: "Closed Projects", value: "33", growth: "" },
    { label: "Organic Traffic Growth", value: "+1,218%", growth: "641 → 8,437/mo" }
  ]
};
