<script lang="ts">
	/**
	 * BuckMark — Cabeza de buck geométrica (mismo trazo angular que la marca).
	 * Usada por el minijuego de Deerseeker y el easter egg.
	 */
	interface Props {
		size?: number | string;
		class?: string;
	}

	let { size = 48, class: className = '' }: Props = $props();
</script>

<svg
	class={className}
	width={size}
	height={size}
	viewBox="0 0 48 48"
	fill="none"
	aria-hidden="true"
	focusable="false"
>
	<!-- Astas -->
	<g stroke="currentColor" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="miter">
		<path d="M20 20 L16 10 L12 3 M16 10 L8 8 M18 15 L20 6" />
		<path d="M28 20 L32 10 L36 3 M32 10 L40 8 M30 15 L28 6" />
	</g>
	<!-- Orejas -->
	<path d="M18.5 21 L8 17 L15 26 Z" fill="currentColor" opacity="0.75" />
	<path d="M29.5 21 L40 17 L33 26 Z" fill="currentColor" opacity="0.75" />
	<!-- Cara -->
	<path d="M17 19 H31 L29 33 L24 44 L19 33 Z" fill="currentColor" />
	<!-- Ojos y hocico -->
	<rect x="19.5" y="25" width="2.4" height="2.4" fill="var(--buck-ink, #222)" />
	<rect x="26.1" y="25" width="2.4" height="2.4" fill="var(--buck-ink, #222)" />
	<path d="M22 39 H26 L24 43 Z" fill="var(--buck-ink, #222)" />
</svg>
