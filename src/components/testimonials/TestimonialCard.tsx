import { Card } from "@/components/ui/card";
import { FaQuoteLeft } from "react-icons/fa";

interface TestimonialProps {
  name: string;
  profession: string;
  image: string;
  text: string;
}

export function TestimonialCard({
  name,
  profession,
  image,
  text,
}: TestimonialProps) {
  return (
    <Card className="max-w-lg mx-auto text-center p-6 border border-gray-300 shadow-md rounded-xl">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative w-24 h-24">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
          {/* Quote Icon */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow">
            <FaQuoteLeft className="text-blue-500 text-xl" />
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-600 mt-4 italic px-4">{text}</p>

        {/* Patient Info */}
        <div className="mt-4 border-t pt-4 w-full">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-blue-500">{profession}</p>
        </div>
      </div>
    </Card>
  );
}
