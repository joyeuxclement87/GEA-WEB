import { FaBuilding, FaHome, FaTools } from 'react-icons/fa';

const services = [
  { icon: FaBuilding, label: 'Construction' },
  { icon: FaHome, label: 'Real Estate' },
  { icon: FaTools, label: 'Hardware Supplies' },
];

const Hero = () => {
  return (
    <div className="relative h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="/hero-bg.jpg"
          alt="Engineering background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-title mb-4">
            <span className="block text-primary font-bold text-5xl md:text-6xl">
              Engineering Tomorrow,
            </span>
            <span className="block text-white text-4xl md:text-5xl mt-2">
              Building Today
            </span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg mb-8 max-w-2xl">
            Comprehensive solutions in Construction, Real Estate, and Hardware, tailored for Rwanda's growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:shadow-lg transition duration-300">
              Explore Services
            </button>
            <button className="border-2 border-primary text-white px-6 py-3 rounded-full hover:bg-primary hover:text-white transition duration-300">
              Request a Quote
            </button>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            {services.map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition duration-300">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-white text-sm">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
