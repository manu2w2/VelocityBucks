<script lang="ts">
	const socialLinks = [
		{ label: 'Instagram', href: 'https://instagram.com/velocitybucks', icon: 'IG' },
		{ label: 'GitHub', href: 'https://github.com/velocitybucks39347', icon: 'GH' }
	];

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="site-container footer-inner">
		<!-- Identity Column -->
		<div class="footer-brand">
			<div class="footer-logo">
				<span class="logo-mark" aria-hidden="true">VB</span>
				<div>
					<p class="footer-name">Velocity Bucks</p>
					<p class="footer-number">FTC #39347</p>
				</div>
			</div>
			<p class="footer-tagline">Ingeniería en movimiento.</p>
		</div>

		<!-- Navigation Column -->
		<nav aria-label="Navegación del pie de página">
			<p class="footer-nav-title">Sitio</p>
			<ul role="list">
				<li><a href="/">Inicio</a></li>
				<li><a href="/nosotros">Nosotros</a></li>
				<li><a href="/ingenieria">Ingeniería</a></li>
				<li><a href="/impacto">Impacto</a></li>
				<li><a href="/patrocinadores">Patrocinadores</a></li>
			</ul>
		</nav>

		<!-- Social Column -->
		<div class="footer-social">
			<p class="footer-nav-title">Síguenos</p>
			<ul role="list">
				{#each socialLinks as link}
					<li>
						<a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
							<span aria-hidden="true">[{link.icon}]</span> {link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- Legal -->
	<div class="footer-legal">
		<div class="site-container">
			<p class="disclaimer">
				FIRST®, FIRST® Tech Challenge y FIRST® Robotics Competition son marcas registradas de For
				Inspiration and Recognition of Science and Technology (FIRST). Velocity Bucks #39347 es un
				equipo independiente.
			</p>
			<p class="copyright">© {year} Velocity Bucks #39347. Todos los derechos reservados.</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		border-top: var(--border-steel);
		background: #1a1a1a;
	}

	.footer-inner {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
		padding-block: 3rem;
	}

	@media (min-width: 640px) {
		.footer-inner {
			grid-template-columns: 2fr 1fr 1fr;
		}
	}

	/* Brand */
	.footer-brand {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.footer-logo {
		display: flex;
		align-items: center;
		gap: 0.625rem;
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
		clip-path: var(--clip-angle-both);
		flex-shrink: 0;
	}

	.footer-name {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 0.95rem;
		color: #fff;
		margin: 0;
		line-height: 1.2;
	}

	.footer-number {
		font-size: 0.7rem;
		color: var(--color-vb-gold);
		letter-spacing: 0.08em;
		margin: 0;
	}

	.footer-tagline {
		font-size: 0.875rem;
		color: var(--color-vb-steel);
		font-style: italic;
		margin: 0;
	}

	/* Nav columns */
	.footer-nav-title {
		font-family: var(--font-display);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-vb-gold);
		margin: 0 0 1rem;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	a {
		font-size: 0.875rem;
		color: var(--color-vb-steel);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	a:hover {
		color: var(--color-vb-gold);
	}

	.footer-social {
		display: flex;
		flex-direction: column;
	}

	/* Legal */
	.footer-legal {
		border-top: var(--border-steel);
		padding-block: 1.5rem;
	}

	.disclaimer {
		font-size: 0.75rem;
		color: rgba(174, 179, 184, 0.6);
		line-height: 1.6;
		margin: 0 0 0.5rem;
		max-width: 72ch;
	}

	.copyright {
		font-size: 0.75rem;
		color: rgba(174, 179, 184, 0.4);
		margin: 0;
		font-family: var(--font-mono);
	}
</style>

