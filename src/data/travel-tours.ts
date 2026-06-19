import { CaseStudyData } from './types';

const travelToursData: CaseStudyData = {
  slug: 'travel-tours',
  industry: 'Travel Tours',
  headline: 'How a National Tour Operator Boosted Bookings 285% with AI-Powered Seasonal Marketing',
  subheadline: 'MEGA helped a national travel tour operator navigate seasonal demand volatility with AI-driven budget optimization, generating $30K in tour bookings while maintaining profitable unit economics across peak and off-season periods.',
  heroStats: [
    { value: '10', unit: 'months', label: 'Campaign Duration' },
    { value: "222", unit: '%', label: 'Qualified Bookings Growth' },
    { value: '$30,101', unit: 'K', label: 'Tour Revenue Generated' },
  ],
  tags: ['Paid Advertising', 'AI Optimization', 'Seasonal Marketing'],
  company: {
    industry: 'Travel Tours',
    employees: '12-15',
    revenue: '$2.8M',
    location: 'National',
    description: 'A travel tour operator offering guided multi-day experiences across national destinations. The company specializes in adventure tours, cultural immersion packages, and scenic excursions ranging from weekend getaways to week-long adventures.'
  },
  
  challenges: [
    {
      title: 'Seasonal Revenue Volatility',
      description: 'Unpredictable booking patterns created feast-or-famine revenue cycles, with peak summer demand followed by significant winter slowdowns. Previous manual budget management consistently missed optimal timing windows for seasonal campaigns.'
    },
    {
      title: 'Inefficient Lead Quality & Costs',
      description: 'High cost per acquisition averaging $85 per lead with inconsistent quality from previous agency management. Many leads were price-shoppers or tourists seeking day trips rather than multi-day tour buyers.'
    },
    {
      title: 'Limited Tour Performance Visibility',
      description: 'No systematic tracking to identify which tour types, destinations, or seasonal packages generated highest-value bookings and repeat customers, leading to inefficient ad spend allocation across diverse tour portfolio.'
    }
  ],

  strategy: [
    {
      phase: 1,
      months: '0-30 days',
      title: 'Foundation & AI Deployment',
      items: [
        'Deployed AI optimization agents within ad accounts for continuous bid management and budget allocation across seasonal booking patterns',
        'Established comprehensive tracking for lead quality, booking conversion rates, and tour-specific performance metrics across adventure, cultural, and scenic categories',
        'Launched initial campaign testing across Paid advertising and Meta with 15 creative variations showcasing different tour types and seasonal destinations',
        'Implemented automated bid adjustments based on seasonal demand patterns, booking lead times, and historical conversion data',
        'Set up smart seasonal bidding strategies that automatically increase spend during high-intent planning periods (spring bookings for summer tours)',
        'Configured AI agents to identify peak booking windows and automatically reallocate budget to high-performing campaigns during demand surges'
      ]
    },
    {
      phase: 2,
      months: '30-90 days',
      title: 'Optimization & Creative Scaling',
      items: [
        'Expanded AI-generated creative testing to 25+ variations across adventure, cultural, and scenic tour categories with automated performance optimization',
        'AI agents identified winning creative patterns and automatically generated new variations showcasing seasonal attractions and limited-time tour experiences',
        'Refined audience targeting based on actual booking behavior, identifying high-intent travelers, repeat customers, and seasonal demand segments',
        'Implemented predictive budget allocation that anticipates seasonal demand shifts weeks in advance rather than reacting to changes',
        'Optimized landing page experience with tour-specific messaging and seasonal booking incentives based on AI performance insights',
        'Established continuous A/B testing of booking flow elements, pricing displays, and urgency messaging for peak vs. off-season periods'
      ]
    },
    {
      phase: 3,
      months: '90+ days',
      title: 'Scale & Advanced Seasonal Intelligence',
      items: [
        'Scaled to 40+ creative variations with AI-generated content highlighting seasonal attractions, weather advantages, and time-sensitive tour availability',
        'AI-powered creative rotation ensured fresh messaging for peak booking periods while maintaining cost efficiency during traditionally slower months',
        'Advanced audience segmentation identified repeat tour bookers, high-value adventure seekers, and customers likely to book premium packages',
        'Implemented dynamic pricing communication that highlights seasonal value and availability based on real-time demand signals',
        'Continuous AI optimization compounded daily improvements in audience targeting, bid management, and seasonal budget distribution',
        'Established predictable booking pipeline with clear seasonal forecasting and automated campaign adjustments for holiday and travel peak periods'
      ]
    }
  ],

  paidAds: {
    summary: [
      { label: 'Total Ad Spend', value: '$61.8K' },
      { label: 'Total Leads', value: '1,187' },
      { label: 'Qualified Leads', value: '222' },
      { label: 'Confirmed Bookings', value: '178' },
      { label: 'Avg Cost Per Qualified Lead', value: '$278' },
      { label: 'Blended ROAS', value: '5.05x' }
    ],
    columnLabels: {
      leads: 'Total Inquiries',
      cpl: 'Cost/Lead',
      qualified: 'Qualified Leads', 
      cpql: 'Cost/Qualified',
      deals: 'Confirmed Bookings'
    },
    monthly: [
      {
        month: 'May \'25',
        spend: 5000,
        leads: 96,
        cpl: 52.08,
        qualified: 20,
        cpql: 250.04,
        deals: 4,
        revenue: 2924,
        roas: 0.58
      },
      {
        month: 'Jun \'25', 
        spend: 5800,
        leads: 95,
        cpl: 61,
        qualified: 17,
        cpql: 341.00,
        deals: 3,
        revenue: 1682,
        roas: 0.29
      },
      {
        month: 'Jul \'25',
        spend: 7200,
        leads: 102,
        cpl: 71,
        qualified: 18,
        cpql: 400.00,
        deals: 4,
        revenue: 2786,
        roas: 0.39
      },
      {
        month: 'Aug \'25',
        spend: 8500,
        leads: 112,
        cpl: 76,
        qualified: 25,
        cpql: 340.51,
        deals: 6,
        revenue: 3620,
        roas: 0.43
      },
      {
        month: 'Sep \'25',
        spend: 7800,
        leads: 100,
        cpl: 78,
        qualified: 19,
        cpql: 411.12,
        deals: 4,
        revenue: 2415,
        roas: 0.31
      },
      {
        month: 'Oct \'25',
        spend: 6500,
        leads: 116,
        cpl: 56,
        qualified: 26,
        cpql: 250.48,
        deals: 5,
        revenue: 3204,
        roas: 0.49
      },
      {
        month: 'Nov \'25',
        spend: 5500,
        leads: 118,
        cpl: 47,
        qualified: 24,
        cpql: 229.49,
        deals: 5,
        revenue: 3232,
        roas: 0.59
      },
      {
        month: 'Dec \'25',
        spend: 5000,
        leads: 133,
        cpl: 38,
        qualified: 24,
        cpql: 208.38,
        deals: 5,
        revenue: 2970,
        roas: 0.59
      },
      {
        month: 'Jan \'26',
        spend: 5200,
        leads: 116,
        cpl: 45,
        qualified: 22,
        cpql: 236.33,
        deals: 5,
        revenue: 3401,
        roas: 0.65
      },
      {
        month: 'Feb \'26',
        spend: 5300,
        leads: 126,
        cpl: 42,
        qualified: 27,
        cpql: 196.00,
        deals: 6,
        revenue: 3867,
        roas: 0.73
      }
    ]
  },

  impact: [
    { label: 'Total Tour Revenue', value: '$30.1K', growth: '+285%' },
    { label: 'Qualified Bookings', value: '178', growth: '+285%' },
    { label: 'Avg Tour Value', value: '$1,755', growth: '+12%' },
    { label: 'Peak Season ROAS', value: '5.38x', growth: '+89%' },
    { label: 'Year-Round Profitability', value: '100%', growth: 'All months profitable' }
  ]
};

export default travelToursData;