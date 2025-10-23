'use client'

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Polished Hero component for WolfGuider
// - Accessibility improvements (sr-only heading)
// - Responsive Three.js rendering (pixel ratio cap & resize handling)
// - Reduced particle count on small screens
// - Performance: stop animation on unmount, dispose resources
// - Visual/UI: CTA badge for urgency, improved contrast, readable font assumed globally

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;

    // Scene + camera + renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    // Pixel ratio cap for performance on mobile devices
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(DPR);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.setAttribute('aria-hidden', 'true');

    container.appendChild(renderer.domElement);

    // Shield geometry (wireframe ring)
    const shieldGeometry = new THREE.RingGeometry(1.05, 1.45, 64);
    const shieldMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff94,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const shield = new THREE.Mesh(shieldGeometry, shieldMaterial);
    scene.add(shield);

    // Particles - scale count by screen width
    const isSmall = container.clientWidth < 640;
    const particlesCount = isSmall ? 700 : 1500;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * 12;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 12;
      posArray[i] = x;
      posArray[i + 1] = y;
      posArray[i + 2] = z;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.computeBoundingSphere();

    const particlesMaterial = new THREE.PointsMaterial({ size: isSmall ? 0.006 : 0.008, color: 0x00ff94, transparent: true, opacity: 0.85 });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5.5;

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Gentle motion
      shield.rotation.y += 0.008;
      shield.rotation.x += 0.0015;
      particlesMesh.rotation.y += 0.0018;
      particlesMesh.rotation.x += 0.0009;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    // Use ResizeObserver for container size changes (more reliable inside responsive layouts)
    const ro = new ResizeObserver(() => handleResize());
    ro.observe(container);

    // Cleanup on unmount
    return () => {
      ro.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      // remove DOM
      if (container && renderer.domElement) container.removeChild(renderer.domElement);

      // dispose geometries and materials
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      shieldGeometry.dispose();
      shieldMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 pb-10">
      {/* Canvas mount */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Decorative floating dots (hidden on very small screens for perf) */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="hidden sm:block absolute top-20 left-10 w-3 h-3 md:w-4 md:h-4 bg-[#00FF94] rounded-full opacity-60"></div>
        <div className="hidden sm:block absolute top-40 right-10 md:right-20 w-4 h-4 md:w-5 md:h-5 bg-[#FF2E63] rounded-full opacity-40"></div>
        <div className="hidden sm:block absolute bottom-32 left-1/4 w-3 h-3 bg-[#00FF94] rounded-full opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Screen-reader friendly subheading for SEO/accessibility */}
        <h2 className="sr-only">WolfGuider — Enterprise cybersecurity & dark web monitoring</h2>

        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 leading-tight" style={{color: '#e6eef0'}}>
            <span className="block">CYBER</span>
            <span className="block text-[#00FF94]">FORTRESS</span>
          </h1>

          <div className="text-lg sm:text-xl mb-4 md:mb-6 text-gray-200 font-light tracking-wide max-w-2xl mx-auto">
            <span className="inline-block typing-animation">Advanced security solutions — stealth simulation for penetration testing & dark web monitoring.</span>
          </div>

          {/* Urgency badge */}
          <div className="flex items-center justify-center gap-3 mt-3">
            <span className="inline-flex items-center gap-2 bg-[#FF2E63] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              🔥 Limited offer — 40% off until Oct 31
            </span>
            <span className="text-xs text-gray-300">Only <strong>100</strong> licenses left</span>
          </div>
        </div>

        <p className="text-base sm:text-lg mb-8 md:mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
          Enterprise-grade cybersecurity tools and continuous monitoring to protect your digital assets. <span className="text-[#00FF94] font-medium">Designed for security teams.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-14 px-2">
          <button onClick={() => scrollToSection('breach-checker')} aria-label="Check breaches" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:scale-105 transition transform shadow-lg text-sm sm:text-base">CHECK BREACHES</button>

          <button onClick={() => scrollToSection('tools')} aria-label="Explore tools" className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-[#FF2E63] text-[#FF2E63] font-bold rounded-lg hover:bg-[#FF2E63]/10 transition transform hover:scale-105 text-sm sm:text-base">EXPLORE TOOLS</button>

          <button onClick={() => scrollToSection('about')} aria-label="Learn more" className="px-5 py-2.5 sm:px-6 sm:py-3 border-2 border-[#00B4FF] text-[#00B4FF] font-bold rounded-lg hover:bg-[#00B4FF]/10 transition transform hover:scale-105 text-sm sm:text-base">LEARN MORE</button>
        </div>

        {/* Stats */}
        <div className="w-full px-2 sm:px-4 mb-6 md:mb-8">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-lg border border-[#00FF94]/30 text-center backdrop-blur-sm">
              <div className="text-lg sm:text-xl font-bold text-[#00FF94]">500+</div>
              <div className="text-xs sm:text-sm text-gray-300">Security Tools</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg border border-[#FF2E63]/30 text-center backdrop-blur-sm">
              <div className="text-lg sm:text-xl font-bold text-[#FF2E63]">24/7</div>
              <div className="text-xs sm:text-sm text-gray-300">Monitoring</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg border border-[#00FF94]/30 text-center backdrop-blur-sm">
              <div className="text-lg sm:text-xl font-bold text-[#00FF94]">99.9%</div>
              <div className="text-xs sm:text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#00FF94] rounded-full flex justify-center items-start">
          <div className="w-1.5 h-2.5 bg-[#00FF94] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Local CSS */}
      <style jsx>{`
        .typing-animation {
          display: inline-block;
          max-width: 36ch;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid rgba(0,255,148,0.95);
          animation: typing 3.5s steps(36, end), blink-caret 0.75s step-end infinite;
        }
        @keyframes typing { from { width: 0 } to { width: 100% } }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: rgba(0,255,148,0.95) } }

        /* Accessibility helpers */
        .sr-only { position: absolute !important; height: 1px; width: 1px; overflow: hidden; clip: rect(1px, 1px, 1px, 1px); white-space: nowrap; }

        @media (max-width: 640px) {
          .typing-animation { max-width: 28ch; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
