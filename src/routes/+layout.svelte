<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Header from '#lib/components/layout/Header.svelte';
	import PreFooter from '#lib/components/layout/PreFooter.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import EasterEgg from '#lib/components/layout/EasterEgg.svelte';
	import { i18n } from '#lib/i18n.svelte.ts';
	import { SITE_URL, BASE_PATH, SOCIAL, TEAM, absoluteUrl } from '#lib/site.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// El dossier es un documento imprimible: sin cabecera ni pie del sitio
	const isDocument = $derived(page.route.id?.endsWith('/dossier') ?? false);

	// Mantiene <html lang> sincronizado al navegar entre idiomas en el cliente
	$effect(() => {
		document.documentElement.lang = i18n.lang;
	});

	// Datos estructurados (schema.org) de la organización
	const jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'SportsTeam',
			name: TEAM.name,
			alternateName: `${TEAM.name} #${TEAM.number}`,
			sport: 'Robotics',
			description: i18n.t.meta.description,
			url: absoluteUrl('/', i18n.lang),
			logo: `${SITE_URL}${BASE_PATH}/brand/logo.png`,
			memberOf: { '@type': 'SportsOrganization', name: `FIRST® ${TEAM.program}` },
			sameAs: SOCIAL.map((s) => s.href)
		}).replace(/</g, '\\u003c')
	);
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

{#if isDocument}
	{@render children()}
{:else}
	<a href="#contenido" class="skip-link">{i18n.t.nav.skip}</a>

	<Header />

	<main id="contenido" tabindex="-1">
		{@render children()}
	</main>

	<PreFooter />
	<Footer />
	<EasterEgg />
{/if}
