import { execFile } from 'node:child_process';
import { copyFile, readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { promisify } from 'node:util';

const DIST_DIR = resolve(import.meta.dirname, '../dist');
const PUBLIC_DIR = resolve(import.meta.dirname, '../public');
const DOCUMENTS = [
  { path: '/cv/', file: 'giancarlos-castillo-cv.pdf' },
  { path: '/es/cv/', file: 'giancarlos-castillo-cv-es.pdf' },
];
const CHROME_PATH =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const CONTENT_TYPE = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

const toFilePath = url => {
  const pathname = decodeURIComponent(new URL(url, 'http://localhost').pathname);
  return join(DIST_DIR, pathname.endsWith('/') ? `${pathname}index.html` : pathname);
};

const server = createServer(async (request, response) => {
  try {
    const filePath = toFilePath(request.url);
    const body = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type': CONTENT_TYPE[extname(filePath)] ?? 'application/octet-stream',
    });
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
});

await new Promise(done => server.listen(0, '127.0.0.1', done));
const { port } = server.address();

const run = promisify(execFile);

try {
  for (const document of DOCUMENTS) {
    const target = join(PUBLIC_DIR, document.file);
    await run(CHROME_PATH, [
      '--headless=new',
      '--disable-gpu',
      '--no-pdf-header-footer',
      '--virtual-time-budget=5000',
      `--print-to-pdf=${target}`,
      `http://127.0.0.1:${port}${document.path}`,
    ]);
    await copyFile(target, join(DIST_DIR, document.file));
    console.log(`CV written to ${target}`);
  }
} finally {
  server.close();
}
