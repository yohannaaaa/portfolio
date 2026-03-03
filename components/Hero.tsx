"use client";

import { motion } from "framer-motion";
import { Download, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-4 text-slate-600 dark:text-slate-400"
          >
            Hello I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-7xl font-bold mb-4 text-slate-900 dark:text-white"
          >
           YOHANNA BETSIHA
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl font-bold mb-6 text-slate-800 dark:text-slate-100"
          >
           A Full-stack <span className="text-blue-500">Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl"
          >
            I design and develop digital experiences using modern technologies, with a strong focus on performance, usability, and clean architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-4 items-center"
          >
            <div className="flex items-center gap-4">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50
                text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
              >
                <Download size={18} />
                View CV
              </a>

              <div className="flex items-center gap-3">
                <Link
                  href="www.linkedin.com/in/yohanna-merawi-6b4b82278"
                  target="_blank"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 
                  text-slate-700 dark:text-white transition-all duration-300"
                >
                  <Linkedin size={18} />
                </Link>

                <Link
                  href="https://github.com/yohannaaaa"
                  target="_blank"
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 
                  text-slate-700 dark:text-white transition-all duration-300"
                >
                  <Github size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative hidden md:flex justify-center items-center"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-96 h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-3xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-blue-500 rounded-full"
          />
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-8 -left-8 w-24 h-24 border-4 border-blue-400 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
