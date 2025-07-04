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

  const handleTelegramAccess = () => {
    window.open('https://t.me/your_bot_username', '_blank');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glassmorphism border-b border-red-500/30 bg-black/80' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center border border-red-500/50 shadow-lg shadow-red-500/25">
              <span className="text-white font-bold text-xl font-mono">💀</span>
            </div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-mono">
              CYBERFORTRESS
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-red-400 transition-colors duration-300 relative group font-mono font-bold">
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#breach-checker" className="hover:text-red-400 transition-colors duration-300 relative group font-mono font-bold">
                SCANNER
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#tools" className="hover:text-red-400 transition-colors duration-300 relative group font-mono font-bold">
                ARSENAL
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="hover:text-red-400 transition-colors duration-300 relative group font-mono font-bold">
                COLLECTIVE
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button 
                onClick={handleTelegramAccess}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 font-mono border border-blue-500/50 shadow-lg shadow-blue-500/25"
              >
                📱 TELEGRAM
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-400 focus:outline-none"
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
        <div className="md:hidden glassmorphism border-t border-red-500/30 bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-white hover:text-red-400 transition-colors duration-300 font-mono font-bold">HOME</a>
            <a href="#breach-checker" className="block px-3 py-2 text-white hover:text-red-400 transition-colors duration-300 font-mono font-bold">SCANNER</a>
            <a href="#tools" className="block px-3 py-2 text-white hover:text-red-400 transition-colors duration-300 font-mono font-bold">ARSENAL</a>
            <a href="#about" className="block px-3 py-2 text-white hover:text-red-400 transition-colors duration-300 font-mono font-bold">COLLECTIVE</a>
            <button 
              onClick={handleTelegramAccess}
              className="block w-full text-left px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-mono font-bold"
            >
              📱 TELEGRAM ACCESS
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;