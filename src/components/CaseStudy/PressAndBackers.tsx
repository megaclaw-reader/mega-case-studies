"use client";

const pressLogos = [
  {
    name: "The Wall Street Journal",
    url: "https://www.forbes.com/sites/charliefink/2026/03/09/ai-agents-take-aim-at-the-local-marketing-agency-as-mega-raises-115-million/",
    svg: (
      <svg viewBox="0 0 400 40" className="h-7 sm:h-9 w-auto" fill="currentColor">
        <text fontFamily="'Escrow Condensed', 'Georgia', serif" fontSize="38" fontWeight="700" y="34">
          THE WALL STREET JOURNAL.
        </text>
      </svg>
    ),
    // Use text-based rendering for WSJ's iconic masthead
    textLogo: true,
  },
  {
    name: "Forbes",
    url: "https://www.forbes.com/sites/charliefink/2026/03/09/ai-agents-take-aim-at-the-local-marketing-agency-as-mega-raises-115-million/",
  },
  {
    name: "Fortune",
    url: "https://fortune.com/2026/03/09/robinhood-ventures-databricks-ramp-private-markets-openai-anthropic-spacex-vlad-tenev/",
  },
  {
    name: "Axios",
    url: "https://www.axios.com/pro/enterprise-software-deals/2026/03/09/marketing-ai-mega-enterprise-software",
  },
];

const backerLogos = [
  {
    name: "a16z",
    url: "https://a16z.com/portfolio/",
  },
  {
    name: "Atreides Management",
    url: "https://atreidesmgmt.com/",
  },
  {
    name: "Goodwater",
    url: "https://www.goodwatercap.com/portfolio/",
  },
  {
    name: "SignalFire",
    url: "https://www.signalfire.com/portfolio",
  },
];

function WSJLogo({ className }: { className?: string }) {
  return (
    <span className={`font-serif font-black tracking-tight leading-none ${className}`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
      <span className="text-xl sm:text-2xl md:text-3xl">THE WALL STREET JOURNAL.</span>
    </span>
  );
}

function ForbesLogo({ className }: { className?: string }) {
  return (
    <span className={`font-serif font-bold tracking-wide leading-none ${className}`} style={{ fontFamily: "'Georgia', serif", letterSpacing: '0.04em' }}>
      <span className="text-lg sm:text-xl md:text-2xl">Forbes</span>
    </span>
  );
}

function FortuneLogo({ className }: { className?: string }) {
  return (
    <span className={`font-bold tracking-[0.15em] uppercase leading-none ${className}`} style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <span className="text-sm sm:text-base md:text-lg">FORTUNE</span>
    </span>
  );
}

function AxiosLogo({ className }: { className?: string }) {
  return (
    <span className={`leading-none ${className}`}>
      <svg viewBox="0 0 106 26" className="h-5 sm:h-6 md:h-7 w-auto" fill="currentColor">
        <path d="M15.07 1.4L8.46 25.2H0L9.85 1.4h5.22zm-2.89 0L22.32 25.2h-8.7L5.17 1.4h7.01zM29.09 25.2l-5.1-10.56L29.2 1.4h8.3L27.68 14.64 33.4 25.2h-4.31zm-4.69 0L18.89 14.4 29.38 1.4h-4.56l-9.33 13 5.51 10.8h4.4zM40.6 25.2V1.4h7.22v23.8H40.6zm25.14-11.9c0-7.2-5.25-12.3-12.05-12.3-6.82 0-12.07 5.1-12.07 12.3s5.25 12.3 12.07 12.3c6.8 0 12.05-5.1 12.05-12.3zm-7.22 0c0 3.3-2.08 5.7-4.83 5.7-2.77 0-4.85-2.4-4.85-5.7s2.08-5.7 4.85-5.7c2.75 0 4.83 2.4 4.83 5.7zM83.56 7.73c-1.76-4.3-5.86-6.73-10.7-6.73-5.25 0-9.22 2.8-9.22 7.2 0 4.06 3.29 6.13 8.42 7.2 2.56.53 3.84 1.2 3.84 2.4 0 1.13-1.18 1.93-3.06 1.93-2.75 0-4.73-1.4-5.59-3.87L60.9 18.2c1.66 4.67 5.86 7.3 11.04 7.3 5.59 0 9.53-2.93 9.53-7.53 0-4.2-3.38-6.2-8.42-7.27-2.52-.53-3.82-1.13-3.82-2.33 0-1.07 1.2-1.8 2.86-1.8 2.44 0 4.2 1.27 5.1 3.6l6.37-2.44z" />
      </svg>
    </span>
  );
}

function A16zLogo({ className }: { className?: string }) {
  return (
    <span className={`font-bold leading-none ${className}`} style={{ fontFamily: "'Inter', sans-serif" }}>
      <span className="text-2xl sm:text-3xl tracking-tight">a16z</span>
    </span>
  );
}

function AtreidesLogo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 leading-none ${className}`}>
      <svg viewBox="0 0 32 32" className="h-6 sm:h-7 w-auto" fill="currentColor">
        <path d="M16 2L3 28h6l7-16 7 16h6L16 2z" />
      </svg>
      <span className="flex flex-col">
        <span className="text-sm sm:text-base font-semibold tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Atreides</span>
        <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] uppercase opacity-60" style={{ fontFamily: "'Inter', sans-serif" }}>Management</span>
      </span>
    </span>
  );
}

function GoodwaterLogo({ className }: { className?: string }) {
  return (
    <span className={`leading-none ${className}`} style={{ fontFamily: "'Inter', sans-serif" }}>
      <span className="text-base sm:text-lg font-normal tracking-wide">Goodwater</span>
    </span>
  );
}

function SignalFireLogo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 leading-none ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 sm:h-6 w-auto" fill="currentColor">
        <rect x="2" y="14" width="4" height="8" rx="1" opacity="0.4" />
        <rect x="8" y="10" width="4" height="12" rx="1" opacity="0.6" />
        <rect x="14" y="5" width="4" height="17" rx="1" opacity="0.8" />
        <rect x="20" y="1" width="4" height="21" rx="1" />
      </svg>
      <span className="text-base sm:text-lg font-semibold tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>SignalFire</span>
    </span>
  );
}

export default function PressAndBackers() {
  return (
    <section className="mt-16">
      {/* As Featured In — light section */}
      <div className="bg-[#f8f9fa] border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto py-14 sm:py-16 px-6">
          <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-10">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            <a href="https://www.forbes.com/sites/charliefink/2026/03/09/ai-agents-take-aim-at-the-local-marketing-agency-as-mega-raises-115-million/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
              <WSJLogo />
            </a>
            <a href="https://www.forbes.com/sites/charliefink/2026/03/09/ai-agents-take-aim-at-the-local-marketing-agency-as-mega-raises-115-million/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
              <ForbesLogo />
            </a>
            <a href="https://fortune.com/2026/03/09/robinhood-ventures-databricks-ramp-private-markets-openai-anthropic-spacex-vlad-tenev/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
              <FortuneLogo />
            </a>
            <a href="https://www.axios.com/pro/enterprise-software-deals/2026/03/09/marketing-ai-mega-enterprise-software" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
              <AxiosLogo />
            </a>
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
            <a href="https://a16z.com/portfolio/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <A16zLogo />
            </a>
            <a href="https://atreidesmgmt.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <AtreidesLogo />
            </a>
            <a href="https://www.goodwatercap.com/portfolio/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <GoodwaterLogo />
            </a>
            <a href="https://www.signalfire.com/portfolio" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <SignalFireLogo />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
