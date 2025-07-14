'use client'

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00FF94] to-[#00CC77] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-2xl">🛡️</span>
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#FF2E63]">
                CyberShield
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Advanced cybersecurity solutions for the modern digital world. 
              Protecting businesses and individuals with cutting-edge technology.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-900 transition-all cursor-pointer transform hover:scale-110">
                <span className="text-white font-bold text-xl">f</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center hover:from-blue-500 hover:to-blue-700 transition-all cursor-pointer transform hover:scale-110">
                <span className="text-white font-bold text-xl">t</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg flex items-center justify-center hover:from-blue-800 hover:to-blue-950 transition-all cursor-pointer transform hover:scale-110">
                <span className="text-white font-bold text-xl">in</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all cursor-pointer transform hover:scale-110">
                <span className="text-white font-bold text-xl">gh</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00FF94]">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-[#00FF94] transition-colors">Home</a></li>
              <li><a href="#breach-checker" className="text-gray-300 hover:text-[#00FF94] transition-colors">Breach Checker</a></li>
              <li><a href="#tools" className="text-gray-300 hover:text-[#00FF94] transition-colors">Security Tools</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#00FF94] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#00FF94] transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FF2E63]">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#FF2E63] transition-colors">Penetration Testing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF2E63] transition-colors">Security Audits</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF2E63] transition-colors">Vulnerability Assessment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF2E63] transition-colors">Security Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#FF2E63] transition-colors">Incident Response</a></li>
            </ul>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="glassmorphism p-8 rounded-2xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#00FF94] mb-2">500+</div>
              <div className="text-gray-400 text-sm">Security Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF2E63] mb-2">10K+</div>
              <div className="text-gray-400 text-sm">Protected Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00FF94] mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF2E63] mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2024 CyberShield. All rights reserved. Protecting the digital world.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-[#00FF94] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#00FF94] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#00FF94] text-sm transition-colors">Security</a>
              <a href="#" className="text-gray-400 hover:text-[#00FF94] text-sm transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;