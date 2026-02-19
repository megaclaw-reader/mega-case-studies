export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-100 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold mb-4">
          <span className="text-[#2965FF]">MEGA</span>
        </div>
        <p className="text-sm text-[#6B7280] max-w-xl mx-auto mb-6">
          All metrics represent actual client results. Individual outcomes may vary based on industry, competition, and market conditions.
        </p>
        <p className="text-xs text-[#6B7280]">
          © {new Date().getFullYear()} MEGA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
