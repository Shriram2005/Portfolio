import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Get the sections we want to track (last 3 sections)
      const skillsSection = document.getElementById('skills');
      const timelineSection = document.getElementById('timeline');
      const educationSection = document.getElementById('education');
      const contactSection = document.getElementById('contact');

      if (!skillsSection || !timelineSection || !educationSection || !contactSection) {
        return;
      }

      // Get the position of the skills section (3rd from last)
      const skillsSectionTop = skillsSection.offsetTop;
      const currentScrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // Show button when user reaches the skills section (last 3 sections)
      // Add some offset to show it a bit before reaching the section
      const triggerPoint = skillsSectionTop - windowHeight * 0.5;

      if (currentScrollY >= triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener with throttling for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    toggleVisibility();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top-btn ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

export default BackToTopButton;