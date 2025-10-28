import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Construction', href: '/services/construction' },
  { label: 'Real Estate', href: '/services/real-estate' },
  { label: 'Hardware', href: '/services/hardware' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-10 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-[#1e3a8a]/95'
          : 'backdrop-blur-none bg-transparent'
      } border-b border-white/10`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Adjusted size for mobile */}
          <Link href="/" className="relative z-50">
            <img src="/logo.png" alt="GEA Logo" className="h-6 md:h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-white hover:text-[#caa04d] transition-colors text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Adjusted positioning and visibility */}
          <button
            className="md:hidden relative z-50 w-8 h-8 flex items-center justify-center bg-white/10 rounded-slight"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-white" />
            ) : (
              <FaBars className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Updated styling */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[104px] bg-[#1e3a8a]/98 backdrop-blur-md md:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white py-3 text-base font-medium border-b border-white/10 hover:text-[#caa04d] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
