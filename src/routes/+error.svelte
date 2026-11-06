<script lang="ts">
	import { page } from '$app/state';
	import { i18n } from '#lib/i18n.svelte.ts';
	import Button from '#lib/components/ui/Button.svelte';

	const notFound = $derived(page.status === 404);
	const t = $derived(i18n.t.error);
</script>

<svelte:head>
	<title>{page.status} — {i18n.t.meta.siteName}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="error section-padding" aria-labelledby="error-title">
	<div class="site-container inner">
		<p class="vb-eyebrow">{t.label} {page.status}</p>
		<div class="pair">
			<h1 id="error-title" class="vb-display vb-display--l">
				{notFound ? t.notFoundTitle : t.genericTitle}
			</h1>
			<p class="vb-accent">{notFound ? t.notFoundAccent : t.genericAccent}</p>
		</div>
		<p class="vb-lead">{notFound ? t.notFoundBody : t.genericBody}</p>
		<Button href={i18n.href('/')} variant="primary" size="lg" arrow>{t.back}</Button>
	</div>
</section>

<style>
	.error {
		min-height: 60vh;
		display: flex;
		align-items: center;
	}

	.inner {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-6);
	}

	.pair {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}
</style>
