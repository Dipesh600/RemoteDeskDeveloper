import { Navbar } from "../components/Navbar";
import { Hero } from "../components/HeroSection";
import { AnimatedPinDemo } from "../components/Projects";
import { TechStackBand } from "../ui/techband";
import "../fonts/font.css"

export const LandingPage = () => {
  return (
    <>
      <div className="w-full">
        {/* Navbar Section */}
        <div className="w-full h-16 bg-white shadow-md">
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="w-full h-[calc(100vh-4rem)] border-2 rounded-xl">
          <Hero />
        </div>
        
        {/* Spacer Div */}
        <div className="mt-64"></div>

        {/* Project Section */}
        <div className="relative">
          <h2 className="absolute inset-0 text-center font-extrabold text-4xl text-gray-300 amaranth-regular-italic">
            Our Work
          </h2>
          <h2 className="relative text-center font-extrabold text-4xl mt-16 amaranth-regular-italic">
            Our Work
          </h2>
          
          <div className="w-full">
            <AnimatedPinDemo />
          </div>

          <div className="mt-16">
            <TechStackBand/>
          </div>
        </div>
      </div>
    </>
  );
};
