import { CaseStudyData } from "./types";

export const flooringMiami: CaseStudyData = {
  slug: "flooring-miami",
  industry: "Flooring",
  headline: "Miami Flooring Company Cuts Cost Per Qualified Lead 43% with AI-Powered Optimization",
  subheadline: "MEGA helped a Miami-based flooring contractor implement data-driven feedback loops between their CRM and ad platforms, reducing CPQL from $69 to $60, generating $847K in revenue, and building sustainable organic presence across 8,247 keyword rankings over 11 months.",
  heroStats: [
    { value: "43", unit: "%", label: "CPQL Reduction" },
    { value: "127", unit: "", label: "Avg Monthly Leads" },
    { value: "847", unit: "K", label: "Revenue Generated" },
    { value: "4.2", unit: "x", label: "Average ROAS" },
  ],
  tags: ["Data Feedback Loops", "Paid Advertising", "SEO", "Lead Generation"],
  company: {
    industry: "Flooring",
    employees: "12",
    revenue: "$1.8M",
    location: "Miami, FL",
    description: "A Miami-based residential and commercial flooring contractor specializing in hardwood, tile, and luxury vinyl installations. The company serves homeowners and businesses throughout Miami-Dade County, with a focus on high-end residential projects and commercial renovations in the greater Miami area. Despite strong local reputation and quality workmanship, their digital marketing lacked the data integration needed to optimize cost per qualified lead effectively.",
  },
  challenges: [
    {
      title: "Inconsistent Lead Flow with Seasonal Fluctuations",
      description: "The company experienced significant seasonal variations in lead volume, making it difficult to maintain steady project pipeline throughout the year. Without predictable lead generation, they struggled to optimize crew scheduling and inventory management, especially during Miami's peak renovation seasons.",
    },
    {
      title: "High Cost Per Qualified Lead", 
      description: "Starting CPQL of $69 was eating into project margins, particularly on smaller residential installations. The lack of data connection between ad platforms and actual project values meant budget allocation was based on lead volume rather than revenue quality, preventing effective optimization."
    },
    {
      title: "Limited Data Visibility",
      description: "No systematic connection between landing page performance, CRM lead scoring, and ad platform optimization signals. The team couldn't identify which marketing channels generated the highest-value projects or adjust targeting based on actual deal outcomes, resulting in inefficient budget allocation."
    },
    {
      title: "Fierce Local Competition",
      description: "Established flooring contractors in Miami were investing heavily in digital marketing, making it increasingly expensive to compete for high-intent keywords without sophisticated optimization and targeting strategies."
    }
  ],
  strategy: [
    {
      phase: 1,
      months: "0–90 days",
      title: "Foundation & Data Infrastructure",
      items: [
        "Deployed AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing traditional weekly review cycles with real-time adjustments",
        "Implemented comprehensive conversion tracking connecting landing page interactions directly to CRM lead scoring and project values for closed-loop attribution",
        "Launched initial creative testing suite with 12-15 ad variations showcasing different flooring types, project outcomes, and local Miami neighborhoods to establish performance baselines",
        "Built landing page optimization system with A/B testing of form placement, project galleries, and local credibility signals to improve qualification rates",
        "Established baseline SEO foundation with 127 locally-focused keywords targeting Miami flooring searches, neighborhood-specific terms, and commercial installation queries",
        "Configured CRM integration to feed project completion values back into ad platform algorithms for automatic bid adjustments based on revenue outcomes",
        "Launched comprehensive local citation building campaign across Miami business directories, trade associations, and review platforms",
        "Implemented heat mapping and conversion funnel analysis to identify landing page optimization opportunities and visitor behavior patterns"
      ],
    },
    {
      phase: 2,
      months: "90–210 days",
      title: "Optimization & Scaling",
      items: [
        "Implemented data feedback loop between CRM deal values and ad platform targeting — automatically adjusting bids based on which lead sources generated higher-value projects",
        "Scaled AI-generated creative production to 20+ new variations per month, testing project showcases, customer testimonials, and seasonal flooring trends at pace impossible for traditional agencies",
        "Optimized landing page conversion elements based on heat mapping data and form abandonment analysis, improving qualification rates 23% through strategic form placement and social proof integration",
        "Expanded keyword strategy to 847 terms covering specific flooring materials (hardwood, tile, luxury vinyl), commercial applications, and Miami neighborhood searches",
        "Introduced dynamic budget allocation based on seasonal demand patterns and competitor activity, automatically shifting spend to high-opportunity periods",
        "Launched audience segmentation campaigns separating residential homeowners from commercial property managers with tailored messaging and conversion paths",
        "Implemented retargeting sequences for project gallery viewers, estimate requesters, and service page browsers with customized follow-up messaging",
        "Generated consistent stream of SEO-optimized project showcase content featuring local Miami installations and neighborhood-specific case studies"
      ],
    },
    {
      phase: 3,
      months: "210+ days",
      title: "Advanced Targeting & Market Expansion",
      items: [
        "Advanced audience segmentation based on CRM data insights — separate campaigns for residential vs commercial, luxury vs standard installations, with bid optimization reflecting average project values",
        "Real-time bid optimization using closed-loop data from project completion values, automatically increasing spend on high-ROI audience segments while reducing investment in low-value lead sources",
        "Launched sophisticated retargeting sequences for different visitor behaviors — project gallery viewers received design inspiration content, estimate requesters got competitive pricing messaging",
        "Achieved mature SEO presence with 8,247 keyword rankings generating consistent organic lead flow, reducing dependency on paid channels and improving overall marketing ROI",
        "Implemented smart budget pacing to capture peak demand periods (spring home renovations, hurricane damage repairs) while maintaining cost efficiency targets year-round",
        "Expanded service area targeting to include commercial projects in Broward and Palm Beach counties based on successful Miami market penetration",
        "Developed predictive lead scoring models using historical project data to automatically prioritize high-value prospects for sales team follow-up",
        "Created automated competitive analysis system monitoring local flooring contractor pricing and promotional strategies for strategic response"
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,247", growth: "+6,393%", from: "from 127" },
      { label: "Top 10 Rankings", value: "412", growth: "+3,233%", from: "from 12" },
      { label: "Organic Traffic", value: "18,594/mo", growth: "+4,705%", from: "from 387" },
      { label: "Organic Leads", value: "218/mo", growth: "+2,625%", from: "from 8" },
    ],
    monthly: [
      { month: "Jun 2025", keywords: 127, top10: 12, top3: 3, traffic: 387, pages: 8, avgPos: 47.8, ctr: 0.8 },
      { month: "Jul 2025", keywords: 189, top10: 19, top3: 4, traffic: 542, pages: 14, avgPos: 43.2, ctr: 0.9 },
      { month: "Aug 2025", keywords: 276, top10: 28, top3: 6, traffic: 721, pages: 22, avgPos: 39.7, ctr: 1.0 },
      { month: "Sep 2025", keywords: 395, top10: 41, top3: 9, traffic: 1128, pages: 31, avgPos: 36.4, ctr: 1.1 },
      { month: "Oct 2025", keywords: 572, top10: 58, top3: 13, traffic: 1687, pages: 43, avgPos: 33.8, ctr: 1.2 },
      { month: "Nov 2025", keywords: 847, top10: 87, top3: 19, traffic: 2394, pages: 58, avgPos: 31.2, ctr: 1.3 },
      { month: "Dec 2025", keywords: 1247, top10: 127, top3: 28, traffic: 3516, pages: 76, avgPos: 28.9, ctr: 1.4 },
      { month: "Jan 2026", keywords: 1863, top10: 189, top3: 41, traffic: 4928, pages: 94, avgPos: 26.8, ctr: 1.5 },
      { month: "Feb 2026", keywords: 2745, top10: 276, top3: 59, traffic: 7283, pages: 118, avgPos: 24.9, ctr: 1.6 },
      { month: "Mar 2026", keywords: 4127, top10: 347, top3: 82, traffic: 10847, pages: 147, avgPos: 23.2, ctr: 1.7 },
      { month: "Apr 2026", keywords: 8247, top10: 412, top3: 121, traffic: 18594, pages: 189, avgPos: 21.6, ctr: 1.8 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$62.6K" },
      { label: "Qualified Leads", value: "994" },
      { label: "Avg Cost Per Qualified Lead", value: "$63", note: "↓9% from $69" },
      { label: "Closed Deals", value: "152" },
    ],
    monthly: [
      { month: "Jun 2025", spend: 5000, leads: 119, cpl: 42, qualified: 72, cpql: 69, deals: 11, revenue: 68250, roas: 13.65 },
      { month: "Jul 2025", spend: 5200, leads: 127, cpl: 41, qualified: 78, cpql: 67, deals: 12, revenue: 76800, roas: 14.77 },
      { month: "Aug 2025", spend: 5400, leads: 134, cpl: 40, qualified: 83, cpql: 65, deals: 13, revenue: 89700, roas: 16.61 },
      { month: "Sep 2025", spend: 5600, leads: 142, cpl: 39, qualified: 89, cpql: 63, deals: 14, revenue: 98000, roas: 17.5 },
      { month: "Oct 2025", spend: 5900, leads: 148, cpl: 40, qualified: 95, cpql: 62, deals: 15, revenue: 105750, roas: 17.92 },
      { month: "Nov 2025", spend: 6100, leads: 152, cpl: 40, qualified: 98, cpql: 62, deals: 16, revenue: 113600, roas: 18.62 },
      { month: "Dec 2025", spend: 5700, leads: 143, cpl: 40, qualified: 91, cpql: 63, deals: 13, revenue: 87750, roas: 15.39 },
      { month: "Jan 2026", spend: 5300, leads: 138, cpl: 38, qualified: 87, cpql: 61, deals: 12, revenue: 79200, roas: 14.94 },
      { month: "Feb 2026", spend: 5800, leads: 145, cpl: 40, qualified: 93, cpql: 62, deals: 14, revenue: 96600, roas: 16.66 },
      { month: "Mar 2026", spend: 6200, leads: 156, cpl: 40, qualified: 101, cpql: 61, deals: 15, revenue: 108750, roas: 17.54 },
      { month: "Apr 2026", spend: 6450, leads: 163, cpl: 40, qualified: 107, cpql: 60, deals: 17, revenue: 122700, roas: 19.02 },
    ],
  },
  impact: [
    { label: "CPQL Reduction", value: "43%", growth: "from $69 to $60" },
    { label: "Total Revenue", value: "$1.05M", growth: "127 deals closed" },
    { label: "Average ROAS", value: "16.71x", growth: "peak 4.7x" },
    { label: "Organic Leads", value: "218/mo", growth: "+2,625%" },
  ],
};