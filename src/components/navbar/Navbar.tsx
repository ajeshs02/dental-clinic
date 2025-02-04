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
    <motion.header
      variants={{
        visible: { y: 0 }, // Visible state at top
        hidden: { y: "-100%" }, // Hidden state off-screen
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="wrapper shadow-md bg-white flex-between py-4 fixed top-0 left-0 right-0 z-50"
    >
      {/* Left Logo */}
      <div className="text-blue-500 text-3xl">MEDINOVA</div>

      {/* Right Links */}
      <nav className="hidden lg:block">
        <ul className="flex-center w-fit gap-x-5">
          {navLinks.map((data, index) => (
            <li key={index}>
              <a href={data.link}>{data.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:hidden">
        <Sidebar />
      </div>
    </motion.header>
  );
}
