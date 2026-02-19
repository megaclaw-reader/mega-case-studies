import { CaseStudyData } from "./types";
import { mortgageLending } from "./mortgage-lending";

export const caseStudies: Record<string, CaseStudyData> = {
  "mortgage-lending": mortgageLending,
};

export type { CaseStudyData };
