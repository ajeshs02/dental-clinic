import herobg from "../assets/hero-bg.jpg";

export default function HeroSectionImageWithReviews() {
  return (
    <div className="container mx-auto">
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
        <div className="relative z-10 text-white text-center sm:text-left px-10 mx-6">
          <h2 className="text-lg sm:text-base md:text-xl font-semibold uppercase text-blue-400">
            Welcome to Medinova
          </h2>
          <h1 className="text-3xl sm:text-xl md:text-7xl font-bold mt-2">Best Healthcare Solution</h1>
          <h1 className="text-3xl sm:text-xl md:text-7xl font-bold">In Your City</h1>
          <div className="mt-6 max-w-3xl text-lg sm:text-sm md:text-xl">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices mollis cras fames vestibulum fermentum
            scelerisque malesuada. Efficitur penatibus finibus; taciti aptent lectus sociosqu auctor. Cras dui facilisis
            nullam egestas, ut laoreet. Pulvinar a nunc varius iaculis adipiscing velit nibh aliquet. Sapien himenaeos
            torquent conubia id metus. Et mattis hac sem mattis vehicula magnis.
          </div>
        </div>
      </div>
    </div>
  );
}
