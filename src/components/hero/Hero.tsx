import { motion } from "framer-motion";
import herobg from "../../../public/assets/hero-bg.jpg";
import FadeInDiv from "../common/framer-motion/FadeInDiv";

export default function HeroSectionImageWithReviews() {
  return (
    <HeroWrapper>
      {/* black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 " />
      {/* hero content */}
      <div className="relative z-10 text-white text-center sm:text-left px-10 mx-6">
        {/* hero heading */}
        <motion.div
            initial={{ opacity: 0, x: -90 }} // Start slightly to the left
            whileInView={{ opacity: 1, x: 0 }} // Fade in and move into place
            transition={{
              duration: 1.0, // Smooth transition
              delay: 0.6, // Delay for a smooth flow
              ease: "easeInOut", // Soft easeOutExpo effect
            }}
          >
          <span className="text-lg sm:text-base md:text-xl font-semibold uppercase text-blue-400">
            Welcome to Medinova
          </span>
          </motion.div>
          <FadeInDiv delay={1.4} duration={1.5}>
          <h1 className="text-3xl sm:text-xl md:text-7xl font-bold mt-2">
            Best Healthcare Solution
            <br />
            In Your City
          </h1>
        </FadeInDiv>

        {/* hero description */}
        <FadeInDiv
          delay={.5}
          duration={1.5}
          className="mt-6 max-w-3xl text-lg sm:text-sm md:text-xl"
        >
          Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices mollis
          cras fames vestibulum fermentum scelerisque malesuada. Efficitur
          penatibus finibus; taciti aptent lectus sociosqu auctor. Cras dui
          facilisis nullam egestas, ut laoreet. Pulvinar a nunc varius iaculis
          adipiscing velit nibh aliquet. Sapien himenaeos torquent conubia id
          metus. Et mattis hac sem mattis vehicula magnis.
        </FadeInDiv>
      </div>
    </HeroWrapper>
  );
}

// Wrapper component for hero with bg image logic
function HeroWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-full h-screen bg-cover  bg-center flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
