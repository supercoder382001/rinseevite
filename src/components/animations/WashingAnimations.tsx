
import React, { useEffect, useRef } from 'react';
import { WashingMachine } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const WashingAnimations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create soap bubbles effect
    const createSoapBubble = () => {
      const bubble = document.createElement('div');
      const size = Math.random() * 15 + 5; // Smaller bubbles
      const startPosition = Math.random() * container.offsetWidth;
      
      bubble.className = 'absolute rounded-full bg-white/30';
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${startPosition}px`;
      bubble.style.bottom = '0';
      bubble.style.filter = 'blur(1px)';
      
      // Randomize animation properties
      const duration = Math.random() * 4 + 3;
      const horizontalMovement = (Math.random() - 0.5) * 100;
      
      bubble.style.animation = `riseSoapBubble ${duration}s ease-in-out forwards`;
      bubble.style.setProperty('--horizontal-movement', `${horizontalMovement}px`);
      
      container.appendChild(bubble);
      
      // Remove bubble after animation
      setTimeout(() => {
        if (container.contains(bubble)) {
          container.removeChild(bubble);
        }
      }, duration * 1000);
    };
    
    // Create water waves effect
    const createWaterWave = () => {
      const wave = document.createElement('div');
      const width = Math.random() * 100 + 100;
      const startPosition = Math.random() * container.offsetWidth;
      
      wave.className = 'absolute h-2 bg-blue-200/40 rounded-full';
      wave.style.width = `${width}px`;
      wave.style.left = `${startPosition}px`;
      wave.style.bottom = '0';
      wave.style.filter = 'blur(2px)';
      
      // Animation
      const duration = Math.random() * 3 + 2;
      wave.style.animation = `expandWave ${duration}s ease-out forwards`;
      
      container.appendChild(wave);
      
      // Remove wave after animation
      setTimeout(() => {
        if (container.contains(wave)) {
          container.removeChild(wave);
        }
      }, duration * 1000);
    };
    
    // Start animations
    const bubbleInterval = setInterval(createSoapBubble, 300);
    const waveInterval = setInterval(createWaterWave, 1500);
    
    return () => {
      clearInterval(bubbleInterval);
      clearInterval(waveInterval);
      
      // Clean up any remaining elements
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <AnimatedSection className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Advanced Cleaning Technology</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Using state-of-the-art equipment and eco-friendly products for superior results
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-laundry-100 to-laundry-200 rounded-xl p-8 relative">
          <div ref={containerRef} className="washing-animation-container h-60 relative overflow-hidden">
            <style>
              {`
                @keyframes riseSoapBubble {
                  0% {
                    transform: translateY(0) translateX(0);
                    opacity: 0.7;
                  }
                  100% {
                    transform: translateY(-100px) translateX(var(--horizontal-movement));
                    opacity: 0;
                  }
                }
                
                @keyframes expandWave {
                  0% {
                    transform: scale(0);
                    opacity: 0.7;
                  }
                  100% {
                    transform: scale(3);
                    opacity: 0;
                  }
                }
                
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}
            </style>
            
            {/* Washing machine animation */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="bg-gray-200 rounded-full p-8 shadow-lg">
                  <WashingMachine size={100} className="text-laundry-600 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div className="absolute -inset-4 border-4 border-transparent border-t-blue-300 border-r-blue-300 rounded-full animate-spin" style={{ animationDuration: '5s' }}></div>
              </div>
            </div>
            
            {/* Static water waves at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-200/40 to-transparent"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-5 left-10 w-8 h-8 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-10 right-20 w-12 h-12 bg-white/10 rounded-full"></div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-laundry-800 font-medium">
              Our advanced washing technology ensures your clothes get the perfect clean every time.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WashingAnimations;
