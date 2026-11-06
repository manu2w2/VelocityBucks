<script lang="ts">
	import { asset } from '$app/paths';
	import Icon from '#lib/components/ui/Icon.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { i18n, pad } from '#lib/i18n.svelte.ts';
	import { MEDIA, SOCIAL, absoluteUrl } from '#lib/site.ts';

	/**
	 * Dossier de patrocinio — documento A4 imprimible.
	 * Reutiliza el contenido del sitio; el PDF descargable se genera a partir de esta página.
	 */
	const t = $derived(i18n.t);
	const d = $derived(t.dossier);
	const webUrl = $derived(absoluteUrl('/', i18n.lang).replace(/^https?:\/\//, '').replace(/\/$/, ''));
	const total = 5;
</script>

<Seo title={d.seo.title} description={d.seo.description} />

<nav class="toolbar" aria-label={d.toolbar.label}>
	<a href={i18n.href('/patrocinadores')} class="tb-link"><span aria-hidden="true">←</span> {d.toolbar.back}</a>
	<div class="tb-actions">
		<button type="button" class="tb-btn" onclick={() => window.print()}>{d.toolbar.print}</button>
		<a class="tb-btn tb-primary" href={asset(MEDIA.dossierPdf[i18n.lang] as Parameters<typeof asset>[0])} download>
			<Icon name="download" size={16} strokeWidth={1.8} />
			{d.toolbar.download}
		</a>
	</div>
</nav>

<main class="doc" id="contenido">
	<!-- 1 · Portada -->
	<section class="sheet cover">
		<div class="cover-top">
			<span class="kicker">{d.cover.kicker}</span>
			<span class="kicker">{d.cover.season}</span>
		</div>
		<img class="cover-logo" src={asset('brand/logo-480.webp')} alt={t.logoAlt} width="480" height="480" />
		<div>
			<h1 class="cover-title">Velocity<br />Bucks</h1>
			<p class="cover-accent">FTC #39347 — {t.meta.tagline}</p>
		</div>
		<p class="cover-quote">{t.prefooter.quote}</p>
	</section>

	<!-- 2 · Quiénes somos + pilares -->
	<section class="sheet">
		{@render head(1, d.sections.about)}
		<div class="cols">
			{#each t.about.history as para (para)}<p class="body">{para}</p>{/each}
		</div>
		<dl class="stats">
			{#each t.stats as st (st.label)}
				<div><dt>{st.label}</dt><dd>{st.prefix}{st.value}{st.suffix}</dd></div>
			{/each}
		</dl>
		{@render head(2, d.sections.pillars)}
		<ol class="pillars">
			{#each t.pillars as pl, i (pl.id)}
				<li><span class="idx">{pad(i + 1)}</span><strong>{pl.title}</strong><p>{pl.description}</p></li>
			{/each}
		</ol>
		{@render foot(2)}
	</section>

	<!-- 3 · Ingeniería + impacto -->
	<section class="sheet">
		{@render head(3, d.sections.engineering)}
		<p class="body">{t.engineering.header.subtitle}</p>
		<dl class="specs">
			{#each t.engineering.specs as sp (sp.label)}
				<div><dt>{sp.label}</dt><dd>{sp.value}</dd></div>
			{/each}
		</dl>
		{@render head(4, d.sections.impact)}
		<ol class="impact">
			{#each t.impact.initiatives as it, i (it.title)}
				<li><span class="idx">{pad(i + 1)} · {it.tag}</span><strong>{it.title}</strong><p>{it.body}</p></li>
			{/each}
		</ol>
		{@render foot(3)}
	</section>

	<!-- 4 · Niveles -->
	<section class="sheet">
		{@render head(5, d.sections.tiers)}
		<p class="body">{t.sponsors.header.subtitle}</p>
		<div class="tiers">
			{#each t.sponsors.tiers as tier, i (tier.id)}
				<article class="tier" class:featured={tier.id === 'platinum'}>
					<span class="idx">{t.sponsors.tierLabel} {pad(i + 1)}</span>
					<h3>{tier.name}</h3>
					<p class="tier-desc">{tier.description}</p>
					<ul>
						{#each tier.benefits as b (b)}<li><Icon name="check" size={14} strokeWidth={2.2} /> {b}</li>{/each}
					</ul>
					<div class="contrib"><span>{d.contribution}</span><strong>{t.common.pending}</strong></div>
				</article>
			{/each}
		</div>
		{@render foot(4)}
	</section>

	<!-- 5 · Contacto -->
	<section class="sheet closing">
		{@render head(6, d.sections.contact)}
		<p class="closing-lead">{d.contactLead}</p>
		<dl class="contact">
			<div><dt>{d.contactRows.web}</dt><dd><Icon name="globe" size={18} /> {webUrl}</dd></div>
			<div><dt>{d.contactRows.social}</dt><dd>
				{#each SOCIAL as s (s.href)}<span><Icon name={s.icon} size={18} /> {s.handle}</span>{/each}
			</dd></div>
		</dl>
		<img class="closing-logo" src={asset('brand/logo-128.webp')} alt="" width="128" height="128" />
		<p class="disclaimer">{t.footer.disclaimer}</p>
		{@render foot(5)}
	</section>
</main>

{#snippet head(n: number, label: string)}
	<header class="sec-head"><span class="idx">{pad(n)}</span><h2>{label}</h2></header>
{/snippet}

{#snippet foot(n: number)}
	<footer class="sheet-foot"><span>Velocity Bucks #39347 — {d.cover.kicker}</span><span>{d.page} {n} / {total}</span></footer>
{/snippet}

<style>
	@page { size: A4; margin: 0; }

	:global(body) { background: #161616; }

	.toolbar {
		position: sticky; top: 0; z-index: 10;
		display: flex; justify-content: space-between; align-items: center; gap: 1rem;
		padding: 0.75rem var(--section-pad-x);
		background: var(--surface-base); border-bottom: 1px solid var(--line-subtle);
	}
	.tb-link { color: var(--text-muted); text-decoration: none; font-family: var(--font-accent); font-size: var(--text-label); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
	.tb-link:hover { color: var(--color-vb-gold); }
	.tb-actions { display: flex; gap: 0.5rem; }
	.tb-btn {
		display: inline-flex; align-items: center; gap: 0.5rem; min-height: 2.5rem; padding: 0 1rem;
		background: none; border: 1px solid var(--line-strong); color: var(--text-primary); cursor: pointer; text-decoration: none;
		font-family: var(--font-accent); font-size: var(--text-label); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
	}
	.tb-primary { background: var(--color-vb-gold); border-color: var(--color-vb-gold); color: var(--text-on-gold); }

	.doc { display: flex; flex-direction: column; align-items: center; gap: 2rem; padding: 2rem 1rem 4rem; }

	.sheet {
		position: relative;
		display: flex; flex-direction: column; gap: 7mm;
		width: 210mm; min-height: 297mm; max-width: 100%;
		padding: 18mm 18mm 24mm;
		background: var(--surface-base); color: var(--text-primary);
		box-sizing: border-box; overflow: hidden;
	}

	/* Portada */
	.cover { background: var(--color-vb-gold); color: var(--text-on-gold); justify-content: space-between;
		clip-path: polygon(0 0, 100% 0, 100% calc(100% - 22mm), calc(100% - 22mm) 100%, 0 100%); }
	.cover-top { display: flex; justify-content: space-between; }
	.kicker { font-family: var(--font-accent); font-size: 9pt; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }
	.cover-logo { width: 95mm; height: 95mm; align-self: center; }
	.cover-title { font-family: var(--font-display); font-weight: 300; font-size: 58pt; line-height: 0.9; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-on-gold); }
	.cover-accent { margin-top: 4mm; font-family: var(--font-accent); font-weight: 700; font-size: 13pt; letter-spacing: 0.05em; text-transform: uppercase; color: var(--color-vb-gold-ink); }
	.cover-quote { font-style: italic; font-size: 11pt; color: var(--color-vb-gold-ink); max-width: 110mm; }

	.sec-head { display: flex; align-items: baseline; gap: 4mm; padding-bottom: 3mm; border-bottom: 1px solid var(--line-strong); position: relative; }
	.sec-head::after { content: ''; position: absolute; left: 0; bottom: -2px; width: 18mm; height: 3px; background: var(--color-vb-gold); }
	.sec-head h2 { font-family: var(--font-display); font-weight: 300; font-size: 24pt; letter-spacing: 0.1em; }
	.idx { font-family: var(--font-accent); font-weight: 700; font-size: 8.5pt; letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-vb-gold); }

	.body { font-size: 10pt; line-height: 1.65; }
	.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 7mm; }

	.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; margin: 0; background: var(--line-subtle); }
	.stats div { padding: 5mm 4mm; background: var(--surface-sunken); display: flex; flex-direction: column-reverse; gap: 1mm; }
	.stats dt { font-family: var(--font-accent); font-size: 7pt; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); }
	.stats dd { margin: 0; font-family: var(--font-display); font-weight: 600; font-size: 22pt; line-height: 1; color: var(--color-vb-gold); }

	.pillars, .impact { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6mm 7mm; margin: 0; padding: 0; list-style: none; }
	.impact { grid-template-columns: 1fr; gap: 5mm; }
	.pillars li, .impact li { display: flex; flex-direction: column; gap: 1.5mm; padding-top: 3mm; border-top: 1px solid var(--line-subtle); }
	.pillars strong, .impact strong { font-family: var(--font-accent); font-size: 10pt; letter-spacing: 0.04em; text-transform: uppercase; }
	.pillars p, .impact p { font-size: 8.5pt; line-height: 1.55; }

	.specs { margin: 0; border-top: 1px solid var(--line-strong); }
	.specs div { display: grid; grid-template-columns: 55mm 1fr; gap: 4mm; padding: 2.4mm 0; border-bottom: 1px solid var(--line-subtle); }
	.specs dt { font-family: var(--font-accent); font-size: 7.5pt; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-vb-gold); }
	.specs dd { margin: 0; font-size: 9.5pt; font-weight: 500; }

	.tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5mm; flex: 1; }
	.tier { display: flex; flex-direction: column; gap: 3mm; padding: 6mm 5mm; background: var(--surface-sunken); border: 1px solid var(--line-subtle);
		clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8mm), calc(100% - 8mm) 100%, 0 100%); }
	.tier.featured { border-color: var(--color-vb-gold); box-shadow: inset 0 3px 0 var(--color-vb-gold); }
	.tier h3 { font-family: var(--font-display); font-weight: 400; font-size: 20pt; letter-spacing: 0.1em; }
	.tier.featured h3 { color: var(--color-vb-gold); }
	.tier-desc { font-size: 8.5pt; padding-bottom: 3mm; border-bottom: 1px solid var(--line-subtle); }
	.tier ul { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 2mm; flex: 1; }
	.tier li { display: flex; gap: 2mm; font-size: 8.5pt; line-height: 1.4; color: var(--text-muted); }
	.tier li :global(svg) { color: var(--color-vb-gold); margin-top: 0.5mm; }
	.contrib { display: flex; flex-direction: column; gap: 1mm; padding-top: 3mm; border-top: 1px dashed var(--line-strong); }
	.contrib span { font-family: var(--font-accent); font-size: 7pt; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); }
	.contrib strong { font-family: var(--font-display); font-weight: 500; font-size: 13pt; color: var(--text-subtle); }

	.closing-lead { font-family: var(--font-display); font-weight: 300; font-size: 26pt; line-height: 1.1; letter-spacing: 0.06em; text-transform: uppercase; max-width: 150mm; }
	.contact { margin: 0; display: flex; flex-direction: column; gap: 5mm; }
	.contact dt { font-family: var(--font-accent); font-size: 7.5pt; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-vb-gold); margin-bottom: 1.5mm; }
	.contact dd { margin: 0; display: flex; flex-wrap: wrap; gap: 3mm 8mm; font-size: 11pt; }
	.contact dd, .contact dd span { align-items: center; }
	.contact dd span { display: inline-flex; gap: 2mm; }
	.closing-logo { width: 28mm; height: 28mm; margin-top: auto; }
	.disclaimer { font-size: 7pt; line-height: 1.5; color: var(--text-subtle); max-width: 150mm; }

	.sheet-foot { position: absolute; left: 18mm; right: 18mm; bottom: 10mm; display: flex; justify-content: space-between;
		font-family: var(--font-accent); font-size: 7pt; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-subtle); }

	@media print {
		.toolbar { display: none; }
		:global(body) { background: none; }
		.doc { padding: 0; gap: 0; }
		.sheet { height: 296.5mm; min-height: 0; break-after: page; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
		.sheet:last-child { break-after: auto; }
		:global(html), :global(body) { margin: 0; padding: 0; }
	}

	@media (max-width: 820px) {
		.sheet { min-height: auto; padding: 8mm 6mm 18mm; }
		.cols, .pillars, .tiers, .stats { grid-template-columns: 1fr; }
		.specs div { grid-template-columns: 1fr; gap: 1mm; }
		.cover-title { font-size: 40pt; }
		.cover-logo { width: 60mm; height: 60mm; }
		.sheet-foot { left: 6mm; right: 6mm; bottom: 6mm; }
	}
</style>
