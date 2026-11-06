<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from './Icon.svelte';

	interface Props {
		variant?: 'primary' | 'ghost' | 'outline';
		href?: string;
		size?: 'sm' | 'md' | 'lg';
		type?: 'button' | 'submit';
		disabled?: boolean;
		/** Flecha de dirección al final del texto */
		arrow?: boolean;
		/** Ocupa todo el ancho disponible */
		block?: boolean;
		children: Snippet;
		[key: string]: unknown;
	}

	let {
		variant = 'primary',
		href,
		size = 'md',
		type = 'button',
		disabled = false,
		arrow = false,
		block = false,
		children,
		...rest
	}: Props = $props();
</script>

{#snippet inner()}
	<span class="label">{@render children()}</span>
	{#if arrow}<Icon name="arrow-right" size={18} strokeWidth={1.8} class="btn-arrow" />{/if}
{/snippet}

{#if href}
	<a {href} class="btn vb-chamfer btn-{variant} btn-{size}" class:block {...rest}>
		{@render inner()}
	</a>
{:else}
	<button {type} {disabled} class="btn vb-chamfer btn-{variant} btn-{size}" class:block {...rest}>
		{@render inner()}
	</button>
{/if}

<style>
	/* Una sola forma para todas las variantes: bisel inferior derecho */
	.btn {
		--chamfer: var(--chamfer-sm);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-3);
		font-family: var(--font-accent);
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		line-height: 1;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		border: none;
		background: none;
		transition: color var(--transition-fast);
	}

	.block {
		display: flex;
		width: 100%;
	}

	/* Tamaños — md y lg cumplen 44px de área táctil */
	.btn-sm { min-height: 2.5rem; padding-inline: 1.125rem; font-size: 0.75rem; }
	.btn-md { min-height: 2.875rem; padding-inline: 1.5rem; font-size: 0.8125rem; }
	.btn-lg { min-height: 3.375rem; padding-inline: 2rem; font-size: 0.875rem; }

	/* Primario — relleno oro, el color principal del equipo */
	.btn-primary {
		--chamfer-fill: var(--color-vb-gold);
		--chamfer-line: var(--color-vb-gold);
		color: var(--text-on-gold);
	}
	.btn-primary:hover {
		--chamfer-fill: var(--color-vb-gold-light);
		--chamfer-line: var(--color-vb-gold-light);
	}

	/* Ghost — filete oro */
	.btn-ghost {
		--chamfer-line: var(--line-gold);
		color: var(--color-vb-gold);
	}
	.btn-ghost:hover {
		--chamfer-line: var(--color-vb-gold);
		--chamfer-fill: color-mix(in srgb, var(--color-vb-gold) 12%, var(--surface-current));
		color: var(--color-vb-gold-light);
	}

	/* Outline — filete acero, acción secundaria neutra */
	.btn-outline {
		--chamfer-line: var(--line-strong);
		color: var(--text-primary);
	}
	.btn-outline:hover {
		--chamfer-line: var(--color-vb-steel);
		--chamfer-fill: color-mix(in srgb, var(--color-vb-white) 6%, var(--surface-current));
	}

	.btn :global(.btn-arrow) {
		transition: transform var(--transition-fast);
	}
	.btn:hover :global(.btn-arrow) {
		transform: translateX(3px);
	}

	.btn:disabled {
		opacity: 0.45;
		pointer-events: none;
	}
</style>
