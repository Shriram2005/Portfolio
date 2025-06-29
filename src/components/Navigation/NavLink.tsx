import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className="nav-link"
      aria-label={`Navigate to ${children} section`}
    >
      {children}
    </a>
  );
};

export default NavLink;