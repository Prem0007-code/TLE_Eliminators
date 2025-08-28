import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative text-white" style={{ backgroundColor: '#0a1022' }}>
      {/* subtle radial gradient glow to match site theme */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: [
            'linear-gradient(180deg, rgba(30,58,138,0.20) 0%, rgba(2,6,23,0.00) 40%)', // subtle navy wash from top
            'radial-gradient(900px 280px at 50% 0%, rgba(37,99,235,0.22), transparent 75%)', // top blue glow
            'radial-gradient(900px 260px at 50% 100%, rgba(14,165,233,0.16), transparent 75%)' // bottom cyan glow
          ].join(', '),
        }}
      />
      <div className="relative max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Courses */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><Link href="https://example.com/level-1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Level 1</Link></li>
              <li><Link href="https://example.com/level-2" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Level 2</Link></li>
              <li><Link href="https://example.com/level-3" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Level 3</Link></li>
              <li><Link href="https://example.com/level-4" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Level 4</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Information</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="https://example.com/faq" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">FAQ</Link></li>
              <li><Link href="https://example.com/terms" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Terms & Conditions</Link></li>
              <li><Link href="https://example.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/our-mentors" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Our Mentors</Link></li>
              <li><Link href="https://example.com/contact" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Contact Us</Link></li>
              <li><Link href="https://github.com/new/issues" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Report Bug</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Socials</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Whatsapp</Link></li>
              <li><Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Discord</Link></li>
              <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">LinkedIn</Link></li>
              <li><Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Instagram</Link></li>
              <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Twitter</Link></li>
              <li><Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white/90 hover:underline underline-offset-4">Youtube</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 justify-between">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-semibold">Codelift Academy Private Limited</span> | All rights reserved.
          </p>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <Link
              href="mailto:join@codelift.academy?subject=Mentor%20Application"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-500 text-white px-4 py-2 text-sm font-semibold shadow-sm transition-colors"
            >
              <span aria-hidden>✨</span>
              <span>Join as a Mentor</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
