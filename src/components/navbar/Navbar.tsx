import { navLinks } from "@/constants";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsHidden(true); // Hide navbar on scroll down
    } else {
      setIsHidden(false); // Show navbar on scroll up
    }
  });

  return (
    <NavbarWrapper isHidden={isHidden}>
      {/* Left Logo */}
      <div className="text-blue-500 text-4xl">MEDINOVA</div>

      {/* Right Links */}
      <nav className="hidden lg:block">
        <ul className="flex-center w-fit gap-x-5">
          {navLinks.map((data, index) => (
            <li key={index}>
              <a
                  href={data.link}
                  className="relative text-lg px-1 text-black transition-colors duration-300 
                            hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-400 
                            hover:bg-clip-text hover:text-transparent active:to-blue-900 "
                >
                {data.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar (hide in large screen and above) */}
      <div className="lg:hidden">
        <Sidebar />
      </div>
    </NavbarWrapper>
  );
}

// wrapper component for navbar with framer motion logic
function NavbarWrapper({
  children,
  isHidden,
}: {
  children: React.ReactNode;
  isHidden: boolean;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: isHidden ? 0 : 1, y: isHidden ? -100 : 0 }} // Hide navbar on scroll down
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="wrapper shadow-md bg-white flex-between py-4 fixed top-0 left-0 right-0 z-50"
    >
      {children}
    </motion.header>
  );
}
