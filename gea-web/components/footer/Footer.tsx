import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const socialLinks = [
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Construction', href: '/services/construction' },
  { label: 'Real Estate', href: '/services/real-estate' },
  { label: 'Hardware', href: '/services/hardware' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#1e3a8a] -mb-px">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/90 to-[#3b82f6]/80">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-0">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <img src="/logo.png" alt="GEA Logo" className="h-12 mb-4" />
            <p className="text-white/80 text-sm leading-relaxed">
              Global Engineering Agency delivers excellence in construction, real estate, and hardware solutions across Rwanda.
            </p>
          </motion.div>

          {/* Quick Links - Updated Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[#caa04d] font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link 
                    href={href}
                    className="text-white/80 hover:text-[#caa04d] transition-colors duration-300 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-[#caa04d] font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#caa04d] w-5 h-5" />
                <span className="text-white/80 text-sm">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#caa04d] w-5 h-5" />
                <span className="text-white/80 text-sm">+250 788 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#caa04d] w-5 h-5" />
                <span className="text-white/80 text-sm">info@gea.rw</span>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-[#caa04d] font-bold mb-4">Newsletter</h3>
            <div className="backdrop-blur-md bg-white/10 p-4 rounded-slight border border-white/10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/20 rounded-slight px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-[#caa04d]"
              />
              <button className="w-full mt-2 bg-[#caa04d] text-white py-2 rounded-slight hover:bg-[#caa04d]/80 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4 mb-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Global Engineering Agency. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/60 hover:text-[#caa04d] transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#caa04d]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
