import React from "react";
import { NavbarDemo } from "../components/Navbar";
import { WhyUsSection } from "../components/WhyUsSection";
import { ProjectShowcaseSection } from "../components/ProjectShowcaseSection";
import { TestimonialsSection } from "../components/TestimonialsSection";

const StudentServices: React.FC = () => {
  return (
    <div>
      <NavbarDemo />

      {/* Main content */}
      <main className="pt-16">
        <WhyUsSection />
        <ProjectShowcaseSection />
        <TestimonialsSection />
      </main>
    </div>
  );
};

export default StudentServices;
