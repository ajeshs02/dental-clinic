import AboutIcons from "./AboutIcons";
import { motion } from "framer-motion";

export const AboutLeftInfo = () => {
  return (
    <AboutLeftInfoWrapper>
      <h1 className="text-blue-500 text-2xl font-bold my-4">
        About Us
        <div className="h-[2px] w-3/4 bg-slate-400 my-2"></div>
      </h1>

      <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Best Healthcare Solution In Your City
      </h2>

      <p className="mt-3 text-xl text-muted-foreground">
        Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor
        diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet
        diam et eos sadipscing labore. Clita erat ipsum et lorem et sit,
      </p>

      {/* icons  */}
      <AboutIcons />
    </AboutLeftInfoWrapper>
  );
};

/**
 * A wrapper component with framer motion logic.
 */
function AboutLeftInfoWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -90 }} // Start slightly to the left
      whileInView={{ opacity: 1, x: 0 }} // Fade in and move into place
      transition={{
        duration: 0.8, // Smooth transition
        delay: 0.3, // Delay for a smooth flow
        ease: "easeInOut", // Soft easeOutExpo effect
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
