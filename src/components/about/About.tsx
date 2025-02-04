import { aboutIcons } from "@/constants";
import herobg from "../assets/hero-bg.jpg";

export default function AboutSection() {
  return (
    <>
      {/* Hero */}
      <div className="container py-16 lg:py-16">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          
          <div>
            <div>
              <div className="text-blue-500 text-2xl font-bold my-4">
                About Us
                <div className="h-[2px] w-3/4 bg-slate-400 my-2"></div>
              </div>
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Best Healthcare Solution In Your City
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit
              consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit,
            </p>
            {/* icons start */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {aboutIcons.map(({ icon: Icon, title, subtitle }, index) => (
                <div key={index} className="p-6 bg-gray-100 rounded-2xl hover:shadow-lg 
                 transition-transform duration-500 transform hover:scale-95">
                  <Icon className="text-2xl text-blue-500 mx-auto" />
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="text-blue-500 font-medium">{subtitle}</p>
                </div>
              ))}
            </div>
          {/* icons end */}
          </div>         
          {/* Col */}
          <div className="relative ms-4">
            <img className="w-full rounded-xl" src={herobg} alt="Image Description" />
          </div>
          {/* End Col */}         
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  );
}
