<script lang="ts">
  import { resolve } from "$app/paths";
  import Button from "#lib/components/ui/Button.svelte";
  import SectionTitle from "#lib/components/ui/SectionTitle.svelte";
  import stats from "#lib/data/stats.json";
  import pillars from "#lib/data/pillars.json";
</script>

<svelte:head>
  <title>Velocity Bucks #39347 — Ingeniería en movimiento</title>
  <meta
    name="description"
    content="Velocity Bucks #39347 — Equipo FTC impulsado por la innovación, el trabajo en equipo y la pasión por crear un impacto positivo dentro y fuera de la cancha."
  />
</svelte:head>

<!-- ══════════════════════════════════════════
     HERO SECTION
══════════════════════════════════════════ -->
<section class="hero" aria-label="Hero — Velocity Bucks">
  <div class="site-container hero-inner">
    <!-- Isotipo Placeholder (reemplazar con SVG real) -->
    <div class="hero-isotipo" aria-hidden="true">
      <div class="isotipo-mark">VB</div>
    </div>

    <!-- Content -->
    <div class="hero-content">
      <p class="hero-eyebrow">FTC #39347 — Temporada 2024–2025</p>

      <!-- Título hero: Rajdhani, tracking amplio, all-caps -->
      <h1 class="hero-title">Velocity Bucks</h1>

      <!-- Subtítulo dorado: Chakra Petch Bold — como en mockups de identidad -->
      <p class="hero-accent">Ingeniería en movimiento</p>

      <p class="hero-description">
        Un equipo impulsado por la innovación, el trabajo en equipo y la pasión
        por crear un impacto positivo dentro y fuera de la cancha de juego.
      </p>

      <div class="hero-actions">
        <Button href={resolve("/ingenieria")} variant="primary" size="lg"
          >Ver nuestro Robot</Button
        >
        <Button href={resolve("/patrocinadores")} variant="ghost" size="lg"
          >Apóyanos</Button
        >
      </div>
    </div>
  </div>

  <div class="hero-bg-accent" aria-hidden="true"></div>
</section>

<!-- ══════════════════════════════════════════
     STATS ROW
══════════════════════════════════════════ -->
<section class="stats-section section-padding" aria-label="Métricas del equipo">
  <div class="site-container">
    <div class="stats-grid">
      {#each stats as stat}
        <div class="stat-card">
          <p class="stat-value">
            {#if stat.prefix}<span class="stat-affix">{stat.prefix}</span>{/if}
            {stat.value}
            {#if stat.suffix}<span class="stat-affix">{stat.suffix}</span>{/if}
          </p>
          <!-- Stat label: Chakra Petch, uppercase, tracking -->
          <p class="stat-label">{stat.label}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════
     MANIFIESTO
══════════════════════════════════════════ -->
<section
  class="manifesto-section section-padding"
  aria-label="Manifiesto de marca"
>
  <div class="site-container manifesto-inner">
    <div class="manifesto-line" aria-hidden="true"></div>
    <blockquote class="manifesto-quote">
      <!-- Montserrat Italic — cuerpo de marca -->
      <p>
        Velocity Bucks: Un equipo impulsado por la innovación, el trabajo en
        equipo y la pasión por crear un impacto positivo dentro y fuera de la
        cancha de juego.
      </p>
    </blockquote>
    <div class="manifesto-line" aria-hidden="true"></div>
  </div>
</section>

<!-- ══════════════════════════════════════════
     PILARES DE TRABAJO — Preview 3/6
══════════════════════════════════════════ -->
<section
  class="pillars-section section-padding"
  aria-label="Pilares de trabajo"
>
  <div class="site-container">
    <SectionTitle
      eyebrow="Nuestra cultura"
      title="Lo que nos mueve"
      accent="Seis pilares de trabajo"
      subtitle="Los principios que definen cómo trabajamos, pensamos y competimos."
      align="center"
    />

    <div class="pillars-grid">
      {#each pillars.slice(0, 3) as pillar}
        <article class="pillar-card">
          <span class="pillar-icon" aria-hidden="true">{pillar.icon}</span>
          <!-- H3: Chakra Petch, uppercase -->
          <h3 class="pillar-title">{pillar.title}</h3>
          <!-- Body: Montserrat -->
          <p class="pillar-desc">{pillar.description}</p>
        </article>
      {/each}
    </div>

    <div class="pillars-cta">
      <Button href={resolve("/nosotros")} variant="outline"
        >Conocer al equipo completo</Button
      >
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════
     SECTION TEASERS — Estilo mockup identidad
══════════════════════════════════════════ -->
<section
  class="teasers-section section-padding"
  aria-label="Secciones destacadas"
>
  <div class="site-container">
    <SectionTitle eyebrow="Explora" title="Más sobre Velocity Bucks" />

    <div class="teasers-grid">
      <!-- Teaser Robot: fondo oscuro (como panel dark en mockup) -->
      <a href={resolve("/ingenieria")} class="teaser-card teaser-dark">
        <div class="teaser-content">
          <p class="teaser-eyebrow">Ingeniería</p>
          <!-- Rajdhani Light -->
          <h2 class="teaser-title-display">Our Robot</h2>
          <!-- Chakra Petch Bold, gold -->
          <p class="teaser-title-accent">Proceso de Ingeniería</p>
          <p class="teaser-body">
            Ficha técnica, renders CAD y el ciclo de desarrollo del robot de la
            temporada.
          </p>
          <span class="teaser-arrow" aria-hidden="true">→</span>
        </div>
      </a>

      <!-- Teaser Impacto: fondo gold (como panel gold en mockup) -->
      <a href={resolve("/impacto")} class="teaser-card teaser-gold">
        <div class="teaser-content">
          <p class="teaser-eyebrow teaser-eyebrow--dark">Outreach</p>
          <h2 class="teaser-title-display teaser-title--dark">Impact</h2>
          <p class="teaser-title-accent teaser-accent--dark">Beyond Robotics</p>
          <p class="teaser-body teaser-body--dark">
            Talleres, voluntariado e iniciativas que trascienden la cancha de
            juego.
          </p>
          <span class="teaser-arrow teaser-arrow--dark" aria-hidden="true"
            >→</span
          >
        </div>
      </a>

      <!-- Teaser Patrocinadores: fondo gold-deep -->
      <a href={resolve("/patrocinadores")} class="teaser-card teaser-gold-deep">
        <div class="teaser-content">
          <p class="teaser-eyebrow teaser-eyebrow--dark">Alianzas</p>
          <h2 class="teaser-title-display teaser-title--light">Community</h2>
          <p class="teaser-title-accent teaser-accent--light">
            More than Robots
          </p>
          <p class="teaser-body teaser-body--light">
            Únete a la misión. Apoya el desarrollo de talento STEM en nuestra
            región.
          </p>
          <span class="teaser-arrow teaser-arrow--light" aria-hidden="true"
            >→</span
          >
        </div>
      </a>
    </div>
  </div>
</section>

<style>
  /* ── Hero ── */
  .hero {
    position: relative;
    overflow: hidden;
    padding-block: clamp(5rem, 12vw, 9rem);
    border-bottom: var(--border-steel);
  }

  .hero-inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 768px) {
    .hero-inner {
      grid-template-columns: auto 1fr;
    }
  }

  .hero-isotipo {
    display: flex;
    justify-content: center;
  }

  .isotipo-mark {
    display: grid;
    place-items: center;
    width: clamp(6rem, 15vw, 10rem);
    height: clamp(6rem, 15vw, 10rem);
    background: var(--color-vb-gold);
    color: #222;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    letter-spacing: 0.08em;
    clip-path: var(--clip-angle-both);
    box-shadow: var(--shadow-gold-lg);
    flex-shrink: 0;
  }

  .hero-eyebrow {
    font-family: var(--font-accent);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-vb-gold);
    margin: 0 0 0.75rem;
  }

  .hero-title {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: var(--text-hero);
    line-height: 0.95;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    margin: 0 0 0.3rem;
  }

  .hero-accent {
    font-family: var(--font-accent);
    font-weight: 700;
    font-size: clamp(0.9rem, 2vw, 1.3rem);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-vb-gold);
    margin: 0 0 1.5rem;
  }

  .hero-description {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-vb-steel);
    line-height: 1.75;
    max-width: 46ch;
    margin: 0 0 2rem;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .hero-bg-accent {
    position: absolute;
    top: -20%;
    right: -10%;
    width: 40%;
    aspect-ratio: 1;
    background: radial-gradient(
      circle,
      rgba(208, 181, 73, 0.07) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  /* ── Stats ── */
  .stats-section {
    border-bottom: var(--border-steel);
    background: rgba(208, 181, 73, 0.025);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
  }

  @media (min-width: 640px) {
    .stats-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stat-card {
    padding: 2rem 1.5rem;
    border: var(--border-steel);
    text-align: center;
  }

  .stat-value {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(2.2rem, 5.5vw, 3.8rem);
    color: var(--color-vb-gold);
    margin: 0 0 0.4rem;
    line-height: 1;
    letter-spacing: 0.04em;
  }

  .stat-affix {
    font-size: 0.55em;
    vertical-align: super;
  }

  .stat-label {
    font-family: var(--font-accent);
    font-size: 0.65rem;
    font-weight: 500;
    color: var(--color-vb-steel);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin: 0;
  }

  /* ── Manifiesto ── */
  .manifesto-section {
    border-bottom: var(--border-steel);
  }

  .manifesto-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }

  .manifesto-line {
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(208, 181, 73, 0.3),
      transparent
    );
  }

  .manifesto-quote {
    margin: 0;
    padding: 0;
    max-width: 56ch;
  }

  .manifesto-quote p {
    font-family: var(--font-body);
    font-style: italic;
    font-size: clamp(1rem, 2.2vw, 1.4rem);
    color: #fff;
    line-height: 1.6;
  }

  /* ── Pilares ── */
  .pillars-section {
    border-bottom: var(--border-steel);
  }

  .pillars-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-block: 3rem;
  }

  @media (min-width: 640px) {
    .pillars-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .pillar-card {
    padding: 2rem 1.5rem;
    border: var(--border-steel);
    background: rgba(255, 255, 255, 0.02);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition:
      border-color var(--transition-base),
      background var(--transition-base);
    clip-path: var(--clip-slash-sm);
  }

  .pillar-card:hover {
    border-color: rgba(208, 181, 73, 0.4);
    background: rgba(208, 181, 73, 0.04);
  }

  .pillar-icon {
    font-size: 1.75rem;
  }

  .pillar-title {
    font-family: var(--font-accent);
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #fff;
    margin: 0;
  }

  .pillar-desc {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--color-vb-steel);
    line-height: 1.65;
    margin: 0;
  }

  .pillars-cta {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  /* ── Teasers ── */
  .teasers-section {
    border-bottom: var(--border-steel);
  }

  .teasers-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: 3rem;
    border: var(--border-steel);
  }

  @media (min-width: 768px) {
    .teasers-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .teaser-card {
    display: block;
    text-decoration: none;
    padding: 2.5rem 2rem;
    transition: filter var(--transition-base);
    border-right: var(--border-steel);
  }

  .teaser-card:last-child {
    border-right: none;
  }

  .teaser-card:hover {
    filter: brightness(1.08);
  }

  .teaser-dark {
    background: #1a1a1a;
  }

  .teaser-gold {
    background: var(--color-vb-gold);
  }

  .teaser-gold-deep {
    background: var(--color-vb-gold-deep);
  }

  .teaser-content {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .teaser-eyebrow {
    font-family: var(--font-accent);
    font-size: 0.65rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-vb-gold);
    margin: 0;
  }

  .teaser-eyebrow--dark {
    color: rgba(34, 34, 34, 0.65);
  }

  .teaser-title-display {
    font-family: var(--font-display);
    font-weight: 300;
    font-size: clamp(1.8rem, 3.5vw, 2.5rem);
    line-height: 1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    margin: 0;
  }

  .teaser-title--dark {
    color: #222222;
  }

  .teaser-title--light {
    color: #fff;
  }

  .teaser-title-accent {
    font-family: var(--font-accent);
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--color-vb-gold);
    margin: 0 0 0.75rem;
  }

  .teaser-accent--dark {
    color: #333;
  }

  .teaser-accent--light {
    color: var(--color-vb-gold-light);
  }

  .teaser-body {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--color-vb-steel);
    line-height: 1.65;
    margin: 0;
  }

  .teaser-body--dark {
    color: rgba(34, 34, 34, 0.75);
  }

  .teaser-body--light {
    color: rgba(255, 255, 255, 0.75);
  }

  .teaser-arrow {
    display: inline-block;
    margin-top: 1.25rem;
    font-size: 1.1rem;
    color: var(--color-vb-gold);
    transition: transform var(--transition-fast);
  }

  .teaser-arrow--dark {
    color: #222;
  }

  .teaser-arrow--light {
    color: rgba(255, 255, 255, 0.8);
  }

  .teaser-card:hover .teaser-arrow {
    transform: translateX(5px);
  }
</style>

