import { Cover } from "../ui/cover";

export function CoverDemo() {
  return (
    <div className="relative bg-white dark:bg-black overflow-hidden h-screen flex items-center justify-center">
      {/* Sticky Note Image */}
      <div
        className="absolute z-0"
        style={{
          backgroundImage: `url("/stickynote.png")`,
          width: "400px", // Adjust width to fit your design
          height: "400px", // Adjust height to fit your design
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          top: "17%", // Adjust the vertical positioning as needed
          right: "7%", // Adjust the horizontal positioning as needed
          transform: "rotate(-10deg)", // Optional: Rotate the sticky note for a playful effect
        }}
      />

      {/* Main Content Container */}
      <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-white leading-tight">
          Wanna make cool websites?
        </h1>

        {/* Subheading with animation */}
        <div className="relative inline-block mt-4">
          <Cover className="text-4xl lg:text-5xl font-extrabold text-neutral-800 dark:text-white">
            Remote Desk Developers.
          </Cover>
        </div>

        {/* Call-to-action Button */}
        
      </div>
    </div>
  );
}
