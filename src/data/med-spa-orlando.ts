import { CaseStudyData } from "./types";

export const medSpaOrlando: CaseStudyData = {
  slug: "med-spa-orlando",
  industry: "Med Spa",
  headline: "How an Orlando Med Spa Generated 836 Qualified Leads and Scaled Ad Spend From $6.5K to $8K/Month in Just 6 Months",
  subheadline: "MEGA helped a boutique med spa in Orlando, Florida build a dominant local SEO presence reaching 11,200+ monthly visitors while optimizing paid campaigns to deliver 836 qualified leads — reducing cost per qualified lead by 60% and achieving a 5.4x blended ROAS.",
  heroStats: [
    { value: "6", unit: "months", label: "Partnership Duration" },
    { value: "836", unit: "", label: "Qualified Leads" },
    { value: "3.4", unit: "x", label: "Blended ROAS" },
  ],
  tags: ["Local SEO", "Paid Advertising", "Lead Generation"],
  company: {
    industry: "Med Spa — Aesthetic & Cosmetic Treatments",
    employees: "11",
    revenue: "$1.8M",
    location: "Orlando, Florida",
    description: "A boutique med spa located in the heart of Orlando offering a full range of aesthetic treatments including Botox and neuromodulators, dermal fillers, laser skin resurfacing, body contouring, hydrafacials, chemical peels, PRP therapy, and IV vitamin infusions. With 11 staff members including two nurse practitioners and a medical director, the practice had built a steady referral-based clientele over 3 years but was struggling to compete digitally against national chains and aggressively marketed competitors in the Orlando metro area. Organic traffic was stagnant at roughly 410 monthly visits, and previous paid campaigns through another agency were generating leads at $127 per qualified appointment with inconsistent booking rates. The med spa needed a strategic digital approach to capture the growing demand for non-invasive aesthetic procedures in Central Florida and convert high-intent searchers into booked consultations.",
  },
  challenges: [
    {
      title: "Minimal Local Search Presence in a Competitive Market",
      description: "Orlando's med spa market is saturated with over 90 competing practices. The med spa ranked in the Google local map pack for only 4 terms and appeared on the first page for just 6 keywords total. Neighborhood-specific queries like 'Botox near Winter Park,' 'med spa Dr. Phillips,' and 'laser treatment Lake Nona' returned zero visibility. Their Google Business Profile had 47 reviews compared to top competitors averaging 300+, and NAP consistency across 18 local directories was only 61%.",
    },
    {
      title: "Underperforming Paid Campaigns With Poor Lead Quality",
      description: "The previous agency had been running broad-match campaigns targeting generic terms like 'Botox near me' and 'med spa Orlando' without proper audience segmentation or negative keyword management. This resulted in a cost per qualified lead of $127 with only 39% of inquiries converting to actual consultation bookings. A significant portion of leads were price-shopping Groupon-style bargain seekers, out-of-area tourists, or individuals seeking medical procedures beyond the spa's scope.",
    },
    {
      title: "Weak Online Booking Funnel and Low Conversion Rates",
      description: "The website's landing-page-to-consultation conversion rate sat at just 2.1%. Service pages lacked before/after galleries, provider credentials, treatment FAQ content, and transparent pricing ranges. The booking flow required a phone call during business hours only — there was no online scheduling, no virtual consultation option, and no SMS follow-up for abandoned inquiries, resulting in an estimated 40% of interested visitors bouncing without taking action.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Comprehensive technical SEO audit — resolved 24 crawlability issues, fixed duplicate content on service variant pages, optimized Core Web Vitals from 52 to 84",
        "Local keyword research spanning Botox, fillers, laser treatments, body contouring, facials, chemical peels, PRP, and IV therapy — identified 920+ keyword opportunities across Orlando neighborhoods",
        "Competitor analysis of 18 Orlando-area med spas — mapped content gaps in treatment education, provider credibility, and neighborhood-specific landing pages",
        "Published 14 initial content pieces: treatment deep-dives (Botox longevity, filler types compared, laser resurfacing recovery), neighborhood service pages (Winter Park, Dr. Phillips, Lake Nona, Windermere)",
        "Local business schema, medical provider schema, and FAQ schema implemented across all service and location pages",
        "Full paid campaign restructuring — created treatment-specific ad groups (injectables, laser, body contouring, facials) with separate conversion tracking per service line",
        "Google Business Profile optimization: added 38 high-quality treatment photos, updated service categories, implemented Q&A responses, and launched a review generation campaign",
        "Online booking widget integration with SMS confirmation and 24-hour follow-up sequence for abandoned consultations",
        "Call tracking implementation with whisper messages to differentiate paid vs. organic leads at the front desk",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content Velocity & Campaign Optimization",
      items: [
        "Analyzed first 30 days — identified highest-converting treatment categories (Botox, body contouring, hydrafacials) and doubled content and ad spend in those verticals",
        "Published 18 additional articles targeting long-tail queries: 'how long does Botox last Orlando,' 'CoolSculpting vs Emsculpt Central Florida,' 'best hydrafacial provider near me'",
        "Created 8 comparison pages: treatment alternatives (Botox vs Dysport, CoolSculpting vs traditional lipo, chemical peel vs laser), establishing the practice as an educational authority",
        "Before/after gallery launched with 34 patient transformations across 6 treatment categories — pages achieved 3.4x higher engagement than standard service pages",
        "Launched retargeting campaigns for visitors who viewed treatment pages or started but didn't complete the booking flow, with seasonal promotions for summer body contouring",
        "Negative keyword refinement — excluded surgical procedure queries, dermatology medical conditions, spa resort/hotel searches, and Groupon deal-seeking terms",
        "A/B tested landing page elements: provider credentials emphasis vs. patient transformation focus, finding transformations drove 28% higher consultation bookings",
        "Internal linking architecture connecting educational content → treatment pages → before/after gallery → booking funnel",
      ],
    },
    {
      phase: 3,
      months: "60–180 days",
      title: "Scale, Budget Increase & Authority Building",
      items: [
        "Content library expanded to 78+ indexed pages covering 22 treatments, 6 Orlando neighborhoods, and seasonal aesthetic guides",
        "Backlink acquisition through Orlando lifestyle publications, Central Florida beauty blogs, women's health directories, and local business associations — earned 41 referring domains",
        "Ad budget progressively scaled from $6,500 to $8,000/month as CPQL decreased and qualification rates improved, maintaining positive ROI at each increment",
        "Advanced audience segmentation: first-time aesthetic patients vs. maintenance clients vs. multi-treatment seekers vs. special occasion bookings (weddings, reunions)",
        "Conversion rate optimization pushed booking rate from 2.1% to 4.3% through social proof integration, virtual consultation option, and financing pre-qualification widget",
        "Seasonal campaign calendar: Valentine's Day couples packages, spring refresh promotions, summer body contouring push, fall skin rejuvenation, holiday gift card campaigns",
        "AI search optimization for conversational queries appearing in featured snippets: 'is Botox safe,' 'how much do fillers cost in Orlando,' 'best med spa treatments for aging skin'",
        "Monthly performance reporting with full attribution from first touchpoint through consultation booking, treatment completion, and rebooking rate",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "3,847", growth: "+3,635%", from: "from 103" },
      { label: "Top 10 Rankings", value: "287", growth: "+4,683%", from: "from 6" },
      { label: "Pages Created", value: "78", growth: "", from: "incl. treatment pages, neighborhood pages & aesthetic guides" },
      { label: "Organic Traffic", value: "11,247/mo", growth: "+2,643%", from: "from 410" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 103, top10: 6, top3: 1, traffic: 410, pages: 9, avgPos: 51.3, ctr: 0.6 },
      { month: "Feb 2025", keywords: 218, top10: 14, top3: 2, traffic: 687, pages: 23, avgPos: 46.8, ctr: 0.8 },
      { month: "Mar 2025", keywords: 487, top10: 38, top3: 5, traffic: 1243, pages: 41, avgPos: 41.2, ctr: 1.0 },
      { month: "Apr 2025", keywords: 1137, top10: 98, top3: 14, traffic: 3418, pages: 54, avgPos: 34.7, ctr: 1.4 },
      { month: "May 2025", keywords: 2489, top10: 178, top3: 29, traffic: 6847, pages: 67, avgPos: 28.3, ctr: 1.9 },
      { month: "Jun 2025", keywords: 3847, top10: 287, top3: 47, traffic: 11247, pages: 78, avgPos: 23.1, ctr: 2.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$42.8K" },
      { label: "Total Leads", value: "1,821" },
      { label: "Qualified Leads", value: "836" },
      { label: "Avg CPQL", value: "$51", note: "↓60% from $127" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Consultations",
      cpql: "Cost/Consultation",
      deals: "Booked Treatments",
    },
    monthly: [
      { month: "Jan 2025", spend: 6513, leads: 218, cpl: 30, qualified: 85, cpql: 77, deals: 47, revenue: 21667, roas: 3.33 },
      { month: "Feb 2025", spend: 6487, leads: 247, cpl: 26, qualified: 104, cpql: 62, deals: 58, revenue: 27318, roas: 4.21 },
      { month: "Mar 2025", spend: 6718, leads: 283, cpl: 24, qualified: 127, cpql: 53, deals: 66, revenue: 31300, roas: 4.66 },
      { month: "Apr 2025", spend: 7247, leads: 314, cpl: 23, qualified: 149, cpql: 49, deals: 37, revenue: 17500, roas: 2.41 },
      { month: "May 2025", spend: 7813, leads: 347, cpl: 23, qualified: 174, cpql: 45, deals: 56, revenue: 27100, roas: 3.47 },
      { month: "Jun 2025", spend: 8017, leads: 412, cpl: 19, qualified: 197, cpql: 41, deals: 44, revenue: 21600, roas: 2.69 },
    ],
  },
  localSeo: {
    summary: [
      { label: "GBP Views", value: "14,218/mo", growth: "+623%", from: "from 1,963" },
      { label: "Maps Impressions", value: "38,471/mo", growth: "+847%", from: "from 4,067" },
      { label: "GBP Calls", value: "287/mo", growth: "+534%", from: "from 45" },
      { label: "Direction Requests", value: "193/mo", growth: "+491%", from: "from 33" },
    ],
    monthly: [
      { month: "Jan 2025", gbpViews: 1963, mapsImpressions: 4067, gbpCalls: 45, directionRequests: 33 },
      { month: "Feb 2025", gbpViews: 2847, mapsImpressions: 6218, gbpCalls: 63, directionRequests: 47 },
      { month: "Mar 2025", gbpViews: 4718, mapsImpressions: 11347, gbpCalls: 98, directionRequests: 71 },
      { month: "Apr 2025", gbpViews: 7843, mapsImpressions: 19218, gbpCalls: 147, directionRequests: 104 },
      { month: "May 2025", gbpViews: 10947, mapsImpressions: 28743, gbpCalls: 218, directionRequests: 149 },
      { month: "Jun 2025", gbpViews: 14218, mapsImpressions: 38471, gbpCalls: 287, directionRequests: 193 },
    ],
  },
  impact: [
    { label: "Total Qualified Leads", value: "836", growth: "+312%" },
    { label: "Cost Per Qualified Lead", value: "$51", growth: "↓60%" },
    { label: "Monthly Organic Traffic", value: "11,247", growth: "+2,643%" },
    { label: "Blended ROAS", value: "3.42x", growth: "+166%" },
  ],
};
