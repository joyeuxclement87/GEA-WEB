import { FaPhone, FaEnvelope } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#1e3a8a]/95 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="h-10 flex justify-between items-center">
          {/* Contact Info - Show only important info on mobile */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+250788123456"
              className="flex items-center space-x-2 text-white/80 hover:text-[#caa04d] transition-colors"
            >
              <FaPhone className="w-3 h-3" />
              <span className="text-xs hidden md:inline">+250 788 123 456</span>
            </a>
            <a
              href="mailto:info@gea.rw"
              className="hidden md:flex items-center space-x-2 text-white/80 hover:text-[#caa04d] transition-colors"
            >
              <FaEnvelope className="w-3 h-3" />
              <span className="text-xs">info@gea.rw</span>
            </a>
          </div>
          <div className="text-xs text-white/80 hidden md:block">
            <span>KG 33 Avenue, Umukindo House, Kigali</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
