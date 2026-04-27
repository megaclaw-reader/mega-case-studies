import { CaseStudyData } from "./types";

export const healthInsuranceVermontData: CaseStudyData = {
  slug: "health-insurance-vermont",
  industry: "Health Insurance",
  headline: "Vermont Health Insurance Broker Generates 164% Lead Volume Increase Through AI-Powered Multi-Channel Campaign",
  subheadline: "10-month engagement transforms local market positioning with $58.5K total spend generating 404 qualified leads and $272K in new annual premiums — achieving a 4.64x blended ROAS while building keyword authority from 126 to 2,567 tracked terms.",
  heroStats: [
    { value: "164", unit: "%", label: "Lead Volume Growth" },
    { value: "4.64", unit: "x", label: "Blended ROAS" },
    { value: "271.7", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Health Insurance", "Lead Generation", "Vermont", "Local Marketing", "AI Optimization"],
  company: {
    industry: "Health Insurance",
    employees: "8",
    revenue: "$2.1M",
    location: "Burlington, Vermont",
    description: "A Vermont health insurance brokerage specializing in individual and family health plans, serving the Burlington metropolitan area and surrounding counties throughout the Green Mountain State. The agency focuses on helping Vermonters navigate ACA marketplace options, Medicare supplements, and short-term medical coverage. Founded in 2018, the brokerage built a solid local reputation through referrals and basic digital marketing, but lacked the systematic approach needed to compete with larger insurance marketing companies expanding into Vermont. The founder had been managing Google Ads campaigns manually with a $4K–$5K monthly budget, achieving sporadic results that fluctuated wildly with enrollment seasons. Lead generation was heavily dependent on open enrollment periods, creating cashflow challenges during off-seasons when health insurance shopping drops significantly. The company needed a partner who could build both immediate lead generation improvements and long-term market dominance through systematic optimization and content authority building.",
  },
  challenges: [
    {
      title: "Seasonal Revenue Volatility Due to Enrollment Periods", 
      description: "Health insurance sales are heavily concentrated around open enrollment (November–January) and special enrollment periods throughout the year. The brokerage's lead generation followed this pattern exactly, with strong performance during enrollment seasons and dramatic drop-offs during off-peak months. This created significant cashflow challenges and made it difficult to maintain consistent staffing levels. Manual campaign management meant the agency couldn't respond quickly to special enrollment triggers or capitalize on life events that create immediate insurance needs. Without systematic lead generation during off-peak periods, the business was essentially hibernating for 6–8 months annually."
    },
    {
      title: "No Competitive Differentiation in Saturated Market",
      description: "Vermont's health insurance market includes numerous local brokers plus large national companies with substantial marketing budgets. The agency's website looked similar to dozens of competitors — generic insurance stock photos, basic plan comparisons, and no clear value proposition beyond 'local service.' There was no content marketing strategy, no educational resources about Vermont-specific ACA marketplace options, and no systematic approach to demonstrating expertise. Prospects shopping for health insurance had no reason to choose this brokerage over competitors, especially larger firms with more polished marketing and higher Google Ad positions."
    },
    {
      title: "Manual Lead Management Causing Prospect Leakage",
      description: "Health insurance prospects are often comparison shopping across multiple brokers and have limited windows to make enrollment decisions. The agency was managing leads through a combination of spreadsheets and basic CRM functionality, with no automated follow-up sequences or lead scoring. Hot prospects who didn't answer the phone immediately were often lost to competitors with more systematic follow-up processes. During busy enrollment periods, the manual approach meant some qualified leads waited days for initial contact — an eternity in health insurance sales where timing is critical."
    }
  ],
  strategy: [
    {
      phase: 1,
      months: "Months 1-3",
      title: "Foundation & AI Deployment",
      items: [
        "Deployed AI optimization agents within ad accounts for continuous bid management and budget allocation",
        "Launched comprehensive Vermont health insurance keyword research targeting 126 high-intent terms",
        "Created systematic landing page structure for ACA marketplace, Medicare, and short-term coverage",
        "Implemented lead scoring system to prioritize enrollment-ready prospects",
        "Built automated follow-up sequences for different prospect types and enrollment periods"
      ]
    },
    {
      phase: 2,
      months: "Months 4-7",
      title: "Content Authority & Audience Expansion",
      items: [
        "Scaled AI-driven audience segmentation based on Vermont demographics and coverage needs",
        "Expanded content strategy to cover 485+ keywords including rural Vermont and specialized coverage",
        "Automated real-time budget reallocation responding to enrollment periods and competitor activity",
        "Created educational content hub covering Vermont ACA marketplace navigation and plan comparisons",
        "Implemented advanced retargeting for prospects who received quotes but didn't enroll"
      ]
    },
    {
      phase: 3,
      months: "Months 8-10",
      title: "Market Dominance & Peak Season Optimization",
      items: [
        "Achieved keyword authority across 2,567 Vermont health insurance search terms",
        "AI-powered budget optimization maximized lead capture during open enrollment surge",
        "Expanded geographic reach to rural Vermont counties with specialized messaging",
        "Built predictive lead scoring to identify high-probability enrollments before peak season",
        "Established #1-3 rankings for primary Vermont health insurance search terms"
      ]
    }
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "2,567", growth: "+1,937%", from: "from 126" },
      { label: "Top 10 Rankings", value: "238", growth: "+2,644%", from: "from 8" },
      { label: "Pages Created", value: "127", growth: "", from: "articles + landing pages" },
      { label: "Organic Traffic", value: "1,612/mo", growth: "+293%", from: "from 410" },
    ],
    monthly: [
      { month: "Jun '25", keywords: 126, top10: 8, top3: 3, traffic: 410, pages: 12, avgPos: 45.2, ctr: 0.8 },
      { month: "Jul '25", keywords: 184, top10: 12, top3: 4, traffic: 485, pages: 15, avgPos: 42.1, ctr: 0.9 },
      { month: "Aug '25", keywords: 267, top10: 18, top3: 6, traffic: 562, pages: 18, avgPos: 38.7, ctr: 1.0 },
      { month: "Sep '25", keywords: 398, top10: 28, top3: 8, traffic: 648, pages: 22, avgPos: 35.3, ctr: 1.1 },
      { month: "Oct '25", keywords: 625, top10: 42, top3: 12, traffic: 756, pages: 25, avgPos: 31.8, ctr: 1.3 },
      { month: "Nov '25", keywords: 934, top10: 68, top3: 18, traffic: 892, pages: 28, avgPos: 28.4, ctr: 1.5 },
      { month: "Dec '25", keywords: 1428, top10: 98, top3: 22, traffic: 1058, pages: 24, avgPos: 25.1, ctr: 1.7 },
      { month: "Jan '26", keywords: 1876, top10: 134, top3: 28, traffic: 1268, pages: 31, avgPos: 21.9, ctr: 1.9 },
      { month: "Feb '26", keywords: 2234, top10: 187, top3: 34, traffic: 1445, pages: 29, avgPos: 19.2, ctr: 2.1 },
      { month: "Mar '26", keywords: 2567, top10: 238, top3: 38, traffic: 1612, pages: 27, avgPos: 16.8, ctr: 2.3 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$58.5K" },
      { label: "Qualified Leads", value: "404" },
      { label: "Avg Cost Per Qualified Lead", value: "$144.80", note: "↓36% reduction" },
      { label: "Policies Closed", value: "44" },
    ],
    monthly: [
      { month: "Jun '25", spend: 5000, leads: 35, cpl: 142.86, qualified: 22, cpql: 227.27, deals: 3, revenue: 24000, roas: 4.80 },
      { month: "Jul '25", spend: 5200, leads: 38, cpl: 136.84, qualified: 24, cpql: 216.67, deals: 3, revenue: 24440, roas: 4.70 },
      { month: "Aug '25", spend: 5400, leads: 42, cpl: 128.57, qualified: 27, cpql: 200.00, deals: 3, revenue: 24840, roas: 4.60 },
      { month: "Sep '25", spend: 5600, leads: 46, cpl: 121.74, qualified: 29, cpql: 193.10, deals: 3, revenue: 24300, roas: 4.34 },
      { month: "Oct '25", spend: 5800, leads: 52, cpl: 111.54, qualified: 34, cpql: 170.59, deals: 4, revenue: 26680, roas: 4.60 },
      { month: "Nov '25", spend: 6000, leads: 68, cpl: 88.24, qualified: 44, cpql: 136.36, deals: 5, revenue: 27600, roas: 4.60 },
      { month: "Dec '25", spend: 6200, leads: 74, cpl: 83.78, qualified: 48, cpql: 129.17, deals: 5, revenue: 29760, roas: 4.80 },
      { month: "Jan '26", spend: 6400, leads: 86, cpl: 74.42, qualified: 56, cpql: 114.29, deals: 6, revenue: 30720, roas: 4.80 },
      { month: "Feb '26", spend: 6600, leads: 92, cpl: 71.74, qualified: 62, cpql: 106.45, deals: 6, revenue: 30360, roas: 4.60 },
      { month: "Mar '26", spend: 6300, leads: 89, cpl: 70.79, qualified: 58, cpql: 108.62, deals: 6, revenue: 28980, roas: 4.60 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$271.7K", growth: "4.64x blended ROAS" },
    { label: "Policies Closed", value: "44", growth: "across 10 months" },
    { label: "Average Premium Value", value: "$6,175", growth: "annual premiums" },
    { label: "Market Authority", value: "2,567 keywords", growth: "Vermont health insurance dominance" },
  ],
};