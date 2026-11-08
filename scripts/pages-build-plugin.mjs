import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, join, relative, isAbsolute } from 'node:path';

// Vite handles bundled assets; copied reference CSS needs the same deployment base.
export function pagesBuildPlugin() {
  let config;
  return {
    name: 'zarabanyar-pages-output',
    apply: 'build',
    configResolved(value) { config = value; },
    async writeBundle() {
      const output = resolve(config.root, config.build.outDir);
      const base = config.base.endsWith('/') ? config.base : `${config.base}/`;
      async function rewriteCss(directory) {
        for (const entry of await readdir(directory, { withFileTypes: true })) {
          const path = join(directory, entry.name);
          if (entry.isDirectory()) await rewriteCss(path);
          else if (entry.name.endsWith('.css') && base !== '/') {
            const source = await readFile(path, 'utf8');
            const updated = source.replace(/url\(\s*(['"]?)(\/(?:assets|styles)\/[^)'"\s]*)\1\s*\)/g, (_, quote, url) => `url(${quote}${base}${url.slice(1)}${quote})`);
            if (updated !== source) await writeFile(path, updated);
          }
        }
      }
      await rewriteCss(output);
      const html = await readFile(join(output, 'index.html'), 'utf8');
      const routes = JSON.parse(await readFile(join(config.root, 'src/routes.json'), 'utf8'));
      const paths = new Set([...routes.map(route => route.path), '/assessment-forms/kids/arzyabi/']);
      for (const path of paths) {
        const destination = resolve(output, decodeURIComponent(path).replace(/^\/+/, ''), 'index.html');
        const inside = relative(output, destination);
        if (inside.startsWith('..') || isAbsolute(inside)) throw new Error('Route output must stay inside the build directory');
        if (destination === join(output, 'index.html')) continue;
        await mkdir(resolve(destination, '..'), { recursive: true });
        await writeFile(destination, html);
      }
      await writeFile(join(output, '404.html'), html);
      await writeFile(join(output, '.nojekyll'), '');
    },
  };
}
