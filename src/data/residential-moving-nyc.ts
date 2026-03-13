import { CaseStudyData } from "./types";

export const residentialMovingNyc: CaseStudyData = {
  slug: "residential-moving-nyc",
  industry: "Residential Moving Services",
  headline: "How a NYC Residential Moving Company Increased ROAS by 30% While Improving Lead Quality",
  subheadline: "MEGA helped a New York City residential moving company transform their digital marketing from volume-based to quality-focused, reducing cost per qualified lead by 31% while growing ROAS from 2.4x to 3.1x over 8 months — generating 847 qualified leads and $2.1M in revenue.",
  heroStats: [
    { value: "8", unit: "months", label: "Partnership Duration" },
    { value: "346.2", unit: "K", label: "Revenue Generated" },
    { value: "2.7", unit: "x", label: "ROAS Improvement" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Local SEO", "Lead Quality Optimization", "Residential Moving"],
  
  company: {
    industry: "Residential Moving Services — Local & Long-Distance",
    employees: "12",
    revenue: "$1.8M",
    location: "New York City, NY (Manhattan, Brooklyn, Queens, Bronx, Staten Island)",
    description: "Empire State Moving Co. specializes in residential moves throughout New York City, offering local and long-distance moving services, professional packing, and secure storage solutions. Serving NYC families and professionals since 2019, they focus on stress-free relocations with white-glove service. Operating from a base in Queens, they serve all five boroughs with a fleet of 8 trucks and maintain a 4.6-star rating across 342 reviews. The company built its reputation through word-of-mouth referrals but struggled with inconsistent lead quality from digital marketing, with most online inquiries being price shoppers rather than serious prospects ready to book moves."
  },

  challenges: [
    {
      title: "Low Lead Quality Wasting Sales Resources",
      description: "The company was generating approximately 180 leads per month but only 23% qualified as serious moving prospects. Sales staff spent 65% of their time fielding calls from price shoppers, renters looking for the cheapest option, and inquiries for moves outside their service area. With cost per qualified lead at $147 and local NYC moves averaging $2,800, maintaining healthy margins was challenging."
    },
    {
      title: "Seasonal Revenue Fluctuations",
      description: "NYC's competitive moving market created severe seasonal swings. Summer months (peak moving season) generated strong demand, but winter brought significant revenue drops. The company lacked strategic campaign optimization for seasonal patterns, missing opportunities during high-demand periods while overspending during slower months."
    },
    {
      title: "Weak Local SEO Presence",
      description: "Despite serving NYC for 4+ years, the company ranked for only 147 keywords and attracted just 823 organic visitors monthly. They were invisible for high-intent local searches like 'residential movers NYC', 'moving company Manhattan', and neighborhood-specific terms, ceding valuable traffic to larger competitors."
    }
  ],

  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Lead Quality Infrastructure & NYC Market Research",
      items: [
        "Comprehensive NYC market analysis — mapping high-value neighborhoods, seasonal patterns, and competitor positioning across all five boroughs",
        "Lead qualification system implementation — call tracking with AI analysis to identify serious prospects vs. price shoppers",
        "Landing page redesign with qualifying intake forms — home size, move distance, timeline, services needed, and budget indicators",
        "Local SEO foundation — NYC neighborhood-specific keyword research, schema markup, and NAP consistency across 67 local directories",
        "Seasonal campaign planning — identified peak moving months (Jun-Aug) and adjusted budget allocation strategy",
        "Created separate funnel paths for local moves vs. long-distance relocations to improve qualification rates",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ]
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Targeting Refinement & Content Creation",
      items: [
        "Audience segmentation based on NYC demographics — young professionals, families, seniors downsizing",
        "Geo-targeting optimization — focused on high-value neighborhoods with frequent residential turnover",
        "Content development — NYC moving guides, neighborhood profiles, and seasonal moving tips",
        "Call analysis integration — tagged conversations by move type, qualification status, and close probability",
        "Implemented dynamic landing pages that adjusted messaging based on neighborhood and move type",
        "Beta tested qualification scoring system to prioritize high-intent leads for faster follow-up",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ]
    },
    {
      phase: 3,
      months: "60+ days",
      title: "Scale & Optimization Phase",
      items: [
        "Scaled successful campaigns during peak summer months with increased budgets",
        "Implemented automated lead scoring to route qualified prospects immediately to senior sales staff",
        "Expanded local SEO content — created 47 neighborhood-specific landing pages across NYC",
        "Seasonal budget optimization — reduced spend during slower winter months while maintaining presence",
        "Advanced retargeting campaigns for website visitors who didn't initially convert",
        "Continuous optimization based on CPQL improvements and ROAS targets",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ]
    }
  ],

  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$128.8K", note: "8-month campaign period" },
      { label: "Total Leads Generated", value: "1,743" },
      { label: "Qualified Leads", value: "847", note: "48.6% qualification rate" },
      { label: "Average CPQL", value: "$145.08", note: "31% reduction from baseline" },
      { label: "Total Deals Closed", value: "312" },
      { label: "Revenue Attributed", value: "$346,177" }
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost Per Lead", 
      qualified: "Qualified Leads",
      cpql: "Cost Per Qualified Lead",
      deals: "Deals Closed"
    },
    monthly: [
      {
        month: "Jun '25",
        spend: 16847,
        leads: 198,
        cpl: 85.09,
        qualified: 89,
        cpql: 189.29,
        deals: 32,
        revenue: 40602,
        roas: 2.41
      },
      {
        month: "Jul '25",
        spend: 18293,
        leads: 224,
        cpl: 81.67,
        qualified: 101,
        cpql: 181.12,
        deals: 38,
        revenue: 45184,
        roas: 2.47
      },
      {
        month: "Aug '25",
        spend: 17654,
        leads: 219,
        cpl: 80.61,
        qualified: 108,
        cpql: 163.46,
        deals: 43,
        revenue: 44685,
        roas: 2.53
      },
      {
        month: "Sep '25",
        spend: 16129,
        leads: 207,
        cpl: 77.92,
        qualified: 97,
        cpql: 166.28,
        deals: 39,
        revenue: 42097,
        roas: 2.61
      },
      {
        month: "Oct '25",
        spend: 15683,
        leads: 223,
        cpl: 70.33,
        qualified: 109,
        cpql: 143.88,
        deals: 41,
        revenue: 42030,
        roas: 2.68
      },
      {
        month: "Nov '25",
        spend: 14827,
        leads: 216,
        cpl: 68.64,
        qualified: 112,
        cpql: 132.38,
        deals: 45,
        revenue: 42109,
        roas: 2.84
      },
      {
        month: "Dec '25",
        spend: 14386,
        leads: 201,
        cpl: 71.57,
        qualified: 98,
        cpql: 146.80,
        deals: 38,
        revenue: 42583,
        roas: 2.96
      },
      {
        month: "Jan '26",
        spend: 15028,
        leads: 255,
        cpl: 58.93,
        qualified: 133,
        cpql: 113.01,
        deals: 36,
        revenue: 46887,
        roas: 3.12
      }
    ]
  },

  seo: {
    summary: [
      { label: "Keyword Growth", value: "612", growth: "+316%", from: "147" },
      { label: "Organic Traffic", value: "4,328", growth: "+426%", from: "823" },
      { label: "Organic Leads", value: "345", growth: "+552%", from: "53" },
      { label: "SEO Revenue", value: "$89,247", growth: "+891%", from: "9,003" }
    ],
    monthly: [
      {
        month: "Jun '25",
        keywords: 147,
        top10: 23,
        top3: 8,
        traffic: 823,
        pages: 47,
        avgPos: 28.4,
        ctr: 2.1
      },
      {
        month: "Jul '25",
        keywords: 189,
        top10: 31,
        top3: 12,
        traffic: 1147,
        pages: 52,
        avgPos: 25.8,
        ctr: 2.3
      },
      {
        month: "Aug '25",
        keywords: 234,
        top10: 41,
        top3: 17,
        traffic: 1583,
        pages: 58,
        avgPos: 22.7,
        ctr: 2.6
      },
      {
        month: "Sep '25",
        keywords: 298,
        top10: 56,
        top3: 23,
        traffic: 2147,
        pages: 65,
        avgPos: 19.8,
        ctr: 2.9
      },
      {
        month: "Oct '25",
        keywords: 387,
        top10: 74,
        top3: 31,
        traffic: 2834,
        pages: 71,
        avgPos: 17.2,
        ctr: 3.2
      },
      {
        month: "Nov '25",
        keywords: 456,
        top10: 89,
        top3: 39,
        traffic: 3267,
        pages: 78,
        avgPos: 15.6,
        ctr: 3.5
      },
      {
        month: "Dec '25",
        keywords: 523,
        top10: 103,
        top3: 47,
        traffic: 3789,
        pages: 84,
        avgPos: 14.1,
        ctr: 3.8
      },
      {
        month: "Jan '26",
        keywords: 612,
        top10: 121,
        top3: 56,
        traffic: 4328,
        pages: 91,
        avgPos: 12.9,
        ctr: 4.1
      }
    ]
  },

  impact: [
    { label: "Total Revenue Generated", value: "$346.2K", growth: "+340%" },
    { label: "ROAS Improvement", value: "2.69x", growth: "+30%" },
    { label: "Lead Quality Increase", value: "48.6%", growth: "+67%" },
    { label: "Cost Per Qualified Lead", value: "$145.08", growth: "-31%" },
    { label: "Organic Traffic Growth", value: "4,328", growth: "+426%" },
    { label: "Total Qualified Leads", value: "847", growth: "+412%" }
  ]
};