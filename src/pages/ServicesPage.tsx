
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WashingMachine, AlignJustify, Shirt, Sparkles, Loader, Wind, Award } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/home/CTA';

const serviceCategories = [
  {
    icon: WashingMachine,
    title: "Wash & Fold",
    description: "Our wash and fold service takes care of your everyday laundry needs. We carefully sort, wash, dry, and neatly fold your clothes, using premium detergents and fabric softeners.",
    features: [
      "Careful sorting by color and fabric type",
      "Premium detergents and fabric softeners",
      "Expert stain treatment for common stains",
      "Precise temperature control for each fabric type",
      "Neatly folded and packaged for delivery"
    ],
    link: "/services/wash-and-fold",
    pricing: "/pricing#laundry",
    image: "/images/washandfold.png"
  },
  {
    icon: Shirt,
    title: "Wash & Iron",
    description: "Our wash and iron service provides a complete solution for your garments, from washing to professional pressing, delivering crisp, ready-to-wear clothes.",
    features: [
      "Thorough washing with premium detergents",
      "Professional ironing for perfect results",
      "Steam treatment for stubborn wrinkles",
      "Special attention to collars, cuffs, and details",
      "Hanging or folding as per your preference"
    ],
    link: "/services/wash-and-iron",
    pricing: "/pricing#ironing",
    image: "/images/washandiron.png"
  },
  {
    icon: Shirt,
    title: "Dry Cleaning",
    description: "Our professional dry cleaning service is perfect for delicate garments, formal wear, and specialty fabrics that require careful handling and special cleaning techniques.",
    features: [
      "Gentle cleaning for delicate fabrics",
      "Special care for formal wear and suits",
      "Spot treatment for tough stains",
      "Careful pressing and finishing",
      "Eco-friendly cleaning solutions"
    ],
    link: "/services/dry-cleaning",
    pricing: "/pricing#dry-cleaning",
    image: "/images/drycleaning.png"
  },
  {
    icon: AlignJustify,
    title: "Ironing & Pressing",
    description: "Achieve that crisp, professional look with our expert ironing and pressing service. We pay close attention to every detail, from collars and cuffs to pleats and creases.",
    features: [
      "Professional equipment for perfect results",
      "Hand-pressing for delicate items",
      "Steam treatment for stubborn wrinkles",
      "Special attention to collars, cuffs, and details",
      "Hanging or folding as per your preference"
    ],
    link: "/services/ironing",
    pricing: "/pricing#ironing",
    image: "/images/steamiron.png"
  },
  // {
  //   icon: Sparkles,
  //   title: "Specialty Care",
  //   description: "Our specialty care service handles unique items like wedding dresses, formal gowns, leather goods, household textiles, and other items requiring expert attention.",
  //   features: [
  //     "Wedding dress preservation",
  //     "Careful cleaning of formal gowns and accessories",
  //     "Leather and suede cleaning and conditioning",
  //     "Household items like curtains, bedding, and rugs",
  //     "Expert handling of vintage and heirloom pieces"
  //   ],
  //   link: "/services/specialty",
  //   pricing: "/pricing#specialty"
  // }
];

const benefitItems = [
  {
    icon: Loader,
    title: "Time-Saving",
    description: "Reclaim your free time while we handle your laundry needs."
  },
  {
    icon: Award,
    title: "Professional Quality",
    description: "Experience superior results from our professional equipment and techniques."
  },
  {
    icon: Wind,
    title: "Fresh & Clean",
    description: "Enjoy the fresh scent and clean feel of expertly handled garments."
  }
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-laundry-50 to-laundry-100">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-700 mb-8">
                Professional laundry and dry cleaning services tailored to your needs. 
                We handle everything with care, precision, and attention to detail.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {serviceCategories.map((service, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 150} 
                className={`mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <div className="bg-laundry-100 text-laundry-600 p-5 rounded-full inline-flex mb-4">
                      <service.icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="font-semibold mb-3">Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-laundry-600 mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="bg-laundry-600 hover:bg-laundry-700">
                        <Link to={service.link}>Learn More</Link>
                      </Button>
                      <Button asChild variant="outline" className="border-laundry-600 text-laundry-600">
                        <Link to={service.pricing}>View Pricing</Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      {/* Use placeholder image URLs that match the service category */}
                      <img 
                        // src={`https://source.unsplash.com/random/800x600?${service.title.toLowerCase().replace(/ & /g, ',')}`} 
                        src={service.image}
                        alt={service.title} 
                        className="w-full h-auto object-fill aspect-[11/9]"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefits of Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Why our customers love our professional laundry services
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefitItems.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 150} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-center">
                    <div className="bg-laundry-100 text-laundry-600 p-4 rounded-full inline-flex mb-4">
                      <benefit.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
