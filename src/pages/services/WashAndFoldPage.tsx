
import React from 'react';
import { WashingMachine } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import AnimatedSection from '@/components/AnimatedSection';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Sample data based on the new structure
const washAndFoldItems = [
  {
    "name": "Shirt",
    "finalprice": 25,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Half Jacket",
    "finalprice": 100,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Shalya",
    "finalprice": 30,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Trouser",
    "finalprice": 30,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Trackpant",
    "finalprice": 40,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "T-Shirt",
    "finalprice": 25,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Pyjama",
    "finalprice": 25,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Jacket",
    "finalprice": 150,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Shorts",
    "finalprice": 20,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Jeans",
    "finalprice": 35,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Muffler",
    "finalprice": 20,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Jumpsuit",
    "finalprice": 20,
    "category": "Kids",
    "type": "Wash & Fold"
  },
  {
    "name": "Saree Plain",
    "finalprice": 50,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Muffler",
    "finalprice": 30,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Kurta",
    "finalprice": 25,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Petticoat",
    "finalprice": 25,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Blouse",
    "finalprice": 20,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Salwar",
    "finalprice": 25,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Cardigan",
    "finalprice": 60,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Jumpsuit",
    "finalprice": 75,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Sweatshirt",
    "finalprice": 70,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Leggings",
    "finalprice": 20,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Jeggings",
    "finalprice": 50,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Scarf",
    "finalprice": 20,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Shawl/Stole",
    "finalprice": 50,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Night Gown",
    "finalprice": 30,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Jacket",
    "finalprice": 150,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Saree - Zaree",
    "finalprice": 75,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Jacket",
    "finalprice": 100,
    "category": "Kids",
    "type": "Wash & Fold"
  },
  {
    "name": "Dress/Frock",
    "finalprice": 25,
    "category": "Kids",
    "type": "Wash & Fold"
  },
  {
    "name": "TShirt/Top",
    "finalprice": 25,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Trouser/Pant",
    "finalprice": 40,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Sweatshirt",
    "finalprice": 60,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Kurta",
    "finalprice": 25,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Kurta",
    "finalprice": 15,
    "category": "Kids",
    "type": "Wash & Fold"
  },
  {
    "name": "Shorts",
    "finalprice": 15,
    "category": "Kids",
    "type": "Wash & fold"
  },
  {
    "name": "Bath Mat",
    "finalprice": 50,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Bath Towel",
    "finalprice": 30,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Bed Sheet Double",
    "finalprice": 50,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Bed Sheet Single",
    "finalprice": 35,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Cushion Cover",
    "finalprice": 25,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Hand Towel",
    "finalprice": 20,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Pillow Cover Single",
    "finalprice": 20,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Table Cloth",
    "finalprice": 25,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Table Mat",
    "finalprice": 15,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Blanket Double",
    "finalprice": 120,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Quilt Double",
    "finalprice": 125,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Quilt Single",
    "finalprice": 100,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Apron",
    "finalprice": 25,
    "category": "Household",
    "type": "Wash & Fold"
  },
  {
    "name": "Sweater",
    "finalprice": 25,
    "category": "Kids",
    "type": "Wash & Fold"
  },
  {
    "name": "Trouser/Jeans",
    "finalprice": 20,
    "category": "Kids",
    "type": "Wash & Fold"
  },
  {
    "name": "Shorts",
    "finalprice": 20,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Dupatta",
    "finalprice": 20,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "T-Shirt",
    "finalprice": 15,
    "category": "Kids",
    "type": "Wash & Fold"
  },
  {
    "name": "Sweater",
    "finalprice": 75,
    "category": "Men",
    "type": "Wash & Fold"
  },
  {
    "name": "Skirt - Long",
    "finalprice": 39,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Skirt - Short",
    "finalprice": 29,
    "category": "Women",
    "type": "Wash & Fold"
  },
  {
    "name": "Shirt",
    "finalprice": 25,
    "category": "Men",
    "type": "Wash & Fold"
  }
];

const WashAndFoldPage = () => {
  // Process steps and pricing items
  const processSteps = [
    {
      title: "Sort & Inspect",
      description: "We carefully sort your laundry by color, fabric type, and washing requirements, inspecting for stains or special care needs."
    },
    {
      title: "Wash & Dry",
      description: "Using premium detergents and softeners, we clean your clothes at the optimal temperature and then dry them with precision."
    },
    {
      title: "Fold & Package",
      description: "We neatly fold your clothes according to professional standards and package them for delivery or pickup."
    }
  ];

  const pricingItems = [
    {
      name: "Standard Laundry",
      price: "$1.99/lb",
      description: "For everyday clothing items with standard cleaning needs."
    },
    {
      name: "Express Service",
      price: "$2.99/lb",
      description: "Same-day service available when you need your clothes fast."
    },
    {
      name: "Bulk Package",
      price: "$1.49/lb",
      description: "For orders over 20 pounds, enjoy our special bulk rate."
    }
  ];

  // Create categories from the data
  const categorizedItems = {
    "Men": washAndFoldItems.filter(item => item.category === "Men"),
    "Women": washAndFoldItems.filter(item => item.category === "Women"),
    "Kids": washAndFoldItems.filter(item => item.category === "Kids"),
    "Household": washAndFoldItems.filter(item => item.category === "Household")
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
        <h2 className="text-3xl font-bold mb-6 text-center">Our Wash & Fold Service</h2>
        <p className="text-lg mb-8 text-center">
          We take the hassle out of laundry day with our professional wash and fold service. 
          Drop off your dirty clothes and pick them up clean, fresh, and neatly folded.
        </p>
        <PricingTable />
      </div>
    </AnimatedSection>
  );

  return (
    <ServicePageTemplate
      icon={WashingMachine}
      title="Wash & Fold Service"
      description="Professional washing, drying, and folding services for your everyday clothing items. We take care of all your laundry needs so you can focus on what matters most."
      image="/images/washfold.png"
      processSteps={processSteps}
      pricingItems={pricingItems}
      additionalInfo="All prices are subject to change. Minimum order of 10 lbs for standard service."
      additionalImages={[
        "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      ]}
      additionalContent={<AdditionalContent />}
    />
  );
};

export default WashAndFoldPage;
