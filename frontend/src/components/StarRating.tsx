import React, { useState } from "react";

interface StarRatingProps {
  rating: number;
  onChange: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, onChange }) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredRating(index);
  const handleMouseLeave = () => setHoveredRating(null);
  const handleClick = (index: number) => onChange(index);

  return (
    <div
      className="flex space-x-1 cursor-pointer"
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          filled={index < (hoveredRating || rating)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onClick={() => handleClick(index + 1)}
        />
      ))}
    </div>
  );
};

const Star: React.FC<{ filled: boolean; onMouseEnter: () => void; onClick: () => void }> = ({ filled, onMouseEnter, onClick }) => {
  return (
    <svg
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`w-6 h-6 ${filled ? "text-yellow-500" : "text-gray-400"}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.21-6.008 5.857 1.417 8.274L12 17.749l-7.409 3.889L6.008 15.22 0 9.362l8.332-1.21z" />
    </svg>
  );
};
