import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const contactInfo = [
  { icon: FaPhone, title: 'Phone', detail: '+250 788 123 456', href: 'tel:+250788123456' },
  { icon: FaEnvelope, title: 'Email', detail: 'info@globalengineeringagency.com', href: 'mailto:info@globalengineeringagency.com' },
  { icon: FaMapMarkerAlt, title: 'Location', detail: 'Kigali, Rwanda', href: 'https://goo.gl/maps/yourlink' },
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-dark text-center font-title mb-4">
            Get in Touch
          </h1>
          <p className="text-lg lg:text-xl text-neutral-text text-center max-w-2xl mx-auto">
            We're here to answer your questions and provide expert guidance.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.href}
              className="bg-white/30 backdrop-blur-md rounded-xl shadow-md p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <info.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-neutral-dark mb-2">{info.title}</h3>
              <p className="text-neutral-text group-hover:text-blue-dark transition-colors">
                {info.detail}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white/30 backdrop-blur-md rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-neutral-dark mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all bg-white/50"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            {/* Add similar input fields for email, phone, message */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-dark to-blue-light text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=your-map-embed-url"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white/30 backdrop-blur-md p-6">
            <h3 className="text-xl font-bold text-neutral-dark mb-2">Visit Our Office</h3>
            <p className="text-neutral-text">
              Monday - Friday: 8:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 2:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
