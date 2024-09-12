import React from 'react';

interface ClientFormProps {
  selectedTemplate: string;
}

const ClientForm: React.FC<ClientFormProps> = ({ selectedTemplate }) => {
  return (
    <form className="space-y-8 bg-white bg-opacity-90 p-10 rounded-xl shadow-lg border border-gray-200 max-w-lg mx-auto backdrop-filter backdrop-blur-md">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
        Get in Touch
      </h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Let us know about your project. We’ll get back to you as soon as possible.
      </p>

      {/* Display the selected template */}
      <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-center mb-6">
        Selected Template: <span className="font-bold">{selectedTemplate}</span>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform  duration-300"
          />
        </div>

        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform  duration-300"
          />
        </div>

        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Describe your project"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform transform duration-300"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform  transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ClientForm;
