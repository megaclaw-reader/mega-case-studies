import { CaseStudyData } from './types';

const travelToursData: CaseStudyData = {
  slug: 'travel-tours',
  industry: 'Travel Tours',
  headline: 'How a National Tour Operator Boosted Bookings 285% with AI-Powered Seasonal Marketing',
  subheadline: 'MEGA helped a national travel tour operator navigate seasonal demand volatility with AI-driven budget optimization, generating $312K in tour bookings while maintaining profitable unit economics across peak and off-season periods.',
  heroStats: [
    { value: '10', unit: 'months', label: 'Campaign Duration' },
    { value: '285', unit: '%', label: 'Qualified Bookings Growth' },
    { value: '312.4', unit: 'K', label: 'Tour Revenue Generated' },
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
        'Launched initial campaign testing across Google Ads and Meta with 15 creative variations showcasing different tour types and seasonal destinations',
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
      { label: 'Qualified Leads', value: '623' },
      { label: 'Confirmed Bookings', value: '178' },
      { label: 'Avg Cost Per Qualified Lead', value: '$99' },
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
        qualified: 51,
        cpql: 98.04,
        deals: 15,
        revenue: 26250,
        roas: 5.25
      },
      {
        month: 'Jun \'25', 
        spend: 5800,
        leads: 109,
        cpl: 53.21,
        qualified: 58,
        cpql: 100.00,
        deals: 16,
        revenue: 28800,
        roas: 4.97
      },
      {
        month: 'Jul \'25',
        spend: 7200,
        leads: 142,
        cpl: 50.70,
        qualified: 75,
        cpql: 96.00,
        deals: 22,
        revenue: 38500,
        roas: 5.35
      },
      {
        month: 'Aug \'25',
        spend: 8500,
        leads: 168,
        cpl: 50.60,
        qualified: 89,
        cpql: 95.51,
        deals: 26,
        revenue: 45500,
        roas: 5.35
      },
      {
        month: 'Sep \'25',
        spend: 7800,
        leads: 156,
        cpl: 50.00,
        qualified: 82,
        cpql: 95.12,
        deals: 24,
        revenue: 42000,
        roas: 5.38
      },
      {
        month: 'Oct \'25',
        spend: 6500,
        leads: 125,
        cpl: 52.00,
        qualified: 66,
        cpql: 98.48,
        deals: 19,
        revenue: 33250,
        roas: 5.12
      },
      {
        month: 'Nov \'25',
        spend: 5500,
        leads: 108,
        cpl: 50.93,
        qualified: 57,
        cpql: 96.49,
        deals: 16,
        revenue: 28000,
        roas: 5.09
      },
      {
        month: 'Dec \'25',
        spend: 5000,
        leads: 89,
        cpl: 56.18,
        qualified: 47,
        cpql: 106.38,
        deals: 13,
        revenue: 22750,
        roas: 4.55
      },
      {
        month: 'Jan \'26',
        spend: 5200,
        leads: 92,
        cpl: 56.52,
        qualified: 48,
        cpql: 108.33,
        deals: 14,
        revenue: 24500,
        roas: 4.71
      },
      {
        month: 'Feb \'26',
        spend: 5300,
        leads: 102,
        cpl: 51.96,
        qualified: 50,
        cpql: 106.00,
        deals: 13,
        revenue: 22850,
        roas: 4.31
      }
    ]
  },

  impact: [
    { label: 'Total Tour Revenue', value: '$312.4K', growth: '+285%' },
    { label: 'Qualified Bookings', value: '178', growth: '+285%' },
    { label: 'Avg Tour Value', value: '$1,755', growth: '+12%' },
    { label: 'Peak Season ROAS', value: '5.38x', growth: '+89%' },
    { label: 'Year-Round Profitability', value: '100%', growth: 'All months profitable' }
  ]
};

export default travelToursData;