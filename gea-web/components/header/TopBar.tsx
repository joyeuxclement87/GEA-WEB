import { FaWhatsapp, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { icon: FaWhatsapp, href: 'https://wa.me/250788888888', label: 'WhatsApp' },
  { icon: FaEnvelope, href: 'mailto:info@globalengineeringagency.com', label: 'Email' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/gea-rwanda', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://facebook.com/gea-rwanda', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com/gea-rwanda', label: 'Instagram' },
];

const TopBar = () => (
  <div className="bg-dark text-white h-12 hidden md:block shadow-sm">
    <div className="container mx-auto px-6 h-full">
      <div className="flex justify-between items-center h-full">
        <p className="text-sm tracking-wider font-light opacity-90 hover:opacity-100 transition-opacity">
          Delivering Quality Engineering & Real Estate Solutions in Rwanda.
        </p>
        
        <div className="flex items-center gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-300 hover:text-primary transform hover:scale-110 transition-all duration-200 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
