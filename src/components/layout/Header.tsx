
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  AlignRight, 
  X, 
  Phone, 
  WashingMachine,
  Menu
} from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/packages", label: "Packages" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About Us" },
    { path: "/contact-us", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Always visible */}
        <Link to="/" className="flex items-center space-x-2 text-laundry-700 transition-colors">
          {/* <WashingMachine size={28} className="text-laundry-600" /> */}
          <img src="/logo.png" alt="Rinsee Logo" className="h-7 w-7 object-contain" style={{ height: '64px', width: '67px', objectFit: 'contain', marginRight: '0px' }}/>
          <img src="/images/logon.png" alt="Rinsee Logo" className="h-7 w-7 object-contain" style={{ height: '46px', width: '129px', objectFit: 'contain', marginRight: '8px', marginLeft: '0px' }}/>
          {/* <span className="font-bold text-xl">Rinsee</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className="text-gray-700 hover:text-laundry-600 font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <Button className="bg-laundry-600 hover:bg-laundry-700">
            {/* <Phone size={16} className="mr-2" /> */}
            Login Now
          </Button>
        </nav>

        {/* Mobile and Tablet Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[75vw] sm:w-[350px] pt-12">
            <div className="flex flex-col space-y-6 p-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-700 hover:text-laundry-600 font-medium py-2 text-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              
              <SheetClose asChild>
                <Button className="bg-laundry-600 hover:bg-laundry-700 w-full">
                  <Phone size={16} className="mr-2" />
                  Book Now
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
