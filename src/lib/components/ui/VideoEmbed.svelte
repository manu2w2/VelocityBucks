<script lang="ts">
	import Icon from './Icon.svelte';

	/**
	 * VideoEmbed — Vídeo de YouTube con carga diferida.
	 * - Sin `youtubeId`: placeholder estático con la identidad de la marca.
	 * - Con `youtubeId`: muestra la miniatura y solo carga el reproductor
	 *   (youtube-nocookie) al pulsar, para no penalizar el rendimiento.
	 */
	interface Props {
		youtubeId?: string;
		title: string;
		playLabel: string;
		/** Texto grande del placeholder */
		placeholderTitle: string;
		/** Nota pequeña del placeholder */
		placeholderNote: string;
	}

	let { youtubeId = '', title, playLabel, placeholderTitle, placeholderNote }: Props = $props();

	let playing = $state(false);
</script>

<div class="video vb-chamfer">
	{#if youtubeId && playing}
		<iframe
			src="https://www.youtube-nocookie.com/embed/{youtubeId}?autoplay=1&rel=0"
			{title}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	{:else if youtubeId}
		<button type="button" class="poster" onclick={() => (playing = true)} aria-label={playLabel}>
			<img
				src="https://i.ytimg.com/vi/{youtubeId}/maxresdefault.jpg"
				alt=""
				loading="lazy"
				decoding="async"
			/>
			<span class="play"><Icon name="play" size={28} strokeWidth={1.8} /></span>
		</button>
	{:else}
		<div class="placeholder" role="img" aria-label="{placeholderTitle}. {placeholderNote}">
			<span class="corner tl"></span>
			<span class="corner tr"></span>
			<span class="corner bl"></span>
			<span class="rec"><span class="rec-dot"></span>16:9</span>

			<span class="play"><Icon name="play" size={28} strokeWidth={1.8} /></span>
			<span class="ph-title">{placeholderTitle}</span>
			<span class="ph-note">{placeholderNote}</span>
		</div>
	{/if}
</div>

<style>
	.video {
		--chamfer: var(--chamfer-lg);
		--chamfer-fill: var(--surface-sunken);
		--chamfer-line: var(--line-subtle);
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		clip-path: polygon(
			0 0, 100% 0,
			100% calc(100% - var(--chamfer)),
			calc(100% - var(--chamfer)) 100%,
			0 100%
		);
	}

	.video::after {
		background:
			repeating-linear-gradient(-45deg, transparent 0 18px, rgba(174, 179, 184, 0.05) 18px 19px),
			var(--chamfer-fill);
	}

	iframe,
	.poster,
	.placeholder {
		position: relative;
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
		border: 0;
	}

	.poster {
		padding: 0;
		background: var(--surface-sunken);
		cursor: pointer;
	}

	.poster img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.85;
		transition: opacity var(--transition-base);
	}

	.poster:hover img {
		opacity: 1;
	}

	.poster:focus-visible {
		outline-offset: -6px;
	}

	/* Botón de reproducción biselado */
	.play {
		position: relative;
		display: grid;
		place-items: center;
		width: 4.5rem;
		height: 4.5rem;
		background: var(--color-vb-gold);
		color: var(--text-on-gold);
		clip-path: polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%);
		transition: background-color var(--transition-fast);
	}

	.play :global(svg) {
		margin-left: 4px;
		fill: currentColor;
	}

	.poster:hover .play {
		background: var(--color-vb-gold-light);
	}

	.placeholder {
		align-content: center;
		gap: var(--space-4);
		text-align: center;
	}

	.placeholder .play {
		background: transparent;
		color: var(--color-vb-gold);
		box-shadow: inset 0 0 0 1px var(--line-gold);
	}

	.placeholder .play :global(svg) {
		fill: none;
	}

	.ph-title {
		font-family: var(--font-display);
		font-weight: 300;
		font-size: clamp(1.5rem, 3vw, 2.5rem);
		line-height: 1;
		letter-spacing: var(--tracking-display);
		text-transform: uppercase;
		color: var(--text-primary);
	}

	.ph-note {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--text-subtle);
	}

	.corner {
		position: absolute;
		width: 18px;
		height: 18px;
		border: 0 solid var(--line-gold);
	}

	.tl { top: 14px; left: 14px; border-top-width: 1px; border-left-width: 1px; }
	.tr { top: 14px; right: 14px; border-top-width: 1px; border-right-width: 1px; }
	.bl { bottom: 14px; left: 14px; border-bottom-width: 1px; border-left-width: 1px; }

	.rec {
		position: absolute;
		top: 16px;
		left: 44px;
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: 0.1em;
		color: var(--text-subtle);
	}

	.rec-dot {
		width: 6px;
		height: 6px;
		background: var(--color-vb-gold);
	}

	@media (max-width: 479px) {
		.play {
			width: 3.5rem;
			height: 3.5rem;
		}

		.rec {
			display: none;
		}
	}
</style>
