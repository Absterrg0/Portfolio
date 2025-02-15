'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import GitHubCalendar from 'react-github-calendar'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function LandingPage() {
  const [copyNotification, setCopyNotification] = useState(false)

  const skills = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3",
    "Node.js", "PostgreSQL", "Express", "REST API", "GraphQL",
    "Git", "Docker", "AWS", "Firebase", "Prisma"
  ]

  const projectCards = [
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
      title: 'OpenSource Repositories', 
      description: "Platform for showcasing and contributing to open-source projects.", 
      src: '/project6.png', 
      url: 'https://repoflow.abstergo.dev/' 
    },
    { 
      title: 'Droplert', 
      description: "Real time notification system for any website through an npm package integration", 
      src: '/DarkLogo.png', 
      url: 'https://droplert.abstergo.dev/' 
    }
  ]

  const handleEmailClick = () => {
    navigator.clipboard.writeText("ParvJ@abstergo.dev")
    setCopyNotification(true)
    setTimeout(() => setCopyNotification(false), 2000)
  }

  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden bg-[#111318]">
      {/* Background SVG */}
      <div className="fixed inset-0 w-full h-full z-0" dangerouslySetInnerHTML={{ 
  __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%;height:100%">
    <defs>
      <linearGradient id="metallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1a1f25;stop-opacity:0.8">
          <animate attributeName="stop-opacity" values="0.8;0.9;0.8" dur="8s" repeatCount="indefinite" />
        </stop>
        <stop offset="50%" style="stop-color:#2a3038;stop-opacity:0.9">
          <animate attributeName="stop-opacity" values="0.9;1;0.9" dur="8s" repeatCount="indefinite" />
        </stop>
        <stop offset="100%" style="stop-color:#1a1f25;stop-opacity:0.8">
          <animate attributeName="stop-opacity" values="0.8;0.9;0.8" dur="8s" repeatCount="indefinite" />
        </stop>
      </linearGradient>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3a4150" stroke-width="0.5" stroke-opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#metallicGrad)"/>
    <rect width="100" height="100" fill="url(#grid)"/>
    <path d="M0 20 Q 25 50 50 20 T 100 20" fill="none" stroke="#4a5160" stroke-width="0.2" stroke-opacity="0.1">
      <animate attributeName="d" 
        values="
          M0 20 Q 25 50 50 20 T 100 20;
          M0 20 Q 25 40 50 20 T 100 20;
          M0 20 Q 25 50 50 20 T 100 20"
        dur="15s" 
        repeatCount="indefinite"/>
    </path>
  </svg>`
}} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Header */}
        <nav className="flex justify-center items-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
            Abstergo
          </h1>
        </nav>

        {/* Hero Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold text-blue-300">
                Web Developer & Designer
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                A passionate 20-year-old web developer, specializing in NextJs, React, and Postgres. 
                Turning ideas into stunning web applications from the ground up.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image 
                  src="/avatar.jpeg" 
                  alt="Profile" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full object-cover border-4 border-[#2a3038] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
  <h2 className="text-4xl font-bold text-white mb-12 text-center">
    Skills & Technologies
  </h2>
  <div className="flex flex-wrap justify-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-[#1b1f26] to-[#2d3138] 
                  border border-[#3b3f47] shadow-[0_0_20px_rgba(72,190,255,0.1)]">
    {skills.map((skill, index) => (
      <div
        key={skill}
        className="px-6 py-3 rounded-full bg-gradient-to-br from-[#1f232a] to-[#2b3138] 
                  text-cyan-400 font-medium text-sm sm:text-base border border-[#3a4150] shadow-lg 
                  hover:bg-gradient-to-br hover:from-cyan-400 hover:to-cyan-500 hover:text-[#1f232a]
                  hover:shadow-[0_0_10px_rgba(72,190,255,0.5)] transition-all duration-300"
        style={{ animation: `fadeIn 0.6s ease-in-out ${index * 0.05}s both` }}
      >
        {skill}
      </div>
    ))}
  </div>

  {/* Fade-in animation */}
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
</section>


{/* GitHub Section */}
<section className="mb-24">
  <h2 className="text-4xl font-bold text-white mb-12 text-center">
    GitHub Contributions
  </h2>
  <div className="p-8 rounded-xl bg-[#1a1f25] border border-[#2a3038] shadow-lg hover:shadow-xl transition-shadow duration-300">
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
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectCards.map((project) => (
              <a 
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#1a1f25]/80 rounded-xl border border-[#2a3038] overflow-hidden hover:border-blue-500 transition-colors"
              >
                <div className="aspect-video relative">
                  <Image 
                    src={project.src} 
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>



        {/* Footer */}
        <footer className="border-t border-[#2a3038] pt-8 pb-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 sm:mb-0">
            © 2024 Abstergo. All rights reserved.
          </p>
          <div className="flex gap-8">
            <button
              onClick={handleEmailClick}
              className="text-gray-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </button>
            <a
              href="https://github.com/Absterrg0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-300 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/Absterrg0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-300 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </div>

      {/* Notification */}
      {copyNotification && (
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-[#1a1f25] text-blue-300 text-sm rounded-lg px-4 py-2 shadow-lg border border-[#2a3038]">
          Email copied to clipboard!
        </div>
      )}
    </div>
  )
}