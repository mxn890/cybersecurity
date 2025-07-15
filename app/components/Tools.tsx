'use client'
import React, { useState } from 'react';

const Tools: React.FC = () => {
  const [expandedTool, setExpandedTool] = useState<number | null>(null);

  const tools = [
    {
      id: 1,
      name: 'AI Doxxer Tool',
      category: 'Automated Intel Engine',
      description: 'Collects and connects leaked databases, breached emails, linked socials, and IP logs with automated PDF reports',
      features: [
        'Search by username/phone/email',
        'Auto-generates comprehensive PDF reports',
        'Includes GPS tracking via IP analysis',
        'Command: dox @username'
      ],
      output: 'Detailed report delivered in Telegram',
      price: '$10'
    },
    {
      id: 2,
      name: 'Advanced Phishing Toolkit',
      category: 'Dynamic Engine',
      description: 'Automated phishing page builder with smart detection evasion and real-time alerts',
      features: [
        'Supports Facebook, Instagram, Gmail, Discord',
        'Geolocation tracking and instant notifications',
        'Bypasses basic email security',
        'Command: phish gmail'
      ],
      output: 'Credentials + IP/device information',
      price: '$10'
    },
    {
      id: 3,
      name: 'Malware Builder',
      category: 'Stealth Payload Generator',
      description: 'Creates undetectable executables with advanced obfuscation techniques',
      features: [
        'Custom APK/EXE payloads',
        'Built-in AV evasion (PyArmor, UPX)',
        'Background keylogging capability',
        'Command: build --android --keylogger'
      ],
      output: 'Clean executable file',
      price: '$10'
    },
    {
      id: 4,
      name: 'Bug Bounty Toolkit',
      category: 'Full Stack Scanner',
      description: 'Comprehensive vulnerability scanning with AI-assisted analysis',
      features: [
        'Discovers subdomains, exposed APIs',
        'Generates exploit proof-of-concepts',
        'Includes Nuclei, HTTPX, Dalfox',
        'Command: bounty --target domain.com'
      ],
      output: 'Detailed vulnerability report',
      price: '$10'
    },
    {
      id: 5,
      name: 'AI Exploit Assistant',
      category: 'Terminal Bot',
      description: 'AI-powered security assistant for payload generation and analysis',
      features: [
        'Generates custom payloads and shells',
        'Explains attack methodologies',
        'No external API requirements',
        'Command: aihelp'
      ],
      output: 'Code snippets with explanations',
      price: '$10'
    },
    {
      id: 6,
      name: 'Anonymous Mode',
      category: 'Privacy Package',
      description: 'Multi-layered anonymity solution for secure operations',
      features: [
        'VPN chaining with Tor integration',
        'Dynamic proxy rotation',
        'MAC address randomization',
        'Command: anonstart'
      ],
      output: 'Secure anonymous session',
      price: '$10'
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedTool(expandedTool === id ? null : id);
  };

  return (
    <section className="py-12 px-4 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 border border-gray-700 rounded-full mb-6 shadow-lg">
            <span className="flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-mono text-sm text-blue-400 tracking-wider">BLACKGATE-X TERMINAL</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              Advanced Security Terminal
            </span>
          </h1>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Full Terminal Access</h3>
                <p className="text-gray-300">All tools for just <span className="text-green-400 font-bold">$10</span></p>
              </div>
              <button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-bold flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.2 1.07-.83 3.66-1.56 7.22-.19.9-.56 1.2-.91 1.23-.76.06-1.33-.5-2.07-.98-1.15-.76-1.8-1.23-2.91-1.97-1.37-.92-.48-1.43.3-2.26.21-.22 3.85-3.68 3.93-4 .01-.01.02-.02.02-.02l.01-.02c.05-.1.06-.19.05-.29-.02-.1-.08-.19-.17-.26-.13-.09-.32-.12-.46-.1-.2.03-.6.38-2.3 1.33-1.81 1.01-2.53 1.35-2.83 1.28-.72-.15-.73-.72.04-1.16 2.28-1.28 3.85-2.15 5.56-3.18 2.16-1.29 2.6-1.51 2.89-1.52.63-.03 1.02.18 1.17.64.2.6.68 1.04 2.32.45 3.63z"/>
                </svg>
                Get Access via Telegram
              </button>
            </div>
          </div>
        </div>

        {/* Tools List */}
        <div className="space-y-6">
          {tools.map((tool) => (
            <div 
              key={tool.id}
              className={`bg-gray-800/70 border-2 border-gray-700 rounded-xl overflow-hidden transition-all hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/10 ${expandedTool === tool.id ? 'border-blue-500/60 shadow-lg shadow-blue-500/10' : ''}`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(tool.id)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                    <p className="text-blue-400 font-mono text-xs tracking-wider mt-1">{tool.category}</p>
                  </div>
                  <span className="bg-gradient-to-r from-green-600 to-green-800 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {tool.price}
                  </span>
                </div>
                <p className="text-gray-300 mt-3">{tool.description}</p>
              </div>

              {expandedTool === tool.id && (
                <div className="px-6 pb-6 pt-0 border-t-2 border-gray-700/50">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {tool.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <span className="text-blue-400 mr-2">▸</span>
                            <span className="font-mono text-sm tracking-wide">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                      <div className="flex items-center">
                        <span className="text-gray-400 font-mono text-xs tracking-wider mr-2">OUTPUT:</span>
                        <span className="text-green-400 font-mono text-sm tracking-wide">{tool.output}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.2 1.07-.83 3.66-1.56 7.22-.19.9-.56 1.2-.91 1.23-.76.06-1.33-.5-2.07-.98-1.15-.76-1.8-1.23-2.91-1.97-1.37-.92-.48-1.43.3-2.26.21-.22 3.85-3.68 3.93-4 .01-.01.02-.02.02-.02l.01-.02c.05-.1.06-.19.05-.29-.02-.1-.08-.19-.17-.26-.13-.09-.32-.12-.46-.1-.2.03-.6.38-2.3 1.33-1.81 1.01-2.53 1.35-2.83 1.28-.72-.15-.73-.72.04-1.16 2.28-1.28 3.85-2.15 5.56-3.18 2.16-1.29 2.6-1.51 2.89-1.52.63-.03 1.02.18 1.17.64.2.6.68 1.04 2.32.45 3.63z"/>
                      </svg>
                      <span>Get This Tool</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Get full access to all BLACKGATE-X tools for just $10. 
              Instant setup with 24/7 terminal access through Telegram.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center mx-auto space-x-3">
              <span>Get Full Access for $10</span>
            </button>
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <p className="text-gray-500 text-sm font-mono tracking-wider">
                BLACKGATE-X Terminal | Telegram Access | Professional Security Tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;