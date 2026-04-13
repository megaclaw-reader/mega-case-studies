import { CaseStudyData } from "./types";

export const lifeInsuranceChicago: CaseStudyData = {
  slug: "life-insurance-chicago",
  industry: "Life Insurance",
  headline: "How a Chicago Life Insurance Agency Generated $76,800 in New Policy Commissions with Quality Lead Tracking",
  subheadline: "Leveraging advanced tracking systems and call transcript analysis to identify high-intent prospects and improve close rates by 35%",
  heroStats: [
    { value: "76.8", unit: "K", label: "New Policy Commissions" },
    { value: "142", unit: "", label: "Qualified Leads Generated" },
    { value: "62", unit: "", label: "Policies Sold" },
    { value: "3.57", unit: "x", label: "Blended ROAS" }
  ],
  tags: ["Paid Advertising", "Lead Generation", "Local"],

  company: {
    industry: "Life Insurance",
    employees: "8-12",
    revenue: "$1-3M annually", 
    location: "Chicago, IL",
    description: "An independent life insurance agency in Chicago specializing in term life, whole life, and universal life policies for families and small business owners across the Chicagoland area."
  },

  challenges: [
    {
      title: "Poor Lead Quality and Tracking Blindspots",
      description: "Despite spending $4,000+ monthly on digital advertising, the agency struggled with low-quality leads and had no systematic way to track prospect engagement or identify which marketing channels produced the most qualified applicants."
    },
    {
      title: "High Volume of Unqualified Leads", 
      description: "Agents were wasting time on tire-kickers and information seekers, with no system to identify which ads generated serious prospects versus casual browsers looking for quotes."
    },
    {
      title: "No Call Transcript Analysis",
      description: "Manual follow-up processes were missing opportunities with warm prospects, and the agency had no way to analyze common objections or optimize agent scripts based on successful conversions."
    }
  ],

  strategy: [
    {
      phase: 1,
      months: "Month 1",
      title: "Foundation & Tracking Setup",
      items: [
        "Implemented multi-touch attribution tracking across all advertising channels with detailed prospect journey mapping",
        "Deployed AI optimization agents within ad accounts for continuous bid management and audience refinement based on lead quality metrics — replacing the traditional weekly-review cadence",
        "Set up comprehensive form tracking with progressive profiling to capture policy type preferences, coverage amounts, and urgency indicators for better Chicago market segmentation",
        "Launched call transcript analysis system to identify high-intent language patterns and common objections specific to Chicago area prospects",
        "Created separate landing pages and forms for term life vs. whole life prospects to improve initial qualification and conversion tracking"
      ]
    },
    {
      phase: 2,
      months: "Month 2", 
      title: "Lead Quality Optimization",
      items: [
        "Analyzed first 30 days of call transcripts to identify language patterns correlating with closed policies vs. non-conversions in the Chicago market",
        "AI agents automatically optimized audience segments based on lead-to-policy conversion data rather than just form submissions",
        "Implemented dynamic form fields that adjust based on prospect responses to gather more qualifying information about coverage needs",
        "Real-time bid adjustments for keywords and audiences showing higher policy conversion rates across Chicago metropolitan areas",
        "Launched A/B tests on ad creative specifically highlighting Chicago-area testimonials and local insurance expertise"
      ]
    },
    {
      phase: 3,
      months: "Month 3",
      title: "Advanced Nurturing & Scale", 
      items: [
        "Deployed automated nurturing sequences triggered by specific form responses and call transcript insights",
        "AI agents identified optimal follow-up timing based on prospect engagement patterns and policy type interest",
        "Expanded successful audience segments while maintaining lead quality thresholds through continuous optimization",
        "Implemented call scoring system to prioritize agent outreach based on transcript analysis and form data",
        "Launched expansion campaigns targeting Chicago suburbs with proven messaging and qualification framework"
      ]
    },
    {
      phase: 4,
      months: "Month 4",
      title: "Optimization & Performance Scaling",
      items: [
        "Continuous AI optimization compounded small daily improvements in bid management, audience targeting, and creative performance",
        "Advanced call transcript analysis identified specific phrases and questions that predict 80%+ close probability for Chicago prospects", 
        "Implemented predictive lead scoring that combines form data, engagement behavior, and initial call transcript analysis",
        "Real-time budget reallocation to highest-performing audience segments and geographic zones within Chicago metro",
        "Scaled winning creative variations while maintaining message testing to prevent audience fatigue"
      ]
    }
  ],

  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$21.5K" },
      { label: "Total Qualified Leads", value: "142" },
      { label: "Avg CPQL", value: "$151" },
      { label: "Total Revenue", value: "$76,800" },
      { label: "Blended ROAS", value: "3.57x" }
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost Per Lead",
      qualified: "Qualified Leads",
      cpql: "Cost Per Qualified Lead",
      deals: "Policies Sold",
      costPerDeal: "Cost/Policy",
    },
    monthly: [
      {
        month: "Jan '25",
        spend: 5000,
        leads: 89,
        cpl: 56,
        qualified: 28,
        cpql: 179,
        deals: 12,
        revenue: 9600,
        roas: 1.92
      },
      {
        month: "Feb '25", 
        spend: 5200,
        leads: 95,
        cpl: 55,
        qualified: 34,
        cpql: 153,
        deals: 16,
        revenue: 15200,
        roas: 2.92
      },
      {
        month: "Mar '25",
        spend: 5500,
        leads: 98,
        cpl: 56,
        qualified: 38,
        cpql: 145,
        deals: 18,
        revenue: 25200,
        roas: 4.58
      },
      {
        month: "Apr '25",
        spend: 5800,
        leads: 104,
        cpl: 56,
        qualified: 42,
        cpql: 138,
        deals: 16,
        revenue: 26800,
        roas: 4.62
      }
    ]
  },

  impact: [
    { label: "Policy Commissions Generated", value: "$76,800", growth: "+100% from baseline" },
    { label: "Qualified Lead Rate", value: "42%", growth: "+35% vs previous campaigns" },
    { label: "Agent Close Rate", value: "7.8 calls/policy", growth: "+35% efficiency improvement" },
    { label: "Lead Quality Score", value: "7.8/10", growth: "+144% vs initial 3.2/10" },
    { label: "Policies Sold", value: "62", growth: "100% from paid advertising" },
    { label: "Average Policy Value", value: "$1,239", growth: "+46% vs $850 baseline" }
  ]
};