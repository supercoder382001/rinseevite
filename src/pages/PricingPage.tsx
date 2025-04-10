
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X, HelpCircle, Package } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import StaggeredSection from '@/components/StaggeredSection';
import CTA from '@/components/home/CTA';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Import service data
import washAndFoldData from '@/data/washAndFoldData.json';
import washAndIronData from '@/data/washAndIronData.json';
import dryCleaningData from '@/data/dryCleaningData.json';
import ironingServiceData from '@/data/ironingServiceData.json';
import specialtyCareData from '@/data/specialtyCareData.json';

// Service pricing data for tabs
const pricingCategories = [
  {
    id: "laundry",
    name: "Wash & Fold",
    data: washAndFoldData,
    items: [
      { name: "Regular Laundry (per KG)", price: "₹ 75.00" },
      { name: "Shirt/Tshirt", price: "₹ 25.00" },
      { name: "Leggings", price: "₹ 20.00" },
      { name: "Towels", price: "₹ 30.00" },
      { name: "Bed Sheet", price: "₹ 35.00" }
    ]
  },
  {
    id: "wash-iron",
    name: "Wash & Iron",
    data: washAndIronData,
    items: [
      { name: "Regular Laundry (per KG)", price: "₹ 109" },
      { name: "Shirt/Tshirt", price: "₹ 35.00" },
      { name: "Jeans", price: "₹ 45.00" },
      { name: "Jeggings", price: "₹ 45.00" },
      { name: "Bed Sheet", price: "₹ 50.00" }
    ]
  },
  {
    id: "dry-cleaning",
    name: "Dry Cleaning",
    data: dryCleaningData,
    items: [
      { name: "Shirts/Blouses", price: "₹ 104" },
      { name: "Blazer", price: "₹ 279" },
      { name: "Lehenga", price: "₹ 359" },
      { name: "Saree", price: "₹ 179" },
      { name: "Bed Sheet", price: "₹ 199" }
    ]
  },
  {
    id: "ironing",
    name: "Ironing & Pressing",
    data: ironingServiceData,
    items: [
      { name: "Shirt/Tshirt", price: "₹ 17.00" },
      { name: "Jeans", price: "₹ 12.00" },
      { name: "Saree", price: "₹ 89.00" },
      { name: "Ladies Suit", price: "₹ 149.00" },
      { name: "Bed Sheet", price: "₹ 59.00" }
    ]
  },
  // {
  //   id: "specialty",
  //   name: "Specialty Care",
  //   data: specialtyCareData,
  //   items: [
  //     { name: "Wedding Dress", price: "From $99.95" },
  //     { name: "Evening Gowns", price: "From $49.95" },
  //     { name: "Leather/Suede Items", price: "From $59.95" },
  //     { name: "Curtains (per panel)", price: "From $24.95" },
  //     { name: "Area Rugs (per sq ft)", price: "$1.95" }
  //   ]
  // }
];

// Subscription plans
const subscriptionPlans = [
  {
    name: "Basic",
    price: "₹999",
    period: "/mo",
    description: "50 pieces per month",
    features: [
      "15 lbs of wash & fold per month",
      "Free pickup and delivery",
      "48-hour turnaround",
      "Standard cleaning products",
      "Online account management",
    ],
    notIncluded: [
      "Dry cleaning credits",
      "Priority scheduling",
      "Premium cleaning products",
      "Same-day service",
      "Dedicated account manager",
    ],
    popular: false,
    buttonText: "Choose Basic"
  },
  {
    name: "Premium",
    price: "₹1499",
    period: "/mo",
    description: "100 pieces per month",
    features: [
      "25 lbs of wash & fold per month",
      "Free pickup and delivery",
      "24-hour turnaround",
      "Premium cleaning products",
      "Online account management",
      "5 dry cleaning credits per month",
      "Priority scheduling",
    ],
    notIncluded: [
      "Same-day service",
      "Dedicated account manager",
    ],
    popular: true,
    buttonText: "Choose Premium"
  },
  {
    name: "Ultimate",
    price: "₹2499",
    period: "/mo",
    description: "200 pieces per month",
    features: [
      "40 lbs of wash & fold per month",
      "Free pickup and delivery",
      "24-hour turnaround",
      "Premium cleaning products",
      "Online account management",
      "10 dry cleaning credits per month",
      "Priority scheduling",
      "Same-day service available",
      "Dedicated account manager",
    ],
    notIncluded: [],
    popular: false,
    buttonText: "Choose Ultimate"
  },
  {
    name: "Student",
    price: "₹799",
    period: "/mo",
    description: "40 pieces per month",
    features: [
      "Budget-friendly for students",
      "Valid student ID required",
      "Weekly pickup and delivery",
      "Standard cleaning products",
      "Mobile app scheduling"
    ],
    notIncluded: [
      "Priority service",
      "Express turnaround",
      "Premium cleaning products"
    ],
    popular: false,
    buttonText: "Choose Student"
  },
  {
    name: "Business",
    price: "₹4999",
    period: "/mo",
    description: "300 pieces per month",
    features: [
      "Perfect for small businesses",
      "Multi-user accounts",
      "Account manager assigned",
      "Express service available",
      "Bulk discounts available",
      "Custom pickup schedule"
    ],
    notIncluded: [],
    popular: false,
    buttonText: "Choose Business"
  }
];

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState("laundry");
  const [showDetailedPricing, setShowDetailedPricing] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL and scroll to it
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setActiveTab(id);
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setShowDetailedPricing(false);
  };

  const toggleDetailedPricing = () => {
    setShowDetailedPricing(!showDetailedPricing);
  };

  // Function to categorize services
  const categorizeServices = (services: any[]) => {
    const categories: Record<string, any[]> = {
      "Men": [],
      "Women": [],
      "Kids": [],
      "Household": []
    };

    services.forEach(service => {
      const category = service.category || "Uncategorized";
      if (categories[category]) {
        categories[category].push(service);
      } else {
        categories["Uncategorized"] = categories["Uncategorized"] || [];
        categories["Uncategorized"].push(service);
      }
    });

    return categories;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-laundry-50 to-laundry-100">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Pricing</h1>
              <p className="text-xl text-gray-700 mb-0">
                Transparent and competitive pricing for all your laundry and dry cleaning needs
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* A-la-carte Pricing Section */}
        <section className="py-16 bg-white" id="a-la-carte">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">A-la-carte Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Individual pricing for our services without a subscription
              </p>
            </AnimatedSection>
            
            {/* Pricing Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-4">
                {pricingCategories.map((category) => (
                  <button
                    key={category.id}
                    id={category.id}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeTab === category.id
                        ? 'bg-laundry-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => handleTabChange(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Pricing Tables */}
            <AnimatedSection>
              <div className="max-w-3xl mx-auto">
                {pricingCategories.map((category) => (
                  <div 
                    key={category.id} 
                    className={activeTab === category.id ? 'block' : 'hidden'}
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="bg-laundry-600 text-white py-4 px-6">
                        <h3 className="text-xl font-semibold">{category.name} Pricing</h3>
                      </div>
                      
                      <div className="divide-y divide-gray-200">
                        {category.items.map((item, index) => (
                          <div key={index} className="flex justify-between py-4 px-6">
                            <span className="text-gray-700">{item.name}</span>
                            <span className="font-semibold">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button 
                        onClick={toggleDetailedPricing} 
                        variant="outline" 
                        className="mb-4"
                      >
                        {showDetailedPricing ? "Hide Detailed Pricing" : "View Detailed Pricing"}
                      </Button>
                      
                      {showDetailedPricing && (
                        <div className="mt-8">
                          {category.data && category.data.services && (
                            <div>
                              {Object.entries(categorizeServices(category.data.services)).map(([categoryName, items]) => 
                                items.length > 0 && (
                                  <div key={categoryName} className="mb-8">
                                    <h4 className="text-xl font-semibold mb-3">{categoryName}</h4>
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
                                                  <TableCell className="font-medium">{item.item || item.name}</TableCell>
                                                  <TableCell>{item.price || `₹${item.finalprice}`}</TableCell>
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
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      
                      <Button asChild className="bg-laundry-600 hover:bg-laundry-700">
                        <Link to="/booking">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-sm text-gray-500 text-center max-w-3xl mx-auto">
                <p>Prices may vary based on specific requirements and condition of items. Additional charges may apply for heavily soiled items or special handling requests.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Subscription Plans Section */}
        <section className="py-16 bg-gray-50" id="subscriptions">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Monthly Subscription Plans</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Save money and enjoy regular service with our convenient subscription options
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {subscriptionPlans.slice(0, 3).map((plan, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 150} 
                  className={`rounded-xl overflow-hidden shadow-lg relative transition-transform duration-300 hover:-translate-y-2 ${
                    plan.popular ? 'ring-2 ring-laundry-600' : 'bg-white'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-laundry-600 text-white text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-6 ${plan.popular ? 'pt-8 bg-white' : 'bg-white'}`}>
                    <h3 className="text-2xl font-bold mb-1 text-center">{plan.name}</h3>
                    <div className="text-center mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-center text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start opacity-50">
                          <X size={18} className="text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-laundry-600 hover:bg-laundry-700' 
                          : 'bg-gray-800 hover:bg-gray-900'
                      }`}
                    >
                      <Link to="/booking">{plan.buttonText}</Link>
                    </Button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            {/* Additional Plans */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {subscriptionPlans.slice(3).map((plan, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 100}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-laundry-50 p-6 flex items-center justify-center md:w-1/3">
                      <div className="text-center">
                        <Package size={40} className="mx-auto mb-2 text-laundry-600" />
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <div className="mt-2">
                          <span className="text-2xl font-bold">{plan.price}</span>
                          <span className="text-gray-600">{plan.period}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                      </div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="space-y-2 mb-6">
                        {plan.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        asChild 
                        className="w-full bg-gray-800 hover:bg-gray-900"
                        size="sm"
                      >
                        <Link to="/booking">{plan.buttonText}</Link>
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection delay={300} className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <HelpCircle size={24} className="text-laundry-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg mb-2">Subscription Plan Notes</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Unused monthly allowances do not roll over to the next month</li>
                    <li>• Dry cleaning credits can be used for any dry cleaning service</li>
                    <li>• Additional services beyond your plan limits are charged at regular rates with a 10% subscriber discount</li>
                    <li>• Plans can be paused or canceled anytime with 7 days notice</li>
                    <li>• Billing occurs monthly on your signup date</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-laundry-600 hover:bg-laundry-700">
                <Link to="/packages">View All Package Options</Link>
              </Button>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
