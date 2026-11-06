# Velocity Bucks #39347 — Sitio web

Sitio oficial del equipo de FIRST® Tech Challenge **Velocity Bucks #39347**, en español (idioma principal, en la raíz `/`) e inglés (`/en`).

Está hecho con [SvelteKit](https://svelte.dev/docs/kit) y Tailwind CSS. Se compila como **sitio estático**: el resultado es una carpeta `build/` con HTML, CSS, JS e imágenes que se puede publicar en cualquier hosting sin servidor.

## Requisitos

- Node.js 22.12 o superior
- npm

## Comandos

```sh
npm install          # instala las dependencias
npm run dev          # servidor de desarrollo en http://localhost:5173
npm run build        # compila el sitio estático en build/
npm run preview      # sirve build/ en local para revisarlo
npm run check        # comprobación de tipos
npm run dossier:pdf  # vuelve a generar los PDF del dossier (ver más abajo)
```

## Estructura

| Ruta                        | Contenido                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| `src/lib/content/es.ts`     | **Todos los textos en español.**                                                                         |
| `src/lib/content/en.ts`     | Todos los textos en inglés. Debe tener la misma estructura que `es.ts` (TypeScript avisa si falta algo). |
| `src/lib/site.ts`           | Configuración general: temporada, número de equipo, redes sociales, vídeo y PDFs.                        |
| `src/routes/[[lang=lang]]/` | Páginas. Cada página existe en los dos idiomas automáticamente.                                          |
| `src/lib/components/`       | Componentes reutilizables (cabecera, pie, botones, etc.).                                                |
| `static/`                   | Archivos que se publican tal cual: logotipos, imagen para redes, PDFs del dossier.                       |
| `scripts/`                  | Generador de los PDF del dossier.                                                                        |

## Tareas habituales

### Cambiar textos

Edita `src/lib/content/es.ts` y su equivalente en `src/lib/content/en.ts`. Las métricas con valor `null` se muestran como "Dato pendiente".

### Cambiar de temporada

En `src/lib/site.ts`, actualiza `SEASON` (nombre del juego y años). Se actualiza en todo el sitio y en el dossier. Después, regenera los PDF del dossier.

### Cuenta atrás de la próxima competencia

En `src/lib/site.ts`, rellena `NEXT_EVENT`:

- `name`: el nombre del evento en español (`es`) y en inglés (`en`).
- `venue`: la sede.
- `date`: fecha y hora con zona horaria, por ejemplo `2026-12-13T08:00:00-06:00`.

Mientras `date` esté vacío, la página de inicio muestra "Fecha por confirmar". Cuando llega la hora, muestra "¡Hoy competimos!". Después del evento, pon la fecha del siguiente.

### Publicar el vídeo del Robot Reveal o el portafolio

En `src/lib/site.ts`, dentro de `MEDIA`:

- `robotRevealYoutubeId`: el ID del vídeo de YouTube (lo que va después de `v=` en la URL).
- `portfolioPdf`: la ruta del PDF dentro de `static/`, por ejemplo `docs/portafolio.pdf`.

Mientras estén vacíos, el sitio muestra un espacio reservado.

### Deerseeker y el easter egg

La página `/deerseeker` presenta la futura herramienta de scouting del equipo. Por ahora todo es contenido de ejemplo (estado, funciones planeadas y un tablero vacío) y se edita en la sección `deerseeker` de los archivos de contenido. Cuando la herramienta exista, el tablero de `src/routes/[[lang=lang]]/deerseeker/+page.svelte` es lo que hay que sustituir.

La misma página incluye el minijuego «Atrapa los bucks» (`src/lib/components/deerseeker/BuckGame.svelte`). El récord se guarda solo en el navegador de cada visitante.

Easter egg: en cualquier página, el código Konami (↑ ↑ ↓ ↓ ← → ← → B A) o cinco toques seguidos sobre el logotipo del pie de página activan el «Modo Buck»: un buck cruza la pantalla y aparece un aviso con enlace al minijuego. La consola del navegador da una pista.

### Regenerar los PDF del dossier

Los PDF descargables (`static/dossier/*.pdf`) se crean a partir de la página `/dossier`, así que **hay que regenerarlos cada vez que cambie su contenido** (textos, temporada, niveles de patrocinio, estilos). Se hace en tu ordenador, gratis y sin servicios externos:

```sh
npx playwright install chromium   # solo la primera vez: descarga el navegador que imprime los PDF
npm run dossier:pdf
```

El comando compila el sitio, abre un servidor local temporal, imprime la versión en español y en inglés y guarda los PDF en `static/dossier/`. Después solo hay que subir los archivos modificados.

Si se te olvida, cada `npm run build` (también en el hosting) muestra un aviso cuando los PDF no corresponden al contenido actual. El aviso no detiene la compilación.

## Publicar el sitio

### Cualquier otro hosting

El sitio no depende de ningún servicio de Netlify. Para publicarlo en otro sitio (GitHub Pages, Cloudflare Pages, Vercel, un servidor propio…):

1. Define la variable de entorno `SITE_URL` con la dirección pública, sin barra final (por ejemplo `https://www.velocitybucks.com`). Se usa en las URL canónicas, el sitemap, las etiquetas para redes sociales y el dossier. Si no se define, se usa la dirección de Netlify.
2. Si el sitio vive en un subdirectorio (típico en GitHub Pages: `usuario.github.io/velocity-bucks`), define también `BASE_PATH=/velocity-bucks`.
3. Ejecuta `npm run build` y publica la carpeta `build/`.

Hay un ejemplo de estas variables en `.env.example`. Para desarrollo local, cópialo como `.env`.

Dos detalles del servidor:

- Las páginas se generan como `nosotros.html`, `en/nosotros.html`, etc., y los enlaces apuntan a `/nosotros` (sin `.html`). GitHub Pages, Cloudflare Pages y Netlify lo resuelven solos. En **Vercel** activa `"cleanUrls": true` en `vercel.json`. En **nginx** añade `try_files $uri $uri.html $uri/ =404;`. En **Apache**, activa `Options +MultiViews` o una regla equivalente.
- Configura `404.html` como página de error para que las direcciones inexistentes muestren la página "Fuera de pista" en el idioma correcto.

---

FIRST®, FIRST® Tech Challenge y FIRST® Robotics Competition son marcas registradas de For Inspiration and Recognition of Science and Technology (FIRST). Velocity Bucks #39347 es un equipo independiente.
