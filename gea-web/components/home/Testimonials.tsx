import { FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Global Engineering Agency delivered our project on time and beyond expectations.",
    author: "John Smith",
    position: "CEO, Smith Enterprises",
    image: "/testimonials/john.jpg"
  },
  // Add more testimonials...
];

const Testimonials = () => (
  <section className="relative py-24 overflow-hidden bg-[#1e3a8a]">
    {/* Background layers */}
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

    <div className="container mx-auto px-4 relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        <span className="block text-[#caa04d] font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#caa04d] to-[#e2c68d] filter drop-shadow-lg">
          What Our Clients Say
        </span>
      </motion.h2>

      <div className="flex overflow-x-auto gap-6 pb-6 -mx-4 px-4 hide-scrollbar">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex-none w-full md:w-1/2 lg:w-1/3"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-md bg-white/10 p-6 rounded-slight hover:bg-white/20 transition-all duration-300 border border-white/10 group"
            >
              <FaQuoteRight className="text-[#caa04d] w-8 h-8 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white/90 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#caa04d]"
                />
                <div className="ml-4">
                  <p className="font-bold text-[#caa04d]">{testimonial.author}</p>
                  <p className="text-sm text-white/70">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#caa04d]/20 rounded-full blur-3xl" />
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
  </section>
);

export default Testimonials;
