"use client";

import AnimatedSection from "./AnimatedSection";
import { MetricHeader } from "./MetricTooltip";
import { CaseStudyData } from "@/data/types";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
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

export default function LocalSeoPerformance({ data }: { data: CaseStudyData }) {
  if (!data.localSeo) return null;
  const { localSeo } = data;

  return (
    <AnimatedSection id="local-seo" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Local SEO & Maps Performance</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {localSeo.summary.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">Google Business Profile Views</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={localSeo.monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="gbpViews" name="GBP Views" stroke="#2965FF" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="mapsImpressions" name="Maps Impressions" stroke="#4A7DFF" strokeWidth={2} dot={false} strokeDasharray="4 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">Calls & Direction Requests from GBP</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={localSeo.monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="gbpCalls" name="Calls" fill="#2965FF" radius={[4, 4, 0, 0]} />
                <Bar dataKey="directionRequests" name="Directions" fill="#93B4FF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h3 className="font-bold p-6 pb-4">Monthly Local SEO Data</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Month", "GBP Views", "Maps Impressions", "GBP Calls", "Direction Requests"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                      <MetricHeader label={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {localSeo.monthly.map((row, i) => (
                  <tr key={row.month} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                    <td className="px-6 py-3 font-medium">{row.month}</td>
                    <td className="px-6 py-3">{row.gbpViews.toLocaleString()}</td>
                    <td className="px-6 py-3">{row.mapsImpressions.toLocaleString()}</td>
                    <td className="px-6 py-3">{row.gbpCalls}</td>
                    <td className="px-6 py-3">{row.directionRequests}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                {(() => {
                  const m = localSeo.monthly;
                  return (
                    <tr className="border-t-2 border-gray-200 bg-gray-100 font-semibold">
                      <td className="px-6 py-3">Total</td>
                      <td className="px-6 py-3">{m.reduce((s, r) => s + r.gbpViews, 0).toLocaleString()}</td>
                      <td className="px-6 py-3">{m.reduce((s, r) => s + r.mapsImpressions, 0).toLocaleString()}</td>
                      <td className="px-6 py-3">{m.reduce((s, r) => s + r.gbpCalls, 0).toLocaleString()}</td>
                      <td className="px-6 py-3">{m.reduce((s, r) => s + r.directionRequests, 0).toLocaleString()}</td>
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
