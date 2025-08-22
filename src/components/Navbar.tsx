import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              TLE
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link href="/our-mentors" className="text-gray-900 bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                Our Mentors
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </Link>
              <Link href="/blogs" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Blogs
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
              Login/SignUp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
