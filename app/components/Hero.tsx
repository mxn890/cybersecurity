'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create shield geometry
    const shieldGeometry = new THREE.RingGeometry(1, 1.5, 8);
    const shieldMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00FF94, 
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const shield = new THREE.Mesh(shieldGeometry, shieldMaterial);
    scene.add(shield);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.computeBoundingSphere();

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x00FF94,
      transparent: true,
      opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Position camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      shield.rotation.y += 0.01;
      particlesMesh.rotation.y += 0.002;
      particlesMesh.rotation.x += 0.001;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-5">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-[#00FF94] rounded-full opacity-60"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-[#FF2E63] rounded-full opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-3 h-3 bg-[#00FF94] rounded-full opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-5 h-5 bg-[#FF2E63] rounded-full opacity-30" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 w-full">
        <div className="mb-16">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 cyber-gradient neon-text leading-tight" style={{ letterSpacing: '4px' }}>
            CYBER
            <br />
            <span className="text-6xl md:text-8xl" style={{ letterSpacing: '3px' }}>FORTRESS</span>
          </h1>
          
          <div className="text-3xl md:text-4xl mb-12 text-gray-300 font-light tracking-wide">
            <span className="typing-animation">Advanced Security Arsenal</span>
          </div>
        </div>
        
        <p className="text-2xl md:text-3xl mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed tracking-wide">
          Professional-grade cybersecurity tools, dark web monitoring, and penetration testing solutions. 
          <br className="hidden md:block" />
          <span className="text-[#00FF94] font-medium">Secure your digital presence with military-grade protection.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 relative z-20">
          <button 
            onClick={() => scrollToSection('breach-checker')}
            className="px-12 py-6 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:from-[#00CC77] hover:to-[#00AA66] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00FF94]/25 text-xl relative overflow-hidden group"
          >
            <span className="relative z-10">CHECK DATA BREACHES</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </button>
          <button 
            onClick={() => scrollToSection('tools')}
            className="px-12 py-6 border-2 border-[#FF2E63] text-[#FF2E63] font-bold rounded-lg hover:bg-[#FF2E63]/10 transition-all duration-300 transform hover:scale-105 text-xl relative overflow-hidden group"
          >
            <span className="relative z-10">EXPLORE ARSENAL</span>
            <span className="absolute inset-0 bg-[#FF2E63] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Enhanced Neon Stats Cards */}
        <div className="w-full px-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center backdrop-blur-sm neon-box-1">
              <div className="absolute inset-0 rounded-2xl border-2 border-[#00FF94] opacity-70 neon-glow-green"></div>
              <div className="absolute inset-0 rounded-2xl bg-[#00FF94] opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-[#00FF94] mb-4 neon-text-glow">500+</div>
                <div className="text-2xl text-gray-300">Security Tools</div>
                <div className="text-lg text-gray-400 mt-2">Professional Grade</div>
              </div>
            </div>
            
            <div className="relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center backdrop-blur-sm neon-box-2">
              <div className="absolute inset-0 rounded-2xl border-2 border-[#FF2E63] opacity-70 neon-glow-pink"></div>
              <div className="absolute inset-0 rounded-2xl bg-[#FF2E63] opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-[#FF2E63] mb-4 neon-text-glow">24/7</div>
                <div className="text-2xl text-gray-300">Threat Monitoring</div>
                <div className="text-lg text-gray-400 mt-2">Real-time Protection</div>
              </div>
            </div>
            
            <div className="relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center backdrop-blur-sm neon-box-3">
              <div className="absolute inset-0 rounded-2xl border-2 border-[#00FF94] opacity-70 neon-glow-green"></div>
              <div className="absolute inset-0 rounded-2xl bg-[#00FF94] opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-[#00FF94] mb-4 neon-text-glow">99.9%</div>
                <div className="text-2xl text-gray-300">Success Rate</div>
                <div className="text-lg text-gray-400 mt-2">Proven Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="scroll-indicator animate-bounce">
          <div className="w-8 h-12 border-2 border-[#00FF94] rounded-full flex justify-center neon-glow-green">
            <div className="w-2 h-3 bg-[#00FF94] rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Add these styles in your global CSS */}
      <style jsx>{`
        .neon-glow-green {
          box-shadow: 0 0 10px #00FF94, 0 0 20px #00FF94, 0 0 30px #00FF94;
          animation: pulse-green 2s infinite alternate;
        }
        .neon-glow-pink {
          box-shadow: 0 0 10px #FF2E63, 0 0 20px #FF2E63, 0 0 30px #FF2E63;
          animation: pulse-pink 2s infinite alternate;
        }
        .neon-text-glow {
          text-shadow: 0 0 5px currentColor;
        }
        @keyframes pulse-green {
          0% {
            box-shadow: 0 0 10px #00FF94, 0 0 20px #00FF94;
          }
          100% {
            box-shadow: 0 0 15px #00FF94, 0 0 30px #00FF94, 0 0 45px #00FF94;
          }
        }
        @keyframes pulse-pink {
          0% {
            box-shadow: 0 0 10px #FF2E63, 0 0 20px #FF2E63;
          }
          100% {
            box-shadow: 0 0 15px #FF2E63, 0 0 30px #FF2E63, 0 0 45px #FF2E63;
          }
        }
        .neon-box-1:hover {
          box-shadow: 0 0 20px #00FF94;
        }
        .neon-box-2:hover {
          box-shadow: 0 0 20px #FF2E63;
        }
        .neon-box-3:hover {
          box-shadow: 0 0 20px #00FF94;
        }
      `}</style>
    </section>
  );
};

export default Hero;