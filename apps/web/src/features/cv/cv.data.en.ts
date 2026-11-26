import type { CvContent } from './cv.types';

export const CV_EN: CvContent = {
  title: 'Staff Software Engineer · Product engineering with AI-multiplied delivery',
  location: 'Santo Domingo, Dominican Republic',
  summary:
    'Staff software engineer with 10+ years of experience building high-scale frontend and full-stack architectures. Specialized in React, Node.js and modern web systems, with a current focus on evolving the software development lifecycle through AI-augmented workflows. Track record of pairing rigorous engineering standards with high-velocity delivery using Claude Code, Cursor, Devin and Gemini.',
  labels: {
    pageTitle: 'CV',
    home: 'Home',
    download: 'Download PDF',
    summary: 'Summary',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    community: 'Community',
  },
  experience: [
    {
      role: 'Staff Software Engineer',
      organization: 'Healthtech company',
      place: 'United States (remote)',
      period: '2021 – Present',
      highlights: [
        'Designed and developed responsive, accessible web applications for patients and clinicians under full HIPAA compliance.',
        'Executed a 19-microservice migration and endpoint overhaul in 72 hours using autonomous agents and spec-driven development while keeping strict service parity.',
        'Compressed a 12-month roadmap into roughly 8 weeks by leading the technical facelift and redesign of a back-office system through AI-augmented delivery and a custom UI library.',
        'Engineered an AI service harness that generates clinical notes from recorded audio and video sessions.',
        'Orchestrated a large multi-domain migration from Yarn to pnpm, refactoring legacy code and establishing new development patterns.',
        'Mentored engineers, drove code reviews and continuously improved performance, security and reliability.',
      ],
    },
    {
      role: 'Senior Software Developer',
      organization: 'Software consultancy',
      place: 'United States (remote)',
      period: '2020 – 2021',
      highlights: [
        'Built features for an AureliaJS and .NET monorepo and supported the technical lead on architecture decisions.',
        'Reduced build and deployment times by migrating legacy frontend bundling to modern tooling.',
        'Introduced unit testing across backend and client tiers.',
      ],
    },
    {
      role: 'Software Engineer',
      organization: 'Software company',
      place: 'Dominican Republic',
      period: '2017 – 2020',
      highlights: [
        'Modernized 4+ enterprise applications from legacy stacks to current frontend frameworks.',
        'Cut onboarding time by 3x with standardized React starters.',
        'Improved delivery speed by 35% through a stronger React architecture and mentored 3 junior engineers.',
      ],
    },
    {
      role: 'Cofounder and Web Developer',
      organization: 'Independent dev studio',
      place: 'Dominican Republic',
      period: '2015 – 2017',
      highlights: [
        'Cofounded a dev shop serving 5+ retail and healthcare clients with e-commerce and WordPress solutions.',
        'Developed custom desktop applications for inventory and capital management.',
      ],
    },
  ],
  education: [
    { title: "Bachelor's Degree in Software Engineering", place: 'UNAPEC, Santo Domingo' },
    {
      title: 'Web Development Intensive Program',
      place: 'Instituto Tecnológico de Las Américas (ITLA)',
    },
    { title: 'Front-End Web Developer Nanodegree', place: 'Udacity' },
    { title: 'Full Stack Web Development Certificate', place: 'freeCodeCamp' },
  ],
  community: [
    'React RD, cofounder. Built and grew a community of 200+ Dominican developers.',
    'Facebook Developer Circle Santo Domingo, lead. Organized technical talks and fostered local developer growth.',
  ],
};
