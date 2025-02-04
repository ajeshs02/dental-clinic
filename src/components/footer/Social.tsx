import { socialIcons } from "@/constants";

export default function Social() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-6">
        {socialIcons.map(({ icon: Icon, name, link }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-3xl transition duration-300"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
