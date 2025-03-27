import React, { useEffect, useRef } from "react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiCplusplus,
  SiPython,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiGit,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 text-5xl" />,
    glow: "shadow-yellow-400/50",
  },
  {
    name: "React",
    icon: <SiReact className="text-blue-500 text-5xl" />,
    glow: "shadow-blue-400/50",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500 text-5xl" />,
    glow: "shadow-teal-400/50",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600 text-5xl" />,
    glow: "shadow-green-400/50",
  },
  {
    name: "C++",
    icon: <SiCplusplus className="text-blue-700 text-5xl" />,
    glow: "shadow-blue-500/50",
  },
  {
    name: "Python",
    icon: <SiPython className="text-yellow-400 text-5xl" />,
    glow: "shadow-yellow-300/50",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 text-5xl" />,
    glow: "shadow-green-400/50",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-500 text-5xl" />,
    glow: "shadow-gray-400/50",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black text-5xl" />,
    glow: "shadow-gray-500/50",
  },
  {
    name: "Git",
    icon: <SiGit className="text-orange-500 text-5xl" />,
    glow: "shadow-orange-400/50",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-5xl" />,
    glow: "shadow-blue-500/50",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500 text-5xl" />,
    glow: "shadow-yellow-400/50",
  },
];

export default function Skills() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(autoScroll, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-start pt-10">
      {/* Heading */}
      <h1 className="text-6xl font-bold text-gray-900 mb-60">Skills</h1>

      {/* Scrolling Icons */}
      <div className="w-full h-32 flex items-start justify-center overflow-hidden">
        <div
          ref={scrollRef}
          className="w-[80%] flex overflow-hidden whitespace-nowrap"
        >
          <div className="flex gap-12 animate-scroll">
            {skills.concat(skills).map((skill, index) => (
              <div
                key={index}
                className={`w-24 h-24 flex items-center justify-center rounded-full 
                bg-white/30 backdrop-blur-lg shadow-lg ${skill.glow} transition-transform duration-300 ease-in-out transform 
                hover:scale-110 hover:shadow-xl`}
              >
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
