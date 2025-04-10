
import React, { useEffect, useRef } from 'react';

interface StaggeredSectionProps {
  children: React.ReactNode;
  className?: string;
}

const StaggeredSection: React.FC<StaggeredSectionProps> = ({ 
  children, 
  className = '' 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`staggered-reveal ${className}`}>
      {children}
    </div>
  );
};

export default StaggeredSection;
