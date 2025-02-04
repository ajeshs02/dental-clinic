import { Card, CardContent } from "@/components/ui/card";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

interface DoctorProps {
  name: string;
  specialty: string;
  image: string;
}

export function DoctorCard({ name, specialty, image }: DoctorProps) {
  return (
    <Card className="w-full m-1 max-w-sm  mx-auto shadow-lg rounded-xl border border-gray-300 overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="absolute top-2 left-2 bg-blue-500 text-white p-2 rounded-full">
          {/* Add any icon or action here if needed */}
          <span>&larr;</span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-blue-500 italic">{specialty}</p>
        <p className="text-gray-600 mt-2">
          Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebumm clita
          rebumm dolor.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-900">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaLinkedin size={20} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
