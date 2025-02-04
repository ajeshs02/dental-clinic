import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useRef, useState, useEffect } from "react";
import { DotIndicator } from "./DotIndicator";

type CarouselWrapperProps = {
  children: React.ReactNode;
  isButtonVisible?: boolean;
  shouldDotIndicatorVisible?: boolean;
  customClass?: string;
  itemCount: number; // New prop to define total items
};

/**
 * CarouselWrapper
 *
 * A wrapper component for the Carousel that provides additional functionality
 * such as autoplay, navigation buttons, and dot indicators.
 *
 */

export const CarouselWrapperWithAutoplay = ({
  children,
  isButtonVisible = true,
  shouldDotIndicatorVisible = true,
  customClass = "",
  itemCount,
}: CarouselWrapperProps) => {
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrentIndex(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative max-w-full w-fit mx-auto px-1">
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        className={`max-w-full w-fit mx-auto px-1 ${
          customClass || "md:max-w-[90%]"
        }`}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play()}
        opts={{ align: "center" }}
      >
        <CarouselContent className="gap-2 p-3">{children}</CarouselContent>

        {isButtonVisible && <CarouselPrevious className="max-md:hidden" />}
        {isButtonVisible && <CarouselNext className="max-md:hidden" />}
      </Carousel>

      {/* Dots Indicator */}
      {shouldDotIndicatorVisible && (
        <DotIndicator currentIndex={currentIndex} itemCount={itemCount} />
      )}
    </div>
  );
};
