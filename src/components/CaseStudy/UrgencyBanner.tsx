"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { CaseStudyData } from "@/data/types";

const SEASONAL: Record<string, string> = {
  Jan: "Q1 planning season — the best time to lock in your marketing strategy",
  Feb: "Spring campaigns launch soon — get ahead of the competition",
  Mar: "Spring is peak lead season — don't miss the window",
  Apr: "Spring demand is surging — act now for maximum ROI",
  May: "Summer is around the corner — campaigns need 30–60 days to ramp",
  Jun: "Mid-year is the perfect reset — start strong for H2",
  Jul: "Q3 budgets are being set — secure your spot now",
  Aug: "Fall campaigns start planning now — lead times matter",
  Sep: "Q4 is the highest-converting quarter — start building momentum",
  Oct: "Year-end push begins — every week of delay costs leads",
  Nov: "Holiday season demand is peaking — capitalize now",
  Dec: "Smart businesses plan January launches in December",
};

export default function UrgencyBanner({ data }: { data: CaseStudyData }) {
  const seasonalMsg = useMemo(() => {
    const months = data.paidAds?.monthly || data.seo?.monthly || [];
    if (!months.length) return null;
    const lastMonth = months[months.length - 1].month;
    const abbr = lastMonth.slice(0, 3);
    return SEASONAL[abbr] || null;
  }, [data]);

  return (
    <section className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#2965FF]/5 to-[#2965FF]/10 border border-[#2965FF]/20 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl mt-0.5">⚡</span>
            <div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Limited Onboarding Slots Available in {data.industry}</h3>
              <p className="text-[#374151] text-sm leading-relaxed mb-3">
                Your competitors in {data.company.location} are already leveraging AI-powered marketing to capture market share.
                {seasonalMsg && <> {seasonalMsg}.</>}
              </p>
              <p className="text-[#6B7280] text-sm">
                MEGA onboards a limited number of clients per industry per region to avoid conflicts of interest.
              </p>
              <a
                href="https://gomega.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2.5 bg-[#2965FF] text-white text-sm font-semibold rounded-xl hover:bg-[#1E4FD9] transition-colors"
              >
                Check Availability →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
