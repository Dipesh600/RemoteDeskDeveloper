import { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { ScheduleCallForm } from "./ScheduleCallForm";
import { Switch } from "../ui/themebtn";

export const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="w-full h-16 bg-transparent backdrop-blur-md shadow-lg border border-gray-200 rounded-lg mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-800 font-semibold transition-transform transform hover:scale-105 px-3 py-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="#about"
              className="text-gray-800 font-semibold transition-transform transform hover:scale-105 px-3 py-2 rounded-lg"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-800 font-semibold transition-transform transform hover:scale-105 px-3 py-2 rounded-lg"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                  <Link
                    to="/commercial-services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Commercial Services
                  </Link>
                  <Link
                    to="/student-services"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Student Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="#contact"
              className="text-gray-800 font-semibold transition-transform transform hover:scale-105 px-3 py-2 rounded-lg"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Switch />
            <button
              onClick={toggleForm}
              className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
            >
              Schedule Call
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Switch />
            <button className="text-gray-800 hover:text-indigo-600 focus:outline-none focus:text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-h-[80vh] w-full max-w-lg overflow-y-auto transform transition-all duration-300 ease-in-out translate-y-[-20px]">
            <button
              onClick={toggleForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ScheduleCallForm onClose={toggleForm} />
          </div>
        </div>
      )}
    </>
=======
import { HoveredLink, Menu, MenuItem } from "../ui/menu";
import { cn } from "../lib/utils";
import Switch from "../ui/themebtn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-1" />
    </div>
>>>>>>> 58fefbfaa4c7fc17282399768eef17149b2064a1
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">UI/UX</HoveredLink>
            <HoveredLink href="/seo">SEO</HoveredLink>
            <HoveredLink href="/video-editing">Video Editing</HoveredLink>
            <HoveredLink href="/video-editing">Chrome Extensions</HoveredLink>
            <HoveredLink href="/assignments">College Assignments</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Work">
          {/* Simplified grid of company/project logos */}
          {/* in this later use the screenshots of ur own projects  */}
          <div className="grid grid-cols-3 gap-6 p-4">
            <div className="text-center">
              <img
                src="https://assets.aceternity.com/demos/algochurn.webp"
                alt="AlgoChurn Logo"
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Project 1</p>
            </div>
            <div className="text-center">
              <img
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                alt="Tailwind Kit Logo"
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Project 2</p>
            </div>
            <div className="text-center">
              <img
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                alt="Rogue Logo"
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Project 3</p>
            </div>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Student Corner</HoveredLink>
            <HoveredLink href="/individual">Commercial Corner</HoveredLink>
            <HoveredLink href="/team">Small Projects</HoveredLink>
          </div>
        </MenuItem>
        <div className="ml24">
          <Switch />
        </div>
      </Menu>
    </div>

  );
}
