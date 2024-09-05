import "../extracss/animate.css";

export const TechStackBand: React.FC = () => {
  return (
    <div className="overflow-hidden w-full h-24 bg-gray-200">
      <div className="flex animate-marquee">
        <div className="tech-container flex-nowrap mt-8">
          {/* Original Content */}
          <span className="text-xl font-bold text-gray-700 px-8">React</span>
          <span className="text-xl font-bold text-gray-700 px-8">Node.js</span>
          <span className="text-xl font-bold text-gray-700 px-8">Tailwind CSS</span>
          <span className="text-xl font-bold text-gray-700 px-8">TypeScript</span>
          <span className="text-xl font-bold text-gray-700 px-8">Postgres</span>
          <span className="text-xl font-bold text-gray-700 px-8">Prisma</span>
          <span className="text-xl font-bold text-gray-700 px-8">Hono.js</span>
          <span className="text-xl font-bold text-gray-700 px-8">Next.js</span>
          <span className="text-xl font-bold text-gray-700 px-8">Docker</span>
          <span className="text-xl font-bold text-gray-700 px-8">CI/CD</span>

          {/* Duplicate Content */}
          <span className="text-xl font-bold text-gray-700 px-8">React</span>
          <span className="text-xl font-bold text-gray-700 px-8">Node.js</span>
          <span className="text-xl font-bold text-gray-700 px-8">Tailwind CSS</span>
          <span className="text-xl font-bold text-gray-700 px-8">TypeScript</span>
          <span className="text-xl font-bold text-gray-700 px-8">Postgres</span>
          <span className="text-xl font-bold text-gray-700 px-8">Prisma</span>
          <span className="text-xl font-bold text-gray-700 px-8">Hono.js</span>
          <span className="text-xl font-bold text-gray-700 px-8">Next.js</span>
          <span className="text-xl font-bold text-gray-700 px-8">Docker</span>
          <span className="text-xl font-bold text-gray-700 px-8">CI/CD</span>
        </div>
      </div>
    </div>
  );
};

export default TechStackBand;
