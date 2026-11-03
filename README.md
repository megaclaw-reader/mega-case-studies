# MEGA training story studio

The `/training` generator creates **illustrative industry stories for rep practice**. `/studio` redirects there. Each story explains a business challenge, specific SEO/paid ads/website/conversion-agent work, a 12-month results ledger, revenue definitions and rep discussion prompts. The authentic MEGA SVG wordmark comes from the existing site's header.

## Run and verify

Use Node 22.18+.

```sh
npm ci
npm run dev
# Open http://localhost:3000/training
npm run test:scenarios
npx tsc --noEmit
npx eslint src/lib/training src/lib/scenarios src/components/TrainingStudio src/app/training
npm run build
```

Local development is available without credentials. The generator makes no AI, Slack, Render, analytics or third-party API requests. Seven authored industry profiles cover HVAC, roofing, dental, legal, fitness, B2B services and ecommerce. **Other industry** accepts an arbitrary industry name with a general service-business playbook. These are deterministic authored templates, not a live LLM integration; custom-industry tactics need rep adaptation. Focus selection changes the headline and coaching emphasis, not the financial assumptions.

## Individual links and library

Create a story, then use **Copy story link**. Each `/training/story#…` URL contains a versioned snapshot of the validated assumptions. Opening it recalculates the same monthly results; imported outcome totals cannot override the calculation. Unicode names work, and malformed or incompatible links show a recovery page. The label **Illustrative example** remains in the report header, footer and print view.

The generator saves up to 50 stories in this browser's local storage. The library is not a shared database. Links carry their own inputs and can be opened on other devices **after the app is hosted**. Localhost links work only on the machine running the preview. Keep the whole URL, including its fragment. Do not enter customer secrets or sensitive data; anyone given the complete link can decode its contents. Access control protects the hosted reading experience, not the encoded payload itself. Story text comes from version-1 authored profiles; retain those profiles when adding future versions so saved links keep their meaning.

## Hosted access

Production fails closed until both environment variables are configured:

- `TRAINING_ACCESS_PASSWORD`: a randomly generated team passphrase, 24–256 characters.
- `TRAINING_SESSION_SECRET`: a separate randomly generated signing secret, at least 32 characters.

Never commit either value. The production gate uses signed eight-hour, HttpOnly, Secure, SameSite=Strict cookies scoped to `/training`. A simple per-process login throttle limits failed attempts. Pages are dynamic and marked noindex/nofollow/noarchive. Rotating the signing secret revokes outstanding sessions. For distributed hosting, use a shared rate limiter or, preferably, Admin's existing authenticated access layer instead of the standalone shared-passphrase gate.

The local preview and draft source are **not deployed** and are **not integrated into Admin yet**. Production requires HTTPS and the access configuration above. `STATIC_EXPORT` is incompatible with the private dynamic training routes; use a Next.js server deployment.

## Reading and printing

The report has a business profile, coordinated four-agent playbook, beginning/end comparison, monthly lead-quality chart, 12-month financial ledger and explicit assumptions. Ecommerce uses initial orders rather than a service lead/qualification funnel. Revenue means gross initial sales from the modeled acquisition cohorts, not total business revenue or profit. Missing gross margin leaves contribution blank.

Use **Print / PDF** to open browser printing. Methodology opens automatically and restores afterward; the illustrative label stays visible. Check pagination in your browser before using a printed copy.

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
10. Starting/final assumptions, including optional qualification and closing targets, interpolate linearly. They are not observed performance trajectories or forecasts. Baseline means one starting month without the agent, not a measured control group.

Inputs are validated for type, finite values, ranges, whole counts, monetary precision, supported schema version and safe arithmetic scale. Import whitelists known inputs and recalculates every result; imported totals or status badges cannot override the model. Export carries the illustrative designation, inputs, monthly calculations and methodology.

## Tests

Model tests cover a manually calculated scenario, weighted costs, channel attribution, conversion overlap, zero denominators, service switches, unknown margin, negative performance, ecommerce semantics, invalid imports, export round trips and a parameter grid of funnel invariants.

The checks establish consistency within a hypothetical model. They cannot establish authenticity, the likelihood of assumptions, competitive superiority or actual causality. An observed-results workflow needs dated source records, matching measurement definitions, actual costs, identity-based deduplication, attribution methodology, and approved customer disclosures. Benchmark claims additionally need a documented comparable external dataset.

## Legacy content

Existing study URLs and data remain available for migration review. Their shared hero/footer now identify them as illustrative; they have **not** been reconciled or converted into measured customer results. `CODEX-HANDOFF.md` describes the legacy process.

Legacy scripts that randomly modify revenue, traffic or costs, or require preset growth outcomes, are not part of the new studio. Do not use them to manufacture proof of customer results. Keep old data out of the new engine unless its assumptions are explicitly reconstructed; the two schemas are intentionally different.

The hardcoded deployment credential has been removed from the current handoff. Its previously committed value still requires revocation/rotation by its owner; editing the file does not revoke a credential or remove Git history.

## Admin integration boundary

The calculation module has no React, Next.js, network or storage dependency. `StoryReport` accepts a validated versioned training story. These are reusable building blocks for Admin. The training studio is a working local/source implementation, not a completed Admin migration. Admin integration must use its existing canonical ADMIN guard, server-side validation/recalculation, persistence and audit conventions; create separate illustrative and measured-result record types so an illustrative record cannot acquire a verified badge by changing a label.
