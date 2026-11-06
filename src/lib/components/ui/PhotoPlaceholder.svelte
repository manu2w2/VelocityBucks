<script lang="ts">
	import Icon, { type IconName } from './Icon.svelte';

	/**
	 * PhotoPlaceholder — Reserva el espacio de una foto o render que aún no existe.
	 * Marco técnico con marcas de corte; se sustituye por <img> cuando haya material.
	 */
	interface Props {
		/** Qué irá aquí, p. ej. "Foto del equipo" */
		label: string;
		/** Relación de aspecto CSS, p. ej. "4 / 3" */
		ratio?: string;
		icon?: IconName;
		compact?: boolean;
	}

	let { label, ratio = '4 / 3', icon = 'camera', compact = false }: Props = $props();
</script>

<div class="placeholder vb-chamfer" class:compact style:aspect-ratio={ratio} aria-hidden="true">
	<span class="corner tl"></span>
	<span class="corner tr"></span>
	<span class="corner bl"></span>

	<span class="content">
		<Icon name={icon} size={compact ? 22 : 30} strokeWidth={1.4} />
		<span class="label">{label}</span>
	</span>
</div>

<style>
	.placeholder {
		--chamfer: var(--chamfer-md);
		--chamfer-fill: var(--surface-sunken);
		--chamfer-line: var(--line-subtle);
		display: grid;
		place-items: center;
		width: 100%;
		overflow: hidden;
	}

	/* Rayado a 45°: mismo ángulo que el bisel de la marca */
	.placeholder::after {
		background:
			repeating-linear-gradient(-45deg, transparent 0 14px, rgba(174, 179, 184, 0.05) 14px 15px),
			var(--chamfer-fill);
	}

	.corner {
		position: absolute;
		width: 14px;
		height: 14px;
		border-color: var(--line-gold);
		border-style: solid;
		border-width: 0;
	}

	.tl { top: 10px; left: 10px; border-top-width: 1px; border-left-width: 1px; }
	.tr { top: 10px; right: 10px; border-top-width: 1px; border-right-width: 1px; }
	.bl { bottom: 10px; left: 10px; border-bottom-width: 1px; border-left-width: 1px; }

	.content {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-4);
		text-align: center;
		color: var(--text-subtle);
	}

	.label {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 500;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		line-height: 1.3;
	}

	.compact .content {
		gap: var(--space-2);
	}

	.compact .corner {
		width: 10px;
		height: 10px;
	}
</style>
