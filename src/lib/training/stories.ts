import {
  buildScenario,
  DEFAULT_INPUT,
  parseInput,
  type ScenarioInput,
} from "../scenarios/model.ts";

// Versioned teaching scenarios. These are authored examples, not performance benchmarks.
export const PROFILES = {
  hvac: {
    name: "HVAC",
    noun: "HVAC company",
    category: "Home services",
    region: "Florida",
    audience:
      "homeowners within the service area who need a repair or replacement",
    problem:
      "Repair calls kept the team busy, but replacement inquiries were inconsistent. Broad campaigns brought in out-of-area requests, and the website made a high-value installation look no different from a routine service call.",
    search:
      "Built dedicated AC repair, replacement and maintenance pages. Connected service-area pages to the right service, answered installation-cost questions, and strengthened internal links so high-intent searches reach a useful destination.",
    ads: "Separated urgent repairs from replacement projects. Narrowed geography to the service radius, excluded irrelevant searches, and reviewed qualified opportunities alongside lead volume before moving budget.",
    website:
      "Rebuilt the mobile service journey with clear repair-versus-replacement paths, prominent scheduling, accessible forms and faster-loading images. Added call and form tracking with source information preserved in the CRM.",
    conversion:
      "Asked for ZIP code, service need and urgency before routing the inquiry. Offered the appropriate booking path, passed the conversation context to the team, and followed up on unfinished inquiries so an interested homeowner has a clear next step.",
    sale: "Average initial job value",
    value: 2800,
    spend: 6000,
    cpc: 9,
    organic: 650,
  },
  dental: {
    name: "Dental practice",
    noun: "dental practice",
    category: "Healthcare",
    region: "Texas",
    audience:
      "local patients looking for a specific treatment and an available appointment",
    problem:
      "The practice attracted general dental traffic, but treatment inquiries often stalled before an appointment. Patients had questions about availability, payment options and what their first visit would involve.",
    search:
      "Created useful treatment and location pages, explained appointment preparation, and connected general service content to the relevant consultation path. Kept treatment claims subject to professional review.",
    ads: "Separated routine care from higher-consideration treatments. Aligned each campaign with a matching landing page and evaluated booked consultations rather than counting every form submission as a win.",
    website:
      "Simplified mobile appointment requests, made location and office hours easy to find, and added clear payment-option information. Connected forms to scheduling without asking visitors to submit sensitive clinical details in a marketing form.",
    conversion:
      "Answered administrative questions about hours, availability and the booking process, then routed clinical questions to the practice. Reminded interested visitors about an unfinished appointment request and preserved their chosen treatment category for the staff.",
    sale: "Average initial patient sale",
    value: 1200,
    spend: 4500,
    cpc: 7,
    organic: 800,
  },
  legal: {
    name: "Law firm",
    noun: "law firm",
    category: "Professional services",
    region: "Arizona",
    audience:
      "people in the firm's jurisdiction seeking help with a relevant matter",
    problem:
      "The intake team spent too much time on inquiries outside the firm's practice areas. Useful matters were mixed with irrelevant calls, while visitors struggled to find the right consultation route.",
    search:
      "Organized practice-area and jurisdiction pages around specific client questions. Connected informational articles to the relevant intake path and had the firm review legal content before publication.",
    ads: "Separated practice areas, removed irrelevant search terms, and kept targeting within the firm's service jurisdiction. Reviewed eligible consultations and signed engagements separately from raw inquiries.",
    website:
      "Clarified practice-area navigation and consultation calls to action. Improved mobile speed, simplified the intake form and passed source information into the intake system with clear privacy language.",
    conversion:
      "Collected the matter category and jurisdiction, explained the intake process and routed the request to the right team. Escalated legal questions to a professional; the agent handled the next step rather than providing legal advice.",
    sale: "Average initial earned fee",
    value: 3500,
    spend: 7000,
    cpc: 18,
    organic: 500,
  },
  roofing: {
    name: "Roofing",
    noun: "roofing company",
    category: "Home services",
    region: "Georgia",
    audience:
      "local property owners comparing repair and roof replacement options",
    problem:
      "Paid inquiries arrived, but too many lacked a clear project or sat waiting for a callback. The website offered little help distinguishing a minor repair from a replacement estimate.",
    search:
      "Developed repair, material and replacement pages linked to service-area content. Explained the estimate process and answered common questions about project scope and preparation.",
    ads: "Split repair and replacement intent, tightened the service area, and reviewed project eligibility before reallocating spend. Matched ad copy and landing pages to the type of estimate requested.",
    website:
      "Created a simple inspection-request flow, organized project galleries by roof type and made mobile calls to action clear. Optimized image delivery and connected forms to the estimating team's CRM.",
    conversion:
      "Asked for location, property type and project timing, then offered the right inspection step. Routed urgent needs to staff and followed up on incomplete estimate requests with the original context intact.",
    sale: "Average initial project value",
    value: 5500,
    spend: 6500,
    cpc: 12,
    organic: 550,
  },
  ecommerce: {
    name: "Ecommerce",
    noun: "online retailer",
    category: "Ecommerce",
    region: "United States",
    audience:
      "new shoppers comparing products, delivery options and purchase suitability",
    problem:
      "Product discovery was growing, but shoppers still left with unanswered questions. Campaigns sent different purchase intents to the same page, and a cluttered mobile experience added friction at the moment of decision.",
    search:
      "Improved category architecture, product descriptions and internal links. Built useful comparison and product-care content that directs shoppers toward the relevant category rather than a generic homepage.",
    ads: "Separated product categories and prospecting intent, aligned feeds and landing pages, and reviewed first-order sales relative to spend. Kept repeat purchases out of the new-customer example.",
    website:
      "Simplified mobile product pages, improved image loading and surfaced shipping and return information before checkout. Added useful filtering and made the purchase path easier to navigate.",
    conversion:
      "Answered product and delivery questions from the approved catalog, helped shoppers find suitable options, and provided a direct purchase path. Routed unsupported requests to staff and avoided inventing availability or delivery promises.",
    sale: "Average initial order value",
    value: 125,
    spend: 6000,
    cpc: 1.8,
    organic: 4200,
  },
  b2b: {
    name: "B2B services",
    noun: "B2B services company",
    category: "B2B",
    region: "New York",
    audience:
      "decision-makers at companies that fit the service and engagement requirements",
    problem:
      "The company generated interest but lacked a consistent path from research to a qualified sales conversation. Broad messaging attracted small, poor-fit inquiries and left serious buyers unsure what an engagement involved.",
    search:
      "Organized solution pages around buyer problems, industries and used cases. Connected educational content to a relevant consultation path and explained scope, implementation and who the service is for.",
    ads: "Separated high-intent solution searches from broad research terms. Tested role- and problem-specific messaging, used exclusion criteria, and evaluated accepted opportunities rather than raw form fills.",
    website:
      "Made the service proposition and fit criteria explicit. Improved mobile navigation, simplified discovery-call requests and integrate forms with CRM ownership and source tracking.",
    conversion:
      "Asked about company type, need and timing, then guided suitable inquiries toward a discovery call. Preserve context for the sales team and followed up on unfinished booking journeys without promising unavailable capabilities.",
    sale: "Average initial engagement revenue",
    value: 4800,
    spend: 6000,
    cpc: 12,
    organic: 700,
  },
  fitness: {
    name: "Fitness studio",
    noun: "fitness studio",
    category: "Local services",
    region: "Colorado",
    audience:
      "nearby residents looking for a suitable class, coach or introductory session",
    problem:
      "The studio had traffic and social interest, but too few visitors booked an introductory session. The schedule was difficult to navigate and generic ads attracted people outside the realistic travel radius.",
    search:
      "Created pages for class types, coaching and introductory sessions. Connected location and schedule information to the appropriate signup path and answered common first-visit questions.",
    ads: "Focused on the local travel radius and split campaigns by class intent. Matched offers to the right schedule and reviewed paid first visits alongside lead volume before scaling spend.",
    website:
      "Made the class timetable usable on mobile, clarify introductory pricing and shortened the booking path. Connected signup forms to scheduling and improved image loading on key landing pages.",
    conversion:
      "Helped visitors choose a suitable introductory session based on interests and availability. Explained what to expect, guided them to booking and followed up on incomplete requests with staff handoff when needed.",
    sale: "Average initial package sale",
    value: 320,
    spend: 1800,
    cpc: 3,
    organic: 800,
  },
  general: {
    name: "Other industry",
    noun: "service business",
    category: "Custom",
    region: "United States",
    audience:
      "people whose needs, location and timing fit the business's offer",
    problem:
      "The business relied on broad acquisition campaigns and a website that did not clearly connect each visitor's need to the right next step. Inquiries required manual sorting, and interested prospects sometimes left without a response path.",
    search:
      "Built pages around the industry's specific services, buyer questions and decision process. Connected those pages to a relevant inquiry path and prioritized content that helps a visitor evaluate fit.",
    ads: "Separated high-intent searches from general research, match each campaign to the right offer and removed irrelevant search terms. Reviewed qualified opportunities alongside cost per inquiry when allocating spend.",
    website:
      "Clarified the offer and simplified the mobile journey. Improved image delivery, accessible form design and calls to action, then connected inquiries to CRM source tracking and clear ownership.",
    conversion:
      "Used the approved service information to answer common questions, collected fit and timing details, and offered an appropriate next step. Handed off unsupported questions to a person and followed up on unfinished inquiries.",
    sale: "Average initial customer sale",
    value: 1500,
    spend: 3500,
    cpc: 6,
    organic: 650,
  },
} as const;
export type ProfileKey = keyof typeof PROFILES;
export const FOCUSES = {
  quality: {
    label: "Better lead quality",
    title: "From more inquiries to more of the right customers.",
    lesson:
      "A lower cost per lead can still hide poor fit. Explain qualification criteria and connect the conversation to customers acquired.",
  },
  discovery: {
    label: "More qualified demand",
    title: "Become easier to find. Give interest somewhere to go.",
    lesson:
      "Traffic is the beginning of the story. Follow discovery through qualified inquiries, customers and the cost of acquisition.",
  },
  conversion: {
    label: "More leads becoming customers",
    title: "Turn the interest you earn into a clearer next step.",
    lesson:
      "Separate visitor-to-lead conversion from lead-to-customer conversion. Explain where the website and conversion agent each participate.",
  },
  website: {
    label: "A website that converts",
    title: "A better experience, from the first click to the next customer.",
    lesson:
      "Tie each design or technology choice to a customer task. A faster, clearer page matters because it makes that task easier.",
  },
} as const;
export type FocusKey = keyof typeof FOCUSES;
export interface TrainingStory {
  challenge?: string;
  audience?: string;
  version: 1;
  profile: ProfileKey;
  focus: FocusKey;
  input: ScenarioInput;
}
export function makeStory(
  profile: ProfileKey,
  industry?: string,
  region?: string,
  focus: FocusKey = "quality",
): TrainingStory {
  const p = PROFILES[profile];
  return {
    version: 1,
    profile,
    focus,
    input: {
      ...DEFAULT_INPUT,
      industry: industry?.trim() || p.name,
      region: region?.trim() || p.region,
      months: 12,
      businessModel: profile === "ecommerce" ? "ecommerce" : "services",
      organicStart: p.organic,
      organicEnd: Math.round(p.organic * 2.8),
      monthlyAdSpend: p.spend,
      visitCostStart: p.cpc,
      visitCostEnd: Math.round(p.cpc * 0.85 * 100) / 100,
      websiteRateStart: 2,
      websiteRateEnd: 3.4,
      qualificationRate: 50,
      qualificationRateEnd: 72,
      closeRate: 22,
      closeRateEnd: 30,
      agentEngagementRate: 8,
      agentCaptureRate: 20,
      averageSale: p.value,
      grossMargin: null,
    },
  };
}
export function parseStory(value: unknown): TrainingStory {
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new Error("This story link is not valid.");
  const s = value as Record<string, unknown>;
  if (
    s.version !== 1 ||
    typeof s.profile !== "string" ||
    !Object.hasOwn(PROFILES, s.profile) ||
    typeof s.focus !== "string" ||
    !Object.hasOwn(FOCUSES, s.focus)
  )
    throw new Error("This story format is not supported.");
  for (const [key, limit] of [
    ["challenge", 800],
    ["audience", 300],
  ] as const) {
    if (
      s[key] !== undefined &&
      (typeof s[key] !== "string" || s[key].length > limit)
    )
      throw new Error(`The ${key} is too long or invalid.`);
  }
  const input = parseInput(s.input);
  if (input.months !== 12)
    throw new Error("Training stories use a 12-month timeline.");
  if ((s.profile === "ecommerce") !== (input.businessModel === "ecommerce"))
    throw new Error("The business model does not match this story profile.");
  if (![input.seo, input.paid, input.website, input.agent].every(Boolean))
    throw new Error("This story format covers all four agents.");
  return {
    ...(typeof s.challenge === "string" && s.challenge.trim()
      ? { challenge: s.challenge.trim() }
      : {}),
    ...(typeof s.audience === "string" && s.audience.trim()
      ? { audience: s.audience.trim() }
      : {}),
    version: 1,
    profile: s.profile as ProfileKey,
    focus: s.focus as FocusKey,
    input,
  };
}
// All inputs travel in the URL fragment. No database, analytics or third-party
// endpoint receives a story. A copied link reconstructs the exact numbers.
export function encodeStory(story: TrainingStory): string {
  const bytes = new TextEncoder().encode(JSON.stringify(parseStory(story)));
  return btoa(Array.from(bytes, (b) => String.fromCharCode(b)).join(""))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");
}
export function decodeStory(encoded: string): TrainingStory {
  if (!encoded || encoded.length > 12000 || !/^[A-Za-z0-9_-]+$/.test(encoded))
    throw new Error("This story link is incomplete or invalid.");
  try {
    const text = new TextDecoder("utf-8", { fatal: true }).decode(
      Uint8Array.from(
        atob(encoded.replaceAll("-", "+").replaceAll("_", "/")),
        (c) => c.charCodeAt(0),
      ),
    );
    return parseStory(JSON.parse(text));
  } catch {
    throw new Error(
      "This story link could not be opened. Copy the full link from the library.",
    );
  }
}
export function storyScenario(story: TrainingStory) {
  return buildScenario(parseStory(story).input);
}
