import { createServer } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';

// Entrega o conteúdo no HTML inicial para leitura e SEO sem depender do JavaScript.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { render } = await server.ssrLoadModule('/src/entry-server.tsx');
  const path = new URL('../dist/index.html', import.meta.url);
  const template = await readFile(path, 'utf8');
  if (!template.includes('<div id="root"></div>')) throw new Error('Root de pré-renderização não encontrado.');
  await writeFile(path, template.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`));
  console.log('HTML pré-renderizado com sucesso.');
} finally {
  await server.close();
}
