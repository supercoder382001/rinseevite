
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Laundry Lane", "Cleanville, CA 90210"]
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["(555) 123-4567", "Toll-free: (800) 123-4567"]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@cleanstylewave.com", "support@cleanstylewave.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday-Friday: 8am-7pm", "Saturday: 9am-5pm", "Sunday: Closed"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-laundry-50 to-laundry-100">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-700 mb-8">
                Have questions or need assistance? We're here to help you with all your laundry needs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <AnimatedSection className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <Input id="name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <Input id="email" type="email" placeholder="Your email address" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      rows={5}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-laundry-600 hover:bg-laundry-700">
                    Send Message
                  </Button>
                </form>
              </AnimatedSection>
              
              {/* Contact Information */}
              <div>
                <AnimatedSection className="mb-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    We're always ready to assist you with any questions or concerns. 
                    Reach out to us using any of the methods below.
                  </p>
                </AnimatedSection>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <AnimatedSection 
                      key={index} 
                      delay={index * 100} 
                      className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="bg-laundry-100 text-laundry-600 p-3 rounded-full mr-4">
                          <item.icon size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Visit our location for in-person service and drop-offs
              </p>
            </AnimatedSection>
            
            <AnimatedSection className="rounded-xl overflow-hidden shadow-lg">
              <div className="h-[400px] w-full bg-gray-300 relative">
                {/* Placeholder for a map - in a real implementation, use Google Maps or similar */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <p className="text-gray-600">Interactive Map Would Be Displayed Here</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
