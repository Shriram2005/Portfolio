import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: number;
  opacity?: number;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    threshold = 0.05,
    rootMargin = '0px 0px 100px 0px',
    triggerOnce = true,
    delay = 0,
    duration = 400,
    distance = 15,
    direction = 'up',
    scale = 0.98,
    opacity = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          }, delay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    const translateMap = {
      up: `translate3d(0, ${distance}px, 0)`,
      down: `translate3d(0, -${distance}px, 0)`,
      left: `translate3d(${distance}px, 0, 0)`,
      right: `translate3d(-${distance}px, 0, 0)`
    };
    
    return `${translateMap[direction]} scale(${scale})`;
  };

  const style = {
    opacity: isVisible ? 1 : opacity,
    transform: getTransform(),
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    willChange: 'transform, opacity'
  };

  return { ref: elementRef, style, isVisible };
};

export default useScrollReveal;