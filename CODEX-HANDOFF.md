# Case Study Generator — Codex Migration Handoff

## What This Is

An automated system that generates industry-specific marketing case studies for MEGA AI's sales team. Sales reps submit a form → a case study is built with realistic data → deployed to a static site → requester gets a Slack DM with the link.

**Repo:** `megaclaw-reader/mega-case-studies` (GitHub, public)
**Stack:** Next.js 16 + React 19 + Tailwind 4 + Recharts + Framer Motion
**Hosting:** Render.com (static site at `megacasestudies.onrender.com`) + Vercel (API routes only — form + feedback endpoints)

---

## Repo Structure

```
mega-case-studies/
├── src/
│   ├── app/           # Next.js app router (pages + API routes)
│   ├── components/    # React components (case study layout, charts, etc.)
│   └── data/
│       ├── types.ts   # CaseStudyData TypeScript interface
│       ├── index.ts   # Registry — imports + exports all case studies (~440 files)
│       └── *.ts       # Individual case study data files (~440 industries)
├── scripts/
│   ├── full-audit.py          # Math validation for ALL case studies (mandatory pre-deploy)
│   ├── auto-fix.py            # Auto-fixes math errors found by audit
│   ├── validate-data.py       # Per-slug validation + geography check
│   ├── validate-industry.py   # Revenue model validation (wealth mgmt = 1% AUM, ecom = orders × AOV, etc.)
│   ├── validate-realism.py    # "Bullshit thermometer" — checks numbers against industry benchmarks
│   ├── quality-review.py      # Catches "technically valid but weak" stories
│   ├── consistency-check.py   # Blocks uniform/identical metrics across months
│   ├── research-industry.py   # Research helper for new industries
│   ├── seo-ratio-check.py     # Keyword-to-traffic ratio validation
│   ├── industry-rules.json    # Revenue model definitions per industry
│   ├── wait-for-deploy.sh     # Polls live URL until 200 (mandatory before notifying)
│   └── (various fix scripts)  # One-off fixers for specific data issues
├── package.json
└── next.config.ts
```

---

## How to Build a Case Study

### 1. Create the data file

Create `src/data/[slug].ts` exporting a `CaseStudyData` object. See `src/data/types.ts` for the full interface.

**Key sections:**
- `slug` — URL path (e.g., `garage-door-repairs`)
- `company` — industry, employees, revenue, location, description (NO company names — all anonymous)
- `challenges` — 3 business problems
- `strategy` — 4 phases following 30/60/90 day framework
- `seo` — monthly keyword/traffic data with hockey-stick growth curve
- `paidAds` — monthly spend/leads/qualified/deals/revenue/ROAS
- `impact` — summary stats

### 2. Register in index.ts

Add import + export in `src/data/index.ts`.

### 3. Run validation scripts (ALL mandatory, in order)

```bash
python3 scripts/validate-data.py --region "Denver, CO" --slug "garage-door-repairs"
python3 scripts/full-audit.py
python3 scripts/validate-industry.py --slug "garage-door-repairs"
python3 scripts/quality-review.py --slug "garage-door-repairs"
python3 scripts/validate-realism.py --slug "garage-door-repairs"
npm run build
```

### 4. Deploy

```bash
git add -A && git commit -m "Add [industry] case study" && git push
curl -X POST "https://api.render.com/v1/services/srv-d6brtmjnv86c73bqlvng/deploys" \
  -H "Authorization: Bearer rnd_YftdZxXrtsRQnWDOBY3mT31UOzjS" \
  -H "Content-Type: application/json" -d '{}'
bash scripts/wait-for-deploy.sh "garage-door-repairs"
```

### 5. Notify via Slack

DM the requester with the link. Bot token: (set as env var `SLACK_BOT_TOKEN`)

---

## Critical Rules (Non-Negotiable)

### Data Integrity
- **ALL case studies must be anonymous** — no company names, no person names, no invented brand names
- **Math must verify:** summary stats = sum of monthly data, CPL = spend/leads, CPQL = spend/qualified, ROAS = revenue/spend
- **CPL < CPQL always** (every single month)
- **No month below $5K spend** (MEGA's minimum)
- **No platform-specific terms** — no "CPC" (use "Cost/Visit" or "Cost Per Lead"), no "Google Ads" or "Meta" — keep channel-ambiguous
- **MEGA is ~1 year old** — all case study dates should be 2025 range
- **Non-round numbers, realistic seasonality, natural variance** — no two months should have identical metrics
- **Uniformity rule:** No metric can be identical for >3 months. If >50% of months share same value, deployment blocked.
- **ROAS caps:** Lead gen max 4.8x, ecom max 8.0x per month

### Revenue Models (enforced by `validate-industry.py`)
- **Wealth Management:** Revenue = AUM × 1%
- **Ecommerce:** Revenue = Orders × AOV, use columnLabels (Sessions/Cost per Visit/Add to Carts/Orders)
- **Lead Gen Services:** Revenue = Deals × avg deal value for the specific industry
- **Real Estate:** Revenue = Deals × transaction value × commission rate
- Check `scripts/industry-rules.json` for the full mapping

### SEO Data Rules
- Starting keywords: 80-200 for small biz ($5-10K spend), scaling up with budget
- Traffic per keyword ratio: 4-8x month 1, declining to 2-3x as portfolio grows
- Growth curve: ~100 keywords → ~1,000 by month 4 → 8,000+ by month 12
- Traffic must exceed 10K/mo within year 1

### MEGA Value Props (must appear in strategy sections)
1. **Agentic AI always-on optimization** — AI agents live inside ad accounts, optimize continuously (not weekly like agencies)
2. **Creative volume** (for Meta/social) — AI generates creatives at zero marginal cost, scale with budget
3. **Speed of iteration** — no brief→design→review cycle, changes in hours not weeks
4. **Data-driven everything** — real-time optimization, not gut feelings

See `MEGA-VALUE-PROPS.md` in the repo for detailed integration guide with copy-paste templates.

### Removed Components (DO NOT include)
- ROI Calculator (ROICalculator)
- "How MEGA Compares" (CostComparison)
- "Limited Onboarding" (UrgencyBanner)

---

## Build Configuration

**Render (static):** Uses `npm run build:static` — moves API routes out, builds with `STATIC_EXPORT=true`
**Vercel (dynamic):** Uses `npm run build` — handles API routes (form submission + feedback endpoints)

---

## Form Submission Flow

1. Sales rep fills form at `mega-case-studies.vercel.app/request`
2. Form POSTs to Vercel API → posts to Slack DM channel `D0AFP5Z666A`
3. Case study is built, validated, deployed
4. Requester gets Slack DM with link + review link

## Feedback Flow

1. Review page: `megacasestudies.onrender.com/[slug]/review`
2. Feedback POSTs to `mega-case-studies.vercel.app/api/feedback` → posts to Slack
3. Changes are made → redeployed → requester notified

---

## Example Data File

See `src/data/garage-door-repairs.ts` for a complete lead-gen example, or any ecom file (e.g., `ecommerce-fishing.ts`) for the ecommerce model.

---

## Environment / Secrets Needed

| Secret | Value | Used For |
|--------|-------|----------|
| `RENDER_API_KEY` | (ask Julien) | Deploy trigger |
| `RENDER_SERVICE_ID` | `srv-d6brtmjnv86c73bqlvng` | Deploy target |
| `SLACK_BOT_TOKEN` | (ask Julien) | DM notifications |
| `SLACK_CHANNEL` | `D0AFP5Z666A` | Form submissions + feedback |

---

## Key Files to Read First

1. `src/data/types.ts` — the data interface
2. `MEGA-VALUE-PROPS.md` — value prop integration guide
3. `scripts/industry-rules.json` — revenue model definitions
4. Any existing data file as a reference (e.g., `garage-door-repairs.ts`)
5. `scripts/full-audit.py` — understand what validation checks exist
