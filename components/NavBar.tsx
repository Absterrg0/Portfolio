"use client";
import { motion } from "framer-motion";
import { Poppins } from 'next/font/google';
import { useCallback } from 'react';

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function NavBar() {
  return (
    <motion.nav
      className={`bg-black text-white p-4 flex justify-between items-center shadow-lg ${poppins.className}`}
    >
      {/* Left side - Logo */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-2xl font-bold tracking-wide"
      >
        Abstergo
      </motion.div>

      {/* Right side - Menu */}
      <motion.div
        className="flex space-x-8 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.1, color: "#00b4d8" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, color: "#00b4d8" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          About
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, color: "#00b4d8" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
