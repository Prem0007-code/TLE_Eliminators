import Link from "next/link";

export default function PromoBar() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="relative rounded-2xl border-2 border-blue-500/90 shadow-[0_0_20px_rgba(59,130,246,0.25)] overflow-hidden">
          {/* Grid background */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              backgroundColor: "#071227",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px, 40px 40px",
              backgroundPosition: "-1px -1px, -1px -1px",
            }}
          />

          {/* Content */}
          <div className="relative flex items-center justify-between py-4 md:py-5 px-5 md:px-8">
            <h2 className="text-white font-extrabold text-lg sm:text-xl md:text-2xl">
              Self-Paced CP Courses
            </h2>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 transition-colors border border-blue-400/40 shadow"
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
