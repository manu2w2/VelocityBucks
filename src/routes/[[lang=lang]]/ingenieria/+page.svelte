<script lang="ts">
	import PageHeader from '#lib/components/ui/PageHeader.svelte';
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
	import PhotoPlaceholder from '#lib/components/ui/PhotoPlaceholder.svelte';
	import VideoEmbed from '#lib/components/ui/VideoEmbed.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { i18n, pad } from '#lib/i18n.svelte.ts';
	import { MEDIA } from '#lib/site.ts';

	const e = $derived(i18n.t.engineering);
</script>

<Seo title={e.seo.title} description={e.seo.description} />

<PageHeader
	index="02"
	eyebrow="{e.header.eyebrowPrefix} {e.season}"
	title={e.header.title}
	accent={e.header.accent}
	subtitle={e.header.subtitle}
/>

<!-- Robot Reveal: listo para el vídeo (ver MEDIA.robotRevealYoutubeId en src/lib/site.ts) -->
<section class="section-padding surface-sunken" aria-labelledby="reveal-title">
	<div class="site-container">
		<div class="reveal-head">
			<SectionTitle id="reveal-title" title={e.reveal.title} accent={e.reveal.accent} />
			<p class="vb-lead">{e.reveal.subtitle}</p>
		</div>

		<div class="section-body">
			<VideoEmbed
				youtubeId={MEDIA.robotRevealYoutubeId}
				title={e.reveal.videoTitle}
				playLabel={e.reveal.play}
				placeholderTitle={e.reveal.eyebrow}
				placeholderNote={e.reveal.placeholderNote}
			/>
		</div>
	</div>
</section>

<!-- Ficha técnica -->
<section class="section-padding" aria-labelledby="specs-title">
	<div class="site-container robot">
		<div class="robot-visual">
			<PhotoPlaceholder label={e.renderLabel} ratio="1 / 1" icon="cube" />
		</div>

		<div class="spec-sheet">
			<h2 id="specs-title" class="vb-eyebrow">{e.specsTitle}</h2>

			<dl class="specs">
				{#each e.specs as row (row.label)}
					<div class="spec-row">
						<dt>{row.label}</dt>
						<dd>{row.value}</dd>
					</div>
				{/each}
				<div class="spec-row">
					<dt>{e.mechanismsLabel}</dt>
					<dd>
						<ul class="mechanisms" role="list">
							{#each e.mechanisms as mechanism (mechanism)}
								<li>{mechanism}</li>
							{/each}
						</ul>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</section>

<!-- Proceso de ingeniería -->
<section class="section-padding surface-sunken" aria-labelledby="process-title">
	<div class="site-container">
		<SectionTitle id="process-title" {...e.process} />

		<ol class="timeline section-body" role="list">
			{#each e.steps as step, i (step.title)}
				<li class="step">
					<span class="vb-index step-num">{pad(i + 1)}</span>
					<h3 class="vb-title step-title">{step.title}</h3>
					<p class="step-desc">{step.description}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	/* ── Robot Reveal ── */
	.reveal-head {
		display: grid;
		gap: var(--space-5);
		align-items: end;
	}

	@media (min-width: 1024px) {
		.reveal-head {
			grid-template-columns: 7fr 5fr;
			gap: var(--gutter);
		}
	}

	/* ── Ficha técnica ── */
	.robot {
		display: grid;
		gap: var(--space-8);
		align-items: start;
	}

	/* Tablet/móvil: el render no debe dominar la pantalla */
	.robot-visual {
		width: 100%;
		max-width: 26rem;
	}

	@media (min-width: 1024px) {
		.robot-visual {
			max-width: none;
		}

		.robot {
			grid-template-columns: 5fr 7fr;
			gap: clamp(3rem, 5vw, 5rem);
		}

		.robot-visual {
			position: sticky;
			top: calc(var(--header-h) + 2rem);
		}
	}

	.spec-sheet {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.specs {
		margin: 0;
		border-top: 1px solid var(--line-strong);
	}

	.spec-row {
		display: grid;
		gap: var(--space-1);
		padding-block: var(--space-4);
		border-bottom: 1px solid var(--line-subtle);
	}

	@media (min-width: 640px) {
		.spec-row {
			grid-template-columns: 13rem 1fr;
			gap: var(--space-5);
			align-items: baseline;
		}
	}

	dt {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--color-vb-gold);
	}

	dd {
		margin: 0;
		font-size: 0.9375rem;
		font-weight: 500;
		line-height: 1.55;
		color: var(--text-primary);
	}

	.mechanisms {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.mechanisms li {
		padding: 0.3rem 0.7rem;
		border: 1px solid var(--line-strong);
		font-size: var(--text-small);
		line-height: 1.4;
	}

	/* ── Línea de proceso: vertical en móvil, horizontal en escritorio ── */
	.timeline {
		display: grid;
		margin-bottom: 0;
		padding: 0;
		list-style: none;
	}

	.step {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: 0 0 var(--space-7) var(--space-7);
		border-left: 1px solid var(--line-strong);
	}

	.step:last-child {
		padding-bottom: 0;
		border-left-color: transparent;
	}

	/* Nodo biselado sobre la línea */
	.step::before {
		content: '';
		position: absolute;
		top: 0.2rem;
		left: -6px;
		width: 11px;
		height: 11px;
		background: var(--color-vb-gold);
		clip-path: polygon(0 0, 100% 0, 100% 60%, 60% 100%, 0 100%);
	}

	@media (min-width: 1024px) {
		.timeline {
			grid-template-columns: repeat(5, 1fr);
		}

		.step,
		.step:last-child {
			padding: var(--space-6) var(--space-5) 0 0;
			border-left: none;
			border-top: 1px solid var(--line-strong);
		}

		.step::before {
			top: -6px;
			left: 0;
		}
	}

	.step-num {
		font-family: var(--font-display);
		font-size: 2.5rem;
		font-weight: 600;
		line-height: 1;
		color: var(--color-vb-gold);
	}

	.step-title {
		margin-top: var(--space-2);
		font-size: 1rem;
	}

	.step-desc {
		max-width: 36ch;
		font-size: 0.9375rem;
	}
</style>
