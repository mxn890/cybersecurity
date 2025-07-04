import React from 'react';

const Footer: React.FC = () => {
  const handleTelegramAccess = () => {
    window.open('https://t.me/your_bot_username', '_blank');
  };

  return (
    <footer className="relative overflow-hidden py-16 px-4">
      {/* Dark Horror Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <img
          src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Dark Footer Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/20 to-black"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-red-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-purple-500 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center border border-red-500/50 shadow-lg shadow-red-500/25">
                <span className="text-white font-bold text-2xl font-mono">💀</span>
              </div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-mono">
                CYBERFORTRESS
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed font-mono">
              Elite cybersecurity collective operating from the shadows. Providing forbidden tools 
              and dark web intelligence to those who dare to venture into the digital abyss.
            </p>
            
            {/* Dark Cybersecurity Images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dark Hacking Operations"
                className="w-full h-28 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity border border-red-500/30 shadow-lg shadow-red-500/25"
              />
              <img
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Cyber Warfare"
                className="w-full h-28 object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity border border-purple-500/30 shadow-lg shadow-purple-500/25"
              />
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button 
                onClick={handleTelegramAccess}
                className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-900 transition-all cursor-pointer transform hover:scale-110 border border-blue-500/50 shadow-lg shadow-blue-500/25"
              >
                <span className="text-white font-bold text-xl">📱</span>
              </button>
              <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center hover:from-red-700 hover:to-red-900 transition-all cursor-pointer transform hover:scale-110 border border-red-500/50 shadow-lg shadow-red-500/25">
                <span className="text-white font-bold text-xl font-mono">G</span>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all cursor-pointer transform hover:scale-110 border border-gray-600/50 shadow-lg shadow-gray-500/25">
                <span className="text-white font-bold text-xl font-mono">D</span>
              </div>
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-purple-900 transition-all cursor-pointer transform hover:scale-110 border border-purple-500/50 shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-xl font-mono">L</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-red-400 font-mono">SHADOW ACCESS</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-red-400 transition-colors font-mono">Home Base</a></li>
              <li><a href="#breach-checker" className="text-gray-300 hover:text-red-400 transition-colors font-mono">Breach Scanner</a></li>
              <li><a href="#tools" className="text-gray-300 hover:text-red-400 transition-colors font-mono">Dark Arsenal</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-red-400 transition-colors font-mono">The Collective</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors font-mono">Classified Docs</a></li>
            </ul>
          </div>
          
          {/* Security Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-400 font-mono">DARK OPERATIONS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-mono">Network Infiltration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-mono">Web Exploitation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-mono">Wireless Hacking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-mono">Digital Forensics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-mono">Social Engineering</a></li>
            </ul>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="glassmorphism p-8 rounded-2xl mb-12 border border-red-500/20 bg-black/70">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2 font-mono">666K+</div>
              <div className="text-gray-400 text-sm font-mono">Shadow Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2 font-mono">1337+</div>
              <div className="text-gray-400 text-sm font-mono">Dark Tools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2 font-mono">99.9%</div>
              <div className="text-gray-400 text-sm font-mono">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2 font-mono">24/7</div>
              <div className="text-gray-400 text-sm font-mono">Dark Support</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-red-500/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Security Badge"
                className="w-12 h-12 rounded-lg opacity-80 border border-red-500/30"
              />
              <p className="text-gray-400 text-sm font-mono">
                © 2024 CyberFortress. All rights reserved. Shadow operations worldwide.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors font-mono">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors font-mono">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors font-mono">Security</a>
              <button onClick={handleTelegramAccess} className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-mono">Contact via Telegram</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;