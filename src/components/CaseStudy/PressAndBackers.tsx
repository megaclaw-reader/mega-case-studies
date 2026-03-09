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
      <span className="text-xl sm:text-2xl md:text-3xl">WSJ.</span>
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
    <span className={`font-bold leading-none ${className}`} style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}>
      <span className="text-lg sm:text-xl md:text-2xl tracking-tight">axios</span>
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
            <a href="https://venturecap.cmail20.com/t/d-e-ghykdit-irtiljurdj-t/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
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
