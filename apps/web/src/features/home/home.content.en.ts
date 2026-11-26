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
  nav: {
    labels: {
      nav: 'Sections',
      position: (current, total) => `Section ${current} of ${total}`,
      contact: { label: HAS_EMAIL ? 'Email me' : 'Reach me on GitHub', href: CONTACT_HREF },
    },
    sections: [
      { id: SECTION_ID.proof, label: 'Results' },
      { id: SECTION_ID.value, label: 'What I bring' },
      { id: SECTION_ID.process, label: 'How I work' },
      { id: SECTION_ID.ways, label: 'Work with me' },
    ],
  },
  proof: {
    label: 'My results, race after race',
    labels: { turnOver: 'Turn over', turnBack: 'Back to the number' },
    items: [
      {
        sector: 'Healthtech',
        number: '8',
        caption: 'weeks, not 12 months',
        title: 'A year of roadmap in two months',
        body: 'I led a back-office redesign planned for a year and shipped it in about two months. Same team: 19 microservices migrated in 72 hours with strict parity, by agents running from my specs.',
        color: DECAL_COLOR.teal,
      },
      {
        sector: 'Healthtech',
        number: '1',
        caption: 'recording in, one clinical note out',
        title: 'An AI harness for clinical notes',
        body: 'I built the AI service harness that turns a recorded audio or video session into clinical notes, inside a HIPAA-compliant product for patients and clinicians.',
        color: DECAL_COLOR.pink,
      },
      {
        sector: 'Streaming',
        number: '3',
        caption: 'feeds that learn',
        title: 'A recommendation system',
        body: 'I replaced a random-shuffle home feed with a ranking engine across For You, Up Next and Suggested Creators. It ranks on follows and watch signals, and I explored bandit strategies such as Thompson sampling so new videos still get seen.',
        color: DECAL_COLOR.orange,
      },
      {
        sector: 'Streaming',
        number: '2',
        caption: 'products, one platform',
        title: 'Two systems that work as one',
        body: 'A streaming app for the living room and the publishing system behind it: the home screen and its editorial programming tools, playback with watch tracking, and a moderation pipeline from the viewer to a review queue with an audit trail.',
        color: DECAL_COLOR.pink,
      },
      {
        sector: 'Streaming',
        number: '24',
        caption: 'alerts, an AI on call',
        title: 'An observability system',
        body: 'Every error is classified, 24 alert rules route to the team chat, and an AI agent triages each one in its thread, reading the trace and naming the likely owner before a person opens it.',
        color: DECAL_COLOR.orange,
      },
      {
        sector: 'Streaming',
        number: '4',
        caption: 'ways in, one ingest',
        title: 'A media ingest system',
        body: 'Multipart uploads that retry, re-sign expired parts and resume after you leave the page, imports from cloud drives and pasted links, and background workflows that transcode and publish.',
        color: DECAL_COLOR.teal,
      },
      {
        sector: 'Community',
        number: '200+',
        caption: 'developers, one meetup',
        title: 'A community, built from zero',
        body: 'Outside client work I cofounded a React community of more than 200 developers and led a local developer circle, organizing talks and mentoring engineers.',
        color: DECAL_COLOR.pink,
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
