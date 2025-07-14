'use client'

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glassmorphism' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00FF94] to-[#00CC77] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">🛡️</span>
            </div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#FF2E63]">
              CyberShield
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-[#00FF94] transition-colors duration-300 relative group font-bold">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF94] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#breach-checker" className="hover:text-[#00FF94] transition-colors duration-300 relative group font-bold">
                Breach Checker
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF94] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#tools" className="hover:text-[#00FF94] transition-colors duration-300 relative group font-bold">
                Tools
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF94] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="hover:text-[#00FF94] transition-colors duration-300 relative group font-bold">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF94] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-[#FF2E63] to-[#CC1E4F] text-white font-bold rounded-lg hover:from-[#CC1E4F] hover:to-[#AA1A42] transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#00FF94] focus:outline-none"
            >
              <div className="space-y-1">
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glassmorphism">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-white hover:text-[#00FF94] transition-colors duration-300 font-bold">Home</a>
            <a href="#breach-checker" className="block px-3 py-2 text-white hover:text-[#00FF94] transition-colors duration-300 font-bold">Breach Checker</a>
            <a href="#tools" className="block px-3 py-2 text-white hover:text-[#00FF94] transition-colors duration-300 font-bold">Tools</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-[#00FF94] transition-colors duration-300 font-bold">About</a>
            <button className="block w-full text-left px-3 py-2 text-[#FF2E63] hover:text-[#CC1E4F] transition-colors duration-300 font-bold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;