import { Download } from 'lucide-react';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-laundry-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <AnimatedSection className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Fresh, Clean Clothes Without the Hassle?</h2>
            <p className="text-xl text-laundry-100 mb-0">
              Join thousands of satisfied customers who have reclaimed their time by trusting us with their laundry needs.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200} className="md:w-1/3 flex justify-center md:justify-end">
            <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-laundry-600 hover:text-laundry-700">
                <Link to="#download">
                  <Download size={18} />
                    Download Our App
                </Link>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTA;
