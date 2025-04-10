import { Download } from 'lucide-react';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, WashingMachine } from "lucide-react";
import WashingMachineAnimation from '../animations/WashingMachineAnimation';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 animate-spin-slow opacity-20">
        <WashingMachine size={60} className="text-laundry-400" />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce-slow opacity-20">
        <WashingMachine size={80} className="text-laundry-400" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse-slow opacity-20">
        <WashingMachine size={40} className="text-laundry-400" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
              <span className="text-laundry-600 block">Fresh Clothes,</span>
              Zero Effort
            </h1>
            <p className="text-xl text-gray-700 mb-8 animate-fade-up">
              Professional laundry and dry cleaning delivered to your doorstep. Save time and enjoy life while we take care of your clothes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button asChild size="lg" className="bg-laundry-600 hover:bg-laundry-700 text-white">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" className="bg-laundry-200 hover:bg-gray-200 text-laundry-600 hover:text-laundry-700">
                <Link to="#download">
                  <Download size={18} />
                    Download Our App
                </Link>
            </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="text-center">
                <div className="font-bold text-2xl text-laundry-600">24h</div>
                <div className="text-sm text-gray-600">Turnaround</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-laundry-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-laundry-600">Free</div>
                <div className="text-sm text-gray-600">Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative animate-fade-in" style={{ animationDelay: '300ms' }}>
            {/* Replaced static image with washing machine animation */}
            <div className="relative z-10 rounded-lg overflow-hidden h-[400px]">
              <WashingMachineAnimation />
            </div>
            
            <div className="absolute top-1/4 -right-8 w-24 h-24 bg-laundry-200 rounded-full z-0 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -left-8 w-32 h-32 bg-laundry-100 rounded-full z-0 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Floating Bubbles */}
            <div className="absolute top-0 left-1/4 w-8 h-8 bg-white/30 rounded-full z-0 animate-float-slow"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/20 rounded-full z-0 animate-float-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/2 w-10 h-10 bg-white/30 rounded-full z-0 animate-float-slow" style={{ animationDelay: '1.7s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
