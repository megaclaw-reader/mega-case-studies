"use client";

const navLinks = [
  { label: "Challenge", href: "#challenge" },
  { label: "Strategy", href: "#strategy" },
  { label: "SEO Results", href: "#seo" },
  { label: "Paid Ads", href: "#paid-ads" },
  { label: "Impact", href: "#impact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text
              x="0"
              y="27"
              fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
              fontWeight="800"
              fontSize="34"
              letterSpacing="-1"
              fill="#2454FF"
            >
              Mega
            </text>
          </svg>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#6B7280] hover:text-[#2965FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
