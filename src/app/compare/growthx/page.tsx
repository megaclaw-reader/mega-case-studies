"use client";

import Footer from "@/components/CaseStudy/Footer";

const megaLogo = (
  <svg width="112" height="40" viewBox="0 0 56 19.871" xmlns="http://www.w3.org/2000/svg">
    <path d="M 52.483 5.276 L 52.483 3.883 L 56 3.883 L 56 15.303 L 52.483 15.303 L 52.483 13.909 L 52.391 13.909 C 51.706 14.892 50.45 15.645 48.874 15.645 C 45.882 15.645 43.598 13.247 43.598 9.638 C 43.598 6.121 45.745 3.54 48.874 3.54 C 50.45 3.54 51.706 4.294 52.391 5.276 Z M 49.833 12.311 C 51.409 12.311 52.483 11.077 52.483 9.593 C 52.483 8.04 51.364 6.875 49.833 6.875 C 48.326 6.875 47.184 7.994 47.184 9.593 C 47.184 11.191 48.326 12.311 49.833 12.311 Z M 39.613 5.276 L 39.613 3.883 L 43.131 3.883 L 43.131 16.513 C 43.131 18.683 41.852 19.871 39.659 19.871 L 32.236 19.871 L 32.236 16.308 L 38.791 16.308 C 39.271 16.308 39.613 16.034 39.613 15.577 L 39.613 13.909 L 39.522 13.909 C 38.837 14.892 37.58 15.645 36.005 15.645 C 33.013 15.645 30.729 13.247 30.729 9.638 C 30.729 6.121 32.876 3.54 36.005 3.54 C 37.58 3.54 38.837 4.294 39.522 5.276 Z M 36.964 12.311 C 38.54 12.311 39.613 11.077 39.613 9.593 C 39.613 8.04 38.494 6.875 36.964 6.875 C 35.456 6.875 34.314 7.994 34.314 9.593 C 34.314 11.191 35.456 12.311 36.964 12.311 Z M 24.352 3.54 C 28.166 3.54 30.61 6.601 30.153 10.758 L 21.931 10.758 C 22.159 11.625 22.913 12.402 24.238 12.516 C 25.106 12.585 26.042 12.219 26.408 11.648 L 30.085 11.648 C 29.354 14.252 27.001 15.645 24.284 15.645 C 20.378 15.645 18.368 12.79 18.368 9.593 C 18.368 6.167 20.835 3.54 24.352 3.54 Z M 24.329 6.646 C 23.187 6.646 22.296 7.217 21.977 8.131 L 26.659 8.131 C 26.339 7.172 25.448 6.646 24.329 6.646 Z M 17.609 0 L 17.609 15.303 L 13.841 15.303 L 13.841 5.573 L 9.89 15.303 L 7.72 15.303 L 3.769 5.573 L 3.769 15.303 L 0 15.303 L 0 0 L 5.23 0 L 8.816 9.09 L 12.425 0 Z" fill="#2454FF"/>
  </svg>
);

const comparisonRows = [
  { dimension: "What You Get", mega: "Full marketing execution — SEO, paid ads, creative, landing pages", growthx: "Sales coaching and GTM strategy guidance" },
  { dimension: "Model", mega: "Ongoing monthly subscription", growthx: "16-week accelerator program" },
  { dimension: "Time to Results", mega: "AI agents deploy and optimize from day 1", growthx: "16 weeks of learning before you execute on your own" },
  { dimension: "Who Does the Work", mega: "AI agents + dedicated account managers handle everything", growthx: "You do — with a coach guiding you" },
  { dimension: "After It Ends", mega: "Continuous optimization that compounds month over month", growthx: "Program ends after 16 weeks; you're on your own" },
  { dimension: "Content Output", mega: "20–25 SEO pages/month, unlimited ad creative, landing pages", growthx: "Frameworks and templates for you to implement" },
  { dimension: "Pricing", mega: "From $699/mo (SEO) or $1,999/mo (Paid Ads)", growthx: "Typically $5K–$25K for 16-week program" },
  { dimension: "Business Types", mega: "B2B, B2C, ecommerce, lead gen, local services", growthx: "B2B startups only" },
  { dimension: "AI-Powered", mega: "Always-on AI agents optimizing 24/7", growthx: "No AI — human coaching only" },
];

const sections = [
  {
    icon: "⚡",
    title: "Coaching vs. Execution",
    description: "GrowthX teaches you how to sell. MEGA actually does your marketing.",
    detail: "GrowthX is a coaching program — you learn sales frameworks, define your ICP, and practice outreach with a dedicated coach. It's valuable education. But when you need leads flowing into your pipeline right now, you need execution, not homework. MEGA's AI agents build your SEO content, manage your ad accounts, generate creative, and optimize performance around the clock. You don't need to become a marketer — our AI handles it.",
  },
  {
    icon: "⏱",
    title: "Time to Results",
    description: "16 weeks of learning vs. results from day one.",
    detail: "GrowthX's Revenue Accelerator runs for 16 weeks. That's four months before you're fully equipped to execute on your own. With MEGA, AI agents are deployed into your accounts immediately — optimizing bids, producing content, and generating leads from the first week. Every day your marketing isn't running is revenue left on the table.",
  },
  {
    icon: "📈",
    title: "Compounding vs. One-Time",
    description: "MEGA's optimization compounds. GrowthX's program has an end date.",
    detail: "When GrowthX's 16-week program ends, you graduate. The coaching stops. You take what you've learned and execute solo. MEGA is a continuous engagement — our AI agents get smarter about your market every month. SEO authority builds. Ad algorithms optimize. Creative performance data compounds. Month 6 is dramatically better than month 1, and month 12 is better still.",
  },
  {
    icon: "💰",
    title: "Cost Efficiency",
    description: "More output per dollar with AI-powered execution.",
    detail: "Accelerator programs typically charge $5K–$25K for their cohort. That's a significant investment for coaching alone — no actual marketing gets done. MEGA's SEO Agent starts at $699/month and produces 20–25 optimized pages monthly with daily performance tuning. The Paid Ads Agent at $1,999/month manages your entire ad operation with always-on AI optimization and unlimited creative. You're paying for results, not lessons.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Scale",
    description: "Output that no human team — or coaching program — can match.",
    detail: "MEGA's AI agents produce 20–25 SEO-optimized pages per month, generate dozens of ad creative variations, optimize bids and budgets in real time, and test landing page variants continuously. This level of output would require a full marketing department. GrowthX helps you become a better salesperson, but it doesn't scale your marketing infrastructure.",
  },
  {
    icon: "🌐",
    title: "Scope & Versatility",
    description: "GrowthX is B2B sales only. MEGA works across every business model.",
    detail: "GrowthX focuses specifically on B2B founders building outbound sales motions. If you're running an ecommerce brand, a local service business, a B2C SaaS, or any model that depends on inbound marketing and paid acquisition, GrowthX isn't built for you. MEGA's AI agents drive results across B2B, B2C, ecommerce, lead generation, and local services — wherever customers search and buy online.",
  },
];

export default function GrowthXComparison() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center">{megaLogo}</a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#comparison" className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">Comparison</a>
            <a href="#details" className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">Deep Dive</a>
            <a href="#who" className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">Who Should Choose</a>
            <a href="#cta" className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-widest text-[#2965FF] uppercase mb-4">Comparison</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              MEGA AI vs GrowthX
            </h1>
            <p className="text-xl md:text-2xl text-[#6B7280] max-w-2xl mx-auto mb-4">
              Coaching vs. Execution
            </p>
            <p className="text-base text-[#6B7280] max-w-xl mx-auto">
              GrowthX teaches the playbook. MEGA runs it. Here&apos;s how they compare — and why execution beats education when you need marketing results now.
            </p>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section id="comparison" className="py-16 px-6 bg-[#F8FAFF]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Side-by-Side Comparison</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 border-b border-gray-100">
                <div className="p-5 font-semibold text-sm text-[#6B7280]"></div>
                <div className="p-5 text-center bg-[#2965FF]/5 border-l border-r border-gray-100">
                  <span className="font-bold text-[#2965FF] text-lg">MEGA AI</span>
                </div>
                <div className="p-5 text-center">
                  <span className="font-bold text-gray-800 text-lg">GrowthX</span>
                </div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? "border-b border-gray-100" : ""}`}>
                  <div className="p-5 font-semibold text-sm text-gray-800 flex items-center">{row.dimension}</div>
                  <div className="p-5 text-sm text-gray-700 bg-[#2965FF]/5 border-l border-r border-gray-100">{row.mega}</div>
                  <div className="p-5 text-sm text-[#6B7280]">{row.growthx}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section id="details" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">The Full Picture</h2>
            <div className="space-y-12">
              {sections.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{s.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                      <p className="text-[#2965FF] font-medium mt-1">{s.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-0 md:pl-14">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Choose What */}
        <section id="who" className="py-20 px-6 bg-[#F8FAFF]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Who Should Choose What?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* GrowthX card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">GrowthX might be right if…</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span>You&apos;re a first-time B2B founder who&apos;s never sold before</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span>You specifically need to learn outbound sales fundamentals</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span>You have 4+ months before you need revenue results</li>
                  <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span>You want to personally handle all sales and marketing long-term</li>
                </ul>
              </div>
              {/* MEGA card */}
              <div className="bg-white rounded-2xl border-2 border-[#2965FF] p-8 relative shadow-lg">
                <div className="absolute -top-3.5 left-8 bg-[#2965FF] text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</div>
                <h3 className="text-xl font-bold text-[#2965FF] mb-4">Choose MEGA AI if…</h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#2965FF] mt-0.5">✓</span>You need leads, traffic, and revenue now — not in 16 weeks</li>
                  <li className="flex items-start gap-2"><span className="text-[#2965FF] mt-0.5">✓</span>You want marketing done for you, not taught to you</li>
                  <li className="flex items-start gap-2"><span className="text-[#2965FF] mt-0.5">✓</span>You need SEO, paid ads, or both — with continuous optimization</li>
                  <li className="flex items-start gap-2"><span className="text-[#2965FF] mt-0.5">✓</span>You run any type of business — B2B, B2C, ecommerce, local</li>
                  <li className="flex items-start gap-2"><span className="text-[#2965FF] mt-0.5">✓</span>You want AI working 24/7, not a weekly coaching call</li>
                  <li className="flex items-start gap-2"><span className="text-[#2965FF] mt-0.5">✓</span>You want results that compound over time, not a one-time program</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-[#6B7280] mt-8 max-w-2xl mx-auto">
              These services can even be complementary — learn to sell with GrowthX, then let MEGA handle your entire marketing engine. But if you have to pick one, execution beats education every time.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready for Marketing That Actually Runs?
            </h2>
            <p className="text-lg text-[#6B7280] mb-10 max-w-xl mx-auto">
              Stop learning about marketing. Start getting results. MEGA&apos;s AI agents are ready to deploy into your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://gomega.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2965FF] text-white font-semibold rounded-xl hover:bg-[#1d4ed8] transition-colors text-lg shadow-lg shadow-blue-200"
              >
                Get Started with MEGA AI →
              </a>
            </div>
            <p className="text-sm text-[#6B7280] mt-6">SEO from $699/mo · Paid Ads from $1,999/mo · No contracts</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
