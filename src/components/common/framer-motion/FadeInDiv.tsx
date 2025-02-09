import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function FadeInDiv({
  children,
  delay = 0,
  duration = 0.8,
  className,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start faded and slightly below
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{
        duration: duration, // Customizable duration
        delay: delay, // Customizable delay for staggered effect
        ease: [0.22, 1, 0.36, 1], // Smooth easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
