import { FaTools, FaWrench, FaHardHat, FaPaintRoller, FaShieldAlt, FaTruck } from 'react-icons/fa';

const categories = [
  { icon: FaTools, name: "Electrical Tools & Components", description: "Professional-grade electrical equipment" },
  { icon: FaWrench, name: "Plumbing Equipment", description: "Complete plumbing solutions" },
  { icon: FaHardHat, name: "Construction Materials", description: "Quality building supplies" },
  { icon: FaPaintRoller, name: "Paints & Finishes", description: "Premium paints and coatings" },
  { icon: FaShieldAlt, name: "Safety & PPE", description: "Essential safety equipment" }
];

const featuredProducts = [
  {
    name: "Power Drill Set",
    image: "/products/drill.jpg",
    description: "Professional-grade power drill with accessories",
    price: "Contact for Price"
  },
  // Add more products...
];

const HardwarePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark text-center font-title mb-4">
            Hardware & Supplies
          </h1>
          <p className="text-lg lg:text-xl text-neutral-text text-center max-w-2xl mx-auto">
            Quality tools, building materials, and equipment delivered across Kigali.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-blue-dark mb-8">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <category.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">{category.name}</h3>
              <p className="text-neutral-text">{category.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-blue-dark mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="bg-white/30 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="h-48 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-neutral-dark mb-2">{product.name}</h3>
                <p className="text-sm text-neutral-text mb-3">{product.description}</p>
                <p className="text-primary font-semibold mb-3">{product.price}</p>
                <button className="w-full bg-blue-light/10 text-blue-dark px-4 py-2 rounded-full hover:bg-blue-light hover:text-white transition-all duration-300">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delivery Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/30 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-6">
            <FaTruck className="w-12 h-12 text-primary" />
            <div>
              <h3 className="text-2xl font-bold text-neutral-dark mb-2">Delivery Services</h3>
              <p className="text-neutral-text">
                We deliver across Kigali and nearby districts. Serving contractors, developers, and individuals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-dark to-blue-light text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Request a Quote
          </button>
          <button className="border-2 border-blue-light text-blue-dark px-8 py-3 rounded-full hover:bg-blue-light hover:text-white transition-all duration-300 transform hover:scale-105">
            Visit Our Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default HardwarePage;
