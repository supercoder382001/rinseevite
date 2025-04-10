
import React from 'react';
import { WashingMachine, CheckCircle } from 'lucide-react';
import ServicePageTemplate from '@/components/services/ServicePageTemplate';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LaundryServicePage = () => {
  const processSteps = [
    {
      title: "Collection",
      description: "We collect your laundry from your doorstep at a time that suits you. No need to disrupt your busy schedule. Our courteous staff will handle everything."
    },
    {
      title: "Sorting & Washing",
      description: "Your clothes are carefully sorted by color and fabric type, then washed using premium detergents at the optimal temperature to ensure maximum cleanliness and fabric care."
    },
    {
      title: "Drying & Folding",
      description: "We gently dry your clothes using state-of-the-art equipment and precisely fold each item, ready to be placed directly into your wardrobe. Special items receive extra attention."
    }
  ];

  const pricingItems = [
    {
      name: "Basic Wash & Fold",
      price: "$2.50/lb",
      description: "Ideal for everyday clothing items like t-shirts, pants, and towels. Includes sorting, washing, drying, and folding. Minimum 10 lbs."
    },
    {
      name: "Premium Wash & Fold",
      price: "$3.50/lb",
      description: "For mixed laundry including delicate items requiring special attention. Includes stain treatment and fabric softener. Minimum 8 lbs."
    },
    {
      name: "Subscription Plan",
      price: "$80/month",
      description: "Up to 40 lbs of laundry per month with free pickup and delivery. Includes premium detergents and fabric softeners. Best value for regular users."
    }
  ];

  const additionalImages = [
    "https://source.unsplash.com/random/800x600?washing,machine",
    "https://source.unsplash.com/random/800x600?folding,clothes",
    "https://source.unsplash.com/random/800x600?clean,laundry"
  ];

  const AdditionalContent = () => (
    <AnimatedSection>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Wash & Fold Service?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-laundry-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-laundry-100 p-2 rounded-full mr-3">
                <CheckCircle className="text-laundry-600 h-5 w-5" />
              </span>
              Premium Quality
            </h3>
            <p>
              We use only the highest quality detergents and fabric softeners to ensure your clothes come back fresh, soft, and fragrant. Our commercial-grade machines provide superior cleaning compared to home washing machines.
            </p>
          </div>
          
          <div className="bg-laundry-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-laundry-100 p-2 rounded-full mr-3">
                <CheckCircle className="text-laundry-600 h-5 w-5" />
              </span>
              Time-Saving
            </h3>
            <p>
              The average household spends 5-7 hours weekly on laundry. Our service gives you back this time to focus on things that matter most to you - family, work, hobbies, or simply relaxing.
            </p>
          </div>
          
          <div className="bg-laundry-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-laundry-100 p-2 rounded-full mr-3">
                <CheckCircle className="text-laundry-600 h-5 w-5" />
              </span>
              Eco-Friendly Options
            </h3>
            <p>
              We offer eco-friendly detergent options and energy-efficient machines that use less water per load than typical home washers. Choose our green option at checkout to reduce your environmental impact.
            </p>
          </div>
          
          <div className="bg-laundry-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-laundry-100 p-2 rounded-full mr-3">
                <CheckCircle className="text-laundry-600 h-5 w-5" />
              </span>
              Clothing Care Experts
            </h3>
            <p>
              Our staff are trained in fabric care and stain removal techniques. We know how to handle everything from everyday wear to delicate fabrics, ensuring your clothes last longer and look better.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Our Guarantee</h3>
          <p className="text-center mb-6">
            We're confident you'll love our wash & fold service. If you're not completely satisfied with the results, we'll re-wash your items at no additional cost or provide a full refund.
          </p>
        </div>
        
        <div className="bg-laundry-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for hassle-free laundry?</h3>
          <p className="text-lg mb-6">
            Check out our subscription packages for even better value
          </p>
          <Button asChild size="lg" className="bg-laundry-600 hover:bg-laundry-700">
            <Link to="/packages">View Packages</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );

  return (
    <ServicePageTemplate
      icon={WashingMachine}
      title="Wash & Fold Service"
      description="Professional washing, drying, and folding services for your everyday clothing items. We take care of your laundry so you can focus on what matters most."
      image="/images/washfold.png"
      processSteps={processSteps}
      pricingItems={pricingItems}
      additionalInfo="All prices include pickup and delivery. Express service available for an additional 50% charge."
      additionalImages={additionalImages}
      additionalContent={<AdditionalContent />}
    />
  );
};

export default LaundryServicePage;
