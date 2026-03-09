import { CaseStudyData } from "./types";

export const homeImprovementDallas: CaseStudyData = {
  slug: "home-improvement-dallas",
  industry: "Home Improvement",
  headline: "How a Dallas Home Renovation Company Scaled from $10K to $18K Monthly Ad Spend While Reducing CPQL by 49%",
  subheadline: "MEGA helped a full-service home improvement company in Dallas leverage SEO content strategy and advanced paid advertising to grow from 127 keywords to 8,400+ rankings, increase monthly organic traffic to 12,300+ visitors, and generate $587K in attributed revenue over 10 months.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "4.2", unit: "x", label: "Blended ROAS" },
    { value: "$587", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["SEO", "Paid Advertising", "Home Improvement", "Dallas"],
  company: {
    industry: "Home Improvement",
    employees: "31",
    revenue: "$3.8M",
    location: "Dallas, TX",
    description: "A premier home improvement company serving the Dallas-Fort Worth metroplex, specializing in kitchen remodels, bathroom renovations, whole-home makeovers, and outdoor living spaces. With 13 years of experience in the competitive Dallas market, the company had built a strong reputation through referrals and repeat business. However, they were struggling to scale beyond word-of-mouth marketing in a city where home values were rising rapidly and renovation demand was at an all-time high. Average project values ranged from $18K bathroom updates to $85K+ full kitchen renovations, with many clients investing in luxury finishes to match Dallas's premium housing market.",
  },
  challenges: [
    {
      title: "Limited Organic Visibility in Competitive Dallas Market",
      description: "Despite years of quality work in Dallas, the company ranked for only 127 keywords with virtually no first-page visibility for high-intent terms like 'kitchen remodeling Dallas' or 'bathroom renovation DFW.' Organic traffic was stagnant at under 800 visitors per month while competitors dominated search results for valuable local terms. The lack of SEO presence meant they were invisible to homeowners actively researching renovation projects online.",
    },
    {
      title: "Ad Spend Plateau Without Clear Scaling Strategy",
      description: "Paid advertising efforts had plateaued at $10,000/month with inconsistent results. The team lacked confidence to increase investment without understanding which campaigns drove qualified leads versus tire-kickers. Cost per qualified lead was running $387, making it difficult to achieve profitable returns on higher-value kitchen and whole-home projects that required longer sales cycles.",
    },
    {
      title: "Seasonal Demand Swings Without Strategic Adaptation",
      description: "Home improvement demand in Dallas peaks during spring and early summer as homeowners prepare for entertaining season and take advantage of favorable weather for construction. Winter months traditionally slow down. However, the company's marketing approach was static year-round, missing opportunities to capture peak-season demand and nurture prospects during slower periods.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–60 days",
      title: "Foundation & Content Strategy Launch",
      items: [
        "Comprehensive technical SEO audit revealed 43 critical issues including slow page load speeds, missing schema markup, and poor mobile optimization affecting Dallas local search rankings",
        "Competitive analysis of Dallas home improvement market identified content gaps around 'luxury kitchen remodels Dallas' and 'bathroom renovation cost DFW' — high-volume, low-competition opportunities",
        "Launched content production focusing on Dallas-specific renovation guides: neighborhood home value impacts, permit requirements, seasonal construction considerations",
        "Optimized existing service pages with Dallas neighborhood targeting (Plano, Frisco, Highland Park, Preston Hollow) and local project showcases",
        "Implemented advanced conversion tracking across phone calls, form submissions, and consultation requests with attribution back to specific keywords and campaigns",
        "Restructured paid campaigns around project intent: kitchen remodels, bathroom renovations, outdoor living, whole-home projects rather than generic targeting",
        "Created dedicated Dallas neighborhood landing pages with local project galleries and testimonials from recent clients",
      ],
    },
    {
      phase: 2,
      months: "60–120 days",
      title: "Content Scaling & Campaign Optimization",
      items: [
        "Content production accelerated to 3-4 comprehensive guides weekly covering Dallas renovation topics: 'Kitchen Remodel ROI in Dallas Neighborhoods,' 'DFW Permit Process Guide,' 'Best Bathroom Finishes for Texas Climate'",
        "Featured project case studies with before/after photos from Highland Park, Preston Hollow, and Plano drives ranking improvements for 'luxury home renovations Dallas'",
        "Technical optimizations resulted in 47% improvement in Core Web Vitals scores, directly correlating with improved keyword rankings",
        "Paid advertising optimization through audience refinement — households $150K+ income, homeowners aged 35-65, property values above Dallas median",
        "A/B tested ad creative emphasizing Dallas market expertise vs. generic home improvement messaging — local expertise angle drove 34% higher qualified lead rate",
        "Implemented seasonal budget allocation strategy with 40% increase during spring planning season (February-April)",
        "Started ranking on page 1 for 23 Dallas home improvement terms by end of month 4",
      ],
    },
    {
      phase: 3,
      months: "120–210 days",
      title: "SEO Momentum & Advanced Targeting",
      items: [
        "SEO hockey stick effect accelerating — ranking for 2,400+ keywords with strong positions for 'kitchen remodeling Dallas,' 'bathroom renovation Plano,' and 'home addition Frisco'",
        "Organic traffic surpassed 4,500 monthly visitors with 23% month-over-month growth trend established",
        "Long-form content strategy paying dividends — 'Complete Guide to Dallas Kitchen Renovations' ranking #3 for primary target keyword driving 340+ monthly visitors",
        "Paid campaign refinement based on 6+ months of conversion data — identified that Plano and Frisco leads had highest close rates and project values",
        "Advanced audience layering combining geographic, demographic, and behavioral signals increased qualified lead rate to 31% of total ad-driven traffic",
        "Seasonal creative refresh for summer outdoor living emphasis — deck, patio, outdoor kitchen focus drove $180K in additional project pipeline",
        "Monthly ad spend confidently scaled to $14K+ as cost per qualified lead dropped to $278 with improved attribution visibility",
      ],
    },
    {
      phase: 4,
      months: "210+ days",
      title: "Full-Scale Operations & Market Dominance",
      items: [
        "SEO domination established — ranking for 8,400+ keywords with top 3 positions for most high-intent Dallas home improvement terms",
        "Organic traffic exceeding 12,000 monthly visitors with strong conversion rates from content-educated prospects who arrive further along the buying journey",
        "Content hub authority recognized by Dallas Morning News and local home & garden publications resulting in high-authority backlinks and brand mentions",
        "Paid advertising scaled to $18K+ monthly with blended ROAS reaching 4.2x as cost per qualified lead stabilized at $198",
        "Integrated organic and paid strategy — organic content nurtures prospects who convert through remarketing campaigns, creating compound attribution value",
        "Market leadership positioning achieved — when Dallas homeowners research renovations online, company appears prominently in both organic and paid results",
        "Year-end analysis shows 73% of high-value projects ($50K+) originated from digital channels, up from 31% before engagement",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,417", growth: "+6,537%", from: "127" },
      { label: "Page 1 Keywords", value: "1,247", growth: "+4,088%", from: "30" },
      { label: "Monthly Traffic", value: "12,368", growth: "+1,446%", from: "800" },
      { label: "Avg Position", value: "18.3", growth: "↑47 spots", from: "65.3" },
    ],
    monthly: [
      // Month 1 (Jan 2025): Foundation building, technical fixes starting
      { month: "Jan 2025", keywords: 127, top10: 30, top3: 8, traffic: 800, pages: 34, avgPos: 65.3, ctr: 2.1 },
      // Month 2 (Feb): Content production begins, technical improvements live
      { month: "Feb 2025", keywords: 189, top10: 47, top3: 14, traffic: 1050, pages: 41, avgPos: 58.7, ctr: 2.4 },
      // Month 3 (Mar): Spring content push, Dallas neighborhood pages launching
      { month: "Mar 2025", keywords: 267, top10: 73, top3: 22, traffic: 1380, pages: 52, avgPos: 51.2, ctr: 2.8 },
      // Month 4 (Apr): SEO momentum building, first page rankings growing
      { month: "Apr 2025", keywords: 1124, top10: 158, top3: 41, traffic: 2140, pages: 67, avgPos: 43.6, ctr: 3.2 },
      // Month 5 (May): Hockey stick acceleration, content authority building
      { month: "May 2025", keywords: 1876, top10: 289, top3: 73, traffic: 3420, pages: 84, avgPos: 38.1, ctr: 3.7 },
      // Month 6 (Jun): Summer peak content performing, strong rankings
      { month: "Jun 2025", keywords: 2834, top10: 467, top3: 126, traffic: 4890, pages: 103, avgPos: 32.4, ctr: 4.1 },
      // Month 7 (Jul): Authority established, competitive keywords ranking
      { month: "Jul 2025", keywords: 4127, top10: 623, top3: 189, traffic: 6730, pages: 124, avgPos: 28.7, ctr: 4.6 },
      // Month 8 (Aug): Market dominance emerging, traffic surge
      { month: "Aug 2025", keywords: 5498, top10: 847, top3: 267, traffic: 8190, pages: 146, avgPos: 25.3, ctr: 5.0 },
      // Month 9 (Sep): Fall content performing, sustained growth
      { month: "Sep 2025", keywords: 6723, top10: 976, top3: 341, traffic: 9680, pages: 167, avgPos: 22.1, ctr: 5.4 },
      // Month 10 (Oct): Peak performance, market leadership established
      { month: "Oct 2025", keywords: 8417, top10: 1247, top3: 458, traffic: 12368, pages: 189, avgPos: 18.3, ctr: 5.9 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$139.7K" },
      { label: "Qualified Leads", value: "573" },
      { label: "Avg CPQL", value: "$198", note: "↓49% from $387" },
      { label: "Closed Projects", value: "78" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost Per Lead",
      qualified: "Qualified Leads", 
      cpql: "CPQL",
      deals: "Closed Projects",
    },
    monthly: [
      // Month 1 (Jan 2025): Baseline performance, existing campaigns
      { month: "Jan 2025", spend: 10000, leads: 87, cpl: 115, qualified: 26, cpql: 385, deals: 4, revenue: 31200, roas: 3.12 },
      // Month 2 (Feb): Spring planning season begins, campaign restructure
      { month: "Feb 2025", spend: 10500, leads: 94, cpl: 112, qualified: 32, cpql: 328, deals: 5, revenue: 38500, roas: 3.67 },
      // Month 3 (Mar): Peak planning season, landing page optimization
      { month: "Mar 2025", spend: 11200, leads: 103, cpl: 109, qualified: 39, cpql: 287, deals: 6, revenue: 46800, roas: 4.18 },
      // Month 4 (Apr): Spring peak, audience refinement paying off
      { month: "Apr 2025", spend: 12100, leads: 118, cpl: 103, qualified: 47, cpql: 257, deals: 7, revenue: 53900, roas: 4.45 },
      // Month 5 (May): Peak construction season, maximum demand
      { month: "May 2025", spend: 13500, leads: 134, cpl: 101, qualified: 58, cpql: 233, deals: 9, revenue: 69300, roas: 5.13 },
      // Month 6 (Jun): Summer strong, outdoor project emphasis
      { month: "Jun 2025", spend: 14800, leads: 141, cpl: 105, qualified: 62, cpql: 239, deals: 9, revenue: 67500, roas: 4.56 },
      // Month 7 (Jul): Mid-summer, sustained high performance  
      { month: "Jul 2025", spend: 15700, leads: 147, cpl: 107, qualified: 67, cpql: 234, deals: 10, revenue: 74000, roas: 4.71 },
      // Month 8 (Aug): Late summer, project completions before school
      { month: "Aug 2025", spend: 16200, leads: 149, cpl: 109, qualified: 71, cpql: 228, deals: 10, revenue: 72000, roas: 4.44 },
      // Month 9 (Sep): Fall transition, interior focus shift
      { month: "Sep 2025", spend: 17300, leads: 156, cpl: 111, qualified: 78, cpql: 222, deals: 9, revenue: 66600, roas: 3.85 },
      // Month 10 (Oct): Holiday preparation projects, peak spend
      { month: "Oct 2025", spend: 18400, leads: 163, cpl: 113, qualified: 93, cpql: 198, deals: 9, revenue: 67200, roas: 3.65 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$587K", growth: "+194%" },
    { label: "Monthly Organic Traffic", value: "12,368", growth: "+1,446%" },
    { label: "CPQL Reduction", value: "$198", growth: "↓49%" },
    { label: "Blended ROAS", value: "4.20x", growth: "" },
  ],
};