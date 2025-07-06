'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { number: '50', suffix: '+', text: 'SaaS Platforms Delivered' },
    { number: '1k', suffix: '+', text: 'Cloud Instances Managed' },
    { number: '100K', suffix: '+', text: 'End Users Supported' },
    { number: '99', suffix: '%', text: 'Uptime Guaranteed' },
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="stats" className="section relative">
      {/* Background pattern */}
      <div className="grid-pattern"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full opacity-5 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-secondary rounded-full opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`card card-hover text-center p-8 group ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">
                <span className="text-4xl lg:text-5xl font-bold text-white block">
                  {stat.number}
                </span>
                <span className="text-2xl lg:text-3xl font-bold text-primary-500">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-gray-300 font-medium">
                {stat.text}
              </p>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-radial opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 