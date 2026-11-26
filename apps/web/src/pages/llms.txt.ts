import { LOCALE } from '@giancastle/ui/locale';
import { AUTHOR, SITES } from '@giancastle/ui/sites';
import { NETWORK, NETWORK_LABEL, SOCIAL_LINKS } from '@giancastle/ui/socials';
import type { APIRoute } from 'astro';
import { HOME_CONTENT } from '@/features/home/home.content';
import { DEFAULT_LOCALE } from '@/i18n';
import { CV_PDF_PATH, PAGE, pagePath } from '@/routes';

const { profile, proof, value, process, ways, toolbox } = HOME_CONTENT[DEFAULT_LOCALE];

const absolute = (path: string) => new URL(path, SITES.web).href;

const section = (title: string, lines: string[]) => [`## ${title}`, '', ...lines, ''];

const profileLinks = SOCIAL_LINKS.filter(link => link.network !== NETWORK.email).map(
  link => `- [${NETWORK_LABEL[link.network]}](${link.href})`,
);

const buildLlmsTxt = () =>
  [
    `# ${AUTHOR.name}`,
    '',
    `> ${profile.description}`,
    '',
    `${profile.role} based in ${AUTHOR.location}, known online as ${AUTHOR.handle}. Focus: ${profile.focus}.`,
    '',
    ...section(
      proof.label,
      proof.items.map(item => `- **${item.lead} / ${item.trail}**: ${item.body}`),
    ),
    ...section(
      value.label,
      value.items.map(item => `- **${item.verb} ${item.rest}**: ${item.body}`),
    ),
    ...section(
      process.label,
      process.items.map((step, index) => `${index + 1}. **${step.title}**: ${step.body}`),
    ),
    ...section(
      ways.label,
      ways.items.map(item => `- **${item.title}**: ${item.body}`),
    ),
    ...section(
      toolbox.label,
      toolbox.groups.map(group => `- **${group.name}**: ${group.items.join(', ')}`),
    ),
    ...section('Links', [
      `- [Home](${absolute(pagePath(PAGE.home, LOCALE.en))}): proof, what you get, process and ways to work together`,
      `- [Home in Spanish](${absolute(pagePath(PAGE.home, LOCALE.es))})`,
      `- [CV](${absolute(pagePath(PAGE.cv, LOCALE.en))}): experience, skills and education`,
      `- [CV as PDF](${absolute(CV_PDF_PATH[LOCALE.en])})`,
      `- [CV in Spanish as PDF](${absolute(CV_PDF_PATH[LOCALE.es])})`,
      ...profileLinks,
    ]),
    ...section('Optional', [
      `- [Personal blog](${SITES.blog}): essays and poems in Spanish and English`,
    ]),
  ].join('\n');

export const GET: APIRoute = () =>
  new Response(buildLlmsTxt(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
