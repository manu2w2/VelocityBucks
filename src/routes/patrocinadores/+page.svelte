<script lang="ts">
	import Button from '#lib/components/ui/Button.svelte';
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
	import sponsorsData from '#lib/data/sponsors.json';
</script>

<svelte:head>
	<title>Patrocinadores — Velocity Bucks #39347</title>
	<meta name="description" content="Conviértete en patrocinador de Velocity Bucks #39347 y apoya el talento joven en ciencia y tecnología." />
</svelte:head>

<!-- Tiers de patrocinio -->
<section class="section-padding" aria-label="Niveles de patrocinio">
	<div class="site-container">
		<SectionTitle
			eyebrow="Alianzas Estratégicas"
			title="Community"
			accent="More than Robots"
			subtitle="El patrocinio es una inversión directa en el talento STEM del futuro. Descubre los beneficios para tu organización."
		/>

		<div class="tiers-grid">
			{#each sponsorsData.tiers as tier}
				<article class="tier-card tier-{tier.id}">
					<div class="tier-header">
						<span class="tier-badge">{tier.id}</span>
						<h3>{tier.name}</h3>
						<p class="tier-desc">{tier.description}</p>
					</div>
					<ul class="tier-benefits" role="list">
						{#each tier.benefits as benefit}
							<li>
								<span class="check-icon" aria-hidden="true">✔</span>
								<span>{benefit}</span>
							</li>
						{/each}
					</ul>
					<div class="tier-action">
						<Button href="#contacto" variant={tier.id === 'platinum' ? 'primary' : 'ghost'} size="sm">
							Patrocinar
						</Button>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Formulario de contacto -->
<section class="section-padding contact-bg" id="contacto" aria-label="Contacto para patrocinadores">
	<div class="site-container contact-container">
		<SectionTitle
			eyebrow="Únete a nosotros"
			title="Contacto"
			accent="Hagamos equipo"
			subtitle="Escríbenos para conocer más sobre nuestro programa de patrocinio o resolver cualquier duda."
			align="center"
		/>

		<form class="contact-form" onsubmit={(e) => e.preventDefault()}>
			<div class="form-group">
				<label for="name">Nombre / Empresa</label>
				<input type="text" id="name" placeholder="Tu nombre o empresa" required />
			</div>
			<div class="form-group">
				<label for="email">Correo Electrónico</label>
				<input type="email" id="email" placeholder="correo@ejemplo.com" required />
			</div>
			<div class="form-group">
				<label for="message">Mensaje</label>
				<textarea id="message" rows="4" placeholder="¿En qué nivel o forma te gustaría colaborar?" required></textarea>
			</div>
			<div class="form-submit">
				<Button type="submit" variant="primary" size="md">Enviar Mensaje</Button>
			</div>
		</form>
	</div>
</section>

<style>
	.tiers-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-top: 3rem;
	}

	.tier-card {
		padding: 2.5rem 2rem;
		border: var(--border-steel);
		background: #1a1a1a;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1.5rem;
		clip-path: var(--clip-slash-sm);
	}

	.tier-platinum {
		border-color: var(--color-vb-gold);
		background: rgba(208, 181, 73, 0.04);
	}

	.tier-badge {
		font-family: var(--font-accent);
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--color-vb-gold);
		display: block;
		margin-bottom: 0.25rem;
	}

	.tier-card h3 {
		font-size: 1.5rem;
		margin: 0 0 0.5rem;
		color: #fff;
	}

	.tier-desc {
		font-size: 0.875rem;
		margin: 0;
	}

	.tier-benefits {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.tier-benefits li {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: var(--color-vb-steel);
	}

	.check-icon {
		color: var(--color-vb-gold);
		font-weight: bold;
	}

	.tier-action {
		margin-top: 1rem;
	}

	.contact-bg {
		border-top: var(--border-steel);
		background: rgba(255, 255, 255, 0.01);
	}

	.contact-container {
		max-width: 650px;
	}

	.contact-form {
		margin-top: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.form-group label {
		font-family: var(--font-accent);
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-vb-gold);
	}

	.form-group input,
	.form-group textarea {
		padding: 0.75rem 1rem;
		background: #161616;
		border: var(--border-steel);
		color: #fff;
		font-family: var(--font-body);
		font-size: 0.9rem;
		border-radius: 2px;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		border-color: var(--color-vb-gold);
		outline: none;
	}

	.form-submit {
		margin-top: 0.5rem;
	}
</style>

