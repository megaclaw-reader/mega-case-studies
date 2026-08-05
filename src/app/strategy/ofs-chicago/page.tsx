"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/CaseStudy/AnimatedSection";
import PressAndBackers from "@/components/CaseStudy/PressAndBackers";
import Footer from "@/components/CaseStudy/Footer";

/* ─── Header ─── */
function Header() {
  const navLinks = [
    { label: "The Honest Picture", href: "#honest-picture" },
    { label: "Lead Quality", href: "#lead-quality" },
    { label: "Paid Ads Strategy", href: "#paid-ads-strategy" },
    { label: "Google Ads", href: "#google-ads" },
    { label: "Meta Ads", href: "#meta-ads" },
    { label: "Funnel Math", href: "#funnel-math" },
    { label: "90-Day Ramp", href: "#ramp" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="https://www.gomega.ai/" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <svg width="112" height="40" viewBox="0 0 56 19.871" xmlns="http://www.w3.org/2000/svg">
            <path d="M 52.483 5.276 L 52.483 3.883 L 56 3.883 L 56 15.303 L 52.483 15.303 L 52.483 13.909 L 52.391 13.909 C 51.706 14.892 50.45 15.645 48.874 15.645 C 45.882 15.645 43.598 13.247 43.598 9.638 C 43.598 6.121 45.745 3.54 48.874 3.54 C 50.45 3.54 51.706 4.294 52.391 5.276 Z M 49.833 12.311 C 51.409 12.311 52.483 11.077 52.483 9.593 C 52.483 8.04 51.364 6.875 49.833 6.875 C 48.326 6.875 47.184 7.994 47.184 9.593 C 47.184 11.191 48.326 12.311 49.833 12.311 Z M 39.613 5.276 L 39.613 3.883 L 43.131 3.883 L 43.131 16.513 C 43.131 18.683 41.852 19.871 39.659 19.871 L 32.236 19.871 L 32.236 16.308 L 38.791 16.308 C 39.271 16.308 39.613 16.034 39.613 15.577 L 39.613 13.909 L 39.522 13.909 C 38.837 14.892 37.58 15.645 36.005 15.645 C 33.013 15.645 30.729 13.247 30.729 9.638 C 30.729 6.121 32.876 3.54 36.005 3.54 C 37.58 3.54 38.837 4.294 39.522 5.276 Z M 36.964 12.311 C 38.54 12.311 39.613 11.077 39.613 9.593 C 39.613 8.04 38.494 6.875 36.964 6.875 C 35.456 6.875 34.314 7.994 34.314 9.593 C 34.314 11.191 35.456 12.311 36.964 12.311 Z M 24.352 3.54 C 28.166 3.54 30.61 6.601 30.153 10.758 L 21.931 10.758 C 22.159 11.625 22.913 12.402 24.238 12.516 C 25.106 12.585 26.042 12.219 26.408 11.648 L 30.085 11.648 C 29.354 14.252 27.001 15.645 24.284 15.645 C 20.378 15.645 18.368 12.79 18.368 9.593 C 18.368 6.167 20.835 3.54 24.352 3.54 Z M 24.329 6.646 C 23.187 6.646 22.296 7.217 21.977 8.131 L 26.659 8.131 C 26.339 7.172 25.448 6.646 24.329 6.646 Z M 17.609 0 L 17.609 15.303 L 13.841 15.303 L 13.841 5.573 L 9.89 15.303 L 7.72 15.303 L 3.769 5.573 L 3.769 15.303 L 0 15.303 L 0 0 L 5.23 0 L 8.816 9.09 L 12.425 0 Z" fill="#2454FF"/>
          </svg>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">
              {link.label}
            </a>
          ))}
          <a href="https://www.gomega.ai/demo" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white bg-[#2454FF] hover:bg-[#1a3fd4] px-4 py-2 rounded-lg transition-colors">
            Book a Demo
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ─── Reusable Table ─── */
function DataTable({ headers, rows, footer, title }: { headers: string[]; rows: (string | number)[][]; footer?: (string | number)[]; title?: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {title && <h3 className="font-bold p-6 pb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              {headers.map((h) => (
                <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-5 py-3 ${j === 0 ? "font-medium" : ""}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
          {footer && (
            <tfoot>
              <tr className="border-t-2 border-gray-200 bg-gray-100 font-semibold">
                {footer.map((cell, j) => (
                  <td key={j} className="px-5 py-3">{cell}</td>
                ))}
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function OFSChicagoStrategy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#2965FF]/10 text-[#2965FF] text-sm font-medium mb-6">
                OFS Chicago — Growth Strategy
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mb-6">
                Road to 120 New Patients/Month
              </h1>
              <p className="text-lg text-[#6B7280] max-w-3xl mb-10 leading-relaxed">
                A multi-channel growth plan for OFS Chicago — powered by MEGA&apos;s always-on AI optimization, income-filtered paid ads, and authority-first creative to hit 120 new patients per month with high lead quality and a $1,000 blended CPA on paid.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              {[
                { value: "120", unit: "", label: "Target Patients/Month" },
                { value: "$20,000", unit: "/mo", label: "Recommended Ad Spend" },
                { value: "$1,000", unit: "", label: "Target Blended CPA" },
                { value: "23–37", unit: "", label: "Patients from Paid Ads" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="text-4xl md:text-5xl font-bold text-[#2965FF]">
                    {stat.value}<span className="text-2xl md:text-3xl ml-1">{stat.unit}</span>
                  </div>
                  <div className="text-[#6B7280] mt-2 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-3">
              {["Paid Advertising", "Oral Surgery", "Dental Implants", "Lead Quality Optimization", "Income-Filtered Targeting"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700">{tag}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* The Honest Picture */}
        <AnimatedSection id="honest-picture" className="py-20 px-6 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">The Honest Picture First</h2>
            <p className="text-[#6B7280] max-w-3xl mb-8 leading-relaxed">
              120 new patients per month is achievable for OFS Chicago — but paid ads alone are never the full answer for an oral surgery practice. The good news: you likely don&apos;t need paid ads to carry the entire load. Oral surgery practices at this level generate patients across five channels.
            </p>

            <h3 className="font-bold text-lg mb-4">How 120/Month Realistically Breaks Down</h3>
            <DataTable
              headers={["Source", "Est. Patients/Month", "Notes"]}
              rows={[
                ["Dentist & specialist referrals", "40–55", "The engine for most OMS practices — needs active relationship management"],
                ["Organic search", "20–30", "OFS already has 5,000 organic visits/month and solid rankings — real asset"],
                ["Google Business Profile / local", "15–20", "\"Near me\" searches and map pack clicks — driven by reviews and GBP optimization"],
                ["Paid ads (Google + Meta)", "23–37", "Controllable, scalable, income-filtered to target high-value implant cases specifically"],
                ["Existing patient reactivation", "10–15", "Past patients, follow-up consults, family referrals"],
              ]}
              footer={["Total", "~108–157", ""]}
            />

            <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-3">What Paid Ads Are Actually For</h3>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                They fill the gap, add predictability, and specifically target the highest-value cases — full-arch implants, All-on-4 — that referrals don&apos;t always generate consistently. They&apos;re the lever you can turn up or down based on capacity.
              </p>
              <div className="bg-[#2965FF]/5 rounded-xl p-6 border border-[#2965FF]/10">
                <p className="text-sm font-medium text-[#2965FF]">
                  💡 The first question worth answering: where is OFS today on total monthly patient volume? If they&apos;re at 80 from referrals and organic, paid needs to add 40 and the budget below does that comfortably. If they&apos;re at 40, the growth plan needs referral development and GBP alongside ads — paid alone doesn&apos;t close an 80-patient gap.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why MEGA */}
        <AnimatedSection className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Why MEGA Is Built for This</h2>
            <p className="text-[#6B7280] max-w-3xl mb-8 leading-relaxed">
              Traditional agencies review campaigns weekly or monthly. MEGA&apos;s AI agents live inside the ad accounts and optimize continuously — 24/7, in real time. Here&apos;s what that means for OFS.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#2965FF] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#2965FF]/25">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                </div>
                <h3 className="font-bold mb-2">Always-On Optimization</h3>
                <p className="text-sm text-[#6B7280]">AI agents monitor and adjust bids, budgets, and audiences in real time — not in weekly review meetings. Small daily improvements compound into significant monthly gains.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#2965FF] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#2965FF]/25">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                </div>
                <h3 className="font-bold mb-2">AI-Powered Creative</h3>
                <p className="text-sm text-[#6B7280]">20–30 ad variations generated and tested at zero production cost. Traditional agencies charge $500–$2K per creative — with MEGA, 100% of the budget goes to media spend.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#2965FF] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#2965FF]/25">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3 className="font-bold mb-2">Speed of Iteration</h3>
                <p className="text-sm text-[#6B7280]">New landing page variants deployed and tested within 48 hours — not the 2–3 week agency cycle. When market conditions shift, campaigns are restructured within hours.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#2965FF] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#2965FF]/25">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17,8 12,3 7,8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </div>
                <h3 className="font-bold mb-2">Data-Driven Decisions</h3>
                <p className="text-sm text-[#6B7280]">Every budget allocation decision is driven by real-time performance data — not account manager intuition. AI analyzes thousands of data points per day to identify micro-trends invisible to human reviewers.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Lead Quality Strategy */}
        <AnimatedSection id="lead-quality" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Lead Quality Is the Entire Game</h2>
            <p className="text-[#6B7280] max-w-3xl mb-8 leading-relaxed">
              At $30K per case, the ICP is someone who values expertise and outcomes — not price. Every dollar of ad spend is filtered to exclude price-shoppers and attract patients who can afford and are ready to commit to treatment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-lg shadow-red-500/25">✕</div>
                <h3 className="font-bold text-lg mb-2">Keywords Cut</h3>
                <p className="text-sm text-[#6B7280] mb-3">Price-shopper intent terms removed from all campaigns:</p>
                <div className="flex flex-wrap gap-2">
                  {["affordable all on 4 dental implants", "all on four implant cost", "full dental implants cost", "how much", "price"].map((kw) => (
                    <span key={kw} className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium line-through">{kw}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-lg shadow-red-500/25">—</div>
                <h3 className="font-bold text-lg mb-2">Expanded Negatives</h3>
                <p className="text-sm text-[#6B7280] mb-3">Aggressive negative keyword list blocks price-sensitive clicks before they cost money:</p>
                <div className="flex flex-wrap gap-2">
                  {["Affordable", "Cost", "Price", "How much", "Cheap", "Discount", "Financing", "Payment plan", "Free", "Insurance covered", "Medicaid"].map((neg) => (
                    <span key={neg} className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium">{neg}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-lg shadow-[#2965FF]/25">✓</div>
                <h3 className="font-bold text-lg mb-2">Authority Positioning</h3>
                <p className="text-sm text-[#6B7280] mb-3">Copy and creative shifted from affordability to expertise:</p>
                <ul className="space-y-2">
                  {[
                    "\"Chicago's Board-Certified Oral Surgery Specialists\"",
                    "\"Trusted by 10,000+ Patients Across Chicagoland\"",
                    "No financing or price mentions in ads — authority-first messaging only",
                    "Landing pages lead with surgeon credibility and outcomes, with financing options available further down the page for qualified visitors",
                  ].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#6B7280]">
                      <span className="text-[#2965FF] mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-3">Meta Income Targeting</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Meta allows household income tier targeting. All prospecting and retargeting campaigns target the <strong>top 25–50% household income</strong> in the Chicago metro. This alone is one of the most effective lead quality filters available on the platform — it ensures ad spend reaches people who can actually afford a $30K procedure, not price-shoppers who will never convert.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Paid Ads Strategy — $20K */}
        <AnimatedSection id="paid-ads-strategy" className="py-20 px-6 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Paid Ads Strategy: $20,000/Month</h2>
            <p className="text-[#6B7280] max-w-3xl mb-8 leading-relaxed">
              $20K/month is the budget level where paid ads become a real growth engine — not just a supplement. At $30K per case, you only need one extra patient per month to pay for the full investment. Campaigns could start at a lower budget to prove the model, but $20K is where you own the market.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Monthly Budget", value: "$20,000" },
                { label: "Est. New Patients", value: "23–37" },
                { label: "Target CPA", value: "$1,000" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="text-sm text-[#6B7280] mb-1">{s.label}</div>
                  <div className="text-2xl font-bold">{s.value}</div>
                </div>
              ))}
            </div>

            <DataTable
              headers={["Channel", "Budget", "Rationale"]}
              rows={[
                ["Google Search — Implants (Chicago core)", "$6,000", "Dominate all high-intent implant terms, aggressive position 1–2 bidding"],
                ["Google Search — Implants (Affluent suburbs)", "$3,000", "Expand geo to Hinsdale, Winnetka, Naperville, Oak Park — higher HHI zip codes, less competition, lower CPCs"],
                ["YouTube Prospecting", "$3,000", "Pre-roll targeting high-income 45–70 yr olds. Authority/brand play — \"Meet the surgeons,\" patient stories. Warms audiences before they see an ad"],
                ["Google Display + YouTube Retargeting", "$1,500", "Larger budget = bigger retargeting audience as traffic scales"],
                ["Meta Retargeting", "$2,500", "More budget behind the highest-converting placement"],
                ["Meta Prospecting — All-on-4 (income-filtered)", "$4,000", "Top 25% HHI, Chicago metro + affluent suburbs. No financing angle. Authority creative only"],
              ]}
              footer={["Total", "$20,000", ""]}
            />

            <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg mb-4">Why $20K Is the Right Investment Level</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#2965FF]/10 text-[#2965FF] flex items-center justify-center font-bold text-sm mb-3">1</div>
                  <h4 className="font-semibold mb-2">Affluent Suburb Expansion</h4>
                  <p className="text-sm text-[#6B7280]">Oak Lawn is the home base but the $30K implant patient is more likely living in Hinsdale or Winnetka. Less advertiser competition in those zip codes means lower CPCs and better lead quality.</p>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#2965FF]/10 text-[#2965FF] flex items-center justify-center font-bold text-sm mb-3">2</div>
                  <h4 className="font-semibold mb-2">YouTube as a Trust Builder</h4>
                  <p className="text-sm text-[#6B7280]">At $30K, people research before they call. A 30-second pre-roll of the surgeon speaking, showing the facility, citing case volume builds the credibility that converts a skeptical high-income prospect. It primes all other audiences.</p>
                </div>
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#2965FF]/10 text-[#2965FF] flex items-center justify-center font-bold text-sm mb-3">3</div>
                  <h4 className="font-semibold mb-2">Scaled Meta Prospecting</h4>
                  <p className="text-sm text-[#6B7280]">More budget means broader testing of creative angles and faster learning. Income-filtered audiences are smaller, so you need more budget to get proper delivery and avoid fatigue.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Google Ads */}
        <AnimatedSection id="google-ads" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Google Ads</h2>

            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#2965FF]/20" />
              <div className="space-y-12">
                {/* Campaign 1 — Core Implants */}
                <div className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2965FF]/25">1</div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg font-bold">Dental Implants — Chicago Core</h3>
                      <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$6,000/mo</span>
                    </div>
                    <p className="text-sm text-[#6B7280] mb-4">Phrase and exact match only. No broad match. All price/cost keywords excluded.</p>
                    <DataTable
                      headers={["Keyword", "Monthly Searches", "CPC"]}
                      rows={[
                        ["dental implants chicago", "2,400", "$13.62"],
                        ["chicago dental implants", "1,000", "$10.87"],
                        ["chicago tooth implant", "880", "$13.62"],
                        ["all on 4 dental implants chicago", "140", "$11.26"],
                        ["best dental implants chicago", "320", "$12.40"],
                        ["dental implant specialist chicago", "210", "$11.85"],
                      ]}
                    />
                  </div>
                </div>

                {/* Campaign 2 — Affluent Suburbs */}
                <div className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2965FF]/25">2</div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg font-bold">Dental Implants — Affluent Suburbs</h3>
                      <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$3,000/mo</span>
                    </div>
                    <p className="text-sm text-[#6B7280] mb-4">Geo-targeting high household income zip codes: Hinsdale, Winnetka, Naperville, Oak Park. Lower competition, lower CPCs, higher lead quality.</p>
                    <DataTable
                      headers={["Keyword", "Monthly Searches", "CPC"]}
                      rows={[
                        ["dental implants near me (suburb geo)", "1,800", "$9.50"],
                        ["oral surgeon hinsdale", "260", "$8.20"],
                        ["dental implants naperville", "480", "$10.15"],
                        ["all on 4 implants near me (suburb geo)", "320", "$9.80"],
                      ]}
                    />
                  </div>
                </div>

                {/* YouTube Prospecting */}
                <div className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2965FF]/25">3</div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg font-bold">YouTube Prospecting — Trust Builder</h3>
                      <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$3,000/mo</span>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Pre-roll targeting high-income 45–70 yr olds in the Chicago metro",
                        "Authority/brand play — \"Meet the surgeons,\" patient stories, facility tours",
                        "Warms the Meta and retargeting audiences before they see an ad",
                        "At $30K per case, people research before they call — video builds the credibility that converts a skeptical high-income prospect",
                      ].map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                          <span className="text-[#2965FF] mt-1">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Retargeting */}
                <div className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2965FF]/25">4</div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg font-bold">Google Display + YouTube Retargeting</h3>
                      <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$1,500/mo</span>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Display + YouTube pre-roll for site visitors who didn't book",
                        "15-, 30-, 60-day audience windows",
                        "Larger budget = bigger retargeting pool as traffic scales from $20K spend",
                        "Cheapest placement, consistently strong ROI",
                      ].map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                          <span className="text-[#2965FF] mt-1">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bidding Strategy */}
                <div className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2965FF]/25">5</div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold mb-4">Bidding Strategy</h3>
                    <ul className="space-y-2">
                      {[
                        "Days 1–30: Manual CPC with MEGA's AI agents making continuous micro-adjustments, then switch to Target CPA at $900–$1,100 after 30 conversions",
                        "AI detects and responds to competitive bid changes within hours rather than the typical agency cycle of days or weeks",
                        "Don't touch Performance Max until 90 days of clean data",
                      ].map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                          <span className="text-[#2965FF] mt-1">•</span>{item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <h4 className="font-semibold text-sm mb-2">Day-One Negative Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Free", "Cheap", "DIY", "How to", "At home", "Medicaid", "Insurance", "Pictures", "Pain", "Infection", "Symptoms", "Affordable", "Cost", "Price", "How much", "Discount", "Financing", "Payment plan", "Insurance covered"].map((neg) => (
                          <span key={neg} className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium">{neg}</span>
                        ))}
                      </div>
                      <p className="text-xs text-[#6B7280] mt-2">These clicks never convert and kill CPA fast.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Meta Ads */}
        <AnimatedSection id="meta-ads" className="py-20 px-6 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Meta Ads</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold">Retargeting</h3>
                  <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$2,500/mo</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Site visitors, last 30–90 days",
                    "Authority-focused creative — surgeon credentials, facility, patient outcomes",
                    "No financing or affordability angles in ad creative",
                    "Income-filtered: top 25–50% HHI",
                    "CPA target: $300–600",
                  ].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#2965FF] mt-1">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold">All-on-4 Prospecting (Income-Filtered)</h3>
                  <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$4,000/mo</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Top 25% HHI, Chicago metro + affluent suburbs",
                    "Ages 50–72, denture/dental interests",
                    "Pain-point hook video (\"Tired of dentures slipping?\")",
                    "Authority creative only — no financing or price mentions in ads",
                    "Dedicated landing page with surgeon bios, case volume, and financing options below the fold",
                    "CPA: $1,200–$1,800 — still a 20:1 return at $30K procedure value",
                  ].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#2965FF] mt-1">•</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-[#2965FF]/5 rounded-xl p-4 border border-[#2965FF]/10">
                  <p className="text-xs font-medium text-[#2965FF]">This builds the high-value implant pipeline that referrals alone can&apos;t generate at scale. Income filtering ensures every dollar reaches people who can afford the procedure.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Updated Patient Math */}
        <AnimatedSection className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Updated Patient Math at $20K</h2>
            <p className="text-[#6B7280] max-w-3xl mb-8 leading-relaxed">
              Combined with referrals, organic, and GBP, this gets OFS to 120 comfortably. Because every dollar is filtered for income and intent, lead quality stays high throughout.
            </p>

            <DataTable
              headers={["Channel", "Est. Patients/Month"]}
              rows={[
                ["Google Search (core + suburbs)", "12–18"],
                ["YouTube + Retargeting", "3–5"],
                ["Meta (retargeting + prospecting)", "8–14"],
              ]}
              footer={["Paid Total", "23–37"]}
            />
          </div>
        </AnimatedSection>

        {/* Funnel Math */}
        <AnimatedSection id="funnel-math" className="py-20 px-6 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Funnel Math: How $1,000 CPA Is Achievable</h2>
            <p className="text-[#6B7280] max-w-3xl mb-8 leading-relaxed">
              Working backwards from a closed patient to a click — here&apos;s how the unit economics play out at conservative and target performance levels.
            </p>

            <DataTable
              headers={["Metric", "Conservative", "Target"]}
              rows={[
                ["Avg. CPC (implant terms)", "$12.50", "$10.00"],
                ["Landing page conversion", "8%", "12%"],
                ["Cost per lead", "$156", "$83"],
                ["Lead-to-consult booked", "45%", "55%"],
                ["Show rate", "65%", "75%"],
                ["Close rate", "45%", "55%"],
                ["CPA per implant patient", "$1,185", "$369"],
                ["Realistic blended CPA", "—", "$800–$1,000"],
              ]}
            />

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-8">The Three Things That Determine Whether You Hit $1,000 CPA</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    num: "1",
                    title: "Speed-to-Lead",
                    desc: "Calling within 1 minute increases contact rate dramatically. After 5 minutes, contact rates drop by over 400%. Leads that sit overnight — half book somewhere else.",
                    detail: "MEGA's AI handles this: automated SMS within 60 seconds of form submission, plus real-time lead alerts to dedicated staff during business hours.",
                  },
                  {
                    num: "2",
                    title: "Dedicated Landing Pages",
                    desc: "Two pages needed — authority-first, no nav menu, one CTA. Financing options mentioned on-page (not in ads) to convert qualified visitors who need a payment path:",
                    items: [
                      "/dental-implants-chicago/ — All-on-4 focused, surgeon credentials, case volume, financing section below the fold, consultation CTA",
                      "/oral-surgeon-chicago/ — general oral surgery, board-certified team, consultation CTA",
                    ],
                  },
                  {
                    num: "3",
                    title: "Bidding Discipline",
                    desc: "Build data on manual CPC before switching to Smart Bidding. Don't let Google push broad match early. CPA stays in control when campaigns are fed clean, specific traffic — and aggressive negatives keep price-shoppers out.",
                  },
                ].map((item) => (
                  <div key={item.num} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-lg shadow-[#2965FF]/25">{item.num}</div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
                    {item.items && (
                      <ul className="mt-3 space-y-2">
                        {item.items.map((li, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-[#6B7280]">
                            <span className="text-[#2965FF] mt-0.5">•</span>{li}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.detail && <p className="text-xs text-[#6B7280] mt-3 bg-gray-50 p-3 rounded-lg">{item.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 90-Day Ramp */}
        <AnimatedSection id="ramp" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">90-Day Ramp</h2>

            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#2965FF]/20" />
              <div className="space-y-8">
                {[
                  { phase: "Setup", timeline: "Days 1–14", items: ["Deploy MEGA AI optimization agents directly within ad accounts for continuous bid management and audience refinement", "Launch Google Search campaigns (core Chicago + affluent suburbs)", "Build dedicated authority-focused landing pages — financing options below the fold, no nav menu, one CTA", "Install call tracking and MEGA's automated speed-to-lead system (SMS within 60 seconds)", "Deploy expanded negative keyword list across all campaigns", "Launch initial creative testing with 20+ AI-generated ad variations across formats"] },
                  { phase: "Optimize", timeline: "Days 15–45", items: ["AI agents identify underperforming ad groups within days and automatically shift budget to top performers — compounding daily optimizations", "Weekly search term review — aggressively negate price/cost queries", "A/B test landing page variants continuously with AI selecting winners automatically", "Launch YouTube prospecting with surgeon/facility creative", "Analyze lead quality by zip code and income tier", "Rotate in fresh creative weekly based on performance data — replacing underperformers within days rather than the typical monthly agency refresh cycle"] },
                  { phase: "Scale", timeline: "Days 46–90", items: ["Switch to Target CPA bidding (after 30+ conversions)", "Launch Meta retargeting campaigns (income-filtered)", "Launch Meta All-on-4 prospecting (top 25% HHI)", "Scale AI-generated creative to 30+ active variations for Meta — faster learning and zero creative fatigue", "Real-time performance monitoring detects and responds to competitive shifts within hours, not days"] },
                  { phase: "Expand", timeline: "Month 4+", items: ["Continuous AI optimization compounds small daily improvements into significant monthly CPA reductions", "Scale budget to top-performing channels based on real-time data", "Test additional affluent suburb geos", "Layer in Performance Max with clean conversion data", "Expand YouTube creative library with new patient stories"] },
                ].map((phase, i) => (
                  <div key={phase.phase} className="relative pl-16 md:pl-20">
                    <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-[#2965FF]/25">
                      {i + 1}
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-lg font-bold">{phase.phase}</h3>
                        <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">{phase.timeline}</span>
                      </div>
                      <ul className="space-y-2">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                            <span className="text-[#2965FF] mt-1">•</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Summary */}
        <AnimatedSection id="summary" className="py-20 px-6 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Summary</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-[#6B7280] leading-relaxed mb-4">
                The road to 120 is a multi-channel plan. Referrals, organic, and GBP carry the majority of volume. Paid ads contribute 23–37 high-value patients per month — specifically the full-arch implant cases that are hardest to generate through referrals alone.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                At $20,000/month with income-filtered targeting, aggressive negative keywords, and authority-first creative, $1,000 CPA is realistic. At $30K average procedure value, that&apos;s a 30:1 return on ad spend — and MEGA&apos;s always-on AI optimization means it improves every day, not just at monthly review meetings.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Every dollar is filtered for income and intent. AI-generated creative at zero production cost means 100% of the budget goes to media spend. Speed-to-lead automation ensures no qualified lead sits unanswered. And continuous optimization compounds small daily gains into significant monthly CPA reductions — something a traditional agency simply can&apos;t replicate.
              </p>
              <div className="bg-[#2965FF]/5 rounded-xl p-6 border border-[#2965FF]/10">
                <p className="text-sm font-medium text-[#2965FF]">
                  📊 Before finalizing the budget: understanding their current monthly patient baseline across all channels is the most important input. That number determines how much paid needs to carry — and makes sure we&apos;re not over- or under-spending from day one.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <PressAndBackers />
      <Footer />
    </>
  );
}
