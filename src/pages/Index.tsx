
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, WashingMachine, Shirt, AlignJustify, Sparkles } from 'lucide-react';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BubbleAnimation from '@/components/animations/BubbleAnimation';
import ClothesCarousel from '@/components/animations/ClothesCarousel';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import FloatingBubbles from '@/components/animations/FloatingBubbles';
import WashingAnimations from '@/components/animations/WashingAnimations';
import OfferCarousel from '@/components/home/OfferCarousel';

const Index = () => {
  // Simulate page transition animation
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add classes to trigger animations
    const body = document.body;
    body.classList.add('page-transition-in');
    
    return () => {
      body.classList.remove('page-transition-in');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <FloatingBubbles />
        <section className="py-8 bg-laundry-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-laundry-600 hover:bg-laundry-700 gap-2">
                <a href="#" className="flex items-center">
                  <Download className="mr-2" size={20} />
                  Download Our App
                </a>
              </Button>
            </div>
          </div>
        </section>
        <BubbleAnimation />
        <HowItWorks />
        <WashingAnimations />
        <ServicesShowcase />
        <ClothesCarousel />
        {/* <Services /> */}
        <OfferCarousel />
        <Testimonials />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
