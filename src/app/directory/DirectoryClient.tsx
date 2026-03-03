"use client";

import { useState, useMemo } from "react";

type Entry = {
  slug: string;
  industry: string;
  product: string;
  adSpendRange: string | null;
  adSpendBucket?: string | null;
  headline: string;
  location: string;
  tags: string[];
  heroStats: { value: string; unit: string; label: string }[];
};

type Props = {
  entries: Entry[];
  industries: string[];
  products: string[];
  spendBuckets: string[];
};

export default function DirectoryClient({
  entries,
  industries,
  products,
  spendBuckets,
}: Props) {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [product, setProduct] = useState("All");
  const [spend, setSpend] = useState("All");

  const filtered = useMemo(() => {
    return entries.filter((e) => {
      if (industry !== "All" && e.industry !== industry) return false;
      if (product !== "All" && e.product !== product) return false;
      if (spend !== "All" && (e as any).adSpendBucket !== spend) return false;
      if (search) {
        const q = search.toLowerCase();
        const haystack = `${e.industry} ${e.headline} ${e.location} ${e.tags.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [entries, industry, product, spend, search]);

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
            {entries.length} case studies across {industries.length} industries
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-3 items-end">
          {/* Search */}
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

          {/* Industry */}
          <div className="min-w-[180px]">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">
              Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#2965FF]/30 focus:border-[#2965FF]"
            >
              <option value="All">All Industries</option>
              {industries.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          {/* Product */}
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
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Ad Spend */}
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
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-500">
          Showing {filtered.length} of {entries.length} case studies
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/80">
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">Industry</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">Location</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">Product</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">Ad Spend</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-700">Key Result</th>
                  <th className="text-center px-5 py-3.5 font-semibold text-gray-700">Link</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((entry, idx) => {
                  const topStat = entry.heroStats[entry.heroStats.length > 1 ? 1 : 0];
                  return (
                    <tr
                      key={entry.slug}
                      className={`border-b border-gray-100 hover:bg-[#2965FF]/[0.02] transition-colors ${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                      }`}
                    >
                      <td className="px-5 py-4">
                        <span className="font-medium text-gray-900">{entry.industry}</span>
                      </td>
                      <td className="px-5 py-4 text-gray-600">{entry.location.split("(")[0].trim()}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
                            entry.product === "SEO & Paid Ads"
                              ? "bg-purple-50 text-purple-700"
                              : entry.product === "Just SEO"
                              ? "bg-green-50 text-green-700"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {entry.product}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {entry.adSpendRange || "—"}
                      </td>
                      <td className="px-5 py-4">
                        {topStat && (
                          <span className="text-gray-700">
                            <span className="font-semibold text-[#2965FF]">
                              {topStat.value}{topStat.unit}
                            </span>{" "}
                            <span className="text-gray-500">{topStat.label}</span>
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <a
                          href={`/${entry.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2965FF] text-white rounded-lg text-xs font-medium hover:bg-[#1d4fd8] transition-colors"
                        >
                          View
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-12 text-center text-gray-400">
                      No case studies match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
