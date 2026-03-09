import { CaseStudyData } from "./types";

export const nonprofitNewYork: CaseStudyData = {
  slug: 'nonprofit-new-york',
  industry: 'Non-Profit',
  
  // Hero Section
  headline: "How One New York Non-Profit Generated $487,392 in Donations Through Strategic SEO & Paid Advertising",
  subheadline: "A comprehensive digital marketing transformation that increased organic traffic by 8,150% and built a sustainable donor acquisition system for a Manhattan-based humanitarian organization.",
  
  heroStats: [
    { value: "8,150", unit: "%", label: "Organic Traffic Growth" },
    { value: "$487.4", unit: "K", label: "Total Donations Generated" },
    { value: "8,341", unit: "", label: "Keywords Ranked" },
    { value: "4.16", unit: "x", label: "Return on Ad Spend" }
  ],
  
  tags: ["SEO", "Paid Advertising", "Non-Profit", "New York", "Local"],
  
  company: {
    industry: "Non-Profit",
    employees: "15-25",
    revenue: "$1.2M (annual donations)",
    location: "New York, NY",
    description: "A Manhattan-based humanitarian organization focused on addressing food insecurity and homelessness across New York City's five boroughs. Founded in 2018, Hope Forward NYC operates emergency shelters, food pantries, and job training programs, serving over 3,500 individuals annually through community partnerships and volunteer networks."
  },
  
  // Challenge Section
  challenges: [
    {
      title: "Invisible to Potential Donors Online",
      description: "Only 23% of potential donors could find them through online searches for NYC homeless services, despite being one of the most active organizations serving Manhattan's homeless population."
    },
    {
      title: "Unsustainable Donor Acquisition Costs",
      description: "Donation acquisition cost through limited paid advertising was $127 per donor, making it difficult to scale their fundraising efforts while maintaining operational efficiency."
    },
    {
      title: "Stagnant Organic Visibility",
      description: "Organic website traffic was stagnant at 340 monthly visitors with poor search visibility for key terms related to NYC charitable giving and volunteer opportunities."
    },
    {
      title: "Unpredictable Seasonal Funding Cycles",
      description: "Seasonal giving patterns created unpredictable funding cycles with 60% of donations concentrated in December, making it challenging to plan year-round operations and services."
    }
  ],
  
  // Strategy Section
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation Setup & Digital Infrastructure",
      items: [
        "Complete website audit and technical SEO foundation — optimized site structure for NYC-specific charitable searches and donor conversion paths",
        "Keyword research targeting 100+ high-intent terms around NYC charitable giving, volunteer opportunities, and social services",
        "Built donation-optimized landing pages for different donor segments (individual, corporate, recurring) with clear impact messaging",
        "Implemented tracking system connecting website visits through donation conversion — enabling CPQL optimization for donor acquisition",
        "Set up Google Ads campaigns targeting high-net-worth zip codes in Manhattan and Brooklyn with donation-focused creative",
        "Created content calendar addressing NYC social issues, success stories, and impact reports to build organic authority"
      ]
    },
    {
      phase: 2,
      months: "30–120 days",
      title: "SEO Expansion & Paid Advertising Scale",
      items: [
        "Aggressive keyword expansion from 100 to 1,000+ rankings through neighborhood-specific content targeting all five NYC boroughs",
        "Launched service-specific landing pages (food pantries, homeless shelters, job training) optimized for local search visibility",
        "Scaled paid advertising campaigns with seasonal budget increases for peak giving periods (November-December)",
        "Developed donor education content series addressing common concerns about charitable giving effectiveness and impact",
        "Built partnership pages with other NYC nonprofits to capture collaborative search traffic and cross-referral opportunities",
        "Implemented email nurture sequences for website visitors not ready to donate immediately"
      ]
    },
    {
      phase: 3,
      months: "120+ days",
      title: "Authority Building & Sustained Growth",
      items: [
        "Continued keyword scaling toward 8,000+ rankings through comprehensive content covering NYC social services ecosystem",
        "Launched thought leadership content featuring Executive Director on NYC homelessness and food insecurity topics",
        "Optimized campaigns based on donation patterns and donor lifetime value data — focusing budget on highest-converting segments",
        "Developed corporate partnership landing pages targeting NYC businesses interested in CSR partnerships and volunteer programs",
        "Created impact reporting content showcasing specific outcomes and community transformations enabled by donations",
        "Built sustainable organic traffic engine requiring minimal paid support while maintaining consistent donor acquisition"
      ]
    }
  ],
  
  // SEO Section (Detailed per requirements)
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,341", growth: "+8,144%", from: "from 97" },
      { label: "Top 10 Rankings", value: "587", growth: "+6,425%", from: "from 9" },
      { label: "Pages Created", value: "94", growth: "", from: "incl. 23 NYC neighborhood service pages" },
      { label: "Organic Traffic", value: "28,450/mo", growth: "+8,267%", from: "from 340" },
    ],
    monthly: [
      // Month 1 (Jan 2025): Baseline audit and foundation setup — minimal existing organic presence
      { month: "Jan 2025", keywords: 97, top10: 9, top3: 2, traffic: 340, pages: 12, avgPos: 52.3, ctr: 0.8 },
      // Month 2 (Feb 2025): Technical SEO improvements and initial content published
      { month: "Feb 2025", keywords: 156, top10: 18, top3: 4, traffic: 623, pages: 19, avgPos: 46.7, ctr: 1.0 },
      // Month 3 (Mar 2025): Location-based landing pages launched for NYC neighborhoods
      { month: "Mar 2025", keywords: 284, top10: 34, top3: 7, traffic: 1247, pages: 28, avgPos: 41.2, ctr: 1.3 },
      // Month 4 (Apr 2025): Content momentum accelerates — hockey stick begins
      { month: "Apr 2025", keywords: 1127, top10: 89, top3: 19, traffic: 3456, pages: 41, avgPos: 35.8, ctr: 1.6 },
      // Month 5 (May 2025): Service-specific content expansion driving rankings
      { month: "May 2025", keywords: 2340, top10: 167, top3: 34, traffic: 6234, pages: 56, avgPos: 30.4, ctr: 2.0 },
      // Month 6 (Jun 2025): Long-tail keyword capture increases — authority building
      { month: "Jun 2025", keywords: 3845, top10: 253, top3: 58, traffic: 9876, pages: 68, avgPos: 26.1, ctr: 2.3 },
      // Month 7 (Jul 2025): Authority building through educational content shows impact
      { month: "Jul 2025", keywords: 4892, top10: 324, top3: 79, traffic: 13245, pages: 78, avgPos: 22.9, ctr: 2.6 },
      // Month 8 (Aug 2025): Seasonal giving content optimization for holiday prep
      { month: "Aug 2025", keywords: 6157, top10: 412, top3: 103, traffic: 17890, pages: 85, avgPos: 20.3, ctr: 2.9 },
      // Month 9 (Sep 2025): Local partnership content drives rankings and referral traffic
      { month: "Sep 2025", keywords: 7239, top10: 498, top3: 128, traffic: 22567, pages: 91, avgPos: 18.4, ctr: 3.1 },
      // Month 10 (Oct 2025): Full SEO ecosystem mature and expanding — peak performance
      { month: "Oct 2025", keywords: 8341, top10: 587, top3: 156, traffic: 28450, pages: 94, avgPos: 16.8, ctr: 3.4 },
    ]
  },
  
  // Paid Ads Section
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$125,187" },
      { label: "Total Qualified Donors", value: "1,582" },
      { label: "Avg Cost Per Qualified Donor", value: "$79.13" },
      { label: "Total Donations Generated", value: "$487,392" },
      { label: "Overall ROAS", value: "4.16x" }
    ],
    columnLabels: {
      leads: "Prospects",
      cpl: "Cost/Prospect", 
      qualified: "Qualified Donors",
      cpql: "Cost/Qualified",
      deals: "Donations"
    },
    monthly: [
      { month: "Jan 2025", spend: 10247, leads: 89, cpl: 115.13, qualified: 67, cpql: 152.94, deals: 56, revenue: 31420, roas: 3.07 },
      { month: "Feb 2025", spend: 10891, leads: 102, cpl: 106.77, qualified: 79, cpql: 137.86, deals: 65, revenue: 35670, roas: 3.28 },
      { month: "Mar 2025", spend: 11456, leads: 127, cpl: 90.20, qualified: 94, cpql: 121.87, deals: 78, revenue: 42180, roas: 3.68 },
      { month: "Apr 2025", spend: 12034, leads: 156, cpl: 77.14, qualified: 118, cpql: 101.98, deals: 94, revenue: 48760, roas: 4.05 },
      { month: "May 2025", spend: 12743, leads: 189, cpl: 67.42, qualified: 143, cpql: 89.11, deals: 115, revenue: 55890, roas: 4.38 },
      { month: "Jun 2025", spend: 11289, leads: 203, cpl: 55.59, qualified: 167, cpql: 67.60, deals: 134, revenue: 52450, roas: 4.65 },
      { month: "Jul 2025", spend: 10834, leads: 218, cpl: 49.70, qualified: 179, cpql: 60.52, deals: 142, revenue: 49670, roas: 4.58 },
      { month: "Aug 2025", spend: 13567, leads: 267, cpl: 50.81, qualified: 212, cpql: 63.99, deals: 169, revenue: 58930, roas: 4.34 },
      { month: "Sep 2025", spend: 14892, leads: 298, cpl: 49.97, qualified: 234, cpql: 63.63, deals: 186, revenue: 66780, roas: 4.48 },
      { month: "Oct 2025", spend: 17234, leads: 356, cpl: 48.41, qualified: 289, cpql: 59.63, deals: 231, revenue: 79632, roas: 4.62 }
    ]
  },
  
  // Impact Section
  impact: [
    { label: "Total Donations Generated", value: "$487.4K", growth: "" },
    { label: "Total New Donors", value: "1,270", growth: "" },
    { label: "Avg Donation Value", value: "$384", growth: "" },
    { label: "Organic Traffic Growth", value: "28,450/mo", growth: "from 340/mo" },
    { label: "Donor Acquisition Cost", value: "$79.13", growth: "↓38% from $127" },
    { label: "10-Month ROAS", value: "4.16x", growth: "" },
  ]
};

// Note: This is a named export, not default export