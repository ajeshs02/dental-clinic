import { footerLinks } from "@/constants";

export default function QuickLinks() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {footerLinks.map(({ label, link }) => (
          <li key={label}>
            <a
              href={`${link}`}
              className="text-gray-400 text-lg hover:text-white transition duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
