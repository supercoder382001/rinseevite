
import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import AnimatedSection from '@/components/AnimatedSection';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import specialtyCareData from '@/data/specialtyCareData.json';

const SpecialtyServicePage = () => {
  const { processSteps, pricingItems, services } = specialtyCareData;

  // Create categories manually for better organization
  const categorizedServices = {
    "Wedding Attire": services.filter(service => 
      service.serviceType === "Wedding Attire"),
    "Formal Attire": services.filter(service => 
      service.serviceType === "Formal Attire"),
    "Designer Items": services.filter(service => 
      service.serviceType === "Designer Items"),
    "Leather & Suede": services.filter(service => 
      service.serviceType === "Leather & Suede"),
    "Fur Items": services.filter(service => 
      service.serviceType === "Fur Items"),
    "Household Textiles": services.filter(service => 
      service.serviceType === "Household Textiles"),
    "Heirloom/Vintage": services.filter(service => 
      service.serviceType === "Heirloom/Vintage"),
    "Restoration Services": services.filter(service => 
      service.serviceType === "Restoration Services")
  };

  const PricingTable = () => (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-center">Detailed Pricing</h3>
      
      {Object.entries(categorizedServices).map(([category, items]) => (
        items.length > 0 && (
          <div key={category} className="mb-8">
            <h4 className="text-xl font-semibold mb-3">{category}</h4>
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <ScrollArea className="w-full h-[300px]">
                <div className="min-w-full">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {items.map((service, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{service.item}</TableCell>
                          <TableCell>{service.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        )
      ))}
    </div>
  );

  const additionalImages = [
    "https://source.unsplash.com/random/800x600?wedding,dress",
    "https://source.unsplash.com/random/800x600?leather,jacket",
    "https://source.unsplash.com/random/800x600?curtains,drapes"
  ];

  const AdditionalContent = () => (
    <AnimatedSection>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Specialty Care Expertise</h2>
        
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <AspectRatio ratio={1/1}>
                <img 
                  src="https://source.unsplash.com/random/600x600?wedding,dress,white" 
                  alt="Wedding dress preservation" 
                  className="w-full h-full object-cover rounded-lg shadow-md" 
                />
              </AspectRatio>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Heart className="text-pink-500 mr-2 h-5 w-5" />
                Wedding Dress Preservation
              </h3>
              <p className="mb-4">
                Your wedding dress is more than just a garment—it's a treasured memory. Our museum-quality preservation process ensures your gown retains its beauty for generations.
              </p>
              <p>
                Each dress is carefully assessed, hand-cleaned, and treated for stains before being wrapped in acid-free tissue and placed in a preservation chest that protects against light, air, and moisture damage.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-6 text-center">Our Specialty Services Include</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-laundry-600">Heirloom Restoration</h4>
              <p className="text-sm">
                Gentle cleaning and restoration of antique and heirloom textiles, including lace, quilts, and vintage garments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-laundry-600">Leather & Suede Care</h4>
              <p className="text-sm">
                Professional cleaning, conditioning, and restoration for leather jackets, suede skirts, and accessories.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-laundry-600">Household Textiles</h4>
              <p className="text-sm">
                Specialized cleaning for draperies, comforters, bedspreads, and area rugs that are too large for home washing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-laundry-600">Designer Garments</h4>
              <p className="text-sm">
                Expert care for high-end and designer clothing, with attention to unique fabrics, embellishments, and construction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-laundry-600">Costume Cleaning</h4>
              <p className="text-sm">
                Specialized care for theatrical costumes, historical reproductions, and unique garments with special finishes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold mb-2 text-laundry-600">Storage Solutions</h4>
              <p className="text-sm">
                Long-term preservation and storage options for seasonal items, including proper packaging to prevent damage.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-laundry-50 p-6 rounded-lg mb-10">
          <h3 className="text-xl font-semibold mb-4 text-center">Our Specialty Care Promise</h3>
          <p className="text-center mb-0">
            When you entrust us with your most precious garments and textiles, we treat them with the same care and attention to detail that we would give to our own treasured items. If you're ever not completely satisfied with our specialty cleaning services, we'll make it right.
          </p>
        </div>
        
        <PricingTable />
      </div>
    </AnimatedSection>
  );

  return (
    <ServicePageTemplate
      icon={Sparkles}
      title="Specialty Care Service"
      description="Special care for valuable items like wedding dresses, curtains, and household textiles. Our experts handle your most precious garments with the attention they deserve."
      image="https://source.unsplash.com/random/1200x600?wedding,dress,specialty,cleaning"
      processSteps={processSteps}
      pricingItems={pricingItems}
      additionalInfo="Free consultation and quote available for all specialty items. Preservation packages include acid-free tissue and sealed containers to prevent aging and yellowing."
      additionalImages={additionalImages}
      additionalContent={<AdditionalContent />}
    />
  );
};

export default SpecialtyServicePage;
