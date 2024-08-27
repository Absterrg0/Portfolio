"use client";
import { motion } from "framer-motion";
import ExploreButton from "./ui/explore";
import { useCallback } from 'react';

// Define the scrollToSection function at the top level of the component
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function HomeComp() {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold mb-6 text-center"
        whileHover={{ scale: 1.05, color: "#00b4d8" }}
      >
        Abstergo
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg text-gray-400 text-center max-w-xl"
        whileHover={{ color: "#f4a261" }}
      >
        Web Developer who is skilled in both front-end and back-end development, and has a mindset focused on projects and solving problems.
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "80%" }}
        transition={{ duration: 1.5 }}
        className="border-t border-gray-700 mt-8"
        whileHover={{ width: "85%", borderColor: "#00b4d8" }}
      ></motion.div>
      
      {/* Explore Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="p-3 m-3"
        whileHover={{ scale: 1.1 }}
      >
        <button
          onClick={() => scrollToSection('projects')}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Projects
        </button>
      </motion.div>
    </div>
  );
}
