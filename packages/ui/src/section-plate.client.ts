import { PLATE_ATTR } from './section-plate';

const REVEAL_AT = 0.5;
const CENTER_LINE = 0.5;

const has = (attribute: string) => `[${attribute}]`;

const createDisclosure = (plate: HTMLElement, toggle: HTMLButtonElement, list: HTMLElement) => {
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    list.hidden = !open;
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  list.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('a')) setOpen(false);
  });
  plate.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    setOpen(false);
    toggle.focus();
  });
  document.addEventListener('click', event => {
    if (event.target instanceof Node && !plate.contains(event.target)) setOpen(false);
  });

  return setOpen;
};

const createCurrentMarker = (plate: HTMLElement, links: HTMLAnchorElement[]) => {
  const write = (attribute: string, text: string) => {
    const target = plate.querySelector(has(attribute));
    if (target) target.textContent = text;
  };

  return (index: number) => {
    const link = links[index];
    if (!link) return;
    for (const other of links) other.removeAttribute('aria-current');
    link.setAttribute('aria-current', 'true');
    write(PLATE_ATTR.number, link.getAttribute(PLATE_ATTR.itemNumber) ?? '');
    write(PLATE_ATTR.position, link.getAttribute(PLATE_ATTR.itemPosition) ?? '');
    write(PLATE_ATTR.name, link.querySelector(has(PLATE_ATTR.label))?.textContent ?? '');
  };
};

const onScrollFrame = (callback: () => void) => {
  let queued = false;
  const run = () => {
    queued = false;
    callback();
  };
  addEventListener(
    'scroll',
    () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(run);
    },
    { passive: true },
  );
  callback();
};

const initSectionPlate = (plate: HTMLElement) => {
  const toggle = plate.querySelector('button');
  const list = plate.querySelector('nav');
  const links = [...plate.querySelectorAll<HTMLAnchorElement>(has(PLATE_ATTR.link))];
  const sections = links
    .map(link => document.getElementById(link.hash.slice(1)))
    .filter(section => section !== null);
  const [firstSection] = sections;
  if (!toggle || !list || !firstSection) return;

  const setOpen = createDisclosure(plate, toggle, list);
  const setCurrent = createCurrentMarker(plate, links);

  onScrollFrame(() => {
    const visible = firstSection.getBoundingClientRect().top < innerHeight * REVEAL_AT;
    plate.toggleAttribute(PLATE_ATTR.visible, visible);
    plate.inert = !visible;
    if (!visible) setOpen(false);

    const line = innerHeight * CENTER_LINE;
    const passed = sections.filter(section => section.getBoundingClientRect().top <= line).length;
    setCurrent(Math.max(passed - 1, 0));
  });
};

export const initSectionPlates = () => {
  for (const plate of document.querySelectorAll<HTMLElement>(has(PLATE_ATTR.root))) {
    initSectionPlate(plate);
  }
};
