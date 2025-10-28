import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Construction', href: '/construction' },
  { label: 'Real Estate', href: '/real-estate' },
  { label: 'Hardware', href: '/hardware' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com/company/gea-rwanda', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://facebook.com/gea-rwanda', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com/gea-rwanda', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/250788888888', label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="bg-white/20 backdrop-blur-md border-t border-gray-200/20">
      <div className="container mx-auto py-12 lg:py-16 px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-dark mb-4">
              <span className="text-primary">GEA</span>
            </h3>
            <p className="text-neutral-text">
              Global Engineering Agency – Delivering professional solutions in Construction, Real Estate, and Hardware across Rwanda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-neutral-text hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-dark mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center text-neutral-text">
                <FaPhone className="w-4 h-4 mr-2 text-primary" />
                +250 788 123 456
              </p>
              <p className="flex items-center text-neutral-text">
                <FaEnvelope className="w-4 h-4 mr-2 text-primary" />
                info@globalengineeringagency.com
              </p>
              <p className="flex items-center text-neutral-text">
                <FaMapMarkerAlt className="w-4 h-4 mr-2 text-primary" />
                Kigali, Rwanda
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-dark mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-200 group"
                >
                  <social.icon className="w-5 h-5 text-neutral-dark group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-300/40 py-6">
        <div className="container mx-auto px-6 text-center text-sm text-neutral-text">
          © {new Date().getFullYear()} Global Engineering Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
