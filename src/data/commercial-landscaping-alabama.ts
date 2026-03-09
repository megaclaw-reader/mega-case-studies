import { CaseStudyData } from './types';

export const commercialLandscapingAlabama: CaseStudyData = {
  slug: 'commercial-landscaping-alabama',
  industry: 'Commercial Landscaping',
  headline: 'How Alabama\'s Premier Commercial Landscaper Grew Revenue 347% in 8 Months',
  subheadline: 'From $6,575/month ad spend to $127,500 monthly revenue through strategic lead generation and SEO optimization',
  
  heroStats: [
    { value: '347', unit: '%', label: 'Revenue Growth' },
    { value: '5.5', unit: 'x', label: 'Average ROAS' },
    { value: '719', unit: '', label: 'Total Leads Generated' },
    { value: '28.5', unit: '%', label: 'Lead Qualification Rate' }
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
        'Lead qualification system implementation to identify genuine commercial prospects'
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
        'Integration of revenue tracking systems for full-funnel attribution'
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
        'Preparation for sustained growth beyond initial engagement period'
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
      { month: 'Jan 2025', keywords: 89, top10: 12, top3: 4, traffic: 1847, pages: 23, avgPos: 47.3, ctr: 2.4 },
      { month: 'Feb 2025', keywords: 134, top10: 18, top3: 6, traffic: 2156, pages: 28, avgPos: 43.8, ctr: 2.7 },
      { month: 'Mar 2025', keywords: 267, top10: 34, top3: 11, traffic: 3429, pages: 35, avgPos: 38.2, ctr: 3.1 },
      { month: 'Apr 2025', keywords: 412, top10: 58, top3: 19, traffic: 5683, pages: 47, avgPos: 32.7, ctr: 3.6 },
      { month: 'May 2025', keywords: 587, top10: 89, top3: 28, traffic: 7892, pages: 62, avgPos: 28.4, ctr: 4.2 },
      { month: 'Jun 2025', keywords: 743, top10: 127, top3: 41, traffic: 10247, pages: 78, avgPos: 24.1, ctr: 4.8 },
      { month: 'Jul 2025', keywords: 892, top10: 167, top3: 58, traffic: 12934, pages: 94, avgPos: 21.6, ctr: 5.3 },
      { month: 'Aug 2025', keywords: 1047, top10: 198, top3: 72, traffic: 15328, pages: 108, avgPos: 19.3, ctr: 5.9 }
    ]
  },
  
  paidAds: {
    summary: [
      { label: 'Total Ad Spend', value: '$69.2K', note: 'Progressive scaling from $6,575 to $10,764/month' },
      { label: 'Total Leads Generated', value: '532', note: 'High-intent commercial prospects' },
      { label: 'Qualified Leads', value: '218', note: '28.5% qualification rate' },
      { label: 'Average Cost Per Lead', value: '$117', note: 'Competitive for commercial landscaping' },
      { label: 'Average Cost Per Qualified Lead', value: '$317', note: 'Strong qualification efficiency' },
      { label: 'Total Revenue Generated', value: '$1,537,200', note: 'Deals closed from paid campaigns' }
    ],
    columnLabels: {
      leads: 'Leads',
      cpl: 'Cost/Lead',
      qualified: 'Qualified',
      cpql: 'Cost/Qualified',
      deals: 'Deals Closed'
    },
    monthly: [
      { month: 'Jan 2025', spend: 6575, leads: 52, cpl: 126.44, qualified: 18, cpql: 365.28, deals: 5, revenue: 137500, roas: 20.91 },
      { month: 'Feb 2025', spend: 6825, leads: 49, cpl: 139.29, qualified: 17, cpql: 401.47, deals: 4, revenue: 124000, roas: 18.18 },
      { month: 'Mar 2025', spend: 7475, leads: 61, cpl: 122.54, qualified: 23, cpql: 325.00, deals: 7, revenue: 203500, roas: 27.23 },
      { month: 'Apr 2025', spend: 8350, leads: 78, cpl: 107.05, qualified: 29, cpql: 287.93, deals: 9, revenue: 247500, roas: 29.64 },
      { month: 'May 2025', spend: 9150, leads: 84, cpl: 108.93, qualified: 31, cpql: 295.16, deals: 9, revenue: 258500, roas: 28.25 },
      { month: 'Jun 2025', spend: 9875, leads: 89, cpl: 110.96, qualified: 33, cpql: 299.24, deals: 10, revenue: 275000, roas: 27.85 },
      { month: 'Jul 2025', spend: 10764, leads: 93, cpl: 115.74, qualified: 35, cpql: 307.54, deals: 11, revenue: 302500, roas: 28.10 },
      { month: 'Aug 2025', spend: 10138, leads: 87, cpl: 116.51, qualified: 32, cpql: 316.81, deals: 9, revenue: 248200, roas: 24.49 }
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
      { month: 'Jan 2025', formFills: 5, calls: 3, totalLeads: 8, conversionRate: 0.43 },
      { month: 'Feb 2025', formFills: 7, calls: 4, totalLeads: 11, conversionRate: 0.51 },
      { month: 'Mar 2025', formFills: 10, calls: 6, totalLeads: 16, conversionRate: 0.47 },
      { month: 'Apr 2025', formFills: 16, calls: 9, totalLeads: 25, conversionRate: 0.44 },
      { month: 'May 2025', formFills: 22, calls: 12, totalLeads: 34, conversionRate: 0.43 },
      { month: 'Jun 2025', formFills: 28, calls: 13, totalLeads: 41, conversionRate: 0.40 },
      { month: 'Jul 2025', formFills: 35, calls: 17, totalLeads: 52, conversionRate: 0.40 },
      { month: 'Aug 2025', formFills: 39, calls: 19, totalLeads: 58, conversionRate: 0.38 }
    ],
    sources: [
      { source: 'Commercial Landscaping Services', percentage: 32, leads: 78 },
      { source: 'Property Maintenance', percentage: 28, leads: 69 },
      { source: 'Landscape Installation', percentage: 25, leads: 61 },
      { source: 'Grounds Management', percentage: 15, leads: 37 }
    ]
  },
  
  impact: [
    { label: 'Total Revenue Generated', value: '$1.80M', growth: '347% increase in monthly revenue' },
    { label: 'Total Marketing Investment', value: '$70,152', growth: 'Progressive scaling approach' },
    { label: 'Blended Return on Ad Spend', value: '21.9x', growth: 'Exceptional ROI across channels' },
    { label: 'Total Qualified Leads', value: '273', growth: 'Combined paid + organic prospects' },
    { label: 'New Client Contracts', value: '81', growth: 'Sustainable business growth' },
    { label: 'Monthly Revenue Growth', value: '$467,200', growth: 'Peak month performance' }
  ]
};