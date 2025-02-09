import { AboutLeftInfo } from "./AboutLeftInfo";
import AboutRightImage from "./AboutRightImage";

export default function AboutSection() {
  return (
    <section className="section-container" id="about">
      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        {/* left info */}
        <AboutLeftInfo />

        {/* right image */}
        <AboutRightImage />
      </div>
      {/* End Grid */}
    </section>
  );
}
