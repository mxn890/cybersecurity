'use client'

import React, { useState } from 'react';

const Tools: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tools = [
    {
      name: 'Network Scanner',
      category: 'network',
      description: 'Advanced network discovery and port scanning tool for security professionals',
      features: ['Port Scanning', 'Service Detection', 'OS Fingerprinting', 'Vulnerability Assessment'],
      price: 'Free',
      popular: true
    },
    {
      name: 'Web Application Tester',
      category: 'web',
      description: 'Comprehensive web application security testing suite',
      features: ['SQL Injection Testing', 'XSS Detection', 'Authentication Testing', 'Session Analysis'],
      price: 'Pro',
      popular: true
    },
    {
      name: 'WiFi Analyzer',
      category: 'wireless',
      description: 'Professional wireless network security assessment tool',
      features: ['Network Discovery', 'Security Analysis', 'Signal Monitoring', 'Encryption Testing'],
      price: 'Enterprise',
      popular: false
    },
    {
      name: 'Digital Forensics Kit',
      category: 'forensics',
      description: 'Complete digital forensics and incident response toolkit',
      features: ['Data Recovery', 'Timeline Analysis', 'Evidence Collection', 'Report Generation'],
      price: 'Enterprise',
      popular: true
    },
    {
      name: 'Social Engineering Toolkit',
      category: 'social',
      description: 'Educational social engineering awareness and testing platform',
      features: ['Phishing Simulation', 'Awareness Training', 'Campaign Management', 'Reporting'],
      price: 'Pro',
      popular: false
    },
    {
      name: 'Cryptography Suite',
      category: 'crypto',
      description: 'Advanced encryption and cryptographic analysis tools',
      features: ['Encryption/Decryption', 'Hash Analysis', 'Key Management', 'Certificate Tools'],
      price: 'Pro',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'network', name: 'Network' },
    { id: 'web', name: 'Web Security' },
    { id: 'wireless', name: 'Wireless' },
    { id: 'forensics', name: 'Forensics' },
    { id: 'social', name: 'Social Engineering' },
    { id: 'crypto', name: 'Cryptography' }
  ];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="tools" className="py-20 px-4 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block glassmorphism px-6 py-3 rounded-full mb-6">
            <span className="text-[#FF2E63] font-bold">🛠️ Security Arsenal</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E63] to-[#00FF94] neon-text">
            Professional Tools
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity toolkit for professionals and enthusiasts
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="glassmorphism p-6 rounded-2xl">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-xl focus:border-[#00FF94] focus:outline-none text-white text-lg pl-12"
                />
                <div className="absolute left-4 top-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 font-bold ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-[#FF2E63] to-[#CC1E4F] text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
              className="glassmorphism rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#FF2E63]/25 transition-all duration-300 transform hover:scale-105"
            >
              {tool.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-[#FF2E63] to-[#CC1E4F] text-white px-3 py-1 rounded-full text-sm font-bold">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#00FF94] mb-2">{tool.category.toUpperCase()}</div>
                  <div className="text-sm text-gray-400">Security Tool</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#00FF94]">{tool.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-400 mb-3">Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="text-xs bg-gray-800 text-[#00FF94] px-3 py-2 rounded-lg">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#FF2E63]">{tool.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:from-[#00CC77] hover:to-[#00AA66] transition-all duration-300 transform hover:scale-105">
                    Deploy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No tools found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tools;