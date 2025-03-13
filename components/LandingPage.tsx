'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import GitHubCalendar from 'react-github-calendar'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import Blogs from './Blogs'

export default function LandingPage() {
  const [copyNotification, setCopyNotification] = useState(false)

  const skills = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Solidity",
    "Node.js", "PostgreSQL", "Express", "REST API",
    "Git", "Docker", "AWS", "Prisma"
  ]

  const projectCards = [
    { 
      title: 'Droplert', 
      description: "Real time notification system for any website through an npm package integration", 
      src: '/DarkLogo.png', 
      url: 'https://droplert.abstergo.dev/' 
    },
    { 
      title: 'DecentraWork', 
      description: "Web3-powered freelancing platform using Solana blockchain.", 
      src: '/project1.jpg', 
      url: 'https://decentrawork.abstergo.dev/' 
    },
    { 
      title: 'Solana Token Launcher', 
      description: "Platform for launching and managing Solana-based tokens.", 
      src: '/project3.jpg', 
      url: 'https://launcher.abstergo.dev/' 
    },
    { 
      title: 'JustDraw', 
      description: "A single-user drawing app with customizable tools and shape selection.", 
      src: '/project7.png', 
      url: 'https://justdraw.abstergo.dev/' 
    },

  ]

  const handleEmailClick = () => {
    navigator.clipboard.writeText("ParvJ@abstergo.dev")
    setCopyNotification(true)
    setTimeout(() => setCopyNotification(false), 2000)
  }

  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden bg-gradient-to-b from-[#0f1218] to-[#151922]">
      {/* Background gradient + grid */}
      <div className="fixed inset-0 w-full h-full z-0 opacity-40" dangerouslySetInnerHTML={{ 
        __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%;height:100%">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style="stop-color:#4a88ff;stop-opacity:0.15"/>
              <stop offset="100%" style="stop-color:#000000;stop-opacity:0"/>
            </radialGradient>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.05"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#glow)"/>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>`
      }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <nav className="flex justify-center items-center mb-24">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Abstergo
          </h1>
        </nav>

        {/* Hero Section */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Web Developer & Designer
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A passionate 20-year-old web developer, specializing in NextJs, React, and Postgres. 
                Turning ideas into stunning web applications from the ground up.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"></div>
                <Image 
                  src="/avatar.jpeg" 
                  alt="Profile" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full object-cover border-4 border-blue-500/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="px-6 py-3 rounded-full bg-white/5 text-cyan-300 font-medium text-sm sm:text-base 
                          border border-white/10 shadow-lg hover:bg-gradient-to-r hover:from-cyan-500 
                          hover:to-blue-500 hover:text-white hover:border-transparent 
                          transition-all duration-300 ease-out"
                style={{ animation: `fadeIn 0.6s ease-out ${index * 0.1}s both` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            GitHub Contributions
          </h2>
          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <GitHubCalendar 
              username="Absterrg0" 
              colorScheme="dark"
              theme={{
                dark: ['#1a1f25', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              blockMargin={5}
              blockSize={14}
              fontSize={12}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectCards.map((project) => (
              <a 
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 
                         overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] 
                         hover:border-blue-500/50"
              >
                <div className="aspect-video relative">
                  <Image 
                    src={project.src} 
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
{/* 
        <section className="mb-32">
          <Blogs />
        </section> */}

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 pb-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 sm:mb-0">
            © 2024 Abstergo. All rights reserved.
          </p>
          <div className="flex gap-8">
            <button
              onClick={handleEmailClick}
              className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </button>
            <a
              href="https://github.com/Absterrg0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/Absterrg0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </div>

      {/* Notification */}
      {copyNotification && (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white/10 backdrop-blur-xl 
                      text-cyan-300 text-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
          Email copied to clipboard!
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}