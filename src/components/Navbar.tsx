import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 tracking-tight">
              TLE
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-2">
              <Link
                href="/"
                className="px-3.5 py-2.5 rounded-full text-base font-semibold text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3.5 py-2.5 rounded-full text-base font-semibold text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 transition"
              >
                About Us
              </Link>
              <Link
                href="/our-mentors"
                className="px-3.5 py-2.5 rounded-full text-base font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 transition"
              >
                Our Mentors
              </Link>
              <Link
                href="/contact"
                className="px-3.5 py-2.5 rounded-full text-base font-semibold text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 transition"
              >
                Contact Us
              </Link>
              <Link
                href="/blogs"
                className="px-3.5 py-2.5 rounded-full text-base font-semibold text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 transition"
              >
                Blogs
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/login"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 shadow-sm hover:from-indigo-500 hover:to-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 transition"
            >
              Login/SignUp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
