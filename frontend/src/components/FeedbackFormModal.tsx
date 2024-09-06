"use client";
import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { cn } from "../lib/utils";
import { StarRating } from "./StarRating"; // Import the new component

interface FeedbackFormModalProps {
  onClose: () => void;
}

export const FeedbackFormModal: React.FC<FeedbackFormModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);

    // Clear form data
    setFormData({
      name: "",
      email: "",
      feedback: "",
      rating: 0,
    });

    // Close modal after submission
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <LabelInputContainer>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          type="text"
        />
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          type="email"
        />
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="feedback">Feedback Message</Label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Your Feedback"
          rows={4}
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="rating">Rating (Optional)</Label>
        <StarRating rating={formData.rating} onChange={handleRatingChange} />
      </LabelInputContainer>

      <button
        type="submit"
        className="mt-6 bg-gradient-to-br relative group/btn from-black dark:from-neutral-800 to-neutral-600 w-full text-white rounded-lg py-2.5 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Submit
        <BottomGradient />
      </button>
    </form>
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

export default FeedbackFormModal;
