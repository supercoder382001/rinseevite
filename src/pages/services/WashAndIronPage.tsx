
import React from 'react';
import { Shirt } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import AnimatedSection from '@/components/AnimatedSection';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Sample data based on the new structure
const washAndIronItems = [
  {
    "name": "Muffler",
    "finalprice": 30,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Shalya/Shawl",
    "finalprice": 35,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Shirt",
    "finalprice": 35,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Jeans Crease",
    "finalprice": 50,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Jeans Flat Front",
    "finalprice": 45,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Trackpant",
    "finalprice": 50,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "LongCoat",
    "finalprice": 200,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Dhoti",
    "finalprice": 50,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Pyjama",
    "finalprice": 35,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Kurta (Top)",
    "finalprice": 35,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Trousers Flat Front",
    "finalprice": 35,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Trousers Crease",
    "finalprice": 40,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "T-Shirt",
    "finalprice": 30,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Shirt",
    "finalprice": 35,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "T-Shirt",
    "finalprice": 30,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Kurta",
    "finalprice": 40,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Pyjama",
    "finalprice": 35,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Sweatshirt",
    "finalprice": 80,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Petticoat",
    "finalprice": 30,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Night Gown",
    "finalprice": 40,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Jeans",
    "finalprice": 30,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Shorts",
    "finalprice": 25,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Jeans Crease Front",
    "finalprice": 50,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Blouse",
    "finalprice": 30,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Waist Coat",
    "finalprice": 100,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Skirt",
    "finalprice": 35,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Salwar",
    "finalprice": 35,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Dupatta",
    "finalprice": 30,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Cardigan",
    "finalprice": 90,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Jumpsuit",
    "finalprice": 90,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Trouser Crease Front",
    "finalprice": 40,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Trouser Flat Front",
    "finalprice": 35,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Jeggings",
    "finalprice": 45,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Saree Plain",
    "finalprice": 90,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Saree Plain - 2 Fold",
    "finalprice": 75,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Scarf",
    "finalprice": 25,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Shawl/Stole",
    "finalprice": 35,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Jacket",
    "finalprice": 175,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Saree - Zaree",
    "finalprice": 140,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Trousers",
    "finalprice": 30,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "T-Shirt",
    "finalprice": 25,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Shirt",
    "finalprice": 25,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Kurta",
    "finalprice": 25,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Jumpsuit",
    "finalprice": 30,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Jacket",
    "finalprice": 125,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Dress/Frock",
    "finalprice": 40,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Girls Choli",
    "finalprice": 30,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Coat/Blazer",
    "finalprice": 150,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Bath Towel",
    "finalprice": 50,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Bed Sheet Double",
    "finalprice": 80,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Bed Sheet Single",
    "finalprice": 50,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Cushion Cover",
    "finalprice": 30,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Girls Lehenga",
    "finalprice": 50,
    "category": "Kids",
    "type": "Wash & Iron"
  },
  {
    "name": "Curtain > 9 ft",
    "finalprice": 200,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Hand Towel",
    "finalprice": 25,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Pillow Cover Single",
    "finalprice": 25,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Table Cloth",
    "finalprice": 50,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Table Mat",
    "finalprice": 25,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Blanket Double",
    "finalprice": 150,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Quilt Double",
    "finalprice": 150,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Quilt Single",
    "finalprice": 120,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Curtain 6-9 ft",
    "finalprice": 125,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Curtain < 6 ft",
    "finalprice": 75,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Blanket Cover Double",
    "finalprice": 125,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Blanket Cover Single",
    "finalprice": 75,
    "category": "Household",
    "type": "Wash & Iron"
  },
  {
    "name": "Dress",
    "finalprice": 75,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Shorts/Capris",
    "finalprice": 30,
    "category": "Men",
    "type": "Wash & Iron"
  },
  {
    "name": "Jeans Flat Front",
    "finalprice": 40,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Leggings",
    "finalprice": 30,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Longcoat",
    "finalprice": 150,
    "category": "Women",
    "type": "Wash & Iron"
  },
  {
    "name": "Blanket Single",
    "finalprice": 100,
    "category": "Household",
    "type": "Wash & Iron"
  }
];

const WashAndIronPage = () => {
  // Processing data from washAndIronData.json
  const processSteps = [
    {
      title: "Collection & Sorting",
      description: "We collect your garments and carefully sort them by fabric type, color, and washing requirements."
    },
    {
      title: "Washing & Treatment",
      description: "Your clothes are washed with premium detergents at the optimal temperature, with stain treatment as needed."
    },
    {
      title: "Professional Ironing",
      description: "Each item is professionally ironed with precision, paying special attention to collars, cuffs, and pleats."
    },
    {
      title: "Quality Check & Delivery",
      description: "After a thorough quality inspection, your fresh, crisp garments are neatly packaged for delivery."
    }
  ];

  const pricingItems = [
    {
      name: "Basic Wash & Iron",
      price: "$4.50 per item",
      description: "Professional washing and precise ironing for everyday garments."
    },
    {
      name: "Express Service",
      price: "$6.50 per item",
      description: "Quick turnaround for when you need your clothes faster."
    },
    {
      name: "Premium Care",
      price: "$8.50 per item",
      description: "Extra attention for formal and delicate garments requiring special care."
    }
  ];

  // Create categories from the data
  const categorizedItems = {
    "Men": washAndIronItems.filter(item => item.category === "Men"),
    "Women": washAndIronItems.filter(item => item.category === "Women"),
    "Kids": washAndIronItems.filter(item => item.category === "Kids"),
    "Household": washAndIronItems.filter(item => item.category === "Household")
  };

  // Additional content component with pricing table
  const PricingTable = () => (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Detailed Pricing</h3>
      
      {Object.entries(categorizedItems).map(([category, items]) => (
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
                      {items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell>₹{item.finalprice}</TableCell>
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

  const AdditionalContent = () => (
    <AnimatedSection>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Wash & Iron Excellence</h2>
        <p className="text-lg mb-8 text-center">
          Our wash and iron service combines thorough cleaning with professional pressing, 
          giving your clothes that fresh, crisp look that makes all the difference.
        </p>
        
        <PricingTable />
      </div>
    </AnimatedSection>
  );

  return (
    <ServicePageTemplate
      icon={Shirt}
      title="Wash & Iron Service"
      description="Professional washing and ironing services for your garments. We clean and press your clothes to perfection, giving them a crisp, fresh appearance."
      image="/images/washiron.png"
      processSteps={processSteps}
      pricingItems={pricingItems}
      additionalInfo="All prices are subject to change. Minimum order of 5 items for standard service."
      additionalImages={[
        "https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      ]}
      additionalContent={<AdditionalContent />}
    />
  );
};

export default WashAndIronPage;
