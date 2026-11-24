# San Miguel Sepelios — New Astro site

Rebuild the Nicepage static landing as a modern Astro project in `astro/` (same repo), deployed to Vercel as static output, reusing the existing color palette, typography direction and images. Old site stays live until cutover.

## Specs

- S1: New project lives in `astro/` inside this repo; Vercel deploys it as a separate project with Root Directory = `astro/`, static output, no server. Old root site untouched.
- S2: Design tokens from the current site: `#497164` (dark green — titles/accents), `#858772` / `#7e816b` (olive — h2, plan cards, buttons), `#f1f0e2` (cream — card/form backgrounds), `#e4d0ac` (tan — footer, hero buttons, hover `#e8c97f`), `#2e2f31` (nav text), white/`#f2f2f2` section backgrounds. Body font Open Sans, headings Roboto (Google Fonts). Buttons: uppercase, weight 700, ~0.875rem, letter-spacing 1px, radius 30px.
- S3: Page sections in order: sticky navbar (Inicio / Nosotros / Servicios / Contacto + logo + social icons), hero (hero.jpg + "SAN MIGUEL" title + tagline "Te acompañamos en los momentos más difíciles. Brindamos servicios de sepelios para todo el grupo familiar, desde el profesionalismo, calidad y respeto que nos caracteriza." + buttons Contactanos / Llamanos / WhatsApp), three cards ("Quiero Homenajear una Vida", "Quiero Planificar a Futuro" — typo fixed, "Quiero ver las salas"), planes section "Cobertura de Sepelio", contact form "¿Como Afiliarme?", tan footer with phone, address, hours, social.
- S4: Plans grid with the 5 real plans (user JSON verbatim): idplan 1 "Ag" = Plan Plata, idplan 2 "Au" = Plan Oro, idplan 3 "Po" = Plan Policia, idplan 4 "AgT" = Plan Plata Traspaso, idplan 5 "AuT" = Plan Oro Traspaso. Data in a typed `src/data/planes.ts` (or JSON) module, rendered by one PlanCard component. Redesigned per user feedback (L6): each card shows ONLY the plan name (+ internal code badge); the consult text and CTA appear ONCE below the grid, not repeated per card; no text/button overflow at any breakpoint.
- S5: Contact data (user verbatim): phone/WhatsApp "+54 9 388 430-1608" (tel: and https://wa.me/5493884301608), sede "España 379, Monterrico, Jujuy", hours "lunes a viernes de 9:00 a 13:00 hs", email "sanmiguelssociales@gmail.com", Facebook "https://www.facebook.com/p/San-Miguel-Servicios-Sociales-61576559660002/". Instagram: user gave a post URL "https://www.instagram.com/p/DZaEUUZxRx1/" — profile username pending; keep post URL with TODO marker.
- S6: Contact form uses Formspree (endpoint constant with TODO placeholder until user registers; action posts to formspree, success/error UI handled without Nicepage backend). No forms.nicepagesrv.com.
- S7: Images reused from `images/` (hero.jpg, cajon.webp, sala.webp, firma.jpg, logo.png) via Astro assets pipeline (optimized WebP/AVIF, explicit dimensions, lazy loading below hero). Orphan files (logo.jpeg, cajon.jpg, 90fc53c9.svg) not carried over.
- S8: SEO/meta fixed: title "San Miguel Sepelios", meta description real, theme-color `#497164`, JSON-LD Organization with real name, address, phone, sameAs real socials. lang="es".
- S9: Responsive: navbar collapses to hamburger menu (no jQuery; CSS/vanilla JS only), grid reflows at tablet/mobile. Zero Nicepage/jQuery/intlTelInput code.
- S10: `npm run build` succeeds in `astro/` with no errors; output is static (`dist/`), Vercel-ready without adapter configuration for static output.

## Tasks

- T1 (S1, S10): Scaffold Astro project in `astro/` — DONE, commit f01af2f
- T2 (S2, S8, S9): Global layout + design tokens — DONE, commit f01af2f
- T3 (S3, S5, S9): Navbar + Footer components — DONE, commit f01af2f
- T4 (S3, S7): Hero + three info cards — DONE, commit f01af2f
- T5 (S4): Planes section (5 plans data + grid) — DONE, commit f01af2f
- T6 (S5, S6): Contact section (Formspree + data) — DONE, commit f01af2f
- T7 (S10): Build verification + README deploy notes — DONE, commit f01af2f

Slice boundary note: the whole feature landed as one 1,559-authored-line slice (single commit f01af2f on feat/astro-redesign) because it is one new static site with no independently deployable behavior; delivery shape to be chosen at publish time.

## Log

- L1 (user, verbatim): "papurri de mi corazon, analiza esta pag web servida en vercel. QUiero hacer una nueva pagina que siga siendo servida en vercel pero conla posibilidad de migrar a astros. La estetica vamos a rediseñarla pero basandonos en lo que tenemos (colores, letras, etc)"
- L2 (user decisions): Astro directo desde el día 1; contenido real provisto ahora.
- L3 (user data, verbatim): "1- +54 9 388 430-1608 / 2- {planes JSON: Ag=Plan Plata idplan 1, Au=Plan Oro idplan 2, Po=Plan Policia idplan 3, AgT=Plan Plata Traspaso idplan 4, AuT=Plan Oro Traspaso idplan 5} / 3- sede ubicada en España 379, Monterrico, Jujuy, de lunes a viernes de 9:00 a 13:00 hs. / 4- https://www.facebook.com/p/San-Miguel-Servicios-Sociales-61576559660002/ y https://www.instagram.com/p/DZaEUUZxRx1/ / 5- sanmiguelssociales@gmail.com / 6- improvisemos sobre esa base / 7- no tengo material nuevo, si te parece reutilizamos o regeneras en base a lo que esta / 8- que recomiendas?"
- L4 (agent decisions, user may veto): mismo repo carpeta `astro/` + proyecto Vercel nuevo con Root Directory; WhatsApp con mismo número; grilla de 5 planes; Formspree; Instagram queda con URL de post + TODO; imágenes reutilizadas optimizadas.
- L5 (evidence): `npm run build` OK in astro/ (Astro 5.18.2, static output, 1 page, images optimized: hero 18MB→220KB WebP). dist checks PRESENT: real phone/wa.me link, 5 plan names, España 379, email, hours, JSON-LD, Formspree action; ABSENT: nicepage, jquery. dist total 428KB, index.html 24KB.
- L6 (user, verbatim): "esta parte amerita un rediseño [screenshot de Cobertura de Sepelio] en vez de repetir el texto en cada card, pone las cards con los nombre de los planes y una sola vez el texto de consulta por mas info"
- L7 (evidence): redesign committed in 8bc57d0. Build OK; dist checks: 5 `plan-name` chips (Plata, Oro, Policia, Plata Traspaso, Oro Traspaso), consult text repeated 0 times in cards, single "Consultar por WhatsApp" + single "Dejanos tu consulta" CTA in the cream panel.
- L8 (evidence): native review of slice f01af2f..HEAD (lineage review-eb0bca1c3fc777e8, lens readability) closed approved and acknowledged; advisory R2-log-order (Log order) fixed by this reorder. Full-branch candidate was not reviewable: lens_context_budget_exceeded at START (lockfile-inflated diff); user chose to review only the redesign slice.
- L9 (user, verbatim): "ultima cosita, mejoremos el tamaño del logo de san miguel, y los iconos de facebook e instagram que estan feitos" [screenshot del navbar]
- L10 (evidence): navbar logo 103x72 (real 1.43 aspect, CSS height 68px, loading eager) and footer logo 115x80; Facebook/Instagram replaced by Feather-style stroke icons (4 in page, old filled-blob paths gone) in Navbar and Footer. Build OK.
- L11 (evidence): logo/icons slice cb2788a..9feff9c reviewed: lineage review-c6af949445822b0d (readability, medium) approved + acknowledged; advisories R2-eager-loading-note and R2-logo-dimension-drift (both SUGGESTION/informational) addressed with source comments documenting that width/height encode the source aspect ratio for CLS while CSS owns rendered size, and that eager overrides Astro's lazy default for the above-the-fold logo.
- L12 (user, verbatim): "ok entonces ahora vamos a crear: 1- un buen readme detallado en español 2- commit + push + pr + merge. 3- una buena release 4- me explicas que configurar en vercel para que se sirva"
