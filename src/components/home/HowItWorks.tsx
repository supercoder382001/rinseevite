
import React from 'react';
import { Package, Truck, ShoppingBag, ThumbsUp } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    icon: ShoppingBag,
    title: "Schedule a Pickup",
    description: "Book a convenient time for us to collect your laundry with our easy online booking system."
  },
  {
    icon: Truck,
    title: "We Collect Your Clothes",
    description: "Our team will arrive at your doorstep to pick up your laundry and dry cleaning items."
  },
  {
    icon: Package,
    title: "Professional Cleaning",
    description: "Your clothes receive expert care with eco-friendly products and professional techniques."
  },
  {
    icon: ThumbsUp,
    title: "Delivery & Satisfaction",
    description: "We deliver your fresh, clean clothes back to you at your preferred time and location."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the convenience of our simple and efficient laundry service process
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 150} className="bg-gray-50 rounded-lg p-6 hover-scale">
              <div className="flex flex-col items-center text-center">
                <div className="bg-laundry-100 text-laundry-600 p-4 rounded-full mb-4">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-0 left-1/4 right-1/4 h-0.5 bg-laundry-200 z-0" style={{ top: '100px' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
