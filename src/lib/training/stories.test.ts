import assert from "node:assert/strict";
import { test } from "node:test";
import { buildScenario, DEFAULT_INPUT } from "../scenarios/model.ts";
import {
  makeStory,
  encodeStory,
  decodeStory,
  parseStory,
  PROFILES,
  type ProfileKey,
  storyScenario,
} from "./stories.ts";

test("all industry stories reconcile monthly counts, money, paid costs and linked inputs", () => {
  for (const key of Object.keys(PROFILES) as ProfileKey[]) {
    const story = makeStory(key);
    const s = storyScenario(story);
    assert.equal(s.months.length, 12);
    assert.deepEqual(decodeStory(encodeStory(story)), story);
    assert.equal(
      s.totals.grossSales,
      s.months.reduce((n, m) => n + m.combined.grossSales, 0),
    );
    assert.equal(
      s.totals.customers,
      s.months.reduce((n, m) => n + m.combined.customers, 0),
    );
    assert.equal(
      s.totals.grossSales,
      s.totals.customers * story.input.averageSale,
    );
    assert.equal(s.totals.paidRoas, s.totals.paidGrossSales / s.totals.adSpend);
    assert.equal(s.totals.paidCpql, s.totals.adSpend / s.totals.paidQualified);
    assert.equal(s.totals.contribution, null);
    for (const row of s.months) {
      assert.ok(row.combined.customers <= row.combined.qualified);
      assert.ok(row.combined.qualified <= row.combined.contacts);
      assert.ok(row.combined.contacts <= row.combined.visitors);
      assert.equal(
        row.combined.contacts,
        row.combined.websiteContacts + row.combined.agentContacts,
      );
      assert.equal(
        row.combined.grossSales,
        row.paid.grossSales + row.organic.grossSales,
      );
    }
  }
});
test("qualification and close trajectories follow exact hand-calculated endpoints", () => {
  const s = buildScenario({
    ...DEFAULT_INPUT,
    months: 2,
    paid: false,
    agent: true,
    organicStart: 100,
    organicEnd: 100,
    websiteRateStart: 100,
    websiteRateEnd: 100,
    qualificationRate: 50,
    qualificationRateEnd: 80,
    closeRate: 20,
    closeRateEnd: 50,
  });
  assert.equal(s.baseline.combined.qualified, 50);
  assert.equal(s.baseline.combined.customers, 10);
  assert.equal(s.months[0].combined.customers, 10);
  assert.equal(s.months[1].combined.qualified, 80);
  assert.equal(s.months[1].combined.customers, 40);
  assert.equal(s.totals.customers, 50);
  const noAgent = buildScenario({ ...s.input, agent: false });
  assert.equal(noAgent.months[1].closeRate, 20);
});
test("legacy version 1 inputs still preserve fixed rates and serialize without new optional targets", () => {
  const s = buildScenario(DEFAULT_INPUT);
  for (const row of s.months) {
    assert.equal(row.closeRate, DEFAULT_INPUT.closeRate);
    assert.equal(row.qualificationRate, DEFAULT_INPUT.qualificationRate);
  }
  assert.equal(s.input.closeRateEnd, undefined);
  assert.equal(s.input.qualificationRateEnd, undefined);
});
test("story links handle Unicode and recalculate rather than trusting injected results", () => {
  const s = makeStory("general", "Ébénisterie & design", "Montréal");
  s.challenge = "Residential inquiries were reaching a commercial team.";
  s.audience = "Commercial property managers";
  const restored = decodeStory(encodeStory(s));
  assert.equal(restored.challenge, s.challenge);
  assert.equal(restored.audience, s.audience);
  assert.equal(restored.input.industry, "Ébénisterie & design");
  assert.equal(restored.input.region, "Montréal");
  const parsed = parseStory({
    ...s,
    totals: { grossSales: 999999999 },
    kind: "verified",
  });
  assert.ok(!("totals" in parsed));
  assert.equal(parsed.input.kind, "illustrative");
});
test("malformed, unsafe and incompatible story inputs fail before rendering", () => {
  for (const input of [
    "",
    "!",
    "a".repeat(12001),
    btoa("not-json"),
    btoa('{"version":2}'),
  ])
    assert.throws(() => decodeStory(input));
  const s = makeStory("hvac");
  assert.throws(() => parseStory({ ...s, profile: "toString" }));
  assert.throws(() => parseStory({ ...s, focus: "__proto__" }));
  assert.throws(() =>
    parseStory({ ...s, input: { ...s.input, kind: "real" } }),
  );
  assert.throws(() => parseStory({ ...s, input: { ...s.input, months: 6 } }));
  assert.throws(() =>
    parseStory({ ...s, input: { ...s.input, businessModel: "ecommerce" } }),
  );
  assert.throws(() =>
    parseStory({ ...s, input: { ...s.input, website: false } }),
  );
  for (const bad of [NaN, Infinity, -1, 101, "50", null])
    assert.throws(() =>
      buildScenario({ ...s.input, qualificationRateEnd: bad }),
    );
});
test("poor assumptions stay poor; the training format does not force positive results", () => {
  const s = makeStory("hvac");
  s.input = {
    ...s.input,
    organicEnd: 10,
    websiteRateEnd: 0.1,
    qualificationRateEnd: 0,
    closeRateEnd: 0,
    grossMargin: 0,
  };
  const result = storyScenario(decodeStory(encodeStory(s)));
  assert.equal(result.months[11].combined.customers, 0);
  assert.ok(result.totals.contribution! < 0);
});
