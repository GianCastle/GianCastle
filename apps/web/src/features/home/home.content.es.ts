import { DECAL_COLOR } from '@giancastle/ui/decals';
import { LOCALE } from '@giancastle/ui/locale';
import { STAGE_OWNER } from '@giancastle/ui/stages';
import { AUTHOR, SITES } from '@giancastle/ui/sites';
import { CV_PDF_PATH, CV_PUBLISHED, PAGE, SECTION_ID, pagePath, sectionHref } from '@/routes';
import { AI_STACK_LINE, CONTACT_HREF, HAS_EMAIL, STACK_LINE, TOOLBOX_ITEMS } from './home.shared';
import type { HomeContent } from './home.types';

const locale = LOCALE.es;

export const HOME_ES: HomeContent = {
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
  hero: {
    heading: `${AUTHOR.name}, senior product engineer`,
    sticker: AUTHOR.name,
    tagline:
      'senior product engineer. Uso IA para entregar en semanas lo que los equipos planifican para un año.',
    cv: CV_PUBLISHED ? { label: 'CV', href: pagePath(PAGE.cv, locale) } : undefined,
    cta: { label: 'Ver las pruebas', href: sectionHref(SECTION_ID.proof, locale) },
  },
  nav: {
    labels: {
      nav: 'Secciones',
      position: (current, total) => `Sección ${current} de ${total}`,
      contact: { label: HAS_EMAIL ? 'Escríbeme' : 'Contáctame en GitHub', href: CONTACT_HREF },
    },
    sections: [
      { id: SECTION_ID.proof, label: 'Resultados' },
      { id: SECTION_ID.value, label: 'Lo que aporto' },
      { id: SECTION_ID.process, label: 'Cómo trabajo' },
      { id: SECTION_ID.ways, label: 'Trabaja conmigo' },
    ],
  },
  proof: {
    label: 'Mis resultados, carrera tras carrera',
    labels: { turnOver: 'Voltear', turnBack: 'Volver al número' },
    items: [
      {
        sector: 'Salud digital',
        number: '8',
        caption: 'semanas, no 12 meses',
        title: 'Un año de roadmap en 8 semanas',
        body: 'Lideré el rediseño técnico de un backoffice planificado para un año. Lo entregamos en unas 8 semanas, con entrega asistida por IA y una librería de UI propia.',
        color: DECAL_COLOR.teal,
      },
      {
        sector: 'Salud digital',
        number: '72',
        caption: 'horas, 19 microservicios',
        title: 'Una migración en tres días',
        body: 'Migré 19 microservicios y renové sus endpoints en 72 horas, con agentes autónomos trabajando a partir de specs que escribí y paridad estricta entre lo viejo y lo nuevo.',
        color: DECAL_COLOR.orange,
      },
      {
        sector: 'Salud digital',
        number: '1',
        caption: 'grabación entra, una nota clínica sale',
        title: 'Un harness de IA para notas clínicas',
        body: 'Construí el harness de IA que convierte una sesión grabada en audio o video en notas clínicas, dentro de un producto para pacientes y clínicos que cumple con HIPAA.',
        color: DECAL_COLOR.pink,
      },
      {
        sector: 'Streaming',
        number: '3',
        caption: 'feeds que aprenden',
        title: 'Un sistema de recomendación',
        body: 'Diseñé un motor de ranking que alimenta tres superficies del producto y puntúa cada video con señales de afinidad (a quién sigues) y de visualización (inicio, progreso, finalización y abandono). Encima, una capa de exploración con boost a contenido poco expuesto y estrategias bandit como Thompson sampling equilibra relevancia y descubrimiento.',
        color: DECAL_COLOR.orange,
      },
      {
        sector: 'Streaming',
        number: '2',
        caption: 'productos, una plataforma',
        title: 'Dos sistemas que funcionan como uno',
        body: 'Una app de streaming para la sala y el sistema de publicación que la alimenta: la pantalla de inicio y sus herramientas de programación editorial, reproducción con seguimiento de visualización y un pipeline de moderación desde el espectador hasta una cola de revisión con auditoría.',
        color: DECAL_COLOR.pink,
      },
      {
        sector: 'Streaming',
        number: '24',
        caption: 'alertas, una IA de guardia',
        title: 'Un sistema de observabilidad',
        body: 'Cada error se clasifica, 24 reglas de alerta llegan al chat del equipo y un agente de IA hace el triage de cada una en su hilo: lee la traza y señala al responsable probable antes de que alguien la abra.',
        color: DECAL_COLOR.orange,
      },
      {
        sector: 'Streaming',
        number: '4',
        caption: 'entradas, una sola ingesta',
        title: 'Un sistema de ingesta de medios',
        body: 'Subidas multiparte que reintentan, vuelven a firmar partes vencidas y continúan aunque salgas de la página, importación desde nubes y enlaces pegados, y workflows en segundo plano que transcodifican y publican.',
        color: DECAL_COLOR.teal,
      },
      {
        sector: 'Streaming',
        number: '5',
        caption: 'categorías de riesgo, cada video auditado',
        title: 'Un sistema de clearance de derechos',
        body: 'Integré clearinghouses que escanean cada video al terminar la ingesta en busca de música y material con derechos de autor. Los hallazgos caen en una línea de tiempo por categoría, un veredicto marcado retiene la distribución y cada decisión, automática o humana, queda en un registro de auditoría.',
        color: DECAL_COLOR.teal,
      },
      {
        sector: 'Comunidad',
        number: '200+',
        caption: 'developers, una comunidad',
        title: 'Una comunidad, desde cero',
        body: 'Fuera del trabajo con clientes cofundé una comunidad de React de más de 200 developers y lideré un círculo local de desarrolladores, organizando charlas y mentoreando ingenieros.',
        color: DECAL_COLOR.pink,
      },
    ],
  },
  value: {
    label: 'Lo que aporto',
    statement: ['Soy un ingeniero.', 'Entrego como un equipo.'],
    items: [
      {
        verb: 'Construyo',
        rest: 'productos',
        color: DECAL_COLOR.orange,
        body: 'Llevo diez años construyendo productos con React, TypeScript, Node y AWS, con .NET y PHP en el camino y Python últimamente. Me hago cargo de una funcionalidad desde el spec hasta producción.',
      },
      {
        verb: 'Multiplico',
        rest: 'la entrega con IA',
        color: DECAL_COLOR.teal,
        body: 'Uso agentes de código en trabajo real todos los días. Mis specs, las tareas en paralelo y los puntos de revisión evitan que la velocidad baje el estándar.',
      },
      {
        verb: 'Dejo',
        rest: 'un flujo que tu equipo conserva',
        color: DECAL_COLOR.pink,
        body: 'Construyo el harness alrededor de Claude Code, Cursor, Codex, Devin, Amp, OpenCode, el que uses: reglas del proyecto, skills y servidores MCP. Tus ingenieros siguen entregando así si me voy.',
      },
    ],
  },
  process: {
    label: 'Cómo trabajo',
    headline: { lead: 'Las personas deciden.', accent: 'Los agentes hacen el trabajo.' },
    finish: 'Lo logramos',
    items: [
      {
        title: 'Spec',
        body: 'Acordamos qué significa terminado antes de que corra algo.',
        tag: 'KM 0 · Tú y yo',
        owner: STAGE_OWNER.shared,
      },
      {
        title: 'Harness',
        body: 'Nuestros estándares van al repo una vez. Cada agente parte de ellos.',
        tag: 'KM 20 · Yo',
        owner: STAGE_OWNER.person,
      },
      {
        title: 'Construir',
        body: 'Hacen el trabajo pesado en paralelo, en cualquier entorno.',
        tag: 'KM 40 · Agentes',
        owner: STAGE_OWNER.agents,
      },
      {
        title: 'Verificar',
        body: 'Los agentes corren las pruebas. Yo confirmo que funciona en el entorno real.',
        tag: 'KM 60 · Agentes y yo',
        owner: STAGE_OWNER.mixed,
      },
      {
        title: 'Revisar',
        body: 'Leo las decisiones y cómo encajan en tu sistema. No el código repetitivo.',
        tag: 'KM 80 · Yo',
        owner: STAGE_OWNER.person,
      },
    ],
  },
  ways: {
    label: 'Dos formas de trabajar conmigo',
    items: [
      {
        tag: 'Disponible para freelance',
        featured: true,
        title: 'Dame un proyecto',
        body: 'Un proyecto con principio y fin. Construyo la funcionalidad o monto el flujo de agentes en tu código y se lo entrego a tu equipo.',
        cta: { label: HAS_EMAIL ? 'Escríbeme' : 'Contáctame en GitHub', href: CONTACT_HREF },
      },
      {
        tag: 'Puesto a tiempo completo',
        title: 'Contrátame',
        body: 'Un puesto fijo en tu equipo. Me integro como ingeniero senior o staff y entrego producto desde el primer día.',
        cta: CV_PUBLISHED
          ? { label: 'Descargar CV', href: CV_PDF_PATH[locale], download: true }
          : { label: 'Escríbeme', href: CONTACT_HREF },
      },
    ],
  },
  closer: {
    title: 'A rodar',
    tagline: 'Estoy disponible. Cuéntame qué hay en tu roadmap.',
    blog: { label: 'Blog', href: `${SITES.blog}/` },
    cv: CV_PUBLISHED
      ? { label: 'Descargar CV', href: CV_PDF_PATH[locale], download: true }
      : undefined,
    note: `${AI_STACK_LINE}, desarrollo guiado por specs. ${STACK_LINE}. Santo Domingo. Remoto. Casi siempre fuera antes del amanecer.`,
    colophon: 'Cuadro: Astro. Grupo: TypeScript. Pintura: de una Scott Foil RC.',
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
