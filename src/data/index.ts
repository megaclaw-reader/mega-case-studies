import { CaseStudyData } from "./types";
import { mortgageLending } from "./mortgage-lending";
import { cybersecurity } from "./cybersecurity";
import { dental } from "./dental";
import { eventOrganization } from "./event-organization";
import { roofing } from "./roofing";
import { landscaping } from "./landscaping";
import { accounting } from "./accounting";
import { accountingNy } from "./accounting-ny";
import { landscapingRc } from "./landscaping-rc";
import { ecommerceFishing } from "./ecommerce-fishing";
import { interiorDesign } from "./interior-design";
import { lawFirmMontreal } from "./law-firm-montreal";

export const caseStudies: Record<string, CaseStudyData> = {
  "mortgage-lending": mortgageLending,
  "cybersecurity": cybersecurity,
  "dental": dental,
  "event-organization": eventOrganization,
  "roofing": roofing,
  "landscaping": landscaping,
  "accounting": accounting,
  "accounting-ny": accountingNy,
  "landscaping-rc": landscapingRc,
  "ecommerce-fishing": ecommerceFishing,
  "interior-design": interiorDesign,
  "law-firm-montreal": lawFirmMontreal,
};

export type { CaseStudyData };
