/**
 * Site content — ENGLISH.
 * Must mirror the structure of es.ts exactly (enforced by the `Content` type).
 */
import type { Content, Metric } from './es.ts';
import { SEASON } from '../site.ts';

const en: Content = {
	meta: {
		htmlLang: 'en',
		ogLocale: 'en_US',
		siteName: 'Velocity Bucks #39347',
		tagline: 'Engineering in motion',
		description:
			'Velocity Bucks #39347 — An FTC team driven by innovation, teamwork and a passion for making a positive impact on and off the field.'
	},

	common: {
		pending: 'To be confirmed',
		pendingData: 'Data pending',
		comingSoon: 'Coming soon',
		photo: 'Photo',
		newTab: '(opens in a new tab)'
	},

	nav: {
		home: 'Home',
		links: [
			{ path: '/nosotros', label: 'About' },
			{ path: '/ingenieria', label: 'Engineering' },
			{ path: '/temporada', label: 'Season' },
			{ path: '/impacto', label: 'Impact' },
			{ path: '/portafolio', label: 'Portfolio' },
			{ path: '/patrocinadores', label: 'Sponsors' },
			{ path: '/deerseeker', label: 'Deerseeker' }
		],
		contact: 'Contact us',
		mainLabel: 'Main navigation',
		homeLabel: 'Velocity Bucks — Home',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		skip: 'Skip to content',
		switchLang: { short: 'ES', label: 'Ver esta página en español', hreflang: 'es' }
	},

	footer: {
		tagline: 'Engineering in motion.',
		siteTitle: 'Site',
		followTitle: 'Follow us',
		navLabel: 'Footer navigation',
		disclaimer:
			'FIRST®, FIRST® Tech Challenge and FIRST® Robotics Competition are registered trademarks of For Inspiration and Recognition of Science and Technology (FIRST). Velocity Bucks #39347 is an independent team.',
		rights: 'All rights reserved.'
	},

	prefooter: {
		label: 'Team philosophy',
		quote: 'Alone you go fast, but together you go further.'
	},

	logoAlt: 'Velocity Bucks logo',

	stats: [
		{ value: '39347', label: 'Team Number', prefix: '#', suffix: '' },
		{ value: '10', label: 'Members', prefix: '', suffix: '+' },
		{ value: '500', label: 'Engineering Hours', prefix: '', suffix: 'h' },
		{ value: '200', label: 'People Reached', prefix: '', suffix: '+' }
	] as Metric[],

	pillars: [
		{
			id: 'velocidad',
			icon: 'bolt',
			title: 'Speed',
			description:
				'We act with agility and determination. Every decision counts and time is our most valuable resource.'
		},
		{
			id: 'excelencia',
			icon: 'target',
			title: 'Excellence',
			description:
				'We don’t settle for average. Every design iteration and every line of code must outperform the last.'
		},
		{
			id: 'trabajo-equipo',
			icon: 'team',
			title: 'Teamwork',
			description:
				'Our achievements are collective. The synergy between disciplines is our greatest competitive advantage.'
		},
		{
			id: 'formacion-tecnica',
			icon: 'set-square',
			title: 'Technical Training',
			description:
				'We learn by doing. Every season is an opportunity to master new technologies and methodologies.'
		},
		{
			id: 'disciplina',
			icon: 'stopwatch',
			title: 'Discipline',
			description:
				'The process matters as much as the result. Consistency, punctuality and rigor define how we work.'
		},
		{
			id: 'descubrimiento',
			icon: 'compass',
			title: 'Discovery',
			description:
				'Curiosity is our engine. We explore unconventional solutions and question the status quo.'
		}
	],

	home: {
		seo: {
			title: 'Velocity Bucks #39347 — Engineering in motion',
			description:
				'Velocity Bucks #39347 — An FTC team driven by innovation, teamwork and a passion for making a positive impact on and off the field.'
		},
		eyebrow: `FTC #39347 — ${SEASON.name} ${SEASON.years} Season`,
		accent: 'Engineering in motion',
		lead: 'A team driven by innovation, teamwork and a passion for making a positive impact on and off the playing field.',
		ctaRobot: 'See our Robot',
		ctaSupport: 'Support us',
		statsLabel: 'Team metrics',
		manifesto: {
			label: 'Manifesto',
			name: 'Velocity Bucks:',
			text: 'A team driven by innovation, teamwork and a passion for making a positive impact on and off the playing field.'
		},
		pillars: {
			eyebrow: 'Our culture',
			title: 'What drives us',
			accent: 'Six working pillars',
			subtitle: 'The principles that define how we work, think and compete.',
			cta: 'Meet the whole team'
		},
		explore: { eyebrow: 'Explore', title: 'More about Velocity Bucks' },
		teasers: [
			{
				path: '/ingenieria',
				tone: 'gold',
				eyebrow: 'Engineering',
				title: 'Our Robot',
				accent: 'Engineering Process',
				body: 'Technical specs, CAD renders and the development cycle of this season’s robot.'
			},
			{
				path: '/impacto',
				tone: 'steel',
				eyebrow: 'Outreach',
				title: 'Impact',
				accent: 'Beyond Robotics',
				body: 'Workshops, volunteering and initiatives that go beyond the playing field.'
			},
			{
				path: '/patrocinadores',
				tone: 'dark',
				eyebrow: 'Partnerships',
				title: 'Community',
				accent: 'More than Robots',
				body: 'Join the mission. Support the development of STEM talent in our region.'
			}
		],
		countdown: {
			eyebrow: 'Next competition',
			namePending: 'Event to be confirmed',
			datePending: 'Date to be confirmed',
			pendingNote: 'The countdown will start as soon as the date is confirmed.',
			started: 'Competition day!',
			label: 'Time left until the next competition',
			units: { days: 'Days', hours: 'Hours', minutes: 'Min', seconds: 'Sec' }
		},
		season: {
			eyebrow: 'Season',
			title: 'Season',
			accent: 'Road to competition',
			body: 'Event calendar, results and awards for the season. It will be updated as the competition progresses.',
			cta: 'View the season'
		}
	},

	about: {
		seo: {
			title: 'About — Velocity Bucks #39347',
			description:
				'Meet Velocity Bucks #39347. Our story, working pillars and the roster of engineers, designers and leaders.'
		},
		header: {
			eyebrow: 'Our origins',
			title: 'Our Story',
			accent: 'Velocity Bucks #39347',
			subtitle:
				'We formally debut as #39347 with accumulated experience and a clear vision: to compete at the highest level from day one.'
		},
		historyLabel: 'Our story',
		history: [
			'Velocity Bucks #39347 was born from the collective experience of a group of young robotics enthusiasts with prior experience in FIRST. Although our team number is new, our working philosophy and our commitment to technical excellence are not.',
			'This year marks the beginning of a new era: a structured, professional organization with clear goals both on and off the playing field.'
		],
		teamPhoto: 'Team photo',
		pillars: {
			eyebrow: 'Our culture',
			title: 'Working Pillars',
			accent: 'Six core principles'
		},
		roster: {
			eyebrow: 'The team',
			title: 'Who We Are',
			accent: 'Talent and engineering',
			subtitle: 'Students and mentors united by engineering, innovation and community impact.',
			students: 'Students',
			mentors: 'Mentors'
		},
		members: [
			{ name: 'Member 1', role: 'Captain / Lead Programmer', area: 'Software' },
			{ name: 'Member 2', role: 'Lead Mechanical Engineer', area: 'Mechanical' },
			{ name: 'Member 3', role: 'Lead Electrical Engineer', area: 'Electrical' },
			{ name: 'Member 4', role: 'Outreach Lead', area: 'Outreach' },
			{ name: 'Member 5', role: 'Business Lead', area: 'Business' }
		],
		mentors: [{ name: 'Mentor 1', role: 'Lead Mentor', area: 'General' }]
	},

	engineering: {
		seo: {
			title: 'Engineering — Velocity Bucks #39347',
			description:
				'Robot details, engineering process and technical specifications of Velocity Bucks #39347.'
		},
		season: `${SEASON.name} ${SEASON.years}`,
		header: {
			eyebrowPrefix: 'Season',
			title: 'Our Robot',
			accent: 'Engineering Process',
			subtitle: 'High-performance design, iteration and manufacturing for the competitive challenge.'
		},
		reveal: {
			eyebrow: 'Robot Reveal',
			title: 'Robot Reveal',
			accent: 'Meet the robot',
			subtitle: 'This season’s robot reveal video will be published here.',
			placeholderNote: 'Video coming soon',
			play: 'Play the Robot Reveal video',
			videoTitle: 'Robot Reveal — Velocity Bucks #39347'
		},
		renderLabel: 'Robot CAD render',
		specsTitle: 'Technical specs',
		specs: [
			{ label: 'Chassis', value: 'Gobilda Strafer Kit (Mecanum 4WD)' },
			{ label: 'Drivebase', value: 'Mecanum Wheels — Omnidirectional' },
			{ label: 'Dimensions', value: '18" x 18" x 18"' },
			{ label: 'Approx. weight', value: '~12 kg' },
			{ label: 'Vision system', value: 'Limelight 3G (AprilTags + ML Pipeline)' },
			{ label: 'Control', value: 'REV Control Hub + Expansion Hub' },
			{ label: 'Software / Pathing', value: 'FTC SDK (Java) + Road Runner 1.0' }
		],
		mechanismsLabel: 'Main mechanisms',
		mechanisms: ['Rotary Intake', 'Linear Outtake', 'Deposit Arm'],
		process: {
			eyebrow: 'Methodology',
			title: 'Engineering Cycle',
			accent: 'From idea to competition',
			subtitle: 'A rigorous iterative process that ensures reliability on the field.'
		},
		steps: [
			{
				title: 'Game Analysis',
				description: 'Studying the game manual, scoring analysis and defining a competitive strategy.'
			},
			{
				title: 'CAD Design',
				description:
					'3D modeling in Onshape. Mechanical design iterations validated by each sub-team.'
			},
			{
				title: 'Prototyping',
				description: 'Building functional prototypes to validate mechanical design hypotheses.'
			},
			{
				title: 'Integration & Testing',
				description: 'Full robot assembly, performance testing and identifying points of failure.'
			},
			{
				title: 'Iteration',
				description: 'Data-driven refinement from testing. Continuous improvement up to competition.'
			}
		]
	},

	season: {
		seo: {
			title: 'Season — Velocity Bucks #39347',
			description:
				'Event calendar, results, performance metrics and awards of Velocity Bucks #39347 in the FTC season.'
		},
		header: {
			eyebrowPrefix: 'Season',
			title: 'Season',
			accent: 'Road to competition',
			subtitle:
				'Event calendar, results and awards for the season. This section will be updated as the competition progresses.'
		},
		statsLabel: 'Performance metrics',
		stats: [
			{ value: null, label: 'Matches played' },
			{ value: null, label: 'Record (W-L-T)' },
			{ value: null, label: 'High score' },
			{ value: null, label: 'Best ranking' }
		] as Metric[],
		events: {
			eyebrow: 'Calendar',
			title: 'Events',
			accent: 'Dates and results',
			columns: { date: 'Date', event: 'Event', rank: 'Ranking', record: 'Record', status: 'Status' },
			eventLabel: 'Event',
			venuePending: 'Venue to be confirmed',
			namePending: 'Event to be confirmed',
			datePending: 'Date to be confirmed',
			count: 4
		},
		awards: {
			eyebrow: 'Recognition',
			title: 'Awards',
			accent: 'Season achievements',
			slot: 'Award to be announced',
			slotNote: 'Reserved space for awards earned in competition.',
			count: 3
		}
	},

	impact: {
		seo: {
			title: 'STEM Impact — Velocity Bucks #39347',
			description:
				'Community initiatives, workshops and STEM outreach projects by Velocity Bucks #39347.'
		},
		header: {
			eyebrow: 'Outreach',
			title: 'Impact',
			accent: 'Beyond Robotics',
			subtitle:
				'Our mission goes beyond the competition arena: we inspire the next generations of scientists and engineers.'
		},
		statsLabel: 'Impact metrics',
		stats: [
			{ value: null, label: 'Workshops delivered' },
			{ value: null, label: 'Schools visited' },
			{ value: null, label: 'Volunteer hours' },
			{ value: null, label: 'Teams mentored' }
		] as Metric[],
		listLabel: 'Impact initiatives',
		initiatives: [
			{
				tag: 'Education',
				title: 'Community STEM Workshops',
				body: 'We bring robotics, programming and 3D printing to public schools and youth centers, democratizing access to technology.',
				photo: 'Workshop photo'
			},
			{
				tag: 'Community',
				title: 'FIRST Mentoring & Outreach',
				body: 'We advise rookie teams on mechanical design, Java programming and team management to strengthen the FTC ecosystem in our region.',
				photo: 'Mentoring photo'
			},
			{
				tag: 'Innovation',
				title: 'More Than Robots',
				body: 'We promote the values of FIRST — Gracious Professionalism and Coopertition — showing that competition and camaraderie go hand in hand.',
				photo: 'Event photo'
			}
		]
	},

	portfolio: {
		seo: {
			title: 'Portfolio — Velocity Bucks #39347',
			description:
				'Engineering portfolio and projects of Velocity Bucks #39347: mechanical, software, electrical, CAD, outreach and business.'
		},
		header: {
			eyebrow: 'Engineering Portfolio',
			title: 'Portfolio',
			accent: 'Engineering documentation',
			subtitle:
				'A record of the team’s design process, technical decisions and outreach work throughout the season.'
		},
		document: {
			eyebrow: 'Document',
			title: 'Engineering portfolio',
			body: 'The full version of this season’s portfolio will be available to download as a PDF.',
			download: 'Download PDF',
			unavailable: 'Coming soon',
			cover: 'Portfolio cover'
		},
		projects: {
			eyebrow: 'Projects',
			title: 'Featured work',
			accent: 'By sub-team',
			itemTitle: 'Project to be published',
			itemBody: 'Reserved space to document this project.',
			areas: ['Mechanical', 'Software', 'Electrical', 'CAD', 'Outreach', 'Business']
		}
	},

	sponsors: {
		seo: {
			title: 'Sponsors — Velocity Bucks #39347',
			description:
				'Become a sponsor of Velocity Bucks #39347 and support young talent in science and technology.'
		},
		header: {
			eyebrow: 'Strategic Partnerships',
			title: 'Community',
			accent: 'More than Robots',
			subtitle:
				'Sponsorship is a direct investment in the STEM talent of the future. Discover the benefits for your organization.'
		},
		tiersTitle: 'Sponsorship tiers',
		tierLabel: 'Tier',
		sponsorCta: 'Sponsor',
		tiers: [
			{
				id: 'platinum',
				name: 'Platinum',
				description: 'Main strategic partner',
				benefits: [
					'Main logo on robot and uniforms',
					'Mention in all press materials',
					'Featured presence on the website',
					'Personalized impact report',
					'Visit to the team workshop'
				]
			},
			{
				id: 'gold',
				name: 'Gold',
				description: 'High-visibility sponsor',
				benefits: [
					'Logo on robot and uniforms',
					'Mention in digital materials',
					'Presence on the website',
					'Impact report'
				]
			},
			{
				id: 'silver',
				name: 'Silver',
				description: 'Supporting sponsor',
				benefits: ['Logo on uniforms', 'Social media mention', 'Presence on the website']
			}
		],
		dossier: {
			eyebrow: 'Sponsorship deck',
			title: 'The whole proposal in one document',
			body: 'Download the deck with the team overview, sponsorship tiers and their benefits to share within your organization.',
			download: 'Download PDF',
			view: 'View online'
		},
		contact: {
			eyebrow: 'Join us',
			title: 'Contact',
			accent: 'Let’s team up',
			subtitle:
				'Write to us to learn more about our sponsorship program or to ask any question.',
			name: 'Name / Company',
			namePlaceholder: 'Your name or company',
			email: 'Email',
			emailPlaceholder: 'email@example.com',
			message: 'Message',
			messagePlaceholder: 'At what tier or in what way would you like to collaborate?',
			submit: 'Send Message'
		}
	},

	dossier: {
		seo: {
			title: 'Sponsorship deck — Velocity Bucks #39347',
			description:
				'Sponsorship deck of Velocity Bucks #39347: team overview, impact, engineering and sponsorship tiers.'
		},
		toolbar: { label: 'Document actions', back: 'Back to site', print: 'Print', download: 'Download PDF' },
		cover: { kicker: 'Sponsorship deck', season: `${SEASON.name} ${SEASON.years} Season` },
		sections: {
			about: 'Who we are',
			pillars: 'Working pillars',
			engineering: 'Engineering',
			impact: 'Community impact',
			tiers: 'Sponsorship tiers',
			contact: 'Contact'
		},
		contribution: 'Contribution',
		contactLead: 'Let’s team up. Write to us to learn more about our sponsorship program.',
		contactRows: { email: 'Email', web: 'Website', social: 'Social' },
		page: 'Page'
	},

	/* ─────────────── DEERSEEKER ─────────────── */
	deerseeker: {
		seo: {
			title: 'Deerseeker — Velocity Bucks #39347',
			description:
				'Deerseeker, the Velocity Bucks #39347 scouting tool for recording and analysing FTC team performance. In development.'
		},
		header: {
			eyebrow: 'Scouting App',
			title: 'Deerseeker',
			accent: 'Data-driven scouting',
			subtitle:
				'The tool we are building to watch, record and compare teams at every competition. It is still in development: this is a sneak peek.'
		},
		status: {
			label: 'Status',
			value: 'In development',
			version: 'Version',
			versionValue: 'v0.0 — prototype',
			release: 'Release',
			releaseValue: 'To be confirmed'
		},
		features: {
			eyebrow: 'Features',
			title: 'What it will do',
			accent: 'Planned for the season',
			items: [
				{ icon: 'stopwatch', title: 'Match scouting', body: 'Quick logging of every match phase: autonomous, TeleOp and endgame.' },
				{ icon: 'target', title: 'Team analysis', body: 'Averages, trends and consistency for every team across the event.' },
				{ icon: 'team', title: 'Pick list', body: 'Our own ranking to prepare for alliance selection.' },
				{ icon: 'globe', title: 'Works offline', body: 'Built for the pits and the stands, where signal does not always reach.' }
			]
		},
		preview: {
			eyebrow: 'Preview',
			title: 'Team board',
			accent: 'Sample data',
			searchLabel: 'Search team',
			searchPlaceholder: 'Team number or name',
			caption: 'Preview of the scouting board; data will appear once the tool is ready.',
			columns: ['Team', 'Autonomous', 'TeleOp', 'Endgame', 'Average'],
			rowLabel: 'Team to be added',
			note: 'Real data will show up here once Deerseeker is ready.'
		},
		game: {
			eyebrow: 'Meanwhile',
			title: 'Catch the bucks',
			accent: 'Mini-game',
			body: 'Bucks are peeking out of the bushes. Catch as many as you can in 30 seconds. The golden buck is worth 3 points.',
			start: 'Play',
			again: 'Play again',
			score: 'Score',
			time: 'Time',
			best: 'Best',
			ready: 'Ready? Press “Play”.',
			over: 'Time is up',
			newBest: 'New record!',
			hint: 'You can also use keys 1–9.',
			fieldLabel: 'Playing field',
			bush: 'Bush',
			buck: 'Buck: catch it!',
			goldBuck: 'Golden buck: catch it!',
			points: 'points'
		}
	},

	/* ─────────────── EASTER EGG ─────────────── */
	easterEgg: {
		title: 'Buck Mode activated',
		body: 'You found the secret code. A mini-game is waiting for you on Deerseeker.',
		cta: 'Go to the mini-game',
		close: 'Close'
	},

	error: {
		label: 'Error',
		notFoundTitle: 'Off track',
		notFoundAccent: 'This page doesn’t exist',
		notFoundBody: 'The link may have changed or the address may be misspelled.',
		genericTitle: 'Something went wrong',
		genericAccent: 'Please try again in a moment',
		genericBody: 'An unexpected error occurred while loading this page.',
		back: 'Back to home'
	}
};

export default en;
