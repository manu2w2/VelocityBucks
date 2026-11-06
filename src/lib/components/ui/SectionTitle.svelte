<script lang="ts">
	/**
	 * SectionTitle — Jerarquía tipográfica oficial Velocity Bucks
	 *
	 * Estructura visual basada en el manual de identidad:
	 *   TÍTULO GRANDE    ← Rajdhani Light, all-caps, tracking amplio (eyebrow o title)
	 *   SUBTÍTULO DORADO ← Chakra Petch Bold, uppercase, color gold (accent)
	 *   Párrafo cuerpo   ← Montserrat Regular, color steel
	 */

	interface Props {
		/** Label pequeño sobre el título — Chakra Petch, dorado, tracking */
		eyebrow?: string;
		/** Título principal — Rajdhani Light, all-caps, tracking amplio */
		title: string;
		/** Subtítulo dorado bold — Chakra Petch Bold, uppercase, gold */
		accent?: string;
		/** Párrafo descriptivo — Montserrat Regular */
		subtitle?: string;
		align?: 'left' | 'center';
	}

	let { eyebrow, title, accent, subtitle, align = 'left' }: Props = $props();
</script>

<div class="section-title" class:center={align === 'center'}>
	{#if eyebrow}
		<p class="eyebrow">{eyebrow}</p>
	{/if}

	<!-- H1-style: Rajdhani, all-caps, tracking amplio — como "OUR ROBOT", "IMPACT" -->
	<p class="title-display">{title}</p>

	{#if accent}
		<!-- H2-style: Chakra Petch Bold, gold — como "PROCESO DE INGENIERÍA", "BEYOND ROBOTICS" -->
		<p class="title-accent">{accent}</p>
	{/if}

	{#if subtitle}
		<p class="title-subtitle">{subtitle}</p>
	{/if}
</div>

<style>
	.section-title {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.section-title.center {
		align-items: center;
		text-align: center;
	}

	/* Eyebrow — Chakra Petch, dorado, tracking, uppercase */
	.eyebrow {
		font-family: var(--font-accent);
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-vb-gold);
		margin: 0;
	}

	/* Título principal — Rajdhani Light, all-caps, tracking amplio */
	.title-display {
		font-family: var(--font-display);
		font-weight: 300;
		font-size: clamp(2rem, 5vw, 3.5rem);
		line-height: 1;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #fff;
		margin: 0;
	}

	/* Subtítulo dorado — Chakra Petch Bold, gold, uppercase */
	.title-accent {
		font-family: var(--font-accent);
		font-weight: 700;
		font-size: clamp(0.9rem, 1.8vw, 1.2rem);
		line-height: 1.1;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--color-vb-gold);
		margin: 0;
	}

	/* Párrafo descriptivo — Montserrat */
	.title-subtitle {
		font-family: var(--font-body);
		font-size: 0.95rem;
		color: var(--color-vb-steel);
		line-height: 1.7;
		margin: 0.5rem 0 0;
		max-width: 56ch;
	}

	.center .title-subtitle {
		max-width: 48ch;
	}
</style>
