/// <reference types="node" />
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync } from 'node:fs';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { dossierHash, DOSSIER_HASH_FILE } from './scripts/dossier-hash.js';

/** Avisa durante el build si el contenido del dossier cambió desde que se generaron sus PDF. */
function dossierPdfCheck(): Plugin {
	let warned = false;
	return {
		name: 'velocity-bucks:dossier-pdf-check',
		apply: 'build',
		buildStart() {
			if (warned || process.env.DOSSIER_PDF_GENERATING) return;
			warned = true;
			const saved = existsSync(DOSSIER_HASH_FILE) ? readFileSync(DOSSIER_HASH_FILE, 'utf8').trim() : '';
			if (saved !== dossierHash()) {
				console.warn(
					'\n⚠  Los PDF del dossier no coinciden con el contenido actual del sitio.\n' +
						'   Ejecuta "npm run dossier:pdf" en tu ordenador para regenerarlos.\n'
				);
			}
		}
	};
}

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, '.', '');
	const base = (
		env.BASE_PATH ? (env.BASE_PATH.startsWith('/') ? env.BASE_PATH : `/${env.BASE_PATH}`) : ''
	) as '' | `/${string}`;
	// URL pública: Netlify la expone como URL durante el build; SITE_URL permite sobrescribirla
	const siteUrl = (env.SITE_URL || env.URL || 'https://dapper-froyo-554dd7.netlify.app').replace(
		/\/$/,
		''
	);

	return {
		define: {
			__SITE_URL__: JSON.stringify(siteUrl),
			__BASE_PATH__: JSON.stringify(base)
		},
		plugins: [
			dossierPdfCheck(),
			tailwindcss(),
			sveltekit({
				compilerOptions: {
					runes: ({ filename }) =>
						filename.split(/[/\\]/).includes('node_modules') ? undefined : true
				},
				adapter: adapter({
					fallback: '404.html'
				}),
				paths: { base }
			})
		]
	};
});
