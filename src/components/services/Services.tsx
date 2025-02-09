import { services } from "@/constants/index";
import SectionHeader from "../common/SectionHeader";
import ServiceItem from "./ServiceCard";

const Services = () => {
  return (
    <section className="section-container" id="services">
      <SectionHeader
        heading="Services"
        subheading="Excellent Medical Services"
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <ServiceItem index={index} key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
