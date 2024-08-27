"use client";
import { useRef } from 'react';
import { motion } from "framer-motion";

export default function AboutMe() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div id="about" ref={aboutRef} className="bg-black text-white min-h-screen p-8 flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* About Me Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 lg:pr-8 flex flex-col items-center lg:items-start"
      >
        <h2 className="text-4xl font-bold mb-4 text-center lg:text-left">
          About Me
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed text-center lg:text-left">
            A 20yo Full Stack Web Developer from Bengaluru with knowledge in various frontend and backend skills and loves to build projects. I love to build projects in various domains and try to increase my skillset. When I am not coding, I probably am just geeking out over new technologies and maybe even contributing to some
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-end"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
          className="text-4xl font-extrabold mb-6 text-center lg:text-right"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Prisma", "Docker", "Postgres", "Express.js", "MongoDB"].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-700 hover:scale-105 transform transition-transform"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
