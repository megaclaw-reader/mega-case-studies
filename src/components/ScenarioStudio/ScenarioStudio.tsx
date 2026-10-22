"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  buildScenario,
  DEFAULT_INPUT,
  formatMoney,
  parseInput,
  percentChange,
  serializeScenario,
  validateInput,
  type Scenario,
  type ScenarioInput,
} from "@/lib/scenarios/model";
import "./studio.css";

const STORAGE_KEY = "mega-illustrative-scenario-v1";
const number = (value: number) => new Intl.NumberFormat("en-US").format(value);
const percent = (value: number) => `${Math.abs(value).toFixed(1)}%`;
const signedPercent = (value: number | null) =>
  value === null
    ? "No baseline"
    : `${value > 0 ? "+" : value < 0 ? "−" : ""}${percent(value)}`;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Brand() {
  return (
    <a
      className="ss-brand"
      href="https://www.gomega.ai/"
      aria-label="MEGA home"
    >
      mega<span>®</span>
    </a>
  );
}

function InputField({
  label,
  help,
  children,
}: {
  label: string;
  help?: string;
  children: ReactNode;
}) {
  return (
    <label className="ss-field">
      <span>{label}</span>
      {children}
      {help && <small>{help}</small>}
    </label>
  );
}

function Metric({
  label,
  value,
  note,
  dark = false,
}: {
  label: string;
  value: string;
  note: string;
  dark?: boolean;
}) {
  return (
    <div className={`ss-metric${dark ? " ss-metric-dark" : ""}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{note}</p>
    </div>
  );
}

function VolumeChart({ scenario }: { scenario: Scenario }) {
  const width = 700,
    height = 240,
    left = 44,
    top = 20,
    bottom = 34;
  const points = scenario.months.map((row) => row.combined.contacts);
  const baseline = scenario.baseline.combined.contacts;
  const highest = Math.max(...points, baseline, 1);
  const ceiling = Math.ceil(highest / 4) * 4;
  const x = (index: number) =>
    left + (index * (width - left - 20)) / (points.length - 1);
  const y = (value: number) =>
    height - bottom - (value / ceiling) * (height - top - bottom);
  const path = points
    .map((value, index) => `${index ? "L" : "M"}${x(index)},${y(value)}`)
    .join(" ");
  const contact =
    scenario.input.businessModel === "ecommerce" ? "orders" : "leads";
  return (
    <svg
      className="ss-chart"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`Modeled monthly ${contact}: ${points.map((value, index) => `month ${index + 1}: ${value}`).join(", ")}. Starting monthly volume: ${baseline}.`}
    >
      <defs>
        <linearGradient id="scenario-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#315bff" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#315bff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3, 4].map((index) => (
        <g key={index}>
          <line
            x1={left}
            x2={width - 20}
            y1={y((ceiling * index) / 4)}
            y2={y((ceiling * index) / 4)}
            stroke="#e8e9ed"
          />
          <text x={left - 12} y={y((ceiling * index) / 4) + 4} textAnchor="end">
            {number((ceiling * index) / 4)}
          </text>
        </g>
      ))}
      <line
        x1={left}
        x2={width - 20}
        y1={y(baseline)}
        y2={y(baseline)}
        stroke="#999da7"
        strokeDasharray="5 5"
      />
      <path
        d={`${path} L${x(points.length - 1)},${y(0)} L${x(0)},${y(0)} Z`}
        fill="url(#scenario-fill)"
      />
      <path
        d={path}
        stroke="#315bff"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
      {points.map((value, index) => (
        <g key={index}>
          <circle
            cx={x(index)}
            cy={y(value)}
            r="4"
            fill="#315bff"
            stroke="white"
            strokeWidth="2"
          />
          {(points.length <= 12 ||
            index % 3 === 0 ||
            index === points.length - 1) && (
            <text x={x(index)} y={height - 8} textAnchor="middle">
              M{index + 1}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

export function ScenarioReport({ scenario }: { scenario: Scenario }) {
  const { input, totals, baseline, months } = scenario;
  const last = months[months.length - 1];
  const money = (value: number | null, compact = false) =>
    formatMoney(value, input.currency, compact);
  const ecommerce = input.businessModel === "ecommerce";
  const lead = ecommerce ? "orders" : "leads";
  const buyer = ecommerce ? "orders" : "new customers";
  const change = percentChange(
    baseline.combined.contacts,
    last.combined.contacts,
  );
  const organicTotal = months.reduce(
    (sum, row) => sum + row.organic.contacts,
    0,
  );
  const paidTotal = months.reduce((sum, row) => sum + row.paid.contacts, 0);
  const services = [
    input.seo && "SEO",
    input.paid && "Paid ads",
    input.website && "Website",
    input.agent && "Conversion agent",
  ].filter(Boolean);

  return (
    <article className="ss-report" id="scenario-report">
      <header className="ss-report-nav">
        <Brand />
        <span>
          THE GROWTH SERIES <i>/</i> {input.industry.toUpperCase()}
        </span>
        <a href="#ss-method">
          Explore the numbers <Arrow />
        </a>
      </header>
      <div className="ss-disclosure">
        <span className="ss-dot" /> Illustrative scenario{" "}
        <span>
          Hypothetical business and results · All amounts in {input.currency}
        </span>
      </div>

      <section className="ss-hero">
        <div className="ss-hero-copy">
          <div className="ss-eyebrow">
            A {input.region} {input.industry} business <span>/</span>{" "}
            {input.months}-MONTH MODEL
          </div>
          <h1>
            A clearer path
            <br />
            from <em>search to sale.</em>
          </h1>
          <p className="ss-intro">
            Explore how attracting the right visitors, improving the website,
            and capturing more inquiries could work together for an anonymous
            business profile.
          </p>
          <div className="ss-tags">
            {services.map((service) => (
              <span key={String(service)}>{service}</span>
            ))}
          </div>
        </div>
        <div className="ss-outcome">
          <div className="ss-outcome-top">
            <span>THE MODELED OPPORTUNITY</span>
            <span aria-hidden="true">↗</span>
          </div>
          <strong>{money(totals.grossSales, true)}</strong>
          <h2>in modeled gross sales</h2>
          <p>
            {number(totals.customers)} {buyer} × {money(input.averageSale)}{" "}
            average initial {ecommerce ? "order" : "sale"}
          </p>
          <div className="ss-outcome-bottom">
            <span>Across {input.months} months</span>
            <a href="#ss-economics">
              See the full economics <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="ss-kpis" aria-label="Modeled overview">
        <Metric
          label={`TOTAL MODELED ${lead.toUpperCase()}`}
          value={number(totals.contacts)}
          note={`Website + agent. Across ${input.months} months; counted once.`}
        />
        <Metric
          label={`MONTH ${input.months} VS STARTING MONTH`}
          value={signedPercent(change)}
          note={`${number(baseline.combined.contacts)} → ${number(last.combined.contacts)} ${lead}/month. Assumed inputs.`}
        />
        <Metric
          label="PAID-COHORT GROSS ROAS"
          value={
            totals.paidRoas === null ? "—" : `${totals.paidRoas.toFixed(2)}×`
          }
          note="Paid gross sales ÷ ad spend. Excludes fees; not profit."
        />
      </section>

      <section className="ss-section ss-story">
        <div>
          <div className="ss-eyebrow">01 / THE OPPORTUNITY</div>
          <h2>
            More traffic is only <br />
            part of the story.
          </h2>
        </div>
        <div>
          <p>
            A visitor still needs a reason to inquire, a straightforward next
            step, and a timely response. This model connects those stages so the
            commercial effect is visible.
          </p>
          <p>
            For this profile, the starting assumption is{" "}
            <b>{input.websiteRateStart}% website conversion</b>. The scenario
            explores{" "}
            {input.website
              ? `a ${input.websiteRateEnd}% end-of-period website conversion rate`
              : "the same website conversion rate"}
            {input.agent
              ? ", with an agent capturing some visitors who have not already converted"
              : ""}
            . These are inputs to explore, not measured customer outcomes.
          </p>
        </div>
      </section>

      <section className="ss-section" id="ss-system">
        <div className="ss-section-heading">
          <div>
            <div className="ss-eyebrow">02 / HOW THE PIECES CONNECT</div>
            <h2>One journey. Four places to improve.</h2>
          </div>
          <p>
            Acquisition brings people in.
            <br />
            Conversion helps them take the next step.
          </p>
        </div>
        <div className="ss-service-grid">
          <div className={`ss-service ${!input.seo ? "ss-inactive" : ""}`}>
            <span className="ss-service-index">
              01 <span>↗</span>
            </span>
            <h3>Be found.</h3>
            <span className="ss-service-name">SEARCH ENGINE OPTIMIZATION</span>
            <p>
              A proposed focus on relevant service pages, useful content and
              technical accessibility.
            </p>
            <strong>
              {number(input.organicStart)} <Arrow />{" "}
              {number(last.organic.visitors)}
            </strong>
            <small>
              Modeled organic visitors / month
              {!input.seo ? " · growth disabled" : ""}
            </small>
          </div>
          <div className={`ss-service ${!input.paid ? "ss-inactive" : ""}`}>
            <span className="ss-service-index">
              02 <span>◎</span>
            </span>
            <h3>Reach intent.</h3>
            <span className="ss-service-name">PAID ADVERTISING</span>
            <p>
              A proposed focus on relevant audiences, clear offers and landing
              pages aligned with the ad.
            </p>
            <strong>{money(totals.adSpend)}</strong>
            <small>
              Total modeled advertising spend{!input.paid ? " · disabled" : ""}
            </small>
          </div>
          <div className={`ss-service ${!input.website ? "ss-inactive" : ""}`}>
            <span className="ss-service-index">
              03 <span>▤</span>
            </span>
            <h3>Make it easy.</h3>
            <span className="ss-service-name">WEBSITE EXPERIENCE</span>
            <p>
              A proposed focus on mobile usability, service clarity, proof and a
              simpler inquiry path.
            </p>
            <strong>
              {input.websiteRateStart}% <Arrow />{" "}
              {Number(last.websiteRate.toFixed(2))}%
            </strong>
            <small>
              Assumed website conversion rate
              {!input.website ? " · improvements disabled" : ""}
            </small>
          </div>
          <div
            className={`ss-service ss-agent ${!input.agent ? "ss-inactive" : ""}`}
          >
            <span className="ss-service-index">
              04 <span>✳</span>
            </span>
            <h3>Keep the conversation.</h3>
            <span className="ss-service-name">CONVERSION AGENT</span>
            <p>
              A proposed focus on answering questions and helping eligible
              visitors take the next step.
            </p>
            <strong>{number(totals.agentContacts)}</strong>
            <small>
              Modeled {lead} from visitors who had not converted
              {!input.agent ? " · disabled" : ""}
            </small>
          </div>
        </div>
        <p className="ss-caption">
          Proposed activities describe the scenario approach. They do not claim
          work was performed for a customer.
        </p>
      </section>

      <section className="ss-section ss-performance">
        <div className="ss-section-heading">
          <div>
            <div className="ss-eyebrow">03 / THE MODELED TRAJECTORY</div>
            <h2>The whole journey, in view.</h2>
          </div>
          <span className="ss-pill">
            {input.months} months · editable assumptions
          </span>
        </div>
        <div className="ss-performance-grid">
          <div className="ss-chart-card">
            <div className="ss-chart-title">
              <h3>Monthly {lead}</h3>
              <div>
                <span className="ss-chart-key" />
                Scenario <span className="ss-chart-key ss-grey" />
                Starting volume
              </div>
            </div>
            <VolumeChart scenario={scenario} />
            <p className="ss-caption">
              Straight-line input changes, not an observed trend. Full monthly
              figures below.
            </p>
          </div>
          <div className="ss-source-card">
            <h3>Where they come from</h3>
            <p>Acquisition sources · {input.months}-month total</p>
            {[
              {
                label: "Organic search",
                value: organicTotal,
                color: "#315bff",
              },
              { label: "Paid advertising", value: paidTotal, color: "#a8b8ff" },
            ].map((source) => (
              <div className="ss-source" key={source.label}>
                <div>
                  <span>{source.label}</span>
                  <b>{number(source.value)}</b>
                </div>
                <div className="ss-track">
                  <i
                    style={{
                      width: `${totals.contacts ? (source.value / totals.contacts) * 100 : 0}%`,
                      background: source.color,
                    }}
                  />
                </div>
              </div>
            ))}
            <div className="ss-source-total">
              <span>Total {lead}</span>
              <strong>{number(totals.contacts)}</strong>
            </div>
            <p className="ss-caption">
              Website and agent conversions are already included in these
              totals.
            </p>
          </div>
        </div>
      </section>

      <section className="ss-section" id="ss-economics">
        <div className="ss-section-heading">
          <div>
            <div className="ss-eyebrow">04 / THE BUSINESS MATH</div>
            <h2>Value, with the full picture.</h2>
          </div>
          <p>
            Gross sales are the starting point.
            <br />
            Costs and margin tell the rest.
          </p>
        </div>
        <div className="ss-economics-grid">
          <div className="ss-ledger">
            <div>
              <span>
                Modeled initial gross sales
                <small>
                  {number(totals.customers)} {buyer} ×{" "}
                  {money(input.averageSale)}
                </small>
              </span>
              <strong>{money(totals.grossSales)}</strong>
            </div>
            <div>
              <span>
                Assumed gross profit
                <small>
                  {input.grossMargin === null
                    ? "Gross margin not supplied"
                    : `${input.grossMargin}% margin × modeled gross sales`}
                </small>
              </span>
              <strong>{money(totals.grossProfit)}</strong>
            </div>
            <div>
              <span>
                Advertising spend
                <small>
                  {input.months} months ×{" "}
                  {money(input.paid ? input.monthlyAdSpend : 0)}
                </small>
              </span>
              <strong>−{money(totals.adSpend)}</strong>
            </div>
            <div>
              <span>
                Service fees
                <small>
                  {input.months} months × {money(input.monthlyServiceFee)}
                </small>
              </span>
              <strong>−{money(input.monthlyServiceFee * input.months)}</strong>
            </div>
            <div>
              <span>
                Website investment
                <small>
                  One-time cost{!input.website ? " · disabled" : ""}
                </small>
              </span>
              <strong>
                −{money(input.website ? input.websiteInvestment : 0)}
              </strong>
            </div>
            <div className="ss-ledger-total">
              <span>
                Modeled contribution
                <small>
                  After listed marketing costs; before overhead and tax
                </small>
              </span>
              <strong
                className={
                  totals.contribution !== null && totals.contribution < 0
                    ? "ss-negative"
                    : ""
                }
              >
                {money(totals.contribution)}
              </strong>
            </div>
          </div>
          <aside className="ss-money-note">
            <span className="ss-note-icon">↳</span>
            <h3>What this number means.</h3>
            <p>
              Gross sales represent the value of initial purchases in this
              model. They are not net profit, lifetime value, recurring renewals
              or the business’s total revenue.
            </p>
            <p>
              Contribution applies your assumed margin, then subtracts the
              listed marketing costs. When margin is unknown, contribution stays
              blank.
            </p>
            <div>
              <b>No industry comparison is asserted.</b>
              <p>
                A fair agency comparison needs a cited, comparable dataset with
                the same industry, geography, channel, period and metric
                definition.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="ss-section" id="ss-method">
        <div className="ss-section-heading">
          <div>
            <div className="ss-eyebrow">05 / BEHIND THE NUMBERS</div>
            <h2>Easy to read. Open to inspection.</h2>
          </div>
          <p>
            Every figure comes from the same calculation.
            <br />
            No independently written headline numbers.
          </p>
        </div>
        <div className="ss-checks">
          {scenario.checks.map((check) => (
            <div key={check.label}>
              <span aria-hidden="true">✓</span>
              <div>
                <b>{check.label}</b>
                <p>{check.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="ss-caption">
          These checks establish consistency within the model. They do not
          verify real-world results or the likelihood of an outcome.
        </p>
        <details className="ss-details" open>
          <summary>
            Monthly calculation ledger{" "}
            <span>
              {input.currency} · {input.months} rows
            </span>
          </summary>
          <div className="ss-table-scroll">
            <table>
              <caption>
                Modeled counts and initial gross sales, by month. Paid ROAS uses
                only paid sales.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Month</th>
                  <th scope="col">Visitors</th>
                  <th scope="col">Website {lead}</th>
                  <th scope="col">Agent {lead}</th>
                  <th scope="col">Total {lead}</th>
                  {!ecommerce && <th scope="col">Qualified</th>}
                  <th scope="col">{ecommerce ? "Orders" : "Customers"}</th>
                  <th scope="col">Gross sales</th>
                  <th scope="col">Ad spend</th>
                  <th scope="col">Paid gross sales</th>
                  <th scope="col">Paid ROAS</th>
                </tr>
              </thead>
              <tbody>
                {months.map((row) => (
                  <tr key={row.month}>
                    <th scope="row">M{row.month}</th>
                    <td>{number(row.combined.visitors)}</td>
                    <td>{number(row.combined.websiteContacts)}</td>
                    <td>{number(row.combined.agentContacts)}</td>
                    <td>{number(row.combined.contacts)}</td>
                    {!ecommerce && <td>{number(row.combined.qualified)}</td>}
                    <td>{number(row.combined.customers)}</td>
                    <td>{money(row.combined.grossSales)}</td>
                    <td>{money(row.adSpend)}</td>
                    <td>{money(row.paid.grossSales)}</td>
                    <td>
                      {row.paidRoas === null
                        ? "—"
                        : `${row.paidRoas.toFixed(2)}×`}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Total</th>
                  <td>{number(totals.visitors)}</td>
                  <td>{number(totals.websiteContacts)}</td>
                  <td>{number(totals.agentContacts)}</td>
                  <td>{number(totals.contacts)}</td>
                  {!ecommerce && <td>{number(totals.qualified)}</td>}
                  <td>{number(totals.customers)}</td>
                  <td>{money(totals.grossSales)}</td>
                  <td>{money(totals.adSpend)}</td>
                  <td>{money(totals.paidGrossSales)}</td>
                  <td>
                    {totals.paidRoas === null
                      ? "—"
                      : `${totals.paidRoas.toFixed(2)}×`}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </details>
        <details className="ss-details">
          <summary>
            Assumptions & calculation method <span>Read the full model</span>
          </summary>
          <div className="ss-methodology">
            <h3>Selected assumptions</h3>
            <dl className="ss-assumptions">
              <div>
                <dt>Business model</dt>
                <dd>
                  {ecommerce
                    ? "Ecommerce · initial order"
                    : "Services · initial sale"}
                </dd>
              </div>
              <div>
                <dt>Organic visitors / month</dt>
                <dd>
                  {number(input.organicStart)} →{" "}
                  {number(input.seo ? input.organicEnd : input.organicStart)}
                </dd>
              </div>
              <div>
                <dt>Paid cost / eligible unique visit</dt>
                <dd>
                  {money(input.visitCostStart)} → {money(input.visitCostEnd)}
                  {!input.paid && " (paid off)"}
                </dd>
              </div>
              <div>
                <dt>Website conversion</dt>
                <dd>
                  {input.websiteRateStart}% →{" "}
                  {input.website
                    ? input.websiteRateEnd
                    : input.websiteRateStart}
                  %
                </dd>
              </div>
              <div>
                <dt>Agent engagement / capture</dt>
                <dd>
                  {input.agent
                    ? `${input.agentEngagementRate}% / ${input.agentCaptureRate}%`
                    : "Disabled"}
                </dd>
              </div>
              {!ecommerce && (
                <>
                  <div>
                    <dt>Lead qualification rate</dt>
                    <dd>{input.qualificationRate}%</dd>
                  </div>
                  <div>
                    <dt>Qualified-lead close rate</dt>
                    <dd>{input.closeRate}%</dd>
                  </div>
                </>
              )}
              <div>
                <dt>Average initial sale</dt>
                <dd>{money(input.averageSale)}</dd>
              </div>
              <div>
                <dt>Assumed gross margin</dt>
                <dd>
                  {input.grossMargin === null
                    ? "Unknown"
                    : `${input.grossMargin}%`}
                </dd>
              </div>
            </dl>
            <h3>How to interpret the model</h3>
            <ol>
              {scenario.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ol>
          </div>
        </details>
      </section>

      <section className="ss-cta">
        <div>
          <span className="ss-eyebrow">BUILD YOUR OWN GROWTH PLAN</span>
          <h2>
            Let’s put your business
            <br />
            in the picture.
          </h2>
          <p>
            Explore the opportunities with MEGA using your goals, budget and
            actual starting point.
          </p>
        </div>
        <a
          href="https://www.gomega.ai/demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Talk to MEGA <Arrow diagonal />
        </a>
      </section>
      <footer className="ss-footer">
        <Brand />
        <p>
          Illustrative scenario. Hypothetical business and results.
          <br />
          Not evidence of past performance or a guarantee of future results.
        </p>
        <span>
          MODEL V{input.version} / {input.currency}
        </span>
      </footer>
    </article>
  );
}

export default function ScenarioStudio() {
  const [draft, setDraft] = useState<ScenarioInput>({
    ...DEFAULT_INPUT,
    region: "Florida",
    industry: "HVAC",
  });
  const [notice, setNotice] = useState("");
  const [previewOnly, setPreviewOnly] = useState(false);
  const importRef = useRef<HTMLInputElement>(null);
  const issues = validateInput(draft);
  const scenario = issues.length ? null : buildScenario(draft);

  function update<K extends keyof ScenarioInput>(
    key: K,
    value: ScenarioInput[K],
  ) {
    setDraft((previous) => ({ ...previous, [key]: value }));
    setNotice("");
  }

  function numeric(
    key: keyof ScenarioInput,
    label: string,
    options: {
      help?: string;
      min?: number;
      max?: number;
      step?: number;
      nullable?: boolean;
    } = {},
  ) {
    return (
      <InputField label={label} help={options.help}>
        <input
          type="number"
          value={
            Number.isNaN(draft[key]) || draft[key] === null
              ? ""
              : String(draft[key])
          }
          min={options.min ?? 0}
          max={options.max}
          step={options.step ?? "any"}
          onChange={(event) =>
            update(
              key,
              event.target.value === ""
                ? options.nullable
                  ? null
                  : NaN
                : Number(event.target.value),
            )
          }
        />
      </InputField>
    );
  }

  function printReport() {
    const closed = Array.from(
      document.querySelectorAll<HTMLDetailsElement>(
        "#scenario-report details:not([open])",
      ),
    );
    closed.forEach((detail) => {
      detail.open = true;
    });
    const restoreDetails = () => {
      closed.forEach((detail) => {
        detail.open = false;
      });
      window.removeEventListener("afterprint", restoreDetails);
    };
    window.addEventListener("afterprint", restoreDetails, { once: true });
    try {
      window.print();
    } catch {
      restoreDetails();
      setNotice(
        "Printing is unavailable in this browser. Export the scenario to keep a copy.",
      );
    }
  }

  function download() {
    if (!scenario) return;
    const blob = new Blob([serializeScenario(draft)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `mega-illustrative-${draft.industry.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.json`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice(
      "Scenario exported with its inputs, calculations and illustrative disclosure.",
    );
  }

  function save() {
    if (!scenario) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scenario.input));
      setNotice("Saved in this browser. Export a copy to keep or share it.");
    } catch {
      setNotice("Browser storage is unavailable. Use Export instead.");
    }
  }

  function restore() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setNotice("No saved scenario in this browser yet.");
        return;
      }
      setDraft(parseInput(JSON.parse(saved)));
      setNotice("Saved scenario restored and recalculated.");
    } catch {
      setNotice(
        "The saved scenario could not be read. Import a valid export or use the current draft.",
      );
    }
  }

  return (
    <div className={`ss-app${previewOnly ? " ss-preview-only" : ""}`}>
      <header className="ss-toolbar">
        <div>
          <Brand />
          <span className="ss-toolbar-divider" />
          <div>
            <b>Case study studio</b>
            <small>Illustrative scenario builder</small>
          </div>
        </div>
        <div className="ss-actions">
          <button onClick={() => setPreviewOnly(!previewOnly)}>
            {previewOnly ? "Edit assumptions" : "Reader view"}
          </button>
          <button disabled={!scenario} onClick={download}>
            Export JSON
          </button>
          <button
            className="ss-primary"
            disabled={!scenario}
            onClick={printReport}
          >
            Print / PDF <Arrow />
          </button>
        </div>
      </header>
      <div className="ss-workspace">
        <aside className="ss-editor">
          <div className="ss-editor-title">
            <span className="ss-eyebrow">BUILD THE SCENARIO</span>
            <h2>
              Make the inputs <br />
              make sense.
            </h2>
            <p>
              Adjust the assumptions. Every number in the preview recalculates
              together.
            </p>
          </div>
          <div className="ss-editor-actions">
            <button onClick={save} disabled={!scenario}>
              Save locally
            </button>
            <button onClick={restore}>Restore</button>
            <button onClick={() => importRef.current?.click()}>Import</button>
          </div>
          <input
            ref={importRef}
            hidden
            type="file"
            accept=".json,application/json"
            aria-label="Import scenario JSON"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              if (!file) return;
              if (file.size > 100000) {
                setNotice("Choose an export smaller than 100 KB.");
                return;
              }
              try {
                const data = JSON.parse(await file.text());
                setDraft(parseInput(data.input ?? data));
                setNotice(
                  "Imported and recalculated. Imported totals are never trusted.",
                );
              } catch (error) {
                setNotice(
                  error instanceof Error
                    ? error.message
                    : "Could not import this file.",
                );
              }
            }}
          />
          <details className="ss-control-group" open>
            <summary>
              <span>01</span> Business profile
            </summary>
            <div>
              <InputField
                label="Industry"
                help="Use an industry, never a company or person name."
              >
                <input
                  value={draft.industry}
                  maxLength={100}
                  onChange={(event) => update("industry", event.target.value)}
                />
              </InputField>
              <InputField label="Location">
                <input
                  value={draft.region}
                  maxLength={100}
                  onChange={(event) => update("region", event.target.value)}
                />
              </InputField>
              <InputField label="Business model">
                <select
                  value={draft.businessModel}
                  onChange={(event) =>
                    update(
                      "businessModel",
                      event.target.value as ScenarioInput["businessModel"],
                    )
                  }
                >
                  <option value="services">Services · lead to sale</option>
                  <option value="ecommerce">Ecommerce · visit to order</option>
                </select>
              </InputField>
              <div className="ss-field-pair">
                <InputField label="Currency">
                  <select
                    value={draft.currency}
                    onChange={(event) =>
                      update(
                        "currency",
                        event.target.value as ScenarioInput["currency"],
                      )
                    }
                  >
                    {["USD", "CAD", "GBP", "EUR"].map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                </InputField>
                {numeric("months", "Months", { min: 2, max: 24, step: 1 })}
              </div>
            </div>
          </details>
          <details className="ss-control-group" open>
            <summary>
              <span>02</span> Services in the story
            </summary>
            <div className="ss-toggle-list">
              {(
                [
                  ["seo", "SEO growth"],
                  ["paid", "Paid advertising"],
                  ["website", "Website improvements"],
                  ["agent", "Conversion agent"],
                ] as const
              ).map(([key, label]) => (
                <label key={key}>
                  <span>{label}</span>
                  <input
                    type="checkbox"
                    checked={draft[key]}
                    onChange={(event) => update(key, event.target.checked)}
                  />
                  <span className="ss-switch" aria-hidden="true" />
                </label>
              ))}
              <p className="ss-hint">
                Turning SEO off keeps starting organic traffic. Turning website
                improvements off keeps its starting conversion rate.
              </p>
            </div>
          </details>
          <details className="ss-control-group">
            <summary>
              <span>03</span> Traffic & acquisition
            </summary>
            <div>
              {numeric("organicStart", "Starting organic visitors / month", {
                step: 1,
              })}
              {draft.seo &&
                numeric("organicEnd", "Final-month organic visitors", {
                  step: 1,
                })}
              {draft.paid && (
                <>
                  {numeric("monthlyAdSpend", "Monthly advertising budget", {
                    min: 0.01,
                    step: 0.01,
                  })}
                  <div className="ss-field-pair">
                    {numeric("visitCostStart", "Starting visit cost", {
                      min: 0.01,
                      step: 0.01,
                    })}
                    {numeric("visitCostEnd", "Final visit cost", {
                      min: 0.01,
                      step: 0.01,
                    })}
                  </div>
                  <p className="ss-hint">
                    Cost per eligible unique visit. This is not a platform CPC
                    benchmark.
                  </p>
                </>
              )}
            </div>
          </details>
          <details className="ss-control-group">
            <summary>
              <span>04</span> Website & conversion
            </summary>
            <div>
              {numeric(
                "websiteRateStart",
                `Starting ${draft.businessModel === "ecommerce" ? "order" : "inquiry"} rate (%)`,
                { max: 100 },
              )}
              {draft.website &&
                numeric("websiteRateEnd", "Final website conversion (%)", {
                  max: 100,
                })}
              {draft.agent && (
                <>
                  {numeric("agentEngagementRate", "Agent engagement (%)", {
                    max: 100,
                    help: "Share of remaining non-converting visitors who engage.",
                  })}
                  {numeric("agentCaptureRate", "Agent conversion (%)", {
                    max: 100,
                    help: "Share of those conversations that become a new inquiry or order.",
                  })}
                </>
              )}
              {draft.businessModel === "services" && (
                <>
                  {numeric("qualificationRate", "Lead qualification (%)", {
                    max: 100,
                  })}
                  {numeric("closeRate", "Qualified-lead close rate (%)", {
                    max: 100,
                  })}
                </>
              )}
            </div>
          </details>
          <details className="ss-control-group">
            <summary>
              <span>05</span> Revenue & investment
            </summary>
            <div>
              {numeric("averageSale", "Average initial sale value", {
                step: 0.01,
                help: "One initial purchase, excluding sales tax. Do not enter lifetime value, assets under management or pipeline.",
              })}
              {numeric("grossMargin", "Gross margin (%)", {
                max: 100,
                nullable: true,
                help: "Before the marketing costs listed below. Leave blank if unknown; contribution is not net profit.",
              })}
              {numeric("monthlyServiceFee", "Monthly service fees", {
                step: 0.01,
              })}
              {draft.website &&
                numeric("websiteInvestment", "One-time website investment", {
                  step: 0.01,
                })}
            </div>
          </details>
          <div className="ss-editor-note">
            <b>Assumptions, not evidence.</b>
            <p>
              Example inputs are not industry benchmarks. No customer results,
              claims of agency superiority or forecast confidence are inferred.
            </p>
          </div>
        </aside>
        <main className="ss-preview">
          <div className="ss-preview-meta">
            <span>
              <i /> LIVE CUSTOMER VIEW
            </span>
            <span>Illustrative · Model v1</span>
          </div>
          {notice && (
            <div className="ss-notice" role="status">
              {notice}
            </div>
          )}
          {issues.length > 0 ? (
            <div className="ss-errors" role="alert">
              <h2>Check the inputs to update the preview.</h2>
              <ul>
                {issues.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
              <p>Export is disabled until these are resolved.</p>
            </div>
          ) : (
            scenario && <ScenarioReport scenario={scenario} />
          )}
        </main>
      </div>
    </div>
  );
}
