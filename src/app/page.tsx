import { redirect } from "next/navigation";
import { caseStudies } from "@/data";

export default function Home() {
  const firstSlug = Object.keys(caseStudies)[0];
  if (firstSlug) {
    redirect(`/${firstSlug}`);
  }
  return <div>No case studies found.</div>;
}
