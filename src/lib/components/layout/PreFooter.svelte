<script lang="ts">
	// PreFooter — Banner tipográfico global con la frase de cierre de marca
</script>

<section class="pre-footer" aria-label="Filosofía del equipo">
	<div class="site-container pre-footer-inner">
		<blockquote class="pre-footer-quote">
			<p>Solo se llega rápido, pero juntos se llega más lejos.</p>
		</blockquote>
		<span class="pre-footer-team" aria-hidden="true">— Velocity Bucks #39347</span>
	</div>
</section>

<style>
	.pre-footer {
		background: var(--color-vb-gold);
		clip-path: var(--clip-angle-top);
		padding-block: clamp(2.5rem, 5vw, 4rem);
	}

	.pre-footer-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.75rem;
	}

	.pre-footer-quote {
		margin: 0;
		padding: 0;
		border: none;
	}

	.pre-footer-quote p {
		font-family: var(--font-display);  /* Rajdhani — impacto visual */
		font-weight: 300;
		font-size: clamp(1.6rem, 4vw, 2.8rem);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #222222;
		line-height: 1.1;
	}

	.pre-footer-team {
		font-family: var(--font-accent);  /* Chakra Petch */
		font-size: 0.75rem;
		font-weight: 500;
		color: rgba(34, 34, 34, 0.55);
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}
</style>

