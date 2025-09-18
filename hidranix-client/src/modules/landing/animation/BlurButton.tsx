import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  scrollY: number; // Nueva prop para controlar el estilo con el scroll
}

const BlurButton: React.FC<ButtonProps> = ({ to, children, className = '', scrollY }) => {
  const baseClasses = `
    relative overflow-hidden px-4 py-2 rounded cursor-pointer
    transition-colors duration-300 ease-in-out
    before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:transition-transform before:duration-300 before:ease-in-out before:z-[-1]
  `;

  const defaultStyles = 'bg-white/20 backdrop-blur-sm border border-white/50 text-white hover:text-primary-dark hover:before:translate-x-full hover:before:bg-white';
  const scrolledStyles = 'bg-white text-primary border border-primary hover:bg-primary hover:text-white hover:before:translate-x-full hover:before:bg-primary';

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

export default BlurButton;