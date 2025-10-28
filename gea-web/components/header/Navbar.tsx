import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Construction', href: '/construction' },
  { label: 'Real Estate', href: '/real-estate' },
  { label: 'Hardware', href: '/hardware' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-12 z-40 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              <span className="font-bold text-2xl text-[#1e3a8a] relative">GEA</span>
            </div>
            <span className="text-neutral-600 font-light hidden md:block group-hover:text-neutral-800 transition-colors">
              Global Engineering Agency
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  router.pathname === item.href
                    ? 'text-[#1e3a8a] bg-blue-50'
                    : 'text-neutral-600 hover:text-[#1e3a8a] hover:bg-blue-50/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform hover:scale-105">
              Request a Quote
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-600 hover:text-[#1e3a8a] transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-4/5 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="p-6">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-neutral-600 hover:text-[#1e3a8a]">
              <HiX size={24} />
            </button>
          </div>
          <div className="mt-8 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  router.pathname === item.href
                    ? 'text-[#1e3a8a] bg-blue-50'
                    : 'text-neutral-600 hover:text-[#1e3a8a] hover:bg-blue-50/50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
