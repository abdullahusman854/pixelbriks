import { useEffect, useRef, useState } from 'react';
import { services, Service, getServiceMailTemplate } from '../../constants/services';
import { ReactNode } from 'react';

// Icon mapping for service icons
const serviceIcons: Record<string, ReactNode> = {
  saas: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  cloud: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  design: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z" />
    </svg>
  ),
  api: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  ai: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  consulting: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
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

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-primary-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Smart Tech. Scalable Platforms. Real Impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:bg-slate-800/70 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 ${
                isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
              
              {/* Icon Container */}
              <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                <div className="text-white">
                  {serviceIcons[service.icon as string]}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeModal}
        >
          <div 
            className={`relative bg-slate-800/90 backdrop-blur-md border border-slate-700/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
              isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            } modal-scrollable flex flex-col sm:flex-row`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-4 sm:p-8 lg:p-12 w-full flex flex-col items-center sm:items-start">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8 w-full">
                <div className={`w-20 h-20 bg-gradient-to-r ${activeService.color} rounded-2xl flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0`}>
                  <div className="text-white text-2xl">
                    {serviceIcons[activeService.icon as string]}
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    {activeService.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    {activeService.detailedDescription}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8 w-full">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {activeService.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.technologies.map((tech: string, index: number) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600/50"
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
                  className="inline-block px-8 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-1"
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