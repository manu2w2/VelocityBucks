<script lang="ts">
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
	import robotData from '#lib/data/robot.json';
</script>

<svelte:head>
	<title>Ingeniería — Velocity Bucks #39347</title>
	<meta name="description" content="Detalles del robot, proceso de ingeniería y especificaciones técnicas de Velocity Bucks #39347." />
</svelte:head>

<!-- Robot de la temporada -->
<section class="section-padding" aria-label="Robot de la temporada">
	<div class="site-container">
		<SectionTitle
			eyebrow="Temporada {robotData.season}"
			title="Our Robot"
			accent="Proceso de Ingeniería"
			subtitle="Diseño, iteración y manufactura de alto rendimiento para el desafío competitivo."
		/>

		<div class="specs-grid">
			<div class="spec-card">
				<p class="spec-label">Chasis</p>
				<p class="spec-val">{robotData.specs.chassis}</p>
			</div>
			<div class="spec-card">
				<p class="spec-label">Drivebase</p>
				<p class="spec-val">{robotData.specs.drivebase}</p>
			</div>
			<div class="spec-card">
				<p class="spec-label">Dimensiones</p>
				<p class="spec-val">{robotData.specs.dimensions}</p>
			</div>
			<div class="spec-card">
				<p class="spec-label">Peso Aprox.</p>
				<p class="spec-val">{robotData.specs.weight}</p>
			</div>
			<div class="spec-card">
				<p class="spec-label">Sistema de Visión</p>
				<p class="spec-val">{robotData.specs.vision}</p>
			</div>
			<div class="spec-card">
				<p class="spec-label">Control</p>
				<p class="spec-val">{robotData.specs.control}</p>
			</div>
			<div class="spec-card">
				<p class="spec-label">Software / Control de Trayectoria</p>
				<p class="spec-val">{robotData.specs.software}</p>
			</div>
			<div class="spec-card">
				<p class="spec-label">Mecanismos Principales</p>
				<p class="spec-val">{robotData.specs.mechanisms.join(', ')}</p>
			</div>
		</div>
	</div>
</section>

<!-- Proceso de ingeniería -->
<section class="section-padding process-bg" aria-label="Ciclo de desarrollo">
	<div class="site-container">
		<SectionTitle
			eyebrow="Metodología"
			title="Ciclo de Ingeniería"
			accent="De la idea a la competencia"
			subtitle="Un proceso iterativo riguroso que garantiza solidez en la cancha."
			align="center"
		/>

		<div class="process-steps">
			{#each robotData.process_steps as step}
				<div class="step-card">
					<span class="step-num">{step.step}</span>
					<div class="step-content">
						<h3>{step.title}</h3>
						<p>{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.specs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.5rem;
		margin-top: 3rem;
	}

	.spec-card {
		padding: 1.5rem;
		border: var(--border-steel);
		background: rgba(255, 255, 255, 0.02);
	}

	.spec-label {
		font-family: var(--font-accent);
		font-size: 0.7rem;
		font-weight: 500;
		color: var(--color-vb-gold);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin: 0 0 0.5rem;
	}

	.spec-val {
		font-family: var(--font-body);
		font-size: 0.95rem;
		color: #fff;
		margin: 0;
	}

	.process-bg {
		background: rgba(208, 181, 73, 0.02);
		border-top: var(--border-steel);
	}

	.process-steps {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin-top: 3rem;
		max-width: 800px;
		margin-inline: auto;
	}

	.step-card {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		padding: 1.5rem;
		border: var(--border-steel);
		background: #1a1a1a;
		clip-path: var(--clip-slash-sm);
	}

	.step-num {
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-vb-gold);
		line-height: 1;
	}

	.step-content h3 {
		margin: 0 0 0.4rem;
	}

	.step-content p {
		margin: 0;
		font-size: 0.9rem;
	}
</style>

