"use client";

import { useState, useRef, useEffect } from "react";

const definitions: Record<string, string> = {
  // Paid Ads
  "CPL": "Cost Per Lead — total ad spend divided by the number of leads generated",
  "CPQL": "Cost Per Qualified Lead — total ad spend divided by leads that met qualification criteria",
  "ROAS": "Return on Ad Spend — revenue generated for every dollar spent on advertising",
  "Qualified": "Leads that met specific criteria (budget, timeline, decision-maker) for a potential sale",
  "Deals": "Leads that converted into signed contracts or paying customers",
  "Spend": "Total advertising budget spent during the period",
  "Revenue": "Total revenue attributed to paid advertising efforts",
  "Leads": "Total inquiries generated from advertising (calls, form fills, chats)",

  // SEO
  "Keywords": "Total number of keywords the website ranks for in search engines",
  "Top 10": "Keywords ranking on the first page of Google (positions 1–10)",
  "Top 3": "Keywords ranking in the top 3 positions on Google — highest visibility",
  "Traffic": "Monthly visits to the website from organic (non-paid) search results",
  "Pages": "Total pages published on the website, including blog posts and service pages",
  "Avg Pos": "Average ranking position across all tracked keywords (lower is better)",
  "CTR": "Click-Through Rate — percentage of people who click after seeing the site in search results",

  // Local SEO
  "GBP Views": "Google Business Profile views — how many people saw the business listing on Google",
  "Maps Imp.": "Google Maps impressions — how many times the business appeared in Maps results",
  "Maps Impressions": "Google Maps impressions — how many times the business appeared in Maps results",
  "GBP Calls": "Phone calls made directly from the Google Business Profile listing",
  "Direction Req.": "Requests for driving directions to the business from Google Maps",
  "Direction Requests": "Requests for driving directions to the business from Google Maps",

  // Organic Conversions
  "Form Fills": "Contact form submissions from website visitors",
  "Calls": "Phone calls from website visitors (tracked via call tracking)",
  "Total Leads": "Combined total of form submissions and phone calls",
  "Conv. Rate": "Conversion Rate — percentage of website visitors who became leads",
  "Conversion Rate": "Conversion Rate — percentage of website visitors who became leads",

  // Business Impact / Summary Cards
  "Total Revenue": "Total revenue directly attributed to marketing efforts during the engagement",
  "Signed Contracts": "Number of leads that converted into signed deals or paying customers",
  "Blended ROAS": "Blended Return on Ad Spend — total revenue divided by total marketing investment across all channels",
  "Cost Per Qualified Lead": "Average cost to acquire one qualified lead across the entire engagement",
  "Avg Cost Per Qualified Lead": "Average cost to acquire one qualified lead across the entire engagement",
  "Total Ad Spend": "Combined advertising budget spent across all paid channels during the engagement",
  "Qualified Leads": "Total leads that met qualification criteria (budget, timeline, authority, need)",
  "Total Keywords": "Total number of search terms the website ranks for in Google",
  "Top 10 Rankings": "Number of keywords ranking on the first page of Google (positions 1–10)",
  "Pages Created": "Total new pages published including blog posts, service pages, and location pages",
  "Organic Traffic": "Monthly website visits from non-paid search engine results",
  "Total Organic Leads": "Total inquiries generated from organic (non-paid) search traffic",
  "Phone Calls": "Total tracked phone calls from all marketing channels",
  "Form Submissions": "Total contact form submissions from all marketing channels",
  "Avg Conversion Rate": "Average percentage of website visitors who became leads",
};

export function MetricHeader({ label, className = "" }: { label: string; className?: string }) {
  const [show, setShow] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const definition = definitions[label];

  useEffect(() => {
    if (show && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const spaceRight = window.innerWidth - rect.left;
      setAlignRight(spaceRight < 280);
    }
  }, [show]);

  if (!definition) {
    return <span className={className}>{label}</span>;
  }

  return (
    <span
      ref={ref}
      className={`relative cursor-help ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span className="border-b border-dotted border-gray-400">{label}</span>
      {show && (
        <span
          className={`absolute z-50 top-full mt-1 w-56 px-3 py-2 bg-gray-900 text-white text-xs font-normal normal-case tracking-normal rounded-lg shadow-lg leading-relaxed whitespace-normal ${
            alignRight ? "right-0" : "left-0"
          }`}
        >
          {definition}
        </span>
      )}
    </span>
  );
}
