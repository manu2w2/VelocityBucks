<script lang="ts">
	import { i18n } from '#lib/i18n.svelte.ts';
	import { absoluteUrl, SITE_URL, BASE_PATH } from '#lib/site.ts';

	/**
	 * Seo — Metadatos por página: título, descripción, canonical,
	 * alternativas hreflang, Open Graph y Twitter Card.
	 */
	interface Props {
		title: string;
		description: string;
		type?: 'website' | 'article';
	}

	let { title, description, type = 'website' }: Props = $props();

	const path = $derived(i18n.path);
	const lang = $derived(i18n.lang);
	const canonical = $derived(absoluteUrl(path, lang));
	const ogImage = $derived(`${SITE_URL}${BASE_PATH}/og-image.png`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="es" href={absoluteUrl(path, 'es')} />
	<link rel="alternate" hreflang="en" href={absoluteUrl(path, 'en')} />
	<link rel="alternate" hreflang="x-default" href={absoluteUrl(path, 'es')} />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={i18n.t.meta.siteName} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content={i18n.t.meta.ogLocale} />
	<meta property="og:locale:alternate" content={lang === 'en' ? 'es_ES' : 'en_US'} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={i18n.t.meta.siteName} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
