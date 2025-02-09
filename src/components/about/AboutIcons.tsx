import { aboutIcons } from "@/constants";
import FadeInStaggerDiv from "../common/framer-motion/FadeInStaggerDiv";

export default function AboutIcons() {
  return (
    <div className="mt-12 flex items-center flex-wrap gap-4 text-center max-lg:justify-center">
      {aboutIcons.map(({ icon: Icon, title, subtitle }, index) => (
        <FadeInStaggerDiv
          key={index}
          index={index}
          className="p-6 min-w-28 max-w-36 w-full bg-gray-100 rounded-2xl hover:shadow-lg 
                 transition-transform duration-500 transform hover:scale-95"
        >
          <Icon className="text-2xl text-blue-500 mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">{title}</h3>
          <p className="text-blue-500 font-medium">{subtitle}</p>
        </FadeInStaggerDiv>
      ))}
    </div>
  );
}
