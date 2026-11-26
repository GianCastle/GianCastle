import { TOOLBOX_ITEMS } from './profile.shared';
import type { ProfileContent } from './profile.types';

export const PROFILE_EN: ProfileContent = {
  profile: {
    role: 'Senior Product Engineer',
    focus: 'Product engineering with AI-multiplied delivery',
    description:
      'Giancarlos Castillo is a senior product engineer with 10+ years of experience who uses AI agents to ship in weeks what teams plan for a year, and builds the workflows and harnesses that let a whole team do the same.',
    knowsAbout: [
      'Product engineering',
      'AI engineering',
      'Agentic workflow design',
      'Agent harness engineering',
      'Spec-driven development',
      'Model Context Protocol',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'AWS',
    ],
  },
  toolbox: {
    label: 'Toolbox',
    groups: [
      {
        name: 'AI-augmented development',
        items: [...TOOLBOX_ITEMS.ai, 'Spec-driven development', 'Harness development'],
      },
      { name: 'Frontend and full-stack', items: TOOLBOX_ITEMS.frontend },
      { name: 'Backend and data', items: TOOLBOX_ITEMS.backend },
      { name: 'Cloud and delivery', items: TOOLBOX_ITEMS.cloud },
    ],
  },
};
