// Huella del contenido del que salen los PDF del dossier.
// La usan el generador de PDF (para guardarla) y vite.config.ts (para avisar si los PDF están desactualizados).
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

export const DOSSIER_SOURCES = [
	'src/lib/content/es.ts',
	'src/lib/content/en.ts',
	'src/lib/site.ts',
	'src/routes/[[lang=lang]]/dossier/+page.svelte',
	'src/app.css'
];

export const DOSSIER_HASH_FILE = 'scripts/dossier-source-hash.txt';

export function dossierHash(root = '.') {
	const hash = createHash('sha256');
	for (const file of DOSSIER_SOURCES) {
		// Se normalizan los saltos de línea para que Windows y Linux den la misma huella
		hash.update(readFileSync(`${root}/${file}`, 'utf8').replace(/\r\n/g, '\n'));
	}
	return hash.digest('hex').slice(0, 16);
}
