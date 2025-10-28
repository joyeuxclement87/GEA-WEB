import { FaHardHat, FaRuler, FaCalculator, FaLightbulb, FaTasks, FaShieldAlt, FaSun } from 'react-icons/fa';

const services = [
  {
    category: "Planning & Design",
    items: [
      { icon: FaRuler, title: "Architecture Drawings", description: "Detailed and precise architectural plans for any project." },
      { icon: FaCalculator, title: "Cost Estimation (BOQ)", description: "Transparent and accurate project cost projections." },
      { icon: FaLightbulb, title: "Project Consultation", description: "Expert guidance for planning and executing projects." },
    ]
  },
  {
    category: "Execution & Systems",
    items: [
      { icon: FaHardHat, title: "General Contracting", description: "Complete mechanical, electrical, and plumbing solutions." },
      { icon: FaTasks, title: "Project Management", description: "Ensuring timely delivery from start to finish." },
      { icon: FaShieldAlt, title: "Fire, Safety, IT & Security", description: "Advanced systems for safety and efficiency." },
      { icon: FaSun, title: "HVAC and Solar System", description: "Sustainable solutions for energy needs." },
    ]
  }
];

const featuredProjects = [
  { name: "Kigali Heights", year: "2022", image: "/projects/kigali-heights.jpg" },
  { name: "Green Office Park", year: "2023", image: "/projects/office-park.jpg" },
  // Add more projects as needed
];

const ConstructionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark text-center font-title mb-4">
            Construction & Engineering
          </h1>
          <p className="text-lg lg:text-xl text-neutral-text text-center max-w-2xl mx-auto">
            Delivering innovative engineering solutions for Rwanda's growth.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        {services.map((category) => (
          <div key={category.category} className="mb-16">
            <h2 className="text-2xl font-semibold text-blue-dark mb-8">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((service) => (
                <div
                  key={service.title}
                  className="bg-white/30 backdrop-blur-md rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl lg:text-2xl font-bold text-neutral-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-text">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Featured Projects */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-neutral-dark mb-8">Featured Projects</h2>
        <div className="flex space-x-6 overflow-x-auto pb-6">
          {featuredProjects.map((project) => (
            <div
              key={project.name}
              className="flex-none w-72 h-48 relative rounded-xl overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div>
                  <h3 className="text-white font-semibold">{project.name}</h3>
                  <p className="text-white/80 text-sm">{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-dark to-blue-light text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Request a Quote
          </button>
          <button className="border-2 border-blue-light text-blue-dark px-8 py-3 rounded-full hover:bg-blue-light hover:text-white transition-all duration-300 transform hover:scale-105">
            Explore Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConstructionPage;
