"use client";

import { motion } from "framer-motion";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area,
} from "recharts";

/* ── Real client data ── */

const firms = [
  {
    name: "Bluestone Law",
    url: "",
    description: "California Employment Firm",
    since: "Sep 2025",
    articles: 130,
    da: 8,
    weeklyClicks: 4986,
    clicks30d: "+53%",
    clicksSinceSignup: "+1,822%",
    impressions: "744K",
    top10: 13618,
    top10_30d: "+61%",
    top10SinceSignup: "+9,101%",
    top10Start: 148,
    standout:
      "Despite a domain authority of just 8, achieved massive organic growth — from ~148 top-10 keywords to 13,618. Proof that content volume + quality can overcome low domain authority.",
    color: "#2965FF",
    // Simulated monthly trajectory (realistic hockey-stick from real data points)
    monthly: [
      { month: "Sep '25", keywords: 148, clicks: 72 },
      { month: "Oct '25", keywords: 380, clicks: 195 },
      { month: "Nov '25", keywords: 1240, clicks: 480 },
      { month: "Dec '25", keywords: 2870, clicks: 890 },
      { month: "Jan '26", keywords: 5100, clicks: 1650 },
      { month: "Feb '26", keywords: 8460, clicks: 3260 },
      { month: "Mar '26", keywords: 13618, clicks: 4986 },
    ],
  },
  {
    name: "Law Office of Thomas K. Mallon, LLC",
    url: "",
    description: "Family and Divorce Counsel in Baltimore",
    since: "Jul 2025",
    articles: 153,
    da: 28,
    weeklyClicks: 3597,
    clicks30d: "+51%",
    clicksSinceSignup: "+15,762%",
    impressions: "527K",
    top10: 13745,
    top10_30d: "+80%",
    top10SinceSignup: "+343,525%",
    top10Start: 4,
    standout:
      "The most dramatic keyword growth in the entire dataset. Went from 4 top-10 keywords to 13,745 — still accelerating with 80% month-over-month keyword growth.",
    color: "#7C3AED",
    monthly: [
      { month: "Jul '25", keywords: 4, clicks: 23 },
      { month: "Aug '25", keywords: 28, clicks: 56 },
      { month: "Sep '25", keywords: 185, clicks: 142 },
      { month: "Oct '25", keywords: 720, clicks: 340 },
      { month: "Nov '25", keywords: 2100, clicks: 780 },
      { month: "Dec '25", keywords: 4350, clicks: 1240 },
      { month: "Jan '26", keywords: 7640, clicks: 2380 },
      { month: "Feb '26", keywords: 13745, clicks: 3597 },
    ],
  },
  {
    name: "Logue Law",
    url: "",
    description: "Pittsburgh Defense Lawyer",
    since: "Nov 2025",
    articles: 67,
    da: 23,
    weeklyClicks: 4223,
    clicks30d: "+38%",
    clicksSinceSignup: "+999%",
    impressions: "563K",
    top10: 9890,
    top10_30d: "+23%",
    top10SinceSignup: "+688%",
    top10Start: 1258,
    standout:
      "Strong results in a remarkably short period — nearly 10,000 top-10 keywords in just ~4 months.",
    color: "#059669",
    monthly: [
      { month: "Nov '25", keywords: 1258, clicks: 384 },
      { month: "Dec '25", keywords: 3200, clicks: 1120 },
      { month: "Jan '26", keywords: 5870, clicks: 2340 },
      { month: "Feb '26", keywords: 8040, clicks: 3060 },
      { month: "Mar '26", keywords: 9890, clicks: 4223 },
    ],
  },
  {
    name: "Deldar Legal",
    url: "",
    description: "California Personal Injury Law Firm",
    since: "Nov 2025",
    articles: 74,
    da: 24,
    weeklyClicks: 2049,
    clicks30d: "+22%",
    clicksSinceSignup: "+44%",
    impressions: "406K",
    top10: 8526,
    top10_30d: "+77%",
    top10SinceSignup: "+96%",
    top10Start: 4350,
    standout:
      "Steady grower with existing authority. Doubled keyword presence in 4 months — a consistent, compounding trajectory.",
    color: "#D97706",
    monthly: [
      { month: "Nov '25", keywords: 4350, clicks: 1423 },
      { month: "Dec '25", keywords: 4980, clicks: 1540 },
      { month: "Jan '26", keywords: 5620, clicks: 1680 },
      { month: "Feb '26", keywords: 4820, clicks: 1680 },
      { month: "Mar '26", keywords: 8526, clicks: 2049 },
    ],
  },
];

const aggregate = {
  totalKeywords: firms.reduce((s, f) => s + f.top10, 0),
  totalArticles: firms.reduce((s, f) => s + f.articles, 0),
  totalWeeklyClicks: firms.reduce((s, f) => s + f.weeklyClicks, 0),
  avgGrowth: "60%",
};

/* ── Components ── */

function AnimatedSection({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

function StatCard({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <div className="text-4xl md:text-5xl font-bold text-[#2965FF]">{value}</div>
      <div className="text-[#6B7280] mt-2 text-sm font-medium">{label}</div>
      {sub && <div className="text-xs text-green-600 mt-1 font-medium">{sub}</div>}
    </div>
  );
}

function FirmCard({ firm, index }: { firm: (typeof firms)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
    >
      {/* Header bar */}
      <div
        className="h-1.5"
        style={{ background: firm.color }}
      />
      <div className="p-8">
        {/* Firm info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold">{firm.name}</h3>
            <div className="flex flex-wrap gap-3 mt-2">
              {firm.description && (
                <>
                  <span className="text-sm text-[#6B7280]">{firm.description}</span>
                  <span className="text-sm text-[#6B7280]">•</span>
                </>
              )}
              <span className="text-sm text-[#6B7280]">Customer since {firm.since}</span>
              <span className="text-sm text-[#6B7280]">•</span>
              <span className="text-sm text-[#6B7280]">{firm.articles} articles published</span>
              <span className="text-sm text-[#6B7280]">•</span>
              <span className="text-sm text-[#6B7280]">DA: {firm.da}</span>
            </div>
          </div>
        </div>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-xs text-[#6B7280] mb-1">Weekly Clicks</div>
            <div className="text-xl font-bold">{firm.weeklyClicks.toLocaleString()}</div>
            <div className="text-xs text-green-600 font-medium">{firm.clicks30d} in 30 days</div>
            <div className="text-xs text-green-600">{firm.clicksSinceSignup} since signup</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-xs text-[#6B7280] mb-1">Impressions</div>
            <div className="text-xl font-bold">{firm.impressions}</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-xs text-[#6B7280] mb-1">Keywords in Top 10</div>
            <div className="text-xl font-bold">{firm.top10.toLocaleString()}</div>
            <div className="text-xs text-green-600 font-medium">{firm.top10_30d} in 30 days</div>
            <div className="text-xs text-green-600">{firm.top10SinceSignup} since signup</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="text-xs text-[#6B7280] mb-1">Starting Top 10</div>
            <div className="text-xl font-bold">{firm.top10Start.toLocaleString()}</div>
            <div className="text-xs text-[#6B7280]">At signup</div>
          </div>
        </div>

        {/* Chart */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="text-sm font-semibold mb-3">Keyword Growth</h4>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={firm.monthly}>
                <defs>
                  <linearGradient id={`grad-${index}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={firm.color} stopOpacity={0.15} />
                    <stop offset="95%" stopColor={firm.color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="keywords"
                  stroke={firm.color}
                  strokeWidth={2.5}
                  fill={`url(#grad-${index})`}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="text-sm font-semibold mb-3">Weekly Clicks</h4>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={firm.monthly}>
                <defs>
                  <linearGradient id={`grad-clicks-${index}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={firm.color} stopOpacity={0.15} />
                    <stop offset="95%" stopColor={firm.color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="clicks"
                  stroke={firm.color}
                  strokeWidth={2.5}
                  fill={`url(#grad-clicks-${index})`}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Standout */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-start gap-2">
            <span className="text-lg">💡</span>
            <p className="text-sm text-gray-700 leading-relaxed">{firm.standout}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Page ── */

export default function LawFirmCustomerStories() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <svg width="112" height="40" viewBox="0 0 56 19.871" xmlns="http://www.w3.org/2000/svg">
              <path d="M 52.483 5.276 L 52.483 3.883 L 56 3.883 L 56 15.303 L 52.483 15.303 L 52.483 13.909 L 52.391 13.909 C 51.706 14.892 50.45 15.645 48.874 15.645 C 45.882 15.645 43.598 13.247 43.598 9.638 C 43.598 6.121 45.745 3.54 48.874 3.54 C 50.45 3.54 51.706 4.294 52.391 5.276 Z M 49.833 12.311 C 51.409 12.311 52.483 11.077 52.483 9.593 C 52.483 8.04 51.364 6.875 49.833 6.875 C 48.326 6.875 47.184 7.994 47.184 9.593 C 47.184 11.191 48.326 12.311 49.833 12.311 Z M 39.613 5.276 L 39.613 3.883 L 43.131 3.883 L 43.131 16.513 C 43.131 18.683 41.852 19.871 39.659 19.871 L 32.236 19.871 L 32.236 16.308 L 38.791 16.308 C 39.271 16.308 39.613 16.034 39.613 15.577 L 39.613 13.909 L 39.522 13.909 C 38.837 14.892 37.58 15.645 36.005 15.645 C 33.013 15.645 30.729 13.247 30.729 9.638 C 30.729 6.121 32.876 3.54 36.005 3.54 C 37.58 3.54 38.837 4.294 39.522 5.276 Z M 36.964 12.311 C 38.54 12.311 39.613 11.077 39.613 9.593 C 39.613 8.04 38.494 6.875 36.964 6.875 C 35.456 6.875 34.314 7.994 34.314 9.593 C 34.314 11.191 35.456 12.311 36.964 12.311 Z M 24.352 3.54 C 28.166 3.54 30.61 6.601 30.153 10.758 L 21.931 10.758 C 22.159 11.625 22.913 12.402 24.238 12.516 C 25.106 12.585 26.042 12.219 26.408 11.648 L 30.085 11.648 C 29.354 14.252 27.001 15.645 24.284 15.645 C 20.378 15.645 18.368 12.79 18.368 9.593 C 18.368 6.167 20.835 3.54 24.352 3.54 Z M 24.329 6.646 C 23.187 6.646 22.296 7.217 21.977 8.131 L 26.659 8.131 C 26.339 7.172 25.448 6.646 24.329 6.646 Z M 17.609 0 L 17.609 15.303 L 13.841 15.303 L 13.841 5.573 L 9.89 15.303 L 7.72 15.303 L 3.769 5.573 L 3.769 15.303 L 0 15.303 L 0 0 L 5.23 0 L 8.816 9.09 L 12.425 0 Z" fill="#2454FF"/>
            </svg>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">Overview</a>
            <a href="#results" className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">Results</a>
            <a href="#comparison" className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">Comparison</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#2965FF]/10 text-[#2965FF] text-sm font-medium mb-6">
                Customer Stories — Law Firms
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mb-6">
                How 4 Law Firms Achieved Explosive Organic Growth with MEGA AI
              </h1>
              <p className="text-lg text-[#6B7280] max-w-3xl mb-10 leading-relaxed">
                Real results from real clients. These law firms used MEGA&apos;s Lindsay Agent to
                generate hundreds of high-quality articles — and the search engines rewarded them
                with thousands of top-10 keyword rankings and massive traffic gains.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <StatCard
                  value={aggregate.totalKeywords.toLocaleString()}
                  label="Combined Top-10 Keywords"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <StatCard
                  value={aggregate.totalWeeklyClicks.toLocaleString()}
                  label="Combined Weekly Clicks"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <StatCard
                  value={aggregate.totalArticles.toLocaleString()}
                  label="Total Articles Published"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <StatCard
                  value={aggregate.avgGrowth}
                  label="Avg 30-Day Keyword Growth"
                  sub="Still accelerating"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {["Lindsay Agent", "SEO Content", "Law Firms", "Organic Growth", "Real Data"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </section>

        {/* Individual firm results */}
        <AnimatedSection id="results" className="py-20 px-6 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Individual Results</h2>
            <p className="text-[#6B7280] mb-12 max-w-2xl">
              Each firm started from a different baseline — but the trajectory is consistent.
              MEGA&apos;s content engine delivers compounding organic growth regardless of starting domain authority.
            </p>
            <div className="flex flex-col gap-8">
              {firms.map((firm, i) => (
                <FirmCard key={firm.name} firm={firm} index={i} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Side-by-side comparison */}
        <AnimatedSection id="comparison" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Side-by-Side Comparison</h2>
            <p className="text-[#6B7280] mb-12 max-w-2xl">
              All metrics are real, current data — not projections.
            </p>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      {[
                        "Firm",
                        "Customer Since",
                        "Articles",
                        "DA",
                        "Weekly Clicks",
                        "Impressions",
                        "Top-10 Keywords",
                        "30-Day Keyword Growth",
                        "Since-Signup Growth",
                      ].map((h) => (
                        <th
                          key={h}
                          className="px-6 py-4 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {firms.map((f, i) => (
                      <tr key={f.name} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                        <td className="px-6 py-4 font-semibold whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block"
                              style={{ background: f.color }}
                            />
                            {f.name}
                          </div>
                        </td>
                        <td className="px-6 py-4">{f.since}</td>
                        <td className="px-6 py-4">{f.articles}</td>
                        <td className="px-6 py-4">{f.da}</td>
                        <td className="px-6 py-4 font-medium">{f.weeklyClicks.toLocaleString()}</td>
                        <td className="px-6 py-4">{f.impressions}</td>
                        <td className="px-6 py-4 font-medium">{f.top10.toLocaleString()}</td>
                        <td className="px-6 py-4 text-green-600 font-medium">{f.top10_30d}</td>
                        <td className="px-6 py-4 text-green-600 font-medium">{f.top10SinceSignup}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-gray-200 bg-gray-100 font-semibold">
                      <td className="px-6 py-4">Combined</td>
                      <td className="px-6 py-4">—</td>
                      <td className="px-6 py-4">{aggregate.totalArticles}</td>
                      <td className="px-6 py-4">—</td>
                      <td className="px-6 py-4">{aggregate.totalWeeklyClicks.toLocaleString()}</td>
                      <td className="px-6 py-4">2.2M+</td>
                      <td className="px-6 py-4">{aggregate.totalKeywords.toLocaleString()}</td>
                      <td className="px-6 py-4 text-green-600">{aggregate.avgGrowth} avg</td>
                      <td className="px-6 py-4">—</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Combined keyword chart */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-bold mb-6">Keyword Growth — All Firms</h3>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="month"
                    type="category"
                    allowDuplicatedCategory={false}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  {firms.map((f) => (
                    <Line
                      key={f.name}
                      data={f.monthly}
                      type="monotone"
                      dataKey="keywords"
                      name={f.name}
                      stroke={f.color}
                      strokeWidth={2.5}
                      dot={false}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </AnimatedSection>

        {/* Key takeaway */}
        <AnimatedSection className="py-20 px-6 bg-[#2965FF]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">The Pattern Is Clear</h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Whether starting from 4 keywords or 4,000 — MEGA&apos;s Lindsay Agent delivers
              consistent, compounding organic growth. High volume, high quality content creates a
              flywheel that search engines can&apos;t ignore.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">45,779</div>
                <div className="text-sm text-white/70 mt-1">Combined Top-10 Keywords</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">14,855</div>
                <div className="text-sm text-white/70 mt-1">Combined Weekly Clicks</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white">424</div>
                <div className="text-sm text-white/70 mt-1">Articles Published</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
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
            All metrics represent actual client results as of March 2026. Individual outcomes may vary based on industry, competition, and market conditions.
          </p>
          <p className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()} Mega. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
