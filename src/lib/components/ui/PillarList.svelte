<script lang="ts">
	import Icon, { type IconName } from './Icon.svelte';

	/**
	 * PillarList — Lista indexada de pilares de trabajo (01–06).
	 * Sustituye las tarjetas con emoji por numeración + icono de línea.
	 */
	interface Pillar {
		id: string;
		title: string;
		description: string;
		icon: string;
	}

	interface Props {
		pillars: Pillar[];
	}

	let { pillars }: Props = $props();
</script>

<ol class="pillars" role="list">
	{#each pillars as pillar, i (pillar.id)}
		<li class="pillar">
			<div class="meta">
				<span class="vb-index num">{String(i + 1).padStart(2, '0')}</span>
				<Icon name={pillar.icon as IconName} size={28} class="pillar-icon" />
			</div>
			<h3 class="vb-title">{pillar.title}</h3>
			<p class="desc">{pillar.description}</p>
		</li>
	{/each}
</ol>

<style>
	.pillars {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-8) var(--gutter);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media (min-width: 640px) {
		.pillars { grid-template-columns: repeat(2, 1fr); }
	}

	@media (min-width: 1024px) {
		.pillars { grid-template-columns: repeat(3, 1fr); }
	}

	.pillar {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding-top: var(--space-5);
		border-top: 1px solid var(--line-strong);
	}

	/* Pestaña oro sobre el filete: marca de índice */
	.pillar::before {
		content: '';
		position: absolute;
		top: -2px;
		left: 0;
		width: 2rem;
		height: 3px;
		background: var(--color-vb-gold);
	}

	.meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--space-2);
	}

	.num {
		font-size: var(--text-small);
		color: var(--color-vb-gold);
	}

	.meta :global(.pillar-icon) {
		color: var(--color-vb-gold);
	}

	.desc {
		font-size: 0.9375rem;
		max-width: 40ch;
	}
</style>
