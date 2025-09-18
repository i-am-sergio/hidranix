import { motion, Variants, Transition } from "motion/react";
import { ReactNode } from "react";
import { HTMLMotionProps } from "motion/react";

interface AnimationComponentProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variants?: Variants;
  initial?: string;
  whileInView?: string;
  viewport?: {
    amount?: number;
    once?: boolean;
  };
  className?: string;
  transition?: Transition;
}

export const AnimationComponent: React.FC<AnimationComponentProps> = ({
  children,
  variants,
  initial = "hidden",
  whileInView = "visible",
  viewport = { amount: 0.5, once: false },
  className = "",
  transition,
  ...props
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      variants={variants}
      viewport={viewport}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};