import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/menu";
import { cn } from "../lib/utils";
import Switch from "../ui/themebtn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-1" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">UI/UX</HoveredLink>
            <HoveredLink href="/seo">SEO</HoveredLink>
            <HoveredLink href="/video-editing">Video Editing</HoveredLink>
            <HoveredLink href="/video-editing">Chrome Extensions</HoveredLink>
            <HoveredLink href="/assignments">College Assignments</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Work">
          {/* Simplified grid of company/project logos */}
          {/* in this later use the screenshots of ur own projects  */}
          <div className="grid grid-cols-3 gap-6 p-4">
            <div className="text-center">
              <img
                src="https://assets.aceternity.com/demos/algochurn.webp"
                alt="AlgoChurn Logo"
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Project 1</p>
            </div>
            <div className="text-center">
              <img
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                alt="Tailwind Kit Logo"
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Project 2</p>
            </div>
            <div className="text-center">
              <img
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                alt="Rogue Logo"
                className="w-16 h-16 mx-auto rounded-full"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Project 3</p>
            </div>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Student Corner</HoveredLink>
            <HoveredLink href="/individual">Commercial Corner</HoveredLink>
            <HoveredLink href="/team">Small Projects</HoveredLink>
          </div>
        </MenuItem>
        <div className="ml24">
          <Switch />
        </div>
      </Menu>
    </div>

  );
}
