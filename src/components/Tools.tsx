import React, { useState } from 'react';

const Tools: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tools = [
    {
      name: 'Network Penetration Suite',
      category: 'network',
      description: 'Advanced port scanning, vulnerability assessment, and network discovery toolkit for professional penetration testing',
      features: ['Port Scanning', 'Vulnerability Detection', 'Network Mapping', 'Service Enumeration'],
      price: 'PREMIUM',
      popular: true,
      threat_level: 'HIGH'
    },
    {
      name: 'Web Application Scanner',
      category: 'web',
      description: 'Comprehensive web application security testing with automated SQL injection, XSS, and CSRF detection',
      features: ['SQL Injection', 'XSS Detection', 'CSRF Testing', 'Authentication Bypass'],
      price: 'ELITE',
      popular: true,
      threat_level: 'CRITICAL'
    },
    {
      name: 'WiFi Security Analyzer',
      category: 'wireless',
      description: 'Professional wireless network analysis and penetration testing suite with WPA/WPA2 cracking capabilities',
      features: ['WPA/WPA2 Testing', 'Packet Analysis', 'Rogue AP Detection', 'Handshake Capture'],
      price: 'ADVANCED',
      popular: false,
      threat_level: 'HIGH'
    },
    {
      name: 'Digital Forensics Toolkit',
      category: 'forensics',
      description: 'Enterprise-grade digital forensics and incident response platform for professional investigators',
      features: ['Data Recovery', 'Timeline Analysis', 'Evidence Collection', 'Memory Dump Analysis'],
      price: 'ENTERPRISE',
      popular: true,
      threat_level: 'EXTREME'
    },
    {
      name: 'Social Engineering Toolkit',
      category: 'social',
      description: 'Advanced phishing simulation and social engineering awareness training platform',
      features: ['Phishing Templates', 'Email Spoofing', 'Awareness Training', 'Campaign Management'],
      price: 'PRO',
      popular: false,
      threat_level: 'MEDIUM'
    },
    {
      name: 'Cryptography Suite',
      category: 'crypto',
      description: 'Professional encryption, decryption, and steganography tools for security researchers',
      features: ['AES/RSA Encryption', 'Steganography', 'Hash Analysis', 'Key Management'],
      price: 'SPECIALIST',
      popular: false,
      threat_level: 'HIGH'
    }
  ];

  const categories = [
    { id: 'all', name: 'ALL ARSENAL' },
    { id: 'network', name: 'NETWORK' },
    { id: 'web', name: 'WEB APPS' },
    { id: 'wireless', name: 'WIRELESS' },
    { id: 'forensics', name: 'FORENSICS' },
    { id: 'social', name: 'SOCIAL ENG' },
    { id: 'crypto', name: 'CRYPTO' }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getThreatColor = (level: string) => {
    switch(level) {
      case 'EXTREME': return 'text-red-500 bg-red-900/30 border-red-500';
      case 'CRITICAL': return 'text-orange-500 bg-orange-900/30 border-orange-500';
      case 'HIGH': return 'text-yellow-500 bg-yellow-900/30 border-yellow-500';
      case 'MEDIUM': return 'text-blue-500 bg-blue-900/30 border-blue-500';
      default: return 'text-green-500 bg-green-900/30 border-green-500';
    }
  };

  const handleTelegramAccess = () => {
    window.open('https://t.me/your_bot_username', '_blank');
  };

  return (
    <section id="tools" className="py-20 px-4 relative overflow-hidden">
      {/* Dark Hacking Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <img
          src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Dark Hacking Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black/90 to-green-900/30"></div>
      </div>

      {/* Floating hacker elements */}
      <div className="absolute inset-0 z-5 opacity-10">
        <div className="absolute top-20 left-10 text-green-400 font-mono text-xs animate-pulse">01001000 01000001 01000011 01001011</div>
        <div className="absolute top-40 right-20 text-red-400 font-mono text-xs animate-pulse">BREACH DETECTED</div>
        <div className="absolute bottom-32 left-1/4 text-green-400 font-mono text-xs animate-pulse">ACCESS GRANTED</div>
        <div className="absolute bottom-20 right-1/3 text-red-400 font-mono text-xs animate-pulse">FIREWALL BYPASSED</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Banner */}
        <div className="text-center mb-16">
          <div className="inline-block glassmorphism px-8 py-4 rounded-full mb-6 border border-red-500/30">
            <span className="text-red-400 font-bold text-lg font-mono">⚡ HACKER ARSENAL ⚡</span>
          </div>
          <h2 className="text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 neon-text font-mono">
            DARK TOOLS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Military-grade cybersecurity arsenal used by elite hackers worldwide. 
            <br />
            <span className="text-red-400">Enter the shadows. Access the forbidden.</span>
          </p>
        </div>

        {/* Professional Banner with Dark Images */}
        <div className="glassmorphism p-8 rounded-2xl mb-12 relative overflow-hidden border border-red-500/20 bg-black/70">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-green-900/20"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-mono">
                UNDERGROUND ARSENAL
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed font-mono">
                Access enterprise-grade cybersecurity tools used by government agencies and elite hacker collectives. 
                Our comprehensive suite covers every aspect of modern digital warfare and penetration testing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-black/50 p-4 rounded-lg border border-red-500/30">
                  <div className="text-3xl font-bold text-red-400 font-mono">666+</div>
                  <div className="text-gray-400 text-sm font-mono">DARK TOOLS</div>
                </div>
                <div className="text-center bg-black/50 p-4 rounded-lg border border-green-500/30">
                  <div className="text-3xl font-bold text-green-400 font-mono">99.9%</div>
                  <div className="text-gray-400 text-sm font-mono">SUCCESS RATE</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dark Hacking"
                className="w-full h-40 object-cover rounded-lg border border-red-500/30 shadow-lg shadow-red-500/25"
              />
              <img
                src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Cyber Warfare"
                className="w-full h-40 object-cover rounded-lg border border-green-500/30 shadow-lg shadow-green-500/25"
              />
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="glassmorphism p-6 rounded-2xl border border-red-500/20 bg-black/60">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search dark arsenal..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-900 border border-red-500/30 rounded-xl focus:border-red-400 focus:outline-none text-green-400 text-lg pl-12 font-mono placeholder-gray-500"
                />
                <div className="absolute left-4 top-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 font-bold font-mono border ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-red-600 to-red-800 text-white border-red-500'
                        : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 relative border border-red-500/20 bg-black/70"
            >
              {tool.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-red-600 to-red-800 text-white px-3 py-1 rounded-full text-sm font-bold font-mono animate-pulse">
                    🔥 HOT
                  </span>
                </div>
              )}
              
              {/* Threat Level Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono border ${getThreatColor(tool.threat_level)}`}>
                  {tool.threat_level}
                </span>
              </div>
              
              {/* Tool Header */}
              <div className="h-48 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-green-900/30"></div>
                <img
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Hacking Tool"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="text-center z-10">
                  <div className="text-4xl font-bold text-red-400 mb-2 font-mono">{tool.category.toUpperCase()}</div>
                  <div className="text-sm text-green-400 font-mono">CLASSIFIED</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-red-400 font-mono">{tool.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-400 mb-3 font-mono">CAPABILITIES:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="text-xs bg-gray-900 text-green-400 px-3 py-2 rounded-lg border border-green-500/30 font-mono">
                        → {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-orange-400 font-mono">{tool.price}</span>
                  <button 
                    onClick={handleTelegramAccess}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 font-mono border border-blue-500/50 shadow-lg shadow-blue-500/25"
                  >
                    📱 GET ACCESS VIA TELEGRAM
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💀</div>
            <h3 className="text-2xl font-bold text-red-400 mb-2 font-mono">NO TOOLS FOUND</h3>
            <p className="text-gray-500 font-mono">Adjust your search parameters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tools;