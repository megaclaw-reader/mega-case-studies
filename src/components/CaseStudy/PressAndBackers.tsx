"use client";

/* ─── Press Logos (light bg, dark fill) ─── */

function WSJLogo() {
  // WSJ uses Escrow Condensed — Playfair Display SC is the closest free match
  // Using the iconic "WSJ." abbreviated form per Julien's request
  return (
    <svg viewBox="0 0 120 40" className="h-8 sm:h-10 w-auto" aria-label="WSJ">
      <text
        fontFamily="'Playfair Display SC', 'Georgia', 'Times New Roman', serif"
        fontSize="42"
        fontWeight="900"
        fill="currentColor"
        y="36"
        x="0"
        letterSpacing="-1"
      >
        WSJ.
      </text>
    </svg>
  );
}

function ForbesLogo() {
  // Actual Forbes wordmark from Wikimedia Commons (public domain)
  return (
    <svg viewBox="0 0 200 54" className="h-6 sm:h-8 w-auto" fill="currentColor" aria-label="Forbes">
      <path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2a4.9 4.9 0 0 1-3.4-1.8c-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z" />
    </svg>
  );
}

function FortuneLogo() {
  // Actual Fortune magazine wordmark from Wikimedia Commons
  return (
    <svg viewBox="0 0 89.5 20.6" className="h-5 sm:h-6 w-auto" fill="currentColor" aria-label="Fortune">
      <path d="M11.5 4.7v11.2a4.75 4.75 0 0 0 9.5 0V4.7a4.75 4.75 0 0 0-9.5 0m3.4 11.2V4.7a1.29 1.29 0 0 1 1.4-1.3 1.26 1.26 0 0 1 1.3 1.3v11.2a1.32 1.32 0 0 1-1.3 1.3 1.35 1.35 0 0 1-1.4-1.3M48.4.2h-9.6v3.4h3.1v16.7h3.4V3.6h3.1V.2zM58.4.2v15.7a1.3 1.3 0 1 1-2.6 0V.2h-3.5v15.7a4.8 4.8 0 0 0 9.6 0V.2zM89.5 3.6V.2h-8.4v20.1h8.4v-3.4h-5v-5.2h3.2V8.3h-3.2V3.6h5zM35.6 20.3H32l-2.5-9.5a2.73 2.73 0 0 0 2.2-2.7V5a1.37 1.37 0 0 0-1.4-1.4H29v16.7h-3.4V.2h4.7a4.76 4.76 0 0 1 4.8 4.6V8a5.37 5.37 0 0 1-1.9 4.4zM73.5.2v11L70 .2h-3.5v20.1H70v-9.8l3.2 9.8H77V.2h-3.5zM0 .5v20.1h3.6V12h3.3V8.6H3.6V3.9h5.2V.5H0z" />
    </svg>
  );
}

function AxiosLogo() {
  // Actual Axios news wordmark from Wikimedia Commons
  // Contains the distinctive blue "A" triangle + dark "xios" text
  return (
    <svg viewBox="0 0 149.85 38.08" className="h-6 sm:h-7 w-auto" aria-label="Axios">
      <g transform="translate(0,-0.09)">
        {/* The "I" */}
        <polygon fill="currentColor" points="69.32,36.888 78.257,36.888 78.257,1.236 69.32,1.236" />
        {/* The "O" and "S" */}
        <path fill="currentColor" d="m 100.45,29.38 c 5.68,0 9.85,-4.87 9.85,-10.33 0,-5.46 -4.2,-10.28 -9.85,-10.28 -5.68,0 -9.87,4.82 -9.87,10.28 0,5.46 4.2,10.33 9.87,10.33 m 0.07,-29.29 c 10.71,0 19.33,8.22 19.33,18.89 0,10.72 -8.69,19.1 -19.42,19.1 -10.73,0 -19.42,-8.26 -19.42,-18.96 0,-10.67 8.81,-19.03 19.52,-19.03 m 20.36,26.01 8.2,-1.93 c 0.59,4.28 3.74,5.83 7.04,5.83 3.28,0 4.49,-1.93 4.49,-3.43 0,-1.21 -0.7,-2.4 -3.1,-2.87 l -5.01,-0.96 c -5.98,-1.14 -10.22,-4.87 -10.22,-10.59 0,-6.82 6.27,-11.62 13.36,-11.62 9.13,0 12.89,5.65 13.55,10.38 l -8.04,2.24 c -0.43,-2.92 -2.24,-5.02 -5.55,-5.02 -2.85,0 -4.21,1.88 -4.21,3.32 0,1.19 0.57,2.56 2.7,2.96 l 5.21,0.99 c 6.82,1.3 10.56,5.43 10.56,10.79 0,5.83 -5.07,11.44 -13.77,11.44 -9.11,0 -14,-4.73 -15.2,-11.53" />
        {/* The blue "A" accent stroke */}
        <polygon fill="#3b6be3" points="9.618,36.888 0,36.888 15.904,1.236 25.568,1.236" />
        {/* The "X" crossbar + remaining "A" strokes */}
        <polygon fill="currentColor" points="43.448,1.214 32.37,1.214 44.472,18.658 37.738,28.434 25.606,1.235 15.941,1.235 31.892,36.888 42.207,36.888 49.742,25.586 57.188,36.888 67.616,36.888 55.169,18.658 67.115,1.214 56.185,1.214 49.742,11.774" />
      </g>
    </svg>
  );
}

/* ─── Backer Logos (dark bg, white fill) ─── */

function A16zLogo() {
  // Andreessen Horowitz uses a clean, bold lowercase wordmark
  return (
    <svg viewBox="0 0 80 28" className="h-7 sm:h-9 w-auto" aria-label="a16z">
      <text
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="32"
        fontWeight="800"
        fill="currentColor"
        y="25"
        x="0"
        letterSpacing="-1.5"
      >
        a16z
      </text>
    </svg>
  );
}

function AtreidesLogo() {
  return (
    <span className="flex items-center gap-2.5">
      {/* Geometric triangle mark */}
      <svg viewBox="0 0 32 36" className="h-7 sm:h-8 w-auto" fill="currentColor" aria-label="">
        <path d="M16 0L0 36h8l8-20 8 20h8L16 0z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="text-[13px] sm:text-[15px] font-semibold tracking-[0.15em] uppercase"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
        >
          Atreides
        </span>
        <span
          className="text-[8px] sm:text-[9px] font-medium tracking-[0.25em] uppercase opacity-50 mt-0.5"
          style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
        >
          Management
        </span>
      </span>
    </span>
  );
}

function GoodwaterLogo() {
  // Goodwater Capital — clean, modern wordmark
  return (
    <span className="flex items-center gap-2">
      {/* Water drop icon */}
      <svg viewBox="0 0 20 28" className="h-5 sm:h-6 w-auto" fill="currentColor" aria-label="">
        <path d="M10 0C10 0 0 12 0 18a10 10 0 0 0 20 0C20 12 10 0 10 0z" />
      </svg>
      <span
        className="text-[15px] sm:text-[17px] font-normal tracking-wide"
        style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
      >
        Goodwater
      </span>
    </span>
  );
}

function SignalFireLogo() {
  return (
    <span className="flex items-center gap-2">
      {/* Signal bars / flame hybrid icon */}
      <svg viewBox="0 0 28 28" className="h-5 sm:h-6 w-auto" fill="currentColor" aria-label="">
        <rect x="0" y="18" width="5" height="10" rx="1" opacity="0.35" />
        <rect x="7.5" y="12" width="5" height="16" rx="1" opacity="0.55" />
        <rect x="15" y="6" width="5" height="22" rx="1" opacity="0.75" />
        <rect x="22.5" y="0" width="5" height="28" rx="1" />
      </svg>
      <span
        className="text-[15px] sm:text-[17px] font-semibold tracking-tight"
        style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
      >
        SignalFire
      </span>
    </span>
  );
}

/* ─── Main Component ─── */

const pressLinks = [
  {
    Logo: WSJLogo,
    url: "https://venturecap.cmail20.com/t/d-e-ghykdit-irtiljurdj-t/",
  },
  {
    Logo: ForbesLogo,
    url: "https://www.forbes.com/sites/charliefink/2026/03/09/ai-agents-take-aim-at-the-local-marketing-agency-as-mega-raises-115-million/",
  },
  {
    Logo: FortuneLogo,
    url: "https://fortune.com/2026/03/09/robinhood-ventures-databricks-ramp-private-markets-openai-anthropic-spacex-vlad-tenev/",
  },
  {
    Logo: AxiosLogo,
    url: "https://www.axios.com/pro/enterprise-software-deals/2026/03/09/marketing-ai-mega-enterprise-software",
  },
];

const backerLinks = [
  {
    Logo: A16zLogo,
    url: "https://a16z.com/portfolio/",
  },
  {
    Logo: AtreidesLogo,
    url: "https://atreidesmgmt.com/",
  },
  {
    Logo: GoodwaterLogo,
    url: "https://www.goodwatercap.com/portfolio/",
  },
  {
    Logo: SignalFireLogo,
    url: "https://www.signalfire.com/portfolio",
  },
];

export default function PressAndBackers() {
  return (
    <section className="mt-16">
      {/* As Featured In — light section */}
      <div className="bg-[#f8f9fa] border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto py-14 sm:py-16 px-6">
          <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-10">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-20">
            {pressLinks.map(({ Logo, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors"
              >
                <Logo />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Backed By — dark section */}
      <div className="bg-[#0a0e27]">
        <div className="max-w-5xl mx-auto py-14 sm:py-16 px-6">
          <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-10">
            Backed By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-20">
            {backerLinks.map(({ Logo, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Logo />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
