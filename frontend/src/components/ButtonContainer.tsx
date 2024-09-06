"use client";
import React, { useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { ProjectModal } from "./ProjectModal"; // Assume this component is created
import { FeedbackFormModal } from "./FeedbackFormModal"; // Assume this component is created
import { CustomProjectForm } from "./CustomProjectForm"

export function ButtonContainer() {
  const [isProjectModalOpen, setProjectModalOpen] = useState(false);
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
const [isCustomProjectFormOpen, setCustomProjectFormOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-3">
        <HoverBorderGradient
          className="text-center"
          containerClassName="p-4"
          onClick={() => setProjectModalOpen(true)}
        >
          Select Project
        </HoverBorderGradient>

        <HoverBorderGradient
          className="text-center"
          containerClassName="p-4"
          onClick={() => setFeedbackModalOpen(true)}
        >
          Give Feedback
        </HoverBorderGradient>

        <HoverBorderGradient 
          className="text-center"
          containerClassName="p-4"
          onClick={() => {
            // Assuming that clicking this button will also open the ProjectModal
            setCustomProjectFormOpen(true);
          }}
        >
          Request a Custom Project
        </HoverBorderGradient>
      </div>

      {isProjectModalOpen && (
        <ProjectModal onClose={() => setProjectModalOpen(false)} />
      )}
      {isFeedbackModalOpen && (
          <FeedbackFormModal onClose={() => setFeedbackModalOpen(false)} />
      )}

      {isCustomProjectFormOpen && ( 
        <CustomProjectForm onClose={() => setCustomProjectFormOpen(false)} />
        )}
    </div>
  );
}
