
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  WashingMachine, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <WashingMachine size={28} className="text-laundry-400" /> */}
              <img src="/logo.png" alt="Rinsee Logo" className="h-7 w-7 object-contain" style={{ height: '64px', width: '67px', objectFit: 'contain', marginRight: '8px' }}/>
              <img src="/images/logow.png" alt="Rinsee Logo" className="h-7 w-7 object-contain" style={{ height: '46px', width: '129px', objectFit: 'cover', marginRight: '0px' }}/>
              {/* <span className="font-bold text-xl">Rinsee</span> */}
            </div>
            <p className="text-gray-400 max-w-xs">
              Professional laundry and dry cleaning services delivered to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-laundry-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-laundry-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-laundry-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact-us" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/wash-and-fold" className="text-gray-400 hover:text-white transition-colors">Wash & Fold</Link></li>
              <li><Link to="/services/wash-and-iron" className="text-gray-400 hover:text-white transition-colors">Wash & Iron</Link></li>
              <li><Link to="/services/dry-cleaning" className="text-gray-400 hover:text-white transition-colors">Dry Cleaning</Link></li>
              <li><Link to="/services/ironing" className="text-gray-400 hover:text-white transition-colors">Ironing</Link></li>
              {/* <li><Link to="/services/specialty" className="text-gray-400 hover:text-white transition-colors">Specialty Care</Link></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-laundry-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">60, Chandu Park , Delhi 110051</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-laundry-400 flex-shrink-0" />
                <span className="text-gray-400">+91 7428160047</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-laundry-400 flex-shrink-0" />
                <span className="text-gray-400">info@rinsee.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Trickerr Finoo Pvt. Ltd. . All rights reserved.</p>
            <div className="space-x-4">
              <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
