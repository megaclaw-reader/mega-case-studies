import { CaseStudyData } from "./types";
import { mortgageLending } from "./mortgage-lending";
import { cybersecurity } from "./cybersecurity";
import { dental } from "./dental";
import { eventOrganization } from "./event-organization";
import { roofing } from "./roofing";
import { landscaping } from "./landscaping";

export const caseStudies: Record<string, CaseStudyData> = {
  "mortgage-lending": mortgageLending,
  "cybersecurity": cybersecurity,
  "dental": dental,
  "event-organization": eventOrganization,
  "roofing": roofing,
  "landscaping": landscaping,
};

export type { CaseStudyData };
