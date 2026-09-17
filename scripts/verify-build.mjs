import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const html = await readFile('dist/index.html', 'utf8');
assert.ok(html.includes('<main'), 'Essential content must be prerendered');
assert.equal((html.match(/id="proyecto-/g) || []).length, 11, 'All eleven projects must be in HTML');
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'One top-level heading');
assert.ok(html.includes('rel="canonical"') && html.includes('application/ld+json'));
assert.ok(!html.includes('<!--app-html-->') && !html.includes('<!--site-metadata-->'));
for (const match of html.matchAll(/(?:src|href)="(\.\/(?:assets|images)\/[^"?#]+)"/g)) {
  assert.ok((await stat(path.join('dist', match[1]))).isFile(), `Missing asset: ${match[1]}`);
}
for (const file of ['robots.txt', 'sitemap.xml', 'site.webmanifest']) assert.ok((await stat(`dist/${file}`)).size > 0);
for (const match of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) assert.match(match[0], /rel="noopener noreferrer"/);
const css = await readFile('src/styles/responsive.css', 'utf8');
assert.match(css, /prefers-reduced-motion:reduce/);
assert.match(css, /transform:none!important/);
console.log('Production checks passed: prerendered content, 11 projects, local assets, safe external links, SEO files and reduced-motion fallback.');
