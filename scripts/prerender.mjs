import { readFile, writeFile } from 'node:fs/promises';
import { render } from '../.prerender/prerender.js';

const siteUrl = new URL(process.env.SITE_URL || 'https://codyworksoporte-dot.github.io/CodyWork/');
if (!['https:', 'http:'].includes(siteUrl.protocol)) throw new Error('SITE_URL must use HTTP(S)');
if (!siteUrl.pathname.endsWith('/')) siteUrl.pathname += '/';
const safe = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const schema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'CodyWork', url: siteUrl.href, logo: new URL('images/codywork-symbol.jpg', siteUrl).href, email: 'codyworksoporte@gmail.com', telephone: '+50375308948', address: { '@type': 'PostalAddress', addressCountry: 'SV' }, contactPoint: [{ '@type': 'ContactPoint', telephone: '+50368483548', contactType: 'customer support', availableLanguage: 'Spanish' }] };
const socialImage = safe(new URL('images/codywork-social.jpg', siteUrl).href);
const metadata = `<link rel="canonical" href="${safe(siteUrl.href)}" /><meta property="og:url" content="${safe(siteUrl.href)}" /><meta property="og:image" content="${socialImage}" /><meta property="og:image:alt" content="CodyWork: tu idea más nuestra tecnología" /><meta name="twitter:image" content="${socialImage}" /><script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`;
const html = await readFile('dist/index.html', 'utf8');
await writeFile('dist/index.html', html.replace('<!--app-html-->', render()).replace('<!--site-metadata-->', metadata));
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', siteUrl).href}\n`);
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${safe(siteUrl.href)}</loc></url></urlset>`);
console.log('HTML prerendered; canonical, structured data, robots and sitemap generated for', siteUrl.href);
