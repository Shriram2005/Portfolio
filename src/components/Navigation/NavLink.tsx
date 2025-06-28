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
      className="text-gray-300 hover:text-[#3DDC84] transition-colors px-4 py-2 rounded-lg hover:bg-[#3DDC84] hover:bg-opacity-10"
      aria-label={`Navigate to ${children} section`}
    >
      {children}
    </a>
  );
};

export default NavLink;