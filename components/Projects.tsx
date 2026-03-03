"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "Wekil",
    description: "A collaborative document platform featuring AI-driven suggestion systems and version-tracking capabilities. Implemented intelligent editing assistance that reduced user editing time by 30% while improving document transparency and collaboration efficiency.",
    link: "https://g6-wekil-ai-1.vercel.app/",
    image: "/wekil.png",
  },
  {
    name: "Eskalate",
    description: "A comprehensive banking statistics dashboard built with Next.js and Tailwind CSS. Engineered data visualizations and interactive features that improved user engagement by 30%, delivering real-time insights into critical banking metrics through seamless integration of 20+ APIs.",
    link: "https://eskalate.io/",
    image: "/eskalate.png",
  },
  {
    name: "ChatRev",
    description: "An AI-powered chatbot platform designed to capture leads, increase conversions, and close sales. Enables real-time engagement with website visitors through personalized assistance, helping businesses maximize their conversion opportunities.",
    link: "#",
    image: "/chatrev.png",
  },
  {
    name: "A2SV Application Platform",
    description: "A centralized full-stack application platform that transformed a manual, paper-based submission process into a streamlined digital workflow. Features a unified reviewer dashboard and real-time status tracking, increasing reviewer productivity by 60% and enhancing applicant transparency by 50% for over 1,000 users.",
    link: "https://starter-project-git-main-ludis-projects.vercel.app/",
    image: "/a2sv.png",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            Projects
          </h2>
          <div className="h-1 w-96 bg-blue-500 mt-2" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 grid md:grid-cols-2 gap-8 items-center shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{project.name}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-blue-500 px-6 py-3 rounded-full text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  <ExternalLink size={20} />
                  View Project
                </motion.a>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden h-64 relative shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="fixed right-8 bottom-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 bg-white dark:bg-slate-900"
          >
            ↑
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
