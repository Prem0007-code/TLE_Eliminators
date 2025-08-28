import Link from "next/link";

export default function PromoBar() {
  return (
    <div className="w-full bg-gradient-to-b from-[#0a1022] via-[#0a1022] to-[#0b1b3a] py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-sky-400/60 via-blue-500/55 to-indigo-500/60 shadow-[0_6px_20px_rgba(56,189,248,0.20)] overflow-hidden">
          <div className="relative rounded-2xl bg-[#0a1022]">
          {/* Grid background */}
          <div
            className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
            style={{
              backgroundColor: "#0a1022",
              backgroundImage: [
                // Grid on top (slightly stronger and grey-tinted)
                "linear-gradient(rgba(200,200,200,0.08) 1px, transparent 1px)",
                "linear-gradient(90deg, rgba(200,200,200,0.08) 1px, transparent 1px)",
                // Grey vertical gradient underneath
                "linear-gradient(180deg, #1b1e26 0%, #101217 100%)"
              ].join(', '),
              backgroundSize: "40px 40px, 40px 40px, auto",
              /* push grid lines away from border so border looks clean */
              backgroundPosition: "20px 20px, 20px 20px, 0 0",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-between py-4 md:py-5 px-5 md:px-8">
            <h2 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl">
              Self-Paced CP Courses
            </h2>
            <Link href="/" className="relative inline-flex rounded-full p-[2px] bg-gradient-to-r from-sky-400/60 via-blue-500/55 to-indigo-500/60 shadow-[0_6px_20px_rgba(56,189,248,0.20)] focus:outline-none">
              <span className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-black/80 border border-white/10">Check Out</span>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
