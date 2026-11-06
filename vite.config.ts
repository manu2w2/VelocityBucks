import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, '.', '');
	return {
		plugins: [
			tailwindcss(),
			sveltekit({
				compilerOptions: {
					runes: ({ filename }) =>
						filename.split(/[/\\]/).includes('node_modules') ? undefined : true
				},
				adapter: adapter({
					fallback: '404.html'
				}),
				paths: {
					base: (env.BASE_PATH ? (env.BASE_PATH.startsWith('/') ? env.BASE_PATH : `/${env.BASE_PATH}`) : '') as
						| ''
						| `/${string}`
				}
			})
		]
	};
});
