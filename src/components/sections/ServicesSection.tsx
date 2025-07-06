import { useEffect, useRef, useState } from 'react';

// Define the Service interface
interface Service {
  id: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  technologies: string[];
  icon: React.ReactNode;
  color: string;
}

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services: Service[] = [
    {
      id: 1,
      title: 'SaaS Product Development',
      shortDescription: 'From concept to launch, we build scalable, secure SaaS platforms tailored to your market and users.',
      detailedDescription: 'Transform your innovative ideas into powerful SaaS solutions. Our comprehensive development approach covers everything from initial concept validation to full-scale deployment. We specialize in building robust, scalable platforms that can handle thousands of users while maintaining peak performance and security.',
      features: [
        'End-to-end SaaS development',
        'Scalable cloud architecture',
        'Multi-tenant system design',
        'Payment integration & billing',
        'User management & authentication',
        'Real-time analytics dashboard'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure & DevOps',
      shortDescription: 'We design, deploy, and optimize cloud-native systems on AWS, GCP, and Azure with a DevOps-first approach.',
      detailedDescription: 'Accelerate your deployment cycles and improve system reliability with our comprehensive cloud infrastructure and DevOps solutions. We implement industry best practices to ensure your applications are scalable, secure, and maintainable.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Monitoring & logging',
        'Auto-scaling configuration',
        'Security & compliance'
      ],
      technologies: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      title: 'UI/UX & Product Design',
      shortDescription: 'Pixel-perfect interfaces and seamless experiences that engage users and elevate your brand.',
      detailedDescription: 'Create stunning, intuitive interfaces that not only look beautiful but also drive user engagement and conversion. Our design-first approach ensures every interaction feels natural and purposeful.',
      features: [
        'User research & persona development',
        'Wireframing & prototyping',
        'Visual design & branding',
        'Responsive design systems',
        'Usability testing',
        'Design system development'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Framer'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z" />
        </svg>
      ),
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 4,
      title: 'API & System Integrations',
      shortDescription: 'Connect tools, automate workflows, and scale faster with secure, efficient integrations.',
      detailedDescription: 'Seamlessly connect your existing tools and systems to create a unified, efficient workflow. Our integration solutions eliminate data silos and automate repetitive tasks, allowing your team to focus on what matters most.',
      features: [
        'RESTful API development',
        'GraphQL implementation',
        'Third-party integrations',
        'Webhook automation',
        'Data synchronization',
        'API security & rate limiting'
      ],
      technologies: ['Node.js', 'Python', 'GraphQL', 'REST', 'WebSockets', 'Redis'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'AI & Analytics Solutions',
      shortDescription: 'Empower your product with AI, machine learning, and real-time data intelligence.',
      detailedDescription: 'Harness the power of artificial intelligence and advanced analytics to gain actionable insights and automate complex processes. Our AI solutions are designed to integrate seamlessly with your existing systems.',
      features: [
        'Machine learning model development',
        'Natural language processing',
        'Computer vision solutions',
        'Real-time data processing',
        'Predictive analytics',
        'Custom AI integrations'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Apache Spark', 'Elasticsearch'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 6,
      title: 'Tech Consulting & MVP Strategy',
      shortDescription: 'Build smarter with expert guidance on architecture, MVP roadmaps, and scaling strategies.',
      detailedDescription: 'Get expert strategic guidance to make informed technology decisions and accelerate your product development. Our consulting services help you avoid common pitfalls and build a solid foundation for long-term success.',
      features: [
        'Technical architecture planning',
        'MVP development roadmap',
        'Technology stack selection',
        'Scalability planning',
        'Code review & optimization',
        'Team training & mentorship'
      ],
      technologies: ['Various', 'Architecture', 'Strategy', 'Planning', 'Optimization', 'Best Practices'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-500'
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
                  {service.icon}
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className={`relative bg-slate-800/90 backdrop-blur-md border border-slate-700/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
              isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            } modal-scrollable`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-8 lg:p-12">
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${activeService.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <div className="text-white text-2xl">
                    {activeService.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {activeService.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {activeService.detailedDescription}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
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
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
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
              <div className="text-center">
                <button className="px-8 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-1">
                  Get Started with {activeService.title}
                </button>
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
      `}</style>
    </section>
  );
}