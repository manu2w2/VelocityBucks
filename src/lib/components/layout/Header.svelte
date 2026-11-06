<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import Logo from '#lib/components/ui/Logo.svelte';
	import Button from '#lib/components/ui/Button.svelte';
	import { i18n, pad } from '#lib/i18n.svelte.ts';

	const t = $derived(i18n.t.nav);
	const navLinks = $derived(t.links.map((l) => ({ ...l, href: i18n.href(l.path) })));
	const contactHref = $derived(`${i18n.href('/patrocinadores')}#contacto`);

	let mobileOpen = $state(false);
	let toggleEl: HTMLButtonElement | undefined = $state();
	let headerEl: HTMLElement | undefined = $state();
	let drawerEl: HTMLElement | undefined = $state();

	function isActive(path: string) {
		return i18n.path === path;
	}

	afterNavigate(() => {
		mobileOpen = false;
	});

	// Menú móvil: bloquea el scroll de fondo, cierra con Escape y al pasar a escritorio
	$effect(() => {
		if (!mobileOpen) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const desktop = window.matchMedia('(min-width: 1024px)');
		// Lleva el foco al primer enlace del menú al abrirlo
		drawerEl?.querySelector<HTMLElement>('a')?.focus();

		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				mobileOpen = false;
				toggleEl?.focus();
				return;
			}
			// Atrapa el foco dentro de la cabecera (barra + menú) mientras está abierto
			if (e.key === 'Tab' && headerEl) {
				const focusables = Array.from(
					headerEl.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
				).filter((el) => el.offsetParent !== null);
				if (focusables.length === 0) return;
				const first = focusables[0];
				const last = focusables[focusables.length - 1];
				const active = document.activeElement as HTMLElement | null;
				if (e.shiftKey && (active === first || !headerEl.contains(active))) {
					e.preventDefault();
					last.focus();
				} else if (!e.shiftKey && (active === last || !headerEl.contains(active))) {
					e.preventDefault();
					first.focus();
				}
			}
		};
		const onResize = () => {
			if (desktop.matches) mobileOpen = false;
		};

		window.addEventListener('keydown', onKey);
		desktop.addEventListener('change', onResize);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', onKey);
			desktop.removeEventListener('change', onResize);
		};
	});

</script>

<header class="site-header" bind:this={headerEl}>
	<nav class="site-container nav-inner" aria-label={t.mainLabel}>
		<a href={i18n.href('/')} class="logo-link" aria-label={t.homeLabel}>
			<Logo decorative />
		</a>

		<ul class="desktop-nav" role="list">
			{#each navLinks as link (link.path)}
				<li>
					<a
						href={link.href}
						class="nav-link"
						class:active={isActive(link.path)}
						aria-current={isActive(link.path) ? 'page' : undefined}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="nav-actions">
			<a
				href={i18n.alternateHref}
				class="lang-switch"
				hreflang={t.switchLang.hreflang}
				lang={t.switchLang.hreflang}
				aria-label={t.switchLang.label}
				data-sveltekit-noscroll
			>
				<span class="lang-current">{i18n.lang.toUpperCase()}</span>
				<span class="lang-sep" aria-hidden="true">/</span>
				<span class="lang-other">{t.switchLang.short}</span>
			</a>

			<span class="desktop-cta">
				<Button href={contactHref} variant="ghost" size="sm">{t.contact}</Button>
			</span>

			<button
				bind:this={toggleEl}
				type="button"
				class="mobile-toggle"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label={mobileOpen ? t.closeMenu : t.openMenu}
				aria-expanded={mobileOpen}
				aria-controls="mobile-menu"
			>
				<span class="hamburger" class:open={mobileOpen} aria-hidden="true"></span>
			</button>
		</div>
	</nav>

	{#if mobileOpen}
		<div class="mobile-drawer" id="mobile-menu" bind:this={drawerEl}>
			<div class="site-container drawer-inner">
				<ul role="list" aria-label={t.mainLabel}>
					{#each navLinks as link, i (link.path)}
						<li>
							<a
								href={link.href}
								class="mobile-link"
								class:active={isActive(link.path)}
								aria-current={isActive(link.path) ? 'page' : undefined}
							>
								<span class="vb-index mobile-index" aria-hidden="true">{pad(i + 1)}</span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
				<Button href={contactHref} variant="primary" size="lg" arrow block>{t.contact}</Button>
			</div>
		</div>
	{/if}
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--surface-base);
		border-bottom: 1px solid var(--line-subtle);
	}

	.nav-inner {
		min-width: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-5);
		height: var(--header-h);
	}

	.logo-link {
		display: flex;
		text-decoration: none;
		color: inherit;
	}

	/* ── Navegación de escritorio ── */
	.desktop-nav {
		display: none;
		align-self: stretch;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.desktop-nav li {
		display: flex;
	}

	.nav-link {
		position: relative;
		display: flex;
		align-items: center;
		padding-inline: clamp(0.6rem, 1vw, 1rem);
		font-family: var(--font-accent);
		font-size: 0.8125rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		white-space: nowrap;
		color: var(--text-muted);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	/* Indicador activo: barra oro alineada con el filete del header */
	.nav-link::after {
		content: '';
		position: absolute;
		left: clamp(0.6rem, 1vw, 1rem);
		right: clamp(0.6rem, 1vw, 1rem);
		bottom: -1px;
		height: 3px;
		background: var(--color-vb-gold);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--transition-base);
	}

	.nav-link:hover {
		color: var(--text-primary);
	}

	.nav-link.active {
		color: var(--color-vb-gold);
	}

	.nav-link.active::after {
		transform: scaleX(1);
	}

	.nav-link:focus-visible {
		outline-offset: -6px;
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: var(--space-3);
	}

	.desktop-cta {
		display: none;
	}

	/* Selector de idioma: idioma actual en blanco, alternativo en acero */
	.lang-switch {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		min-height: 2.75rem;
		padding-inline: var(--space-2);
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: 0.12em;
		text-decoration: none;
		color: var(--text-subtle);
		transition: color var(--transition-fast);
	}

	.lang-current {
		color: var(--color-vb-gold);
	}

	.lang-switch:hover .lang-other {
		color: var(--text-primary);
	}

	/* Escritorio desde 1024px: navegación compacta; logotipo con texto desde 1200px
	   y botón de contacto desde 1360px para que los siete enlaces quepan siempre */
	@media (min-width: 1024px) {
		.desktop-nav {
			display: flex;
		}

		.mobile-toggle,
		.mobile-drawer {
			display: none !important;
		}
	}

	@media (min-width: 1024px) and (max-width: 1199.98px) {
		.logo-link :global(.text) {
			display: none;
		}

		.nav-link {
			padding-inline: 0.45rem;
			font-size: 0.72rem;
			letter-spacing: 0.05em;
		}

		.nav-link::after {
			left: 0.45rem;
			right: 0.45rem;
		}
	}

	@media (min-width: 1360px) {
		.desktop-cta {
			display: flex;
		}
	}

	/* ── Botón de menú (44px de área táctil) ── */
	.mobile-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		margin-right: -0.5rem;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
	}

	.hamburger,
	.hamburger::before,
	.hamburger::after {
		display: block;
		width: 1.375rem;
		height: 2px;
		background: var(--text-primary);
	}

	.hamburger {
		position: relative;
		transition: background-color var(--transition-fast);
	}

	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		left: 0;
		transition:
			transform var(--transition-base),
			background-color var(--transition-fast);
	}

	.hamburger::before { top: -7px; }
	.hamburger::after { top: 7px; width: 0.875rem; }

	.hamburger.open {
		background: transparent;
	}

	.hamburger.open::before {
		transform: translateY(7px) rotate(45deg);
		background: var(--color-vb-gold);
	}

	.hamburger.open::after {
		width: 1.375rem;
		transform: translateY(-7px) rotate(-45deg);
		background: var(--color-vb-gold);
	}

	/* ── Menú móvil a pantalla completa ── */
	.mobile-drawer {
		position: fixed;
		top: var(--header-h);
		inset-inline: 0;
		bottom: 0;
		overflow-y: auto;
		background: var(--surface-base);
		border-top: 1px solid var(--line-subtle);
		animation: drawer-in var(--transition-base) both;
	}

	@keyframes drawer-in {
		from { opacity: 0; transform: translateY(-0.5rem); }
		to { opacity: 1; transform: none; }
	}

	.drawer-inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-7);
		padding-block: var(--space-5) var(--space-8);
	}

	.drawer-inner ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.mobile-link {
		display: flex;
		align-items: baseline;
		gap: var(--space-4);
		padding-block: var(--space-4);
		border-bottom: 1px solid var(--line-subtle);
		font-family: var(--font-display);
		font-size: 1.75rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-primary);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.mobile-index {
		font-size: var(--text-label);
		color: var(--text-subtle);
	}

	.mobile-link:hover,
	.mobile-link.active {
		color: var(--color-vb-gold);
	}

	.mobile-link.active .mobile-index {
		color: var(--color-vb-gold);
	}
</style>
