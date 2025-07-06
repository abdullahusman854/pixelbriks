'use client';

import { useEffect, useRef, useState } from 'react';
import { jobs } from '../../constants/careers';

export default function CareerSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const toggleJob = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Application for ${jobTitle} Position`);
    const body = encodeURIComponent(`Dear HR Team,\n\nI am writing to express my interest in the ${jobTitle} position at Pixelbriks.\n\nPlease find my application attached.\n\nBest regards,\n[Your Name]`);
    window.open(`mailto:hr@pixelbriks.com?subject=${subject}&body=${body}`, '_blank');
  };

  const filteredJobs = jobs.filter(job => job.isAvailable);

  return (
    <section ref={sectionRef} id="careers" className="section relative overflow-hidden">
      {/* Background pattern */}
      <div className="dot-pattern"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-secondary-500/15 to-primary-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>

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
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl lg:text-6xl font-bold text-primary-500 mb-6 relative">
              Join Our Team
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Build the future with us. We&apos;re looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Jobs List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className={`bg-slate-800/30 backdrop-blur-md border border-slate-700/50 rounded-xl transition-all duration-500 hover:bg-slate-700/40 hover:border-slate-600/70 hover:shadow-xl ${
                  isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Job Header - Clickable */}
                <div
                  onClick={() => toggleJob(job.id)}
                  className="p-6 cursor-pointer flex items-center justify-between hover:bg-slate-700/20 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-300 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-gray-400 text-sm">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Icon */}
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                      Available
                    </span>
                    <svg
                      className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                        expandedJob === job.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedJob === job.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-700/50 pt-6">
                      {/* Job Description */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-3">About the Role</h4>
                        <p className="text-gray-300 leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      {/* Requirements and Benefits Grid */}
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                          <ul className="space-y-3">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                          <ul className="space-y-3">
                            {job.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start gap-3 text-gray-300">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Apply Button */}
                      <div className="flex justify-center">
                        <button
                          onClick={() => handleApply(job.title)}
                          className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-0.5"
                        >
                          Apply for {job.title}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Jobs Message */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No Open Positions</h3>
            <p className="text-gray-400">We don&apos;t have any open positions in this department right now. Check back later or explore other departments!</p>
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary-500/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-secondary-500/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .dot-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.3;
        }
      `}</style>
    </section>
  );
}