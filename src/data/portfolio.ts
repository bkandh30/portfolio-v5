// Draft content stays centralized so final copy can change without reshaping components.
export const portfolio = {
	hero: {
		availability: "Open to opportunities",
		headline: {
			prefix: "I build",
			words: ["backend systems.", "platform tools.", "web products."],
			accessible: "I build backend systems, platform tools, and web products.",
		},
		description:
			"I turn ambiguous requirements into production-ready Java and Spring Boot services, platform tooling, and TypeScript and React experiences. From system design through deployment, I bring end-to-end ownership, clean architecture, and pragmatic delivery.",
		actions: {
			primary: { label: "View my work", href: "/#projects" },
			secondary: { label: "Get in touch", href: "/#contact" },
		},
		portrait: {
			src: "/images/bhavya-kandhari.jpg",
			alt: "Portrait of Bhavya Kandhari",
			width: 864,
			height: 1080,
		},
		socials: [
			{
				label: "GitHub",
				href: "https://github.com/bkandh30",
				icon: "github",
			},
			{
				label: "LinkedIn",
				href: "https://linkedin.com/in/kandharibhavya",
				icon: "linkedin",
			},
			{
				label: "Email",
				href: "mailto:apply.bhavya.kandhari@gmail.com",
				icon: "email",
			},
		],
	},
	about: {
		intro: {
			marker: "01 / About",
			title: "A bit about me",
			description:
				"How I approach engineering, and the experience that has shaped the systems I build.",
		},
		profile: {
			title: "Backend engineering with a product sensibility.",
			summary: [
				"I'm a software engineer focused on backend services, internal platforms, and production APIs.",
				"I also build the TypeScript and React experiences that connect people to the systems I design.",
			],
			metadata: [
				{ label: "Focus", value: "Backend & platform systems" },
				{ label: "Stack", value: "Java, Spring Boot, TypeScript, React" },
				{ label: "Status", value: "Open to opportunities" },
			],
		},
		experience: [
			{
				title: "Software Engineer II",
				company: "Softpoint",
				dates: "MAY 2026 - PRESENT",
				meta: null,
				highlights: [
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
					"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
				],
			},
			{
				title: "Software Engineer",
				company: "Liberty Mutual Insurance",
				dates: "JAN 2025 - MAY 2026",
				meta: "Contract",
				highlights: [
					"Built backend services for policy and claims workflows, with an emphasis on API design, secure data access, and production reliability.",
					"Contributed to event-driven integrations and internal frontend workflows across core insurance systems.",
				],
			},
			{
				title: "Associate Software Engineer",
				company: "EY GDS",
				dates: "SEP 2020 - JUL 2023",
				meta: "Enterprise engineering",
				highlights: [
					"Developed backend systems and batch-processing workflows for document-heavy business operations.",
					"Built service integrations, operational tooling, and internal dashboards for business teams.",
				],
			},
		],
	},
	capabilities: {
		intro: {
			marker: "02 / Capabilities",
			title: "From unclear requirements to working software",
			description:
				"I combine backend depth, product judgment, and end-to-end ownership to turn real business needs into focused, maintainable solutions.",
		},
		items: [
			{
				phase: "Build",
				title: "Backend systems",
				description:
					"I build reliable services around real business workflows, with careful attention to clear interfaces, data flow, and maintainable system boundaries.",
				details: [
					"APIs and services",
					"Business workflows",
					"Integrations and data processing",
				],
			},
			{
				phase: "Shape",
				title: "Product-minded engineering",
				description:
					"I turn ambiguity into clear technical direction by asking the questions behind a requirement, surfacing trade-offs, and finding the smallest useful solution.",
				details: [
					"Clarify the real problem",
					"Challenge assumptions thoughtfully",
					"Balance quality with delivery",
				],
			},
			{
				phase: "Deliver",
				title: "End-to-end feature delivery",
				description:
					"I carry features from requirements through backend implementation, frontend integration, testing, and release while staying accountable to the finished experience.",
				details: [
					"Requirements to implementation",
					"Backend and frontend integration",
					"Testing, release, and iteration",
				],
			},
		],
	},
	projects: {
		intro: {
			marker: "03 / Projects",
			title: "Selected work, built with intent",
			description:
				"A closer look at three projects that show how I approach systems, product decisions, and delivery.",
		},
		featured: {
			label: "Featured project / End-to-end product",
			name: "Scouttrace",
			purpose:
				"A full-stack workspace for discovering, saving, and summarizing web content.",
			summary:
				"I built the authenticated path from discovery and import through persisted processing states and streaming AI summaries.",
			highlights: [
				"Connected content discovery and imports to a persisted model with pending, processing, completed, and failed states.",
				"Built an authenticated streaming summary endpoint so generated output reaches the interface progressively.",
				"Modeled user-owned items, summaries, tags, authors, and source metadata in PostgreSQL through Prisma.",
			],
			stack: [
				"TanStack Start",
				"TypeScript",
				"PostgreSQL",
				"Prisma",
				"Better Auth",
				"Firecrawl",
				"OpenRouter",
			],
			links: [
				{
					label: "View source",
					href: "https://github.com/bkandh30/scouttrace",
					kind: "source",
				},
				{
					label: "Live product",
					href: "https://scouttrace.vercel.app/",
					kind: "live",
				},
			],
			image: {
				src: "/images/projects/scouttrace.webp",
				alt: "Scouttrace landing page with a preview of its saved-content dashboard",
				width: 1800,
				height: 1040,
			},
		},
		supporting: [
			{
				label: "Shipped product / Media workflows",
				name: "EchoForge",
				purpose:
					"An AI-powered text-to-speech workspace for turning scripts into audio with built-in or custom voices.",
				highlights: [
					"Modeled organization-owned voices and generations, including built-in and custom voice workflows.",
					"Connected typed APIs and Prisma persistence to generated media stored in Cloudflare R2.",
				],
				stack: [
					"Next.js",
					"TypeScript",
					"tRPC",
					"PostgreSQL",
					"Clerk",
					"Cloudflare R2",
				],
				links: [
					{
						label: "View source",
						href: "https://github.com/bkandh30/echoforge",
						kind: "source",
					},
					{
						label: "Live product",
						href: "https://echoforgelabs.vercel.app/",
						kind: "live",
					},
				],
				visual: "audio",
			},
			{
				label: "Backend system / API engineering",
				name: "GoFlix",
				purpose:
					"A production-oriented JSON API for managing movies, users, and authenticated workflows.",
				highlights: [
					"Implemented movie CRUD, PostgreSQL migrations, user registration, activation, and JWT authentication.",
					"Added background email delivery, runtime metrics, and graceful shutdown behavior.",
				],
				stack: ["Go", "PostgreSQL", "httprouter", "JWT", "bcrypt"],
				links: [
					{
						label: "View source",
						href: "https://github.com/bkandh30/GoFlix",
						kind: "source",
					},
				],
				visual: "api",
			},
		],
	},
} as const;
