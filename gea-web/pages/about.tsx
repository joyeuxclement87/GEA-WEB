import { FaLinkedin } from 'react-icons/fa';

const values = [
  { title: 'Professionalism', description: 'Delivering excellence in every project' },
  { title: 'Integrity', description: 'Building trust through transparent operations' },
  { title: 'Innovation', description: 'Embracing modern solutions and technologies' },
  { title: 'Sustainability', description: 'Creating lasting impact for future generations' },
];

const milestones = [
  { year: '2018', title: 'Company Founded', description: 'Started operations in Kigali' },
  { year: '2020', title: 'Market Expansion', description: 'Extended services across Rwanda' },
  { year: '2022', title: 'Major Projects', description: 'Completed 50+ successful projects' },
  { year: '2023', title: 'Innovation Award', description: 'Recognized for excellence in engineering' },
];

const team = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    image: '/team/ceo.jpg',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  // Add more team members...
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark text-center font-title mb-4">
            About Global Engineering Agency
          </h1>
          <p className="text-lg lg:text-xl text-neutral-text text-center max-w-3xl mx-auto">
            Delivering professional construction, real estate, and hardware solutions across Rwanda.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-md p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-blue-dark mb-4">Our Mission</h2>
            <p className="text-neutral-text">
              To provide high-quality, reliable, and innovative engineering solutions for Rwanda's growth.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-dark mb-4">Our Vision</h2>
            <p className="text-neutral-text">
              To be Rwanda's leading engineering, construction, real estate, and hardware provider.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-dark mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-white/20 p-4 rounded-lg">
                  <h3 className="font-bold text-neutral-dark mb-2">{value.title}</h3>
                  <p className="text-neutral-text">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-neutral-dark text-center mb-12">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-primary text-2xl font-bold">{milestone.year}</span>
              <h3 className="text-lg font-bold text-neutral-dark mt-2">{milestone.title}</h3>
              <p className="text-neutral-text mt-2">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-neutral-dark text-center mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/30 backdrop-blur-md rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-neutral-dark">{member.name}</h3>
              <p className="text-neutral-text mb-4">{member.position}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-dark hover:text-primary transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <button className="bg-gradient-to-r from-blue-dark to-blue-light text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Contact Us for Consultation
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
