<script lang="ts">
	import { asset } from '$app/paths';
	import { MEDIA } from '#lib/site.ts';
	import Button from '#lib/components/ui/Button.svelte';
	import Icon from '#lib/components/ui/Icon.svelte';
	import PageHeader from '#lib/components/ui/PageHeader.svelte';
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { i18n, pad } from '#lib/i18n.svelte.ts';

	const sp = $derived(i18n.t.sponsors);
	const c = $derived(sp.contact);
	const dossierPdf = $derived(asset(MEDIA.dossierPdf[i18n.lang] as Parameters<typeof asset>[0]));
</script>

<Seo title={sp.seo.title} description={sp.seo.description} />

<PageHeader index="06" {...sp.header} />

<!-- Niveles de patrocinio -->
<section class="section-padding" aria-labelledby="tiers-title">
	<div class="site-container">
		<h2 id="tiers-title" class="vb-eyebrow">{sp.tiersTitle}</h2>

		<ul class="tiers" role="list">
			{#each sp.tiers as tier, i (tier.id)}
				{@const featured = tier.id === 'platinum'}
				<li class="tier vb-chamfer" class:featured>
					<div class="tier-head">
						<span class="vb-index tier-num">{sp.tierLabel} {pad(i + 1)}</span>
						<h3 class="vb-display vb-display--s tier-name">{tier.name}</h3>
						<p class="tier-desc">{tier.description}</p>
					</div>

					<ul class="benefits" role="list">
						{#each tier.benefits as benefit (benefit)}
							<li>
								<Icon name="check" size={18} strokeWidth={2} class="check" />
								<span>{benefit}</span>
							</li>
						{/each}
					</ul>

					<div class="tier-action">
						<Button href="#contacto" variant={featured ? 'primary' : 'ghost'} size="md" arrow block>
							{sp.sponsorCta}
						</Button>
					</div>
				</li>
			{/each}
		</ul>


		<!-- Dossier descargable -->
		<div class="dossier vb-chamfer">
			<span class="dossier-icon" aria-hidden="true"><Icon name="document" size={30} /></span>
			<div class="dossier-text">
				<p class="vb-eyebrow">{sp.dossier.eyebrow}</p>
				<h2 class="vb-display vb-display--s dossier-title">{sp.dossier.title}</h2>
				<p>{sp.dossier.body}</p>
			</div>
			<div class="dossier-actions">
				<Button href={dossierPdf} variant="primary" download>
					<Icon name="download" size={18} strokeWidth={1.8} />
					{sp.dossier.download}
				</Button>
				<Button href={i18n.href('/dossier')} variant="ghost" arrow>{sp.dossier.view}</Button>
			</div>
		</div>
	</div>
</section>

<!-- Contacto -->
<section class="section-padding surface-sunken" id="contacto" aria-labelledby="contact-title">
	<div class="site-container contact">
		<SectionTitle
			id="contact-title"
			eyebrow={c.eyebrow}
			title={c.title}
			accent={c.accent}
			subtitle={c.subtitle}
		/>

		<form class="contact-form" onsubmit={(e) => e.preventDefault()}>
			<div class="form-row">
				<div class="form-group">
					<label for="name">{c.name}</label>
					<input type="text" id="name" name="name" autocomplete="name" placeholder={c.namePlaceholder} required />
				</div>
				<div class="form-group">
					<label for="email">{c.email}</label>
					<input type="email" id="email" name="email" autocomplete="email" placeholder={c.emailPlaceholder} required />
				</div>
			</div>
			<div class="form-group">
				<label for="message">{c.message}</label>
				<textarea id="message" name="message" rows="5" placeholder={c.messagePlaceholder} required></textarea>
			</div>
			<div class="form-submit">
				<Button type="submit" variant="primary" size="lg" arrow>{c.submit}</Button>
			</div>
		</form>
	</div>
</section>

<style>
	/* ── Niveles ── */
	.tiers {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-5);
		margin: var(--space-6) 0 0;
		padding: 0;
		list-style: none;
	}

	@media (min-width: 1024px) {
		.tiers {
			grid-template-columns: repeat(3, 1fr);
			align-items: stretch;
		}
	}

	@media (min-width: 640px) and (max-width: 1023px) {
		.tiers {
			grid-template-columns: repeat(2, 1fr);
		}

		.featured {
			grid-column: 1 / -1;
		}
	}

	.tier {
		--chamfer: var(--chamfer-lg);
		--surface-current: var(--surface-sunken);
		--chamfer-fill: var(--surface-current);
		--chamfer-line: var(--line-subtle);
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		padding: clamp(1.75rem, 3vw, 2.5rem);
	}

	/* Nivel principal: filete y barra oro */
	.featured {
		--surface-current: var(--surface-raised);
		--chamfer-line: var(--line-gold);
	}

	.featured::before {
		background:
			linear-gradient(var(--color-vb-gold), var(--color-vb-gold)) top / 100% 3px no-repeat,
			var(--chamfer-line);
	}

	.featured::after {
		top: 3px;
	}

	.tier-head {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding-bottom: var(--space-5);
		border-bottom: 1px solid var(--line-subtle);
	}

	.tier-num {
		font-size: var(--text-label);
		text-transform: uppercase;
		color: var(--text-subtle);
	}

	.featured .tier-num {
		color: var(--color-vb-gold);
	}

	.tier-name {
		font-weight: 400;
	}

	.featured .tier-name {
		color: var(--color-vb-gold);
	}

	.tier-desc {
		font-size: var(--text-small);
	}

	.benefits {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.benefits li {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		font-size: 0.9375rem;
		line-height: 1.5;
		color: var(--text-muted);
	}

	.benefits :global(.check) {
		margin-top: 0.1rem;
		color: var(--color-vb-gold);
	}

	.tier-action {
		margin-top: auto;
	}

	/* ── Dossier ── */
	.dossier {
		--chamfer: var(--chamfer-lg);
		--surface-current: var(--surface-raised);
		--chamfer-fill: var(--surface-current);
		--chamfer-line: var(--line-gold);
		display: grid;
		gap: var(--space-6);
		margin-top: clamp(3rem, 6vw, 5rem);
		padding: clamp(1.75rem, 4vw, 3rem);
	}

	@media (min-width: 1024px) {
		.dossier {
			grid-template-columns: auto 1fr auto;
			align-items: center;
			gap: var(--space-7);
		}
	}

	.dossier-icon {
		display: grid;
		place-items: center;
		width: 4rem;
		height: 4rem;
		background: var(--color-vb-gold);
		color: var(--text-on-gold);
		clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%);
	}

	.dossier-text { display: flex; flex-direction: column; gap: var(--space-3); }
	.dossier-title { font-weight: 400; }
	.dossier-text p:last-child { max-width: 56ch; }
	.dossier-actions { display: flex; flex-wrap: wrap; gap: var(--space-3); }

	/* ── Contacto ── */
	.contact {
		display: grid;
		gap: var(--space-8);
	}

	@media (min-width: 1024px) {
		.contact {
			grid-template-columns: 5fr 7fr;
			gap: clamp(3rem, 6vw, 6rem);
			align-items: start;
		}
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.form-row {
		display: grid;
		gap: var(--space-5);
	}

	@media (min-width: 640px) {
		.form-row {
			grid-template-columns: 1fr 1fr;
		}
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	label {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--color-vb-gold);
	}

	input,
	textarea {
		width: 100%;
		min-height: 3rem;
		padding: 0.75rem 1rem;
		background: var(--surface-base);
		border: 1px solid var(--line-strong);
		color: var(--text-primary);
		font-family: var(--font-body);
		font-size: 1rem;
		line-height: 1.5;
		transition:
			border-color var(--transition-fast),
			background-color var(--transition-fast);
	}

	textarea {
		resize: vertical;
	}

	input::placeholder,
	textarea::placeholder {
		color: var(--text-subtle);
	}

	input:hover,
	textarea:hover {
		border-color: var(--color-vb-steel);
	}

	input:focus,
	textarea:focus {
		outline: 2px solid var(--color-vb-gold);
		outline-offset: -1px;
		border-color: var(--color-vb-gold);
		background: var(--surface-raised);
	}

	.form-submit {
		padding-top: var(--space-2);
	}
</style>
