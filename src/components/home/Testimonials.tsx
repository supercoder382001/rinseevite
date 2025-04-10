
import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import StaggeredSection from '../StaggeredSection';

const testimonials = [
  {
    name: "Akash Singh",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    role: "Regular Customer",
    quote: "FreshPress has completely transformed my weekly routine. No more spending weekends doing laundry! Their service is fast, reliable, and my clothes always come back perfectly clean and neatly folded.",
    rating: 5
  },
  {
    name: "Manas Uttam",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    role: "Business Professional",
    quote: "As someone who needs their suits perfectly pressed, I've been incredibly impressed with the dry cleaning service. The attention to detail is remarkable, and the pickup and delivery make it so convenient.",
    rating: 5
  },
  {
    name: "Prabhat Kumar",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    role: "Busy Parent",
    quote: "With three kids, laundry was overwhelming. FreshPress has been a lifesaver for our family. The staff is friendly, the service is consistent, and the subscription plan saves us money every month.",
    rating: 5
  }
];

const renderStars = (count: number) => {
  return Array(count)
    .fill(0)
    .map((_, i) => (
      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
    ));
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 200} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
                
                <blockquote className="text-gray-700 italic mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
