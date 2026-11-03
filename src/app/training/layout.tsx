import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Story studio · MEGA rep enablement",
  description: "Illustrative industry stories for rep training.",
  robots: { index: false, follow: false, noarchive: true },
  openGraph: {
    title: "MEGA rep enablement",
    description: "Illustrative examples for practice.",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
