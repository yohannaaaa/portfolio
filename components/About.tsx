"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">
            About Me
          </h2>
          <div className="h-1 w-96 bg-blue-500 mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              I'm a passionate Full-Stack Developer with a strong foundation in modern web technologies and a keen eye for creating seamless user experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              My expertise spans across both frontend and backend development, allowing me to build robust, scalable applications from concept to deployment. I thrive on solving complex problems and transforming ideas into elegant, efficient solutions.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              With a commitment to clean code and best practices, I continuously explore emerging technologies to deliver innovative solutions that make a real impact.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/yohanna-merawi-6b4b82278"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-blue-500 px-6 py-3 rounded-full text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </motion.button>
              </Link>

              <a href="mailto:yohannamerawi@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 px-6 py-3 rounded-full text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
                >
                  <Mail size={20} />
                  Email
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
