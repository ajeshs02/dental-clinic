import { navLinks } from "@/constants";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi"; // Hamburger icon from react-icons

export default function Sidebar() {
  return (
    <Sheet>
      {/* Sheet Trigger: Hamburger icon */}
      <SheetTrigger aria-label="Toggle sidebar">
        <FiMenu size={24} className="cursor-pointer text-gray-800" />
      </SheetTrigger>

      {/* Sheet Content: Sidebar */}
      <SheetContent side="right" className="bg-white p-4 w-64">
        <SheetHeader>
          <SheetTitle>
            <div className="text-blue-500 text-left text-2xl">MEDINOVA</div>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Select an option from the menu to navigate.
          </SheetDescription>
        </SheetHeader>

        {/* Nav Links */}
        <nav className="mt-6">
          <ul className="flex flex-col gap-y-4">
            {navLinks.map((data, index) => (
              <li key={index}>
                <a
                  href={data.link}
                  className="text-lg text-gray-700 hover:text-blue-500"
                >
                  {data.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
