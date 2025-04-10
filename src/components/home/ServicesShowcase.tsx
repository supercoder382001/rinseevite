
import React from 'react';
import { WashingMachine, Shirt, AlignJustify, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../AnimatedSection';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
  color: string;
  hoverEffect: string;
}

const services: ServiceItem[] = [
  {
    icon: WashingMachine,
    title: "Wash & Fold",
    description: "Professional washing and folding for your everyday laundry needs.",
    link: "/services/laundry",
    color: "from-blue-500 to-blue-600",
    hoverEffect: "hover:shadow-blue-200"
  },
  {
    icon: Shirt,
    title: "Dry Cleaning",
    description: "Expert care for your delicate and special garments.",
    link: "/services/dry-cleaning",
    color: "from-purple-500 to-purple-600",
    hoverEffect: "hover:shadow-purple-200"
  },
  {
    icon: AlignJustify,
    title: "Ironing",
    description: "Perfect pressing for a crisp, professional look.",
    link: "/services/ironing",
    color: "from-amber-500 to-amber-600",
    hoverEffect: "hover:shadow-amber-200"
  },
  {
    icon: Sparkles,
    title: "Specialty Care",
    description: "Special attention for unique and valuable items.",
    link: "/services/specialty",
    color: "from-green-500 to-green-600",
    hoverEffect: "hover:shadow-green-200"
  }
];

const ServicesShowcase: React.FC = () => {
  return (
    <AnimatedSection className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services We Offer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive laundry solutions to meet all your cleaning needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="group">
              <div 
                className={`rounded-xl overflow-hidden transition-all duration-500 transform group-hover:scale-105 h-full bg-gradient-to-br ${service.color} text-white shadow-lg ${service.hoverEffect} hover:shadow-xl`}
              >
                <div className="p-8 flex flex-col items-center text-center h-full">
                  <div className="bg-white/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="mb-6">{service.description}</p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center font-medium group-hover:underline">
                      Learn More 
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                  
                  {/* Animated bubble elements */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute top-10 left-5 w-6 h-6 bg-white/20 rounded-full group-hover:translate-y-10 transition-transform duration-700"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center text-laundry-600 font-bold hover:text-laundry-700 text-lg transition-colors"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesShowcase;
