# San Miguel Sepelios — Sitio web

Landing page de **San Miguel Sepelios / San Miguel Servicios Sociales** (Monterricos, Jujuy).
El sitio nuevo está construido con [Astro](https://astro.build) (salida 100% estática) y se
sirve desde **Vercel**. Reemplaza al export estático de Nicepage 7.7.3 que vivía en la raíz
del repositorio, conservando su paleta de colores, tipografías e imágenes.

> El sitio viejo (raíz del repo: `index.html`, `nicepage.css`, `nicepage.js`, `jquery.js`)
> queda intacto y sigue servido hasta que se haga el cutover del dominio de producción.

---

## 1. Contenido del repositorio

```
.
├── astro/                  ← SITIO NUEVO (Astro 5, salida estática)
│   ├── astro.config.mjs    ← config: output static, URL del sitio
│   ├── package.json        ← scripts dev/build/preview
│   ├── public/             ← favicon
│   └── src/
│       ├── layouts/Base.astro        ← <head>, fuentes, SEO, JSON-LD
│       ├── components/
│       │   ├── Navbar.astro          ← nav sticky + hamburguesa (JS vanilla)
│       │   ├── Hero.astro            ← imagen hero + tarjeta "SAN MIGUEL"
│       │   ├── NosotrosCards.astro   ← Homenajear / Planificar / Salas
│       │   ├── Planes.astro          ← grilla de 5 planes + panel de consulta
│       │   ├── PlanCard.astro        ← chip de plan (código + nombre)
│       │   ├── Contacto.astro        ← formulario Formspree + datos de contacto
│       │   ├── WhatsAppButton.astro  ← botón flotante de WhatsApp
│       │   └── Footer.astro          ← footer tostado: contacto + navegación
│       ├── data/
│       │   ├── site.ts               ← datos del negocio, contacto, redes, endpoint form
│       │   └── planes.ts             ← los 5 planes reales (código, nombre, id)
│       ├── styles/global.css         ← tokens de diseño (paleta, tipografías, botones)
│       ├── assets/images/            ← imágenes fuente (optimizadas en el build)
│       └── pages/index.astro         ← la landing (única página)
├── odd/tasks/sanmiguel-astro.md      ← spec y bitácora del feature (ODD)
├── index.html, nicepage.* , jquery.js ← SITIO VIEJO (Nicepage), sigue en producción
└── images/                           ← imágenes originales del sitio viejo
```

## 2. Diseño

### Paleta (heredada del sitio actual)

| Rol                                        | Hex       |
| ------------------------------------------ | --------- |
| Verde oscuro — títulos, acentos, iconos    | `#497164` |
| Oliva — h2, chips de planes                | `#858772` |
| Oliva texto — headings, botón enviar       | `#7e816b` |
| Crema — fondo de tarjetas y formulario     | `#f1f0e2` |
| Tostado — footer, botones del hero         | `#e4d0ac` |
| Tostado hover                              | `#e8c97f` |
| Texto de navegación                        | `#2e2f31` |
| Fondo de secciones alternas                | `#f2f2f2` |

Los tokens viven como custom properties en `astro/src/styles/global.css`.

### Tipografía

- Cuerpo: **Open Sans** · Títulos: **Roboto** (Google Fonts, cargadas en `Base.astro`).
- Botones: uppercase, peso 700, `0.875rem`, letter-spacing 1px, border-radius 30px
  (misma firma visual que los botones del sitio original).

### Secciones de la página

1. **Navbar** sticky con logo, anclas (Inicio / Nosotros / Servicios / Contacto),
   botón "Llamanos" y redes sociales. Hamburguesa en mobile sin jQuery.
2. **Hero**: foto principal + tarjeta crema con el título "SAN MIGUEL", la tagline y
   CTAs *Contactanos* / *Llamanos*.
3. **Nosotros**: tres tarjetas — *Quiero Homenajear una Vida*, *Quiero Planificar a Futuro*,
   *Quiero ver las salas*.
4. **Cobertura de Sepelio**: cinco chips de plan (Plata, Oro, Policía, Plata Traspaso,
   Oro Traspaso) + un único panel con el texto de consulta y CTAs a WhatsApp/formulario.
5. **¿Como Afiliarme?**: datos de contacto + formulario (nombre, mail, teléfono, consulta).
6. **Footer** tostado: logo, redes, teléfono, mail, dirección, horarios y navegación.
7. **Botón flotante de WhatsApp** en todas las vistas.

## 3. Datos reales del negocio

Están centralizados en `astro/src/data/site.ts` y `astro/src/data/planes.ts`:

- Teléfono / WhatsApp: **+54 9 388 430-1608** (`wa.me/5493884301608`).
- Sede: **España 379, Monterricos, Jujuy**.
- Horarios: **lunes a viernes de 9:00 a 13:00 hs**.
- Email: **sanmiguelssociales@gmail.com**.
- Planes: `Ag` Plan Plata (1), `Au` Plan Oro (2), `Po` Plan Policia (3),
  `AgT` Plan Plata Traspaso (4), `AuT` Plan Oro Traspaso (5).

## 4. Desarrollo local

```bash
cd astro
npm install
npm run dev       # http://localhost:4321 con hot reload
npm run build     # genera dist/ (estático)
npm run preview   # sirve el build de producción localmente
```

Notas de instalación en esta máquina: npm bloquea scripts de paquetes por defecto
(`npm install-scripts approve esbuild`) y Astro 5 necesita `sharp` como dependencia
explícita para optimizar imágenes (ya queda en `package.json`).

## 5. Despliegue en Vercel (sitio nuevo)

1. En el dashboard de Vercel: **Add New… → Project** y elegir este repositorio
   (`Victor0451/sanmiguelweb`).
2. En **Root Directory** configurar `astro` (Settings → General → Root Directory,
   o al crear el proyecto). Esto es lo único no-default.
3. Framework preset: **Astro** (se autodetecta). Build command `npm run build`,
   output `dist`. **No hace falta adapter ni funciones server**: `output: 'static'`.
4. Deploy. Vercel da un dominio de preview propio (p. ej. `sanmiguelweb-astro.vercel.app`);
   el sitio viejo en producción no se toca.
5. **Cutover**: cuando el sitio nuevo esté aprobado, mover el dominio de producción
   (p. ej. `sanmiguelsepelios.com`) a este proyecto en Settings → Domains, y actualizar
   `site` en `astro/astro.config.mjs` con el dominio real.

Cada push a la rama default redeploya; los pushes a otras ramas generan preview URLs.

## 6. Pendientes marcados en el código (TODO)

| Dónde                          | Qué falta                                                                 |
| ------------------------------ | ------------------------------------------------------------------------- |
| `astro/src/data/site.ts`       | `FORMSPREE_ENDPOINT`: registrar el form en formspree.io con el Gmail y pegar el id. Hasta entonces el form muestra un aviso y deriva a WhatsApp/teléfono. |
| `astro/src/data/site.ts`       | `social.instagram`: hoy apunta a un post; reemplazar por la URL del perfil cuando se confirme el usuario. |
| `astro/astro.config.mjs`       | `site`: poner el dominio de producción real en el cutover.                 |

## 7. SEO y accesibilidad

- `<title>`, meta description y Open Graph reales; `theme-color` verde `#497164`.
- JSON-LD `Organization` con nombre legal, dirección, teléfono, email, horarios y redes.
- `lang="es"`, anclas con `scroll-padding`, `aria-label` en iconos y menú,
  `role="status"`/`aria-live` en el estado del formulario, foco visible en botones.

## 8. Performance vs. el sitio viejo

| Métrica                    | Viejo (Nicepage) | Nuevo (Astro)        |
| -------------------------- | ---------------- | -------------------- |
| CSS                        | ~1,5 MB          | ~10 KB (tokens + componentes) |
| JS                         | jQuery + nicepage.js (~510 KB) | ~2 KB inline (menú + form) |
| Imagen hero                | 18 MB JPG        | ~220 KB WebP (build) |
| Peso total servido         | ~2 MB+           | ~430 KB              |
| Formulario                 | backend de Nicepage (muerto fuera de su hosting) | Formspree (endpoint por configurar) |

Las imágenes se optimizan solas en el build (WebP/AVIF con dimensiones explícitas y
`loading="lazy"` debajo del fold).

## 9. Historial y revisión

- El feature se desarrolló con Organic Driven Development: spec y bitácora en
  `odd/tasks/sanmiguel-astro.md` (specs S1–S10, log L1–L11).
- Los slices de código de la rama `feat/astro-redesign` pasaron review nativo
  (readability) aprobados; el commit inicial completo excede el presupuesto de contexto
  del reviewer por el lockfile de npm y quedó registrado como no revisado por esa causa.

## 10. Créditos

- Diseño original: **Daniel Morales**.
- Programación sitio viejo y nuevo: **Longo Victor**.
- Sitio nuevo: Astro 5 + Vercel (salida estática).
