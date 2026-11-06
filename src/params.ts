/**
 * Matchers de parámetros de ruta (formato Standard Schema, requerido por SvelteKit 3).
 * Solo "en" es un prefijo válido; el español vive en la raíz.
 */
const lang = {
	'~standard': {
		version: 1 as const,
		vendor: 'velocity-bucks',
		validate: (value: unknown) =>
			value === 'en' ? { value: 'en' as const } : { issues: [{ message: 'Idioma no válido' }] }
	}
};

export const params = { lang };
