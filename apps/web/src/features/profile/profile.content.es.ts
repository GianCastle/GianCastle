import { TOOLBOX_ITEMS } from './profile.shared';
import type { ProfileContent } from './profile.types';

export const PROFILE_ES: ProfileContent = {
  profile: {
    role: 'Senior Product Engineer',
    focus: 'Ingeniería de producto con entrega multiplicada por IA',
    description:
      'Giancarlos Castillo es un senior product engineer con más de 10 años de experiencia que usa agentes de IA para entregar en semanas lo que los equipos planifican para un año, y construye los flujos de trabajo y harnesses que permiten a todo un equipo hacer lo mismo.',
    knowsAbout: [
      'Ingeniería de producto',
      'Ingeniería de IA',
      'Diseño de flujos de trabajo con agentes',
      'Ingeniería de harnesses para agentes',
      'Desarrollo guiado por specs',
      'Model Context Protocol',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'AWS',
    ],
  },
  toolbox: {
    label: 'Herramientas',
    groups: [
      {
        name: 'Desarrollo aumentado con IA',
        items: [...TOOLBOX_ITEMS.ai, 'Desarrollo guiado por specs', 'Desarrollo de harnesses'],
      },
      { name: 'Frontend y full-stack', items: TOOLBOX_ITEMS.frontend },
      { name: 'Backend y datos', items: TOOLBOX_ITEMS.backend },
      { name: 'Cloud y entrega', items: TOOLBOX_ITEMS.cloud },
    ],
  },
};
