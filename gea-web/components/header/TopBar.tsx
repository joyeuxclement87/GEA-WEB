import { FaWhatsapp, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { icon: FaWhatsapp, href: 'https://wa.me/250788888888', label: 'WhatsApp' },
  { icon: FaEnvelope, href: 'mailto:info@globalengineeringagency.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/gea-rwanda', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://facebook.com/gea-rwanda', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com/gea-rwanda', label: 'Instagram' },
];

const TopBar = () => (
  <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#1e3a8a]/80 border-b border-white/10 text-white h-12 hidden md:block">
    <div className="container mx-auto px-8 h-full">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#caa04d] animate-pulse"></span>
            <span className="w-2 h-2 rounded-full bg-[#caa04d] animate-pulse delay-75"></span>
          </div>
          <p className="font-inter text-sm tracking-wide font-medium text-white/90">
            Delivering Quality Engineering & Real Estate Solutions in Rwanda.
          </p>
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center space-x-2 bg-white/5 px-4 py-1.5 rounded-slight border border-white/10 backdrop-blur-sm">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-1.5 text-white/90 hover:text-[#caa04d] hover:bg-white/10 rounded-slight transform hover:scale-105 transition-all duration-200 ease-in-out group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-4 h-4 group-hover:rotate-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
