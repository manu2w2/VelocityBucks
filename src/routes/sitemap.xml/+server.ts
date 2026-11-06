import { PAGES, absoluteUrl } from '#lib/site.ts';

export const prerender = true;

/** El dossier es un documento imprimible: sin prioridad propia (los buscadores usan el valor por defecto). */
function priority(path: string) {
	if (path === '/dossier') return '';
	return `\n\t\t<priority>${path === '/' ? '1.0' : '0.8'}</priority>`;
}

export function GET() {
	const urls = PAGES.flatMap((path) =>
		(['es', 'en'] as const).map(
			(lang) => `	<url>
		<loc>${absoluteUrl(path, lang)}</loc>
		<xhtml:link rel="alternate" hreflang="es" href="${absoluteUrl(path, 'es')}" />
		<xhtml:link rel="alternate" hreflang="en" href="${absoluteUrl(path, 'en')}" />
		<xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(path, 'es')}" />
		<changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>${priority(path)}
	</url>`
		)
	);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
