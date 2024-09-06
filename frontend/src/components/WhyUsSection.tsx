// src/components/WhyUsSection.tsx

import React from "react";
import { Spotlight } from "../ui/Spotlight";
import "../extracss/animate.css";

export const WhyUsSection: React.FC = () => {
    return (
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        {/* Spotlight with Animation */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 animate-spotlight" // Apply the CSS class here
          fill="white"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Crafting Exceptional Digital Experiences
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            At Remote Desk Developer, we combine expertise with creativity to
            deliver cutting-edge software and web solutions that drive success for
            our clients. Our commitment to excellence and customer satisfaction
            sets us apart in the industry.
          </p>
        </div>
      </div>
    );
  };