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
    const particlesCount = 1500;
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
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      
      {/* Background elements */}
      <div className="absolute inset-0 z-5">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-[#00FF94] rounded-full opacity-60"></div>
        <div className="floating-element absolute top-40 right-20 w-5 h-5 bg-[#FF2E63] rounded-full opacity-40"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-3 h-3 bg-[#00FF94] rounded-full opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 w-full">
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 cyber-gradient neon-text leading-tight">
            CYBER
            <br />
            <span className="text-5xl md:text-7xl">FORTRESS</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 text-gray-300 font-light tracking-wide">
            <span className="typing-animation">Advanced Security Arsenal</span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Professional-grade cybersecurity tools and dark web monitoring.
          <br className="hidden md:block" />
          <span className="text-[#00FF94] font-medium">Secure your digital presence.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-14">
          <button 
            onClick={() => scrollToSection('breach-checker')}
            className="px-10 py-5 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:from-[#00CC77] hover:to-[#00AA66] transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
          >
            CHECK DATA BREACHES
          </button>
          <button 
            onClick={() => scrollToSection('tools')}
            className="px-10 py-5 border-2 border-[#FF2E63] text-[#FF2E63] font-bold rounded-lg hover:bg-[#FF2E63]/10 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            EXPLORE TOOLS
          </button>
        </div>

        {/* Compact but visible stats */}
        <div className="w-full px-4 mb-8">
          <div className="grid grid-cols-3 gap-5">
            <div className="p-5 rounded-xl border border-[#00FF94]/50 text-center backdrop-blur-sm neon-glow-green">
              <div className="text-3xl font-bold text-[#00FF94]">500+</div>
              <div className="text-base text-gray-300">Security Tools</div>
            </div>
            <div className="p-5 rounded-xl border border-[#FF2E63]/50 text-center backdrop-blur-sm neon-glow-pink">
              <div className="text-3xl font-bold text-[#FF2E63]">24/7</div>
              <div className="text-base text-gray-300">Monitoring</div>
            </div>
            <div className="p-5 rounded-xl border border-[#00FF94]/50 text-center backdrop-blur-sm neon-glow-green">
              <div className="text-3xl font-bold text-[#00FF94]">99.9%</div>
              <div className="text-base text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-7 h-12 border-2 border-[#00FF94] rounded-full flex justify-center neon-glow-green">
          <div className="w-2 h-3 bg-[#00FF94] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        .neon-glow-green {
          box-shadow: 0 0 8px #00FF94;
          animation: pulse-green 2s infinite alternate;
        }
        .neon-glow-pink {
          box-shadow: 0 0 8px #FF2E63;
          animation: pulse-pink 2s infinite alternate;
        }
        .neon-text {
          text-shadow: 0 0 5px #00FF94;
        }
        @keyframes pulse-green {
          0% { box-shadow: 0 0 8px #00FF94; }
          100% { box-shadow: 0 0 12px #00FF94; }
        }
        @keyframes pulse-pink {
          0% { box-shadow: 0 0 8px #FF2E63; }
          100% { box-shadow: 0 0 12px #FF2E63; }
        }
      `}</style>
    </section>
  );
};

export default Hero;