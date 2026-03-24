"use client";

import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area,
} from "recharts";

/* ── Data ─────────────────────────────────────────────────────────── */

interface FirmData {
  name: string;
  url: string;
  customerSince: string;
  articles: number;
  da: number;
  sku: string;
  clicksPerWeek: number;
  clicks30dGrowth: string;
  clicksSinceSignup: string;
  impressions: string;
  keywordsTop10: number;
  keywords30dGrowth: string;
  keywordsSinceSignup: string;
  standout: string;
  color: string;
  growthData: { month: string; keywords: number; clicks: number }[];
}

const firms: FirmData[] = [
  {
    name: "Bluestone Law",
    url: "bluestone.law",
    customerSince: "Sep 2025",
    articles: 130,
    da: 8,
    sku: "Lindsay Agent",
    clicksPerWeek: 4986,
    clicks30dGrowth: "+53%",
    clicksSinceSignup: "+1,822%",
    impressions: "744K",
    keywordsTop10: 13618,
    keywords30dGrowth: "+61%",
    keywordsSinceSignup: "+9,101%",
    standout: "Despite a domain authority of just 8, achieved massive organic growth — from ~148 top-10 keywords to 13,618. Proof that content volume + quality can overcome low domain authority.",
    color: "#2965FF",
    growthData: [
      { month: "Sep '25", keywords: 148, clicks: 260 },
      { month: "Oct '25", keywords: 420, clicks: 580 },
      { month: "Nov '25", keywords: 1200, clicks: 1100 },
      { month: "Dec '25", keywords: 2800, clicks: 1800 },
      { month: "Jan '26", keywords: 5200, clicks: 2900 },
      { month: "Feb '26", keywords: 8460, clicks: 3260 },
      { month: "Mar '26", keywords: 13618, clicks: 4986 },
    ],
  },
  {
    name: "Law Office of Thomas K. Mallon, LLC",
    url: "mallon-jurisprudence.com",
    customerSince: "Jul 2025",
    articles: 153,
    da: 28,
    sku: "Lindsay Agent",
    clicksPerWeek: 3597,
    clicks30dGrowth: "+51%",
    clicksSinceSignup: "+15,762%",
    impressions: "527K",
    keywordsTop10: 13745,
    keywords30dGrowth: "+80%",
    keywordsSinceSignup: "+343,525%",
    standout: "The most dramatic keyword growth in the entire dataset. Went from 4 top-10 keywords to 13,745 — and still accelerating with 80% month-over-month growth.",
    color: "#7C3AED",
    growthData: [
      { month: "Jul '25", keywords: 4, clicks: 23 },
      { month: "Aug '25", keywords: 18, clicks: 65 },
      { month: "Sep '25", keywords: 85, clicks: 190 },
      { month: "Oct '25", keywords: 380, clicks: 520 },
      { month: "Nov '25", keywords: 1400, clicks: 980 },
      { month: "Dec '25", keywords: 3800, clicks: 1650 },
      { month: "Jan '26", keywords: 7200, clicks: 2380 },
      { month: "Feb '26", keywords: 7636, clicks: 2382 },
      { month: "Mar '26", keywords: 13745, clicks: 3597 },
    ],
  },
  {
    name: "Logue Law",
    url: "seanloguelaw.com",
    customerSince: "Nov 2025",
    articles: 67,
    da: 23,
    sku: "Lindsay Agent",
    clicksPerWeek: 4223,
    clicks30dGrowth: "+38%",
    clicksSinceSignup: "+999%",
    impressions: "563K",
    keywordsTop10: 9890,
    keywords30dGrowth: "+23%",
    keywordsSinceSignup: "+688%",
    standout: "Nearly 10,000 top-10 keywords in just ~4 months. Strong, consistent results in a remarkably short timeframe.",
    color: "#059669",
    growthData: [
      { month: "Nov '25", keywords: 1258, clicks: 384 },
      { month: "Dec '25", keywords: 2900, clicks: 1100 },
      { month: "Jan '26", keywords: 5400, clicks: 2200 },
      { month: "Feb '26", keywords: 8041, clicks: 3060 },
      { month: "Mar '26", keywords: 9890, clicks: 4223 },
    ],
  },
  {
    name: "Deldar Legal",
    url: "deldarlegal.com",
    customerSince: "Nov 2025",
    articles: 74,
    da: 24,
    sku: "Lindsay Agent + Erle Agent",
    clicksPerWeek: 2049,
    clicks30dGrowth: "+22%",
    clicksSinceSignup: "+44%",
    impressions: "406K",
    keywordsTop10: 8526,
    keywords30dGrowth: "+77%",
    keywordsSinceSignup: "+96%",
    standout: "A steady grower with existing authority. Doubled keyword presence in 4 months while maintaining consistent click growth.",
    color: "#D97706",
    growthData: [
      { month: "Nov '25", keywords: 4350, clicks: 1423 },
      { month: "Dec '25", keywords: 4900, clicks: 1540 },
      { month: "Jan '26", keywords: 5600, clicks: 1680 },
      { month: "Feb '26", keywords: 4818, clicks: 1680 },
      { month: "Mar '26", keywords: 8526, clicks: 2049 },
    ],
  },
];

/* ── Aggregate stats ──────────────────────────────────────────────── */

const totalKeywords = firms.reduce((s, f) => s + f.keywordsTop10, 0);
const totalClicksWeekly = firms.reduce((s, f) => s + f.clicksPerWeek, 0);
const totalArticles = firms.reduce((s, f) => s + f.articles, 0);
const avgDA = Math.round(firms.reduce((s, f) => s + f.da, 0) / firms.length);

/* ── Components ───────────────────────────────────────────────────── */

function HeroStat({ value, unit, label, delay }: { value: string; unit?: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#2965FF]">
        {value}
        {unit && <span className="text-2xl md:text-3xl ml-1">{unit}</span>}
      </div>
      <div className="text-[#6B7280] mt-2 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

function FirmCard({ firm, index }: { firm: FirmData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
    >
      {/* Header */}
      <div className="p-8 pb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold">{firm.name}</h3>
            <a
              href={`https://${firm.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2965FF] hover:underline"
            >
              {firm.url}
            </a>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#2965FF]/10 text-[#2965FF]">
              {firm.sku}
            </span>
            <span className="text-xs text-[#6B7280]">Since {firm.customerSince}</span>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-xs text-[#6B7280] mb-1">Keywords in Top 10</div>
            <div className="text-xl font-bold">{firm.keywordsTop10.toLocaleString()}</div>
            <div className="text-xs text-green-600 font-medium">{firm.keywords30dGrowth} in 30d</div>
            <div className="text-xs text-[#6B7280]">{firm.keywordsSinceSignup} since signup</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-xs text-[#6B7280] mb-1">Weekly Clicks</div>
            <div className="text-xl font-bold">{firm.clicksPerWeek.toLocaleString()}</div>
            <div className="text-xs text-green-600 font-medium">{firm.clicks30dGrowth} in 30d</div>
            <div className="text-xs text-[#6B7280]">{firm.clicksSinceSignup} since signup</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-xs text-[#6B7280] mb-1">Impressions</div>
            <div className="text-xl font-bold">{firm.impressions}</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-xs text-[#6B7280] mb-1">Articles Published</div>
            <div className="text-xl font-bold">{firm.articles}</div>
            <div className="text-xs text-[#6B7280]">DA: {firm.da}</div>
          </div>
        </div>

        {/* Standout */}
        <div className="bg-gradient-to-r from-[#2965FF]/5 to-transparent rounded-xl p-4 border-l-4" style={{ borderColor: firm.color }}>
          <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-1">Standout</div>
          <p className="text-sm leading-relaxed">{firm.standout}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="px-8 pb-8">
        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="text-sm font-semibold text-[#6B7280] mb-3">Keyword Growth Since Signup</h4>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={firm.growthData}>
              <defs>
                <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={firm.color} stopOpacity={0.15} />
                  <stop offset="95%" stopColor={firm.color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(val) => typeof val === "number" ? val.toLocaleString() : val} />
              <Area type="monotone" dataKey="keywords" stroke={firm.color} strokeWidth={2.5} fill={`url(#grad-${index})`} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────── */

export default function LawFirmsSEO() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <svg width="112" height="40" viewBox="0 0 56 19.871" xmlns="http://www.w3.org/2000/svg">
              <path d="M 52.483 5.276 L 52.483 3.883 L 56 3.883 L 56 15.303 L 52.483 15.303 L 52.483 13.909 L 52.391 13.909 C 51.706 14.892 50.45 15.645 48.874 15.645 C 45.882 15.645 43.598 13.247 43.598 9.638 C 43.598 6.121 45.745 3.54 48.874 3.54 C 50.45 3.54 51.706 4.294 52.391 5.276 Z M 49.833 12.311 C 51.409 12.311 52.483 11.077 52.483 9.593 C 52.483 8.04 51.364 6.875 49.833 6.875 C 48.326 6.875 47.184 7.994 47.184 9.593 C 47.184 11.191 48.326 12.311 49.833 12.311 Z M 39.613 5.276 L 39.613 3.883 L 43.131 3.883 L 43.131 16.513 C 43.131 18.683 41.852 19.871 39.659 19.871 L 32.236 19.871 L 32.236 16.308 L 38.791 16.308 C 39.271 16.308 39.613 16.034 39.613 15.577 L 39.613 13.909 L 39.522 13.909 C 38.837 14.892 37.58 15.645 36.005 15.645 C 33.013 15.645 30.729 13.247 30.729 9.638 C 30.729 6.121 32.876 3.54 36.005 3.54 C 37.58 3.54 38.837 4.294 39.522 5.276 Z M 36.964 12.311 C 38.54 12.311 39.613 11.077 39.613 9.593 C 39.613 8.04 38.494 6.875 36.964 6.875 C 35.456 6.875 34.314 7.994 34.314 9.593 C 34.314 11.191 35.456 12.311 36.964 12.311 Z M 24.352 3.54 C 28.166 3.54 30.61 6.601 30.153 10.758 L 21.931 10.758 C 22.159 11.625 22.913 12.402 24.238 12.516 C 25.106 12.585 26.042 12.219 26.408 11.648 L 30.085 11.648 C 29.354 14.252 27.001 15.645 24.284 15.645 C 20.378 15.645 18.368 12.79 18.368 9.593 C 18.368 6.167 20.835 3.54 24.352 3.54 Z M 24.329 6.646 C 23.187 6.646 22.296 7.217 21.977 8.131 L 26.659 8.131 C 26.339 7.172 25.448 6.646 24.329 6.646 Z M 17.609 0 L 17.609 15.303 L 13.841 15.303 L 13.841 5.573 L 9.89 15.303 L 7.72 15.303 L 3.769 5.573 L 3.769 15.303 L 0 15.303 L 0 0 L 5.23 0 L 8.816 9.09 L 12.425 0 Z" fill="#2454FF"/>
            </svg>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#results" className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">Results</a>
            <a href="#firms" className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">Client Stories</a>
            <a href="#summary" className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">Summary</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#2965FF]/10 text-[#2965FF] text-sm font-medium mb-6">
                Real Client Results — Law Firms
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mb-6">
                How 4 Law Firms Achieved Explosive Organic Growth with MEGA&apos;s Lindsay Agent
              </h1>
              <p className="text-lg text-[#6B7280] max-w-3xl mb-10 leading-relaxed">
                Real data from real clients. No hypotheticals — just the numbers behind law firms that went from near-zero organic visibility to thousands of weekly clicks and tens of thousands of ranking keywords.
              </p>
            </motion.div>

            <div id="results" className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              <HeroStat value={totalKeywords.toLocaleString()} label="Combined Top-10 Keywords" delay={0.2} />
              <HeroStat value={totalClicksWeekly.toLocaleString()} label="Combined Weekly Clicks" delay={0.3} />
              <HeroStat value={totalArticles.toLocaleString()} label="Total Articles Published" delay={0.4} />
              <HeroStat value={`${avgDA}`} label="Average Domain Authority" delay={0.5} />
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-3">
              {["SEO", "Content Marketing", "AI-Powered", "Law Firms", "Organic Growth", "Lindsay Agent"].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700">{tag}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Combined growth comparison chart */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-16 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Keyword Growth — All 4 Firms</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <ResponsiveContainer width="100%" height={360}>
                <LineChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    type="category"
                    allowDuplicatedCategory={false}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(val) => typeof val === "number" ? val.toLocaleString() : val} />
                  {firms.map((firm) => (
                    <Line
                      key={firm.name}
                      data={firm.growthData}
                      dataKey="keywords"
                      name={firm.name}
                      type="monotone"
                      stroke={firm.color}
                      strokeWidth={2.5}
                      dot={false}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-6 mt-4 justify-center">
                {firms.map((f) => (
                  <div key={f.name} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: f.color }} />
                    <span className="text-[#6B7280]">{f.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Individual firm cards */}
        <section id="firms" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Client Stories</h2>
            <div className="grid grid-cols-1 gap-8">
              {firms.map((firm, i) => (
                <FirmCard key={firm.name} firm={firm} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <motion.section
          id="summary"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-20 px-6"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Pattern</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-2">Content Volume Works</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Across all 4 firms, high-quality AI-generated content at scale produced compounding keyword growth — even for sites with domain authority as low as 8.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">Hockey-Stick Trajectory</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Every firm shows the same pattern: slow initial months, then exponential growth as Google recognizes topical authority. The compound effect is undeniable.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold mb-2">Legal Niche Domination</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Law firms are some of the most competitive SEO verticals. These results prove that the right strategy can break through — fast.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <svg width="80" height="28" viewBox="0 0 56 19.871" xmlns="http://www.w3.org/2000/svg">
              <path d="M 52.483 5.276 L 52.483 3.883 L 56 3.883 L 56 15.303 L 52.483 15.303 L 52.483 13.909 L 52.391 13.909 C 51.706 14.892 50.45 15.645 48.874 15.645 C 45.882 15.645 43.598 13.247 43.598 9.638 C 43.598 6.121 45.745 3.54 48.874 3.54 C 50.45 3.54 51.706 4.294 52.391 5.276 Z M 49.833 12.311 C 51.409 12.311 52.483 11.077 52.483 9.593 C 52.483 8.04 51.364 6.875 49.833 6.875 C 48.326 6.875 47.184 7.994 47.184 9.593 C 47.184 11.191 48.326 12.311 49.833 12.311 Z M 39.613 5.276 L 39.613 3.883 L 43.131 3.883 L 43.131 16.513 C 43.131 18.683 41.852 19.871 39.659 19.871 L 32.236 19.871 L 32.236 16.308 L 38.791 16.308 C 39.271 16.308 39.613 16.034 39.613 15.577 L 39.613 13.909 L 39.522 13.909 C 38.837 14.892 37.58 15.645 36.005 15.645 C 33.013 15.645 30.729 13.247 30.729 9.638 C 30.729 6.121 32.876 3.54 36.005 3.54 C 37.58 3.54 38.837 4.294 39.522 5.276 Z M 36.964 12.311 C 38.54 12.311 39.613 11.077 39.613 9.593 C 39.613 8.04 38.494 6.875 36.964 6.875 C 35.456 6.875 34.314 7.994 34.314 9.593 C 34.314 11.191 35.456 12.311 36.964 12.311 Z M 24.352 3.54 C 28.166 3.54 30.61 6.601 30.153 10.758 L 21.931 10.758 C 22.159 11.625 22.913 12.402 24.238 12.516 C 25.106 12.585 26.042 12.219 26.408 11.648 L 30.085 11.648 C 29.354 14.252 27.001 15.645 24.284 15.645 C 20.378 15.645 18.368 12.79 18.368 9.593 C 18.368 6.167 20.835 3.54 24.352 3.54 Z M 24.329 6.646 C 23.187 6.646 22.296 7.217 21.977 8.131 L 26.659 8.131 C 26.339 7.172 25.448 6.646 24.329 6.646 Z M 17.609 0 L 17.609 15.303 L 13.841 15.303 L 13.841 5.573 L 9.89 15.303 L 7.72 15.303 L 3.769 5.573 L 3.769 15.303 L 0 15.303 L 0 0 L 5.23 0 L 8.816 9.09 L 12.425 0 Z" fill="#2454FF"/>
            </svg>
          </div>
          <p className="text-sm text-[#6B7280] max-w-xl mx-auto mb-6">
            All metrics represent actual client results from MEGA&apos;s Lindsay Agent. Data current as of March 2026.
          </p>
          <p className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()} Mega. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
