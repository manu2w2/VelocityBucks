<script lang="ts">
	import { i18n } from '#lib/i18n.svelte.ts';
	import type { Metric } from '#lib/content/es.ts';

	/**
	 * StatStrip — Franja continua de métricas separadas por filetes.
	 * Un valor `null` se muestra como placeholder ("—" + "Dato pendiente").
	 */
	interface Props {
		items: Metric[];
		label: string;
	}

	let { items, label }: Props = $props();
</script>

<section class="stats surface-sunken" aria-label={label}>
	<div class="site-container">
		<dl class="grid">
			{#each items as stat (stat.label)}
				<div class="stat" class:pending={stat.value === null}>
					<dt class="label">{stat.label}</dt>
					<dd class="value">
						{#if stat.value === null}
							<span class="dash" aria-hidden="true">—</span>
							<span class="note">{i18n.t.common.pendingData}</span>
						{:else}
							<span
								>{#if stat.prefix}<span class="prefix">{stat.prefix}</span>{/if}{stat.value}{#if stat.suffix}<span
										class="suffix">{stat.suffix}</span
									>{/if}</span
							>
						{/if}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<style>
	.stats {
		border-block: 1px solid var(--line-subtle);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1px;
		margin: 0;
		background: var(--line-subtle);
	}

	@media (min-width: 768px) {
		.grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.stat {
		display: flex;
		flex-direction: column-reverse;
		justify-content: flex-end;
		gap: var(--space-2);
		padding: clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 1.75rem);
		background: var(--surface-sunken);
	}

	.value {
		display: flex;
		align-items: baseline;
		gap: var(--space-3);
		margin: 0;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(2.25rem, 4vw + 0.5rem, 3.75rem);
		line-height: 1;
		letter-spacing: 0.03em;
		font-variant-numeric: tabular-nums;
		color: var(--color-vb-gold);
	}

	.prefix {
		margin-right: 0.05em;
		color: var(--text-subtle);
		font-weight: 400;
	}

	.suffix {
		margin-left: 0.04em;
		font-size: 0.6em;
	}

	.label {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--text-muted);
	}

	/* Placeholder de dato pendiente */
	.dash {
		font-weight: 300;
		color: var(--text-subtle);
	}

	.note {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-subtle);
		padding: 0.2rem 0.5rem;
		border: 1px dashed var(--line-strong);
		white-space: nowrap;
	}
</style>
