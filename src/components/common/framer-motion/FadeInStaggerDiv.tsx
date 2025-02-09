import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInStaggerDivProps = {
  children: ReactNode;
  index: number;
  className?: string;
};

export default function FadeInStaggerDiv({
  children,
  index,
  className,
}: FadeInStaggerDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Start slightly lower and faded
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{
        duration: 0.3, // Longer duration for smoothness
        delay: index * 0.2, // Reduced delay for better flow
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
