import { motion } from "framer-motion";

export default function AboutRightImage() {
  return (
    <AboutRightImageWrapper className="relative ms-4">
      <img
        className="w-full rounded-xl"
        src={"/assets/hero-bg.jpg"}
        alt="Image Description"
      />
    </AboutRightImageWrapper>
  );
}

/**
 * A wrapper component with framer motion logic.
 */
function AboutRightImageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }} // Start slightly to the right
      whileInView={{ opacity: 1, x: 0 }} // Fade in and move into place
      transition={{
        duration: 0.8, // Smooth transition
        delay: 1.0, // Delay for a smooth flow
        ease: "easeInOut", // Soft easeOutExpo effect
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}