import { FaTrophy, FaBuilding, FaUsers, FaMedal } from 'react-icons/fa';

const stats = [
  { number: '15+', label: 'Years of Experience', icon: FaTrophy },
  { number: '200+', label: 'Completed Projects', icon: FaBuilding },
  { number: '50+', label: 'Satisfied Clients', icon: FaUsers },
  { number: '10+', label: 'Awards & Recognitions', icon: FaMedal },
];

const Stats = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ number, label, icon: Icon }) => (
          <div key={label} className="bg-white/30 backdrop-blur-md rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-all duration-300">
            <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
            <span className="block text-4xl font-bold text-blue-dark mb-2">{number}</span>
            <span className="text-neutral-text">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
