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
import { onlineTelemedicine } from "./online-telemedicine";
import { dewateringWaterManagement } from "./dewatering-water-management";
import { residentialCommercialFlooring } from "./residential-commercial-flooring";
import { healthcareWoundCareEducation } from "./healthcare-wound-care-education";
import { hvac } from "./hvac";
import { printShop } from "./print-shop";
import { jewelryStoreEcommerce } from "./jewelry-store-ecommerce";
import { highEndFashionNyc } from "./high-end-fashion-nyc";
import { healthcareDiagnostics } from "./healthcare-diagnostics";
import { itServicesNy } from "./it-services-ny";
import { realEstateNewsletter } from "./real-estate-newsletter";
import { carPartsNj } from "./car-parts-nj";
import { healthWellness } from "./health-wellness";
import { mortgageRealEstateColumbus } from "./mortgage-real-estate-columbus";
import { educationChicago } from "./education-chicago";
import { vrEntertainmentTechnology } from "./vr-entertainment-technology";
import { gymPrivateTrainingAz } from "./gym-private-training-az";
import { poolCoversNational } from "./pool-covers-national";
import { safetyTraining } from "./safety-training";
import { healthyFoodProteinBars } from "./healthy-food-protein-bars";
import { hvacKitchenBathAz } from "./hvac-kitchen-bath-az";
import { fireworksCincinnati } from "./fireworks-cincinnati";
import { medSpaOrlando } from "./med-spa-orlando";
import { financialServices } from "./financial-services";
import { medSpa } from "./med-spa";
import { internetServiceProvider } from "./internet-service-provider";
import { motorcycleBoatRepairAz } from "./motorcycle-boat-repair-az";
import { taxPlanningCoaching } from "./tax-planning-coaching";
import { motorcycleBoatRepair } from "./motorcycle-boat-repair";
import { renovationOutlet } from "./renovation-outlet";
import { financialServicesCalifornia } from "./financial-services-california";
import { b2bSaasNational } from "./b2b-saas-national";
import { outdoorBackyardFurniture } from "./outdoor-backyard-furniture";
import { homeRemodelingAz } from "./home-remodeling-az";
import { hvacNewMexico } from "./hvac-new-mexico";
import { weddingPhotographyAtlanta } from "./wedding-photography-atlanta";
import { exteriorBuildingMaterialsAz } from "./exterior-building-materials-az";
import { peptidesSeo } from "./peptides-seo";
import { ecommerceBeverageSeo } from "./ecommerce-beverage-seo";
import { highTicketEcommerceSeo } from "./high-ticket-ecommerce-seo";
import { solarPhoenix } from "./solar-phoenix";
import { ventureCapitalAz } from "./venture-capital-az";
import { saasPlatformCt } from "./saas-platform-ct";
import { businessLitigationCt } from "./business-litigation-ct";
import { constructionMembraneMaterials } from "./construction-membrane-materials";
import { roofingHouston } from "./roofing-houston";
import { windowsNj } from "./windows-nj";
import { commercialInsuranceNy } from "./commercial-insurance-ny";
import { commercialConstructionTx } from "./commercial-construction-tx";
import { roofingNewMexico } from "./roofing-new-mexico";
import { telehealthArizona } from "./telehealth-arizona";
import { b2bSaasPaid } from "./b2b-saas-paid";
import { luxuryMenswearCalifornia } from "./luxury-menswear-california";
import { wealthManagementPhoenix } from "./wealth-management-phoenix";
import { lawFirmNational } from "./law-firm-national";
import { seniorCareNm } from "./senior-care-nm";
import { wearableHealthTech } from "./wearable-health-tech";
import { beautySpaAustin } from "./beauty-spa-austin";
import { petProductsEcommerce } from "./pet-products-ecommerce";
import { wearableHealthTechTx } from "./wearable-health-tech-tx";
import { financialServicesSalesNm } from "./financial-services-sales-nm";
import { roofingAlabama } from "./roofing-alabama";
import { commercialLandscapingAlabama } from "./commercial-landscaping-alabama";

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
  "online-telemedicine": onlineTelemedicine,
  "dewatering-water-management": dewateringWaterManagement,
  "residential-commercial-flooring": residentialCommercialFlooring,
  "healthcare-wound-care-education": healthcareWoundCareEducation,
  "hvac": hvac,
  "print-shop": printShop,
  "jewelry-store-ecommerce": jewelryStoreEcommerce,
  "high-end-fashion-nyc": highEndFashionNyc,
  "healthcare-diagnostics": healthcareDiagnostics,
  "it-services-ny": itServicesNy,
  "real-estate-newsletter": realEstateNewsletter,
  "car-parts-nj": carPartsNj,
  "health-wellness": healthWellness,
  "mortgage-real-estate-columbus": mortgageRealEstateColumbus,
  "education-chicago": educationChicago,
  "vr-entertainment-technology": vrEntertainmentTechnology,
  "gym-private-training-az": gymPrivateTrainingAz,
  "pool-covers-national": poolCoversNational,
  "safety-training": safetyTraining,
  "healthy-food-protein-bars": healthyFoodProteinBars,
  "fireworks-cincinnati": fireworksCincinnati,
  "hvac-kitchen-bath-az": hvacKitchenBathAz,
  "med-spa-orlando": medSpaOrlando,
  "med-spa": medSpa,
  "motorcycle-boat-repair-az": motorcycleBoatRepairAz,
  "internet-service-provider": internetServiceProvider,
  "motorcycle-boat-repair": motorcycleBoatRepair,
  "financial-services": financialServices,
  "tax-planning-coaching": taxPlanningCoaching,
  "renovation-outlet": renovationOutlet,
  "financial-services-california": financialServicesCalifornia,
  "b2b-saas-national": b2bSaasNational,
  "outdoor-backyard-furniture": outdoorBackyardFurniture,
  "home-remodeling-az": homeRemodelingAz,
  "hvac-new-mexico": hvacNewMexico,
  "wedding-photography-atlanta": weddingPhotographyAtlanta,
  "exterior-building-materials-az": exteriorBuildingMaterialsAz,
  "peptides-seo": peptidesSeo,
  "ecommerce-beverage-seo": ecommerceBeverageSeo,
  "high-ticket-ecommerce-seo": highTicketEcommerceSeo,
  "solar-phoenix": solarPhoenix,
  "venture-capital-az": ventureCapitalAz,
  "saas-platform-ct": saasPlatformCt,
  "business-litigation-ct": businessLitigationCt,
  "construction-membrane-materials": constructionMembraneMaterials,
  "roofing-houston": roofingHouston,
  "windows-nj": windowsNj,
  "commercial-insurance-ny": commercialInsuranceNy,
  "commercial-construction-tx": commercialConstructionTx,
  "roofing-new-mexico": roofingNewMexico,
  "telehealth-arizona": telehealthArizona,
  "b2b-saas-paid": b2bSaasPaid,
  "luxury-menswear-california": luxuryMenswearCalifornia,
  "wealth-management-phoenix": wealthManagementPhoenix,
  "law-firm-national": lawFirmNational,
  "senior-care-nm": seniorCareNm,
  "wearable-health-tech": wearableHealthTech,
  "pet-products-ecommerce": petProductsEcommerce,
  "beauty-spa-austin": beautySpaAustin,
  "wearable-health-tech-tx": wearableHealthTechTx,
  "financial-services-sales-nm": financialServicesSalesNm,
  "roofing-alabama": roofingAlabama,
  "commercial-landscaping-alabama": commercialLandscapingAlabama,
};

export type { CaseStudyData };
