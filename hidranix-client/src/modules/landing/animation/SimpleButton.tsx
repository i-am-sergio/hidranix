import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  scrollY: number;
}

const SimpleButton: React.FC<ButtonProps> = ({ to, children, className = '', scrollY }) => {
  const baseClasses = `
    relative overflow-hidden px-4 py-2 rounded cursor-pointer
    transition-colors duration-300 ease-in-out
    before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full 
    before:transition-transform before:duration-300 before:ease-in-out before:z-[-1]
  `;

  const defaultStyles = `
    bg-white text-primary-dark border border-white 
    hover:bg-transparent hover:text-white 
    before:bg-white/30
  `;

  const scrolledStyles = `
    bg-primary text-white border border-primary 
    hover:bg-white hover:text-primary 
    before:bg-primary/30
  `;

  const currentStyles = scrollY === 0 ? defaultStyles : scrolledStyles;

  return (
    <Link to={to}>
      <button
        className={`${baseClasses} ${currentStyles} ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default SimpleButton;