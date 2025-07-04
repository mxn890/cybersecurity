import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationIdRef = useRef<number>();
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Check WebGL support before attempting to create renderer
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      console.warn('WebGL not supported, falling back to CSS animations');
      setWebglSupported(false);
      return;
    }

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;

    try {
      // Scene setup with error handling
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      // Create renderer with fallback options
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: 'default', // Use default power preference to avoid issues
        failIfMajorPerformanceCaveat: false // Don't fail on performance issues
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      
      // Safely append to DOM
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

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

      // Animation loop with error handling
      const animate = () => {
        try {
          animationIdRef.current = requestAnimationFrame(animate);
          
          if (shield && particlesMesh && renderer && scene && camera) {
            shield.rotation.y += 0.01;
            particlesMesh.rotation.y += 0.002;
            particlesMesh.rotation.x += 0.001;
            
            renderer.render(scene, camera);
          }
        } catch (error) {
          console.error('Animation error:', error);
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
          }
        }
      };

      animate();

      // Handle resize with error handling
      const handleResize = () => {
        try {
          if (camera && renderer) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          }
        } catch (error) {
          console.error('Resize error:', error);
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        try {
          window.removeEventListener('resize', handleResize);
          
          if (animationIdRef.current) {
            cancelAnimationFrame(animationIdRef.current);
          }
          
          if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
            mountRef.current.removeChild(renderer.domElement);
          }
          
          // Dispose of Three.js resources
          if (renderer) {
            renderer.dispose();
          }
          
          // Clean up geometries and materials
          scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
              if (object.geometry) {
                object.geometry.dispose();
              }
              if (object.material) {
                if (Array.isArray(object.material)) {
                  object.material.forEach(material => material.dispose());
                } else {
                  object.material.dispose();
                }
              }
            }
          });
        } catch (error) {
          console.error('Cleanup error:', error);
        }
      };

    } catch (error) {
      console.error('WebGL initialization error:', error);
      setWebglSupported(false);
      
      // Clean up any partially created resources
      if (renderer) {
        try {
          renderer.dispose();
        } catch (disposeError) {
          console.error('Error disposing renderer:', disposeError);
        }
      }
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {webglSupported && <div ref={mountRef} className="absolute inset-0 z-0" />}
      
      {/* Fallback animated background for when WebGL is not supported */}
      {!webglSupported && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00FF94] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#FF2E63] rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-[#00FF94] rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      )}
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-5">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-[#00FF94] rounded-full opacity-60"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-[#FF2E63] rounded-full opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-3 h-3 bg-[#00FF94] rounded-full opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-5 h-5 bg-[#FF2E63] rounded-full opacity-30" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 cyber-gradient neon-text leading-tight" style={{ letterSpacing: '2px' }}>
            CYBER
            <br />
            <span className="text-5xl md:text-7xl">FORTRESS</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-12 text-gray-300 font-light">
            <span className="typing-animation">Advanced Security Arsenal</span>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Professional-grade cybersecurity tools, dark web monitoring, and penetration testing solutions. 
          <br className="hidden md:block" />
          <span className="text-[#00FF94]">Secure your digital presence with military-grade protection.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <button 
            onClick={() => scrollToSection('breach-checker')}
            className="px-10 py-5 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:from-[#00CC77] hover:to-[#00AA66] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#00FF94]/25 text-lg"
          >
            Check Data Breaches
          </button>
          <button 
            onClick={() => scrollToSection('tools')}
            className="px-10 py-5 border-2 border-[#FF2E63] text-[#FF2E63] font-bold rounded-lg hover:bg-[#FF2E63] hover:text-white transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Explore Arsenal
          </button>
        </div>
      </div>

      {/* Stats Cards - Fixed positioning */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glassmorphism p-6 rounded-2xl hover:neon-glow transition-all duration-300 transform hover:scale-105 text-center">
            <div className="text-3xl font-bold text-[#00FF94] mb-2">500+</div>
            <div className="text-gray-300 text-lg">Security Tools</div>
            <div className="text-sm text-gray-400 mt-1">Professional Grade</div>
          </div>
          <div className="glassmorphism p-6 rounded-2xl hover:neon-glow transition-all duration-300 transform hover:scale-105 text-center">
            <div className="text-3xl font-bold text-[#FF2E63] mb-2">24/7</div>
            <div className="text-gray-300 text-lg">Threat Monitoring</div>
            <div className="text-sm text-gray-400 mt-1">Real-time Protection</div>
          </div>
          <div className="glassmorphism p-6 rounded-2xl hover:neon-glow transition-all duration-300 transform hover:scale-105 text-center">
            <div className="text-3xl font-bold text-[#00FF94] mb-2">99.9%</div>
            <div className="text-gray-300 text-lg">Success Rate</div>
            <div className="text-sm text-gray-400 mt-1">Proven Results</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;