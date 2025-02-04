type HeaderProps = {
  heading: string;
  subheading: string;
};

export default function SectionHeader({ heading, subheading }: HeaderProps) {
  return (
    <div className="text-center my-4">
      <h1 className="text-blue-500 uppercase text-xl font-bold tracking-wider">
        {heading}
        <span className="block w-12 h-[4px] bg-gray-300 mx-auto mt-1"></span>
      </h1>
      <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mt-2">
        {subheading}
      </h2>
    </div>
  );
}
