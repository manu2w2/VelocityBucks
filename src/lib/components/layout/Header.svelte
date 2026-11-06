<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const navLinks = [
		{ href: resolve('/nosotros'), label: 'Nosotros' },
		{ href: resolve('/ingenieria'), label: 'Ingeniería' },
		{ href: resolve('/impacto'), label: 'Impacto' },
		{ href: resolve('/patrocinadores'), label: 'Patrocinadores' }
	];

	let mobileOpen = $state(false);

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function closeMobile() {
		mobileOpen = false;
	}

	function isActive(href: string) {
		return page.url.pathname === href;
	}
</script>

<header class="site-header">
	<nav class="site-container nav-inner" aria-label="Navegación principal">
		<!-- Logo -->
		<a href={resolve('/')} class="logo-link" onclick={closeMobile} aria-label="Velocity Bucks — Inicio">
			<span class="logo-mark" aria-hidden="true">VB</span>
			<span class="logo-text">
				Velocity Bucks
				<span class="logo-number">#39347</span>
			</span>
		</a>

		<!-- Desktop Nav -->
		<ul class="desktop-nav" role="list">
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class="nav-link"
						class:active={isActive(link.href)}
						aria-current={isActive(link.href) ? 'page' : undefined}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- CTA + Mobile Toggle -->
		<div class="nav-actions">
			<a href={resolve('/patrocinadores')} class="btn-ghost-sm">Contáctanos</a>
			<button
				class="mobile-toggle"
				onclick={toggleMobile}
				aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
				aria-expanded={mobileOpen}
			>
				<span class="hamburger" class:open={mobileOpen}></span>
			</button>
		</div>
	</nav>

	<!-- Mobile Drawer -->
	{#if mobileOpen}
		<div class="mobile-drawer" role="dialog" aria-modal="true" aria-label="Menú de navegación">
			<ul role="list">
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="mobile-link"
							class:active={isActive(link.href)}
							onclick={closeMobile}
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li>
					<a href={resolve('/patrocinadores')} class="mobile-cta" onclick={closeMobile}>
						Contáctanos
					</a>
				</li>
			</ul>
		</div>
	{/if}
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: rgba(34, 34, 34, 0.92);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: var(--border-steel);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 4rem;
	}

	/* Logo */
	.logo-link {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		text-decoration: none;
		color: inherit;
	}

	.logo-mark {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		background: var(--color-vb-gold);
		color: #222222;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 0.75rem;
		letter-spacing: 0.05em;
		clip-path: var(--clip-angle-both);
		flex-shrink: 0;
	}

	.logo-text {
		font-family: var(--font-display);    /* Rajdhani */
		font-weight: 600;
		font-size: 1rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #fff;
		display: flex;
		flex-direction: column;
		line-height: 1.2;
	}

	.logo-number {
		font-family: var(--font-accent);     /* Chakra Petch */
		font-size: 0.65rem;
		font-weight: 500;
		color: var(--color-vb-gold);
		letter-spacing: 0.12em;
	}

	/* Desktop Nav */
	.desktop-nav {
		display: none;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 0.25rem;
	}

	@media (min-width: 768px) {
		.desktop-nav {
			display: flex;
		}
	}

	.nav-link {
		display: block;
		padding: 0.4rem 0.875rem;
		font-family: var(--font-accent);  /* Chakra Petch */
		font-size: 0.8rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--color-vb-steel);
		text-decoration: none;
		border-radius: 4px;
		transition: color var(--transition-fast), background var(--transition-fast);
	}

	.nav-link:hover,
	.nav-link.active {
		color: #fff;
		background: rgba(208, 181, 73, 0.08);
	}

	.nav-link.active {
		color: var(--color-vb-gold);
	}

	/* CTA + Actions */
	.nav-actions {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.btn-ghost-sm {
		display: none;
		padding: 0.375rem 1rem;
		border: var(--border-gold);
		border-radius: 4px;
		color: var(--color-vb-gold);
		font-size: 0.8rem;
		font-weight: 500;
		text-decoration: none;
		transition: background var(--transition-fast), box-shadow var(--transition-fast);
	}

	.btn-ghost-sm:hover {
		background: rgba(208, 181, 73, 0.1);
		box-shadow: var(--shadow-gold);
	}

	@media (min-width: 768px) {
		.btn-ghost-sm {
			display: block;
		}
	}

	/* Hamburger */
	.mobile-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	@media (min-width: 768px) {
		.mobile-toggle {
			display: none;
		}
	}

	.hamburger {
		position: relative;
		display: block;
		width: 1.25rem;
		height: 2px;
		background: #fff;
		transition: background var(--transition-fast);
	}

	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		left: 0;
		width: 100%;
		height: 2px;
		background: #fff;
		transition: transform var(--transition-base);
	}

	.hamburger::before { top: -6px; }
	.hamburger::after  { top:  6px; }

	.hamburger.open {
		background: transparent;
	}

	.hamburger.open::before {
		transform: translateY(6px) rotate(45deg);
		background: var(--color-vb-gold);
	}

	.hamburger.open::after {
		transform: translateY(-6px) rotate(-45deg);
		background: var(--color-vb-gold);
	}

	/* Mobile Drawer */
	.mobile-drawer {
		border-top: var(--border-steel);
		background: rgba(34, 34, 34, 0.98);
		padding: 1rem var(--section-pad-x) 1.5rem;
	}

	@media (min-width: 768px) {
		.mobile-drawer {
			display: none;
		}
	}

	.mobile-drawer ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.mobile-link {
		display: block;
		padding: 0.75rem 0;
		color: var(--color-vb-steel);
		text-decoration: none;
		font-size: 1rem;
		font-weight: 500;
		border-bottom: var(--border-steel);
		transition: color var(--transition-fast);
	}

	.mobile-link:hover,
	.mobile-link.active {
		color: var(--color-vb-gold);
	}

	.mobile-cta {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.75rem 1.5rem;
		background: var(--color-vb-gold);
		color: #222222;
		font-weight: 600;
		text-decoration: none;
		border-radius: 4px;
		font-size: 0.9rem;
	}
</style>

