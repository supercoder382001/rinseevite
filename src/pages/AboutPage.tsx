
import React, { useEffect } from 'react';
import { Clock, Award, Heart, Users, Leaf, ShieldCheck } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import StaggeredSection from '@/components/StaggeredSection';
import CTA from '@/components/home/CTA';

const teamMembers = [
  {
    name: "Jatin Dua",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "With over 15 years in the laundry industry, Jatin founded Rinsee to revolutionize how people handle laundry."
  },
  {
    name: "Deepanshu Kumar",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    bio: "Deepanshu ensures that every order is processed with the highest quality standards and delivered on time."
  },
  // {
  //   name: "David Chen",
  //   role: "Customer Experience",
  //   image: "https://randomuser.me/api/portraits/men/62.jpg",
  //   bio: "David leads our customer service team, making sure every client receives exceptional support and satisfaction."
  // }
];

const valuesItems = [
  {
    icon: Clock,
    title: "Reliability",
    description: "We value your time and ensure consistent, punctual service you can always count on."
  },
  {
    icon: Award,
    title: "Quality",
    description: "We're committed to excellence in every aspect of our service, from cleaning to delivery."
  },
  {
    icon: Heart,
    title: "Care",
    description: "We treat your garments with the same care and attention as we would our own."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our top priority, and we go above and beyond to exceed expectations."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We use eco-friendly products and practices to minimize our environmental footprint."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We operate with transparency, honesty, and accountability in all that we do."
  }
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Rinsee</h1>
              <p className="text-xl text-gray-700 mb-0">
                We're on a mission to give you back your time by providing exceptional 
                laundry and dry cleaning services delivered to your doorstep.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <AnimatedSection className="md:w-1/2">
                <img 
                  src="/images/aboutus.png" 
                  alt="Our Story"
                  className="rounded-lg shadow-lg"
                />
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Rinsee was founded in 2024 with a simple goal: to help busy people reclaim their time from mundane chores like laundry. What started as a small operation with just three employees has grown into a trusted service provider with a dedicated team and thousands of satisfied customers.
                </p>
                <p className="text-gray-700 mb-4">
                  We recognized that in today's fast-paced world, time is increasingly precious. Many people struggle to balance work, family, and personal commitments, with little time left for self-care or relaxation. Laundry often becomes a dreaded weekend task that eats into valuable free time.
                </p>
                <p className="text-gray-700">
                  That's why we created an on-demand laundry and dry cleaning service that combines convenience, quality, and reliability. Our mission extends beyond clean clothes—we're in the business of giving you back your time to focus on what truly matters to you.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The core principles that guide everything we do
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valuesItems.map((value, index) => (
                <AnimatedSection key={index} delay={index * 100} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-laundry-100 text-laundry-600 p-3 rounded-full mr-4">
                      <value.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The dedicated professionals behind our exceptional service
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
              {teamMembers.map((member, index) => (
                <AnimatedSection key={index} delay={index * 150} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover-scale">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-laundry-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
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

export default AboutPage;
