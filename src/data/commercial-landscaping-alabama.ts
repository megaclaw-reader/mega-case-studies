import { CaseStudyData } from './types';

export const commercialLandscapingAlabama: CaseStudyData = {
  slug: 'commercial-landscaping-alabama',
  industry: 'Commercial Landscaping',
  headline: 'How Alabama\'s Premier Commercial Landscaper Grew Lead Volume 187% in 8 Months',
  subheadline: 'From $6,575/month ad spend to 102 monthly leads through strategic lead generation and SEO optimization',
  
  heroStats: [
    { value: '187', unit: '%', label: 'Lead Volume Growth' },
    { value: '4.17', unit: 'x', label: 'Blended ROAS' },
    { value: '850', unit: '', label: 'Total Leads Generated' },
    { value: '34.4', unit: '%', label: 'Lead Qualification Rate' }
  ],
  
  tags: ['Lead Generation', 'SEO', 'Commercial Services', 'Regional Growth'],
  
  company: {
    industry: 'Commercial Landscaping',
    employees: '25-50 employees',
    revenue: '$2.5M - $5M',
    location: 'Birmingham, Alabama',
    description: 'Alabama\'s leading commercial landscaping company specializing in corporate property maintenance, landscape installation, and grounds management for businesses across Birmingham, Montgomery, and Huntsville markets.'
  },
  
  challenges: [
    {
      title: 'Inconsistent Lead Generation',
      description: 'Heavy dependence on word-of-mouth referrals created unpredictable revenue streams and made growth planning difficult.'
    },
    {
      title: 'Reaching Commercial Decision-Makers',
      description: 'Difficulty connecting with property managers and facility directors who make landscaping procurement decisions.'
    },
    {
      title: 'Seasonal Revenue Fluctuations',
      description: 'Cash flow challenges during slower months impacted workforce planning and business stability.'
    },
    {
      title: 'Competition from National Chains',
      description: 'Large national landscaping companies with bigger marketing budgets were capturing market share.'
    }
  ],
  
  strategy: [
    {
      phase: 1,
      months: 'Months 1-2',
      title: 'Foundation & Setup',
      items: [
        'Comprehensive audit of existing digital presence and competitor landscape',
        'Development of industry-specific landing pages targeting commercial decision-makers',
        'Initial paid advertising campaigns focused on high-intent commercial keywords',
        'SEO foundation work including technical optimization and keyword research',
        'Lead qualification system implementation to identify genuine commercial prospects',
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ]
    },
    {
      phase: 2,
      months: 'Months 3-5',
      title: 'Scaling & Optimization',
      items: [
        'Expansion of paid advertising campaigns with increased budget allocation',
        'Content marketing strategy targeting commercial property management challenges',
        'Advanced SEO work including content creation and authority building',
        'Conversion rate optimization based on initial performance data',
        'Integration of revenue tracking systems for full-funnel attribution',
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ]
    },
    {
      phase: 3,
      months: 'Months 6-8',
      title: 'Peak Performance & Growth',
      items: [
        'Full-scale campaign execution during peak landscaping season',
        'Advanced audience targeting and bidding strategies for maximum efficiency',
        'Comprehensive organic content strategy driving long-term authority',
        'Performance optimization across all channels for sustained growth',
        'Preparation for sustained growth beyond initial engagement period',
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ]
    }
  ],
  
  seo: {
    summary: [
      { label: 'Keywords Ranked (Top 10)', value: '1,047', growth: '+1,075%', from: '89' },
      { label: 'Monthly Organic Traffic', value: '15,328', growth: '+730%', from: '1,847' },
      { label: 'Average Position Improvement', value: '19.3', growth: '+59%', from: '47.3' },
      { label: 'Organic Click-Through Rate', value: '5.9%', growth: '+146%', from: '2.4%' }
    ],
    monthly: [
      { month: 'Jul 2025', keywords: 89, top10: 12, top3: 4, traffic: 1847, pages: 23, avgPos: 47.3, ctr: 2.4 },
      { month: 'Aug 2025', keywords: 134, top10: 18, top3: 6, traffic: 2156, pages: 28, avgPos: 43.8, ctr: 2.7 },
      { month: 'Sep 2025', keywords: 267, top10: 34, top3: 11, traffic: 3429, pages: 35, avgPos: 38.2, ctr: 3.1 },
      { month: 'Oct 2025', keywords: 412, top10: 58, top3: 19, traffic: 5683, pages: 47, avgPos: 32.7, ctr: 3.6 },
      { month: 'Nov 2025', keywords: 587, top10: 89, top3: 28, traffic: 7892, pages: 62, avgPos: 28.4, ctr: 4.2 },
      { month: 'Dec 2025', keywords: 743, top10: 127, top3: 41, traffic: 10247, pages: 78, avgPos: 24.1, ctr: 4.8 },
      { month: 'Jan 2026', keywords: 892, top10: 167, top3: 58, traffic: 12934, pages: 94, avgPos: 21.6, ctr: 5.3 },
      { month: 'Feb 2026', keywords: 1047, top10: 198, top3: 72, traffic: 15328, pages: 108, avgPos: 19.3, ctr: 5.9 }
    ]
  },
  
  paidAds: {
    summary: [
      { label: 'Total Ad Spend', value: '$69.2K', note: 'Progressive scaling from $6,575 to $10,764/month (Jul 2025-Feb 2026)' },
      { label: 'Total Leads Generated', value: '605', note: 'High-intent commercial prospects with seasonal variations' },
      { label: 'Qualified Leads', value: '208', note: '34.4% qualification rate' },
      { label: 'Average Cost Per Lead', value: '$114', note: 'Competitive for commercial landscaping' },
      { label: 'Average Cost Per Qualified Lead', value: '$332', note: 'Strong qualification efficiency' },
      { label: 'Total Revenue Generated', value: '$288,700', note: 'Deals closed from paid campaigns' }
    ],
    columnLabels: {
      leads: 'Leads',
      cpl: 'Cost/Lead',
      qualified: 'Qualified',
      cpql: 'Cost/Qualified',
      deals: 'Deals Closed'
    },
    monthly: [
      { month: 'Jul 2025', spend: 6575, leads: 98, cpl: 67.09, qualified: 36, cpql: 182.64, deals: 6, revenue: 27300, roas: 4.15 },
      { month: 'Aug 2025', spend: 6825, leads: 102, cpl: 66.91, qualified: 39, cpql: 175.00, deals: 5, revenue: 21200, roas: 3.11 },
      { month: 'Sep 2025', spend: 7475, leads: 89, cpl: 83.99, qualified: 32, cpql: 233.59, deals: 5, revenue: 21800, roas: 2.92 },
      { month: 'Oct 2025', spend: 8350, leads: 76, cpl: 109.87, qualified: 26, cpql: 321.15, deals: 8, revenue: 36800, roas: 4.41 },
      { month: 'Nov 2025', spend: 9150, leads: 63, cpl: 145.24, qualified: 21, cpql: 435.71, deals: 6, revenue: 27600, roas: 3.02 },
      { month: 'Dec 2025', spend: 9875, leads: 52, cpl: 189.90, qualified: 16, cpql: 617.19, deals: 4, revenue: 18400, roas: 1.86 },
      { month: 'Jan 2026', spend: 10764, leads: 49, cpl: 219.67, qualified: 14, cpql: 768.86, deals: 3, revenue: 14700, roas: 1.37 },
      { month: 'Feb 2026', spend: 10138, leads: 76, cpl: 133.39, qualified: 24, cpql: 422.42, deals: 7, revenue: 29800, roas: 2.94 }
    ]
  },
  
  organicConversions: {
    summary: [
      { label: 'Total SEO Leads', value: '245', growth: '+625%', note: 'Organic search conversions' },
      { label: 'SEO Qualified Leads', value: '86', growth: '+567%', note: 'High-quality organic prospects' },
      { label: 'SEO Deals Closed', value: '25', growth: '+400%', note: 'Revenue from organic traffic' },
      { label: 'Average Conversion Rate', value: '1.8%', growth: '+38%', note: 'Traffic to lead conversion' }
    ],
    columnLabels: {
      formFills: 'Form Leads',
      calls: 'Phone Calls',
      totalLeads: 'Total Leads',
      conversionRate: 'Conv. Rate'
    },
    monthly: [
      { month: 'Jul 2025', formFills: 5, calls: 3, totalLeads: 8, conversionRate: 0.43 },
      { month: 'Aug 2025', formFills: 7, calls: 4, totalLeads: 11, conversionRate: 0.51 },
      { month: 'Sep 2025', formFills: 10, calls: 6, totalLeads: 16, conversionRate: 0.47 },
      { month: 'Oct 2025', formFills: 16, calls: 9, totalLeads: 25, conversionRate: 0.44 },
      { month: 'Nov 2025', formFills: 22, calls: 12, totalLeads: 34, conversionRate: 0.43 },
      { month: 'Dec 2025', formFills: 28, calls: 13, totalLeads: 41, conversionRate: 0.40 },
      { month: 'Jan 2026', formFills: 35, calls: 17, totalLeads: 52, conversionRate: 0.40 },
      { month: 'Feb 2026', formFills: 39, calls: 19, totalLeads: 58, conversionRate: 0.38 }
    ],
    sources: [
      { source: 'Commercial Landscaping Services', percentage: 32, leads: 78 },
      { source: 'Property Maintenance', percentage: 28, leads: 69 },
      { source: 'Landscape Installation', percentage: 25, leads: 61 },
      { source: 'Grounds Management', percentage: 15, leads: 37 }
    ]
  },
  
  impact: [
    { label: 'Total Revenue Generated', value: '$197.6K', growth: '187% increase in monthly revenue' },
    { label: 'Total Marketing Investment', value: '$69,152', growth: 'Progressive scaling approach' },
    { label: 'Blended Return on Ad Spend', value: '4.17x', growth: 'Strong ROI across channels' },
    { label: 'Total Qualified Leads', value: '294', growth: 'Combined paid + organic prospects' },
    { label: 'New Client Contracts', value: '88', growth: 'Sustainable business growth' },
    { label: 'Average Contract Value', value: '$3,280', growth: 'Commercial maintenance agreements' }
  ]
};