import { useState } from "react";
import Switch from "../ui/themebtn";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // For menu icons

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-1" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <a
            href="/contact"
            className="py-2 px-6 bg-gray-100 text-gray-900 font-medium hover:bg-gray-300 rounded-lg shadow"
          >
            Contact
          </a>
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
          <a
            href="/contact"
            className="block text-lg font-medium hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>

        {/* Theme Switch for Mobile */}
        <div className="mt-8">
          <Switch />
        </div>
      </div>
    </div>
  );
}
