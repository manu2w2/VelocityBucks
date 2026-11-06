<script lang="ts">
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
</script>

<svelte:head>
	<title>Impacto STEM — Velocity Bucks #39347</title>
	<meta name="description" content="Iniciativas comunitarias, talleres y proyectos de divulgación STEM de Velocity Bucks #39347." />
</svelte:head>

<section class="section-padding" aria-label="Impacto social">
	<div class="site-container">
		<SectionTitle
			eyebrow="Outreach"
			title="Impact"
			accent="Beyond Robotics"
			subtitle="Nuestra misión trasciende la arena de competencia: inspiramos a las próximas generaciones de científicos e ingenieros."
		/>

		<div class="impact-grid">
			<article class="impact-card">
				<div class="impact-tag">Educación</div>
				<h3>Talleres Comunitarios STEM</h3>
				<p>
					Acercamos la robótica, programación e impresión 3D a escuelas públicas y centros juveniles, democratizando el acceso a herramientas tecnológicas.
				</p>
			</article>

			<article class="impact-card">
				<div class="impact-tag">Comunidad</div>
				<h3>Mentoría y Difusión FIRST</h3>
				<p>
					Asesoramos a equipos novatos en diseño mecánico, programación en Java y gestión de equipo para fortalecer el ecosistema FTC en nuestra región.
				</p>
			</article>

			<article class="impact-card">
				<div class="impact-tag">Innovación</div>
				<h3>More Than Robots</h3>
				<p>
					Promovemos los valores de FIRST: Gracious Professionalism y Coopertition, demostrando que la competencia y el compañerismo van de la mano.
				</p>
			</article>
		</div>
	</div>
</section>

<style>
	.impact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-top: 3rem;
	}

	.impact-card {
		padding: 2.5rem 2rem;
		border: var(--border-steel);
		background: #1a1a1a;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		clip-path: var(--clip-slash-sm);
		transition: border-color var(--transition-base);
	}

	.impact-card:hover {
		border-color: rgba(208, 181, 73, 0.4);
	}

	.impact-tag {
		font-family: var(--font-accent);
		font-size: 0.7rem;
		font-weight: 600;
		color: var(--color-vb-gold);
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.impact-card h3 {
		margin: 0;
		color: #fff;
		font-size: 1.2rem;
	}

	.impact-card p {
		margin: 0;
		color: var(--color-vb-steel);
		line-height: 1.7;
	}
</style>

