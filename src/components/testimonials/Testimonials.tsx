import { CarouselItem } from "@/components/ui/carousel";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/constants";
import { CarouselWrapper } from "../common/carousel/CarouselWrapper";
import SectionHeader from "../common/SectionHeader";

export function Testimonials() {
  return (
    <section className="section-container" id="testimonials">
      <SectionHeader
        heading="Testimonials"
        subheading="What Our Patients Say"
      />
      <CarouselWrapper
        itemCount={testimonials.length}
        customClass="md:w-4/5 lg:w-3/5"
      >
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="px-2 mx-auto ">
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </section>
  );
}
