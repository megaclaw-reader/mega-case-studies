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
import { cleaningService } from "./cleaning-service";
import { swimmingPoolContractors } from "./swimming-pool-contractors";
import { movingCompany } from "./moving-company";
import { generalContracting } from "./general-contracting";
import { wealthManagement } from "./wealth-management";
import { legalServicesSeo } from "./legal-services-seo";
import { homeRenovations } from "./home-renovations";
import { carWashAutoDetailing } from "./car-wash-auto-detailing";
import { mortgageBoutiqueSeo } from "./mortgage-boutique-seo";
import { automotiveRepair } from "./automotive-repair";
import { multiLocationConsumerBrand } from "./multi-location-consumer-brand";
import { healthySnackBrand } from "./healthy-snack-brand";
import { drywallRepair } from "./drywall-repair";
import { personalInjuryLawyer } from "./personal-injury-lawyer";
import { personalInjuryLawyer } from "./personal-injury-lawyer";

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
  "cleaning-service": cleaningService,
  "swimming-pool-contractors": swimmingPoolContractors,
  "moving-company": movingCompany,
  "general-contracting": generalContracting,
  "wealth-management": wealthManagement,
  "legal-services-seo": legalServicesSeo,
  "home-renovations": homeRenovations,
  "car-wash-auto-detailing": carWashAutoDetailing,
  "mortgage-boutique-seo": mortgageBoutiqueSeo,
  "automotive-repair": automotiveRepair,
  "multi-location-consumer-brand": multiLocationConsumerBrand,
  "healthy-snack-brand": healthySnackBrand,
  "drywall-repair": drywallRepair,
  "personal-injury-lawyer": personalInjuryLawyer,
};

export type { CaseStudyData };
