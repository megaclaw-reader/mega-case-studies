"use client";

import { CaseStudyData } from "@/data/types";
import Header from "./Header";
import Hero from "./Hero";
import Challenge from "./Challenge";
import Strategy from "./Strategy";
import SeoPerformance from "./SeoPerformance";
import PaidAdsPerformance from "./PaidAdsPerformance";
import BusinessImpact from "./BusinessImpact";
import Footer from "./Footer";

export default function CaseStudyPage({ data }: { data: CaseStudyData }) {
  return (
    <>
      <Header />
      <main>
        <Hero data={data} />
        <Challenge data={data} />
        <Strategy data={data} />
        <SeoPerformance data={data} />
        <PaidAdsPerformance data={data} />
        <BusinessImpact data={data} />
      </main>
      <Footer />
    </>
  );
}
