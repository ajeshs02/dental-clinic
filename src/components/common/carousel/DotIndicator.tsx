/**
 * DotIndicator
 *
 * A component that renders a row of dots as a carousel indicator.
 * The dot representing the current index is blue, and the rest are gray.
 *
 * @param {number} currentIndex - The current index of the carousel.
 * @param {number} itemCount - The total number of items in the carousel.
 */

export const DotIndicator = ({
  currentIndex,
  itemCount,
}: {
  currentIndex: number;
  itemCount: number;
}) => {
  return (
    <div className="flex h-fit  justify-center mt-2 space-x-2">
      {Array.from({ length: itemCount }).map((_, index) => (
        <span
          key={index}
          className={`h-3 w-3 rounded-full transition-colors duration-300 ${
            currentIndex === index ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
