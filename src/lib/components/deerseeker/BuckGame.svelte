<script lang="ts">
	/**
	 * BuckGame — Minijuego "Atrapa los bucks".
	 * Los bucks aparecen unos instantes en una retícula de 3×3 arbustos; hay 30 s
	 * para atrapar el mayor número posible. El récord se guarda en el navegador.
	 */
	import { onDestroy } from 'svelte';
	import BuckMark from '#lib/components/ui/BuckMark.svelte';
	import Button from '#lib/components/ui/Button.svelte';
	import { i18n } from '#lib/i18n.svelte.ts';

	type Kind = 'buck' | 'gold' | null;
	interface Cell {
		kind: Kind;
		/** Puntos del último acierto, para la animación "+1"/"+3" */
		pop: number;
		/** Cambia en cada acierto para reiniciar la animación */
		popKey: number;
	}

	const DURATION = 30_000;
	const CELLS = 9;
	const BEST_KEY = 'vb-deerseeker-best';

	const g = $derived(i18n.t.deerseeker.game);

	let phase = $state<'idle' | 'playing' | 'over'>('idle');
	let score = $state(0);
	let best = $state(0);
	let newBest = $state(false);
	let remaining = $state(DURATION);
	let cells = $state<Cell[]>(Array.from({ length: CELLS }, () => ({ kind: null, pop: 0, popKey: 0 })));

	let startedAt = 0;
	let tickTimer: ReturnType<typeof setInterval> | undefined;
	let spawnTimer: ReturnType<typeof setTimeout> | undefined;
	const hideTimers: (ReturnType<typeof setTimeout> | undefined)[] = Array(CELLS).fill(undefined);

	$effect(() => {
		try {
			best = Number(localStorage.getItem(BEST_KEY)) || 0;
		} catch {
			/* almacenamiento no disponible: el récord solo dura la sesión */
		}
	});

	const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
	const progress = () => Math.min(1, (performance.now() - startedAt) / DURATION);

	function clearTimers() {
		clearInterval(tickTimer);
		clearTimeout(spawnTimer);
		hideTimers.forEach((t, i) => {
			clearTimeout(t);
			hideTimers[i] = undefined;
		});
	}

	function spawn() {
		if (phase !== 'playing') return;
		const free = cells.flatMap((c, i) => (c.kind ? [] : [i]));
		if (free.length > 0) {
			const i = free[Math.floor(Math.random() * free.length)];
			const kind: Kind = Math.random() < 0.12 ? 'gold' : 'buck';
			cells[i].kind = kind;
			// Cada vez son más rápidos; el dorado se esconde antes
			const life = lerp(1500, 750, progress()) * (kind === 'gold' ? 0.7 : 1);
			hideTimers[i] = setTimeout(() => (cells[i].kind = null), life);
		}
		spawnTimer = setTimeout(spawn, lerp(850, 420, progress()));
	}

	function start() {
		clearTimers();
		cells.forEach((c) => (c.kind = null));
		score = 0;
		newBest = false;
		remaining = DURATION;
		phase = 'playing';
		startedAt = performance.now();
		tickTimer = setInterval(() => {
			remaining = Math.max(0, DURATION - (performance.now() - startedAt));
			if (remaining === 0) finish();
		}, 100);
		spawnTimer = setTimeout(spawn, 400);
	}

	function finish() {
		clearTimers();
		cells.forEach((c) => (c.kind = null));
		phase = 'over';
		if (score > best) {
			best = score;
			newBest = true;
			try {
				localStorage.setItem(BEST_KEY, String(best));
			} catch {
				/* sin almacenamiento */
			}
		}
	}

	function hit(i: number) {
		if (phase !== 'playing') return;
		const cell = cells[i];
		if (!cell.kind) return;
		const points = cell.kind === 'gold' ? 3 : 1;
		score += points;
		clearTimeout(hideTimers[i]);
		hideTimers[i] = undefined;
		cell.kind = null;
		cell.pop = points;
		cell.popKey += 1;
	}

	function onKey(e: KeyboardEvent) {
		if (phase !== 'playing' || e.ctrlKey || e.metaKey || e.altKey) return;
		const target = e.target as HTMLElement | null;
		if (target?.closest('input, textarea, select, [contenteditable="true"]')) return;
		const n = Number(e.key);
		if (Number.isInteger(n) && n >= 1 && n <= 9) {
			e.preventDefault();
			hit(n - 1);
		}
	}

	onDestroy(clearTimers);

	const seconds = $derived(Math.ceil(remaining / 1000));
</script>

<svelte:window onkeydown={onKey} />

<div class="game vb-chamfer">
	<dl class="hud">
		<div>
			<dt>{g.score}</dt>
			<dd class="vb-display">{score}</dd>
		</div>
		<div>
			<dt>{g.time}</dt>
			<dd class="vb-display" class:low={phase === 'playing' && seconds <= 5}>{seconds}s</dd>
		</div>
		<div>
			<dt>{g.best}</dt>
			<dd class="vb-display">{best}</dd>
		</div>
	</dl>

	<div class="field" role="group" aria-label={g.fieldLabel}>
		{#each cells as cell, i (i)}
			<button
				type="button"
				class="cell"
				class:up={cell.kind !== null}
				class:gold={cell.kind === 'gold'}
				onpointerdown={(e) => {
					// Respuesta inmediata en táctil/ratón; el teclado usa click
					e.preventDefault();
					hit(i);
				}}
				onclick={(e) => {
					if (e.detail === 0) hit(i);
				}}
				disabled={phase !== 'playing'}
				aria-label={`${i + 1}. ${cell.kind === 'gold' ? g.goldBuck : cell.kind ? g.buck : g.bush}`}
			>
				<span class="key" aria-hidden="true">{i + 1}</span>
				<span class="buck"><BuckMark size="100%" /></span>
				<span class="bush" aria-hidden="true"></span>
				{#key cell.popKey}
					{#if cell.popKey > 0}
						<span class="pop" aria-hidden="true">+{cell.pop}</span>
					{/if}
				{/key}
			</button>
		{/each}

		{#if phase !== 'playing'}
			<div class="overlay">
				{#if phase === 'over'}
					<p class="vb-eyebrow">{g.over}</p>
					<p class="final vb-display vb-display--m">{score} <span>{g.points}</span></p>
					{#if newBest}<p class="record">{g.newBest}</p>{/if}
				{:else}
					<p class="ready">{g.ready}</p>
				{/if}
				<Button variant="primary" size="lg" onclick={start}>
					{phase === 'over' ? g.again : g.start}
				</Button>
			</div>
		{/if}
	</div>

	<p class="hint">{g.hint}</p>

	<p class="sr-only" aria-live="polite">
		{#if phase === 'over'}{g.over}: {score} {g.points}. {newBest ? g.newBest : ''}{/if}
	</p>
</div>

<style>
	.game {
		--chamfer: var(--chamfer-md);
		--chamfer-fill: var(--surface-raised);
		--chamfer-line: var(--line-subtle);
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		padding: clamp(1rem, 3vw, 2rem);
	}

	.hud {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-4);
		margin: 0;
	}

	.hud div {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding-left: var(--space-3);
		border-left: 2px solid var(--line-gold);
	}

	.hud dt {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--text-subtle);
	}

	.hud dd {
		margin: 0;
		font-size: var(--text-display-s);
		line-height: 1;
		font-variant-numeric: tabular-nums;
	}

	.hud dd.low {
		color: var(--color-vb-gold);
	}

	.field {
		position: relative;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(0.5rem, 1.5vw, 1rem);
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	.cell {
		position: relative;
		aspect-ratio: 1;
		overflow: hidden;
		padding: 0;
		background:
			repeating-linear-gradient(-45deg, transparent 0 12px, rgba(174, 179, 184, 0.04) 12px 13px),
			var(--surface-sunken);
		border: 1px solid var(--line-subtle);
		cursor: crosshair;
		touch-action: manipulation;
		transition: border-color var(--transition-fast);
	}

	.cell:disabled {
		cursor: default;
	}

	.cell.up {
		border-color: var(--line-gold);
	}

	.key {
		position: absolute;
		top: 0.4rem;
		left: 0.5rem;
		z-index: 3;
		font-family: var(--font-accent);
		font-size: var(--text-label);
		color: var(--text-subtle);
	}

	/* El buck sube desde detrás del arbusto */
	.buck {
		position: absolute;
		left: 18%;
		right: 18%;
		bottom: 6%;
		aspect-ratio: 1;
		color: var(--color-vb-steel);
		transform: translateY(110%);
		transition: transform 140ms ease-out;
		--buck-ink: var(--surface-sunken);
	}

	.buck :global(svg) {
		display: block;
	}

	.cell.up .buck {
		transform: translateY(0);
	}

	.cell.gold .buck {
		color: var(--color-vb-gold);
		filter: drop-shadow(0 0 10px rgba(208, 181, 73, 0.55));
	}

	/* Arbusto: franja facetada en primer plano */
	.bush {
		position: absolute;
		inset: auto 0 0 0;
		z-index: 2;
		height: 34%;
		background: #2f3a2c;
		clip-path: polygon(0 40%, 12% 10%, 26% 35%, 40% 0, 55% 30%, 70% 5%, 84% 32%, 100% 12%, 100% 100%, 0 100%);
	}

	.pop {
		position: absolute;
		top: 30%;
		left: 50%;
		z-index: 4;
		font-family: var(--font-display);
		font-size: clamp(1.5rem, 4vw, 2.25rem);
		font-weight: 700;
		color: var(--color-vb-gold);
		pointer-events: none;
		animation: pop 650ms ease-out forwards;
	}

	@keyframes pop {
		from { opacity: 1; transform: translate(-50%, 0); }
		to { opacity: 0; transform: translate(-50%, -60%); }
	}

	.overlay {
		position: absolute;
		inset: 0;
		z-index: 5;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-4);
		padding: var(--space-4);
		text-align: center;
		background: rgba(26, 26, 26, 0.86);
		backdrop-filter: blur(2px);
	}

	.overlay p {
		margin: 0;
	}

	.final span {
		font-size: var(--text-title);
		color: var(--text-muted);
	}

	.record {
		font-family: var(--font-accent);
		font-weight: 600;
		letter-spacing: var(--tracking-accent);
		color: var(--color-vb-gold);
	}

	.ready {
		font-family: var(--font-accent);
		color: var(--text-muted);
	}

	.hint {
		margin: 0;
		font-size: var(--text-small);
		color: var(--text-subtle);
	}

	@media (prefers-reduced-motion: reduce) {
		.buck { transition: none; }
		.pop { animation-duration: 1ms; }
	}
</style>
