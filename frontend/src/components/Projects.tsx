import React from 'react';
import { ProjectCard } from "../ui/projectCard";

const projects = [
  {
    title: 'Project One',
    description: 'This is a description of Project One.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveDemo: 'https://example.com/live-demo',
    sourceCode: 'https://github.com/example/repo',
    videoUrl: 'https://example.com/video.mp4',
    screenshotUrl: 'https://example.com/screenshot.png',
  },
  {
    title: 'Project Two',
    description: 'This is a description of Project Two.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    liveDemo: 'https://example.com/live-demo',
    sourceCode: 'https://github.com/example/repo',
    videoUrl: 'https://example.com/video.mp4',
    screenshotUrl: 'https://example.com/screenshot.png',
  },
  {
    title: 'Project Three',
    description: 'This is a description of Project Three.',
    techStack: ['Vue', 'JavaScript', 'Vuetify'],
    liveDemo: 'https://example.com/live-demo',
    sourceCode: 'https://github.com/example/repo',
    videoUrl: 'https://example.com/video.mp4',
    screenshotUrl: 'https://example.com/screenshot.png',
  },
];

export const ProjectList: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            liveDemo={project.liveDemo}
            sourceCode={project.sourceCode}
            videoUrl={project.videoUrl}
            screenshotUrl={project.screenshotUrl}
          />
        ))}
      </div>
    </div>
  );
};
