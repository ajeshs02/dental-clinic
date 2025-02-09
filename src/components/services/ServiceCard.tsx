import FadeInStagger from "../common/framer-motion/FadeInStaggerDiv";

type ServiceItemProps = {
  index: number;
  icon: any;
  title: string;
  description: string;
};

export default function ServiceItem({
  index,
  icon,
  title,
  description,
}: ServiceItemProps) {
  const Icon = icon;
  return (
    <FadeInStagger
      index={index}
      className="p-8 bg-gray-100 rounded-2xl shadow-md text-center hover:shadow-lg duration-300  hover:scale-105 cursor-pointer "
    >
      <div className="w-20 h-20 bg-blue-500 flex items-center justify-center rounded-full mx-auto">
        <Icon className="text-white text-4xl" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </FadeInStagger>
  );
}
