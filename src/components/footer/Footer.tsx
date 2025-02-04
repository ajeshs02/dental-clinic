import { socialIcons, footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-12 px-6">
        {/* Grid for Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Left Column - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="text-gray-400 text-lg hover:text-white transition duration-300"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
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

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-400">Email: contact@example.com</p>
            <p className="text-gray-400">Phone: +123 456 7890</p>
            <p className="text-gray-400">Address: 123 Main St, City</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
