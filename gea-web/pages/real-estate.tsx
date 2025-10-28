import { FaHome, FaHandshake, FaTools, FaBuilding } from 'react-icons/fa';

const properties = [
  {
    title: "Modern Villa in Kigali",
    type: "Residential",
    image: "/properties/villa.jpg",
    price: "$450,000",
    status: "For Sale",
    featured: true,
  },
  // Add more properties...
];

const services = [
  {
    icon: FaHandshake,
    title: "Property Buying & Selling",
    description: "Expert guidance through the entire transaction process."
  },
  {
    icon: FaBuilding,
    title: "Property Management",
    description: "Professional management services for property owners."
  },
  {
    icon: FaTools,
    title: "Refurbishment & Renovation",
    description: "Quality renovation and modernization services."
  },
  {
    icon: FaHome,
    title: "Property Demolition",
    description: "Safe and efficient demolition services."
  }
];

const RealEstatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark text-center font-title mb-4">
            Real Estate Services
          </h1>
          <p className="text-lg lg:text-xl text-neutral-text text-center max-w-2xl mx-auto">
            Helping you buy, sell, and manage properties with expert guidance.
          </p>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-blue-dark mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.title}
              className="bg-white/30 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                {property.featured && (
                  <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-2">{property.title}</h3>
                <p className="text-neutral-text mb-2">{property.type}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-primary font-semibold">{property.price}</span>
                  <span className="text-blue-light">{property.status}</span>
                </div>
                <button className="w-full mt-4 bg-blue-light/10 text-blue-dark px-4 py-2 rounded-full hover:bg-blue-light hover:text-white transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-blue-dark mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">{service.title}</h3>
              <p className="text-neutral-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-dark to-blue-light text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
          <button className="border-2 border-blue-light text-blue-dark px-8 py-3 rounded-full hover:bg-blue-light hover:text-white transition-all duration-300 transform hover:scale-105">
            Explore All Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealEstatePage;
