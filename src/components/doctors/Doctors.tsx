import { CarouselItem } from "@/components/ui/carousel";
import { DoctorCard } from "./DoctorCard";
import { doctors } from "@/constants";
import { CarouselWrapperWithAutoplay } from "../common/carousel/CarouselWrapperWithAutoPlay";
import SectionHeader from "../common/SectionHeader";

export function Doctors() {
  return (
    <section className="section-container">
      <SectionHeader
        heading="OUR DOCTORS"
        subheading="Qualified Healthcare Professionals"
      />
      <CarouselWrapperWithAutoplay itemCount={doctors.length}>
        {/* Map over the doctors data and render DoctorCard components */}
        {doctors.map((doctor, index) => (
          <CarouselItem
            key={index}
            className="pl-1 mx-auto md:basis-1/2 lg:basis-1/3"
          >
            <DoctorCard {...doctor} />
          </CarouselItem>
        ))}
      </CarouselWrapperWithAutoplay>
    </section>
  );
}
