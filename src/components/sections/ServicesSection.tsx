"use client";
import { useEffect, useRef, useState } from 'react';
import { services, Service, getServiceMailTemplate } from '../../constants/services';
import { ReactNode } from 'react';
import {
  Cloud,
  Layers,
  PenTool,
  Code2,
  Brain,
  Users,
} from 'lucide-react';

// Updated icon mapping with proper styling - using white fill and ensuring visibility
const serviceIcons: Record<string, ReactNode> = {
  saas: <Layers size={32} strokeWidth={2.2} className="text-white" />, // SaaS
  cloud: <Cloud size={32} strokeWidth={2.2} className="text-white" />, // Cloud
  design: <PenTool size={32} strokeWidth={2.2} className="text-white" />, // Design
  api: <Code2 size={32} strokeWidth={2.2} className="text-white" />, // API
  ai: <Brain size={32} strokeWidth={2.2} className="text-white" />, // AI
  consulting: <Users size={32} strokeWidth={2.2} className="text-white" />, // Consulting
};

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleServiceClick = (service: Service) => {
    setActiveService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveService(null), 300);
  };

  return (
    <section ref={sectionRef} id="services" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-primary-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Smart Tech. Scalable Platforms. Real Impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 xs:p-6 sm:p-8 cursor-pointer transition-all duration-500 hover:bg-slate-800/70 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 ${
                isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} 
                   style={{
                     background: service.color.includes('gradient') 
                       ? service.color.replace('from-', '').replace('to-', '').replace('bg-gradient-to-r', 'linear-gradient(135deg,')
                       : `linear-gradient(135deg, ${service.color.split(' ')[0]}, ${service.color.split(' ')[1] || service.color.split(' ')[0]})`
                   }} />
              
              {/* Icon Container with fixed gradient background */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-current/25"
                   style={{
                     background: service.color.includes('primary') 
                       ? 'linear-gradient(135deg, #B211F4, #9d0edb)'
                       : service.color.includes('secondary')
                       ? 'linear-gradient(135deg, #0ea5e9, #0284c7)'
                       : service.color.includes('green')
                       ? 'linear-gradient(135deg, #10b981, #059669)'
                       : service.color.includes('orange')
                       ? 'linear-gradient(135deg, #f97316, #ea580c)'
                       : service.color.includes('purple')
                       ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                       : 'linear-gradient(135deg, #B211F4, #9d0edb)'
                   }}>
                {serviceIcons[service.icon as string]}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 group-hover:text-primary-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {service.shortDescription}
                </p>
                {/* Learn More Button */}
                <div className="flex items-center gap-2 text-primary-500 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && activeService && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-1 xs:p-2 sm:p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className={`relative bg-slate-800/90 backdrop-blur-md border border-slate-700/50 rounded-3xl w-full max-w-xs xs:max-w-sm sm:max-w-lg lg:max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
              isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            } modal-scrollable flex flex-col sm:flex-row`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Modal Content */}
            <div className="p-3 xs:p-4 sm:p-8 lg:p-12 w-full flex flex-col items-center sm:items-start">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 xs:gap-4 sm:gap-6 mb-6 sm:mb-8 w-full">
                <div className="w-16 h-16 xs:w-20 xs:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0"
                     style={{
                       background: activeService.color.includes('primary') 
                         ? 'linear-gradient(135deg, #B211F4, #9d0edb)'
                         : activeService.color.includes('secondary')
                         ? 'linear-gradient(135deg, #0ea5e9, #0284c7)'
                         : activeService.color.includes('green')
                         ? 'linear-gradient(135deg, #10b981, #059669)'
                         : activeService.color.includes('orange')
                         ? 'linear-gradient(135deg, #f97316, #ea580c)'
                         : activeService.color.includes('purple')
                         ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                         : 'linear-gradient(135deg, #B211F4, #9d0edb)'
                     }}>
                  {serviceIcons[activeService.icon as string]}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-2 xs:mb-4">
                    {activeService.title}
                  </h3>
                  <p className="text-sm xs:text-base sm:text-lg text-gray-300 leading-relaxed">
                    {activeService.detailedDescription}
                  </p>
                </div>
              </div>
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8 w-full">
                <div>
                  <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-2 xs:mb-4">Key Features</h4>
                  <ul className="space-y-2 xs:space-y-3">
                    {activeService.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 xs:gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-2 xs:mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-1 xs:gap-2">
                    {activeService.technologies.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="px-2 xs:px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs xs:text-sm border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* CTA */}
              <div className="text-center w-full">
                <a
                  href={`mailto:info@pixelbriks.com?subject=${encodeURIComponent(getServiceMailTemplate(activeService).subject)}&body=${getServiceMailTemplate(activeService).body}`}
                  className="inline-block px-6 xs:px-8 py-2 xs:py-3 bg-primary-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-1 text-sm xs:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started with {activeService.title}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        /* Custom scrollbar for modal content */
        .modal-scrollable::-webkit-scrollbar {
          width: 10px;
        }
        .modal-scrollable::-webkit-scrollbar-thumb {
          background: #B211F4; /* primary-500 */
          border-radius: 8px;
        }
        .modal-scrollable::-webkit-scrollbar-track {
          background: transparent;
        }
        .modal-scrollable::-webkit-scrollbar-button {
          display: none !important;
        }
        /* Firefox */
        .modal-scrollable {
          scrollbar-color: #B211F4 transparent;
          scrollbar-width: thin;
        }
        @media (max-width: 640px) {
          .modal-scrollable {
            max-width: 95vw !important;
            border-radius: 1.25rem !important;
            padding: 1rem !important;
          }
          .modal-scrollable .w-20.h-20 {
            width: 4rem !important;
            height: 4rem !important;
          }
          .modal-scrollable h3 {
            font-size: 1.25rem !important;
          }
          .modal-scrollable h4 {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}