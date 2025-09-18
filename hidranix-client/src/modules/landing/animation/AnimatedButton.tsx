import { motion, MotionProps } from 'motion/react';
import { ReactNode, MouseEventHandler } from 'react';

interface AnimatedButtonProps extends MotionProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, onClick, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.075,
        backgroundColor: "transparent",
        color: "#eee",
        borderColor: "#eee",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        backgroundColor: { duration: 0.3 },
        borderColor: { duration: 0.3 },
      }}
      className="px-2 xl:px-8 py-3 xl:py-4 mx-8 xl:mx-0 justify-center font-sour-gummy uppercase flex items-center gap-2 border-2 border-transparent text-[#222] bg-white/90  rounded-lg shadow-md cursor-pointer"
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
};