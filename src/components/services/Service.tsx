import { services } from "@/constants/index";
import SectionHeader from "../common/SectionHeader";

const Services = () => {
  return (
    <section className="section-container">
      <SectionHeader
        heading="Services"
        subheading="Excellent Medical Services"
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map(({ id, icon: Icon, title, description }) => (
          <div
            key={id}
            className="p-8 bg-gray-100 rounded-2xl shadow-md text-center hover:shadow-lg 
                 transition-transform duration-300 transform hover:scale-105"
          >
            <div className="w-20 h-20 bg-blue-500 flex items-center justify-center rounded-full mx-auto">
              <Icon className="text-white text-4xl" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
