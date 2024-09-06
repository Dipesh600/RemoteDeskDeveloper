import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ShineBorder from './Shine-border';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  sourceCode: string;
  videoUrl?: string;
  screenshotUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  liveDemo,
  sourceCode,
  videoUrl,
  screenshotUrl,
}) => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const cardCenterX = card.left + card.width / 2;
    const cardCenterY = card.top + card.height / 2;

    const rotateY = (e.clientX - cardCenterX) / 25; 
    const rotateX = -(e.clientY - cardCenterY) / 25; 

    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className="relative w-full h-full"
      style={{ perspective: '900px' }} // Perspective for 3D effect
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <ShineBorder
        borderRadius={12}     
        borderWidth={2}       
        duration={10}          // Align duration with card hover
        color={["#ffaa40", "#9c40ff"]}
        className="transition-all duration-300 ease-in-out" // Smooth transition
      >
        <motion.div
          animate={{
            rotateY: rotation.rotateY, 
            rotateX: rotation.rotateX,
            scale: 1.05,  // Slight scale for hover weight
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 200, 
            damping: 20, 
            mass: 0.5,
            duration: 0.3 // Align card's transition with ShineBorder
          }}
          className="relative z-10 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg p-6"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech, idx) => (
                <span key={idx} className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={liveDemo}
                className="relative text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Live Demo</span>
                <span className="absolute inset-0 bg-blue-600 transform -translate-x-full transition-transform duration-300 ease-in-out"></span>
              </a>
              <a
                href={sourceCode}
                className="relative text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Source Code</span>
                <span className="absolute inset-0 bg-green-600 transform -translate-x-full transition-transform duration-300 ease-in-out"></span>
              </a>
            </div>
          </div>
        </motion.div>
      </ShineBorder>

      {videoUrl && (
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center rounded-lg"
          style={{ pointerEvents: 'none' }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          <video
            className="w-full h-full object-cover rounded-lg"
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      )}

      {screenshotUrl && !videoUrl && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 80%)',
            transform: 'scale(1.2)',
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      )}
    </div>
  );
};
