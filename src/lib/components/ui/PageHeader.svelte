<script lang="ts">
	/**
	 * PageHeader — Entrada común de las páginas interiores.
	 * Índice de sección + par título/acento a la izquierda, entradilla a la derecha,
	 * cerrado por un filete técnico con segmento oro.
	 */
	interface Props {
		/** Número de sección, p. ej. "01" */
		index: string;
		eyebrow: string;
		title: string;
		accent?: string;
		subtitle?: string;
	}

	let { index, eyebrow, title, accent, subtitle }: Props = $props();
</script>

<header class="page-header">
	<div class="site-container">
		<div class="grid">
			<div class="main">
				<p class="vb-eyebrow">
					<span class="vb-index index">{index}</span>
					<span class="sep" aria-hidden="true">/</span>
					{eyebrow}
				</p>
				<div class="pair">
					<h1 class="vb-display vb-display--l">{title}</h1>
					{#if accent}<p class="vb-accent">{accent}</p>{/if}
				</div>
			</div>

			{#if subtitle}
				<p class="vb-lead lead">{subtitle}</p>
			{/if}
		</div>

		<div class="rule" aria-hidden="true"></div>
	</div>
</header>

<style>
	.page-header {
		padding-top: clamp(3.5rem, 9vw, 7rem);
	}

	.grid {
		display: grid;
		gap: var(--space-6);
		padding-bottom: clamp(2.5rem, 5vw, 4rem);
	}

	@media (min-width: 1024px) {
		.grid {
			grid-template-columns: 7fr 5fr;
			align-items: end;
			gap: var(--gutter);
		}
	}

	.main {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.pair {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.index {
		color: var(--text-primary);
	}

	.sep {
		color: var(--text-subtle);
	}

	.lead {
		max-width: 46ch;
	}

	/* Filete técnico con segmento oro */
	.rule {
		position: relative;
		height: 1px;
		background: var(--line-subtle);
	}

	.rule::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 4.5rem;
		height: 3px;
		background: var(--color-vb-gold);
	}
</style>
