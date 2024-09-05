"use client";
import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { cn } from "../lib/utils";

export const ScheduleCallForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Clear form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      notes: "",
    });

    // Close the form modal
    onClose();
  };

  return (
    <>
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-4">
        Schedule a Call
      </h2>
      <p className="text-neutral-600 text-base mb-6 dark:text-neutral-300">
        Please fill in the details below to schedule a call with us.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
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
            placeholder="john.doe@example.com"
            required
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 123 456 7890"
            required
            type="tel"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="date">Preferred Date</Label>
          <Input
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            type="date"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="time">Preferred Time</Label>
          <Input
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            type="time"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="notes">Additional Notes</Label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any additional information you'd like to provide..."
            rows={4}
            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
        </LabelInputContainer>

        <button
          type="submit"
          className="mt-6 bg-gradient-to-br relative group/btn from-black dark:from-neutral-800 to-neutral-600 w-full text-white rounded-lg py-2.5 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Submit
          <BottomGradient />
        </button>
      </form>
    </>
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
