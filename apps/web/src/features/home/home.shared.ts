import { SITES } from '@giancastle/ui/sites';
import { NETWORK, socialHref } from '@giancastle/ui/socials';

export const HAS_EMAIL = socialHref(NETWORK.email) !== undefined;

export const CONTACT_HREF =
  socialHref(NETWORK.email) ??
  socialHref(NETWORK.linkedin) ??
  socialHref(NETWORK.github) ??
  SITES.web;

export const TOOLBOX_ITEMS = {
  ai: ['Claude Code', 'Cursor', 'Codex', 'Devin', 'Amp', 'OpenCode', 'Gemini', 'MCP'],
  frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'React Native',
    'Node.js',
    'NestJS',
    'Tailwind CSS',
    'React Query',
    'Zod',
  ],
  backend: [
    'PostgreSQL',
    'DynamoDB',
    'MongoDB',
    'Drizzle ORM',
    'TypeORM',
    '.NET',
    'PHP',
    'Python',
    'Java',
  ],
  cloud: ['AWS Lambda', 'Amplify', 'S3', 'CloudWatch', 'Docker', 'GitHub Actions', 'pnpm'],
} as const;

export const STACK_LINE = 'React, Next.js, TypeScript, Node.js, PostgreSQL, DynamoDB, AWS';
export const AI_STACK_LINE = 'Claude Code, Cursor, Codex, Devin, MCP';
