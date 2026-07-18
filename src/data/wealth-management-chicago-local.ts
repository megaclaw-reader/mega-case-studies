import { CaseStudyData } from "./types";

export const wealthManagementChicagoLocal: CaseStudyData = {
  slug: "wealth-management-chicago-local",
  industry: "Wealth Management",
  headline: "How a Chicago Wealth Management Firm Acquired 9 New High-Net-Worth Clients in 6 Months",
  subheadline: "MEGA helped a Chicago-based independent wealth management firm build a digital acquisition engine — reducing cost per qualified lead by 55%, growing organic visibility 880%, and onboarding 9 new high-net-worth clients through SEO and paid advertising.",
  heroStats: [
    { value: "$7.3", unit: "M", label: "New AUM Acquired" },
    { value: "55", unit: "%", label: "CPQL Reduction" },
    { value: "9", unit: "", label: "New Clients Acquired" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Wealth Management"],
  company: {
    industry: "Wealth Management",
    employees: "7",
    revenue: "$1.4M",
    location: "Chicago, IL",
    description: "A fee-only registered investment advisory firm serving affluent professionals and retirees across the greater Chicago area. The firm managed approximately $95M in assets across 68 client households but had relied almost entirely on referrals and professional networking for growth over its 9-year history. With referral volume flattening and competition from national RIA aggregators increasing, the firm needed a scalable digital channel to attract new high-net-worth prospects in Chicago's North Shore and western suburbs.",
  },
  challenges: [
    {
      title: "Stagnating Referral Growth",
      description: "New client acquisitions had declined from 14 per year to just 8 over the past two years. The firm's referral network of CPAs and estate attorneys was saturated, and competitors were actively courting the same referral sources with larger marketing budgets.",
    },
    {
      title: "Invisible Online Presence",
      description: "The firm's website hadn't been updated in four years and ranked for zero meaningful search terms. Local searches for wealth management and financial planning in Chicago were dominated by wirehouses and national firms with established digital marketing programs.",
    },
    {
      title: "Regulatory Caution Around Advertising",
      description: "As an SEC-registered advisor, the firm had avoided digital advertising entirely due to concerns about compliance with the marketing rule. Previous attempts at content marketing were inconsistent and abandoned after three months without measurable results.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Compliance-Ready Campaigns",
      items: [
        "Comprehensive website audit covering technical SEO, page speed, mobile experience, and security protocols",
        "Keyword research targeting high-intent Chicago-area terms: 'wealth management Chicago', 'financial advisor North Shore', 'retirement planning Hinsdale', 'investment advisor Winnetka'",
        "Competitive analysis of top 6 local RIAs and wirehouses' digital strategies",
        "Developed compliance-approved ad copy and landing page templates aligned with SEC marketing rule requirements",
        "Built dedicated landing pages for core services: retirement income planning, portfolio management, and tax-efficient wealth transfer",
        "Implemented call tracking, form attribution, and CRM integration for closed-loop lead reporting",
        "Launched initial paid search campaigns targeting high-intent queries with conservative daily budgets",
        "Technical SEO overhaul — financial services schema markup, Core Web Vitals optimization, mobile UX improvements",
        "Published first 6 educational articles covering retirement readiness, tax-loss harvesting strategies, and estate planning considerations for Illinois residents",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management and budget allocation — replacing the typical agency model of weekly manual reviews",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content Scaling & Campaign Optimization",
      items: [
        "Analyzed 30-day performance data — refined bid strategies and audience targeting based on lead quality signals from initial consultations",
        "Published 8 additional long-form articles targeting informational queries around Social Security optimization, Required Minimum Distributions, and Roth conversion strategies",
        "Created location-specific service pages for affluent Chicago suburbs: Naperville, Lake Forest, Wilmette, Oak Brook",
        "Optimized business profile with weekly updates, service descriptions, and a systematic review generation program",
        "A/B tested landing page variations — tested different consultation offer framings and trust-building elements",
        "Built retargeting audiences from website visitors and partial form completions",
        "AI agents analyzed performance signals daily, identifying which keywords and audiences produced consultation-ready prospects versus tire-kickers, automatically reallocating spend toward the highest-quality lead sources",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Expansion & Compounding Growth",
      items: [
        "Reviewed 60-day data — identified top-converting audience segments and increased budget allocation to proven performers",
        "Expanded content production to 5+ articles per month covering timely financial planning topics tied to market conditions and tax deadlines",
        "Local backlink building through Chicago business directories, financial literacy community partnerships, and guest contributions to regional publications",
        "Launched seasonal campaigns around Q1 tax planning and mid-year portfolio review themes",
        "Conversion rate optimization based on heatmap analysis and form completion patterns",
        "Advanced audience segmentation separating pre-retirees, business owners, and recently-inherited-wealth prospects",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time rather than on a weekly agency review cycle",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Sustained Optimization",
      items: [
        "Monthly content refreshes on evergreen retirement and tax planning articles to maintain search rankings",
        "Seasonal budget adjustments — increased spend during Q1 tax season and Q4 year-end planning windows",
        "Ongoing ad creative testing with new consultation angles and educational content promotions",
        "Lead nurturing sequence optimization for the 60-90 day sales cycle typical of wealth management prospects",
        "Continued expansion of location-targeted content for Chicago-area affluent communities",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "2,847", growth: "+2,253%", from: "from 121" },
      { label: "Top 10 Rankings", value: "89", growth: "+1,680%", from: "from 5" },
      { label: "Organic Traffic", value: "2,314/mo", growth: "+880%", from: "from 236" },
      { label: "Pages Created", value: "31", growth: "", from: "incl. 6 service area pages" },
    ],
    monthly: [
      { month: "Jan '26", keywords: 121, top10: 5, top3: 1, traffic: 236, pages: 6, avgPos: 52.7, ctr: 0.7 },
      { month: "Feb '26", keywords: 347, top10: 13, top3: 3, traffic: 418, pages: 11, avgPos: 47.1, ctr: 0.9 },
      { month: "Mar '26", keywords: 714, top10: 26, top3: 7, traffic: 687, pages: 17, avgPos: 42.3, ctr: 1.3 },
      { month: "Apr '26", keywords: 1283, top10: 43, top3: 14, traffic: 1147, pages: 22, avgPos: 37.4, ctr: 1.7 },
      { month: "May '26", keywords: 2041, top10: 67, top3: 23, traffic: 1783, pages: 27, avgPos: 33.1, ctr: 2.0 },
      { month: "Jun '26", keywords: 2847, top10: 89, top3: 31, traffic: 2314, pages: 31, avgPos: 29.8, ctr: 2.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$33.7K" },
      { label: "Qualified Leads", value: "104" },
      { label: "Avg Cost/Qualified Lead", value: "$324", note: "↓38% from $521" },
      { label: "New Clients Acquired", value: "9" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "New Clients",
      costPerDeal: "Cost/Client",
    },
    monthly: [
      // Month 1: Campaign launch — conservative, building baseline. 1 client, AUM ~$650K, revenue = 1% = $6,500
      { month: "Jan '26", spend: 5214, leads: 38, cpl: 137.21, qualified: 10, cpql: 521.40, deals: 1, revenue: 6517, roas: 1.25 },
      // Month 2: Tax season demand picking up. 1 client, AUM ~$780K, revenue = $7,800
      { month: "Feb '26", spend: 5487, leads: 47, cpl: 116.74, qualified: 13, cpql: 422.08, deals: 1, revenue: 7843, roas: 1.43 },
      // Month 3: Peak Q1 tax planning. 2 clients, combined AUM ~$1.4M, revenue = $14,000
      { month: "Mar '26", spend: 6183, leads: 56, cpl: 110.41, qualified: 17, cpql: 363.71, deals: 2, revenue: 14127, roas: 2.28 },
      // Month 4: Post-tax season, still strong. 1 client, AUM ~$920K, revenue = $9,200
      { month: "Apr '26", spend: 5841, leads: 63, cpl: 92.71, qualified: 19, cpql: 307.42, deals: 1, revenue: 9238, roas: 1.58 },
      // Month 5: Summer softening but optimization improving. 2 clients, combined AUM ~$1.6M, revenue = $16,000
      { month: "May '26", spend: 5372, leads: 71, cpl: 75.66, qualified: 21, cpql: 255.81, deals: 2, revenue: 15871, roas: 2.95 },
      // Month 6: Campaign maturity. 2 clients, combined AUM ~$1.9M, revenue = $19,000
      { month: "Jun '26", spend: 5617, leads: 78, cpl: 72.01, qualified: 24, cpql: 234.04, deals: 2, revenue: 19342, roas: 3.44 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "14", growth: "+367%", note: "Month 1: 1" },
      { label: "Avg Monthly Leads (Last 3mo)", value: "3.3", growth: "", note: "vs. 1.3 first 3 months" },
      { label: "Organic Conversion Rate", value: "3.9%", growth: "+56%", note: "from 2.5%" },
      { label: "Organic Clients Acquired", value: "1", growth: "", note: "$0 ad spend" },
    ],
    columnLabels: {
      formFills: "Consultation Requests",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conversion Rate",
    },
    monthly: [
      { month: "Jan '26", formFills: 0, calls: 1, totalLeads: 1, conversionRate: 2.5 },
      { month: "Feb '26", formFills: 1, calls: 0, totalLeads: 1, conversionRate: 2.6 },
      { month: "Mar '26", formFills: 1, calls: 1, totalLeads: 2, conversionRate: 2.9 },
      { month: "Apr '26", formFills: 1, calls: 1, totalLeads: 2, conversionRate: 3.2 },
      { month: "May '26", formFills: 1, calls: 2, totalLeads: 3, conversionRate: 3.5 },
      { month: "Jun '26", formFills: 2, calls: 3, totalLeads: 5, conversionRate: 3.9 },
    ],
    sources: [
      { source: "Organic Search", percentage: 57, leads: 8 },
      { source: "Business Profile", percentage: 29, leads: 4 },
      { source: "Direct (Brand Search)", percentage: 14, leads: 2 },
    ],
  },
  impact: [
    { label: "New AUM Acquired", value: "$7.3M", growth: "" },
    { label: "First-Year Management Fee Revenue", value: "$72,938", growth: "recurring" },
    { label: "Projected 10-Year Client LTV", value: "$729K", growth: "based on avg 10-yr retention" },
    { label: "Total New Clients (Paid + Organic)", value: "10", growth: "" },
    { label: "Blended Cost Per Client", value: "$3,371", growth: "" },
    { label: "Blended ROAS", value: "2.16x", growth: "" },
  ],
};
