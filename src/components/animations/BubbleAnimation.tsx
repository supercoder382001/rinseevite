
import React, { useEffect, useRef } from 'react';

const BubbleAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = 150;
    
    // Create bubbles
    const createBubble = () => {
      const bubble = document.createElement('div');
      const size = Math.random() * 30 + 10;
      const left = Math.random() * containerWidth;
      const animationDuration = Math.random() * 3 + 2;
      
      bubble.className = 'bubble absolute rounded-full bg-white/30 z-10';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}px`;
      bubble.style.bottom = '0';
      bubble.style.animationDuration = `${animationDuration}s`;
      
      container.appendChild(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        if (container.contains(bubble)) {
          container.removeChild(bubble);
        }
      }, animationDuration * 1000);
    };
    
    // Generate bubbles at intervals
    const intervalId = setInterval(createBubble, 300);
    
    return () => {
      clearInterval(intervalId);
      
      // Clean up any remaining bubbles
      const bubbles = container.querySelectorAll('.bubble');
      bubbles.forEach(bubble => {
        if (container.contains(bubble)) {
          container.removeChild(bubble);
        }
      });
    };
  }, []);
  
  return (
    <div className="relative w-full bg-laundry-600 overflow-hidden">
      <div 
        ref={containerRef} 
        className="bubble-container relative h-[150px] w-full"
      >
        <style>
          {`
            @keyframes rise {
              0% {
                bottom: 0;
                opacity: 0.7;
              }
              100% {
                bottom: 150px;
                opacity: 0;
              }
            }
            .bubble {
              animation-name: rise;
              animation-timing-function: ease-in-out;
              animation-iteration-count: 1;
            }
          `}
        </style>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl md:text-2xl font-medium z-20 text-center">
            Experience the Freshness of Professional Cleaning
          </p>
        </div>
      </div>
    </div>
  );
};

export default BubbleAnimation;
