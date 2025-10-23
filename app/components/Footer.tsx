'use client'
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-4 relative overflow-hidden border-t border-gray-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#00FF94] rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-[#FF2E63] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-[#00FF94] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-[#FF2E63] rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          
          {/* Hacker pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2NCAwIEwgMCAwIDAgNjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDIU1LC4wNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIi8+PC9zdmc+')]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00FF94] to-[#00CC77] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(0,255,148,0.6)]">
                  <span className="text-black font-bold text-xl">WG</span>
                </div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00CC77] group-hover:text-shadow-[0_0_10px_rgba(0,255,148,0.7)]">
                  WolfGuider
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Premium cybersecurity solutions at unbeatable prices. 
                Enterprise-grade tools for ethical hackers and security teams without the enterprise price tag.
              </p>
              
              {/* Privacy Commitment Badge */}
              <div className="bg-black/50 border border-[#00FF94]/30 rounded-lg p-4 mb-6 hover:border-[#00FF94]/60 transition-all duration-300 cursor-pointer group"
                   onClick={() => setShowPrivacyModal(true)}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#00FF94] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                  <span className="text-[#00FF94] font-semibold">Our Privacy Commitment</span>
                </div>
                <p className="text-gray-300 text-sm">
                  End-to-end encryption • 30-day data retention • GDPR compliant • No third-party sharing
                </p>
              </div>

              {/* Cybersecurity Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group overflow-hidden rounded-lg border border-gray-800 hover:border-[#00FF94]/50 transition-all duration-300">
                  <img
                    src="/images/footer2.png"
                    alt="Cybersecurity Terminal"
                    className="w-full h-24 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-xs text-[#00FF94] font-mono glow-text">AES-256 Encryption</span>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg border border-gray-800 hover:border-[#00FF94]/50 transition-all duration-300">
                  <img
                    src="/images/footer3.png"
                    alt="Data Encryption"
                    className="w-full h-24 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-xs text-[#00FF94] font-mono glow-text">Secure Data Handling</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#00CC77] relative inline-block">
                <span className="glow-effect">Quick Access</span>
              </h3>
              <ul className="space-y-3">
                {['Home', 'Breach Checker', 'Security Tools', 'About Us', 'Documentation'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-[#00FF94] transition-colors flex items-center group glow-on-hover"
                    >
                      <span className="w-2 h-2 bg-[#00FF94] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity glow"></span>
                      {item}
                      <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#00FF94] glow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Security & Legal */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E63] to-[#CC1E4F] relative inline-block">
                <span className="glow-effect-red">Security & Legal</span>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Privacy Policy', action: () => setShowPrivacyModal(true) },
                  { name: 'Terms of Service', action: () => setShowTermsModal(true) },
                  { name: 'Data Retention Policy', action: () => setShowPrivacyModal(true) },
                  { name: 'Security Practices', action: () => setShowPrivacyModal(true) },
                  { name: 'Compliance Info', action: () => setShowPrivacyModal(true) }
                ].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={item.action}
                      className="text-gray-300 hover:text-[#FF2E63] transition-colors flex items-center group glow-on-hover-red w-full text-left"
                    >
                      <span className="w-2 h-2 bg-[#FF2E63] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity glow-red"></span>
                      {item.name}
                      <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF2E63] glow-icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Trust Seals */}
              <div className="mt-6 p-4 bg-black/30 rounded-lg border border-gray-700">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Certified & Compliant</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#00FF94] rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">GDPR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#00FF94] rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">ISO 27001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#00FF94] rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">SOC 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#00FF94] rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-400">CCPA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Stats Section with Data Security Focus */}
          <div className="backdrop-blur-sm bg-gray-900/50 p-8 rounded-2xl mb-12 border border-gray-800/50 hover:border-[#00FF94]/30 transition-all duration-500 group">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "AES-256", label: "Encryption Standard", color: "text-[#00FF94]" },
                { value: "30 Days", label: "Data Retention", color: "text-[#FF2E63]" },
                { value: "Zero-Knowledge", label: "Architecture", color: "text-[#00FF94]" },
                { value: "99.9%", label: "Uptime SLA", color: "text-[#FF2E63]" }
              ].map((stat, index) => (
                <div key={index} className="group-hover:glow-stat">
                  <div className={`text-xl font-bold ${stat.color} mb-2 transition-all duration-300 group-hover:scale-110 glow-text font-mono`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Section with Enhanced Legal Links */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <img
                    src="/images/footer1.png"
                    alt="Security Badge"
                    className="w-12 h-12 rounded-lg opacity-80 hover:opacity-100 transition-opacity border border-[#00FF94]/20 hover:border-[#00FF94]/50 object-cover group-hover:glow-box"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00FF94] rounded-full animate-ping opacity-75"></div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm max-w-xs mb-2">
                    © 2025 WolfGuider. All rights reserved. Affordable security solutions.
                  </p>
                  <p className="text-gray-500 text-xs">
                    WolfGuider Security LLC • Delaware, USA • DUNS: 123456789
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { name: 'Privacy Policy', action: () => setShowPrivacyModal(true) },
                    { name: 'Terms of Service', action: () => setShowTermsModal(true) },
                    { name: 'Data Processing', action: () => setShowPrivacyModal(true) },
                    { name: 'Contact DPO', action: () => window.location.href = 'mailto:dpo@wolfguider.com' }
                  ].map((item, index) => (
                    <button 
                      key={index}
                      onClick={item.action}
                      className="text-gray-400 hover:text-[#00FF94] text-sm transition-colors flex items-center group glow-link"
                    >
                      <span className="hidden group-hover:inline-block mr-1 text-[#00FF94] glow">#</span>
                      {item.name}
                    </button>
                  ))}
                </div>
                
                {/* Report Security Issue */}
                <a 
                  href="mailto:security@wolfguider.com"
                  className="text-xs text-gray-500 hover:text-[#FF2E63] transition-colors border border-gray-700 hover:border-[#FF2E63] px-3 py-1 rounded-full"
                >
                  🛡️ Report Security Issue
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy Modal */}
        {showPrivacyModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-[#00FF94]/30 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#00FF94]">Privacy & Data Protection</h3>
                  <button 
                    onClick={() => setShowPrivacyModal(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Data Handling Process</h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>All scan data encrypted in-transit (TLS 1.3) and at-rest (AES-256)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Zero-knowledge architecture - we never store your raw data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Data processed in isolated, secure containers</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Encryption Standards</h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>AES-256 encryption for all stored data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>TLS 1.3 for all data transmission</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Military-grade key management system</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Retention & Deletion</h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Scan results: 30 days automatic deletion</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>User data: Retained until account deletion</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>Immediate deletion upon user request</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Compliance</h4>
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>GDPR Compliant (EU Data Protection)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>CCPA Compliant (California Privacy)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                        <span>ISO 27001 Certified</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-black/50 p-4 rounded-lg border border-[#00FF94]/20">
                  <h4 className="text-[#00FF94] font-semibold mb-2">Your Rights</h4>
                  <p className="text-gray-300 text-sm">
                    You have the right to access, correct, and delete your personal data. 
                    Contact our Data Protection Officer at <span className="text-[#00FF94]">dpo@wolfguider.com</span>
                  </p>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-800 flex justify-end">
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-6 py-2 bg-[#00FF94] text-black font-semibold rounded-lg hover:bg-[#00CC77] transition-colors"
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Terms of Service Modal */}
        {showTermsModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 border border-[#00FF94]/30 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#00FF94]">Terms of Service</h3>
                  <button 
                    onClick={() => setShowTermsModal(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6 text-gray-300 text-sm">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Acceptable Use Policy</h4>
                  <p>Our tools are for ethical security testing and authorized penetration testing only. You agree not to use WolfGuider services for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Unauthorized network scanning or testing</li>
                    <li>Malicious attacks on systems you don't own</li>
                    <li>Violating local or international laws</li>
                    <li>Data theft or unauthorized access</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Service Level Agreement</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                      <span>99.9% Uptime Guarantee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                      <span>24/7 Security Monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#00FF94] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enterprise-grade Support</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/50 p-4 rounded-lg border border-[#00FF94]/20">
                  <h4 className="text-[#00FF94] font-semibold mb-2">Legal Compliance</h4>
                  <p>
                    By using WolfGuider services, you confirm you have proper authorization for all security testing activities 
                    and agree to comply with all applicable laws and regulations.
                  </p>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-800 flex justify-end">
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="px-6 py-2 bg-[#00FF94] text-black font-semibold rounded-lg hover:bg-[#00CC77] transition-colors"
                >
                  Accept & Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Glow effect styles */}
        <style jsx>{`
          .glow-effect {
            text-shadow: 0 0 8px rgba(0, 255, 148, 0.7);
            animation: glow-pulse 2s infinite alternate;
          }
          
          .glow-effect-red {
            text-shadow: 0 0 8px rgba(255, 46, 99, 0.7);
            animation: glow-pulse-red 2s infinite alternate;
          }
          
          .glow-on-hover:hover {
            text-shadow: 0 0 6px rgba(0, 255, 148, 0.5);
          }
          
          .glow-on-hover-red:hover {
            text-shadow: 0 0 6px rgba(255, 46, 99, 0.5);
          }
          
          .glow-icon {
            filter: drop-shadow(0 0 2px rgba(0, 255, 148, 0.7));
          }
          
          .glow-icon-red {
            filter: drop-shadow(0 0 2px rgba(255, 46, 99, 0.7));
          }
          
          .glow-text {
            text-shadow: 0 0 6px currentColor;
          }
          
          .glow-box {
            box-shadow: 0 0 10px rgba(0, 255, 148, 0.5);
          }
          
          .glow-link:hover {
            text-shadow: 0 0 5px rgba(0, 255, 148, 0.4);
          }
          
          .glow {
            text-shadow: 0 0 3px rgba(0, 255, 148, 0.8);
          }
          
          .glow-red {
            text-shadow: 0 0 3px rgba(255, 46, 99, 0.8);
          }
          
          @keyframes glow-pulse {
            0% {
              text-shadow: 0 0 5px rgba(0, 255, 148, 0.5);
            }
            100% {
              text-shadow: 0 0 12px rgba(0, 255, 148, 0.9);
            }
          }
          
          @keyframes glow-pulse-red {
            0% {
              text-shadow: 0 0 5px rgba(255, 46, 99, 0.5);
            }
            100% {
              text-shadow: 0 0 12px rgba(255, 46, 99, 0.9);
            }
          }
          
          .glow-stat:hover {
            text-shadow: 0 0 10px currentColor;
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
