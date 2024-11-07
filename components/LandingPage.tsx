'use client'
import React, { useState } from 'react'
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default function LandingPage() {
    const [copyNotification, setCopyNotification] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

  const skills = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3",
    "Node.js", "PostgreSQL", "Express", "REST API", "GraphQL",
    "Git", "Docker", "AWS", "Firebase", "NextJs","Prisma"
  ]

  const projectCards = [
    { title: 'DecentraWork', description: "DecentraWork is a web3-powered freelancing platform that streamlines project management and payment processes. It enables project providers to collaborate securely with freelancers while leveraging Solana blockchain for seamless payments via escrow. The platform features real-time messaging, robust project tracking, and end-to-end functionality, all while maintaining low fees for providers. DecentraWork offers a modern and efficient alternative to traditional freelancing platforms by integrating decentralized technology with user-centric design.", src: '/project1.jpg', url: 'https://decentra-work.vercel.app/' },
    { title: 'Solana Token Launcher', description: "Token Launcher App is a Solana-based platform that allows users to launch new tokens with metadata, airdrop SOL to their accounts, send SOL to others, and sign blockchain messages. Designed for simplicity and efficiency, the app empowers users to manage their on-chain assets effortlessly while leveraging Solana's fast and low-cost transactions.", src: '/project3.jpg', url: 'https://launcher-solana.vercel.app/' },
    { title: 'OpenSource Repositories', description: "RepoFlow is a platform designed to support open-source collaboration by allowing users to showcase repositories that need contributions. It directly integrates with GitHub, enabling users to fetch and display their projects effortlessly. Additionally, RepoFlow offers a bookmarking feature so users can save and organize their favorite repositories, making it easier to keep track of potential contribution opportunities. The platform fosters a vibrant community of developers by streamlining the process of discovering and contributing to open-source projects.", src: '/project6.png', url: 'https://repoflow-abstergo.vercel.app/' },
    { title: 'Forums', description: "MuktiForums, founded by Het Joshi, is a vibrant online platform for open-source enthusiasts. It offers a modern, gradient-themed interface where users can discuss software, collaborate on projects, and share knowledge. With features like trending topics, community spotlights, and interactive elements, MuktiForums fosters a dynamic ecosystem for open-source innovation and learning.", src: '/project4.png', url: 'https://forums-abstergo.vercel.app/' },
  ]

  const handleEmailClick = () => {
    navigator.clipboard.writeText("parvj5212@gmail.com");
    setCopyNotification(true);
    setTimeout(() => setCopyNotification(false), 2000); // Hide notification after 2 seconds
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="bg-gradient-to-br from-[#0c0718] to-[#1a0b2e] min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Animated Header */}
        <motion.nav 
          className="flex justify-center items-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500 cursor-pointer">
            Abstergo
          </h1>
        </motion.nav>

        {/* Hero Section */}
        <motion.section 
          id="about" 
          className="mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500">
                Web Developer & Designer
              </h2>
              <p className="text-lg text-gray-300">
                A passionate 20-year-old web developer, familiar with NextJs, React, Postgres, and more. 
                Love to code and build webapps from scratch.
              </p>
            </div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-pink-500 rounded-full blur-3xl opacity-50"></div>
                <Image 
                  src="/avatar.jpeg" 
                  alt="Profile" 
                  width={256}
                  height={256}
                  className="relative w-64 h-64 rounded-full object-cover border-2 border-amber-300"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Redesigned Skills Section */}
        <motion.section 
          id="skills" 
          className="mb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500 mb-12 text-center">Skills & Technologies</h2>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2
                  text-sm text-gray-300 hover:bg-white/10 hover:border-amber-300/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Updated Projects Section */}
        <motion.section 
          id="projects" 
          className="mb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-500 mb-12 text-center">Projects</h2>
          <div className="space-y-12">
            {projectCards.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden
                  hover:bg-white/10 hover:border-amber-300/50 transition-all duration-300 group
                  flex flex-col md:flex-row items-stretch h-[400px]"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="md:w-1/2 relative h-full">
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0c0718]/80 to-transparent md:bg-gradient-to-b"></div>
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-amber-300 hover:text-amber-400 transition-colors"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {copyNotification && (
        <div className="fixed bottom-8 right-8 bg-gray-800 text-white text-sm rounded-lg px-4 py-2 shadow-lg">
          Email copied to clipboard!
        </div>
      )}
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="border-t border-white/10 pt-8 pb-8 flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-center text-white/60 mt-4">
            © 2024 Abstergo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button
              className="text-white/60 hover:text-amber-300 transition-colors"
              onClick={handleEmailClick}
            >
              <Mail className="w-6 h-6" />
            </button>
            <a
              href="https://github.com/Absterrg0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-amber-300 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/parv-jain-82169b297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-amber-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/Abstergo471240"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-amber-300 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}