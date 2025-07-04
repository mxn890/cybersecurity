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
    
    // Simulate API call delay with realistic scanning time
    await new Promise(resolve => setTimeout(resolve, 3500));
    
    // Mock data - in real implementation, you'd call HaveIBeenPwned API
    const mockBreaches = ['LinkedIn (2012)', 'Adobe (2013)', 'Yahoo (2014)', 'Equifax (2017)', 'Facebook (2019)'];
    const isBreached = Math.random() > 0.5; // 50% chance of breach for demo
    
    setResult({
      found: isBreached,
      breaches: isBreached ? mockBreaches.slice(0, Math.floor(Math.random() * 4) + 1) : [],
      message: isBreached 
        ? 'SECURITY BREACH DETECTED!' 
        : 'SECURE - No breaches found in our database.'
    });
    
    setIsChecking(false);
  };

  return (
    <section id="breach-checker" className="py-20 px-4 relative overflow-hidden">
      {/* Dark Hacking Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <img
          src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Hacking Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black/80 to-green-900/20"></div>
      </div>

      {/* Matrix-like falling code effect */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div className="matrix-rain"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-block glassmorphism px-8 py-4 rounded-full mb-6 border border-red-500/30">
            <span className="text-red-400 font-bold text-lg">⚠️ DARK WEB SCANNER</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 neon-text">
            BREACH DETECTOR
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Scanning the darkest corners of the web for your compromised data
          </p>
        </div>

        <div className="glassmorphism p-8 rounded-2xl max-w-2xl mx-auto border border-red-500/20 bg-black/60">
          {/* Hacking Terminal Header */}
          <div className="flex items-center gap-2 mb-6 p-3 bg-gray-900 rounded-lg border border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-400 font-mono text-sm ml-4">root@darkweb-scanner:~$</span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Enter target email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-gray-900 border border-red-500/30 rounded-lg focus:border-red-400 focus:outline-none text-green-400 text-lg font-mono placeholder-gray-500"
            />
            <button
              onClick={handleCheck}
              disabled={!email || isChecking}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-red-500/50 shadow-lg shadow-red-500/25"
            >
              {isChecking ? (
                <div className="flex items-center gap-3">
                  <div className="scanning-animation">
                    <div className="scanner-line"></div>
                  </div>
                  <span className="font-mono">SCANNING...</span>
                </div>
              ) : (
                <span className="font-mono">INITIATE SCAN</span>
              )}
            </button>
          </div>

          {/* Loading Animation */}
          {isChecking && (
            <div className="mb-6 p-6 bg-gray-900 rounded-lg border border-green-500/30">
              <div className="text-center">
                <div className="hacking-loader mb-4">
                  <div className="loader-text">
                    <span className="text-green-400 font-mono">Penetrating dark web databases...</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-mono space-y-1">
                  <div>→ Accessing encrypted databases...</div>
                  <div>→ Bypassing security protocols...</div>
                  <div>→ Analyzing breach patterns...</div>
                  <div>→ Cross-referencing dark web markets...</div>
                </div>
              </div>
            </div>
          )}

          {result && (
            <div className={`p-6 rounded-lg border-2 ${result.found ? 'bg-red-900/30 border-red-500 shadow-lg shadow-red-500/25' : 'bg-green-900/30 border-green-500 shadow-lg shadow-green-500/25'}`}>
              <div className="flex items-center gap-3 mb-4">
                {result.found ? (
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-xl">⚠️</span>
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🛡️</span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold font-mono ${result.found ? 'text-red-400' : 'text-green-400'}`}>
                  {result.message}
                </h3>
              </div>
              
              {result.found && result.breaches.length > 0 && (
                <div className="bg-black/50 p-4 rounded-lg border border-red-500/30">
                  <p className="text-red-300 mb-3 font-mono">COMPROMISED IN:</p>
                  <ul className="space-y-2">
                    {result.breaches.map((breach, index) => (
                      <li key={index} className="flex items-center gap-3 text-red-300 font-mono">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="bg-red-900/30 px-3 py-1 rounded border border-red-500/30">{breach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="mt-6 text-sm text-gray-400 font-mono text-center">
            <p>🔒 ENCRYPTED CONNECTION | NO LOGS STORED | ANONYMOUS SCANNING</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataBreachChecker;