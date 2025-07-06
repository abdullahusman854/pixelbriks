// Job type and constants for careers section

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Contract / Full-time';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  isAvailable: boolean;
}

export const jobs: Job[] = [
    {
      id: 2,
      title: 'Marketing & Business Development Intern',
      department: 'Marketing',
      location: 'Remote / Hybrid',
      type: 'Internship',
      experience: '0-1 year',
      description: 'We are looking for an enthusiastic intern to assist in executing marketing campaigns and identifying business growth opportunities. You will learn hands-on skills in content creation, lead generation, and market research.',
      requirements: [
        'Strong communication and research skills',
        'Basic understanding of digital marketing channels',
        'Willingness to learn and take initiative',
        'Comfortable with tools like Google Workspace, Notion, etc.',
        'Ability to work independently and as part of a team'
      ],
      benefits: [
        'Mentorship from experienced professionals',
        'Remote work flexibility',
        'Certificate of completion',
        'Opportunity for full-time role',
        'Stipend-based internship'
      ],
      isAvailable: true
    },
    {
      id: 3,
      title: 'Marketing & Business Development Associate',
      department: 'Marketing',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'You will drive campaigns, develop partnerships, and support revenue growth. This role is ideal for someone who understands branding, lead nurturing, and has a strong strategic mindset.',
      requirements: [
        'Experience in digital marketing and lead generation',
        'Excellent communication and negotiation skills',
        'Ability to manage campaigns and CRM tools',
        'Analytical skills to track ROI and performance metrics',
        'Knowledge of tools like HubSpot, SEMrush, etc.'
      ],
      benefits: [
        'Performance-based incentives',
        'Flexible working hours',
        'Career growth opportunities',
        'Learning and development support',
        'Paid leaves and remote-friendly policies'
      ],
      isAvailable: true
    },
    {
      id: 4,
      title: 'Associate Graphic Designer',
      department: 'Design',
      location: 'Remote / Hybrid',
      type: 'Part-time',
      experience: '1-2 years',
      description: 'Create visual content for marketing campaigns, social media, and digital platforms. You’ll collaborate with the marketing team and bring ideas to life through engaging designs.',
      requirements: [
        'Proficient in Adobe Creative Suite (Photoshop, Illustrator)',
        'Understanding of branding and visual identity',
        'Portfolio of past design work',
        'Ability to meet deadlines and take feedback',
        'Familiarity with Canva and Figma is a plus'
      ],
      benefits: [
        'Creative freedom and mentorship',
        'Part-time remote flexibility',
        'Performance bonuses',
        'Opportunities for full-time conversion',
        'Skill development support'
      ],
      isAvailable: true
    },
    {
      id: 5,
      title: 'DevOps Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      experience: '0-1 year',
      description: 'Work with our DevOps team to assist in deployment automation, CI/CD workflows, and cloud infrastructure management. Ideal for someone looking to start a career in DevOps.',
      requirements: [
        'Basic knowledge of Linux and shell scripting',
        'Understanding of CI/CD concepts',
        'Familiarity with tools like Docker and Git',
        'Strong problem-solving attitude',
        'Eagerness to learn modern DevOps practices'
      ],
      benefits: [
        'Real-world project experience',
        'Remote working setup',
        'Mentorship and guidance',
        'Flexible internship schedule',
        'Certificate and potential job offer'
      ],
      isAvailable: true
    },
    {
      id: 6,
      title: 'WordPress Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Contract / Full-time',
      experience: '2+ years',
      description: 'We re seeking a WordPress Developer to build and maintain custom WordPress websites, themes, and plugins. You\'ll work closely with our design and content teams to deliver high-performing, responsive websites.',
      requirements: [
        'Expertise in WordPress theme and plugin development',
        'Good understanding of PHP, HTML, CSS, and JavaScript',
        'Experience with page builders like Elementor or WPBakery',
        'Familiar with SEO and website optimization',
        'Able to manage hosting, backups, and security'
      ],
      benefits: [
        'Flexible work schedule',
        'Remote work policy',
        'Collaborative and creative team',
        'Ongoing project pipeline',
        'Performance-based bonuses'
      ],
      isAvailable: true
    },
    {
      id: 7,
      title: 'Associate Software Engineer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      experience: '1-2 years',
      description: 'Join our engineering team to work on SaaS products and client projects. You,ll contribute to both frontend and backend tasks, learning best practices in modern web development.',
      requirements: [
        'Hands-on experience with JavaScript/TypeScript',
        'Knowledge of React or Vue.js and Node.js',
        'Understanding of RESTful APIs and databases',
        'Basic understanding of version control (Git)',
        'Strong problem-solving and debugging skills'
      ],
      benefits: [
        'Career advancement opportunities',
        'Mentorship from senior engineers',
        'Flexible remote work options',
        'Learning & development resources',
        'Performance bonuses and paid leaves'
      ],
      isAvailable: true
    }
  ];

export const departments = ['All', 'Engineering', 'Design', 'Product', 'Data', 'Marketing'];
