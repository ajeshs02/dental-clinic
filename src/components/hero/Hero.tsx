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
        <FadeInDiv delay={0.2} duration={0.8}>
          <span className="text-lg sm:text-base md:text-xl font-semibold uppercase text-blue-400">
            Welcome to Medinova
          </span>
          <h1 className="text-3xl sm:text-xl md:text-7xl font-bold mt-2">
            Best Healthcare Solution
            <br />
            In Your City
          </h1>
        </FadeInDiv>

        {/* hero description */}
        <FadeInDiv
          delay={0.4}
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
