'use client'

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block glassmorphism px-6 py-3 rounded-full mb-6">
            <span className="text-[#00FF94] font-bold">🛡️ About CyberShield</span>
          </div>
          <h2 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#FF2E63] neon-text">
            Security Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a team of cybersecurity professionals dedicated to providing 
              cutting-edge security solutions and tools for businesses and individuals.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our mission is to make advanced cybersecurity accessible to everyone, 
              from small businesses to enterprise organizations.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center glassmorphism p-6 rounded-xl">
                <div className="text-4xl font-bold text-[#00FF94] mb-2">500+</div>
                <div className="text-gray-400">Security Tools</div>
                <div className="text-sm text-gray-500 mt-1">Professional Grade</div>
              </div>
              <div className="text-center glassmorphism p-6 rounded-xl">
                <div className="text-4xl font-bold text-[#FF2E63] mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
                <div className="text-sm text-gray-500 mt-1">Always Available</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#00FF94] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">🔒</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#00FF94]">Enterprise Security</h4>
                  <p className="text-gray-400 text-sm">Military-grade protection</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#FF2E63] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#FF2E63]">Real-time Monitoring</h4>
                  <p className="text-gray-400 text-sm">24/7 threat detection</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg">
                <div className="w-12 h-12 bg-[#00FF94] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">🛡️</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#00FF94]">Advanced Protection</h4>
                  <p className="text-gray-400 text-sm">Next-generation security</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glassmorphism p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6 text-[#FF2E63]">Why Choose Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00FF94] mb-1">Expert Team</h4>
                    <p className="text-gray-300 text-sm">Certified security professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF2E63] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FF2E63] mb-1">Cutting-edge Technology</h4>
                    <p className="text-gray-300 text-sm">Latest security innovations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00FF94] mb-1">Proven Results</h4>
                    <p className="text-gray-300 text-sm">99.9% success rate</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF2E63] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#FF2E63] mb-1">24/7 Support</h4>
                    <p className="text-gray-300 text-sm">Round-the-clock assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;