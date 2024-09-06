import { useState } from "react";
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
  );
};
