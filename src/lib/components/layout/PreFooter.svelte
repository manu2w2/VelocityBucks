<script lang="ts">
	// PreFooter — Banda oro global con la frase de cierre de marca
	import { i18n } from '#lib/i18n.svelte.ts';
</script>

<section class="pre-footer" aria-label={i18n.t.prefooter.label}>
	<div class="site-container inner">
		<blockquote class="quote">
			<p>{i18n.t.prefooter.quote}</p>
			<footer>
				<cite>Velocity Bucks #39347</cite>
			</footer>
		</blockquote>
	</div>
</section>

<style>
	.pre-footer {
		--cut: clamp(1.5rem, 4vw, var(--chamfer-xl));
		position: relative;
		z-index: 1;
		/* Se superpone a la sección anterior: el corte deja ver su propio fondo */
		margin-top: calc(-1 * var(--cut));
		background: var(--color-vb-gold);
		/* Bisel superior izquierdo, tamaño fijo */
		clip-path: polygon(var(--cut) 0, 100% 0, 100% 100%, 0 100%, 0 var(--cut));
		padding-block: calc(clamp(3rem, 6vw, 5rem) + var(--cut) * 0.5) clamp(3rem, 6vw, 5rem);
	}

	.inner {
		display: flex;
		justify-content: center;
	}

	.quote {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
		margin: 0;
		text-align: center;
	}

	.quote p {
		max-width: 24ch;
		font-family: var(--font-display);
		font-weight: 300;
		font-size: clamp(1.75rem, 4.2vw, 3.25rem);
		line-height: 1.05;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-on-gold);
		text-wrap: balance;
	}

	.quote footer {
		display: flex;
		align-items: center;
		gap: var(--space-3);
	}

	.quote footer::before {
		content: '';
		width: 1.5rem;
		height: 2px;
		background: var(--color-vb-gold-ink);
	}

	cite {
		font-family: var(--font-accent);
		font-style: normal;
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: var(--tracking-label);
		text-transform: uppercase;
		color: var(--color-vb-gold-ink);
	}
</style>
