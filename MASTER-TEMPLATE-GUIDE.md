# MASTER TEMPLATE GUIDE — AI CUSTOMIZATION

## Golden rule
Start every new hotel from the clean master repository. Never use a previously customized hotel as the source for another hotel.

## Priority
1. Hotel-provided information
2. Verified project sources supplied to the AI
3. Master architecture
4. Never guess

Missing information must be omitted rather than invented.

## Change order
1. `src/data/hotel.ts`
2. `src/data/rooms.ts`
3. other `src/data/*.ts`
4. `src/data/features.ts`
5. `src/data/theme.ts`
6. `src/data/seo.ts`
7. `src/data/policies.ts`
8. `public/images/`
9. Only then modify reusable components when a genuine structural requirement exists.

## Do not
- introduce React or a SPA architecture
- introduce a database/CMS/authentication
- hard-code hotel facts inside components
- invent reviews, awards, certifications, prices, distances, availability or facilities
- leave data from another hotel in the project
- remove accessibility or SEO logic to make a visual change

## Visual system
The UI is intentionally editorial rather than dashboard-like: large photographic moments, restrained cards, strong serif display type, quiet borders, generous whitespace, asymmetrical grids, compact uppercase labels, direct CTAs and subtle motion. Rebrand through `theme.ts` rather than scattering colors through components.

## Booking modes
- `externalBooking`: open the supplied external booking URL.
- `enquiry`: connect only to an approved external endpoint or keep the frontend-only form.
- `directContact`: use verified phone/WhatsApp/email.

Never create a proprietary reservation backend.

## SEO and domain
Set exactly one authoritative `hotel.seo.siteUrl`. Do not canonicalize every page to the homepage. The post-build script generates a sitemap from the final `dist/` routes after disabled modules are removed, then writes `dist/robots.txt` using the configured domain.

## QA checklist
Run `npm run build`. Then verify:
- no TypeScript/build/import errors
- `/`, `/rooms`, each room slug, `/about`, `/amenities`, `/gallery`, `/experiences`, `/location`, `/faq`, `/reviews`, `/contact`, `/guest-information`, legal pages and `/404`
- enabled optional routes only
- no broken images or empty links
- title, description, canonical, OG metadata
- JSON-LD
- sitemap and robots
- mobile navigation
- keyboard focus
- form labels
- room/gallery interactions
- 360/390/430px, tablet and desktop layouts

## Hotel data package
Recommended input:
```
HOTEL-DATA/
├── hotel.md
├── rooms.md
├── amenities.md
├── gallery.md
├── experiences.md
├── nearby-attractions.md
├── faqs.md
├── reviews.md
├── offers.md
├── blog.md
├── guest-information.md
├── policies.md
├── seo.md
├── branding.md
└── images/
```

Files may be absent. The AI should hide unsupported modules instead of filling gaps with guesses.


## V5.2 engineering notes
- Tailwind is wired through @astrojs/tailwind for the Astro 5 build.
- `src/data/theme.ts` is bridged into global CSS variables by `BaseLayout.astro`.
- `src/data/seo.ts` is the authoritative site URL/SEO configuration and is consumed by `hotel.ts`.
- Postbuild removes disabled feature routes from `dist/` and generates a sitemap from the final output, so disabled modules cannot remain in the sitemap.
- Booking links always fall back to an available WhatsApp, email, phone, or contact route; no `#` CTA fallback is used.
- FAQ and breadcrumb structured data are injected where applicable.
- Run `npm install`, then `npm run build` before deployment.
