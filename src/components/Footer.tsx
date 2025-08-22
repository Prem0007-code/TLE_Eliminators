import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#06143A] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Courses */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-300">Courses</h4>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><Link href="https://example.com/level-1" target="_blank" rel="noopener noreferrer" className="hover:text-white">Level 1</Link></li>
              <li><Link href="https://example.com/level-2" target="_blank" rel="noopener noreferrer" className="hover:text-white">Level 2</Link></li>
              <li><Link href="https://example.com/level-3" target="_blank" rel="noopener noreferrer" className="hover:text-white">Level 3</Link></li>
              <li><Link href="https://example.com/level-4" target="_blank" rel="noopener noreferrer" className="hover:text-white">Level 4</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-300">Information</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="https://example.com/faq" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link href="https://example.com/terms" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="https://example.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-300">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/our-mentors" className="text-gray-300 hover:text-white">Our Mentors</Link></li>
              <li><Link href="https://example.com/contact" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link href="https://github.com/new/issues" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Report Bug</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-300">Socials</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Whatsapp</Link></li>
              <li><Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Discord</Link></li>
              <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">LinkedIn</Link></li>
              <li><Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Instagram</Link></li>
              <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Twitter</Link></li>
              <li><Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Youtube</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 justify-between">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-semibold">Codelift Academy Private Limited</span> | All rights reserved.
          </p>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <Link
              href="mailto:join@codelift.academy?subject=Mentor%20Application"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors"
            >
              <span>✨</span>
              <span>Join as a Mentor</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
