<script lang="ts">
	import PageHeader from '#lib/components/ui/PageHeader.svelte';
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
	import StatStrip from '#lib/components/ui/StatStrip.svelte';
	import Icon from '#lib/components/ui/Icon.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { i18n, pad } from '#lib/i18n.svelte.ts';

	const s = $derived(i18n.t.season);
	const season = $derived(i18n.t.engineering.season);
	const events = $derived(Array.from({ length: s.events.count }, (_, i) => i + 1));
	const awards = $derived(Array.from({ length: s.awards.count }, (_, i) => i + 1));
</script>

<Seo title={s.seo.title} description={s.seo.description} />

<PageHeader
	index="03"
	eyebrow="{s.header.eyebrowPrefix} {season}"
	title={s.header.title}
	accent={s.header.accent}
	subtitle={s.header.subtitle}
/>

<StatStrip items={s.stats} label={s.statsLabel} />

<!-- Calendario de eventos (placeholder) -->
<section class="section-padding" aria-labelledby="events-title">
	<div class="site-container">
		<SectionTitle id="events-title" eyebrow={s.events.eyebrow} title={s.events.title} accent={s.events.accent} />

		<ol class="events section-body" role="list">
			{#each events as n (n)}
				<li class="event">
					<span class="vb-index num">{pad(n)}</span>
					<div class="event-main">
						<p class="vb-eyebrow">{s.events.eventLabel} {pad(n)}</p>
						<h3 class="vb-title">{s.events.namePending}</h3>
						<p class="meta">
							<span><Icon name="calendar" size={16} /> {s.events.datePending}</span>
							<span><Icon name="pin" size={16} /> {s.events.venuePending}</span>
						</p>
					</div>
					<dl class="results">
						<div><dt>{s.events.columns.rank}</dt><dd><span aria-hidden="true">—</span><span class="sr-only">{i18n.t.common.pendingData}</span></dd></div>
						<div><dt>{s.events.columns.record}</dt><dd><span aria-hidden="true">—</span><span class="sr-only">{i18n.t.common.pendingData}</span></dd></div>
					</dl>
					<span class="status">{i18n.t.common.pending}</span>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- Premios (placeholder) -->
<section class="section-padding surface-sunken" aria-labelledby="awards-title">
	<div class="site-container">
		<SectionTitle id="awards-title" eyebrow={s.awards.eyebrow} title={s.awards.title} accent={s.awards.accent} />

		<ul class="awards section-body" role="list">
			{#each awards as n (n)}
				<li class="award vb-chamfer">
					<span class="award-icon"><Icon name="award" size={32} strokeWidth={1.4} /></span>
					<span class="vb-index num-sm">{pad(n)}</span>
					<h3 class="vb-title">{s.awards.slot}</h3>
					<p>{s.awards.slotNote}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.events {
		margin-bottom: 0;
		padding: 0;
		list-style: none;
		border-top: 1px solid var(--line-strong);
	}

	.event {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--space-3) var(--space-5);
		align-items: center;
		padding-block: var(--space-6);
		border-bottom: 1px solid var(--line-subtle);
	}

	@media (min-width: 1024px) {
		.event {
			grid-template-columns: 5rem 1fr auto auto;
			gap: var(--gutter);
		}
	}

	.num {
		font-family: var(--font-display);
		font-size: 2.5rem;
		font-weight: 600;
		line-height: 1;
		color: var(--text-subtle);
	}

	.event-main {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2) var(--space-5);
		font-size: var(--text-small);
		color: var(--text-subtle);
	}

	.meta span {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
	}

	.results {
		grid-column: 1 / -1;
		display: flex;
		gap: var(--space-7);
		margin: 0;
	}

	@media (min-width: 1024px) {
		.results {
			grid-column: auto;
		}
	}

	dt {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--text-muted);
	}

	dd {
		margin: 0;
		font-family: var(--font-display);
		font-size: 1.75rem;
		font-weight: 600;
		color: var(--text-subtle);
	}

	.status {
		grid-column: 1 / -1;
		justify-self: start;
		padding: 0.3rem 0.7rem;
		border: 1px dashed var(--line-strong);
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-subtle);
	}

	@media (min-width: 1024px) {
		.status {
			grid-column: auto;
		}
	}

	.awards {
		display: grid;
		gap: var(--space-5);
		margin-bottom: 0;
		padding: 0;
		list-style: none;
	}

	@media (min-width: 768px) {
		.awards {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.award {
		--chamfer: var(--chamfer-lg);
		--chamfer-line: var(--line-subtle);
		--chamfer-fill: var(--surface-base);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: clamp(1.75rem, 3vw, 2.5rem);
	}

	.award-icon {
		color: var(--color-vb-gold);
		margin-bottom: var(--space-2);
	}

	.num-sm {
		font-size: var(--text-label);
		color: var(--text-subtle);
	}

	.award p {
		font-size: var(--text-small);
	}
</style>
