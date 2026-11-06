<script lang="ts">
	import PageHeader from '#lib/components/ui/PageHeader.svelte';
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
	import PillarList from '#lib/components/ui/PillarList.svelte';
	import PhotoPlaceholder from '#lib/components/ui/PhotoPlaceholder.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { i18n, pad } from '#lib/i18n.svelte.ts';

	const t = $derived(i18n.t);
	const a = $derived(t.about);
	const groups = $derived([
		{ id: 'students', label: a.roster.students, people: a.members },
		{ id: 'mentors', label: a.roster.mentors, people: a.mentors }
	]);
</script>

<Seo title={a.seo.title} description={a.seo.description} />

<PageHeader index="01" {...a.header} />

<!-- Historia -->
<section class="section-padding" aria-label={a.historyLabel}>
	<div class="site-container historia">
		<div class="historia-text">
			{#each a.history as paragraph (paragraph)}
				<p>{paragraph}</p>
			{/each}
		</div>

		<PhotoPlaceholder label={a.teamPhoto} ratio="4 / 3" />
	</div>
</section>

<!-- Pilares de Trabajo -->
<section class="section-padding surface-sunken" aria-labelledby="pilares-title">
	<div class="site-container">
		<SectionTitle id="pilares-title" {...a.pillars} />
		<div class="section-body">
			<PillarList pillars={t.pillars} />
		</div>
	</div>
</section>

<!-- Roster -->
<section class="section-padding" aria-labelledby="equipo-title">
	<div class="site-container">
		<SectionTitle
			id="equipo-title"
			eyebrow={a.roster.eyebrow}
			title={a.roster.title}
			accent={a.roster.accent}
			subtitle={a.roster.subtitle}
		/>

		{#each groups as group (group.id)}
			<div class="roster-group section-body">
				<h3 class="group-title">
					{group.label}
					<span class="vb-index group-count">{pad(group.people.length)}</span>
				</h3>

				<ul class="roster" role="list">
					{#each group.people as person (person.name)}
						<li class="person">
							<PhotoPlaceholder label={t.common.photo} ratio="4 / 5" icon="user" compact />
							<div class="person-info">
								<span class="person-area">{person.area}</span>
								<h4 class="vb-title person-name">{person.name}</h4>
								<p class="person-role">{person.role}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	/* ── Historia: texto editorial + espacio para foto ── */
	.historia {
		display: grid;
		gap: var(--space-8);
		align-items: center;
	}

	@media (min-width: 768px) {
		.historia {
			grid-template-columns: 1fr 1fr;
			gap: clamp(2rem, 6vw, 6rem);
		}
	}

	.historia-text {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		max-width: 60ch;
	}

	.historia-text p {
		font-size: var(--text-body-l);
		line-height: 1.8;
	}

	.historia-text p:first-child {
		color: var(--text-primary);
	}

	/* ── Roster ── */
	.group-title {
		display: flex;
		align-items: baseline;
		gap: var(--space-3);
		padding-bottom: var(--space-4);
		margin-bottom: var(--space-6);
		border-bottom: 1px solid var(--line-subtle);
		font-size: var(--text-small);
		letter-spacing: var(--tracking-label);
		color: var(--text-primary);
	}

	.group-count {
		font-size: var(--text-label);
		color: var(--color-vb-gold);
	}

	.roster {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-8) var(--space-5);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media (min-width: 768px) {
		.roster { grid-template-columns: repeat(3, 1fr); }
	}

	@media (min-width: 1024px) {
		.roster { grid-template-columns: repeat(5, 1fr); }
	}

	.person {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.person-info {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.person-area {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--color-vb-gold);
	}

	.person-name {
		font-size: 1rem;
	}

	.person-role {
		font-size: var(--text-small);
		line-height: 1.5;
	}
</style>
