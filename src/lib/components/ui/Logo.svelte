<script lang="ts">
	import { asset } from '$app/paths';
	import { i18n } from '#lib/i18n.svelte.ts';

	/**
	 * Logo — Fuente única del logotipo (header, footer, hero, dossier).
	 * Isotipo oficial (cabeza de ciervo sobre oro) dentro del marco biselado de la marca.
	 */
	interface Props {
		size?: 'sm' | 'xl';
		showText?: boolean;
		/** Si el logo es decorativo (p. ej. dentro de un enlace con aria-label) */
		decorative?: boolean;
	}

	let { size = 'sm', showText = true, decorative = false }: Props = $props();
</script>

<span class="logo logo-{size}">
	<span class="mark">
		<img
			src={asset(size === 'xl' ? 'brand/logo-480.webp' : 'brand/logo-128.webp')}
			alt={decorative || showText ? '' : i18n.t.logoAlt}
			width={size === 'xl' ? 480 : 128}
			height={size === 'xl' ? 480 : 128}
			loading={size === 'xl' ? 'eager' : undefined}
			decoding="async"
		/>
	</span>
	{#if showText}
		<span class="text">
			<span class="name">Velocity Bucks</span>
			<span class="number">FTC #39347</span>
		</span>
	{/if}
</span>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: var(--space-3);
	}

	/* Marco biselado original del isotipo */
	.mark {
		display: block;
		flex-shrink: 0;
		background: var(--color-vb-gold);
		clip-path: polygon(0 0, 96% 0, 100% 4%, 100% 100%, 4% 100%, 0 96%);
	}

	.mark img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.logo-sm .mark {
		width: 2.5rem;
		height: 2.5rem;
	}

	.logo-xl .mark {
		width: clamp(9rem, 20vw, 16rem);
		height: clamp(9rem, 20vw, 16rem);
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		line-height: 1;
	}

	.name {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.05rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-primary);
	}

	.number {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: 0.12em;
		color: var(--color-vb-gold);
	}
</style>
