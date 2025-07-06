import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Image from 'next/image';

// Types
interface FloatingObjectProps {
  position: [number, number, number];
  geometry: 'sphere' | 'box' | 'torus';
  color: string;
  speed?: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

// 3D Floating Objects Component
function FloatingObject({ position, geometry, color, speed = 1 }: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state: { clock: { elapsedTime: number } }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
      {geometry === 'box' && <boxGeometry args={[0.8, 0.8, 0.8]} />}
      {geometry === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </mesh>
  );
}

// 3D Scene Component
function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} color="#d946ef" />
      
      <FloatingObject position={[-3, 2, 0]} geometry="sphere" color="#0ea5e9" speed={0.8} />
      <FloatingObject position={[3, -1, 0]} geometry="box" color="#d946ef" speed={1.2} />
      <FloatingObject position={[0, 0, -2]} geometry="torus" color="#f97316" speed={1.5} />
      <FloatingObject position={[-2, -2, 1]} geometry="sphere" color="#10b981" speed={0.9} />
      <FloatingObject position={[2, 2, -1]} geometry="box" color="#8b5cf6" speed={1.1} />
    </Canvas>
  );
}

// Particle System Component
function ParticleSystem() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// Main Hero Section Component
export default function HeroSection() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    "SaaS Product Development",
    "Cloud Infrastructure & DevOps", 
    "UI/UX & Product Design",
    "API & System Integrations",
    "AI & Analytics Solutions",
    "Tech Consulting & MVP Strategy"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-16 overflow-hidden">
      {/* Particle System */}
      <ParticleSystem />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 -z-5 opacity-30">
        <Scene3D />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Hero Visual with Main Image - Mobile First */}
          <div className={`relative order-1 lg:order-2 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="relative max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
              {/* Main Image Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                {/* Glow effect behind image */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse" /> */}
                {/* <div className="absolute inset-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-xl animate-pulse delay-1000" /> */}
                
                {/* Main Image */}
                <Image
                  src="/images/main.png"
                  alt="PixelBriks Web3 Agency Hero"
                  layout="fill"
                  objectFit="contain"
                  className="relative z-10 w-full h-full animate-float drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(59, 130, 246, 0.3))',
                  }}
                />
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-blue-400 rounded-full transform -translate-x-1/2 animate-pulse" />
                <div className="absolute top-1/2 right-0 w-2 h-2 md:w-3 md:h-3 bg-purple-400 rounded-full transform -translate-y-1/2 animate-pulse delay-500" />
                <div className="absolute bottom-0 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-pink-400 rounded-full transform -translate-x-1/2 animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-0 w-2 h-2 md:w-3 md:h-3 bg-orange-400 rounded-full transform -translate-y-1/2 animate-pulse delay-1500" />
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg rotate-12 animate-float" />
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg -rotate-12 animate-float delay-1000" />
              <div className="absolute top-1/4 -left-4 md:-left-8 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-full animate-float delay-2000" />
              <div className="absolute bottom-1/4 -right-4 md:-right-8 w-3 h-3 md:w-5 md:h-5 bg-gradient-to-br from-green-400 to-blue-400 rounded-full animate-float delay-3000" />
              
              {/* Floating particles around image */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full animate-float opacity-60" />
              <div className="absolute top-1/3 right-1/4 w-1 h-1 md:w-2 md:h-2 bg-purple-500 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-1/3 left-1/3 w-1 h-1 md:w-2 md:h-2 bg-pink-500 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 md:w-3 md:h-3 bg-orange-400 rounded-full animate-float opacity-60" style={{ animationDelay: '3s' }} />
            </div>
          </div>

          {/* Hero Content */}
          <div className={`space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

            {/* Main Heading */}
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="block">Digital</span>
                <span className="block bg-gradient-to-r text-white bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>
              
              {/* Animated Service Text */}
              <div className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 flex items-center justify-center lg:justify-start">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-gradient-to-r from-primary-500 to-purple-400 bg-clip-text text-transparent transition-all duration-500">
                  {services[currentServiceIndex]}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Empowering startups and businesses with tailor-made software, high-converting UI/UX, and smart digital strategies that deliver results — faster. From MVPs to full-scale products, we build with purpose.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <a
                href="#services"
                className="group relative px-5 py-2.5 md:px-6 md:py-3 bg-primary-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10 text-sm md:text-base">Explore Services</span>
                <div className="absolute inset-0 bg-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#getintouch"
                className="group px-5 py-2.5 md:px-6 md:py-3 border-2 border-primary-500/50 text-white font-semibold rounded-xl transition-all duration-300 hover:border-primary-400 hover:bg-blue-500/10 hover:scale-105"
              >
                <span className="text-sm md:text-base">Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed positioning with proper spacing */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1500 { animation-delay: 1500ms; }
        .delay-2000 { animation-delay: 2000ms; }
        .delay-3000 { animation-delay: 3000ms; }
      `}</style>
    </section>
  );
}