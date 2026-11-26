import { DECAL_COLOR } from '@giancastle/ui/decals';
import { LOCALE } from '@giancastle/ui/locale';
import { STAGE_OWNER } from '@giancastle/ui/stages';
import { AUTHOR, SITES } from '@giancastle/ui/sites';
import { CV_PDF_PATH, PAGE, SECTION_ID, pagePath, sectionHref } from '@/routes';
import { AI_STACK_LINE, CONTACT_HREF, HAS_EMAIL, STACK_LINE, TOOLBOX_ITEMS } from './home.shared';
import type { HomeContent } from './home.types';

const locale = LOCALE.en;

export const HOME_EN: HomeContent = {
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
  hero: {
    heading: `${AUTHOR.name}, senior product engineer`,
    sticker: AUTHOR.name,
    tagline: 'senior product engineer. I use AI to ship in weeks what teams plan for a year.',
    cv: { label: 'CV', href: pagePath(PAGE.cv, locale) },
    cta: { label: 'See the proof', href: sectionHref(SECTION_ID.proof, locale) },
  },
  proof: {
    label: 'Proof, not promises',
    items: [
      {
        lead: '12 months',
        trail: '8 weeks',
        body: 'I led a back-office redesign that was planned for a year. We shipped it in about two months.',
      },
      {
        lead: '19 services',
        trail: '72 hours',
        body: 'I migrated 19 microservices with strict parity, running agents from specs I wrote.',
      },
      {
        lead: 'Sessions',
        trail: 'clinical notes',
        body: 'I built an AI harness that turns recorded audio and video into clinical documentation, inside a HIPAA product.',
      },
    ],
  },
  value: {
    label: 'What I bring',
    statement: ['I’m one engineer.', 'I ship like a team.'],
    items: [
      {
        verb: 'Build',
        rest: 'products',
        color: DECAL_COLOR.orange,
        body: 'I’ve spent ten years building products with React, TypeScript, Node and AWS, with .NET and PHP along the way and Python lately. I own a feature from the spec to production.',
      },
      {
        verb: 'Multiply',
        rest: 'delivery with AI',
        color: DECAL_COLOR.teal,
        body: 'I run coding agents on real work every day. My specs, parallel tasks and review gates keep the speed from lowering the bar.',
      },
      {
        verb: 'Leave',
        rest: 'a workflow behind',
        color: DECAL_COLOR.pink,
        body: 'I build the harness around Claude Code, Cursor, Codex, Devin, Amp, OpenCode, you name it: project rules, skills, MCP servers. Your engineers keep shipping this way if I’m gone.',
      },
    ],
  },
  process: {
    label: 'How I work',
    headline: { lead: 'People decide.', accent: 'Agents do the work.' },
    finish: 'We made it',
    items: [
      {
        title: 'Spec',
        body: 'We agree on what done means before anything runs.',
        tag: 'KM 0 · You and me',
        owner: STAGE_OWNER.shared,
      },
      {
        title: 'Harness',
        body: 'Our standards go in the repo once. Every agent starts from them.',
        tag: 'KM 20 · Me',
        owner: STAGE_OWNER.person,
      },
      {
        title: 'Build',
        body: 'They do the heavy lifting in parallel, in any environment.',
        tag: 'KM 40 · Agents',
        owner: STAGE_OWNER.agents,
      },
      {
        title: 'Verify',
        body: 'Agents run the checks. I confirm it works in the real environment.',
        tag: 'KM 60 · Agents and me',
        owner: STAGE_OWNER.mixed,
      },
      {
        title: 'Review',
        body: 'I read the decisions and how they fit your system. Not the boilerplate.',
        tag: 'KM 80 · Me',
        owner: STAGE_OWNER.person,
      },
    ],
  },
  ways: {
    label: 'Two ways to work with me',
    items: [
      {
        tag: 'Open for freelance',
        featured: true,
        title: 'Book me',
        body: 'A project with a start and an end. I build the feature or set up the agent workflow in your codebase, then hand it over to your team.',
        cta: { label: HAS_EMAIL ? 'Email me' : 'Reach me on GitHub', href: CONTACT_HREF },
      },
      {
        tag: 'Full-time role',
        title: 'Hire me',
        body: 'A permanent seat on your team. I join as a senior or staff engineer and ship product from day one.',
        cta: { label: 'Download CV', href: CV_PDF_PATH[locale], download: true },
      },
    ],
  },
  closer: {
    title: 'Let’s ship',
    tagline: 'I’m open. Tell me what’s on your roadmap.',
    blog: { label: 'Blog', href: `${SITES.blog}/en/` },
    cv: { label: 'Download CV', href: CV_PDF_PATH[locale], download: true },
    note: `${AI_STACK_LINE}, spec-driven development. ${STACK_LINE}. Santo Domingo. Remote. Usually out before sunrise.`,
    colophon: 'Frame: Astro. Groupset: TypeScript. Paint: off a Scott Foil RC.',
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
