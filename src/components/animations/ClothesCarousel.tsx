
import React, { useEffect, useState, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Shirt, Sparkles } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

interface ClothingItem {
  name: string;
  icon: React.ElementType;
  color: string;
  animation: string;
}

const clothingItems: ClothingItem[] = [
  {
    name: "Shirts",
    icon: Shirt,
    color: "bg-blue-100 text-blue-600",
    animation: "hover:rotate-12"
  },
  {
    name: "Pants",
    icon: Shirt,
    color: "bg-green-100 text-green-600",
    animation: "hover:scale-110"
  },
  {
    name: "Dresses",
    icon: Shirt,
    color: "bg-purple-100 text-purple-600",
    animation: "hover:-rotate-12"
  },
  {
    name: "Suits",
    icon: Shirt,
    color: "bg-gray-100 text-gray-600",
    animation: "hover:scale-110"
  },
  {
    name: "Blankets",
    icon: Sparkles,
    color: "bg-yellow-100 text-yellow-600",
    animation: "hover:rotate-12"
  },
  {
    name: "Jackets",
    icon: Shirt,
    color: "bg-red-100 text-red-600",
    animation: "hover:-rotate-12"
  },
  {
    name: "Towels",
    icon: Sparkles,
    color: "bg-teal-100 text-teal-600",
    animation: "hover:scale-110"
  }
];

const ClothesCarousel: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (api) {
      // Auto scroll every 3 seconds
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, 3000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  return (
    <AnimatedSection className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          We Care For All Your Clothing Items
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {clothingItems.map((item, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className={`flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 ${item.animation}`}>
                  <div className={`w-16 h-16 ${item.color} flex items-center justify-center rounded-full mb-3`}>
                    <item.icon size={28} />
                  </div>
                  <p className="font-medium">{item.name}</p>
                  <div className="mt-2 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="inline-block w-1 h-1 bg-laundry-400 rounded-full"></span>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="relative static left-0 right-auto bg-white border-laundry-200 text-laundry-700 hover:bg-laundry-50 mr-2" />
            <CarouselNext className="relative static right-0 left-auto bg-white border-laundry-200 text-laundry-700 hover:bg-laundry-50" />
          </div>
        </Carousel>
      </div>
    </AnimatedSection>
  );
};

export default ClothesCarousel;
