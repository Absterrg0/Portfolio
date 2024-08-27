"use client";
import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copyNotification, setCopyNotification] = useState(false);

  const email = 'parvj5212@gmail.com';

  const handleEmailClick = () => {
    navigator.clipboard.writeText(email);
    setCopyNotification(true);
    setTimeout(() => setCopyNotification(false), 2000); // Hide notification after 2 seconds
  };

  return (
    <section id="contact" className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <div className="flex space-x-8">
        <a
          href="https://github.com/Absterrg0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://x.com/Abstergo471240"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          <FaTwitter size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/parv-jain-82169b297/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          <FaLinkedin size={40} />
        </a>
        <div
          className="relative flex items-center"
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => setShowEmail(false)}
        >
          <a
            onClick={handleEmailClick}
            className="text-white hover:text-gray-400 transition-colors cursor-pointer"
          >
            <FaEnvelope size={40} />
          </a>
          {showEmail && (
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-12 bg-gray-800 text-white text-sm rounded-lg px-2 py-1">
              {email}
            </span>
          )}
        </div>
      </div>
      {copyNotification && (
        <div className="fixed bottom-8 right-8 bg-gray-800 text-white text-sm rounded-lg px-4 py-2 shadow-lg">
          Email copied to clipboard!
        </div>
      )}
    </section>
  );
};

export default Contact;
