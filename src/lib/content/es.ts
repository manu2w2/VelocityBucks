/**
 * Contenido del sitio — ESPAÑOL (idioma principal).
 * en.ts debe mantener exactamente la misma estructura (lo comprueba TypeScript).
 * Los valores `null` en métricas se muestran como "dato pendiente".
 */
import { SEASON } from '../site.ts';

const es = {
	meta: {
		htmlLang: 'es',
		ogLocale: 'es_ES',
		siteName: 'Velocity Bucks #39347',
		tagline: 'Ingeniería en movimiento',
		description:
			'Velocity Bucks #39347 — Equipo FTC impulsado por la innovación, el trabajo en equipo y la pasión por crear un impacto positivo dentro y fuera de la cancha.'
	},

	common: {
		pending: 'Por confirmar',
		pendingData: 'Dato pendiente',
		comingSoon: 'Próximamente',
		photo: 'Foto',
		newTab: '(se abre en una pestaña nueva)'
	},

	nav: {
		home: 'Inicio',
		links: [
			{ path: '/nosotros', label: 'Nosotros' },
			{ path: '/ingenieria', label: 'Ingeniería' },
			{ path: '/temporada', label: 'Temporada' },
			{ path: '/impacto', label: 'Impacto' },
			{ path: '/portafolio', label: 'Portafolio' },
			{ path: '/patrocinadores', label: 'Patrocinadores' },
			{ path: '/deerseeker', label: 'Deerseeker' }
		],
		contact: 'Contáctanos',
		mainLabel: 'Navegación principal',
		homeLabel: 'Velocity Bucks — Inicio',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		skip: 'Saltar al contenido',
		switchLang: { short: 'EN', label: 'View this page in English', hreflang: 'en' }
	},

	footer: {
		tagline: 'Ingeniería en movimiento.',
		siteTitle: 'Sitio',
		followTitle: 'Síguenos',
		navLabel: 'Navegación del pie de página',
		disclaimer:
			'FIRST®, FIRST® Tech Challenge y FIRST® Robotics Competition son marcas registradas de For Inspiration and Recognition of Science and Technology (FIRST). Velocity Bucks #39347 es un equipo independiente.',
		rights: 'Todos los derechos reservados.'
	},

	prefooter: {
		label: 'Filosofía del equipo',
		quote: 'La unión es nuestra fuerza, la velocidad nuestra esencia'
	},

	logoAlt: 'Logotipo de Velocity Bucks',

	stats: [
		{ value: '39347', label: 'Número de Equipo', prefix: '#', suffix: '' },
		{ value: '10', label: 'Integrantes', prefix: '', suffix: '+' },
		{ value: '500', label: 'Horas de Ingeniería', prefix: '', suffix: 'h' },
		{ value: '200', label: 'Personas Impactadas', prefix: '', suffix: '+' }
	] as Metric[],

	pillars: [
		{
			id: 'velocidad',
			icon: 'bolt',
			title: 'Velocidad',
			description:
				'Actuamos con agilidad y determinación. Cada decisión cuenta y el tiempo es nuestro recurso más valioso.'
		},
		{
			id: 'excelencia',
			icon: 'target',
			title: 'Excelencia',
			description:
				'No aceptamos el promedio. Cada iteración de diseño y cada línea de código debe superar a la anterior.'
		},
		{
			id: 'trabajo-equipo',
			icon: 'team',
			title: 'Trabajo en Equipo',
			description:
				'Nuestros logros son colectivos. La sinergia entre disciplinas es nuestra mayor ventaja competitiva.'
		},
		{
			id: 'formacion-tecnica',
			icon: 'set-square',
			title: 'Formación Técnica',
			description:
				'Aprendemos haciendo. Cada temporada es una oportunidad para dominar nuevas tecnologías y metodologías.'
		},
		{
			id: 'disciplina',
			icon: 'stopwatch',
			title: 'Disciplina',
			description:
				'El proceso importa tanto como el resultado. Consistencia, puntualidad y rigor son nuestra cultura de trabajo.'
		},
		{
			id: 'descubrimiento',
			icon: 'compass',
			title: 'Descubrimiento',
			description:
				'La curiosidad es nuestro motor. Exploramos soluciones no convencionales y cuestionamos lo establecido.'
		}
	],

	/* ─────────────── INICIO ─────────────── */
	home: {
		seo: {
			title: 'Velocity Bucks #39347 — Ingeniería en movimiento',
			description:
				'Velocity Bucks #39347 — Equipo FTC impulsado por la innovación, el trabajo en equipo y la pasión por crear un impacto positivo dentro y fuera de la cancha.'
		},
		eyebrow: `FTC #39347 — Temporada ${SEASON.name} ${SEASON.years}`,
		accent: 'Ingeniería en movimiento',
		lead: 'Un equipo impulsado por la innovación, el trabajo en equipo y la pasión por crear un impacto positivo dentro y fuera de la cancha de juego.',
		ctaRobot: 'Ver nuestro Robot',
		ctaSupport: 'Apóyanos',
		statsLabel: 'Métricas del equipo',
		manifesto: {
			label: 'Manifiesto',
			name: 'Velocity Bucks:',
			text: 'Un equipo impulsado por la innovación, el trabajo en equipo y la pasión por crear un impacto positivo dentro y fuera de la cancha de juego.'
		},
		pillars: {
			eyebrow: 'Nuestra cultura',
			title: 'Lo que nos mueve',
			accent: 'Seis pilares de trabajo',
			subtitle: 'Los principios que definen cómo trabajamos, pensamos y competimos.',
			cta: 'Conocer al equipo completo'
		},
		explore: { eyebrow: 'Explora', title: 'Más sobre Velocity Bucks' },
		teasers: [
			{
				path: '/ingenieria',
				tone: 'gold',
				eyebrow: 'Ingeniería',
				title: 'Our Robot',
				accent: 'Proceso de Ingeniería',
				body: 'Ficha técnica, renders CAD y el ciclo de desarrollo del robot de la temporada.'
			},
			{
				path: '/impacto',
				tone: 'steel',
				eyebrow: 'Outreach',
				title: 'Impact',
				accent: 'Beyond Robotics',
				body: 'Talleres, voluntariado e iniciativas que trascienden la cancha de juego.'
			},
			{
				path: '/patrocinadores',
				tone: 'dark',
				eyebrow: 'Alianzas',
				title: 'Community',
				accent: 'More than Robots',
				body: 'Únete a la misión. Apoya el desarrollo de talento STEM en nuestra región.'
			}
		],
		countdown: {
			eyebrow: 'Próxima competencia',
			namePending: 'Evento por confirmar',
			datePending: 'Fecha por confirmar',
			pendingNote: 'La cuenta atrás empezará en cuanto se confirme la fecha.',
			started: '¡Hoy competimos!',
			label: 'Tiempo restante hasta la próxima competencia',
			units: { days: 'Días', hours: 'Horas', minutes: 'Min', seconds: 'Seg' }
		},
		season: {
			eyebrow: 'Temporada',
			title: 'Season',
			accent: 'Ruta de competencia',
			body: 'Calendario de eventos, resultados y premios de la temporada. Se actualizará a medida que avance la competencia.',
			cta: 'Ver la temporada'
		}
	},

	/* ─────────────── NOSOTROS ─────────────── */
	about: {
		seo: {
			title: 'Nosotros — Velocity Bucks #39347',
			description:
				'Conoce al equipo Velocity Bucks #39347. Nuestra historia, pilares de trabajo y el roster de ingenieros, diseñadores y líderes.'
		},
		header: {
			eyebrow: 'Nuestros orígenes',
			title: 'Nuestra Historia',
			accent: 'Velocity Bucks #39347',
			subtitle:
				'Debutamos formalmente como #39347 con experiencia acumulada y una visión clara: competir al más alto nivel desde el primer día.'
		},
		historyLabel: 'Nuestra historia',
		history: [
			'Velocity Bucks #39347 nace de la experiencia colectiva de un grupo de jóvenes apasionados por la robótica con trayectoria previa en FIRST. Aunque el número de equipo es nuevo, nuestra filosofía de trabajo y nuestro compromiso con la excelencia técnica no lo son.',
			'Este año marcamos el inicio de una nueva era: una entidad estructurada, profesional y con metas claras tanto dentro como fuera de la cancha de juego.'
		],
		teamPhoto: 'Foto del equipo',
		pillars: {
			eyebrow: 'Nuestra cultura',
			title: 'Pilares de Trabajo',
			accent: 'Seis principios fundamentales'
		},
		roster: {
			eyebrow: 'El equipo',
			title: 'Quiénes Somos',
			accent: 'Talento e ingeniería',
			subtitle:
				'Estudiantes y mentores unidos por la ingeniería, la innovación y el impacto comunitario.',
			students: 'Estudiantes',
			mentors: 'Mentores'
		},
		members: [
			{ name: 'Miembro 1', role: 'Capitán / Programador principal', area: 'Software' },
			{ name: 'Miembro 2', role: 'Líder de Ingeniería Mecánica', area: 'Mecánica' },
			{ name: 'Miembro 3', role: 'Líder de Ingeniería Electrónica', area: 'Electrónica' },
			{ name: 'Miembro 4', role: 'Líder de Outreach', area: 'Outreach' },
			{ name: 'Miembro 5', role: 'Líder de Business', area: 'Business' }
		],
		mentors: [{ name: 'Mentor 1', role: 'Mentor principal', area: 'General' }]
	},

	/* ─────────────── INGENIERÍA ─────────────── */
	engineering: {
		seo: {
			title: 'Ingeniería — Velocity Bucks #39347',
			description:
				'Detalles del robot, proceso de ingeniería y especificaciones técnicas de Velocity Bucks #39347.'
		},
		season: `${SEASON.name} ${SEASON.years}`,
		header: {
			eyebrowPrefix: 'Temporada',
			title: 'Our Robot',
			accent: 'Proceso de Ingeniería',
			subtitle: 'Diseño, iteración y manufactura de alto rendimiento para el desafío competitivo.'
		},
		reveal: {
			eyebrow: 'Robot Reveal',
			title: 'Robot Reveal',
			accent: 'Presentación del robot',
			subtitle: 'El vídeo de presentación del robot de la temporada se publicará aquí.',
			placeholderNote: 'Vídeo próximamente',
			play: 'Reproducir el vídeo Robot Reveal',
			videoTitle: 'Robot Reveal — Velocity Bucks #39347'
		},
		renderLabel: 'Render CAD del robot',
		specsTitle: 'Ficha técnica',
		specs: [
			{ label: 'Chasis', value: 'Gobilda Strafer Kit (Mecanum 4WD)' },
			{ label: 'Drivebase', value: 'Mecanum Wheels — Omnidireccional' },
			{ label: 'Dimensiones', value: '18" x 18" x 18"' },
			{ label: 'Peso aprox.', value: '~12 kg' },
			{ label: 'Sistema de visión', value: 'Limelight 3G (AprilTags + ML Pipeline)' },
			{ label: 'Control', value: 'REV Control Hub + Expansion Hub' },
			{ label: 'Software / Trayectoria', value: 'FTC SDK (Java) + Road Runner 1.0' }
		],
		mechanismsLabel: 'Mecanismos principales',
		mechanisms: ['Intake Rotativa', 'Outtake Lineal', 'Arm de Depósito'],
		process: {
			eyebrow: 'Metodología',
			title: 'Ciclo de Ingeniería',
			accent: 'De la idea a la competencia',
			subtitle: 'Un proceso iterativo riguroso que garantiza solidez en la cancha.'
		},
		steps: [
			{
				title: 'Análisis del Juego',
				description:
					'Estudio del reglamento, análisis de puntuación y definición de estrategia competitiva.'
			},
			{
				title: 'Diseño CAD',
				description:
					'Modelado 3D en Onshape. Iteraciones de diseño mecánico con validación por subequipo.'
			},
			{
				title: 'Prototipado',
				description:
					'Manufactura de prototipos funcionales para validar hipótesis de diseño mecánico.'
			},
			{
				title: 'Integración y Pruebas',
				description:
					'Ensamble del robot completo, pruebas de rendimiento y detección de puntos de falla.'
			},
			{
				title: 'Iteración',
				description:
					'Refinamiento basado en datos de pruebas. Mejoras continuas hasta la competencia.'
			}
		]
	},

	/* ─────────────── TEMPORADA ─────────────── */
	season: {
		seo: {
			title: 'Temporada — Velocity Bucks #39347',
			description:
				'Calendario de eventos, resultados, métricas de rendimiento y premios de Velocity Bucks #39347 en la temporada FTC.'
		},
		header: {
			eyebrowPrefix: 'Temporada',
			title: 'Season',
			accent: 'Ruta de competencia',
			subtitle:
				'Calendario de eventos, resultados y premios de la temporada. Esta sección se actualizará a medida que avance la competencia.'
		},
		statsLabel: 'Métricas de rendimiento',
		stats: [
			{ value: null, label: 'Partidos jugados' },
			{ value: null, label: 'Récord (V-D-E)' },
			{ value: null, label: 'Puntuación máxima' },
			{ value: null, label: 'Mejor ranking' }
		] as Metric[],
		events: {
			eyebrow: 'Calendario',
			title: 'Eventos',
			accent: 'Fechas y resultados',
			columns: { date: 'Fecha', event: 'Evento', rank: 'Ranking', record: 'Récord', status: 'Estado' },
			eventLabel: 'Evento',
			venuePending: 'Sede por confirmar',
			namePending: 'Evento por confirmar',
			datePending: 'Fecha por confirmar',
			count: 4
		},
		awards: {
			eyebrow: 'Reconocimientos',
			title: 'Premios',
			accent: 'Logros de la temporada',
			slot: 'Premio por anunciar',
			slotNote: 'Espacio reservado para los reconocimientos obtenidos en competencia.',
			count: 3
		}
	},

	/* ─────────────── IMPACTO ─────────────── */
	impact: {
		seo: {
			title: 'Impacto STEM — Velocity Bucks #39347',
			description:
				'Iniciativas comunitarias, talleres y proyectos de divulgación STEM de Velocity Bucks #39347.'
		},
		header: {
			eyebrow: 'Outreach',
			title: 'Impact',
			accent: 'Beyond Robotics',
			subtitle:
				'Nuestra misión trasciende la arena de competencia: inspiramos a las próximas generaciones de científicos e ingenieros.'
		},
		statsLabel: 'Métricas de impacto',
		stats: [
			{ value: null, label: 'Talleres impartidos' },
			{ value: null, label: 'Escuelas visitadas' },
			{ value: null, label: 'Horas de voluntariado' },
			{ value: null, label: 'Equipos mentorados' }
		] as Metric[],
		listLabel: 'Iniciativas de impacto',
		initiatives: [
			{
				tag: 'Educación',
				title: 'Talleres Comunitarios STEM',
				body: 'Acercamos la robótica, programación e impresión 3D a escuelas públicas y centros juveniles, democratizando el acceso a herramientas tecnológicas.',
				photo: 'Foto de taller'
			},
			{
				tag: 'Comunidad',
				title: 'Mentoría y Difusión FIRST',
				body: 'Asesoramos a equipos novatos en diseño mecánico, programación en Java y gestión de equipo para fortalecer el ecosistema FTC en nuestra región.',
				photo: 'Foto de mentoría'
			},
			{
				tag: 'Innovación',
				title: 'More Than Robots',
				body: 'Promovemos los valores de FIRST: Gracious Professionalism y Coopertition, demostrando que la competencia y el compañerismo van de la mano.',
				photo: 'Foto de evento'
			}
		]
	},

	/* ─────────────── PORTAFOLIO ─────────────── */
	portfolio: {
		seo: {
			title: 'Portafolio — Velocity Bucks #39347',
			description:
				'Portafolio de ingeniería y proyectos de Velocity Bucks #39347: mecánica, software, electrónica, CAD, outreach y business.'
		},
		header: {
			eyebrow: 'Engineering Portfolio',
			title: 'Portfolio',
			accent: 'Documentación de ingeniería',
			subtitle:
				'El registro del proceso de diseño, las decisiones técnicas y el trabajo de outreach del equipo a lo largo de la temporada.'
		},
		document: {
			eyebrow: 'Documento',
			title: 'Portafolio de ingeniería',
			body: 'La versión completa del portafolio de la temporada estará disponible para descargar en PDF.',
			download: 'Descargar PDF',
			unavailable: 'Disponible próximamente',
			cover: 'Portada del portafolio'
		},
		projects: {
			eyebrow: 'Proyectos',
			title: 'Trabajo destacado',
			accent: 'Por subequipo',
			itemTitle: 'Proyecto por publicar',
			itemBody: 'Espacio reservado para documentar este proyecto.',
			areas: ['Mecánica', 'Software', 'Electrónica', 'CAD', 'Outreach', 'Business']
		}
	},

	/* ─────────────── PATROCINADORES ─────────────── */
	sponsors: {
		seo: {
			title: 'Patrocinadores — Velocity Bucks #39347',
			description:
				'Conviértete en patrocinador de Velocity Bucks #39347 y apoya el talento joven en ciencia y tecnología.'
		},
		header: {
			eyebrow: 'Alianzas Estratégicas',
			title: 'Community',
			accent: 'More than Robots',
			subtitle:
				'El patrocinio es una inversión directa en el talento STEM del futuro. Descubre los beneficios para tu organización.'
		},
		tiersTitle: 'Niveles de patrocinio',
		tierLabel: 'Nivel',
		sponsorCta: 'Patrocinar',
		tiers: [
			{
				id: 'platinum',
				name: 'Platino',
				description: 'Aliado estratégico principal',
				benefits: [
					'Logo principal en robot y uniformes',
					'Mención en todos los materiales de prensa',
					'Presencia destacada en sitio web',
					'Reporte de impacto personalizado',
					'Visita al taller del equipo'
				]
			},
			{
				id: 'gold',
				name: 'Oro',
				description: 'Patrocinador de alta visibilidad',
				benefits: [
					'Logo en robot y uniformes',
					'Mención en materiales digitales',
					'Presencia en sitio web',
					'Reporte de impacto'
				]
			},
			{
				id: 'silver',
				name: 'Plata',
				description: 'Patrocinador de apoyo',
				benefits: ['Logo en uniformes', 'Mención en redes sociales', 'Presencia en sitio web']
			}
		],
		dossier: {
			eyebrow: 'Dossier de patrocinio',
			title: 'Toda la propuesta en un documento',
			body: 'Descarga el dossier con la presentación del equipo, los niveles de patrocinio y sus beneficios para compartirlo dentro de tu organización.',
			download: 'Descargar PDF',
			view: 'Ver en línea'
		},
		contact: {
			eyebrow: 'Únete a nosotros',
			title: 'Contacto',
			accent: 'Hagamos equipo',
			subtitle:
				'Escríbenos para conocer más sobre nuestro programa de patrocinio o resolver cualquier duda.',
			name: 'Nombre / Empresa',
			namePlaceholder: 'Tu nombre o empresa',
			email: 'Correo Electrónico',
			emailPlaceholder: 'correo@ejemplo.com',
			message: 'Mensaje',
			messagePlaceholder: '¿En qué nivel o forma te gustaría colaborar?',
			submit: 'Enviar Mensaje'
		}
	},

	/* ─────────────── DOSSIER ─────────────── */
	dossier: {
		seo: {
			title: 'Dossier de patrocinio — Velocity Bucks #39347',
			description:
				'Dossier de patrocinio de Velocity Bucks #39347: presentación del equipo, impacto, ingeniería y niveles de patrocinio.'
		},
		toolbar: { label: 'Acciones del documento', back: 'Volver al sitio', print: 'Imprimir', download: 'Descargar PDF' },
		cover: { kicker: 'Dossier de patrocinio', season: `Temporada ${SEASON.name} ${SEASON.years}` },
		sections: {
			about: 'Quiénes somos',
			pillars: 'Pilares de trabajo',
			engineering: 'Ingeniería',
			impact: 'Impacto en la comunidad',
			tiers: 'Niveles de patrocinio',
			contact: 'Contacto'
		},
		contribution: 'Aportación',
		contactLead: 'Hagamos equipo. Escríbenos para conocer más sobre nuestro programa de patrocinio.',
		contactRows: { email: 'Correo', web: 'Sitio web', social: 'Redes' },
		page: 'Página'
	},

	/* ─────────────── DEERSEEKER ─────────────── */
	deerseeker: {
		seo: {
			title: 'Deerseeker — Velocity Bucks #39347',
			description:
				'Deerseeker, la herramienta de scouting de Velocity Bucks #39347 para registrar y analizar el rendimiento de los equipos FTC. En desarrollo.'
		},
		header: {
			eyebrow: 'Scouting App',
			title: 'Deerseeker',
			accent: 'Scouting con datos',
			subtitle:
				'La herramienta que estamos construyendo para observar, registrar y comparar a los equipos en cada competencia. Todavía está en desarrollo: esto es un adelanto.'
		},
		status: {
			label: 'Estado',
			value: 'En desarrollo',
			version: 'Versión',
			versionValue: 'v0.0 — prototipo',
			release: 'Lanzamiento',
			releaseValue: 'Por confirmar'
		},
		features: {
			eyebrow: 'Funciones',
			title: 'Lo que hará',
			accent: 'Planeado para la temporada',
			items: [
				{ icon: 'stopwatch', title: 'Scouting de partidos', body: 'Registro rápido de cada fase del partido: autónomo, TeleOp y endgame.' },
				{ icon: 'target', title: 'Análisis por equipo', body: 'Promedios, tendencias y consistencia de cada equipo a lo largo del evento.' },
				{ icon: 'team', title: 'Lista de alianzas', body: 'Clasificación propia para preparar la selección de alianzas.' },
				{ icon: 'globe', title: 'Funciona sin conexión', body: 'Pensado para el pit y las gradas, donde la señal no siempre llega.' }
			]
		},
		preview: {
			eyebrow: 'Vista previa',
			title: 'Tablero de equipos',
			accent: 'Datos de ejemplo',
			searchLabel: 'Buscar equipo',
			searchPlaceholder: 'Número o nombre del equipo',
			caption: 'Vista previa del tablero de scouting; los datos se mostrarán cuando la herramienta esté lista.',
			columns: ['Equipo', 'Autónomo', 'TeleOp', 'Endgame', 'Promedio'],
			rowLabel: 'Equipo por registrar',
			note: 'Los datos reales aparecerán aquí cuando Deerseeker esté listo.'
		},
		game: {
			eyebrow: 'Mientras tanto',
			title: 'Atrapa los bucks',
			accent: 'Minijuego',
			body: 'Los bucks se asoman entre los arbustos. Atrapa todos los que puedas en 30 segundos. El buck dorado vale 3 puntos.',
			start: 'Jugar',
			again: 'Jugar otra vez',
			score: 'Puntos',
			time: 'Tiempo',
			best: 'Récord',
			ready: '¿Listo? Pulsa «Jugar».',
			over: 'Se acabó el tiempo',
			newBest: '¡Nuevo récord!',
			hint: 'También puedes usar las teclas 1–9.',
			fieldLabel: 'Campo de juego',
			bush: 'Arbusto',
			buck: 'Buck: ¡atrápalo!',
			goldBuck: 'Buck dorado: ¡atrápalo!',
			points: 'puntos'
		}
	},

	/* ─────────────── EASTER EGG ─────────────── */
	easterEgg: {
		title: 'Modo Buck activado',
		body: 'Encontraste el código secreto. Hay un minijuego esperándote en Deerseeker.',
		cta: 'Ir al minijuego',
		close: 'Cerrar'
	},

	/* ─────────────── ERROR ─────────────── */
	error: {
		label: 'Error',
		notFoundTitle: 'Fuera de pista',
		notFoundAccent: 'Esta página no existe',
		notFoundBody: 'Es posible que el enlace haya cambiado o que la dirección esté mal escrita.',
		genericTitle: 'Algo falló',
		genericAccent: 'Inténtalo de nuevo en unos momentos',
		genericBody: 'Ocurrió un error inesperado al cargar esta página.',
		back: 'Volver al inicio'
	}
};

export interface Metric {
	/** `null` = dato pendiente (se muestra un placeholder) */
	value: string | null;
	label: string;
	prefix?: string;
	suffix?: string;
}

export type Content = typeof es;
export default es;
