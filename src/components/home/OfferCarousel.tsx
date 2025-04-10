import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

interface OfferItem {
  id: number;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  textColor: string;
  buttonText: string;
  buttonLink: string;
}

const offerItems: OfferItem[] = [
  {
    id: 1,
    title: "20% OFF First Order",
    description: "Get 20% off on your first laundry service with us. Limited time offer!",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    backgroundColor: "bg-gradient-to-r from-blue-600 to-blue-800",
    textColor: "text-white",
    buttonText: "Claim Offer",
    buttonLink: "/services/wash-and-fold"
  },
  {
    id: 2,
    title: "Premium Dry Cleaning",
    description: "50% off on premium dry cleaning for suits and formal wear this month.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    backgroundColor: "bg-gradient-to-r from-purple-600 to-purple-800",
    textColor: "text-white",
    buttonText: "View Details",
    buttonLink: "/services/dry-cleaning"
  },
  {
    id: 3,
    title: "Monthly Subscription",
    description: "Get unlimited washing for a fixed monthly fee. Save up to 30%!",
    image: "https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    backgroundColor: "bg-gradient-to-r from-emerald-600 to-emerald-800",
    textColor: "text-white",
    buttonText: "Subscribe Now",
    buttonLink: "/packages"
  },
  {
    id: 4,
    title: "Family Package",
    description: "Special family package with 25% discount on all services.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    backgroundColor: "bg-gradient-to-r from-amber-500 to-amber-700",
    textColor: "text-white",
    buttonText: "Explore Package",
    buttonLink: "/packages"
  }
];

const OfferCarousel: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    
    // Auto-scroll every 5 seconds
    const autoScrollInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => {
      api.off("select", handleSelect);
      clearInterval(autoScrollInterval);
    };
  }, [api]);

  return (
    <AnimatedSection className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exclusive deals and promotions to save on your laundry services
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {offerItems.map((offer) => (
                <CarouselItem key={offer.id} className="md:basis-4/5 lg:basis-3/4">
                  <div className={`overflow-hidden rounded-xl shadow-lg ${offer.backgroundColor} h-[400px] md:h-[450px] relative`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
                    <img 
                      src={offer.image} 
                      alt={offer.title} 
                      className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12">
                      <div className={`max-w-lg ${offer.textColor}`}>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">{offer.title}</h3>
                        <p className="text-lg mb-6 opacity-90">{offer.description}</p>
                        <Button asChild className="bg-white text-gray-800 hover:bg-gray-100">
                          <Link to={offer.buttonLink} className="inline-flex items-center">
                            {offer.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static left-0 right-auto border-gray-300 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white" />
              <div className="flex space-x-1">
                {offerItems.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      current === index ? "bg-laundry-600" : "bg-gray-300"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative static right-0 left-auto border-gray-300 bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OfferCarousel;