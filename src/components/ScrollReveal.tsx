import React, { ReactNode } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  className?: string;
  scale?: number;
  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 400,
  distance = 15,
  threshold = 0.05,
  className = '',
  scale = 0.98,
  triggerOnce = true
}) => {
  const { ref, style } = useScrollReveal({
    direction,
    delay,
    duration,
    distance,
    threshold,
    scale,
    triggerOnce
  });

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;