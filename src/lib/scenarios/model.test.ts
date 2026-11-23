import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildScenario,
  DEFAULT_INPUT,
  parseInput,
  percentChange,
  serializeScenario,
  validateInput,
  type ScenarioInput,
} from "./model.ts";

const input = (changes: Partial<ScenarioInput> = {}) => ({
  ...DEFAULT_INPUT,
  ...changes,
});

test("a hand-calculated two-month funnel reconciles across every channel", () => {
  const result = buildScenario(
    input({
      months: 2,
      organicStart: 100,
      organicEnd: 100,
      monthlyAdSpend: 100,
      visitCostStart: 1,
      visitCostEnd: 1,
      websiteRateStart: 10,
      websiteRateEnd: 10,
      agentEngagementRate: 50,
      agentCaptureRate: 20,
      qualificationRate: 100,
      closeRate: 100,
      averageSale: 100,
      grossMargin: 50,
      monthlyServiceFee: 10,
      websiteInvestment: 50,
    }),
  );
  // Per channel/month: 100 visitors → 10 web + (90 × 50% × 20%) agent = 19.
  assert.equal(result.months[0].paid.websiteContacts, 10);
  assert.equal(result.months[0].paid.agentContacts, 9);
  assert.equal(result.totals.contacts, 76);
  assert.equal(result.totals.customers, 76);
  assert.equal(result.totals.grossSales, 7600);
  assert.equal(result.totals.adSpend, 200);
  assert.equal(result.totals.investment, 270);
  assert.equal(result.totals.paidGrossSales, 3800);
  assert.equal(result.totals.paidRoas, 19);
  assert.equal(result.totals.grossProfit, 3800);
  assert.equal(result.totals.contribution, 3530);
});

test("agent cannot reconvert website contacts even at 100% engagement and capture", () => {
  const result = buildScenario(
    input({
      websiteRateStart: 100,
      websiteRateEnd: 100,
      agentEngagementRate: 100,
      agentCaptureRate: 100,
    }),
  );
  assert.equal(result.totals.agentContacts, 0);
  assert.equal(result.totals.contacts, result.totals.visitors);
});

test("decimal rates preserve exact integer boundaries and money stays in cents", () => {
  const result = buildScenario(
    input({
      months: 2,
      paid: false,
      agent: false,
      organicStart: 5000,
      organicEnd: 5000,
      websiteRateStart: 0.58,
      websiteRateEnd: 0.58,
      qualificationRate: 100,
      closeRate: 100,
      averageSale: 13.37,
    }),
  );
  assert.equal(result.months[0].combined.contacts, 29);
  assert.equal(result.totals.customers, 58);
  assert.equal(result.totals.grossSales, 775.46);
  assert.throws(() => buildScenario(input({ averageSale: 1.001 })));
  assert.throws(() =>
    buildScenario(
      input({
        monthlyAdSpend: 10000000,
        visitCostStart: 0.01,
        visitCostEnd: 0.01,
        averageSale: 10000000,
        months: 24,
      }),
    ),
  );
});

test("paid ROAS excludes organic revenue, and overall cost per lead is weighted", () => {
  const result = buildScenario(input({ organicEnd: 100000 }));
  const paidSales = result.months.reduce(
    (sum, row) => sum + row.paid.grossSales,
    0,
  );
  assert.equal(result.totals.paidRoas, paidSales / result.totals.adSpend);
  assert.notEqual(
    result.totals.paidRoas,
    result.totals.grossSales / result.totals.adSpend,
  );
  const paidContacts = result.months.reduce(
    (sum, row) => sum + row.paid.contacts,
    0,
  );
  assert.equal(result.totals.paidCpl, result.totals.adSpend / paidContacts);
});

test("zero traffic or conversion does not produce Infinity or pretend missing data is zero", () => {
  const result = buildScenario(
    input({ paid: false, organicStart: 0, organicEnd: 0, grossMargin: null }),
  );
  assert.equal(result.totals.grossSales, 0);
  assert.equal(result.totals.paidRoas, null);
  assert.equal(result.totals.paidCpl, null);
  assert.equal(result.totals.grossProfit, null);
  assert.equal(result.totals.contribution, null);
  assert.equal(percentChange(0, 100), null);
});

test("turning services off removes their effect and website one-time cost", () => {
  const result = buildScenario(
    input({ seo: false, paid: false, website: false, agent: false }),
  );
  for (const row of result.months) {
    assert.equal(row.organic.visitors, DEFAULT_INPUT.organicStart);
    assert.equal(row.websiteRate, DEFAULT_INPUT.websiteRateStart);
    assert.equal(row.paid.visitors, 0);
    assert.equal(row.combined.agentContacts, 0);
    assert.equal(row.websiteContactGain, 0);
  }
  assert.equal(
    result.totals.investment,
    DEFAULT_INPUT.months * DEFAULT_INPUT.monthlyServiceFee,
  );
});

test("ecommerce reports orders directly without a lead qualification or closing funnel", () => {
  const result = buildScenario(
    input({
      businessModel: "ecommerce",
      qualificationRate: 0,
      closeRate: 0,
      averageSale: 90,
    }),
  );
  assert.equal(result.totals.customers, result.totals.contacts);
  assert.equal(result.totals.grossSales, result.totals.customers * 90);
});

test("declining performance and negative contribution are preserved", () => {
  const result = buildScenario(
    input({
      organicStart: 1000,
      organicEnd: 100,
      websiteRateStart: 5,
      websiteRateEnd: 1,
      averageSale: 0,
      monthlyServiceFee: 9000,
    }),
  );
  assert.ok(
    result.months.at(-1)!.organic.visitors < result.months[0].organic.visitors,
  );
  assert.ok(result.totals.contribution! < 0);
  assert.ok(result.totals.websiteContactGain < 0);
});

test("untrusted inputs cannot replace the illustrative designation or calculated totals", () => {
  assert.throws(() => parseInput({ ...DEFAULT_INPUT, kind: "verified" }));
  const parsed = parseInput({
    ...DEFAULT_INPUT,
    grossSales: 999999999,
    verified: true,
  });
  assert.ok(!("verified" in parsed));
  assert.ok(!("grossSales" in parsed));
  for (const invalid of [NaN, Infinity, -1, "100", null]) {
    assert.ok(
      validateInput({ ...DEFAULT_INPUT, monthlyAdSpend: invalid }).length,
    );
  }
  assert.throws(() => buildScenario(input({ months: 1 })));
  assert.throws(() => buildScenario(input({ months: 2.5 })));
  assert.throws(() => buildScenario(input({ closeRate: 101 })));
});

test("export and re-import reproduce every calculation and keep disclosure", () => {
  const exported = JSON.parse(serializeScenario(DEFAULT_INPUT));
  assert.match(exported.disclosure, /illustrative/);
  assert.deepEqual(buildScenario(exported.input).totals, exported.totals);
  assert.deepEqual(buildScenario(exported.input).months, exported.calculated);
  assert.deepEqual(buildScenario(DEFAULT_INPUT), buildScenario(DEFAULT_INPUT));
});

test("funnel and financial invariants hold across a broad parameter grid", () => {
  for (const rate of [0, 0.1, 2, 17.5, 50, 99.9, 100]) {
    for (const businessModel of ["services", "ecommerce"] as const) {
      const result = buildScenario(
        input({
          businessModel,
          websiteRateStart: rate,
          websiteRateEnd: 100 - rate,
          agentCaptureRate: rate,
          closeRate: rate,
        }),
      );
      for (const row of result.months) {
        for (const cohort of [row.paid, row.organic, row.combined]) {
          assert.ok(cohort.customers <= cohort.qualified);
          assert.ok(cohort.qualified <= cohort.contacts);
          assert.ok(cohort.contacts <= cohort.visitors);
          assert.equal(
            cohort.contacts,
            cohort.websiteContacts + cohort.agentContacts,
          );
        }
        assert.equal(
          row.combined.grossSales,
          row.paid.grossSales + row.organic.grossSales,
        );
      }
      assert.equal(
        result.totals.grossSales,
        result.months.reduce((sum, row) => sum + row.combined.grossSales, 0),
      );
    }
  }
});
