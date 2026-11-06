<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'ghost' | 'outline';
		href?: string;
		size?: 'sm' | 'md' | 'lg';
		type?: 'button' | 'submit';
		disabled?: boolean;
		children: Snippet;
		[key: string]: unknown;
	}

	let {
		variant = 'primary',
		href,
		size = 'md',
		type = 'button',
		disabled = false,
		children,
		...rest
	}: Props = $props();
</script>

{#if href}
	<a {href} class="btn btn-{variant} btn-{size}" {...rest}>
		{@render children()}
	</a>
{:else}
	<button {type} {disabled} class="btn btn-{variant} btn-{size}" {...rest}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-body);
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		border: none;
		transition:
			background var(--transition-fast),
			box-shadow var(--transition-fast),
			transform var(--transition-fast);
		letter-spacing: 0.01em;
		clip-path: var(--clip-slash-sm);
	}

	.btn:hover {
		transform: translateY(-1px);
	}

	.btn:active {
		transform: translateY(0);
	}

	/* Sizes */
	.btn-sm { padding: 0.4rem 1rem; font-size: 0.8rem; }
	.btn-md { padding: 0.65rem 1.5rem; font-size: 0.9rem; }
	.btn-lg { padding: 0.85rem 2rem; font-size: 1rem; }

	/* Variants */
	.btn-primary {
		background: var(--color-vb-gold);
		color: #222222;
	}
	.btn-primary:hover {
		background: var(--color-vb-gold-light);
		box-shadow: var(--shadow-gold-lg);
	}

	.btn-ghost {
		background: transparent;
		color: var(--color-vb-gold);
		border: var(--border-gold);
		clip-path: none;
		border-radius: 4px;
	}
	.btn-ghost:hover {
		background: rgba(208, 181, 73, 0.1);
		box-shadow: var(--shadow-gold);
	}

	.btn-outline {
		background: transparent;
		color: #fff;
		border: var(--border-steel);
		clip-path: none;
		border-radius: 4px;
	}
	.btn-outline:hover {
		border-color: rgba(255,255,255,0.4);
		background: rgba(255,255,255,0.05);
	}

	.btn:disabled {
		opacity: 0.4;
		pointer-events: none;
	}
</style>

