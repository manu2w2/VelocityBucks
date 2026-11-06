<script lang="ts">
	import PageHeader from '#lib/components/ui/PageHeader.svelte';
	import PhotoPlaceholder from '#lib/components/ui/PhotoPlaceholder.svelte';
	import StatStrip from '#lib/components/ui/StatStrip.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { i18n, pad } from '#lib/i18n.svelte.ts';

	const m = $derived(i18n.t.impact);
</script>

<Seo title={m.seo.title} description={m.seo.description} />

<PageHeader index="04" {...m.header} />

<StatStrip items={m.stats} label={m.statsLabel} />

<section class="section-padding" aria-label={m.listLabel}>
	<div class="site-container">
		<ol class="initiatives" role="list">
			{#each m.initiatives as item, i (item.title)}
				<li class="initiative">
					<div class="visual">
						<PhotoPlaceholder label={item.photo} ratio="3 / 2" />
					</div>

					<div class="text">
						<div class="meta">
							<span class="vb-index num">{pad(i + 1)}</span>
							<p class="vb-eyebrow">{item.tag}</p>
						</div>
						<h2 class="vb-display vb-display--s title">{item.title}</h2>
						<p class="body">{item.body}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.initiatives {
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	/* Filas editoriales alternas separadas por filetes */
	.initiative {
		display: grid;
		gap: var(--space-6);
		padding-block: clamp(2.5rem, 5vw, 4.5rem);
		border-top: 1px solid var(--line-subtle);
	}

	.initiative:first-child {
		padding-top: 0;
		border-top: none;
	}

	.initiative:last-child {
		padding-bottom: 0;
	}

	@media (min-width: 768px) {
		.initiative {
			grid-template-columns: 1fr 1fr;
			gap: clamp(2.5rem, 6vw, 6rem);
			align-items: center;
		}

		.initiative:nth-child(even) .visual {
			order: 2;
		}
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.meta {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}

	.num {
		font-family: var(--font-display);
		font-size: 2.5rem;
		font-weight: 600;
		line-height: 1;
		color: var(--color-vb-gold);
	}

	.title {
		font-weight: 400;
	}

	.body {
		max-width: 48ch;
		font-size: var(--text-body-l);
		line-height: 1.75;
	}
</style>
