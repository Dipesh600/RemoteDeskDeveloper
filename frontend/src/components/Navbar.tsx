import  { useState } from "react";
import { ScheduleCallForm } from "./ScheduleCallForm";

export const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <>
      <nav className="w-full h-16 bg-transparent backdrop-blur-2xl shadow-md border rounded-xl mt-2 bg-">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-800">
              Logo
            </a>
          </div>

          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="text-gray-800 transition-shadow duration-500 ease-in-out font-bold hover:shadow-xl hover:shadow-gray-300 px-3 py-2 rounded-lg"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 transition-shadow duration-500 ease-in-out font-bold hover:shadow-xl hover:shadow-gray-300 px-3 py-2 rounded-lg"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-800 transition-shadow duration-500 ease-in-out font-bold hover:shadow-xl hover:shadow-gray-300 px-3 py-2 rounded-lg"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-800 transition-shadow duration-500 ease-in-out font-bold hover:shadow-xl hover:shadow-gray-300 px-3 py-2 rounded-lg"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <button
              onClick={toggleForm}
              className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-500 ease-in-out"
            >
              Schedule Call
            </button>
          </div>

          <div className="md:hidden">
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
