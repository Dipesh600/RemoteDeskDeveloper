"use client";
import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { cn } from "../lib/utils";

interface CustomProjectFormProps {
  onClose: () => void;
}

export const CustomProjectForm: React.FC<CustomProjectFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    techStack: "",
    budget: "",
    timeline: "",
    additionalNotes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Project Request submitted:", formData);

    // Clear form data
    setFormData({
      projectName: "",
      description: "",
      techStack: "",
      budget: "",
      timeline: "",
      additionalNotes: "",
    });

    // Close modal
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <LabelInputContainer>
            <Label htmlFor="projectName">Project Name</Label>
            <Input
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Project Name"
              required
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="description">Description</Label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Project Description"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="techStack">Preferred Technology Stack</Label>
            <Input
              id="techStack"
              name="techStack"
              value={formData.techStack}
              onChange={handleChange}
              placeholder="Preferred Tech Stack"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="budget">Estimated Budget</Label>
            <Input
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Estimated Budget"
              type="number"
              min="0"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="timeline">Timeline</Label>
            <Input
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="Project Timeline"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              placeholder="Any additional notes"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </LabelInputContainer>

          <button
            type="submit"
            className="mt-6 bg-gradient-to-br relative group/btn from-black dark:from-neutral dark:from-neutral-800 to-neutral-600 w-full text-white rounded-lg py-2.5 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Submit
            <BottomGradient />
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default CustomProjectForm;
