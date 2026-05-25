// src/data/process.ts

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Consultation',
    description: 'Understand Your Needs & Goals',
  },
  {
    id: 2,
    title: 'Planning & Strategy',
    description: 'Build a Clear, Scalable Roadmap',
  },
  {
    id: 3,
    title: 'Design & Prototyping',
    description: 'Craft UX That Converts',
  },
  {
    id: 4,
    title: 'Development & Implementation',
    description: 'Deliver With Speed & Precision',
  },
  {
    id: 5,
    title: 'Testing & Optimization',
    description: 'Ensure Quality at Every Step',
  },
  {
    id: 6,
    title: 'Launch & Growth',
    description: 'Scale, Measure & Improve Continuously',
  },
];