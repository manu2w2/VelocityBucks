<script lang="ts">
	import { asset } from '$app/paths';
	import PageHeader from '#lib/components/ui/PageHeader.svelte';
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
	import PhotoPlaceholder from '#lib/components/ui/PhotoPlaceholder.svelte';
	import Button from '#lib/components/ui/Button.svelte';
	import Icon from '#lib/components/ui/Icon.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { i18n, pad } from '#lib/i18n.svelte.ts';
	import { MEDIA } from '#lib/site.ts';

	const p = $derived(i18n.t.portfolio);
</script>

<Seo title={p.seo.title} description={p.seo.description} />

<PageHeader index="05" {...p.header} />

<!-- Documento PDF (placeholder hasta definir MEDIA.portfolioPdf) -->
<section class="section-padding" aria-labelledby="doc-title">
	<div class="site-container doc">
		<div class="cover">
			<PhotoPlaceholder label={p.document.cover} ratio="3 / 4" icon="document" />
		</div>
		<div class="doc-text">
			<p class="vb-eyebrow">{p.document.eyebrow}</p>
			<h2 id="doc-title" class="vb-display vb-display--m">{p.document.title}</h2>
			<p class="vb-lead">{p.document.body}</p>
			{#if MEDIA.portfolioPdf}
				<Button href={asset(MEDIA.portfolioPdf as Parameters<typeof asset>[0])} variant="primary" size="lg" download>
					<Icon name="download" size={18} strokeWidth={1.8} />
					{p.document.download}
				</Button>
			{:else}
				<Button variant="outline" size="lg" disabled>{p.document.unavailable}</Button>
			{/if}
		</div>
	</div>
</section>

<!-- Proyectos por subequipo (placeholders) -->
<section class="section-padding surface-sunken" aria-labelledby="projects-title">
	<div class="site-container">
		<SectionTitle
			id="projects-title"
			eyebrow={p.projects.eyebrow}
			title={p.projects.title}
			accent={p.projects.accent}
		/>

		<ul class="projects section-body" role="list">
			{#each p.projects.areas as area, i (area)}
				<li class="project">
					<PhotoPlaceholder label={i18n.t.common.comingSoon} ratio="16 / 10" compact />
					<div class="project-info">
						<span class="tag"><span class="vb-index">{pad(i + 1)}</span> {area}</span>
						<h3 class="vb-title">{p.projects.itemTitle}</h3>
						<p>{p.projects.itemBody}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.doc {
		display: grid;
		gap: var(--space-8);
		align-items: center;
	}

	@media (min-width: 768px) {
		.doc {
			grid-template-columns: 4fr 7fr;
			gap: clamp(2.5rem, 6vw, 6rem);
		}
	}

	.cover {
		max-width: 22rem;
		width: 100%;
	}

	.doc-text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-5);
	}

	.projects {
		display: grid;
		gap: var(--space-8) var(--gutter);
		margin-bottom: 0;
		padding: 0;
		list-style: none;
	}

	@media (min-width: 640px) {
		.projects { grid-template-columns: repeat(2, 1fr); }
	}

	@media (min-width: 1024px) {
		.projects { grid-template-columns: repeat(3, 1fr); }
	}

	.project {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.project-info {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.tag {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--color-vb-gold);
	}

	.project p {
		font-size: var(--text-small);
	}
</style>
