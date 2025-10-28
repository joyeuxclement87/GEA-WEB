import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const contactInfo = [
  { icon: FaPhone, title: 'Phone', detail: '+250 788 123 456', href: 'tel:+250788123456' },
  { icon: FaEnvelope, title: 'Email', detail: 'info@globalengineeringagency.com', href: 'mailto:info@globalengineeringagency.com' },
  { icon: FaMapMarkerAlt, title: 'Location', detail: 'KG 33 Avenue Road, Umukindo House, Kigali', href: 'https://maps.google.com/?q=KG+33+Avenue+Road+Gakiriro+Road+Umukindo+house+Kigali+Gasabo' },
  { icon: FaWhatsapp, title: 'WhatsApp', detail: '+250 788 123 456', href: 'https://wa.me/250788123456' }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

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
              Get in Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-white/80 text-center max-w-3xl mx-auto"
          >
            We're here to answer your questions and provide expert guidance.
          </motion.p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-md bg-white/10 p-6 rounded-slight hover:bg-white/20 transition-all duration-300 border border-white/10 group"
            >
              <info.icon className="w-8 h-8 text-[#caa04d] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-[#caa04d] mb-2">{info.title}</h3>
              <p className="text-white/80 group-hover:text-white transition-colors">
                {info.detail}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/10 rounded-slight border border-white/10 p-8"
          >
            <h2 className="text-2xl font-bold text-[#caa04d] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#caa04d] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-slight border border-white/20 focus:border-[#caa04d] bg-white/10 text-white placeholder-white/50"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#caa04d] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-slight border border-white/20 focus:border-[#caa04d] bg-white/10 text-white placeholder-white/50"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#caa04d] mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-slight border border-white/20 focus:border-[#caa04d] bg-white/10 text-white placeholder-white/50"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#caa04d] mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-slight border border-white/20 focus:border-[#caa04d] bg-white/10 text-white placeholder-white/50"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#caa04d] text-white px-8 py-4 rounded-slight hover:bg-[#caa04d]/80 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-full rounded-slight overflow-hidden border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4889797231644!2d30.1239863!3d-1.9436456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5c66d2c8ec7%3A0x0!2sKG+33+Avenue+Road+Gakiriro+Road+Umukindo+house+Kigali+Gasabo!5e0!3m2!1sen!2srw!4v1687543345678!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/10 p-6">
              <h3 className="text-xl font-bold text-[#caa04d] mb-2">Visit Our Office</h3>
              <p className="text-white/80">
                KG 33 Avenue Road Gakiriro Road<br />
                Umukindo house, 2nd floor front wing<br />
                Kigali, Gasabo<br />
                <span className="mt-2 block">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#caa04d]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
    </div>
  );
};

export default ContactPage;
