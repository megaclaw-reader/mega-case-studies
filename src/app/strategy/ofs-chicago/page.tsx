"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/CaseStudy/AnimatedSection";
import PressAndBackers from "@/components/CaseStudy/PressAndBackers";
import Footer from "@/components/CaseStudy/Footer";

/* ─── Header ─── */
function Header() {
  const navLinks = [
    { label: "The Honest Picture", href: "#honest-picture" },
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
function DataTable({ headers, rows, footer }: { headers: string[]; rows: (string | number)[][]; footer?: (string | number)[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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
                A multi-channel growth plan for OFS Chicago — combining paid ads, referral development, and organic search to hit 120 new patients per month at a $1,000 blended CPA on paid.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              {[
                { value: "120", unit: "", label: "Target Patients/Month" },
                { value: "$8,500", unit: "/mo", label: "Recommended Ad Spend" },
                { value: "$1,000", unit: "", label: "Target Blended CPA" },
                { value: "15–24", unit: "", label: "Patients from Paid Ads" },
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
              {["Paid Advertising", "Oral Surgery", "Dental Implants", "Multi-Channel Growth"].map((tag) => (
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
                ["Paid ads (Google + Meta)", "15–24", "Controllable, scalable, targets high-value implant cases specifically"],
                ["Existing patient reactivation", "10–15", "Past patients, follow-up consults, family referrals"],
              ]}
              footer={["Total", "~100–144", ""]}
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

        {/* Paid Ads Strategy */}
        <AnimatedSection id="paid-ads-strategy" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Paid Ads Strategy: $8,500/Month</h2>
            <p className="text-[#6B7280] max-w-3xl mb-8 leading-relaxed">
              Budget allocation across Google and Meta, designed to balance high-value implant cases with volume-driving oral surgery campaigns.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Monthly Budget", value: "$8,500" },
                { label: "Est. New Patients", value: "15–24" },
                { label: "Target CPA", value: "$1,000" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="text-sm text-[#6B7280] mb-1">{s.label}</div>
                  <div className="text-2xl font-bold">{s.value}</div>
                </div>
              ))}
            </div>

            <DataTable
              headers={["Channel", "Budget", "Est. New Patients"]}
              rows={[
                ["Google Search — Implants", "$3,500", "5–8"],
                ["Google Search — Oral Surgery / Volume", "$2,000", "5–8"],
                ["Google Display + YouTube Retargeting", "$500", "1–2"],
                ["Meta Retargeting (site visitors)", "$1,000", "2–3"],
                ["Meta Prospecting (All-on-4 audience)", "$1,500", "2–3"],
              ]}
              footer={["Total", "$8,500", "15–24 patients"]}
            />
          </div>
        </AnimatedSection>

        {/* Google Ads */}
        <AnimatedSection id="google-ads" className="py-20 px-6 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Google Ads</h2>

            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#2965FF]/20" />
              <div className="space-y-12">
                {/* Campaign 1 */}
                <div className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2965FF]/25">1</div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg font-bold">Dental Implants — High-Intent, High-Value</h3>
                      <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$3,500/mo</span>
                    </div>
                    <p className="text-sm text-[#6B7280] mb-4">Phrase and exact match only. No broad match.</p>
                    <DataTable
                      headers={["Keyword", "Monthly Searches", "CPC"]}
                      rows={[
                        ["dental implants chicago", "2,400", "$13.62"],
                        ["chicago dental implants", "1,000", "$10.87"],
                        ["chicago tooth implant", "880", "$13.62"],
                        ["all on 4 dental implants chicago", "140", "$11.26"],
                        ["affordable all on 4 dental implants", "320", "$10.14"],
                        ["all on four implant cost", "1,900", "$7.72"],
                        ["full dental implants cost", "2,400", "$6.86"],
                      ]}
                    />
                  </div>
                </div>

                {/* Campaign 2 */}
                <div className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2965FF]/25">2</div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg font-bold">Oral Surgery Volume — Lower CPC, High Volume</h3>
                      <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$2,000/mo</span>
                    </div>
                    <p className="text-sm text-[#6B7280] mb-4">This is what drives patient count toward 120. CPAs here are $200–400. These patients also feed the Meta retargeting pool.</p>
                    <DataTable
                      headers={["Keyword", "Monthly Searches", "CPC"]}
                      rows={[
                        ["wisdom teeth removal near me", "22,200", "$5.16"],
                        ["oral surgeon near me", "33,100", "~$6–8"],
                        ["oral surgeons near me", "4,400", "~$5–7"],
                        ["maxillofacial surgeons chicago", "880", "$6.43"],
                        ["oral and maxillofacial surgeon", "4,400", "~$3–4"],
                      ]}
                    />
                  </div>
                </div>

                {/* Retargeting */}
                <div className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2965FF]/25">3</div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg font-bold">Google Retargeting</h3>
                      <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$500/mo</span>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Display + YouTube pre-roll for site visitors who didn't book",
                        "15-, 30-, 60-day audience windows",
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
                  <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2965FF]/25">4</div>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold mb-4">Bidding Strategy</h3>
                    <ul className="space-y-2">
                      {[
                        "Days 1–30: Manual CPC, then switch to Target CPA at $900–$1,100 after 30 conversions",
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
                        {["Free", "Cheap", "DIY", "How to", "At home", "Medicaid", "Insurance", "Pictures", "Pain", "Infection", "Symptoms"].map((neg) => (
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
        <AnimatedSection id="meta-ads" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Meta Ads</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg font-bold">Retargeting</h3>
                  <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$1,000/mo</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Site visitors, last 30–90 days",
                    "Before/after creative, financing angle",
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
                  <h3 className="text-lg font-bold">All-on-4 Prospecting</h3>
                  <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">$1,500/mo</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Ages 50–72, Chicago metro, denture/dental interests",
                    "Pain-point hook video (\"Tired of dentures slipping?\")",
                    "Dedicated landing page only",
                    "CPA: $1,200–$1,800 — still a 20:1 return at $30K procedure value",
                  ].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#2965FF] mt-1">•</span>{item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-[#2965FF]/5 rounded-xl p-4 border border-[#2965FF]/10">
                  <p className="text-xs font-medium text-[#2965FF]">This builds the high-value implant pipeline that referrals alone can&apos;t generate at scale.</p>
                </div>
              </div>
            </div>
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
                    desc: "Calling within 5 minutes increases contact rate 400% vs. 30 minutes. Leads that sit overnight — half book somewhere else.",
                    detail: "Need: automated SMS within 60 seconds of form submission, dedicated staff on leads during business hours.",
                  },
                  {
                    num: "2",
                    title: "Dedicated Landing Pages",
                    desc: "Three pages needed:",
                    items: [
                      "/dental-implants-chicago/ — All-on-4 focused, financing mention, no nav menu, one CTA",
                      "/oral-surgeon-chicago/ — general oral surgery, consultation CTA",
                      "/wisdom-teeth-removal-chicago/ — volume driver, fast-loading, mobile-first",
                    ],
                  },
                  {
                    num: "3",
                    title: "Bidding Discipline",
                    desc: "Build data on manual CPC before switching to Smart Bidding. Don't let Google push broad match early. CPA stays in control when campaigns are fed clean, specific traffic.",
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
                  { phase: "Setup", timeline: "Days 1–14", items: ["Launch both Search campaigns", "Build dedicated landing pages", "Install call tracking", "Set up SMS lead response automation"] },
                  { phase: "Optimize", timeline: "Days 15–45", items: ["Weekly search term review", "Add negative keywords aggressively", "A/B test landing page headlines and CTAs", "Refine geographic and demographic targeting"] },
                  { phase: "Scale", timeline: "Days 46–90", items: ["Switch to Target CPA bidding (after 30+ conversions)", "Launch Meta retargeting campaigns", "Begin YouTube pre-roll for site visitors"] },
                  { phase: "Expand", timeline: "Month 4+", items: ["Add Meta All-on-4 prospecting once Google CPA is confirmed on target", "Evaluate budget increase based on capacity", "Layer in Performance Max with clean conversion data"] },
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
                The road to 120 is a multi-channel plan. Referrals, organic, and GBP carry the majority of volume. Paid ads contribute 15–24 high-value patients per month — specifically the full-arch implant cases that are hardest to generate through referrals alone.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                At $8,500/month with the right landing pages and lead follow-up in place, $1,000 CPA is realistic. At $30K average procedure value, that&apos;s a 30:1 return on ad spend — and it improves every month as campaigns optimize.
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
