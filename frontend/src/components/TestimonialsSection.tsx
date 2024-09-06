"use client";
import React from "react";
import { InfiniteMovingCardsDemo } from "../ui/infinite-moving-cards-demo"; // Import the InfiniteMovingCardsDemo component
import "../extracss/animate.css"; // Import the CSS file

export const TestimonialsSection: React.FC = () => {
  // Update the testimonials data to match the expected structure
  const testimonials = [
    {
      quote: "The team was incredibly professional and delivered on time!",
      name: "John Doe",
      title: "CEO, Company A",
    },
    {
      quote: "Amazing service! The end result exceeded our expectations.",
      name: "Jane Smith",
      title: "Founder, Company B",
    },
    {
      quote: "Great collaboration, timely updates, and fantastic delivery.",
      name: "Sam Wilson",
      title: "Project Manager, Company C",
    },
  ];

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          What Our Clients Say
        </h2>
        {/* Use the correct props for InfiniteMovingCardsDemo */}
        <InfiniteMovingCardsDemo
          items={testimonials} // Pass the testimonials data as the items prop
          className="scroll-content"
          direction="left" // Optional: Set the scroll direction
          speed="normal" // Optional: Set the scroll speed
          pauseOnHover={true} // Optional: Pause the scroll on hover
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
