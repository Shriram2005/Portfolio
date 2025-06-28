import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#121212] shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`} role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={scrollToTop}
            className="text-[#3DDC84] font-bold text-xl hover:text-white transition-colors"
            aria-label="Go to top of page"
          >
            SM
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#projects" onClick={closeMobileMenu}>Projects</NavLink>
            <NavLink href="#skills" onClick={closeMobileMenu}>Skills</NavLink>
            <NavLink href="#timeline" onClick={closeMobileMenu}>Experience</NavLink>
            <NavLink href="#education" onClick={closeMobileMenu}>Education</NavLink>
            <NavLink href="#contact" onClick={closeMobileMenu}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-[#3DDC84] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1E1E1E] py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-2">
              <NavLink href="#projects" onClick={closeMobileMenu}>Projects</NavLink>
              <NavLink href="#skills" onClick={closeMobileMenu}>Skills</NavLink>
              <NavLink href="#timeline" onClick={closeMobileMenu}>Experience</NavLink>
              <NavLink href="#education" onClick={closeMobileMenu}>Education</NavLink>
              <NavLink href="#contact" onClick={closeMobileMenu}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;