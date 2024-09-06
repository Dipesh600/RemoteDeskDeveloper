"use client";
import React from "react";

export function ProjectModal({ onClose }: { onClose: () => void }) {
  // Dummy project data
  const projects = [
    { title: 'Project A', description: 'Description A' },
    { title: 'Project B', description: 'Description B' },
    { title: 'Project C', description: 'Description C' },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-11/12 md:w-1/2">
        <button onClick={onClose} className="absolute top-2 right-2 text-lg">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Select a Project</h2>
        <ul>
          {projects.map((project, idx) => (
            <li key={idx} className="border-b py-2">
              <h3 className="font-semibold">{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default  ProjectModal;
