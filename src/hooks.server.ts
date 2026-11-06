import { langFromPathname } from '#lib/i18n.svelte.ts';

type ResolveFn = (
	event: { url: URL },
	opts?: { transformPageChunk?: (input: { html: string }) => string }
) => Response | Promise<Response>;

/** Escribe el idioma correcto en <html lang> en cada página prerenderizada. */
export const handle = ({ event, resolve }: { event: { url: URL }; resolve: ResolveFn }) => {
	const lang = langFromPathname(event.url.pathname);
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
};
