import { useState } from "react";
import Switch from "../ui/themebtn";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-1" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false); // For dropdown
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className={`fixed top-0 inset-x-0 max-w-6xl mx-auto z-50 p-4 backdrop-blur-xl shadow-md rounded-lg ${className}`}>
      <nav className="flex justify-between items-center">
        {/* Agency Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800 amaranth-regular-italic">
          Remote Desk Developers
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="/"
            className="py-2 px-6 bg-gray-100 text-gray-900 font-medium hover:bg-gray-300 rounded-lg shadow"
          >
            Home
          </a>
          <a
            href="/projects"
            className="py-2 px-6 bg-gray-100 text-gray-900 font-medium hover:bg-gray-300 rounded-lg shadow"
          >
            Projects
          </a>

          {/* Contact with Dropdown */}
          <div className="relative">
            <button
              className="py-2 px-6 bg-gray-100 text-gray-900 font-medium hover:bg-gray-300 rounded-lg shadow flex items-center"
              onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
            >
              Contact <FaCaretDown className="ml-2" />
            </button>
            {isContactDropdownOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4">
                <a
                  href=""
                  className="block text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => navigate("/project-template")}
                >
                  Student's Corners
                </a>
                <a
                  href="/contact/support"
                  className="block text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                >
                  Commercial Corner
                </a>
                <a
                  href="/contact/career"
                  className="block text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                >
                  Support
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* Theme Switch for Desktop */}
        <div className="hidden md:flex">
          <Switch />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-gray-800 p-6 shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-800"
        >
          <HiX size={28} />
        </button>

        {/* Sidebar Menu Items */}
        <div className="flex flex-col space-y-6 mt-12">
          <a
            href="/"
            className="block text-lg font-medium hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/projects"
            className="block text-lg font-medium hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>

          {/* Contact with Dropdown for Mobile */}
          <div>
            <button
              className="block text-lg font-medium flex justify-between items-center w-full"
              onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
            >
              Contact <FaCaretDown className="ml-2" />
            </button>
            {isContactDropdownOpen && (
              <div className="mt-2">
                <a
                  className="block text-lg font-medium hover:text-blue-600 transition-colors pl-4"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/project-template");
                  }}
                >
                  General Inquiry
                </a>
                <a
                  href="/contact/support"
                  className="block text-lg font-medium hover:text-blue-600 transition-colors pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Support
                </a>
                <a
                  href="/contact/career"
                  className="block text-lg font-medium hover:text-blue-600 transition-colors pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Career Opportunities
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Theme Switch for Mobile */}
        <div className="mt-8">
          <Switch />
        </div>
      </div>
    </div>
  );
}
