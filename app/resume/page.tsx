'use client'

import React from 'react';

export default function ResumeViewer() {
  return (
    <div className='w-full h-screen'>
                    <iframe 
              src="/resume.pdf" 
              className="w-full h-full" 
              title="Resume PDF"
            />
    </div>
  );
}