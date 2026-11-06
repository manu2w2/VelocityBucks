<script lang="ts">
	import '../app.css';
	import Header from '#lib/components/layout/Header.svelte';
	import PreFooter from '#lib/components/layout/PreFooter.svelte';
	import Footer from '#lib/components/layout/Footer.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>Velocity Bucks #39347 — Ingeniería en movimiento</title>
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<PreFooter />
<Footer />
