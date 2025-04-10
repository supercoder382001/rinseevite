
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/home/CTA';
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from '@/hooks/use-mobile';

interface ProcessStep {
  title: string;
  description: string;
}

interface PricingItem {
  name: string;
  price: string;
  description: string;
}

interface ServicePageTemplateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  processSteps: ProcessStep[];
  pricingItems: PricingItem[];
  additionalInfo?: string;
  additionalImages?: string[];
  additionalContent?: React.ReactNode;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  icon: Icon,
  title,
  description,
  image,
  processSteps,
  pricingItems,
  additionalInfo,
  additionalImages = [],
  additionalContent
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-laundry-50 to-laundry-100">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="bg-laundry-100 text-laundry-600 p-5 rounded-full inline-flex mb-4">
                <Icon size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl text-gray-700 mb-8">
                {description}
              </p>
              <Button asChild size="lg" className="bg-laundry-600 hover:bg-laundry-700 gap-2">
                <Link to="#download">
                  <Download size={18} />
                  Download Our App
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Service Image Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="rounded-xl overflow-hidden shadow-lg">
              <AspectRatio ratio={16/9}>
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                How we deliver exceptional {title.toLowerCase()} services
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 150} 
                  className="relative"
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="absolute -top-5 -left-5 bg-laundry-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 mt-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        {additionalContent && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              {additionalContent}
            </div>
          </section>
        )}

        {/* Additional Images Gallery Section */}
        {additionalImages.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Gallery</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  See our {title.toLowerCase()} service in action
                </p>
              </AnimatedSection>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalImages.map((img, index) => (
                  <AnimatedSection 
                    key={index} 
                    delay={index * 100} 
                    className="hover-scale"
                  >
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <AspectRatio ratio={4/3}>
                        <img 
                          src={img} 
                          alt={`${title} service ${index + 1}`}
                          className="w-full h-full object-cover" 
                        />
                      </AspectRatio>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Pricing</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transparent and competitive pricing for our {title.toLowerCase()} services
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingItems.map((item, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 150}
                >
                  <Card className="h-full hover:shadow-md transition-shadow border-t-4 border-t-laundry-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-3xl font-bold text-laundry-600 mb-4">{item.price}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {additionalInfo && (
              <AnimatedSection className="mt-8 text-center text-gray-600 p-4 bg-laundry-50 rounded-lg max-w-3xl mx-auto">
                <p>{additionalInfo}</p>
              </AnimatedSection>
            )}
          </div>
        </section>

        {/* Download App Section */}
        <section id="download" className="py-16 bg-laundry-600 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Download Our App</h2>
              <p className="text-xl mb-8">
                Get your laundry done with just a few taps. Schedule pickups, track orders, and pay securely.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <a href="#" className="gap-2">
                    <Download size={18} />
                    App Store
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="#" className="gap-2">
                    <Download size={18} />
                    Google Play
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
