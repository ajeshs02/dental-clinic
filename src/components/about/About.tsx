import herobg from "../assets/hero-bg.jpg";
import AboutIcons from "./AboutIcons";

export default function AboutSection() {
  return (
    <section className="section-container" id="about">
      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        {/* left info */}
        <div>
          {/* heading */}
          <h1 className="text-blue-500 text-2xl font-bold my-4">
            About Us
            <div className="h-[2px] w-3/4 bg-slate-400 my-2"></div>
          </h1>

          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Best Healthcare Solution In Your City
          </h2>

          <p className="mt-3 text-xl text-muted-foreground">
            Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
            dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
            diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem
            et sit,
          </p>

          {/* icons start */}
          <AboutIcons />
        </div>

        {/* right image */}
        <div className="relative ms-4">
          <img
            className="w-full rounded-xl"
            src={herobg}
            alt="Image Description"
          />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </section>
  );
}
