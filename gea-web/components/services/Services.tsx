import { FaBuilding, FaHome, FaTools, FaHardHat, FaPaintRoller, FaChartLine } from 'react-icons/fa';

const services = [
  {
    category: "Construction & Engineering",
    items: [
      { icon: FaHardHat, title: "General Contracting", description: "Complete mechanical, electrical, and plumbing solutions for any project." },
      { icon: FaPaintRoller, title: "Project Management", description: "Expert oversight and execution of construction projects." },
    ]
  },
  {
    category: "Real Estate",
    items: [
      { icon: FaHome, title: "Property Solutions", description: "Buying, selling, and managing properties with expert guidance." },
      { icon: FaChartLine, title: "Investment Advisory", description: "Strategic real estate investment consulting and management." },
    ]
  },
  {
    category: "Hardware & Supplies",
    items: [
      { icon: FaTools, title: "Quality Tools", description: "Professional-grade equipment for construction needs." },
      { icon: FaBuilding, title: "Building Materials", description: "Comprehensive range of construction materials and supplies." },
    ]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-100/50 to-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-dark font-title mb-4">
            Our Services
          </h2>
          <p className="text-lg lg:text-xl text-neutral-text">
            Expert solutions in Construction, Real Estate, and Hardware
          </p>
        </div>

        <div className="space-y-16">
          {services.map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-dark text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.items.map((service) => (
                  <div 
                    key={service.title}
                    className="bg-white/30 backdrop-blur-md rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
                  >
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h4 className="text-xl lg:text-2xl font-bold text-neutral-dark mb-2">
                      {service.title}
                    </h4>
                    <p className="text-neutral-text">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-dark to-blue-light text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Explore All Services
          </button>
          <button className="border-2 border-blue-light text-blue-dark px-8 py-3 rounded-full hover:bg-blue-light hover:text-white transition-all duration-300 transform hover:scale-105">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
