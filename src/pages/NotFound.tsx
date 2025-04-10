
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, WashingMachine } from "lucide-react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <WashingMachine size={80} className="mx-auto text-laundry-400 mb-6 animate-pulse-slow" />
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in">Page Not Found</h2>
          
          <p className="text-xl text-gray-600 max-w-md mx-auto mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Oops! The page you're looking for seems to have been lost in the laundry.
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-laundry-600 hover:bg-laundry-700 animate-fade-in" 
            style={{ animationDelay: '400ms' }}
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
