import React, { useState } from "react";
import { ProjectList } from "./Projects";
import { ScheduleCallForm } from "../components/ScheduleCallForm"; // Assuming form is already created
import { ButtonContainer } from "./ButtonContainer";
export const ProjectShowcaseSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Our Work
        </h2>
        <ProjectList />
      </div>
    <ButtonContainer />

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <ScheduleCallForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
};
