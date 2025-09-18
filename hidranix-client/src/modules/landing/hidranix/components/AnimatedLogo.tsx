import React from 'react';
import HidranixLogo from '../../../../assets/hidranix_logo.svg'; // Asegúrate de la ruta correcta
import HidranixLogoGreen from '../../../../assets/hidranix_logo_green.png'; // Asegúrate de la ruta correcta

interface LogoProps {
  scrollY: number;
  className?: string;
  alt?: string;
}

const AnimatedLogo: React.FC<LogoProps> = ({ scrollY, className = '', alt = 'Tecnología Hidranix' }) => {
  const currentLogo = scrollY === 0 ? HidranixLogo : HidranixLogoGreen;

  return (
    <img
      src={currentLogo}
      alt={alt}
      className={`${className}`}
    />
  );
};

export default AnimatedLogo;