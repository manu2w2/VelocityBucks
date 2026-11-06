<script lang="ts">
	import Logo from '#lib/components/ui/Logo.svelte';
	import Icon from '#lib/components/ui/Icon.svelte';
	import { i18n } from '#lib/i18n.svelte.ts';
	import { SOCIAL } from '#lib/site.ts';

	const t = $derived(i18n.t);
	const siteLinks = $derived([
		{ path: '/', label: t.nav.home },
		...t.nav.links
	]);

	const year = new Date().getFullYear();
</script>

<footer class="site-footer surface-sunken">
	<div class="site-container footer-inner">
		<div class="brand">
			<!-- 5 toques seguidos activan el easter egg -->
			<span data-buck-trigger><Logo /></span>
			<p class="tagline">{t.footer.tagline}</p>
		</div>

		<nav class="col" aria-label={t.footer.navLabel}>
			<p class="col-title">{t.footer.siteTitle}</p>
			<ul role="list">
				{#each siteLinks as link (link.path)}
					<li><a href={i18n.href(link.path)}>{link.label}</a></li>
				{/each}
			</ul>
		</nav>

		<div class="col">
			<p class="col-title">{t.footer.followTitle}</p>
			<ul role="list">
				{#each SOCIAL as link (link.href)}
					<li>
						<a href={link.href} target="_blank" rel="noopener noreferrer" class="social">
							<Icon name={link.icon} size={18} />
							{link.label}
							<span class="sr-only">{t.common.newTab}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="legal">
		<div class="site-container legal-inner">
			<p class="disclaimer">{t.footer.disclaimer}</p>
			<p class="copyright">© {year} Velocity Bucks #39347. {t.footer.rights}</p>
		</div>
	</div>
</footer>

<style>
	.footer-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-8) var(--gutter);
		padding-block: clamp(3rem, 6vw, 4.5rem);
	}

	.brand {
		grid-column: 1 / -1;
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	@media (min-width: 768px) {
		.footer-inner {
			grid-template-columns: 6fr 3fr 3fr;
		}

		.brand {
			grid-column: auto;
		}
	}

	.tagline {
		font-size: var(--text-small);
		font-style: italic;
	}

	.col-title {
		margin-bottom: var(--space-4);
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--color-vb-gold);
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		min-height: 2rem;
		font-size: var(--text-small);
		color: var(--text-muted);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	a:hover {
		color: var(--color-vb-gold);
	}

	.legal {
		border-top: 1px solid var(--line-subtle);
	}

	.legal-inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding-block: var(--space-5);
	}

	.disclaimer,
	.copyright {
		font-size: var(--text-label);
		line-height: 1.6;
		color: var(--text-subtle);
	}

	.disclaimer {
		max-width: 80ch;
	}

	.copyright {
		font-family: var(--font-accent);
		letter-spacing: 0.04em;
	}
</style>
