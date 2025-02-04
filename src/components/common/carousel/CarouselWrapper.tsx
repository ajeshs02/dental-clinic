import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { DotIndicator } from "./DotIndicator";

type CarouselWrapperProps = {
  children: React.ReactNode;
  isButtonVisible?: boolean;
  shouldDotIndicatorVisible?: boolean;
  customClass?: string;
  itemCount: number; // Total number of items
};

/**
 * CarouselWrapper
 *
 * A wrapper component for the Carousel that provides navigation buttons and dot indicators.
 *
 */

export const CarouselWrapper = ({
  children,
  isButtonVisible = true,
  shouldDotIndicatorVisible = true,
  customClass = "",
  itemCount,
}: CarouselWrapperProps) => {
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
        setApi={setApi}
        className={`max-w-full w-fit mx-auto px-1 ${
          customClass || "md:max-w-[90%]"
        }`}
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
