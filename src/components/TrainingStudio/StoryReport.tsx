"use client";

import { formatMoney, percentChange, ratio } from "@/lib/scenarios/model";
import {
  FOCUSES,
  PROFILES,
  storyScenario,
  type TrainingStory,
} from "@/lib/training/stories";
import MegaLogo from "./MegaLogo";

const count = (v: number) => new Intl.NumberFormat("en-US").format(v);
const pct = (v: number | null) => (v === null ? "—" : `${v.toFixed(1)}%`);
const change = (v: number | null) =>
  v === null ? "—" : `${v >= 0 ? "+" : ""}${v.toFixed(0)}%`;

function GrowthChart({ story }: { story: TrainingStory }) {
  const { months } = storyScenario(story);
  const ceiling =
    Math.ceil(Math.max(...months.map((m) => m.combined.contacts), 4) / 4) * 4;
  const x = (i: number) => 45 + i * 61;
  const y = (v: number) => 220 - (v / ceiling) * 185;
  const line = (qualified: boolean) =>
    months
      .map(
        (m, i) =>
          `${i ? "L" : "M"} ${x(i)} ${y(qualified ? m.combined.qualified : m.combined.contacts)}`,
      )
      .join(" ");
  const retail = story.input.businessModel === "ecommerce";
  return (
    <svg
      viewBox="0 0 740 260"
      className="ts-growth-chart"
      role="img"
      aria-label={
        retail
          ? "Monthly orders. Exact figures appear in the monthly results table."
          : "Monthly leads and qualified leads. Exact figures appear in the monthly results table."
      }
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <line
            x1="45"
            x2="716"
            y1={y((ceiling * i) / 4)}
            y2={y((ceiling * i) / 4)}
            stroke="#e4e7ee"
          />
          <text x="30" y={y((ceiling * i) / 4) + 4} textAnchor="end">
            {(ceiling * i) / 4}
          </text>
        </g>
      ))}
      <path d={`${line(false)} L 716 220 L 45 220 Z`} fill="#edf1ff" />
      <path d={line(false)} fill="none" stroke="#2454ff" strokeWidth="3" />
      {!retail && (
        <path
          d={line(true)}
          fill="none"
          stroke="#151c30"
          strokeWidth="2"
          strokeDasharray="5 4"
        />
      )}
      {months.map((m, i) => (
        <g key={m.month}>
          <circle cx={x(i)} cy={y(m.combined.contacts)} r="3" fill="#2454ff" />
          <text x={x(i)} y="248" textAnchor="middle">
            {m.month.toString().padStart(2, "0")}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function StoryReport({ story }: { story: TrainingStory }) {
  const { input, baseline, months, totals, notes } = storyScenario(story);
  const p = PROFILES[story.profile];
  const focus = FOCUSES[story.focus];
  const audience = story.audience || p.audience;
  const last = months[11];
  const retail = input.businessModel === "ecommerce";
  const noun =
    story.profile === "general"
      ? `${input.industry.toLowerCase()} business`
      : p.noun;
  const business = `${/^(?:[aeiou]|HVAC)/i.test(noun) ? "An" : "A"} ${noun}`;
  const money = (n: number | null, compact = false) =>
    formatMoney(n, input.currency, compact);
  const lead = retail ? "orders" : "leads";
  const organicGrowth = percentChange(
    baseline.organic.visitors,
    last.organic.visitors,
  );
  const leadGrowth = percentChange(
    baseline.combined.contacts,
    last.combined.contacts,
  );
  const firstRate = ratio(
    baseline.combined.customers * 100,
    baseline.combined.contacts,
  );
  const lastRate = ratio(last.combined.customers * 100, last.combined.contacts);
  const finalQuality = ratio(
    last.combined.qualified * 100,
    last.combined.contacts,
  );
  const paidCostChange =
    baseline.paidCpql && last.paidCpql !== null
      ? percentChange(baseline.paidCpql, last.paidCpql)
      : null;
  const actions = [
    {
      label: "SEO agent",
      title: "Meet the customer at the search.",
      body: p.search,
      metric: change(organicGrowth),
      detail: "monthly organic visits · starting month → month 12",
      icon: "01",
    },
    {
      label: "Paid ads agent",
      title: "Give every campaign a sharper job.",
      body: p.ads,
      metric: retail ? money(totals.paidCpl) : money(totals.paidCpql),
      detail: retail
        ? "paid cost per initial order · full period"
        : "paid cost per qualified lead · full period",
      icon: "02",
    },
    {
      label: "Website agent",
      title: "Make the next step feel obvious.",
      body: p.website,
      metric: `${pct(input.websiteRateStart)} → ${pct(input.websiteRateEnd)}`,
      detail: `assumed website-only visitor-to-${retail ? "order" : "lead"} rate`,
      icon: "03",
    },
    {
      label: "Conversion agent",
      title: "Keep a good conversation moving.",
      body: p.conversion,
      metric: count(totals.agentContacts),
      detail: `agent-captured ${lead} · included in total ${lead}`,
      icon: "04",
    },
  ];
  return (
    <article className="ts-report" id="training-report">
      <header className="ts-report-header">
        <MegaLogo />
        <span className="ts-edition">
          THE GROWTH SERIES <span>/</span> {input.industry}
        </span>
        <span className="ts-disclosure">Illustrative example</span>
      </header>
      <section className="ts-hero">
        <div className="ts-hero-copy">
          <div className="ts-eyebrow">
            <span className="ts-blue-dot" />
            {input.region} · {input.industry}
          </div>
          <h1>{focus.title}</h1>
          <p>
            {business} with a familiar challenge: turn digital attention into
            better business. A 12-month story connecting discovery, experience
            and conversion.
          </p>
          <div className="ts-hero-tags">
            <span>SEO</span>
            <span>Paid ads</span>
            <span>Website</span>
            <span>Conversion</span>
          </div>
        </div>
        <aside
          className="ts-hero-art"
          aria-label="Four agents connect search and ads to website experience and customer conversion"
        >
          <div className="ts-art-top">
            <span>THE CONNECTED JOURNEY</span>
            <span>01—04</span>
          </div>
          <div className="ts-orbit">
            <div className="ts-orbit-ring" />
            <div className="ts-orbit-inner" />
            <span className="ts-orbit-center">
              <MegaLogo />
            </span>
            <span className="ts-orbit-node ts-node-a">
              ↗ <b>SEO</b>
              <small>Be discovered</small>
            </span>
            <span className="ts-orbit-node ts-node-b">
              ◎ <b>Paid ads</b>
              <small>Reach the right fit</small>
            </span>
            <span className="ts-orbit-node ts-node-c">
              ▤ <b>Website</b>
              <small>Make it effortless</small>
            </span>
            <span className="ts-orbit-node ts-node-d">
              ↳ <b>Conversion</b>
              <small>Move it forward</small>
            </span>
          </div>
          <div className="ts-art-bottom">
            <strong>
              Four agents.
              <br />
              One customer journey.
            </strong>
            <span>
              12
              <br />
              <small>MONTHS</small>
            </span>
          </div>
        </aside>
      </section>
      <section className="ts-headline-metrics" aria-label="Example results">
        <div>
          <span>Monthly {lead}</span>
          <strong>{change(leadGrowth)}</strong>
          <small>
            {count(baseline.combined.contacts)} →{" "}
            {count(last.combined.contacts)} · starting month to month 12
          </small>
        </div>
        <div>
          <span>{retail ? "Initial orders" : "New customers"}</span>
          <strong>{count(totals.customers)}</strong>
          <small>Total across 12 months</small>
        </div>
        <div>
          <span>Paid gross ROAS</span>
          <strong>
            {totals.paidRoas === null ? "—" : `${totals.paidRoas.toFixed(2)}×`}
          </strong>
          <small>Paid-cohort sales ÷ ad spend</small>
        </div>
        <div>
          <span>Initial gross sales</span>
          <strong>{money(totals.grossSales, true)}</strong>
          <small>12-month total · {input.currency} · before costs</small>
        </div>
      </section>
      <nav
        className="ts-report-nav"
        aria-label="Story sections"
        onClick={(event) => {
          const link = (event.target as HTMLElement).closest("a");
          if (!link) return;
          const id = link.getAttribute("href")?.slice(1);
          if (id) {
            event.preventDefault();
            document.getElementById(id)?.scrollIntoView({
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            });
          }
        }}
      >
        <a href="#story-challenge">01 The challenge</a>
        <a href="#story-playbook">02 The work</a>
        <a href="#story-results">03 The results</a>
        <a href="#story-takeaway">04 Rep discussion</a>
      </nav>
      <section className="ts-section ts-challenge" id="story-challenge">
        <div className="ts-section-heading">
          <span className="ts-eyebrow">01 / THE CHALLENGE</span>
          <h2>
            Attention was arriving.
            <br />
            The journey needed work.
          </h2>
        </div>
        <div className="ts-challenge-copy">
          <p className="ts-large-copy">{story.challenge || p.problem}</p>
          <dl className="ts-profile">
            <div>
              <dt>Business</dt>
              <dd>
                {business} in {input.region}
              </dd>
            </div>
            <div>
              <dt>Ideal customer</dt>
              <dd>{audience.charAt(0).toUpperCase() + audience.slice(1)}</dd>
            </div>
            <div>
              <dt>Primary focus</dt>
              <dd>{focus.label}</dd>
            </div>
            <div>
              <dt>Measurement window</dt>
              <dd>12 months, with a separate starting-month comparison</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="ts-before-after">
        <div>
          <span className="ts-eyebrow">THE STARTING POINT</span>
          <h3>Activity without a clear path.</h3>
          <p>
            Discovery, landing pages and follow-up operated as separate steps.
            The work began by connecting them around the customer’s intent.
          </p>
          <div className="ts-comparison-number">
            <strong>
              {retail ? count(baseline.combined.contacts) : pct(firstRate)}
            </strong>
            <span>
              {retail
                ? "orders in the starting month"
                : `${count(baseline.combined.customers)} customers from ${count(baseline.combined.contacts)} leads · starting month`}
            </span>
          </div>
        </div>
        <div>
          <span className="ts-eyebrow">THE MONTH 12 PICTURE</span>
          <h3>A journey built around fit.</h3>
          <p>
            Search and campaigns reached relevant needs. Clearer pages helped
            visitors act, and guided conversations made the next step easier.
          </p>
          <div className="ts-comparison-number">
            <strong>
              {retail ? count(last.combined.contacts) : pct(lastRate)}
            </strong>
            <span>
              {retail
                ? "orders in month 12"
                : `${count(last.combined.customers)} customers from ${count(last.combined.contacts)} leads · month 12`}
            </span>
          </div>
        </div>
      </section>
      <section className="ts-section" id="story-playbook">
        <div className="ts-heading-row">
          <div>
            <span className="ts-eyebrow">02 / THE WORK</span>
            <h2>
              Four agents.
              <br />A coordinated plan.
            </h2>
          </div>
          <p>
            Each part of the system had a specific job. The story follows the
            full path from being found to becoming a customer.
          </p>
        </div>
        <div className="ts-agent-grid">
          {actions.map((a) => (
            <div className="ts-agent-card" key={a.label}>
              <div className="ts-agent-top">
                <span>{a.label}</span>
                <span>{a.icon}</span>
              </div>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
              <div className="ts-agent-result">
                <strong>{a.metric}</strong>
                <span>{a.detail}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="ts-connection-note">
          <span>↳</span>
          <p>
            <b>The connection matters.</b> Search and ads bring prospects to the
            website. The website and conversion agent help those same prospects
            take action. Their results are included inside the channel totals,
            so nobody gets counted twice.
          </p>
        </div>
      </section>
      <section className="ts-section ts-results-section" id="story-results">
        <div className="ts-heading-row">
          <div>
            <span className="ts-eyebrow">03 / THE RESULTS</span>
            <h2>
              Follow the progress.
              <br />
              Then check the numbers.
            </h2>
          </div>
          <p>
            The full 12-month view puts the headline results in context. Every
            total below comes from these same monthly rows.
          </p>
        </div>
        <div className="ts-chart-layout">
          <div className="ts-chart-card">
            <div className="ts-chart-title">
              <h3>Monthly {lead}</h3>
              <div>
                <span className="ts-legend ts-legend-blue">
                  {retail ? "Orders" : "All leads"}
                </span>
                {!retail && <span className="ts-legend">Qualified</span>}
              </div>
            </div>
            <GrowthChart story={story} />
          </div>
          <aside className="ts-chart-aside">
            <span className="ts-eyebrow">MONTH 12 SNAPSHOT</span>
            <strong>
              {retail ? count(last.combined.customers) : pct(finalQuality)}
            </strong>
            <p>
              {retail
                ? "initial orders from organic and paid acquisition"
                : "of leads met the qualification criteria"}
            </p>
            <hr />
            <strong>
              {retail ? money(last.paidCpl) : change(paidCostChange)}
            </strong>
            <p>
              {retail
                ? "paid cost per initial order in month 12"
                : `change in paid cost per qualified lead · ${money(baseline.paidCpql)} → ${money(last.paidCpql)}`}
            </p>
          </aside>
        </div>
        <div className="ts-table-heading">
          <h3>The 12-month record</h3>
          <span>{input.currency} · gross initial sales</span>
        </div>
        <div
          className="ts-table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Monthly results, scroll horizontally on small screens"
        >
          <table className="ts-results-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Organic visits</th>
                <th>Ad spend</th>
                <th>{retail ? "Orders" : "Leads"}</th>
                {!retail && <th>Qualified</th>}
                {!retail && <th>Customers</th>}
                <th>Paid {retail ? "orders" : "qualified"}</th>
                <th>Paid {retail ? "CPO" : "CPQL"}</th>
                <th>Gross sales</th>
              </tr>
            </thead>
            <tbody>
              {months.map((m) => (
                <tr key={m.month}>
                  <th>{m.month.toString().padStart(2, "0")}</th>
                  <td>{count(m.organic.visitors)}</td>
                  <td>{money(m.adSpend)}</td>
                  <td>{count(m.combined.contacts)}</td>
                  {!retail && <td>{count(m.combined.qualified)}</td>}
                  {!retail && <td>{count(m.combined.customers)}</td>}
                  <td>{count(retail ? m.paid.contacts : m.paid.qualified)}</td>
                  <td>{money(retail ? m.paidCpl : m.paidCpql)}</td>
                  <td>{money(m.combined.grossSales)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <td>
                  {count(months.reduce((n, m) => n + m.organic.visitors, 0))}
                </td>
                <td>{money(totals.adSpend)}</td>
                <td>{count(totals.contacts)}</td>
                {!retail && <td>{count(totals.qualified)}</td>}
                {!retail && <td>{count(totals.customers)}</td>}
                <td>
                  {count(retail ? totals.paidContacts : totals.paidQualified)}
                </td>
                <td>{money(retail ? totals.paidCpl : totals.paidCpql)}</td>
                <td>{money(totals.grossSales)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="ts-table-note">
          {retail
            ? "CPO = ad spend ÷ paid orders."
            : "CPQL = ad spend ÷ paid qualified leads. Lead and customer columns combine organic and paid."}{" "}
          Period cost metrics divide total spend by total applicable
          conversions; monthly ratios are not averaged. The separate
          starting-month comparison is excluded from these totals.
        </p>
        <div className="ts-revenue">
          <div>
            <span className="ts-eyebrow">UNDERSTAND THE REVENUE</span>
            <h3>Gross sales, with the basis in plain sight.</h3>
            <p>
              {count(totals.customers)} initial{" "}
              {retail ? "orders" : "customers"} × {money(input.averageSale)}{" "}
              average initial sale = <b>{money(totals.grossSales)}</b>. This
              covers the modeled acquisition cohorts, not the company’s total
              revenue.
            </p>
            <p>
              Recurring revenue, lifetime value and pipeline are excluded. Gross
              sales are before refunds, discounts, delivery costs and marketing
              expenses.
            </p>
          </div>
          <dl>
            <div>
              <dt>Organic gross sales</dt>
              <dd>{money(totals.grossSales - totals.paidGrossSales)}</dd>
            </div>
            <div>
              <dt>Paid gross sales</dt>
              <dd>{money(totals.paidGrossSales)}</dd>
            </div>
            <div>
              <dt>Total marketing investment</dt>
              <dd>{money(totals.investment)}</dd>
            </div>
            <div>
              <dt>Gross margin assumption</dt>
              <dd>
                {input.grossMargin === null
                  ? "Not supplied"
                  : pct(input.grossMargin)}
              </dd>
            </div>
            <div>
              <dt>Contribution after marketing</dt>
              <dd>{money(totals.contribution)}</dd>
            </div>
          </dl>
        </div>
        <p className="ts-table-note">
          Investment includes {money(totals.adSpend)} advertising,{" "}
          {money(input.monthlyServiceFee * 12)} service fees and{" "}
          {money(input.websiteInvestment)} website setup. Contribution requires
          a gross-margin assumption and is not net profit.
        </p>
      </section>
      <section className="ts-takeaway" id="story-takeaway">
        <span className="ts-eyebrow">04 / REP DISCUSSION</span>
        <h2>Tell the story behind the number.</h2>
        <p>{focus.lesson}</p>
        <div>
          <p>
            <b>01 / Diagnose</b>Which part of this business’s customer journey
            was limiting growth?
          </p>
          <p>
            <b>02 / Connect</b>How did the website and conversion agent support
            the SEO and paid acquisition work?
          </p>
          <p>
            <b>03 / Substantiate</b>What records and definitions would you need
            before making these claims about an actual customer?
          </p>
        </div>
      </section>
      <section className="ts-methodology">
        <details>
          <summary>
            Assumptions & calculation notes <span>+</span>
          </summary>
          <div>
            <p>
              This illustrative example describes an invented business and
              modeled results for rep practice. It is not a customer record, a
              performance forecast or a benchmark. The tactics are an example
              plan; the model does not establish their causal effect.
            </p>
            <dl className="ts-assumptions">
              <div>
                <dt>Organic visits / month</dt>
                <dd>
                  {count(input.organicStart)} → {count(input.organicEnd)}
                </dd>
              </div>
              <div>
                <dt>Paid cost / visit</dt>
                <dd>
                  {money(input.visitCostStart)} → {money(input.visitCostEnd)}
                </dd>
              </div>
              <div>
                <dt>Website conversion</dt>
                <dd>
                  {pct(input.websiteRateStart)} → {pct(input.websiteRateEnd)}
                </dd>
              </div>
              <div>
                <dt>Agent engagement / capture</dt>
                <dd>
                  {pct(input.agentEngagementRate)} /{" "}
                  {pct(input.agentCaptureRate)}
                </dd>
              </div>
              {!retail && (
                <>
                  <div>
                    <dt>Qualification assumption</dt>
                    <dd>
                      {pct(input.qualificationRate)} →{" "}
                      {pct(
                        input.qualificationRateEnd ?? input.qualificationRate,
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt>Qualified-to-customer assumption</dt>
                    <dd>
                      {pct(input.closeRate)} →{" "}
                      {pct(input.closeRateEnd ?? input.closeRate)}
                    </dd>
                  </div>
                </>
              )}
            </dl>
            <ul>
              {notes.slice(1).map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </details>
      </section>
      <footer className="ts-report-footer">
        <MegaLogo />
        <span>Illustrative example · {input.industry} · 12 months</span>
        <span>Better discovery. Better journeys.</span>
      </footer>
    </article>
  );
}
