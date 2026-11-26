import type { CvContent } from './cv.types';

export const CV_ES: CvContent = {
  title: 'Staff Software Engineer · Ingeniería de producto con entrega multiplicada por IA',
  location: 'Santo Domingo, República Dominicana',
  summary:
    'Staff software engineer con más de 10 años de experiencia construyendo arquitecturas frontend y full-stack de alta escala. Especializado en React, Node.js y sistemas web modernos, con foco actual en evolucionar el ciclo de desarrollo de software mediante flujos de trabajo aumentados con IA. Trayectoria combinando estándares de ingeniería rigurosos con entregas de alta velocidad usando Claude Code, Cursor, Devin y Gemini.',
  labels: {
    pageTitle: 'CV',
    home: 'Inicio',
    download: 'Descargar PDF',
    summary: 'Resumen',
    skills: 'Habilidades',
    experience: 'Experiencia',
    education: 'Educación',
    community: 'Comunidad',
  },
  experience: [
    {
      role: 'Staff Software Engineer',
      organization: 'Empresa de tecnología en salud',
      place: 'Estados Unidos (remoto)',
      period: '2021 – Presente',
      highlights: [
        'Diseñé y desarrollé aplicaciones web responsivas y accesibles para pacientes y profesionales clínicos, con cumplimiento total de HIPAA.',
        'Ejecuté una migración de 19 microservicios con renovación de endpoints en 72 horas usando agentes autónomos y desarrollo guiado por specs, manteniendo paridad estricta entre servicios.',
        'Comprimí un roadmap de 12 meses en unas 8 semanas liderando la renovación técnica y el rediseño de un sistema de backoffice mediante entrega aumentada con IA y una librería de UI propia.',
        'Construí un harness de servicios de IA que genera notas clínicas a partir de sesiones grabadas en audio y video.',
        'Orquesté una migración multidominio de Yarn a pnpm, refactorizando código legado y estableciendo nuevos patrones de desarrollo.',
        'Mentoricé ingenieros, lideré revisiones de código y mejoré de forma continua el rendimiento, la seguridad y la confiabilidad.',
      ],
    },
    {
      role: 'Senior Software Developer',
      organization: 'Consultora de software',
      place: 'Estados Unidos (remoto)',
      period: '2020 – 2021',
      highlights: [
        'Desarrollé funcionalidades para un monorepo de AureliaJS y .NET y apoyé al líder técnico en decisiones de arquitectura.',
        'Reduje los tiempos de build y despliegue migrando el empaquetado frontend legado a herramientas modernas.',
        'Introduje pruebas unitarias en las capas de backend y cliente.',
      ],
    },
    {
      role: 'Software Engineer',
      organization: 'Empresa de software',
      place: 'República Dominicana',
      period: '2017 – 2020',
      highlights: [
        'Modernicé más de 4 aplicaciones empresariales desde stacks legados a frameworks frontend actuales.',
        'Reduje a un tercio el tiempo de onboarding con starters de React estandarizados.',
        'Mejoré la velocidad de entrega en un 35% con una arquitectura de React más sólida y mentoricé a 3 ingenieros junior.',
      ],
    },
    {
      role: 'Cofundador y desarrollador web',
      organization: 'Estudio de desarrollo independiente',
      place: 'República Dominicana',
      period: '2015 – 2017',
      highlights: [
        'Cofundé un estudio de desarrollo que atendió a más de 5 clientes de retail y salud con soluciones de e-commerce y WordPress.',
        'Desarrollé aplicaciones de escritorio a medida para gestión de inventario y capital.',
      ],
    },
  ],
  education: [
    { title: 'Ingeniería de Software', place: 'UNAPEC, Santo Domingo' },
    {
      title: 'Programa intensivo de desarrollo web',
      place: 'Instituto Tecnológico de Las Américas (ITLA)',
    },
    { title: 'Front-End Web Developer Nanodegree', place: 'Udacity' },
    { title: 'Certificado de desarrollo web full stack', place: 'freeCodeCamp' },
  ],
  community: [
    'React RD, cofundador. Construí e hice crecer una comunidad de más de 200 desarrolladores dominicanos.',
    'Facebook Developer Circle Santo Domingo, líder. Organicé charlas técnicas e impulsé el crecimiento de desarrolladores locales.',
  ],
};
