import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a 
      href={href}
      className="text-gray-300 hover:text-[#3DDC84] transition-colors px-4 py-2"
    >
      {children}
    </a>
  );
};

export default NavLink;