import { FaQuoteRight } from 'react-icons/fa';

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
  <section className="py-20 bg-blue-50/50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-neutral-dark mb-12">What Our Clients Say</h2>
      <div className="flex overflow-x-auto gap-6 pb-6 -mx-4 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-none w-full md:w-1/2 lg:w-1/3"
          >
            <div className="bg-white/30 backdrop-blur-md rounded-xl shadow-md p-6 lg:p-8">
              <FaQuoteRight className="text-primary w-8 h-8 mb-4" />
              <p className="text-neutral-text mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-bold text-neutral-dark">{testimonial.author}</p>
                  <p className="text-sm text-neutral-text">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
