import { page } from '$app/state';
import { resolve } from '$app/paths';
import es from './content/es.ts';
import en from './content/en.ts';
import { BASE_PATH } from './site.ts';

export type Lang = 'es' | 'en';

export const content = { es, en } as const;

/** Detecta el idioma a partir de una ruta (incluida la base). */
export function langFromPathname(pathname: string): Lang {
	const p = pathname.slice(BASE_PATH.length);
	return p === '/en' || p.startsWith('/en/') ? 'en' : 'es';
}

const resolveAny = resolve as unknown as (id: string, params: Record<string, string | undefined>) => string;

/** Enlace interno localizado. `path` es la ruta sin prefijo de idioma: "/", "/nosotros"… */
export function localizedHref(path: string, lang: Lang): string {
	const id = '/[[lang=lang]]' + (path === '/' ? '' : path);
	return resolveAny(id, { lang: lang === 'en' ? 'en' : undefined });
}

/** Ruta actual sin prefijo de idioma (para el selector de idioma y el SEO). */
function currentPath(): string {
	const id = page.route.id;
	if (!id) return '/';
	const stripped = id.replace(/^\/\[\[lang=lang\]\]/, '');
	return stripped === '' ? '/' : stripped;
}

/**
 * Estado de idioma reactivo, derivado de la URL.
 * Uso en componentes: `i18n.t.home.lead`, `i18n.href('/nosotros')`.
 */
export const i18n = {
	get lang(): Lang {
		const param = page.params.lang;
		return param === 'en' ? 'en' : langFromPathname(page.url.pathname);
	},
	get t() {
		return content[this.lang];
	},
	get path() {
		return currentPath();
	},
	href(path: string) {
		return localizedHref(path, this.lang);
	},
	/** Enlace a la misma página en el otro idioma */
	get alternateHref() {
		return localizedHref(currentPath(), this.lang === 'en' ? 'es' : 'en');
	}
};

/** "01", "02"… */
export const pad = (n: number) => String(n).padStart(2, '0');
