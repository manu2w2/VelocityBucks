<script lang="ts">
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
	import pillars from '#lib/data/pillars.json';
	import team from '#lib/data/team.json';
</script>

<svelte:head>
	<title>Nosotros — Velocity Bucks #39347</title>
	<meta name="description" content="Conoce al equipo Velocity Bucks #39347. Nuestra historia, pilares de trabajo y el roster de ingenieros, diseñadores y líderes." />
</svelte:head>

<!-- Historia -->
<section class="section-padding" aria-label="Nuestra historia">
	<div class="site-container">
		<SectionTitle
			eyebrow="Nuestros orígenes"
			title="Nuestra Historia"
			accent="Velocity Bucks #39347"
			subtitle="Debutamos formalmente como #39347 con experiencia acumulada y una visión clara: competir al más alto nivel desde el primer día."
		/>

		<div class="historia-content">
			<p>
				Velocity Bucks #39347 nace de la experiencia colectiva de un grupo de jóvenes apasionados por la robótica con trayectoria previa en FIRST. Aunque el número de equipo es nuevo, nuestra filosofía de trabajo y nuestro compromiso con la excelencia técnica no lo son.
			</p>
			<p>
				Este año marcamos el inicio de una nueva era: una entidad estructurada, profesional y con metas claras tanto dentro como fuera de la cancha de juego.
			</p>
		</div>
	</div>
</section>

<!-- Pilares de Trabajo -->
<section class="section-padding pillars-bg" aria-label="Pilares de trabajo">
	<div class="site-container">
		<SectionTitle
			eyebrow="Nuestra cultura"
			title="Pilares de Trabajo"
			accent="Seis principios fundamentales"
			align="center"
		/>

		<div class="pillars-grid">
			{#each pillars as pillar}
				<article class="pillar-card">
					<span class="pillar-icon" aria-hidden="true">{pillar.icon}</span>
					<h3>{pillar.title}</h3>
					<p>{pillar.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Roster -->
<section class="section-padding" aria-label="Equipo">
	<div class="site-container">
		<SectionTitle
			eyebrow="El equipo"
			title="Quiénes Somos"
			accent="Talento e ingeniería"
			subtitle="Estudiantes y mentores unidos por la ingeniería, la innovación y el impacto comunitario."
		/>

		<div class="roster-grid">
			{#each team.members as member}
				<article class="roster-card">
					<div class="roster-avatar" aria-hidden="true">
						{member.name.charAt(0)}
					</div>
					<div>
						<h3 class="roster-name">{member.name}</h3>
						<p class="roster-role">{member.role}</p>
						<span class="roster-area">{member.area}</span>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.historia-content {
		margin-top: 2.5rem;
		max-width: 64ch;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.historia-content p {
		color: var(--color-vb-steel);
		line-height: 1.8;
		font-size: 1.05rem;
	}

	.pillars-bg {
		background: rgba(208, 181, 73, 0.02);
		border-block: var(--border-steel);
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.5rem;
		margin-top: 3rem;
	}

	.pillar-card {
		padding: 2rem 1.5rem;
		border: var(--border-steel);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: border-color var(--transition-base);
		clip-path: var(--clip-slash-sm);
	}

	.pillar-card:hover {
		border-color: rgba(208, 181, 73, 0.4);
	}

	.pillar-icon { font-size: 1.75rem; }

	.pillar-card h3 {
		font-size: 1rem;
		font-weight: 600;
		color: #fff;
		margin: 0;
	}

	.pillar-card p {
		font-size: 0.875rem;
		color: var(--color-vb-steel);
		line-height: 1.6;
		margin: 0;
	}

	.roster-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.5rem;
		margin-top: 3rem;
	}

	.roster-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.5rem;
		border: var(--border-steel);
		background: rgba(255,255,255,0.02);
		transition: border-color var(--transition-base);
	}

	.roster-card:hover {
		border-color: rgba(208, 181, 73, 0.3);
	}

	.roster-avatar {
		display: grid;
		place-items: center;
		width: 3rem;
		height: 3rem;
		background: rgba(208, 181, 73, 0.15);
		color: var(--color-vb-gold);
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.1rem;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.roster-name {
		font-size: 0.95rem;
		font-weight: 600;
		color: #fff;
		margin: 0 0 0.2rem;
	}

	.roster-role {
		font-size: 0.8rem;
		color: var(--color-vb-steel);
		margin: 0 0 0.4rem;
	}

	.roster-area {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-vb-gold);
		background: rgba(208, 181, 73, 0.1);
		padding: 0.15rem 0.5rem;
		border-radius: 2px;
	}
</style>

