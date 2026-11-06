/**
 * Configuración global del sitio — valores independientes del idioma.
 */

/** URL pública del sitio (la inyecta Netlify en el build mediante la variable URL). */
export const SITE_URL: string = __SITE_URL__;

/** Ruta base (vacía salvo que se despliegue en un subdirectorio). */
export const BASE_PATH: string = __BASE_PATH__;

/**
 * Temporada actual de FIRST Tech Challenge.
 * Al cambiar de temporada basta con editar estos dos valores (y volver a generar los PDF del dossier).
 */
export const SEASON = {
	name: 'DECODE',
	years: '2025–2026'
};

export const TEAM = {
	name: 'Velocity Bucks',
	number: '39347',
	program: 'FIRST Tech Challenge'
};

/** Páginas públicas, sin prefijo de idioma. Usadas por el sitemap y las etiquetas hreflang. */
export const PAGES = [
	'/',
	'/nosotros',
	'/ingenieria',
	'/temporada',
	'/impacto',
	'/portafolio',
	'/patrocinadores',
	'/deerseeker',
	'/dossier'
] as const;

/**
 * Próxima competencia — alimenta la cuenta atrás de la página de inicio.
 * `date` usa formato ISO con zona horaria, p. ej. "2026-12-13T08:00:00-06:00".
 * Vacío = la cuenta atrás muestra "Fecha por confirmar".
 */
export const NEXT_EVENT = {
	name: { es: '', en: '' },
	venue: '',
	date: ''
};

export type PagePath = (typeof PAGES)[number];

export const SOCIAL = [
	{ label: 'Instagram', handle: '@velocitybucks', href: 'https://instagram.com/velocitybucks', icon: 'instagram' },
	{ label: 'GitHub', handle: 'velocitybucks39347', href: 'https://github.com/velocitybucks39347', icon: 'github' }
] as const;

/**
 * Material multimedia pendiente.
 * Cuando esté disponible, basta con rellenar estos valores: los componentes
 * dejan de mostrar el placeholder automáticamente.
 */
export const MEDIA = {
	/** ID del vídeo de YouTube del Robot Reveal, p. ej. "dQw4w9WgXcQ". Vacío = placeholder. */
	robotRevealYoutubeId: '',
	/** Ruta del PDF del portafolio de ingeniería dentro de /static, p. ej. "docs/portafolio.pdf". Vacío = placeholder. */
	portfolioPdf: '',
	/** PDFs del dossier de patrocinio (generados desde la página /dossier). */
	dossierPdf: {
		es: 'dossier/velocity-bucks-dossier-es.pdf',
		en: 'dossier/velocity-bucks-dossier-en.pdf'
	}
};

/** Construye una URL absoluta para canonical, hreflang y el sitemap. */
export function absoluteUrl(path: string, lang: 'es' | 'en'): string {
	const prefix = lang === 'en' ? '/en' : '';
	const suffix = path === '/' ? (prefix ? '' : '/') : path;
	return `${SITE_URL}${BASE_PATH}${prefix}${suffix}`;
}
