# San Miguel Sepelios — Astro site

New landing page built with [Astro](https://astro.build) (static output), reusing the
palette, typography and images of the previous Nicepage site. The old root site stays
live until cutover.

## Local development

```bash
cd astro
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build locally
```

## Deploy on Vercel

1. In the Vercel dashboard create a **new project** from this same repository.
2. Set **Root Directory = `astro`** (Settings → General → Root Directory).
3. Framework preset: **Astro** (auto-detected). Build command `npm run build`,
   output directory `dist`. No adapter/server needed — output is static.
4. Deploy. You get an independent preview domain; the current production site is
   not affected.
5. **Cutover**: when the new site is approved, point the production domain to this
   project (or change this project's Root Directory setup as needed).

## Pending TODOs (marked in code)

- `src/data/site.ts` → `FORMSPREE_ENDPOINT`: register at [formspree.io](https://formspree.io)
  with `sanmiguelssociales@gmail.com` and paste the form id. Until then the form
  shows an inline notice and directs to WhatsApp/phone.
- `src/data/site.ts` → `social.instagram`: currently the post URL provided by the
  client; replace with the profile URL when the username is confirmed.
- `astro.config.mjs` → `site`: replace with the real production domain at cutover.

## Structure

```
astro/
├─ src/
│  ├─ layouts/Base.astro        # head, fonts, SEO meta, JSON-LD
│  ├─ components/
│  │  ├─ Navbar.astro           # sticky nav + hamburger (vanilla JS)
│  │  ├─ Hero.astro             # hero image + title card
│  │  ├─ NosotrosCards.astro    # Homenajear / Planificar / Salas
│  │  ├─ Planes.astro           # Cobertura de Sepelio grid
│  │  ├─ PlanCard.astro         # one plan card
│  │  ├─ Contacto.astro         # Formspree form + contact data
│  │  ├─ WhatsAppButton.astro   # floating WhatsApp CTA
│  │  └─ Footer.astro           # tan footer, contact + nav
│  ├─ data/site.ts              # business/contact/social constants
│  ├─ data/planes.ts            # 5 real plans (idplan, PLAN, DESCRIP)
│  ├─ styles/global.css         # design tokens (palette, fonts, buttons)
│  ├─ assets/images/            # source images (optimized at build)
│  └─ pages/index.astro         # the single landing page
└─ astro.config.mjs
```
