"use client";

import AnimatedSection from "./AnimatedSection";
import { MetricHeader } from "./MetricTooltip";
import { CaseStudyData } from "@/data/types";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

function StatCard({ label, value, growth, from }: { label: string; value: string; growth: string; from: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="text-sm text-[#6B7280] mb-1">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
      {growth && <div className="text-sm text-green-600 font-medium mt-1">{growth}</div>}
      {from && <div className="text-xs text-[#6B7280] mt-0.5">{from}</div>}
    </div>
  );
}

export default function SeoPerformance({ data }: { data: CaseStudyData }) {
  const { seo } = data;

  return (
    <AnimatedSection id="seo" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">SEO Performance</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {seo.summary.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">Keyword Growth</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={seo.monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="keywords" stroke="#2965FF" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="top10" stroke="#4A7DFF" strokeWidth={2} dot={false} strokeDasharray="4 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">Organic Traffic Growth</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={seo.monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="traffic" stroke="#2965FF" strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h3 className="font-bold p-6 pb-4">Monthly SEO Data</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Month", "Keywords", "Top 10", "Top 3", "Traffic", "Pages", "Avg Pos", "CTR"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                      <MetricHeader label={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seo.monthly.map((row, i) => (
                  <tr key={row.month} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                    <td className="px-6 py-3 font-medium">{row.month}</td>
                    <td className="px-6 py-3">{row.keywords.toLocaleString()}</td>
                    <td className="px-6 py-3">{row.top10.toLocaleString()}</td>
                    <td className="px-6 py-3">{row.top3}</td>
                    <td className="px-6 py-3">{row.traffic.toLocaleString()}</td>
                    <td className="px-6 py-3">{row.pages}</td>
                    <td className="px-6 py-3">{row.avgPos}</td>
                    <td className="px-6 py-3">{row.ctr}%</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                {(() => {
                  const m = seo.monthly;
                  const last = m[m.length - 1];
                  const totalTraffic = m.reduce((s, r) => s + r.traffic, 0);
                  const totalPages = m.reduce((s, r) => s + r.pages, 0);
                  const avgPos = (m.reduce((s, r) => s + r.avgPos, 0) / m.length).toFixed(1);
                  const avgCtr = (m.reduce((s, r) => s + r.ctr, 0) / m.length).toFixed(2);
                  return (
                    <tr className="border-t-2 border-gray-200 bg-gray-100 font-semibold">
                      <td className="px-6 py-3">Total / Avg</td>
                      <td className="px-6 py-3">{last.keywords.toLocaleString()}</td>
                      <td className="px-6 py-3">{last.top10.toLocaleString()}</td>
                      <td className="px-6 py-3">{last.top3}</td>
                      <td className="px-6 py-3">{totalTraffic.toLocaleString()}</td>
                      <td className="px-6 py-3">{totalPages.toLocaleString()}</td>
                      <td className="px-6 py-3">{avgPos}</td>
                      <td className="px-6 py-3">{avgCtr}%</td>
                    </tr>
                  );
                })()}
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
