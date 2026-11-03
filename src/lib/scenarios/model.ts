/**
 * Deterministic illustrative economics. This module does not generate evidence
 * or infer customer performance. All counts are modeled, mutually exclusive
 * new prospects; rates are assumptions, not observations.
 */
export const MODEL_VERSION = 1;

export interface ScenarioInput {
  version: 1;
  kind: "illustrative";
  industry: string;
  region: string;
  currency: "USD" | "CAD" | "GBP" | "EUR";
  businessModel: "services" | "ecommerce";
  months: number;
  seo: boolean;
  paid: boolean;
  website: boolean;
  agent: boolean;
  organicStart: number;
  organicEnd: number;
  monthlyAdSpend: number;
  visitCostStart: number;
  visitCostEnd: number;
  websiteRateStart: number;
  websiteRateEnd: number;
  agentEngagementRate: number;
  agentCaptureRate: number;
  qualificationRate: number;
  qualificationRateEnd?: number;
  closeRate: number;
  closeRateEnd?: number;
  averageSale: number;
  grossMargin: number | null;
  monthlyServiceFee: number;
  websiteInvestment: number;
}

export const DEFAULT_INPUT: ScenarioInput = {
  version: 1,
  kind: "illustrative",
  industry: "HVAC & home services",
  region: "United States",
  currency: "USD",
  businessModel: "services",
  months: 6,
  seo: true,
  paid: true,
  website: true,
  agent: true,
  organicStart: 500,
  organicEnd: 1800,
  monthlyAdSpend: 6000,
  visitCostStart: 6,
  visitCostEnd: 4.5,
  websiteRateStart: 2,
  websiteRateEnd: 4,
  agentEngagementRate: 8,
  agentCaptureRate: 20,
  qualificationRate: 65,
  closeRate: 25,
  averageSale: 3200,
  grossMargin: 45,
  monthlyServiceFee: 1998,
  websiteInvestment: 3000,
};

export interface Funnel {
  visitors: number;
  websiteContacts: number;
  agentConversations: number;
  agentContacts: number;
  contacts: number;
  qualified: number;
  customers: number;
  grossSales: number;
}

export interface Month {
  month: number;
  organic: Funnel;
  paid: Funnel;
  combined: Funnel;
  adSpend: number;
  investment: number;
  qualificationRate: number;
  closeRate: number;
  websiteRate: number;
  visitCost: number;
  paidCpl: number | null;
  paidCpql: number | null;
  paidRoas: number | null;
  websiteContactGain: number;
}

export interface Scenario {
  input: ScenarioInput;
  baseline: Month;
  months: Month[];
  totals: Funnel & {
    adSpend: number;
    investment: number;
    paidGrossSales: number;
    paidContacts: number;
    paidQualified: number;
    paidCpl: number | null;
    paidCpql: number | null;
    paidRoas: number | null;
    grossProfit: number | null;
    contribution: number | null;
    websiteContactGain: number;
  };
  checks: { label: string; detail: string }[];
  notes: string[];
}

const numericRules: Record<string, [number, number, boolean?]> = {
  months: [2, 24, true],
  organicStart: [0, 1000000, true],
  organicEnd: [0, 1000000, true],
  monthlyAdSpend: [0, 10000000],
  visitCostStart: [0.01, 10000],
  visitCostEnd: [0.01, 10000],
  websiteRateStart: [0, 100],
  websiteRateEnd: [0, 100],
  agentEngagementRate: [0, 100],
  agentCaptureRate: [0, 100],
  qualificationRate: [0, 100],
  closeRate: [0, 100],
  averageSale: [0, 10000000],
  monthlyServiceFee: [0, 10000000],
  websiteInvestment: [0, 10000000],
};

/** Validate imports and UI inputs before any arithmetic. Unknown fields cannot
 * override derived figures or the permanent illustrative designation. */
export function validateInput(value: unknown): string[] {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return ["Choose a scenario JSON file exported by this studio."];
  }
  const input = value as Record<string, unknown>;
  const issues: string[] = [];
  if (input.version !== MODEL_VERSION || input.kind !== "illustrative") {
    issues.push("Only version 1 illustrative scenarios are supported.");
  }
  for (const name of ["industry", "region"]) {
    const field = input[name];
    if (typeof field !== "string" || !field.trim() || field.length > 100) {
      issues.push(`${name}: enter between 1 and 100 characters.`);
    }
  }
  for (const name of ["seo", "paid", "website", "agent"]) {
    if (typeof input[name] !== "boolean")
      issues.push(`${name}: choose on or off.`);
  }
  if (!["USD", "CAD", "GBP", "EUR"].includes(String(input.currency))) {
    issues.push("Choose a supported currency.");
  }
  if (!["services", "ecommerce"].includes(String(input.businessModel))) {
    issues.push("Choose a service or ecommerce business model.");
  }
  for (const [name, [min, max, integer]] of Object.entries(numericRules)) {
    const field = input[name];
    if (
      typeof field !== "number" ||
      !Number.isFinite(field) ||
      field < min ||
      field > max ||
      (integer && !Number.isInteger(field))
    ) {
      issues.push(
        `${name}: enter ${integer ? "a whole number" : "a number"} from ${min} to ${max}.`,
      );
    }
  }
  for (const name of ["qualificationRateEnd", "closeRateEnd"]) {
    const field = input[name];
    if (
      field !== undefined &&
      (typeof field !== "number" ||
        !Number.isFinite(field) ||
        field < 0 ||
        field > 100)
    ) {
      issues.push(`${name}: enter a number from 0 to 100.`);
    }
  }
  if (
    input.grossMargin !== null &&
    (typeof input.grossMargin !== "number" ||
      !Number.isFinite(input.grossMargin) ||
      input.grossMargin < 0 ||
      input.grossMargin > 100)
  )
    issues.push("Gross margin: enter 0–100%, or leave blank when unknown.");
  if (input.paid && input.monthlyAdSpend === 0) {
    issues.push("Enter an advertising budget or turn paid ads off.");
  }
  for (const name of [
    "monthlyAdSpend",
    "visitCostStart",
    "visitCostEnd",
    "averageSale",
    "monthlyServiceFee",
    "websiteInvestment",
  ]) {
    const field = input[name];
    if (
      typeof field === "number" &&
      Number.isFinite(field) &&
      Math.abs(field * 100 - Math.round(field * 100)) > 0.000001
    ) {
      issues.push(`${name}: use at most two decimal places for money.`);
    }
  }
  if (!issues.length) {
    const typed = input as unknown as ScenarioInput;
    const maximumVisitors =
      Math.max(typed.organicStart, typed.organicEnd) +
      (typed.paid
        ? Math.floor(
            typed.monthlyAdSpend /
              Math.min(typed.visitCostStart, typed.visitCostEnd),
          )
        : 0);
    if (
      maximumVisitors * typed.months * typed.averageSale * 100 >
      Number.MAX_SAFE_INTEGER / 2
    ) {
      issues.push(
        "This combination exceeds the model's safe monetary range. Reduce the scale.",
      );
    }
  }
  return issues;
}

export function parseInput(value: unknown): ScenarioInput {
  const issues = validateInput(value);
  if (issues.length) throw new Error(issues.join("\n"));
  // Whitelist known fields. Imported summaries and statuses are never trusted.
  const input = value as Record<string, unknown>;
  return Object.fromEntries(
    [
      ...Object.keys(DEFAULT_INPUT),
      ...["qualificationRateEnd", "closeRateEnd"].filter(
        (key) => input[key] !== undefined,
      ),
    ].map((key) => [key, input[key]]),
  ) as unknown as ScenarioInput;
}

export const moneyRound = (value: number) =>
  Math.round((value + Number.EPSILON) * 100) / 100;
export const ratio = (numerator: number, denominator: number): number | null =>
  denominator > 0 ? numerator / denominator : null;
export function percentChange(before: number, after: number): number | null {
  return before > 0 ? ((after - before) / before) * 100 : null;
}

const funnelKeys: (keyof Funnel)[] = [
  "visitors",
  "websiteContacts",
  "agentConversations",
  "agentContacts",
  "contacts",
  "qualified",
  "customers",
  "grossSales",
];

// Correct only floating-point noise at integer boundaries before flooring.
// For example, 5000 × 0.58% can otherwise fall just below 29.
const countFloor = (value: number) =>
  Math.floor(value + Number.EPSILON * Math.max(1, Math.abs(value)) * 4);

function combine(funnels: Funnel[]): Funnel {
  return Object.fromEntries(
    funnelKeys.map((key) => [
      key,
      moneyRound(funnels.reduce((total, funnel) => total + funnel[key], 0)),
    ]),
  ) as unknown as Funnel;
}

function funnel(
  visitors: number,
  websiteRate: number,
  agent: boolean,
  input: ScenarioInput,
): Funnel {
  const websiteContacts = countFloor((visitors * websiteRate) / 100);
  // Only visitors who did not already convert on the website can be captured.
  const agentConversations = agent
    ? countFloor(
        ((visitors - websiteContacts) * input.agentEngagementRate) / 100,
      )
    : 0;
  const agentContacts = countFloor(
    (agentConversations * input.agentCaptureRate) / 100,
  );
  const contacts = websiteContacts + agentContacts;
  const qualified =
    input.businessModel === "ecommerce"
      ? contacts
      : countFloor((contacts * input.qualificationRate) / 100);
  const customers =
    input.businessModel === "ecommerce"
      ? contacts
      : countFloor((qualified * input.closeRate) / 100);
  return {
    visitors,
    websiteContacts,
    agentConversations,
    agentContacts,
    contacts,
    qualified,
    customers,
    grossSales: moneyRound(customers * input.averageSale),
  };
}

function month(input: ScenarioInput, index: number, baseline = false): Month {
  const progress = baseline ? 0 : index / (input.months - 1);
  const interpolate = (start: number, end: number) =>
    start + (end - start) * progress;
  const websiteRate =
    input.website && !baseline
      ? interpolate(input.websiteRateStart, input.websiteRateEnd)
      : input.websiteRateStart;
  const visitCost = moneyRound(
    interpolate(input.visitCostStart, input.visitCostEnd),
  );
  const organicVisitors = countFloor(
    input.seo && !baseline
      ? interpolate(input.organicStart, input.organicEnd)
      : input.organicStart,
  );
  const adSpend = input.paid ? moneyRound(input.monthlyAdSpend) : 0;
  const paidVisitors = countFloor(adSpend / visitCost);
  const qualificationRate =
    !baseline && (input.seo || input.paid || input.website)
      ? interpolate(
          input.qualificationRate,
          input.qualificationRateEnd ?? input.qualificationRate,
        )
      : input.qualificationRate;
  const closeRate =
    !baseline && input.agent
      ? interpolate(input.closeRate, input.closeRateEnd ?? input.closeRate)
      : input.closeRate;
  const monthlyInput = { ...input, qualificationRate, closeRate };
  const organic = funnel(
    organicVisitors,
    websiteRate,
    input.agent && !baseline,
    monthlyInput,
  );
  const paid = funnel(
    paidVisitors,
    websiteRate,
    input.agent && !baseline,
    monthlyInput,
  );
  const combined = combine([organic, paid]);
  const originalWebsiteContacts =
    countFloor((organicVisitors * input.websiteRateStart) / 100) +
    countFloor((paidVisitors * input.websiteRateStart) / 100);
  return {
    month: index + 1,
    organic,
    paid,
    combined,
    adSpend,
    websiteRate,
    qualificationRate,
    closeRate,
    visitCost,
    investment: moneyRound(
      adSpend +
        input.monthlyServiceFee +
        (!baseline && input.website && index === 0
          ? input.websiteInvestment
          : 0),
    ),
    paidCpl: ratio(adSpend, paid.contacts),
    paidCpql: ratio(adSpend, paid.qualified),
    paidRoas: ratio(paid.grossSales, adSpend),
    websiteContactGain:
      organic.websiteContacts + paid.websiteContacts - originalWebsiteContacts,
  };
}

export function buildScenario(value: unknown): Scenario {
  const input = parseInput(value);
  const baseline = month(input, 0, true);
  const months = Array.from({ length: input.months }, (_, index) =>
    month(input, index),
  );
  const totals = combine(months.map((row) => row.combined));
  const adSpend = moneyRound(months.reduce((sum, row) => sum + row.adSpend, 0));
  const investment = moneyRound(
    months.reduce((sum, row) => sum + row.investment, 0),
  );
  const paidGrossSales = moneyRound(
    months.reduce((sum, row) => sum + row.paid.grossSales, 0),
  );
  const paidContacts = months.reduce((sum, row) => sum + row.paid.contacts, 0);
  const paidQualified = months.reduce(
    (sum, row) => sum + row.paid.qualified,
    0,
  );
  const grossProfit =
    input.grossMargin === null
      ? null
      : moneyRound((totals.grossSales * input.grossMargin) / 100);
  const notes = [
    "This is an illustrative model, not a customer case study, forecast, guarantee, or evidence of actual performance.",
    "All starting values, end values, conversion rates, prices and costs are editable assumptions. No industry-average performance is asserted.",
    "Month 1 uses the starting traffic and website rate. Traffic, visit cost, website rate and any enabled qualification/closing rate targets change linearly to the selected month-end target; this is a modeling choice, not an observed growth curve. The agent is active from month 1 when enabled.",
    "Organic and paid visitors represent distinct, eligible new prospects, with no repeats across channels or months. One conversion and one initial purchase are allowed per prospect. This simplifying assumption needs real identity-based deduplication for measured results.",
    "Website conversions happen first. Agent conversions come only from the remaining visitors, preventing overlap within the model. Website and agent contributions are parts of channel totals, not additional channels to add again.",
    "Counts are rounded down at each funnel step, separately for organic and paid traffic. Monetary amounts are rounded to cents. Ratios use summed numerators and denominators, never averages of monthly ratios.",
    "Gross sales equal modeled initial purchases × the assumed tax-exclusive initial sale value. Refunds, discounts, fulfillment costs and marketing costs have not been deducted from this sales figure. No lifetime value, recurring renewals, pipeline or whole-company revenue is added. All modeled purchases occur in the same month; sales-cycle delays are excluded.",
    "Paid ROAS uses only gross sales from the paid cohort divided by ad spend. It excludes organic sales and service fees, and is not profit or ROI.",
    "Modeled contribution equals gross sales × the entered gross-margin assumption, minus the listed marketing investment. It is not net profit; overhead, tax, financing and unlisted costs are excluded. Margin must use the same sales basis and exclude the marketing expenses listed separately, to avoid deducting them twice.",
    "The starting comparison is a single illustrative month with the starting traffic, visit cost and website rate, and no agent. It is not a historical control group or evidence that one service caused a result.",
  ];
  return {
    input,
    baseline,
    months,
    totals: {
      ...totals,
      adSpend,
      investment,
      paidGrossSales,
      paidContacts,
      paidQualified,
      paidCpl: ratio(adSpend, paidContacts),
      paidCpql: ratio(adSpend, paidQualified),
      paidRoas: ratio(paidGrossSales, adSpend),
      grossProfit,
      contribution:
        grossProfit === null ? null : moneyRound(grossProfit - investment),
      websiteContactGain: months.reduce(
        (sum, row) => sum + row.websiteContactGain,
        0,
      ),
    },
    checks: [
      {
        label: "Totals reconcile",
        detail: "Headline totals are calculated from the monthly rows.",
      },
      {
        label: "Funnel counts reconcile",
        detail:
          "Purchases ≤ qualified leads ≤ contacts ≤ visitors. Ecommerce uses orders directly.",
      },
      {
        label: "Conversions counted once",
        detail:
          "Website and agent conversions are mutually exclusive in each modeled cohort.",
      },
      {
        label: "Revenue basis is explicit",
        detail:
          "Initial gross sales only; no lifetime value or pipeline mixed in.",
      },
      {
        label: "Paid ROAS is isolated",
        detail:
          "Only paid-cohort gross sales are divided by paid advertising spend.",
      },
      {
        label: "Assumptions disclosed",
        detail:
          "Hypothetical status and full model notes travel with the export.",
      },
    ],
    notes,
  };
}

export function formatMoney(
  value: number | null,
  currency: ScenarioInput["currency"],
  compact = false,
): string {
  if (value === null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 1 : 2,
  }).format(value);
}

export function serializeScenario(input: ScenarioInput): string {
  const scenario = buildScenario(input);
  return JSON.stringify(
    {
      disclosure: scenario.notes[0],
      input: scenario.input,
      calculated: scenario.months,
      totals: scenario.totals,
      methodology: scenario.notes,
    },
    null,
    2,
  );
}
