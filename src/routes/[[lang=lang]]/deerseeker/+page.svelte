<script lang="ts">
	import PageHeader from '#lib/components/ui/PageHeader.svelte';
	import SectionTitle from '#lib/components/ui/SectionTitle.svelte';
	import Icon, { type IconName } from '#lib/components/ui/Icon.svelte';
	import BuckMark from '#lib/components/ui/BuckMark.svelte';
	import BuckGame from '#lib/components/deerseeker/BuckGame.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { i18n, pad } from '#lib/i18n.svelte.ts';

	const d = $derived(i18n.t.deerseeker);
	const placeholderRows = 5;
</script>

<Seo title={d.seo.title} description={d.seo.description} />

<PageHeader index="07" {...d.header} />

<!-- Estado del proyecto + funciones planeadas -->
<section class="section-padding" aria-labelledby="features-title">
	<div class="site-container">
		<dl class="status">
			<div class="status-main">
				<span class="status-mark"><BuckMark size={40} /></span>
				<div>
					<dt>{d.status.label}</dt>
					<dd><span class="dot" aria-hidden="true"></span>{d.status.value}</dd>
				</div>
			</div>
			<div>
				<dt>{d.status.version}</dt>
				<dd>{d.status.versionValue}</dd>
			</div>
			<div>
				<dt>{d.status.release}</dt>
				<dd>{d.status.releaseValue}</dd>
			</div>
		</dl>

		<SectionTitle
			id="features-title"
			eyebrow={d.features.eyebrow}
			title={d.features.title}
			accent={d.features.accent}
		/>

		<ul class="features section-body" role="list">
			{#each d.features.items as item, i (item.title)}
				<li class="feature">
					<div class="feature-head">
						<Icon name={item.icon as IconName} size={26} strokeWidth={1.6} />
						<span class="vb-index">{pad(i + 1)}</span>
					</div>
					<h3 class="vb-title">{item.title}</h3>
					<p>{item.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Vista previa del tablero (placeholder) -->
<section class="section-padding surface-sunken" aria-labelledby="preview-title">
	<div class="site-container">
		<SectionTitle
			id="preview-title"
			eyebrow={d.preview.eyebrow}
			title={d.preview.title}
			accent={d.preview.accent}
		/>

		<div class="board section-body">
			<label class="search">
				<span class="sr-only">{d.preview.searchLabel}</span>
				<Icon name="target" size={18} strokeWidth={1.6} />
				<input type="search" placeholder={d.preview.searchPlaceholder} disabled />
			</label>

			<div class="table-wrap">
				<table>
					<caption class="sr-only">{d.preview.caption}</caption>
					<thead>
						<tr>
							{#each d.preview.columns as col (col)}
								<th scope="col">{col}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each { length: placeholderRows }, r (r)}
							<tr>
								<th scope="row">
									<span class="vb-index">#{pad(r + 1)}</span>
									<span class="row-label">{d.preview.rowLabel}</span>
								</th>
								{#each d.preview.columns.slice(1) as col (col)}
									<td><span class="bar" style:width="{40 + ((r * 17 + col.length * 7) % 50)}%"></span></td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<p class="note">{d.preview.note}</p>
		</div>
	</div>
</section>

<!-- Minijuego -->
<section class="section-padding" id="minijuego" aria-labelledby="game-title">
	<div class="site-container game-grid">
		<div class="game-text">
			<SectionTitle id="game-title" eyebrow={d.game.eyebrow} title={d.game.title} accent={d.game.accent} />
			<p class="vb-lead">{d.game.body}</p>
		</div>
		<BuckGame />
	</div>
</section>

<style>
	/* ── Estado ── */
	.status {
		display: grid;
		gap: var(--space-5);
		margin: 0 0 var(--section-gap);
		padding-bottom: var(--space-6);
		border-bottom: 1px solid var(--line-subtle);
	}

	@media (min-width: 768px) {
		.status {
			grid-template-columns: 2fr 1fr 1fr;
			align-items: end;
		}
	}

	.status > div {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.status .status-main {
		flex-direction: row;
		align-items: center;
		gap: var(--space-4);
	}

	.status-mark {
		display: grid;
		place-items: center;
		width: 4rem;
		height: 4rem;
		color: var(--color-vb-gold);
		border: 1px solid var(--line-gold);
		--buck-ink: var(--surface-base);
	}

	.status dt {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--text-subtle);
	}

	.status dd {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		margin: 0;
		font-family: var(--font-accent);
		font-size: var(--text-title);
		font-weight: 600;
		color: var(--text-primary);
	}

	.dot {
		width: 0.6rem;
		height: 0.6rem;
		background: var(--color-vb-gold);
		animation: blink 1.6s steps(2, jump-none) infinite;
	}

	@keyframes blink {
		50% { opacity: 0.25; }
	}

	/* ── Funciones ── */
	.features {
		display: grid;
		gap: var(--space-6) var(--gutter);
		margin-bottom: 0;
		padding: 0;
		list-style: none;
	}

	@media (min-width: 640px) {
		.features { grid-template-columns: repeat(2, 1fr); }
	}

	@media (min-width: 1024px) {
		.features { grid-template-columns: repeat(4, 1fr); }
	}

	.feature {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding-top: var(--space-5);
		border-top: 1px solid var(--line-strong);
	}

	.feature-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--color-vb-gold);
	}

	.feature p {
		margin: 0;
		font-size: var(--text-small);
	}

	/* ── Tablero ── */
	.board {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.search {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		max-width: 26rem;
		padding: 0 var(--space-4);
		min-height: 3rem;
		background: var(--surface-base);
		border: 1px solid var(--line-subtle);
		color: var(--text-subtle);
	}

	.search input {
		flex: 1;
		min-width: 0;
		background: none;
		border: none;
		color: var(--text-primary);
		font: inherit;
		font-size: var(--text-small);
	}

	.search input:disabled {
		cursor: not-allowed;
	}

	.table-wrap {
		overflow-x: auto;
		border: 1px solid var(--line-subtle);
	}

	table {
		width: 100%;
		min-width: 40rem;
		border-collapse: collapse;
		font-size: var(--text-small);
	}

	th,
	td {
		padding: var(--space-3) var(--space-4);
		text-align: left;
		border-bottom: 1px solid var(--line-subtle);
	}

	thead th {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--color-vb-gold);
		background: var(--surface-base);
	}

	tbody tr:last-child > * {
		border-bottom: none;
	}

	tbody th {
		display: flex;
		gap: var(--space-3);
		align-items: baseline;
		font-weight: 500;
		white-space: nowrap;
	}

	.row-label {
		color: var(--text-subtle);
	}

	.bar {
		display: block;
		height: 0.5rem;
		background: repeating-linear-gradient(-45deg, var(--line-strong) 0 6px, transparent 6px 10px);
	}

	.note {
		margin: 0;
		font-size: var(--text-small);
		color: var(--text-subtle);
	}

	/* ── Minijuego ── */
	#minijuego {
		scroll-margin-top: var(--header-h);
	}

	.game-grid {
		display: grid;
		gap: var(--space-8);
		align-items: center;
	}

	@media (min-width: 1024px) {
		.game-grid {
			grid-template-columns: 5fr 6fr;
			gap: clamp(2.5rem, 6vw, 6rem);
		}
	}

	.game-text {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	@media (prefers-reduced-motion: reduce) {
		.dot { animation: none; }
	}
</style>
