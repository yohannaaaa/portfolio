"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect which section is in view
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 px-8 py-4 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg shadow-blue-500/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative group cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-500">
                Y
              </span>
            </div>
          </div>
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Navigation Links */}
        <div className="flex gap-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full px-2 py-2 border border-slate-200 dark:border-slate-700/50">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2 rounded-full transition-all duration-300"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-blue-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 font-medium transition-colors ${
                  isActive ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}>
                  {item.name}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Theme Toggle & CTA */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-6 py-2 bg-blue-500 rounded-full text-white font-medium">
              Let's Talk
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
