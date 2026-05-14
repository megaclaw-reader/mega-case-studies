"use client";

import { useState, useMemo } from "react";

type Entry = {
  slug: string;
  industry: string;
  vertical: string;
  product: string;
  adSpendRange: string | null;
  adSpendBucket?: string | null;
  headline: string;
  location: string;
  tags: string[];
  heroStats: { value: string; unit: string; label: string }[];
};

type VerticalGroup = {
  vertical: string;
  entries: Entry[];
};

type Props = {
  entries: Entry[];
  verticalGroups: VerticalGroup[];
  verticals: string[];
  products: string[];
  spendBuckets: string[];
};

export default function DirectoryClient({
  entries,
  verticalGroups,
  verticals,
  products,
  spendBuckets,
}: Props) {
  const [search, setSearch] = useState("");
  const [vertical, setVertical] = useState("All");
  const [product, setProduct] = useState("All");
  const [spend, setSpend] = useState("All");

  const filteredGroups = useMemo(() => {
    return verticalGroups
      .filter((vg) => vertical === "All" || vg.vertical === vertical)
      .map((vg) => ({
        ...vg,
        entries: vg.entries.filter((e) => {
          if (product !== "All" && e.product !== product) return false;
          if (spend !== "All" && e.adSpendBucket !== spend) return false;
          if (search) {
            const q = search.toLowerCase();
            const haystack = `${e.vertical} ${e.industry} ${e.headline} ${e.location} ${e.tags.join(" ")}`.toLowerCase();
            if (!haystack.includes(q)) return false;
          }
          return true;
        }),
      }))
      .filter((vg) => vg.entries.length > 0);
  }, [verticalGroups, vertical, product, spend, search]);

  const totalShown = filteredGroups.reduce((sum, vg) => sum + vg.entries.length, 0);

  return (
    <div className="min-h-screen bg-[#FDFDFD]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center gap-3 mb-2">
            <img src="/favicon.png" alt="MEGA" className="w-8 h-8" />
            <span className="text-sm font-medium text-[#2965FF] tracking-wide uppercase">
              MEGA AI
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Case Study Directory
          </h1>
          <p className="text-gray-500 text-lg">
            {entries.length} curated case studies across {verticals.length} industries
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-3 items-end">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
              Search
            </label>
            <input
              type="text"
              placeholder="Search industry, location, keyword…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2965FF]/30 focus:border-[#2965FF]"
            />
          </div>

          <div className="min-w-[200px]">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
              Industry
            </label>
            <select
              value={vertical}
              onChange={(e) => setVertical(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2965FF]/30 focus:border-[#2965FF]"
            >
              <option value="All">All Industries ({verticals.length})</option>
              {verticals.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          <div className="min-w-[180px]">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
              Product
            </label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2965FF]/30 focus:border-[#2965FF]"
            >
              <option value="All">All Products</option>
              {products.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div className="min-w-[180px]">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
              Ad Spend Range
            </label>
            <select
              value={spend}
              onChange={(e) => setSpend(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2965FF]/30 focus:border-[#2965FF]"
            >
              <option value="All">All Spend Levels</option>
              {spendBuckets.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Showing {totalShown} case studies across {filteredGroups.length} industries
        </div>
      </div>

      {/* Vertical Groups */}
      <div className="max-w-7xl mx-auto px-6 pb-16 space-y-8">
        {filteredGroups.map((vg) => (
          <div key={vg.vertical}>
            {/* Vertical Header */}
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-bold text-gray-900">{vg.vertical}</h2>
              <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                {vg.entries.length} {vg.entries.length === 1 ? "study" : "studies"}
              </span>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vg.entries.map((entry) => {
                const topStats = entry.heroStats.slice(0, 3);
                return (
                  <a
                    key={entry.slug}
                    href={`/${entry.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-[#2965FF]/40 hover:shadow-md transition-all"
                  >
                    {/* Industry + Location */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{entry.industry}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{entry.location.split("(")[0].trim()}</p>
                      </div>
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap ${
                          entry.product === "SEO & Paid Ads"
                            ? "bg-purple-50 text-purple-700"
                            : entry.product === "Just SEO"
                            ? "bg-green-50 text-green-700"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {entry.product}
                      </span>
                    </div>

                    {/* Headline */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-snug">
                      {entry.headline}
                    </p>

                    {/* Hero Stats */}
                    <div className="flex gap-4 pt-3 border-t border-gray-100">
                      {topStats.map((stat, i) => (
                        <div key={i} className="flex-1 min-w-0">
                          <p className="text-base font-bold text-[#2965FF] truncate">
                            {stat.value}{stat.unit}
                          </p>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wide truncate">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Ad Spend */}
                    {entry.adSpendRange && (
                      <div className="mt-3 text-[10px] text-gray-400">
                        Ad Spend: {entry.adSpendRange}
                      </div>
                    )}

                    {/* Hover arrow */}
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-[#2965FF] opacity-0 group-hover:opacity-100 transition-opacity">
                      View Case Study
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        ))}

        {filteredGroups.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            No case studies match your filters.
          </div>
        )}
      </div>
    </div>
  );
}
