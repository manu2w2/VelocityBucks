import { SITE_URL, BASE_PATH } from '#lib/site.ts';

export const prerender = true;

export function GET() {
	return new Response(
		`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}${BASE_PATH}/sitemap.xml\n`,
		{ headers: { 'Content-Type': 'text/plain' } }
	);
}
