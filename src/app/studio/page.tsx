import type { Metadata } from "next";
import ScenarioStudio from "@/components/ScenarioStudio/ScenarioStudio";

export const metadata: Metadata = {
  title: "Case study studio · MEGA",
  description:
    "Explore transparent, illustrative growth scenarios across search, advertising, websites and conversion.",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <ScenarioStudio />;
}
