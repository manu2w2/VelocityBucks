<script lang="ts" module>
	export type IconName =
		| 'bolt'
		| 'target'
		| 'team'
		| 'set-square'
		| 'stopwatch'
		| 'compass'
		| 'check'
		| 'arrow-right'
		| 'camera'
		| 'cube'
		| 'user'
		| 'instagram'
		| 'github'
		| 'play'
		| 'award'
		| 'calendar'
		| 'pin'
		| 'download'
		| 'document'
		| 'globe'
		| 'mail';
</script>

<script lang="ts">
	/**
	 * Icon — Set de iconos de línea propio.
	 * Retícula 24×24, trazo uniforme, uniones en inglete y remates rectos
	 * para mantener la geometría angular de la marca.
	 */
	interface Props {
		name: IconName;
		size?: number | string;
		strokeWidth?: number;
		/** Si se indica, el icono se anuncia a lectores de pantalla */
		title?: string;
		class?: string;
	}

	let { name, size = 24, strokeWidth = 1.6, title, class: className = '' }: Props = $props();
</script>

<svg
	viewBox="0 0 24 24"
	width={size}
	height={size}
	fill="none"
	stroke="currentColor"
	stroke-width={strokeWidth}
	stroke-linecap="square"
	stroke-linejoin="miter"
	class="icon {className}"
	role={title ? 'img' : undefined}
	aria-hidden={title ? undefined : 'true'}
	focusable="false"
>
	{#if title}<title>{title}</title>{/if}

	{#if name === 'bolt'}
		<path d="M13.5 2.5 5 13.5h6l-1.5 8L18 10.5h-6z" />
	{:else if name === 'target'}
		<circle cx="12" cy="12" r="7.5" />
		<circle cx="12" cy="12" r="3.5" />
		<path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4" />
	{:else if name === 'team'}
		<path d="M12 6.5 6.2 16.5M12 6.5l5.8 10M7.5 18.5h9" />
		<rect x="9.75" y="2.25" width="4.5" height="4.5" />
		<rect x="2.75" y="16.25" width="4.5" height="4.5" />
		<rect x="16.75" y="16.25" width="4.5" height="4.5" />
	{:else if name === 'set-square'}
		<path d="M3.5 3v17.5H21z" />
		<path d="M7.5 12.5v4h4z" />
		<path d="M3.5 7h2M3.5 11h2M3.5 15h2" />
	{:else if name === 'stopwatch'}
		<circle cx="12" cy="13.5" r="7.5" />
		<path d="M12 9.5v4l2.75 2M9.5 2.5h5M12 2.5v3.5M18.5 6.5l1.5-1.5" />
	{:else if name === 'compass'}
		<circle cx="12" cy="12" r="9" />
		<path d="M15.75 8.25 13.5 13.5l-5.25 2.25L10.5 10.5z" />
	{:else if name === 'check'}
		<path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
	{:else if name === 'arrow-right'}
		<path d="M3.5 12h16M13.5 6l6 6-6 6" />
	{:else if name === 'camera'}
		<path d="M3 7.5h4l2-3h6l2 3h4v12H3z" />
		<circle cx="12" cy="13" r="3.75" />
	{:else if name === 'cube'}
		<path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
		<path d="M3.5 7 12 11.5 20.5 7M12 11.5v10" />
	{:else if name === 'user'}
		<circle cx="12" cy="8" r="4" />
		<path d="M4 21v-1.5A5.5 5.5 0 0 1 9.5 14h5a5.5 5.5 0 0 1 5.5 5.5V21" />
	{:else if name === 'play'}
		<path d="M8 4.5v15l12-7.5z" />
	{:else if name === 'award'}
		<circle cx="12" cy="9" r="6" />
		<path d="M12 6.5 12.9 8.4 15 8.6 13.4 10 13.9 12 12 11 10.1 12 10.6 10 9 8.6 11.1 8.4z" />
		<path d="M8.5 14 7 22l5-2.5 5 2.5-1.5-8" />
	{:else if name === 'calendar'}
		<path d="M3.5 5.5h17v15h-17zM3.5 10h17M8 3v5M16 3v5" />
	{:else if name === 'pin'}
		<path d="M12 21.5s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
		<circle cx="12" cy="9.5" r="2.5" />
	{:else if name === 'download'}
		<path d="M12 3.5v12M6.5 10l5.5 5.5 5.5-5.5M4 20.5h16" />
	{:else if name === 'document'}
		<path d="M5 2.5h9.5L19 7v14.5H5z" />
		<path d="M14 2.5V7.5h5M8.5 12h7M8.5 15.5h7M8.5 19h4" />
	{:else if name === 'globe'}
		<circle cx="12" cy="12" r="9" />
		<path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z" />
	{:else if name === 'mail'}
		<path d="M3 5.5h18v13H3z" />
		<path d="m3 6 9 7 9-7" />
	{:else if name === 'instagram'}
		<rect x="3" y="3" width="18" height="18" rx="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.25" cy="6.75" r="0.9" fill="currentColor" stroke="none" />
	{:else if name === 'github'}
		<path
			fill="currentColor"
			stroke="none"
			d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
		/>
	{/if}
</svg>

<style>
	.icon {
		display: inline-block;
		flex: none;
		vertical-align: middle;
	}
</style>
