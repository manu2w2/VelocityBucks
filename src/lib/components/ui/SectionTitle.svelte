<script lang="ts">
	/**
	 * SectionTitle — Jerarquía tipográfica oficial Velocity Bucks
	 *   eyebrow  ← Chakra Petch, dorado, con guion técnico
	 *   TÍTULO   ← Rajdhani Light, all-caps, tracking amplio (h1/h2 real)
	 *   ACENTO   ← Chakra Petch Bold, dorado
	 *   párrafo  ← Montserrat, acero
	 */
	interface Props {
		eyebrow?: string;
		title: string;
		accent?: string;
		subtitle?: string;
		align?: 'left' | 'center';
		/** Nivel semántico del título */
		level?: 'h1' | 'h2';
		/** id del título, para aria-labelledby en la sección */
		id?: string;
	}

	let { eyebrow, title, accent, subtitle, align = 'left', level = 'h2', id }: Props = $props();
</script>

<div class="section-title" class:center={align === 'center'}>
	{#if eyebrow}
		<p class="vb-eyebrow">{eyebrow}</p>
	{/if}

	<div class="pair">
		<svelte:element
			this={level}
			{id}
			class="vb-display {level === 'h1' ? 'vb-display--l' : 'vb-display--m'}"
		>
			{title}
		</svelte:element>

		{#if accent}
			<p class="vb-accent">{accent}</p>
		{/if}
	</div>

	{#if subtitle}
		<p class="vb-lead subtitle">{subtitle}</p>
	{/if}
</div>

<style>
	.section-title {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-5);
	}

	.pair {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.center {
		align-items: center;
		text-align: center;
	}

	.center .subtitle {
		max-width: 50ch;
	}
</style>
