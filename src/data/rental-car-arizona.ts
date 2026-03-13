import { CaseStudyData } from "./types";

export const rentalCarArizona: CaseStudyData = {
  slug: 'rental-car-arizona',
  industry: 'Rental Car Company',
  headline: 'Arizona Rental Car Company Drives 412% Growth Through Local SEO',
  subheadline: 'Local Phoenix rental car company transforms from invisible to market leader, generating $248.7K in SEO-driven revenue over 12 months',
  
  heroStats: [
    { value: '412', unit: '%', label: 'Lead Increase' },
    { value: '78', unit: '%', label: 'Cost Reduction' },
    { value: '$248.7K', unit: '', label: 'Revenue Generated' },
    { value: '12', unit: 'months', label: 'Timeframe' }
  ],
  
  tags: ['SEO', 'Local Business', 'Arizona', 'Automotive'],

  company: {
    industry: 'Rental Car Company',
    employees: '12',
    revenue: '$1.2M',
    location: 'Phoenix, Arizona',
    description: 'A local Arizona rental car company serving Phoenix and surrounding areas, specializing in economy and mid-size vehicle rentals for both leisure and business travelers.',
  },

  challenges: [
    {
      title: 'Arizona Rental Car Company Struggles with Online Visibility',
      description: 'This Phoenix-based rental car company was losing market share to national chains due to poor search visibility. With limited online presence and no systematic SEO approach, they were missing potential customers searching for local rental options in Arizona. They were ranking on page 3+ for "car rental Phoenix" and related local searches, receiving less than 500 organic visits per month, while national competitors dominated local search results with no content strategy targeting Arizona tourism or business travel.'
    }
  ],

  strategy: [
    {
      phase: 1,
      months: "30-60 days",
      title: "Foundation & Technical Audit",
      items: [
        "Complete technical SEO audit focusing on local search factors for Arizona rental car market",
        "Deployed always-on AI optimization agents for continuous keyword monitoring and content recommendations across Phoenix metropolitan area",
        "Established local business profiles and citation management system targeting Arizona tourism and business travel directories",
        "Created location-specific landing pages for Phoenix, Scottsdale, Tempe, Mesa, and surrounding Arizona cities",
        "Implemented schema markup for local business and automotive rental services to capture Arizona-specific search intent",
        "AI-powered competitor analysis of national chains operating in Arizona to identify content and keyword gaps",
        "Foundation content creation covering Arizona travel destinations, business travel guides, and local rental policies",
        "Technical optimization for mobile-first indexing crucial for travelers searching on mobile devices throughout Arizona"
      ]
    },
    {
      phase: 2,
      months: "60-180 days",
      title: "Content Scaling & Local Authority Building",
      items: [
        "AI-generated content strategy producing 15-20 Arizona travel and rental guides monthly, covering destinations from Sedona to Tucson",
        "Targeted keyword clusters around Arizona tourism: Grand Canyon access, Sedona red rock tours, Flagstaff mountain trips, Phoenix business district navigation",
        "Seasonal content optimization aligned with Arizona travel patterns — winter snowbird season, spring baseball training, summer heat considerations",
        "Local link building campaign with Arizona tourism boards, hotels, and business travel partners throughout the state",
        "Geographic SEO expansion targeting Arizona's major travel corridors and business districts",
        "AI-driven content calendar integrating Arizona events: Spring Training, Phoenix Open, Arizona State University events, corporate conferences",
        "Advanced local SEO targeting Arizona city-specific long-tail keywords for both leisure and business rental needs",
        "Conversion optimization for Arizona-specific rental packages: airport transfers, desert tours, business week rates",
        "Real-time seasonal bid optimization accounting for Arizona's unique travel patterns and weather considerations"
      ]
    },
    {
      phase: 3,
      months: "180+ days",
      title: "Market Dominance & Advanced Optimization", 
      items: [
        "Achieved 3,789+ keywords ranking with focus on Arizona car rental searches across multiple cities and travel scenarios",
        "Organic traffic scaled to 23,456+ monthly visitors with comprehensive Arizona travel and rental content at every customer journey stage",
        "Advanced AI optimization delivering continuous compounding improvements in Arizona market — keyword monitoring, content updates, seasonal adjustments",
        "Cross-seasonal optimization using data insights to prepare for Arizona's distinct travel patterns throughout the year",
        "Authority building through strategic partnerships with Arizona tourism organizations, hotels, and corporate travel coordinators",
        "Advanced conversion tracking connecting initial Arizona-specific searches to completed rentals and customer lifetime value",
        "Geographic performance analysis identifying highest-value Arizona submarkets for service expansion and inventory allocation",
        "AI-powered content production scaling to 25+ monthly pieces covering every aspect of Arizona car rentals and travel",
        "Real-time competitive monitoring and response for Arizona rental car market dynamics and national chain promotional activities"
      ]
    }
  ],

  // SEO data (SEO-only case study)
  seo: {
    summary: [
      { label: "Total Keywords Ranking", value: "3,789", growth: "2,548%", from: "143" },
      { label: "Monthly Organic Traffic", value: "23,456", growth: "2,530%", from: "892" },
      { label: "Top 10 Rankings", value: "189", growth: "2,263%", from: "8" },
      { label: "Local Pack Appearances", value: "67", growth: "New", from: "0" },
      { label: "Featured Snippets", value: "12", growth: "New", from: "0" }
    ],
    monthly: [
      { month: "Feb '25", keywords: 143, top10: 8, top3: 2, traffic: 892, pages: 15, avgPos: 45.2, ctr: 1.8 },
      { month: "Mar '25", keywords: 201, top10: 12, top3: 3, traffic: 1247, pages: 22, avgPos: 42.1, ctr: 2.1 },
      { month: "Apr '25", keywords: 289, top10: 18, top3: 5, traffic: 1834, pages: 28, avgPos: 38.9, ctr: 2.4 },
      { month: "May '25", keywords: 467, top10: 28, top3: 8, traffic: 2956, pages: 34, avgPos: 35.7, ctr: 2.8 },
      { month: "Jun '25", keywords: 678, top10: 42, top3: 12, traffic: 4523, pages: 41, avgPos: 32.1, ctr: 3.2 },
      { month: "Jul '25", keywords: 912, top10: 58, top3: 17, traffic: 6789, pages: 48, avgPos: 28.6, ctr: 3.6 },
      { month: "Aug '25", keywords: 1247, top10: 76, top3: 23, traffic: 8934, pages: 55, avgPos: 25.4, ctr: 4.1 },
      { month: "Sep '25", keywords: 1534, top10: 95, top3: 29, traffic: 10567, pages: 62, avgPos: 22.8, ctr: 4.5 },
      { month: "Oct '25", keywords: 1923, top10: 118, top3: 36, traffic: 12834, pages: 69, avgPos: 20.7, ctr: 4.9 },
      { month: "Nov '25", keywords: 2456, top10: 145, top3: 44, traffic: 15672, pages: 76, avgPos: 19.2, ctr: 5.3 },
      { month: "Dec '25", keywords: 3034, top10: 167, top3: 52, traffic: 18923, pages: 83, avgPos: 18.4, ctr: 5.7 },
      { month: "Jan '26", keywords: 3789, top10: 189, top3: 61, traffic: 23456, pages: 91, avgPos: 17.8, ctr: 6.1 }
    ]
  },

  // Organic conversions - showing both lead gen and booking conversions
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "4,280", note: "Phone calls and inquiries" },
      { label: "Total Qualified Leads", value: "3,089", note: "72% qualification rate" },
      { label: "Total Bookings", value: "651", note: "21% close rate from qualified" },
      { label: "Average Conversion Rate", value: "4.8%", note: "Traffic to booking" }
    ],
    columnLabels: {
      formFills: "Online Inquiries",
      calls: "Phone Calls", 
      totalLeads: "Total Leads",
      conversionRate: "Conversion Rate"
    },
    monthly: [
      { month: "Feb '25", formFills: 48, calls: 79, totalLeads: 127, conversionRate: 1.4 },
      { month: "Mar '25", formFills: 52, calls: 83, totalLeads: 135, conversionRate: 1.7 },
      { month: "Apr '25", formFills: 61, calls: 97, totalLeads: 158, conversionRate: 2.6 },
      { month: "May '25", formFills: 79, calls: 124, totalLeads: 203, conversionRate: 3.1 },
      { month: "Jun '25", formFills: 112, calls: 175, totalLeads: 287, conversionRate: 3.6 },
      { month: "Jul '25", formFills: 131, calls: 203, totalLeads: 334, conversionRate: 4.9 },
      { month: "Aug '25", formFills: 152, calls: 237, totalLeads: 389, conversionRate: 4.4 },
      { month: "Sep '25", formFills: 144, calls: 223, totalLeads: 367, conversionRate: 3.5 },
      { month: "Oct '25", formFills: 157, calls: 244, totalLeads: 401, conversionRate: 3.1 },
      { month: "Nov '25", formFills: 179, calls: 277, totalLeads: 456, conversionRate: 2.9 },
      { month: "Dec '25", formFills: 205, calls: 318, totalLeads: 523, conversionRate: 2.8 },
      { month: "Jan '26", formFills: 255, calls: 396, totalLeads: 651, conversionRate: 2.8 }
    ],
    sources: [
      { source: "Organic Search", percentage: 78, leads: 3338 },
      { source: "Google My Business", percentage: 15, leads: 642 },
      { source: "Local Directories", percentage: 4, leads: 171 },
      { source: "Direct Traffic", percentage: 3, leads: 129 }
    ]
  },

  // Impact summary
  impact: [
    { label: "Total Revenue Generated", value: "$248.7K", growth: "From SEO-driven bookings" },
    { label: "Total Rental Bookings", value: "651", growth: "+412% increase" },
    { label: "Cost Per Lead Reduction", value: "78%", growth: "From $40.94 to $8.91" },
    { label: "Organic Keywords Ranking", value: "3,789", growth: "+3,646 from baseline" },
    { label: "Monthly Organic Traffic", value: "23,456", growth: "+22,564 vs start" },
    { label: "Market Position", value: "#1-3", growth: "Phoenix car rental searches" }
  ]
};