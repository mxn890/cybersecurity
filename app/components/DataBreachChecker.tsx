'use client'

import React, { useState } from 'react';

const DataBreachChecker: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<{
    found: boolean;
    breaches: string[];
    message: string;
  } | null>(null);

  const handleCheck = async () => {
    if (!email) return;
    
    setIsChecking(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock data - in real implementation, you'd call HaveIBeenPwned API
    const mockBreaches = ['LinkedIn (2012)', 'Adobe (2013)', 'Yahoo (2014)', 'Equifax (2017)', 'Facebook (2019)'];
    const isBreached = Math.random() > 0.5; // 50% chance of breach for demo
    
    setResult({
      found: isBreached,
      breaches: isBreached ? mockBreaches.slice(0, Math.floor(Math.random() * 4) + 1) : [],
      message: isBreached 
        ? 'Security breach detected!' 
        : 'Good news! No breaches found in our database.'
    });
    
    setIsChecking(false);
  };

  return (
    <section id="breach-checker" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block glassmorphism px-6 py-3 rounded-full mb-6">
            <span className="text-[#00FF94] font-bold">🔍 Data Breach Checker</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#FF2E63] neon-text">
            Check Your Security
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Instantly check if your email has been compromised in known data breaches
          </p>
        </div>

        <div className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-lg focus:border-[#00FF94] focus:outline-none text-white text-lg"
            />
            <button
              onClick={handleCheck}
              disabled={!email || isChecking}
              className="px-8 py-4 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:from-[#00CC77] hover:to-[#00AA66] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isChecking ? 'Checking...' : 'Check Security'}
            </button>
          </div>

          {isChecking && (
            <div className="mb-6 p-4 bg-gray-800 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00FF94] mx-auto mb-4"></div>
                <p className="text-gray-300">Scanning databases...</p>
              </div>
            </div>
          )}

          {result && (
            <div className={`p-6 rounded-lg ${result.found ? 'bg-red-900/30 border border-red-500' : 'bg-green-900/30 border border-green-500'}`}>
              <div className="flex items-center gap-3 mb-4">
                {result.found ? (
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">⚠️</span>
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✅</span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold ${result.found ? 'text-red-400' : 'text-green-400'}`}>
                  {result.message}
                </h3>
              </div>
              
              {result.found && result.breaches.length > 0 && (
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-red-300 mb-3">Found in these breaches:</p>
                  <ul className="space-y-2">
                    {result.breaches.map((breach, index) => (
                      <li key={index} className="flex items-center gap-3 text-red-300">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        {breach}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DataBreachChecker;