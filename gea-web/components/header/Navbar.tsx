import { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Construction', href: '/construction' },
    { label: 'Real Estate', href: '/real-estate' },
    { label: 'Hardware', href: '/hardware' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white h-20 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-primary font-bold text-2xl">GEA</span>
            <span className="text-gray-700 font-light hidden md:block">
              Global Engineering Agency
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-gray-700 hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-primary text-white rounded-full px-5 py-2 hover:bg-primary-dark transition shadow-md">
              Request a Quote
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block font-medium text-gray-700 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full bg-primary text-white rounded-full px-5 py-3 hover:bg-primary-dark transition mt-6">
            Request a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
