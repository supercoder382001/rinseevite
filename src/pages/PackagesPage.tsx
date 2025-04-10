import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Check } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import StaggeredSection from '@/components/StaggeredSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const PackagesPage = () => {
  const packages = [
    {
      name: "Starter",
      price: "₹999",
      period: "/mo",
      description: "50 Clothes per month",
      tagline: "Good for bachelors and if you want to try our service",
      buttonText: "Start Basic",
      features: [
        "Get your clothes wash and iron",
        "Every week free pickup and drop",
        "Reschedule your pickup",
        "You can give us 50 clothes per month",
        "Premium laundry"
      ],
      highlighted: false
    },
    {
      name: "Standard",
      price: "₹1499",
      period: "/mo",
      description: "100 Clothes per month",
      tagline: "Perfect for couples or individuals with more clothing needs",
      buttonText: "Choose Standard",
      features: [
        "All Starter features",
        "Priority scheduling",
        "Special stain treatment",
        "Delicate fabric handling",
        "Twice-weekly pickup options"
      ],
      highlighted: true
    },
    {
      name: "Family",
      price: "₹2499",
      period: "/mo",
      description: "200 Clothes per month",
      tagline: "Ideal for families with higher laundry volumes",
      buttonText: "Choose Family",
      features: [
        "All Standard features",
        "Dedicated pickup schedule",
        "Family account with multiple users",
        "Custom preferences per family member",
        "Free monthly deep cleaning service"
      ],
      highlighted: false
    },
    {
      name: "Student",
      price: "₹799",
      period: "/mo",
      description: "40 Clothes per month",
      tagline: "Budget-friendly option for students",
      buttonText: "Choose Student",
      features: [
        "Basic wash and iron service",
        "Weekly pickup and delivery",
        "App-based scheduling",
        "Valid student ID required",
        "Flexible payment options"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "₹1799",
      period: "/mo",
      description: "120 Clothes per month",
      tagline: "For working professionals with formal wardrobe needs",
      buttonText: "Choose Professional",
      features: [
        "Premium garment care",
        "Express service available",
        "Suit and formal wear expertise",
        "Shirt pressing service",
        "Fabric protection treatment"
      ],
      highlighted: false
    },
    {
      name: "Premium",
      price: "₹3499",
      period: "/mo",
      description: "250 Clothes per month",
      tagline: "Our most comprehensive service package",
      buttonText: "Choose Premium",
      features: [
        "All Family features",
        "Unlimited rescheduling",
        "24/7 customer support",
        "Home textile cleaning included",
        "Seasonal wardrobe storage"
      ],
      highlighted: false
    },
    {
      name: "Weekend",
      price: "₹1299",
      period: "/mo",
      description: "80 Clothes per month",
      tagline: "Weekend-only service for busy professionals",
      buttonText: "Choose Weekend",
      features: [
        "Saturday-Sunday service only",
        "Express 24-hour turnaround",
        "Twice monthly deep cleaning",
        "Flexible scheduling windows",
        "Perfect for busy weekday schedules"
      ],
      highlighted: false
    },
    {
      name: "Essentials",
      price: "₹599",
      period: "/mo",
      description: "30 Clothes per month",
      tagline: "Basic plan for minimal laundry needs",
      buttonText: "Choose Essentials",
      features: [
        "Basic wash service",
        "Bi-weekly pickup",
        "Standard detergents",
        "Limited to small items only",
        "Perfect for minimalists"
      ],
      highlighted: false
    },
    {
      name: "Large Family",
      price: "₹4999",
      period: "/mo",
      description: "300 Clothes per month",
      tagline: "For Large Family",
      buttonText: "Choose Package",
      features: [
        "Bi-weekly pickup",
        "Standard detergents",
        "Flexible scheduling windows",
        "Perfect for busy weekday schedules",
        "Bulk discount options"
      ],
      highlighted: false
    },
    {
      name: "Seasonal",
      price: "₹1999",
      period: "/3mo",
      description: "150 Clothes per 3 months",
      tagline: "Flexible option for seasonal needs",
      buttonText: "Choose Seasonal",
      features: [
        "3-month contract only",
        "Flexible usage allocation",
        "Seasonal garment storage",
        "Deep cleaning included",
        "Perfect for vacation homes"
      ],
      highlighted: false
    }
  ];

  const comparisonFeatures = [
    { name: "Monthly Clothes Limit", starter: "50", standard: "100", family: "200" },
    { name: "Weekly Pickup", starter: "1", standard: "2", family: "3" },
    { name: "Special Stain Treatment", starter: "Basic", standard: "Advanced", family: "Premium" },
    { name: "Delicate Handling", starter: "✓", standard: "✓", family: "✓" },
    { name: "Priority Scheduling", starter: "✗", standard: "✓", family: "✓" },
    { name: "Family Account", starter: "✗", standard: "✗", family: "✓" },
    { name: "Deep Cleaning", starter: "Additional Fee", standard: "Additional Fee", family: "1 Free/month" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <section className="bg-gradient-to-br from-laundry-50 to-laundry-100 py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Perfect Laundry Package</h1>
              <p className="text-xl text-gray-700 mb-4">
                Tailored solutions to keep your clothes fresh and your life simple
              </p>
              <p className="text-gray-600">
                All packages include premium detergent, fabric care, and doorstep pickup & delivery
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 bg-white" id="packages">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Most Popular Packages</h2>
              <p className="text-xl text-gray-600">
                Choose from our best-selling plans
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.slice(0, 3).map((pkg, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 150}
                  className={`transform transition-all duration-300 ${pkg.highlighted ? 'md:-translate-y-4' : ''}`}
                >
                  <Card className={`h-full overflow-hidden ${pkg.highlighted ? 'border-laundry-500 border-2 shadow-lg' : 'shadow'}`}>
                    {pkg.highlighted && (
                      <div className="bg-laundry-600 text-white text-center py-2 font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardHeader className={`text-center py-6 ${pkg.highlighted ? 'bg-laundry-50' : ''}`}>
                      <h3 className="text-2xl font-bold">{pkg.name}</h3>
                      <div className="flex justify-center items-baseline mt-4">
                        <span className="text-4xl font-bold">{pkg.price}</span>
                        <span className="text-gray-500 ml-1">{pkg.period}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{pkg.description}</p>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-center font-medium text-gray-700 mb-6">{pkg.tagline}</p>
                      <ul className="space-y-4">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-laundry-100 flex items-center justify-center mr-3">
                              <Check className="h-4 w-4 text-laundry-600" />
                            </div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-6 pb-8 px-6">
                      <Button 
                        className={`w-full ${pkg.highlighted ? 'bg-laundry-600 hover:bg-laundry-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                        size="lg"
                      >
                        {pkg.buttonText}
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">More Package Options</h2>
              <p className="text-xl text-gray-600">
                Find the perfect fit for your specific needs
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {packages.slice(3).map((pkg, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={index * 100}
                >
                  <Card className="h-full shadow hover:shadow-md transition-shadow">
                    <CardHeader className="text-center py-5">
                      <h3 className="text-xl font-bold">{pkg.name}</h3>
                      <div className="flex justify-center items-baseline mt-3">
                        <span className="text-3xl font-bold">{pkg.price}</span>
                        <span className="text-gray-500 ml-1">{pkg.period}</span>
                      </div>
                      <p className="text-gray-600 mt-2 text-sm">{pkg.description}</p>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-center text-sm font-medium text-gray-700 mb-4">{pkg.tagline}</p>
                      <ul className="space-y-3">
                        {pkg.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-laundry-100 flex items-center justify-center mr-2">
                              <Check className="h-3 w-3 text-laundry-600" />
                            </div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-4 pb-6 px-5">
                      <Button 
                        className="w-full bg-gray-800 hover:bg-gray-900 text-sm py-2"
                      >
                        {pkg.buttonText}
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Package Comparison</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Compare our popular packages to find what suits your needs best
              </p>
            </AnimatedSection>

            <AnimatedSection className="overflow-x-auto">
              <div className="min-w-[800px] lg:min-w-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Feature</TableHead>
                      <TableHead className="w-1/5">Starter</TableHead>
                      <TableHead className="w-1/5 bg-laundry-50">Standard</TableHead>
                      <TableHead className="w-1/5">Family</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonFeatures.map((feature, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{feature.name}</TableCell>
                        <TableCell>{feature.starter}</TableCell>
                        <TableCell className="bg-laundry-50">{feature.standard}</TableCell>
                        <TableCell>{feature.family}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our packages
              </p>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <StaggeredSection className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">What counts as one piece of clothing?</h3>
                  <p className="text-gray-600">
                    Each individual garment counts as one piece. This includes shirts, pants, socks, undergarments, etc. 
                    Larger items like bedsheets, curtains, or comforters may count as multiple pieces depending on their size.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">Can I roll over unused clothes to the next month?</h3>
                  <p className="text-gray-600">
                    Unfortunately, we do not offer rollover. Any unused clothing allocations expire at the end of each billing cycle. 
                    We recommend selecting a package that aligns with your average monthly laundry needs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">How do I schedule my pickups?</h3>
                  <p className="text-gray-600">
                    You can easily schedule pickups through our mobile app or website. Your package includes a set number of 
                    weekly pickups, and you can choose your preferred days and time slots based on availability.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">What if I need more than my monthly allocation?</h3>
                  <p className="text-gray-600">
                    If you exceed your monthly allocation, additional pieces will be charged at our à la carte rates. 
                    You'll always be notified before any additional charges are applied.
                  </p>
                </div>
              </StaggeredSection>
            </div>
          </div>
        </section>

        <section className="py-16 bg-laundry-600 text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Laundry Routine?</h2>
              <p className="text-xl mb-8">
                Choose a package that suits your needs and start enjoying hassle-free laundry services today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <a href="#packages">Choose a Package</a>
                </Button>
                <Button asChild size="lg" className="bg-white text-laundry-600 hover:bg-gray-100">
                  <a href="/contact-us">Contact Sales</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PackagesPage;
