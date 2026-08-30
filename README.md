# MASTER HOTEL WEBSITE TEMPLATE V5.2

**Astro + TypeScript + Tailwind CSS · Premium hospitality UI · AI-ready · Cloudflare Pages**

This is a reusable master template, not a website for a real hotel. Demo content is clearly marked and must be replaced with verified hotel information before production.

## Design direction
V5.2 combines an editorial hospitality layout with full-bleed photography, strong serif display typography, restrained earthy tones, asymmetrical grids, chapter-style section labels, conversion CTAs, trust messaging and calm micro-interactions. It takes high-level hospitality UX lessons from the supplied references without copying their text, branding, imagery or proprietary design.

The Machan reference demonstrates strong storytelling, room discovery, experiences, dining, trust/fraud messaging and a destination-led narrative. The Emergent reference demonstrates a polished modern hotel framework. V5.2 translates those patterns into an original, reusable Astro system.

## Stack
- Astro static output
- TypeScript
- Tailwind CSS
- HTML/CSS/vanilla JS for small interactions
- Lucide Astro icons
- custom final-output sitemap generation in `scripts/postbuild.mjs`

No React, Vite SPA architecture, React Router, Next.js, database, authentication, CMS, payment backend or persistent Node server.

## Commands
```bash
npm install
npm run dev
npm run build
npm run preview
```

Build output: `dist/`

Cloudflare Pages:
- Build command: `npm run build`
- Build directory: `dist`

## Data-first architecture
Edit these files before changing reusable components:
`src/data/hotel.ts`, `rooms.ts`, `amenities.ts`, `gallery.ts`, `experiences.ts`, `nearby.ts`, `faqs.ts`, `reviews.ts`, `offers.ts`, `blog.ts`, `policies.ts`, `social.ts`, `awards.ts`, `seo.ts`, `theme.ts`, `features.ts`.

## Images
Replace the demo SVGs in `public/images/` with verified hotel imagery. Use descriptive names and preferably WebP/AVIF. Keep explicit dimensions and meaningful alt text.

## Feature flags
`src/data/features.ts` controls navigation, homepage sections, and optional route output. The post-build script removes disabled optional module folders from `dist` so they do not ship.

## AI customization
Give a coding agent this master template plus a hotel data package. The agent should modify data and images first, preserve reusable components, never guess missing facts, and run `npm run build` before delivery.

## SEO
The authoritative domain is `hotel.seo.siteUrl`. It drives canonical URLs, sitemap configuration and absolute structured-data URLs. Page titles/descriptions are generated through the SEO component.

## Important production checks
- Replace every `DEMO CONTENT` value.
- Replace demo images.
- Verify contact/WhatsApp/booking URLs.
- Review all legal text with the hotel.
- Verify reviews, awards, prices, distances and amenities from supplied sources.
- Test keyboard navigation, mobile layouts, forms, lightbox/interactive modules and all enabled routes.


## V5.2 engineering notes
- Tailwind is wired through @astrojs/tailwind for the Astro 5 build.
- `src/data/theme.ts` is bridged into global CSS variables by `BaseLayout.astro`.
- `src/data/seo.ts` is the authoritative site URL/SEO configuration and is consumed by `hotel.ts`.
- Postbuild removes disabled feature routes from `dist/` and generates a sitemap from the final output, so disabled modules cannot remain in the sitemap.
- Booking links always fall back to an available WhatsApp, email, phone, or contact route; no `#` CTA fallback is used.
- FAQ and breadcrumb structured data are injected where applicable.
- Run `npm install`, then `npm run build` before deployment.
