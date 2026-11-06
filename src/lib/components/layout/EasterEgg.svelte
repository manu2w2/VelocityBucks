<script lang="ts">
	/**
	 * EasterEgg — "Modo Buck".
	 * Se activa con el código Konami (↑ ↑ ↓ ↓ ← → ← → B A) o tocando 5 veces
	 * seguidas el logotipo del pie de página (para móvil). Un buck cruza la
	 * pantalla y aparece un aviso con el enlace al minijuego de Deerseeker.
	 */
	import { afterNavigate } from '$app/navigation';
	import BuckMark from '#lib/components/ui/BuckMark.svelte';
	import { i18n } from '#lib/i18n.svelte.ts';

	const SEQUENCE = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
	const TAPS_NEEDED = 5;
	const TAP_WINDOW = 1500;

	const t = $derived(i18n.t.easterEgg);
	const gameHref = $derived(`${i18n.href('/deerseeker')}#minijuego`);

	let active = $state(false);
	/** Cambia en cada activación para repetir la carrera del buck */
	let run = $state(0);
	let progress = 0;
	let taps: number[] = [];

	function activate() {
		active = true;
		run += 1;
		document.documentElement.classList.add('buck-mode');
	}

	function close() {
		active = false;
		document.documentElement.classList.remove('buck-mode');
	}

	function onKey(e: KeyboardEvent) {
		if (e.key === 'Escape' && active) {
			close();
			return;
		}
		const key = e.key.toLowerCase();
		if (key === SEQUENCE[progress]) {
			progress += 1;
			if (progress === SEQUENCE.length) {
				progress = 0;
				activate();
			}
		} else {
			progress = key === SEQUENCE[0] ? 1 : 0;
		}
	}

	function onClick(e: MouseEvent) {
		if (!(e.target as HTMLElement | null)?.closest('[data-buck-trigger]')) return;
		const now = Date.now();
		taps = [...taps.filter((t) => now - t < TAP_WINDOW), now];
		if (taps.length >= TAPS_NEEDED) {
			taps = [];
			activate();
		}
	}

	afterNavigate(({ from }) => {
		if (from) close();
	});

	$effect(() => {
		console.log(
			'%c🦌 Velocity Bucks #39347 %c\n¿Buscas algo? Prueba ↑ ↑ ↓ ↓ ← → ← → B A\nLooking for something? Try ↑ ↑ ↓ ↓ ← → ← → B A',
			'color:#D0B549;font-weight:700;font-size:14px',
			'color:#AEB3B8'
		);
	});
</script>

<svelte:window onkeydown={onKey} onclick={onClick} />

{#if active}
	{#key run}
		<div class="runner" aria-hidden="true">
			<span class="buck"><BuckMark size={96} /></span>
		</div>
	{/key}

	<div class="toast vb-chamfer" role="status">
		<span class="mark"><BuckMark size={36} /></span>
		<div class="text">
			<p class="title">{t.title}</p>
			<p class="body">{t.body}</p>
			<a class="cta" href={gameHref}>{t.cta} →</a>
		</div>
		<button type="button" class="close" onclick={close} aria-label={t.close}>×</button>
	</div>
{/if}

<style>
	/* Durante el modo buck, el oro de la marca "brilla" un poco más */
	:global(html.buck-mode) {
		--line-subtle: rgba(208, 181, 73, 0.22);
	}

	.runner {
		position: fixed;
		inset: auto 0 12vh 0;
		z-index: 200;
		height: 120px;
		pointer-events: none;
		overflow: hidden;
	}

	.buck {
		position: absolute;
		left: 0;
		top: 20px;
		color: var(--color-vb-gold);
		--buck-ink: var(--surface-base);
		animation:
			cross 3.2s linear forwards,
			hop 0.4s ease-in-out infinite alternate;
	}

	@keyframes cross {
		from { transform: translateX(-120px); }
		to { transform: translateX(calc(100vw + 20px)); }
	}

	@keyframes hop {
		from { top: 20px; }
		to { top: 4px; }
	}

	.toast {
		--chamfer: var(--chamfer-md);
		--chamfer-fill: var(--surface-raised);
		--chamfer-line: var(--line-gold);
		position: fixed;
		right: clamp(0.75rem, 3vw, 2rem);
		bottom: clamp(0.75rem, 3vw, 2rem);
		z-index: 210;
		display: flex;
		gap: var(--space-4);
		align-items: flex-start;
		width: min(24rem, calc(100vw - 1.5rem));
		padding: var(--space-5);
		animation: toast-in 300ms var(--ease-out, ease-out) both;
	}

	@keyframes toast-in {
		from { opacity: 0; transform: translateY(1rem); }
		to { opacity: 1; transform: none; }
	}

	.mark {
		flex: none;
		color: var(--color-vb-gold);
		--buck-ink: var(--surface-raised);
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.text p {
		margin: 0;
	}

	.title {
		font-family: var(--font-display);
		font-size: var(--text-display-s);
		font-weight: 600;
		line-height: 1;
		letter-spacing: var(--tracking-display);
		text-transform: uppercase;
		color: var(--color-vb-gold);
	}

	.body {
		font-size: var(--text-small);
		color: var(--text-muted);
	}

	.cta {
		font-family: var(--font-accent);
		font-size: var(--text-small);
		font-weight: 600;
		letter-spacing: var(--tracking-accent);
		color: var(--text-primary);
	}

	.close {
		flex: none;
		width: 2.75rem;
		height: 2.75rem;
		margin: -0.75rem -0.75rem 0 auto;
		background: none;
		border: none;
		font-size: 1.5rem;
		line-height: 1;
		color: var(--text-muted);
		cursor: pointer;
	}

	.close:hover {
		color: var(--text-primary);
	}

	@media (prefers-reduced-motion: reduce) {
		.runner { display: none; }
		.toast { animation: none; }
	}
</style>
