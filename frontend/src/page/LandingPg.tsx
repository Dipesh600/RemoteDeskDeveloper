import { NavbarDemo } from "../components/Navbar";
import { Hero } from "../components/HeroSection";
import { ProjectList } from "../components/Projects";
import { TechStackBand } from "../ui/techband";
import { PricingCard } from "../components/PaymentCard";
import "../fonts/font.css";

export const LandingPage = () => {
  return (
    <>
      <div className="w-full bg-gray-50">
        {/* Navbar Section */}
        <div className=" shadow-lg fixed top-0 left-0 z-50">
          <NavbarDemo/>
        </div>

        {/* Hero Section */}
        <div className="w-full h-[calc(100vh-4rem)] mt-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg overflow-hidden">
          <Hero />
        </div>

        {/* Spacer Div */}
        <div className="mt-32"></div>

        {/* Project Section */}
        <div className="relative py-16 bg-white">
          <div className="relative text-center">
            <h2 className="text-gray-300 font-extrabold text-5xl amaranth-regular-italic absolute inset-x-0 top-1/2 transform -translate-y-1/2">
              Our Work
            </h2>
            <h2 className="text-gray-800 font-extrabold text-5xl amaranth-regular-italic relative z-10">
              Our Work
            </h2>
          </div>

          <div className="w-full mt-12">
            <ProjectList />
          </div>

          <div className="mt-16">
            <TechStackBand />
          </div>

          <div className="mt-16 flex flex-row justify-center space-x-8">
            <div className="w-1/3 ">
              <PricingCard
                plan="Student"
                price="$10"
                features={[
                  { feature: "Projects of all types", available: true },
                  { feature: "3 Day delivery", available: true },
                  { feature: "24/7 Online Support", available: false },
                  { feature: "From all tech stack", available: true },
                  { feature: "Maintenance", available: false },
                  { feature: "Scalable and SEO optimized", available: false },

                ]}
                buttonLabel="Choose Plan"
                onClick={() => alert("Student Plan selected!")}
              />
            </div>
            <div className="w-1/3">
              <PricingCard
                plan="Premium"
                price="$125"
                features={[
                  { feature: "Full Stack Projects", available: true },
                  { feature: "Fast Delivery", available: true },
                  { feature: "Scalable and SEO optimized", available: true },
                  { feature: "24/7 Online Support", available: true },
                  { feature: "Latest tech stack", available: true },
                  { feature: "3 months maintenance at minimal cost", available: true },
                ]}
                buttonLabel="Choose Plan"
                onClick={() => alert("Premium Plan selected!")}
              />
            </div>
        </div>
        </div>
      </div>
    </>
  );
};
