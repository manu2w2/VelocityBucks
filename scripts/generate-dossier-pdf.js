// Genera los PDF del dossier (ES y EN) a partir de la página /dossier del sitio ya compilado.
// Uso: npm run dossier:pdf   (compila, levanta un servidor local temporal e imprime con Chromium)
// Todo ocurre en tu ordenador: no usa ningún servicio externo de pago.
import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { preview } from 'vite';
import { dossierHash, DOSSIER_HASH_FILE } from './dossier-hash.js';

let chromium;
try {
	({ chromium } = await import('playwright'));
} catch {
	console.error('Falta Playwright. Ejecuta: npm install');
	process.exit(1);
}

const targets = [
	{ path: '/dossier', file: 'static/dossier/velocity-bucks-dossier-es.pdf' },
	{ path: '/en/dossier', file: 'static/dossier/velocity-bucks-dossier-en.pdf' }
];

// Compila el sitio con el contenido actual (sin el aviso de PDF desactualizados, que aquí no aplica)
const built = spawnSync(process.execPath, ['node_modules/vite/bin/vite.js', 'build'], {
	stdio: 'inherit',
	env: { ...process.env, DOSSIER_PDF_GENERATING: '1' }
});
if (built.status !== 0) process.exit(built.status ?? 1);

const server = await preview({ preview: { port: 4179, strictPort: true, open: false } });
const origin = server.resolvedUrls.local[0].replace(/\/$/, '');

let browser;
try {
	browser = await chromium.launch();
} catch (error) {
	console.error('No se pudo abrir Chromium. Instálalo una vez con: npx playwright install chromium');
	console.error(error.message);
	await server.close();
	process.exit(1);
}

try {
	mkdirSync('static/dossier', { recursive: true });
	for (const { path, file } of targets) {
		const page = await browser.newPage();
		await page.goto(origin + path, { waitUntil: 'networkidle' });
		await page.evaluate(() => document.fonts.ready);
		await page.pdf({ path: file, preferCSSPageSize: true, printBackground: true });
		await page.close();
		console.log(`✓ ${file}`);
	}
	writeFileSync(DOSSIER_HASH_FILE, dossierHash() + '\n');
	console.log('PDF del dossier actualizados.');
} finally {
	await browser.close();
	await server.close();
}
