import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const { features } = await import(path.join(root, 'src/data/features.ts'));
const { hotel } = await import(path.join(root, 'src/data/hotel.ts'));

const routeMap = {
  rooms: 'rooms', amenities: 'amenities', gallery: 'gallery', experiences: 'experiences', reviews: 'reviews', faq: 'faq',
  offers: 'offers', blog: 'blog', corporateEvents: 'corporate-events', giftVouchers: 'gift-vouchers', careers: 'careers',
  guestInformation: 'guest-information'
};
for (const [flag, route] of Object.entries(routeMap)) {
  if (!features[flag]) fs.rmSync(path.join(dist, route), { recursive: true, force: true });
}

const site = hotel.seo.siteUrl.replace(/\/$/, '');
const urls = [];
function walk(dir, rel = '') {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const next = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) walk(full, next);
    else if (entry.name === 'index.html') {
      const route = rel ? `/${rel}/` : '/';
      if (!route.startsWith('/404')) urls.push(`${site}${route}`);
    }
  }
}
walk(dist);
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${escapeXml(u)}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);
console.log(`Postbuild: ${urls.length} sitemap URLs; disabled feature routes removed.`);

function escapeXml(value) { return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;'); }
