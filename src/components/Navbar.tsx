import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#0a1022] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              TLE
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-2">
              <Link
                href="/"
                className="px-3.5 py-2.5 rounded-full text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3.5 py-2.5 rounded-full text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                About Us
              </Link>
              <Link
                href="/our-mentors"
                className="px-3.5 py-2.5 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/15 transition"
              >
                Our Mentors
              </Link>
              <Link
                href="/contact"
                className="px-3.5 py-2.5 rounded-full text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
              <Link
                href="/blogs"
                className="px-3.5 py-2.5 rounded-full text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition"
              >
                Blogs
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/login" className="relative inline-flex rounded-full p-[2px] bg-gradient-to-r from-sky-400/60 via-blue-500/55 to-indigo-500/60 shadow-[0_6px_20px_rgba(56,189,248,0.20)] focus:outline-none">
              <span className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-black/80 border border-white/10">
                Login/SignUp
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
