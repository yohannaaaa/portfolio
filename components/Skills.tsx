"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiPython, 
  SiAngular, 
  SiGo, 
  SiNodedotjs, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiGithub, 
  SiHtml5, 
  SiCss3, 
  SiPostgresql 
} from "react-icons/si";

const techStack = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate the array for seamless loop
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            Skills
          </h2>
          <div className="h-1 w-96 bg-blue-500 mt-2" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100"
        >
          Tech Stack
        </motion.h3>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />
          
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -1920], // Adjust based on content width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="relative p-8 rounded-full flex items-center justify-center min-w-[120px] h-[120px] group flex-shrink-0"
                >
                  <Icon 
                    className="w-12 h-12 transition-colors duration-300 drop-shadow-lg" 
                    style={{ color: tech.color }}
                  />
                  <div className="absolute inset-0 bg-slate-900/90 dark:bg-slate-100/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl">
                    <span className="text-sm font-medium text-white dark:text-slate-900 text-center px-2">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
