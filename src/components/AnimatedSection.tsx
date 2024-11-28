import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`opacity-0 ${className}`}
      style={{
        animation: isVisible ? `fadeInUp 0.5s ease-out ${delay}s forwards` : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;