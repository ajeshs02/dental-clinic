import QuickLinks from "./QuickLinks";
import Social from "./Social";
import GetInTouch from "./GetInTouch";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="mx-12 px-6 py-12">
        {/* Grid for Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <QuickLinks />

          {/* Get in Touch */}
          <GetInTouch />

          {/* Follow Us */}
          <Social />
        </div>
      </div>

      <div className="border-t flex-center gap-x-2 border-gray-700 py-2 text-center text-sm">
        <FaRegCopyright /> All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
