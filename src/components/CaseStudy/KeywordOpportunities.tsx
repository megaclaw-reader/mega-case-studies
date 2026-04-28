"use client";

import { CaseStudyData } from "@/data/types";
import AnimatedSection from "./AnimatedSection";

function getDifficultyStyle(label: string) {
  switch (label) {
    case "Easy": return { bg: "bg-green-50", text: "text-green-700", border: "border-green-200", bar: "bg-green-500" };
    case "Medium": return { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200", bar: "bg-yellow-500" };
    case "Hard": return { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", bar: "bg-orange-500" };
    case "Very Hard": return { bg: "bg-red-50", text: "text-red-700", border: "border-red-200", bar: "bg-red-500" };
    default: return { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", bar: "bg-gray-500" };
  }
}

export default function KeywordOpportunities({ data }: { data: CaseStudyData }) {
  if (!data.keywordOpportunities) return null;
  const { keywords, intro } = data.keywordOpportunities;

  const totalVolume = keywords.reduce((s, k) => s + k.monthlyVolume, 0);
  const totalEstTraffic = keywords.reduce((s, k) => s + k.estimatedTraffic, 0);
  const easyWins = keywords.filter(k => k.difficultyLabel === "Easy").length;

  return (
    <AnimatedSection id="keyword-opportunities" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Keyword Rankings &amp; Opportunity Analysis</h2>
        {intro && (
          <p className="text-[#6B7280] mb-10 max-w-3xl leading-relaxed">{intro}</p>
        )}

        {/* Summary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-sm text-[#6B7280] mb-1">Keywords Analyzed</div>
            <div className="text-2xl font-bold">{keywords.length}</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-sm text-[#6B7280] mb-1">Total Search Volume</div>
            <div className="text-2xl font-bold">{totalVolume.toLocaleString()}/mo</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-sm text-[#6B7280] mb-1">Projected Traffic If Ranked</div>
            <div className="text-2xl font-bold text-[#2965FF]">{totalEstTraffic.toLocaleString()}/mo</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="text-sm text-[#6B7280] mb-1">Quick Wins (Easy Difficulty)</div>
            <div className="text-2xl font-bold text-green-600">{easyWins} keywords</div>
          </div>
        </div>

        {/* Keyword cards */}
        <div className="space-y-4">
          {keywords.map((kw, i) => {
            const style = getDifficultyStyle(kw.difficultyLabel);
            return (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  {/* Left: keyword + note */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-lg font-semibold">{kw.keyword}</h3>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${style.bg} ${style.text} border ${style.border}`}>
                        {kw.difficultyLabel} ({kw.difficulty}/100)
                      </span>
                    </div>
                    {kw.note && (
                      <p className="text-sm text-[#6B7280] leading-relaxed">{kw.note}</p>
                    )}
                  </div>

                  {/* Right: metrics grid */}
                  <div className="flex-shrink-0 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 md:text-right">
                    <div>
                      <div className="text-xs text-[#6B7280] uppercase tracking-wide mb-0.5">Volume</div>
                      <div className="font-semibold">{kw.monthlyVolume.toLocaleString()}/mo</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6B7280] uppercase tracking-wide mb-0.5">Current</div>
                      <div className={`font-semibold ${kw.currentRank === "Not Ranking" ? "text-red-500" : "text-yellow-600"}`}>
                        {kw.currentRank}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6B7280] uppercase tracking-wide mb-0.5">Projected</div>
                      <div className="font-semibold text-green-600">{kw.projectedRank}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6B7280] uppercase tracking-wide mb-0.5">Est. Traffic</div>
                      <div className="font-semibold text-[#2965FF]">{kw.estimatedTraffic.toLocaleString()}/mo</div>
                    </div>
                  </div>
                </div>

                {/* Difficulty bar + timeframe */}
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${style.bar}`} style={{ width: `${kw.difficulty}%` }} />
                  </div>
                  <span className="text-xs text-[#6B7280] flex-shrink-0">
                    {kw.projectedTimeframe} to rank
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Difficulty legend */}
        <div className="mt-8 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-3">Difficulty Scale</div>
          <div className="flex flex-wrap gap-6 text-sm text-[#6B7280]">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500" /> Easy (0–30) — Quick wins, 1-4 months</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-500" /> Medium (31–50) — Moderate effort, 3-6 months</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500" /> Hard (51–70) — Significant effort, 6-9 months</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500" /> Very Hard (71+) — Long-term play, 9-12+ months</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
