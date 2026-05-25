// src/data/services.ts

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Build fast, scalable, and SEO-friendly websites.',
    icon: '/services/website.png',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps tailored to user needs.',
    icon: '/services/mobile-app.png',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Delight users with intuitive and beautiful interfaces.',
    icon: '/services/uiux-design.png',
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description: 'Secure and flexible cloud infrastructure for your growth.',
    icon: '/services/cloud-solutions.png',
  },
  {
    id: 5,
    title: 'Software Development',
    description: 'Custom solutions built around your business logic.',
    icon: '/services/software-development.png',
  },
  {
    id: 6,
    title: 'IT Infrastructure',
    description: 'Scale your backend with reliable tech foundations.',
    icon: '/services/it-infrastructure.png',
  },
  {
    id: 7,
    title: 'Cybersecurity Services',
    description: 'Stay protected with enterprise-grade security.',
    icon: '/services/cybersecurity.png',
  },
  {
    id: 8,
    title: 'QA Solutions',
    description: 'Ensure performance with rigorous testing frameworks.',
    icon: '/services/qa-solutions.png',
  },
  {
    id: 9,
    title: 'IT Consulting & Support',
    description: 'Make smarter tech decisions with expert guidance.',
    icon: '/services/it-consulting.png',
  },
];