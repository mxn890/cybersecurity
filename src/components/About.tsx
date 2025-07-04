import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Dark Horror Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <img
          src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Dark Cyber Background"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black/90 to-purple-900/40"></div>
      </div>

      {/* Floating dark elements */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border border-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-red-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-purple-500 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block glassmorphism px-8 py-4 rounded-full mb-6 border border-red-500/30">
            <span className="text-red-400 font-bold text-lg font-mono">💀 ABOUT THE COLLECTIVE 💀</span>
          </div>
          <h2 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-red-600 neon-text font-mono">
            SHADOW OPERATORS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-mono">
              We are the shadows in the digital realm. Elite cybersecurity specialists operating 
              from the darkest corners of the internet, providing military-grade tools to those 
              who dare to venture into the abyss.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed font-mono">
              Our collective combines advanced automation with forbidden knowledge, making 
              the impossible possible. We don't just break systems - we reshape reality.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center glassmorphism p-6 rounded-xl border border-red-500/30 bg-black/60">
                <div className="text-4xl font-bold text-red-400 mb-2 font-mono">666K+</div>
                <div className="text-gray-400 font-mono">Shadow Users</div>
                <div className="text-sm text-gray-500 mt-1 font-mono">Worldwide Network</div>
              </div>
              <div className="text-center glassmorphism p-6 rounded-xl border border-purple-500/30 bg-black/60">
                <div className="text-4xl font-bold text-purple-400 mb-2 font-mono">1337+</div>
                <div className="text-gray-400 font-mono">Dark Tools</div>
                <div className="text-sm text-gray-500 mt-1 font-mono">Forbidden Arsenal</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg border border-red-500/30 bg-black/60">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">💀</span>
                </div>
                <div>
                  <h4 className="font-bold text-red-400 font-mono">CLASSIFIED SECURITY</h4>
                  <p className="text-gray-400 text-sm font-mono">Beyond military-grade protection</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg border border-purple-500/30 bg-black/60">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-purple-400 font-mono">REAL-TIME INFILTRATION</h4>
                  <p className="text-gray-400 text-sm font-mono">24/7 dark web monitoring</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg border border-red-500/30 bg-black/60">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🔒</span>
                </div>
                <div>
                  <h4 className="font-bold text-red-400 font-mono">ENCRYPTED SHADOWS</h4>
                  <p className="text-gray-400 text-sm font-mono">Quantum-level encryption</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="glassmorphism p-8 rounded-2xl border border-red-500/30 bg-black/70">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dark Hacking Operations"
                  className="w-full h-32 object-cover rounded-lg border border-red-500/30 shadow-lg shadow-red-500/25"
                />
                <img
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Cyber Warfare"
                  className="w-full h-32 object-cover rounded-lg border border-purple-500/30 shadow-lg shadow-purple-500/25"
                />
              </div>
              
              <h3 className="text-3xl font-bold mb-6 text-red-400 font-mono">Why Join The Shadows?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">💀</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400 mb-1 font-mono">FORBIDDEN KNOWLEDGE</h4>
                    <p className="text-gray-300 text-sm font-mono">Access to classified techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-400 mb-1 font-mono">CONSTANT EVOLUTION</h4>
                    <p className="text-gray-300 text-sm font-mono">Latest dark web intelligence</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">🔥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-400 mb-1 font-mono">ELITE SUPPORT</h4>
                    <p className="text-gray-300 text-sm font-mono">24/7 shadow operative assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-400 mb-1 font-mono">UNTRACEABLE OPERATIONS</h4>
                    <p className="text-gray-300 text-sm font-mono">Complete anonymity guaranteed</p>
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