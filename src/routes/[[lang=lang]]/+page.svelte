<script lang="ts">
	import Button from '#lib/components/ui/Button.svelte';
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
	import PillarList from '#lib/components/ui/PillarList.svelte';
	import StatStrip from '#lib/components/ui/StatStrip.svelte';
	import Logo from '#lib/components/ui/Logo.svelte';
	import Icon from '#lib/components/ui/Icon.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Countdown from '#lib/components/ui/Countdown.svelte';
	import { i18n } from '#lib/i18n.svelte.ts';

	const t = $derived(i18n.t);
	const h = $derived(t.home);
</script>

<Seo title={h.seo.title} description={h.seo.description} />

<!-- ══════════ HERO ══════════ -->
<section class="hero" aria-labelledby="hero-title">
	<div class="site-container hero-grid">
		<div class="hero-content">
			<p class="vb-eyebrow">{h.eyebrow}</p>

			<div class="hero-pair">
				<h1 id="hero-title" class="vb-display vb-display--xl">
					<span class="line">Velocity</span>
					<span class="line">Bucks</span>
				</h1>
				<p class="vb-accent hero-accent">{h.accent}</p>
			</div>

			<p class="vb-lead">{h.lead}</p>

			<div class="hero-actions">
				<Button href={i18n.href('/ingenieria')} variant="primary" size="lg" arrow>
					{h.ctaRobot}
				</Button>
				<Button href={i18n.href('/patrocinadores')} variant="ghost" size="lg">{h.ctaSupport}</Button>
			</div>
		</div>

		<!-- Isotipo oficial en marco técnico -->
		<div class="hero-mark">
			<div class="mark-frame">
				<span class="tick tl" aria-hidden="true"></span>
				<span class="tick tr" aria-hidden="true"></span>
				<span class="tick bl" aria-hidden="true"></span>
				<span class="tick br" aria-hidden="true"></span>
				<Logo size="xl" showText={false} />
			</div>
		</div>
	</div>
</section>

<!-- ══════════ MÉTRICAS ══════════ -->
<StatStrip items={t.stats} label={h.statsLabel} />

<!-- ══════════ MANIFIESTO ══════════ -->
<section class="section-padding" aria-label={h.manifesto.label}>
	<div class="site-container manifesto">
		<p class="vb-eyebrow">{h.manifesto.label}</p>
		<blockquote class="manifesto-quote">
			<p><span class="manifesto-name">{h.manifesto.name}</span> {h.manifesto.text}</p>
		</blockquote>
	</div>
</section>

<!-- ══════════ PILARES (3 de 6) ══════════ -->
<section class="section-padding surface-sunken" aria-labelledby="pillars-title">
	<div class="site-container">
		<div class="split-head">
			<SectionTitle
				id="pillars-title"
				eyebrow={h.pillars.eyebrow}
				title={h.pillars.title}
				accent={h.pillars.accent}
				subtitle={h.pillars.subtitle}
			/>
			<Button href={i18n.href('/nosotros')} variant="outline" arrow>{h.pillars.cta}</Button>
		</div>

		<div class="section-body">
			<PillarList pillars={t.pillars.slice(0, 3)} />
		</div>
	</div>
</section>

<!-- ══════════ SECCIONES ══════════ -->
<section class="section-padding" aria-labelledby="explore-title">
	<div class="site-container">
		<SectionTitle id="explore-title" eyebrow={h.explore.eyebrow} title={h.explore.title} />

		<ul class="teasers section-body" role="list">
			{#each h.teasers as teaser (teaser.path)}
				<li>
					<a href={i18n.href(teaser.path)} class="teaser teaser-{teaser.tone}">
						<p class="teaser-eyebrow">{teaser.eyebrow}</p>
						<h3 class="vb-display vb-display--s teaser-title">{teaser.title}</h3>
						<p class="vb-accent teaser-accent">{teaser.accent}</p>
						<p class="teaser-body">{teaser.body}</p>
						<span class="teaser-arrow"><Icon name="arrow-right" size={22} strokeWidth={1.8} /></span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- ══════════ TEMPORADA ══════════ -->
<section class="section-padding surface-sunken season-block" aria-labelledby="season-title">
	<div class="site-container season-inner">
		<SectionTitle id="season-title" eyebrow={h.season.eyebrow} title={h.season.title} accent={h.season.accent} />
		<div class="season-side">
			<p>{h.season.body}</p>
			<Button href={i18n.href('/temporada')} variant="primary" arrow>{h.season.cta}</Button>
		</div>
	</div>
	<div class="site-container countdown-wrap">
		<Countdown />
	</div>
</section>

<style>
	/* ── Hero ── */
	.hero {
		position: relative;
		padding-block: clamp(3.5rem, 9vw, 7.5rem) clamp(3.5rem, 8vw, 6.5rem);
		overflow: hidden;
	}

	.hero-grid {
		display: grid;
		gap: var(--space-8);
		align-items: center;
	}

	@media (min-width: 1024px) {
		.hero-grid {
			grid-template-columns: 7fr 5fr;
			gap: var(--gutter);
		}
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-6);
	}

	.hero-pair {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.line {
		display: block;
	}

	.hero-accent {
		font-size: clamp(1rem, 1.4vw + 0.6rem, 1.5rem);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3) var(--space-4);
		padding-top: var(--space-2);
	}

	/* Marco técnico del isotipo: retícula de plano + marcas de registro */
	/* Móvil/tablet: el isotipo encabeza el hero en un marco compacto */
	.hero-mark {
		order: -1;
		display: flex;
	}

	.hero-mark .mark-frame {
		width: min(100%, 15rem);
		background-size: 1.5rem 1.5rem;
	}

	@media (min-width: 1024px) {
		.hero-mark {
			order: 0;
			justify-content: flex-end;
		}

		.hero-mark .mark-frame {
			width: min(100%, 26rem);
			background-size: 2rem 2rem;
		}
	}

	.mark-frame {
		position: relative;
		display: grid;
		place-items: center;
		width: min(100%, 26rem);
		aspect-ratio: 1;
		background-image:
			linear-gradient(var(--line-subtle) 1px, transparent 1px),
			linear-gradient(90deg, var(--line-subtle) 1px, transparent 1px);
		background-size: 2rem 2rem;
		background-position: center;
		border: 1px solid var(--line-subtle);
	}

	.tick {
		position: absolute;
		width: 1.25rem;
		height: 1.25rem;
		border: 0 solid var(--color-vb-gold);
	}

	.tick.tl { top: -1px; left: -1px; border-top-width: 2px; border-left-width: 2px; }
	.tick.tr { top: -1px; right: -1px; border-top-width: 2px; border-right-width: 2px; }
	.tick.bl { bottom: -1px; left: -1px; border-bottom-width: 2px; border-left-width: 2px; }
	.tick.br { bottom: -1px; right: -1px; border-bottom-width: 2px; border-right-width: 2px; }

	/* ── Manifiesto: composición editorial ── */
	.manifesto {
		display: grid;
		gap: var(--space-6);
	}

	@media (min-width: 1024px) {
		.manifesto {
			grid-template-columns: 3fr 9fr;
			gap: var(--gutter);
			align-items: start;
		}

		.manifesto .vb-eyebrow {
			padding-top: 0.75rem;
		}
	}

	.manifesto-quote {
		margin: 0;
		padding-left: clamp(1.25rem, 3vw, 2.5rem);
		border-left: 3px solid var(--color-vb-gold);
	}

	.manifesto-quote p {
		max-width: 34ch;
		font-style: italic;
		font-weight: 500;
		font-size: clamp(1.35rem, 2.2vw + 0.6rem, 2.25rem);
		line-height: 1.4;
		color: var(--text-primary);
	}

	.manifesto-name {
		font-style: normal;
		font-weight: 600;
		color: var(--color-vb-gold);
	}

	/* ── Temporada (bloque puente) ── */
	.season-block {
		border-top: 1px solid var(--line-subtle);
	}

	.season-inner {
		display: grid;
		gap: var(--space-6);
		align-items: end;
	}

	@media (min-width: 1024px) {
		.season-inner {
			grid-template-columns: 7fr 5fr;
			gap: var(--gutter);
		}

		.season-side {
			justify-self: end;
		}
	}

	.season-side {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-5);
		max-width: 40ch;
	}

	.countdown-wrap {
		margin-top: var(--space-8);
	}

	/* ── Cabecera partida: título + acción ── */
	.split-head {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-6);
	}

	@media (min-width: 1024px) {
		.split-head {
			flex-direction: row;
			align-items: flex-end;
			justify-content: space-between;
		}
	}

	/* ── Paneles de sección (manual de identidad) ── */
	.teasers {
		display: grid;
		grid-template-columns: 1fr;
		margin-bottom: 0;
		padding: 0;
		list-style: none;
		clip-path: polygon(
			0 0, 100% 0,
			100% calc(100% - var(--chamfer-lg)),
			calc(100% - var(--chamfer-lg)) 100%,
			0 100%
		);
	}

	@media (min-width: 768px) {
		.teasers {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.teasers li {
		display: flex;
	}

	.teaser {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		width: 100%;
		padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
		text-decoration: none;
		background: var(--panel-bg);
		transition: background-color var(--transition-base);
	}

	@media (min-width: 768px) {
		.teaser {
			min-height: 24rem;
		}
	}

	.teaser:hover {
		background: var(--panel-bg-hover);
	}

	.teaser:focus-visible {
		outline-color: var(--panel-ink);
		outline-offset: -8px;
	}

	.teaser-eyebrow {
		margin-bottom: var(--space-4);
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--panel-eyebrow);
	}

	.teaser-title {
		font-weight: 400;
		color: var(--panel-title);
	}

	.teaser-accent {
		margin-bottom: var(--space-4);
		font-size: 0.9375rem;
		color: var(--panel-accent);
	}

	.teaser-body {
		max-width: 34ch;
		font-size: 0.9375rem;
		color: var(--panel-body);
	}

	.teaser-arrow {
		display: inline-flex;
		margin-top: auto;
		padding-top: var(--space-6);
		color: var(--panel-ink);
		transition: transform var(--transition-base);
	}

	.teaser:hover .teaser-arrow {
		transform: translateX(6px);
	}

	/* Panel oro — texto carbón */
	.teaser-gold {
		--panel-bg: var(--color-vb-gold);
		--panel-bg-hover: color-mix(in srgb, var(--color-vb-gold) 86%, white);
		--panel-eyebrow: var(--color-vb-dark);
		--panel-title: var(--color-vb-dark);
		--panel-accent: var(--color-vb-gold-ink);
		--panel-body: rgba(34, 34, 34, 0.85);
		--panel-ink: var(--color-vb-dark);
	}

	/* Panel acero — como "IMPACT / BEYOND ROBOTICS" del manual */
	.teaser-steel {
		--panel-bg: var(--color-vb-steel);
		--panel-bg-hover: color-mix(in srgb, var(--color-vb-steel) 84%, white);
		--panel-eyebrow: var(--color-vb-dark);
		--panel-title: var(--color-vb-dark);
		--panel-accent: var(--color-vb-gold-ink);
		--panel-body: rgba(34, 34, 34, 0.85);
		--panel-ink: var(--color-vb-dark);
	}

	/* Panel carbón — como "COMMUNITY / MORE THAN ROBOTS" del manual */
	.teaser-dark {
		--panel-bg: var(--surface-sunken);
		--panel-bg-hover: var(--surface-raised);
		--panel-eyebrow: var(--color-vb-gold);
		--panel-title: var(--color-vb-gold);
		--panel-accent: var(--color-vb-gold-light);
		--panel-body: var(--text-muted);
		--panel-ink: var(--color-vb-gold);
	}
</style>
