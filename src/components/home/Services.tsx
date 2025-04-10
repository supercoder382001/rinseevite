
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WashingMachine, AlignJustify, Shirt, Sparkles } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const serviceItems: ServiceItem[] = [
  {
    icon: WashingMachine,
    title: "Wash & Fold",
    description: "Professional washing, drying, and folding services for your everyday clothing items.",
    link: "/services/wash-and-fold"
  },
  {
    icon: Shirt,
    title: "Wash & Iron",
    description: "Complete garment care with professional washing and expert ironing for ready-to-wear clothes.",
    link: "/services/wash-and-iron"
  },
  {
    icon: Shirt,
    title: "Dry Cleaning",
    description: "Expert dry cleaning for your delicate fabrics, suits, dresses and special garments.",
    link: "/services/dry-cleaning"
  },
  {
    icon: AlignJustify,
    title: "Ironing Service",
    description: "Get perfectly pressed clothes with our professional ironing and garment care.",
    link: "/services/ironing"
  },
  {
    icon: Sparkles,
    title: "Specialty Care",
    description: "Special care for valuable items like wedding dresses, curtains, and household textiles.",
    link: "/services/specialty"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive laundry and cleaning solutions for all your needs
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.slice(0, 6).map((service, index) => (
            <AnimatedSection key={index} delay={index * 150} className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
              <div className="p-6">
                <div className="bg-laundry-100 text-laundry-600 p-3 rounded-full inline-flex mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="text-laundry-600 font-medium hover:text-laundry-700 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300} className="text-center mt-12">
          <Button asChild size="lg" className="bg-laundry-600 hover:bg-laundry-700">
            <Link to="/services">View All Services</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
