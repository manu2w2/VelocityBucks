// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	/** Inyectadas por Vite en vite.config.ts */
	const __SITE_URL__: string;
	const __BASE_PATH__: string;
}

export {};
