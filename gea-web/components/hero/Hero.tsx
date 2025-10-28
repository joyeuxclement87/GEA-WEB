import { FaBuilding, FaHome, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: FaBuilding, label: 'Construction' },
  { icon: FaHome, label: 'Real Estate' },
  { icon: FaTools, label: 'Hardware Supplies' },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg" // Add engineering/construction background image
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
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

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="font-title mb-6">
              <span className="block text-[#caa04d] font-bold text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#caa04d] to-[#e2c68d] filter drop-shadow-lg">
                Engineering Tomorrow,
              </span>
              <span className="block text-white text-4xl md:text-6xl mt-2 filter drop-shadow-lg">
                Building Today
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive solutions in Construction, Real Estate, and Hardware, tailored for Rwanda's growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <button className="bg-[#caa04d] text-white px-8 py-4 rounded-none hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]">
              Explore Services
            </button>
            <button className="backdrop-blur-md bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-none hover:bg-white/20 transition-all duration-300 transform hover:translate-y-[-2px]">
              Request a Quote
            </button>
          </motion.div>

          {/* Service Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {services.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-md bg-white/10 p-6 rounded-slight hover:bg-white/20 transition-all duration-300 border border-white/10 group"
              >
                <Icon className="w-10 h-10 text-[#caa04d] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-white text-sm font-medium">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#caa04d]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      
      {/* Additional Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
    </div>
  );
};

export default Hero;
