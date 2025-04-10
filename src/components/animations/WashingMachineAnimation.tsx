
import React, { useEffect, useRef } from 'react';
import { Shirt, WashingMachine, Droplets } from 'lucide-react';

const WashingMachineAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Function to create bubbles
    const createBubble = () => {
      const bubble = document.createElement('div');
      const size = Math.random() * 20 + 5;
      const position = Math.random() * 80 + 10;
      
      bubble.className = 'absolute rounded-full bg-blue-100/50';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${position}%`;
      bubble.style.bottom = '0';
      bubble.style.filter = 'blur(1px)';
      
      // Animation properties
      const duration = Math.random() * 3 + 2;
      const horizontalMovement = (Math.random() - 0.5) * 50;
      
      bubble.style.animation = `bubble-rise ${duration}s ease-in-out forwards`;
      bubble.style.setProperty('--horizontal-movement', `${horizontalMovement}px`);
      
      container.appendChild(bubble);
      
      // Remove bubble after animation
      setTimeout(() => {
        if (container.contains(bubble)) {
          container.removeChild(bubble);
        }
      }, duration * 1000);
    };
    
    // Create clothes items that move inside the drum
    const createClothesItem = () => {
      const item = document.createElement('div');
      const isShirt = Math.random() > 0.5;
      const position = Math.random() * 60 + 20;
      const delay = Math.random() * 2;
      
      item.className = 'absolute';
      item.style.left = `${position}%`;
      item.style.top = '50%';
      item.style.transform = 'translate(-50%, -50%)';
      item.style.opacity = '0.7';
      item.style.color = Math.random() > 0.5 ? '#93c5fd' : '#d1d5db';
      item.style.animation = `spin-clothes 8s linear infinite`;
      item.style.animationDelay = `${delay}s`;
      
      if (isShirt) {
        const shirt = document.createElement('div');
        shirt.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shirt"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>';
        item.appendChild(shirt);
      } else {
        const sock = document.createElement('div');
        sock.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sock"><path d="M14 11a5 5 0 0 0 7 0 .5.5 0 0 0-.5-.9 3.5 3.5 0 0 1-6 0 .5.5 0 0 0-.5.9Z"/><path d="M2 16.5A5.5 5.5 0 0 0 7.5 22a5.5 5.5 0 0 0 5.5-5.5V11H2Z"/><path d="M14 3a1 1 0 0 1 1 1v8h-2V7a3 3 0 0 0-3-3H5a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h3v1H2"></path></svg>';
        item.appendChild(sock);
      }
      
      container.appendChild(item);
      
      // Remove item after a while to prevent overloading
      setTimeout(() => {
        if (container.contains(item)) {
          container.removeChild(item);
        }
      }, 8000);
    };
    
    // Create water splash effect at bottom
    const createWaterSplash = () => {
      const splash = document.createElement('div');
      const width = Math.random() * 30 + 20;
      const position = Math.random() * 80 + 10;
      
      splash.className = 'absolute h-1 bg-blue-300/30 rounded-full';
      splash.style.width = `${width}px`;
      splash.style.left = `${position}%`;
      splash.style.bottom = '10%';
      splash.style.filter = 'blur(1px)';
      
      // Animation
      splash.style.animation = 'splash-effect 1s ease-out forwards';
      
      container.appendChild(splash);
      
      // Remove splash after animation
      setTimeout(() => {
        if (container.contains(splash)) {
          container.removeChild(splash);
        }
      }, 1000);
    };
    
    // Start animations
    const bubbleInterval = setInterval(createBubble, 400);
    const clothesInterval = setInterval(createClothesItem, 2000);
    const splashInterval = setInterval(createWaterSplash, 500);
    
    return () => {
      clearInterval(bubbleInterval);
      clearInterval(clothesInterval);
      clearInterval(splashInterval);
    };
  }, []);
  
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl group">
      <style jsx>{`
        @keyframes bubble-rise {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-200px) translateX(var(--horizontal-movement));
            opacity: 0;
          }
        }
        
        @keyframes spin-clothes {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        
        @keyframes splash-effect {
          0% {
            transform: scale(0);
            opacity: 0.8;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
        
        @keyframes drum-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulsate {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}</style>
      
      {/* Washing machine outer body */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg z-0">
        {/* Control panel */}
        <div className="absolute top-6 right-6 w-20 h-40 bg-gray-800 rounded-md p-2 z-20">
          <div className="w-4 h-4 rounded-full bg-red-500 mb-2 animate-pulse"></div>
          <div className="w-full h-6 bg-gray-700 rounded-sm mb-2"></div>
          <div className="w-full h-6 bg-gray-700 rounded-sm mb-4"></div>
          <div className="flex space-x-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="w-full h-10 bg-gray-600 rounded-md flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-gray-500"></div>
          </div>
        </div>
      </div>
      
      {/* Washing machine door - circular window */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-900 rounded-full z-10">
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 overflow-hidden">
          {/* Rotating drum */}
          <div className="absolute inset-6 rounded-full border-4 border-dashed border-gray-400 animate-spin" style={{ animationDuration: '8s' }}></div>
          
          {/* Water level */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-blue-300/40"></div>
          
          {/* Container for dynamic elements */}
          <div ref={containerRef} className="absolute inset-0 overflow-hidden"></div>
          
          {/* Static bubbles for visual effect */}
          <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-white/30 rounded-full animate-pulse" style={{ animationDuration: '2.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-white/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        </div>
      </div>
      
      {/* Door handle */}
      <div className="absolute top-1/2 right-16 transform -translate-y-1/2 w-6 h-16 bg-gray-400 rounded-full z-20"></div>
      
      {/* Water inlet indication */}
      <div className="absolute top-10 left-10 z-20">
        <Droplets className="text-blue-400 animate-bounce" />
      </div>
      
      {/* Detergent area */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-blue-100 rounded-md z-20 flex items-center justify-center">
        <div className="text-xs text-blue-600 font-bold">DETERGENT</div>
      </div>
      
      {/* Floating bubbles outside the machine for extra effect */}
      <div className="absolute -top-10 -right-10 w-20 h-20 opacity-30">
        <Droplets className="text-blue-300 animate-float-slow" size={20} />
        <Droplets className="text-blue-300 animate-float-slow absolute top-5 left-5" size={15} style={{ animationDelay: '1s' }} />
        <Droplets className="text-blue-300 animate-float-slow absolute top-10 left-2" size={10} style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Floating clothes icons */}
      <div className="absolute -bottom-5 -left-5 opacity-40">
        <Shirt className="text-blue-400 animate-float-slow" size={30} />
        <Shirt className="text-gray-400 animate-float-slow absolute -top-10 left-10" size={20} style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default WashingMachineAnimation;
