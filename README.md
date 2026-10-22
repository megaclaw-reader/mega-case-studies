# MEGA case study studio

The new `/studio` builds **explicitly illustrative growth scenarios** from editable assumptions. It combines organic search, paid acquisition, website conversion and a conversion agent in one deterministic funnel. It does not generate evidence of actual customer performance or infer industry benchmarks.

## Run and verify

Use Node 22.18+ (native TypeScript stripping is used by the model tests).

```sh
npm ci
npm run dev
# Open http://localhost:3000/studio
npm run test:scenarios
npx tsc --noEmit
npx eslint src/lib/scenarios src/components/ScenarioStudio src/app/studio
npm run build
```

The studio requires no Claude, Render, Slack or other credentials. No API requests, notifications or deployments are triggered by creating, saving or exporting a scenario. It uses one browser-local saved draft; JSON export/import provides a portable copy. It does not yet provide Admin authentication, server persistence, a public share URL or production deployment.

## Customer reading experience

- Anonymous industry/location profile, with a permanent illustrative disclosure.
- A concise headline outcome and three derived metrics.
- SEO, paid advertising, website and conversion-agent roles in one customer journey.
- Monthly conversion chart and acquisition source breakdown.
- Gross sales, gross margin and marketing investment shown separately.
- An inspectable monthly ledger and full assumptions/methodology.
- Reader view and print styling. Use the browser's **Print / PDF** action for a PDF; inspect the preview before sharing.

## Calculation contract

`src/lib/scenarios/model.ts` is the single source of truth for displayed metrics and exports. React never independently authors outcome numbers.

1. Each monthly organic/paid cohort contains modeled distinct new prospects. No cross-channel or repeat-customer overlap is assumed. This is an explicit simplification, not identity-based deduplication of real analytics.
2. Website conversions are calculated first. Agent engagement and conversion apply only to remaining visitors.
3. Services use contacts → qualified leads → initial customers. Ecommerce converts visits directly into initial orders; it does not reuse qualification/closing rates.
4. Counts round down at each step in each cohort. Website and agent counts are included inside the organic/paid totals, never added again as acquisition channels.
5. Initial gross sales = purchases × average initial sale. AUM, property transaction value, lifetime value, recurring renewals and pipeline must not be entered as initial revenue.
6. Paid gross ROAS = paid-cohort gross sales ÷ ad spend. Organic sales are excluded. Service fees are excluded from ROAS and included in total investment.
7. Period cost metrics use total spend ÷ total applicable contacts. Monthly ratios are never averaged.
8. Contribution = gross sales × assumed gross margin − ad spend − service fees − enabled one-time website cost. Unknown margin produces no contribution figure. This is not net profit or a causal estimate of incremental value.
9. Declines, zero results and negative contribution remain visible. There are no minimum-growth gates, ROAS caps or random number adjustments.
10. Starting/final assumptions interpolate linearly. They are not observed performance trajectories or forecasts. Baseline means one starting month without the agent, not a measured control group.

Inputs are validated for type, finite values, ranges, whole counts, monetary precision, supported schema version and safe arithmetic scale. Import whitelists known inputs and recalculates every result; imported totals or status badges cannot override the model. Export carries the illustrative designation, inputs, monthly calculations and methodology.

## Tests

Model tests cover a manually calculated scenario, weighted costs, channel attribution, conversion overlap, zero denominators, service switches, unknown margin, negative performance, ecommerce semantics, invalid imports, export round trips and a parameter grid of funnel invariants.

The checks establish consistency within a hypothetical model. They cannot establish authenticity, the likelihood of assumptions, competitive superiority or actual causality. An observed-results workflow needs dated source records, matching measurement definitions, actual costs, identity-based deduplication, attribution methodology, and approved customer disclosures. Benchmark claims additionally need a documented comparable external dataset.

## Legacy content

Existing study URLs and data remain available for migration review. Their shared hero/footer now identify them as illustrative; they have **not** been reconciled or converted into measured customer results. `CODEX-HANDOFF.md` describes the legacy process.

Legacy scripts that randomly modify revenue, traffic or costs, or require preset growth outcomes, are not part of the new studio. Do not use them to manufacture proof of customer results. Keep old data out of the new engine unless its assumptions are explicitly reconstructed; the two schemas are intentionally different.

The hardcoded deployment credential has been removed from the current handoff. Its previously committed value still requires revocation/rotation by its owner; editing the file does not revoke a credential or remove Git history.

## Admin integration boundary

The calculation module has no React, Next.js, network or storage dependency. `ScenarioReport` accepts its calculated result. These are reusable building blocks for Admin. The studio is a working local/source implementation, not a completed Admin migration. Admin integration must use its existing canonical ADMIN guard, server-side validation/recalculation, persistence and audit conventions; create separate illustrative and measured-result record types so an illustrative record cannot acquire a verified badge by changing a label.
