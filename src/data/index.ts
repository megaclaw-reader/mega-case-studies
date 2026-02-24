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
import { lawFirmMtl } from "./law-firm-mtl";
import { fashionApparel } from "./fashion-apparel";
import { homeDamageRestoration } from "./home-damage-restoration";
import { realEstateServices } from "./real-estate-services";
import { garageDoorRepairs } from "./garage-door-repairs";
import { ecommerceAthletic } from "./ecommerce-athletic";
import { legalProfessionalServices } from "./legal-professional-services";
import { commercialRealEstate } from "./commercial-real-estate";
import { healthcareRegenerativeMedicine } from "./healthcare-regenerative-medicine";
import { lawFirmSeo } from "./law-firm-seo";

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
  "law-firm-mtl": lawFirmMtl,
  "fashion-apparel": fashionApparel,
  "home-damage-restoration": homeDamageRestoration,
  "real-estate-services": realEstateServices,
  "garage-door-repairs": garageDoorRepairs,
  "ecommerce-athletic": ecommerceAthletic,
  "legal-professional-services": legalProfessionalServices,
  "commercial-real-estate": commercialRealEstate,
  "healthcare-regenerative-medicine": healthcareRegenerativeMedicine,
  "law-firm-seo": lawFirmSeo,
};

export type { CaseStudyData };
