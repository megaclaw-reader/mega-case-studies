"use client";

import { CaseStudyData } from "@/data/types";
import AnimatedSection from "./AnimatedSection";

function getDifficultyColor(label: string) {
  switch (label) {
    case "Easy": return { bg: "bg-green-100", text: "text-green-800", bar: "bg-green-500" };
    case "Medium": return { bg: "bg-yellow-100", text: "text-yellow-800", bar: "bg-yellow-500" };
    case "Hard": return { bg: "bg-orange-100", text: "text-orange-800", bar: "bg-orange-500" };
    case "Very Hard": return { bg: "bg-red-100", text: "text-red-800", bar: "bg-red-500" };
    default: return { bg: "bg-gray-100", text: "text-gray-800", bar: "bg-gray-500" };
  }
}

export default function KeywordOpportunities({ data }: { data: CaseStudyData }) {
  if (!data.keywordOpportunities) return null;
  const { keywords, intro } = data.keywordOpportunities;

  const totalEstimatedTraffic = keywords.reduce((sum, k) => sum + k.estimatedTraffic, 0);

  return (
    <AnimatedSection id="keyword-opportunities" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Keyword Rankings &amp; Opportunity Analysis
        </h2>
        {intro && (
          <p className="text-lg text-gray-400 mb-8 max-w-3xl">{intro}</p>
        )}

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Keywords Analyzed</p>
            <p className="text-2xl font-bold">{keywords.length}</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Total Monthly Search Volume</p>
            <p className="text-2xl font-bold">{keywords.reduce((s, k) => s + k.monthlyVolume, 0).toLocaleString()}</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Projected Traffic If Ranked</p>
            <p className="text-2xl font-bold text-blue-400">{totalEstimatedTraffic.toLocaleString()}/mo</p>
          </div>
        </div>

        {/* Keyword table */}
        <div className="overflow-x-auto rounded-xl border border-gray-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800/80 text-gray-400 text-left">
                <th className="px-4 py-3 font-medium">Keyword</th>
                <th className="px-4 py-3 font-medium text-center">Volume/mo</th>
                <th className="px-4 py-3 font-medium text-center">Difficulty</th>
                <th className="px-4 py-3 font-medium text-center">Current Rank</th>
                <th className="px-4 py-3 font-medium text-center">Projected Rank</th>
                <th className="px-4 py-3 font-medium text-center">Timeframe</th>
                <th className="px-4 py-3 font-medium text-center">Est. Traffic</th>
                <th className="px-4 py-3 font-medium">Upside</th>
              </tr>
            </thead>
            <tbody>
              {keywords.map((kw, i) => {
                const colors = getDifficultyColor(kw.difficultyLabel);
                return (
                  <tr key={i} className={`border-t border-gray-700/50 ${i % 2 === 0 ? "bg-gray-900/30" : "bg-gray-800/20"}`}>
                    <td className="px-4 py-3 font-medium text-white">{kw.keyword}</td>
                    <td className="px-4 py-3 text-center">{kw.monthlyVolume.toLocaleString()}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${colors.bar}`} style={{ width: `${kw.difficulty}%` }} />
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} font-medium`}>
                          {kw.difficulty} — {kw.difficultyLabel}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={kw.currentRank === "Not Ranking" ? "text-red-400" : "text-yellow-400"}>
                        {kw.currentRank}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-green-400 font-medium">{kw.projectedRank}</td>
                    <td className="px-4 py-3 text-center text-gray-300">{kw.projectedTimeframe}</td>
                    <td className="px-4 py-3 text-center text-blue-400 font-medium">{kw.estimatedTraffic.toLocaleString()}/mo</td>
                    <td className="px-4 py-3 text-gray-300 text-xs max-w-[200px]">{kw.note}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Difficulty legend */}
        <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-green-500" /> Easy (0–30): Low competition, quick wins</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-yellow-500" /> Medium (31–50): Moderate effort, 3-6 months</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-orange-500" /> Hard (51–70): Significant effort, 6-9 months</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500" /> Very Hard (71+): Long-term play, 9-12+ months</span>
        </div>
      </div>
    </AnimatedSection>
  );
}
