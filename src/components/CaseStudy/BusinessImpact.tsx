"use client";

import AnimatedSection from "./AnimatedSection";
import { CaseStudyData } from "@/data/types";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

export default function BusinessImpact({ data }: { data: CaseStudyData }) {
  // Use paid ads revenue if available, otherwise use organic traffic growth
  const chartData = data.paidAds
    ? data.paidAds.monthly.map((m) => ({ month: m.month, revenue: m.revenue }))
    : data.organicConversions
    ? data.organicConversions.monthly.map((m) => ({ month: m.month, leads: m.totalLeads }))
    : data.seo ? data.seo.monthly.map((m) => ({ month: m.month, traffic: m.traffic })) : [];

  const chartKey = data.paidAds ? "revenue" : data.organicConversions ? "leads" : "traffic";
  const chartTitle = data.paidAds ? "Revenue Growth" : data.organicConversions ? "Organic Lead Growth" : "Organic Traffic Growth";

  return (
    <AnimatedSection id="impact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Business Impact</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {data.impact.map((item) => (
            <div key={item.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-sm text-[#6B7280] mb-1">{item.label}</div>
              <div className="text-2xl font-bold">{item.value}</div>
              {item.growth && <div className="text-sm text-green-600 font-medium mt-1">{item.growth}</div>}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold mb-4">{chartTitle}</h3>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2965FF" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#2965FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area type="monotone" dataKey={chartKey} stroke="#2965FF" strokeWidth={2.5} fill="url(#revenueGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
