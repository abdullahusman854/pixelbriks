'use client';

import { useEffect, useRef, useState } from 'react';

export default function SocialSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const socialPlatforms = [
    {
      platform: 'LinkedIn',
      handle: 'Pixelbriks',
      url: 'https://www.linkedin.com/company/pixelbriks/',
      description: 'Connect with our professional network',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700',
      shadowColor: 'rgba(59, 130, 246, 0.4)',
      bgPattern: 'linkedin'
    },
    {
      platform: 'Instagram',
      handle: 'Pixelbriks',
      url: 'https://www.instagram.com/pixelbriks?igsh=MXhxYmc2ajY3OG14Mg==',
      description: 'Follow our creative journey',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'from-pink-500 via-purple-500 to-orange-500',
      hoverColor: 'from-pink-600 via-purple-600 to-orange-600',
      shadowColor: 'rgba(236, 72, 153, 0.4)',
      bgPattern: 'instagram'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="getintouch" className="section relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="dot-pattern"></div>
      
      {/* Multiple floating elements with different animations */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-secondary-500/15 to-primary-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-1/3 right-1/6 w-36 h-36 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl lg:text-6xl font-bold text-primary-500 mb-6 relative">
              Connect With Us
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join our community across social platforms and stay updated with our latest innovations
          </p>
        </div>

        {/* Enhanced Social Platforms Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className={`group relative ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Main Card */}
              <div className="card card-hover p-8 text-center relative overflow-hidden bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-3xl transition-all duration-500 hover:bg-slate-700/40 hover:border-slate-600/70 hover:shadow-2xl">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {platform.bgPattern === 'linkedin' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-3xl"></div>
                  )}
                  {platform.bgPattern === 'instagram' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-orange-500/5 rounded-3xl"></div>
                  )}
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}></div>
                
                {/* Icon Container with enhanced animations */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${platform.color} rounded-3xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl relative overflow-hidden`}
                       style={{ boxShadow: `0 20px 40px ${platform.shadowColor}` }}>
                    
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${platform.hoverColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                    
                    {/* Icon */}
                    <div className="text-white relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {platform.icon}
                    </div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -skew-x-12 group-hover:animate-shimmer"></div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-orbit"></div>
                    <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full animate-orbit-reverse"></div>
                  </div>
                </div>

                {/* Enhanced Platform Info */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold text-white mb-3 transition-all duration-300 group-hover:text-blue-300">
                    {platform.platform}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 transition-all duration-300 group-hover:text-gray-300">
                    {platform.description}
                  </p>

                  {/* Enhanced CTA Button */}
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-xl border border-slate-600 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:from-slate-600 hover:to-slate-700 hover:border-slate-500 hover:shadow-lg hover:scale-105"
                  >
                    <span>Follow @{platform.handle}</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Particle effects */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-6 right-8 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-8 left-6 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                </div>

                {/* Enhanced hover glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-secondary-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-3xl blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-secondary-500/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        
        @keyframes orbit-reverse {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg) translateX(30px) rotate(360deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }
        
        .animate-orbit-reverse {
          animation: orbit-reverse 3s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
}