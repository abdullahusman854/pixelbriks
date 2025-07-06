// Service type and constants for services section

import { ReactNode } from 'react';

export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  technologies: string[];
  icon: ReactNode;
  color: string;
}

export const services: Service[] = [
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
    icon: 'saas',
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
    icon: 'cloud',
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
    icon: 'design',
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
    icon: 'api',
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
    icon: 'ai',
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
    icon: 'consulting',
    color: 'from-yellow-500 to-orange-500'
  }
];

export function getServiceMailTemplate(service: Service) {
  return {
    subject: `Inquiry about ${service.title} Service`,
    body: `Hello Pixelbriks Team,%0D%0A%0D%0AI am interested in your \"${service.title}\" service. Please provide more information regarding the following:%0D%0A%0D%0A- Service Overview: ${service.shortDescription}%0D%0A- Key Features: ${service.features.join(', ')}%0D%0A- Technologies: ${service.technologies.join(', ')}%0D%0A%0D%0AYou can contact me at [your email/phone].%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards,%0D%0A[your name]`
  };
} 