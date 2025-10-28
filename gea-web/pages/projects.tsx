import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const categories = ["All", "Construction", "Real Estate", "Hardware"];

const projects = [
  {
    id: 1,
    title: "Kigali Heights Development",
    category: "Construction",
    year: "2023",
    description: "Modern commercial complex in the heart of Kigali.",
    image: "/projects/kigali-heights.jpg",
  },
  // Add more projects...
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark text-center font-title mb-4">
            Our Projects
          </h1>
          <p className="text-lg lg:text-xl text-neutral-text text-center max-w-2xl mx-auto">
            A showcase of our work in Construction, Real Estate, and Hardware.
          </p>
        </div>
      </div>

      {/* Filter Menu */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                ? 'bg-blue-light/10 text-blue-dark border-b-2 border-primary'
                : 'text-neutral-text hover:bg-blue-light/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white/30 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
              <div className="h-64 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm">{project.category} · {project.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-neutral-dark">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-neutral-text hover:text-neutral-dark"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover rounded-xl mb-6"
              />
              <div className="space-y-4">
                <p className="text-neutral-text">{selectedProject.description}</p>
                <div className="flex gap-4">
                  <span className="text-blue-dark">{selectedProject.category}</span>
                  <span className="text-neutral-text">·</span>
                  <span className="text-neutral-text">{selectedProject.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-dark to-blue-light text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Request a Quote
          </button>
          <button className="border-2 border-blue-light text-blue-dark px-8 py-3 rounded-full hover:bg-blue-light hover:text-white transition-all duration-300 transform hover:scale-105">
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
