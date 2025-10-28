import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const categories = ["All", "Construction", "Real Estate", "Hardware"];

const projects = [
  // Construction Projects
  {
    id: 1,
    title: "Kigali Heights Development",
    category: "Construction",
    year: "2023",
    description: "Modern commercial complex in the heart of Kigali with state-of-the-art facilities and sustainable design.",
    image: "/projects/kigali-heights.jpg",
  },
  {
    id: 2,
    title: "Green Valley Residences",
    category: "Construction",
    year: "2023",
    description: "Eco-friendly residential complex featuring 200+ premium apartments with modern amenities.",
    image: "/projects/green-valley.jpg",
  },
  {
    id: 3,
    title: "Tech Innovation Hub",
    category: "Construction",
    year: "2022",
    description: "Advanced technology center with smart building features and collaborative workspaces.",
    image: "/projects/tech-hub.jpg",
  },
  {
    id: 4,
    title: "Rwanda Convention Center",
    category: "Construction",
    year: "2022",
    description: "Multi-purpose convention facility with cutting-edge conference technologies.",
    image: "/projects/convention.jpg",
  },
  {
    id: 5,
    title: "Wellness Medical Center",
    category: "Construction",
    year: "2021",
    description: "Modern healthcare facility with specialized medical units and patient comfort focus.",
    image: "/projects/medical.jpg",
  },
  {
    id: 6,
    title: "Education Campus Complex",
    category: "Construction",
    year: "2021",
    description: "Comprehensive educational facility with modern classrooms and research facilities.",
    image: "/projects/education.jpg",
  },

  // Real Estate Projects
  {
    id: 7,
    title: "Legacy Gardens Estate",
    category: "Real Estate",
    year: "2023",
    description: "Luxury residential development with premium villas and extensive landscaping.",
    image: "/projects/legacy-gardens.jpg",
  },
  {
    id: 8,
    title: "Business District Towers",
    category: "Real Estate",
    year: "2023",
    description: "Premium office spaces in twin towers with modern amenities and parking facilities.",
    image: "/projects/business-towers.jpg",
  },
  {
    id: 9,
    title: "Sunset Heights Apartments",
    category: "Real Estate",
    year: "2022",
    description: "Modern apartment complex with panoramic city views and luxury finishes.",
    image: "/projects/sunset-heights.jpg",
  },
  {
    id: 10,
    title: "Smart Living Complex",
    category: "Real Estate",
    year: "2022",
    description: "Smart home enabled residential development with integrated technology solutions.",
    image: "/projects/smart-living.jpg",
  },
  {
    id: 11,
    title: "Retail Plaza Center",
    category: "Real Estate",
    year: "2021",
    description: "Mixed-use development featuring retail spaces and premium offices.",
    image: "/projects/retail-plaza.jpg",
  },
  {
    id: 12,
    title: "Green Park Residences",
    category: "Real Estate",
    year: "2021",
    description: "Eco-friendly residential community with sustainable features and green spaces.",
    image: "/projects/green-park.jpg",
  },

  // Hardware Projects
  {
    id: 13,
    title: "Construction Equipment Supply",
    category: "Hardware",
    year: "2023",
    description: "Major equipment supply for national infrastructure development project.",
    image: "/projects/equipment.jpg",
  },
  {
    id: 14,
    title: "Industrial Tools Provider",
    category: "Hardware",
    year: "2023",
    description: "Comprehensive industrial tools supply for manufacturing facilities.",
    image: "/projects/industrial.jpg",
  },
  {
    id: 15,
    title: "Smart Home Solutions",
    category: "Hardware",
    year: "2022",
    description: "Smart home hardware and automation equipment supply project.",
    image: "/projects/smart-home.jpg",
  },
  {
    id: 16,
    title: "Safety Equipment Supply",
    category: "Hardware",
    year: "2022",
    description: "Complete safety equipment and materials for major construction projects.",
    image: "/projects/safety.jpg",
  },
  {
    id: 17,
    title: "Sustainable Building Materials",
    category: "Hardware",
    year: "2021",
    description: "Eco-friendly building materials supply for green building projects.",
    image: "/projects/eco-materials.jpg",
  },
  {
    id: 18,
    title: "Professional Tools Distribution",
    category: "Hardware",
    year: "2021",
    description: "Professional-grade tools distribution for construction companies.",
    image: "/projects/tools.jpg",
  },
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="relative bg-[#1e3a8a] pt-[88px]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/90 to-[#3b82f6]/80">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-5" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.3, 0.5]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
        />
      </div>

      {/* Hero Section */}
      <div className="relative pt-12 pb-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-center font-title mb-4"
          >
            <span className="block text-[#caa04d] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#caa04d] to-[#e2c68d] filter drop-shadow-lg">
              Our Projects
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-white/80 text-center max-w-3xl mx-auto"
          >
            A showcase of our work in Construction, Real Estate, and Hardware.
          </motion.p>
        </div>
      </div>

      {/* Filter Menu */}
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-slight transition-all duration-300 ${
                activeCategory === category
                ? 'bg-[#caa04d] text-white'
                : 'text-white/80 hover:bg-white/10 backdrop-blur-md border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              className="backdrop-blur-md bg-white/10 rounded-slight border border-white/10 overflow-hidden group cursor-pointer"
            >
              <div className="h-64 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-[#caa04d] mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.category} · {project.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="backdrop-blur-md bg-white/10 rounded-slight border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-[#caa04d]">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white/60 hover:text-white/90"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover rounded-slight mb-6"
              />
              <div className="space-y-4">
                <p className="text-white/80">{selectedProject.description}</p>
                <div className="flex gap-4">
                  <span className="text-[#caa04d]">{selectedProject.category}</span>
                  <span className="text-white/60">·</span>
                  <span className="text-white/80">{selectedProject.year}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="bg-[#caa04d] text-white px-8 py-4 rounded-slight hover:bg-[#caa04d]/80 transition-all duration-300">
            Request a Quote
          </button>
          <button className="backdrop-blur-md bg-white/10 text-white border border-white/10 px-8 py-4 rounded-slight hover:bg-white/20 transition-all duration-300">
            Explore Our Services
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#caa04d]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
    </div>
  );
};

export default ProjectsPage;
