
import React, { useEffect } from 'react';

const FloatingBubbles = () => {
  useEffect(() => {
    // Create bubbles on component mount
    const createBubbles = () => {
      const container = document.querySelector('.floating-bubbles-container');
      if (!container) return;
      
      // Use proper type assertions for DOM properties
      const containerWidth = (container as HTMLElement).offsetWidth;
      const containerHeight = (container as HTMLElement).offsetHeight;
      
      // Remove existing bubbles
      const existingBubbles = container.querySelectorAll('.floating-bubble');
      existingBubbles.forEach(bubble => bubble.remove());
      
      // Create new bubbles
      for (let i = 0; i < 15; i++) {
        const size = Math.random() * 50 + 20;
        const left = Math.random() * (containerWidth - size);
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.3 + 0.1;
        
        const bubble = document.createElement('div');
        bubble.className = 'floating-bubble absolute rounded-full';
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${left}px`;
        bubble.style.bottom = `-${size}px`;
        bubble.style.opacity = opacity.toString();
        bubble.style.background = 'linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0.3))';
        bubble.style.animation = `floatBubble ${duration}s linear ${delay}s infinite`;
        
        container.appendChild(bubble);
      }
    };
    
    // Create bubbles initially
    createBubbles();
    
    // Recreate bubbles when window is resized
    window.addEventListener('resize', createBubbles);
    
    return () => {
      window.removeEventListener('resize', createBubbles);
    };
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      <div className="floating-bubbles-container relative h-40 bg-gradient-to-r from-laundry-600 to-laundry-500">
        <style>
          {`
            @keyframes floatBubble {
              0% {
                transform: translateY(0) translateX(0);
                opacity: 0.1;
              }
              50% {
                transform: translateY(-50vh) translateX(20px);
                opacity: 0.2;
              }
              100% {
                transform: translateY(-100vh) translateX(-20px);
                opacity: 0;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
            Freshness in Every Wash, Quality in Every Fold
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FloatingBubbles;
