<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';
	import { NEXT_EVENT } from '../../site.ts';
	import { i18n, pad } from '../../i18n.svelte.ts';

	const c = $derived(i18n.t.home.countdown);
	const target = NEXT_EVENT.date ? new Date(NEXT_EVENT.date).getTime() : NaN;
	const hasDate = !Number.isNaN(target);
	const name = $derived(NEXT_EVENT.name[i18n.lang] || c.namePending);

	// null hasta que el navegador calcula el tiempo (la página se prerenderiza sin hora)
	let now = $state<number | null>(null);

	onMount(() => {
		if (!hasDate) return;
		now = Date.now();
		const id = setInterval(() => (now = Date.now()), 1000);
		return () => clearInterval(id);
	});

	const remaining = $derived(now === null ? null : Math.max(0, target - now));
	const started = $derived(remaining === 0);

	const parts = $derived.by(() => {
		const r = remaining ?? 0;
		const s = Math.floor(r / 1000);
		return [
			{ key: 'days', value: Math.floor(s / 86400) },
			{ key: 'hours', value: Math.floor((s % 86400) / 3600) },
			{ key: 'minutes', value: Math.floor((s % 3600) / 60) },
			{ key: 'seconds', value: s % 60 }
		] as const;
	});

	// La fecha se formatea en el navegador para usar la zona horaria del visitante
	const dateText = $derived(
		!hasDate
			? c.datePending
			: now === null
				? NEXT_EVENT.date.slice(0, 10)
				: new Intl.DateTimeFormat(i18n.lang === 'en' ? 'en-US' : 'es-MX', {
					dateStyle: 'long',
					timeStyle: 'short'
					}).format(target)
	);
</script>

<div class="countdown">
	<div class="info">
		<p class="vb-eyebrow">{c.eyebrow}</p>
		<h3 class="vb-title event-name">{name}</h3>
		<p class="meta">
			<span><Icon name="calendar" size={16} /> {dateText}</span>
			{#if NEXT_EVENT.venue}<span><Icon name="pin" size={16} /> {NEXT_EVENT.venue}</span>{/if}
		</p>
	</div>

	{#if !hasDate}
		<p class="note">{c.pendingNote}</p>
	{:else if started}
		<p class="started vb-display vb-display--s">{c.started}</p>
	{:else}
		<dl class="clock" aria-label={c.label}>
			{#each parts as p (p.key)}
				<div class="unit">
					<dt class="unit-label">{c.units[p.key]}</dt>
					<dd class="value">{remaining === null ? '--' : p.key === 'days' ? p.value : pad(p.value)}</dd>
				</div>
			{/each}
		</dl>
	{/if}
</div>

<style>
	.countdown {
		display: grid;
		gap: var(--space-6);
		align-items: center;
		padding: clamp(1.5rem, 3vw, 2.5rem);
		border: 1px solid var(--line-subtle);
		border-left: 3px solid var(--color-vb-gold);
		background: color-mix(in srgb, var(--color-vb-gold) 4%, transparent);
	}

	@media (min-width: 1024px) {
		.countdown {
			grid-template-columns: 5fr 7fr;
		}
	}

	.event-name {
		margin-top: var(--space-2);
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2) var(--space-5);
		margin-top: var(--space-3);
		color: var(--text-muted);
		font-size: var(--text-small);
	}

	.meta span {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}

	.clock {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-3);
		margin: 0;
	}

	.unit {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-1);
		padding-block: var(--space-4);
		border: 1px solid var(--line-subtle);
	}

	.value {
		order: -1;
		margin: 0;
		font-family: var(--font-display);
		font-weight: 600;
		font-size: var(--text-display-m);
		line-height: 1;
		color: var(--color-vb-gold);
		font-variant-numeric: tabular-nums;
	}

	.unit-label {
		font-family: var(--font-accent);
		font-size: var(--text-label);
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.note {
		color: var(--text-muted);
		max-width: 42ch;
	}

	.started {
		color: var(--color-vb-gold);
	}
</style>
