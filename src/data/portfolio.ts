// Draft content stays centralized so final copy can change without reshaping components.
export const portfolio = {
	hero: {
		// One two-tone sentence: the lead in Ink, the rest in Quiet Slate.
		// Budget: 25 words, 4 lines on desktop.
		statement: {
			lead: "Hi, I'm Bhavya.",
			continuation:
				"A backend engineer who turns ambiguous requirements into production-ready services.",
		},
		actions: {
			primary: { label: "See my work", href: "/#work" },
			secondary: { label: "Get in touch", href: "/#contact" },
		},
		availability: "Open to opportunities",
		portrait: {
			src: "/images/bhavya-kandhari-cutout.webp",
			alt: "Portrait of Bhavya Kandhari",
			width: 864,
			height: 1080,
		},
		// Must match the current and past roles in Experience.
		note: {
			role: "Software Engineer II, Softpoint",
			previously: "Previously at Liberty Mutual and EY GDS",
		},
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
	work: {
		// One two-tone sentence. Budget: 20 words, 3 lines.
		statement: {
			lead: "Selected work.",
			continuation: "Projects I've built, and the decisions behind them.",
		},
		// The lead project sits beside the statement and then in the colour field.
		// The future flagship replaces Scouttrace here with content changes only.
		// Budget: 2 sentences.
		lead: {
			name: "Scouttrace",
			summary:
				"I built the authenticated path from discovery and import through persisted processing states and streaming AI summaries.",
			stack: [
				"TanStack Start",
				"TypeScript",
				"PostgreSQL",
				"Prisma",
				"Better Auth",
			],
			links: [
				{ label: "Live product", href: "https://scouttrace.vercel.app/" },
				{ label: "Source", href: "https://github.com/bkandh30/scouttrace" },
			],
			// The dashboard from the public landing page; its items are demonstration
			// data. A screen from the logged-in app would be stronger.
			image: {
				src: "/images/projects/scouttrace-dashboard.webp",
				alt: "Scouttrace dashboard showing saved items with Completed and Pending states",
				width: 2048,
				height: 822,
			},
			// One decision, explained over the screen without covering what it explains.
			// `code` is a real term or state from the project; arrows and bars are
			// drawn in violet.
			note: {
				title: "Why I persisted every state",
				body: "So a failed import stays visible instead of disappearing.",
				code: "pending → processing → completed | failed",
			},
		},
		// Compact rows on Pale Paper. Each diagram must match the source: the first
		// node leads to each branch, and each branch is a chain.
		supporting: [
			{
				name: "EchoForge",
				summary:
					"A text-to-speech workspace. I modeled organization-owned voices and generations, and connected typed APIs to generated media.",
				stack: [
					"Next.js",
					"TypeScript",
					"tRPC",
					"PostgreSQL",
					"Clerk",
					"Cloudflare R2",
				],
				links: [
					{ label: "Live product", href: "https://echoforgelabs.vercel.app/" },
					{ label: "Source", href: "https://github.com/bkandh30/echoforge" },
				],
				diagram: {
					label:
						"EchoForge: typed tRPC APIs lead to Prisma and PostgreSQL for records, and to Cloudflare R2 for generated media",
					from: "tRPC",
					branches: [["Prisma", "PostgreSQL"], ["Cloudflare R2"]],
				},
			},
		],
	},
	how: {
		// One two-tone sentence. Budget: 20 words, 2 lines on desktop.
		statement: {
			lead: "How I build.",
			continuation:
				"Three habits behind everything I ship, each with the evidence beside it.",
		},
		// How Bhavya works, not one project: each principle sits beside one piece of
		// real evidence. Evidence comes from jobs (described without internal
		// detail), this site's documented process, or the future flagship; never
		// from the tutorial-built projects. Everything below is placeholder until
		// the content pass. Budget per principle: a short title, 2 sentences, and
		// evidence of at most 3 rows or 5 steps.
		principles: [
			{
				title: "I decide; the agent types.",
				description:
					"I write the spec and the checks first, then review every change an AI agent makes against them. Nothing merges that I have not measured or read.",
				source: { name: "this site", detail: "built with Claude Code" },
				evidence: {
					kind: "table",
					label: "Placeholder evidence table",
					columns: ["Placeholder item", "Reference", "Built"],
					rows: [
						["Placeholder measurement", "Value", "Value"],
						["Placeholder measurement", "Value", "Value"],
						["Placeholder measurement", "Value", "Value"],
					],
				},
			},
			{
				title: "I make failure visible.",
				description:
					"When work can fail, I give the failure a place to land and someone to tell, instead of letting it disappear in a log.",
				source: {
					name: "Softpoint",
					detail: "described without internal detail",
				},
				evidence: {
					kind: "flow",
					label: "Placeholder evidence flow with five steps",
					steps: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"],
					// The first steps are the path that runs; the rest are how failure
					// is handled, drawn as dashed outlines.
					handled: 2,
					note: "Placeholder: a short note on where this comes from.",
				},
			},
			{
				title: "I ship the smallest useful version.",
				description:
					"I cut scope until the first version can ship, and write down what waits and why, so nothing is lost and nothing ships half-done.",
				source: {
					name: "this site",
					detail: "cut and deferred during the redesign",
				},
				evidence: {
					kind: "table",
					label: "Placeholder evidence table",
					columns: ["Placeholder item", "Decision", "Why"],
					rows: [
						["Placeholder item", "Decision", "Reason"],
						["Placeholder item", "Decision", "Reason"],
						["Placeholder item", "Decision", "Reason"],
					],
				},
			},
		],
	},
	github: {
		// One two-tone sentence that also says what the calendar covers.
		// Budget: 20 words, 2 lines on desktop.
		statement: {
			lead: "In public.",
			continuation:
				"My day-to-day engineering is in private repositories, so this is side projects only.",
		},
		username: "bkandh30",
		profile: {
			label: "View GitHub profile",
			href: "https://github.com/bkandh30",
		},
		stats: {
			activeDays: "Active days",
			longestStreak: "Longest streak",
			repositories: "Repos with commits",
		},
		empty: {
			title: "No public activity in the last year",
			description:
				"Recent work hasn't been published yet. Everything that is public lives on my GitHub profile.",
		},
		unavailable: {
			title: "Live activity is unavailable right now",
			description:
				"GitHub's contribution data couldn't be loaded. My public repositories are always available on my profile.",
		},
	},
	skills: {
		intro: {
			marker: "05 / Skills",
			title: "How my stack fits together",
			description:
				"The tools I work with, arranged by where they sit in a system.",
		},
		layers: [
			{
				name: "Client",
				role: "Interfaces people use",
				tools: [
					"React",
					"TypeScript",
					"Angular",
					"Next.js",
					"TanStack Start",
					"Tailwind CSS",
				],
			},
			{
				name: "API",
				role: "Contracts between systems",
				tools: ["REST APIs", "Spring Security", "tRPC", "JWT"],
			},
			{
				name: "Services",
				role: "Business logic and workflows",
				tools: [
					"Java",
					"Spring Boot",
					"Spring Batch",
					"Kafka",
					"Go",
					"Rust",
					"Node.js",
				],
				// the one layer the section leads with; its proof restates About's experience
				focus:
					"Where most of my production work lives: backend services for policy and claims workflows at Liberty Mutual, and batch workflows for document-heavy operations at EY GDS.",
			},
			{
				name: "Data",
				role: "Storage and access",
				tools: ["PostgreSQL", "MySQL", "SQL", "JPA (Hibernate)", "Prisma"],
			},
			{
				name: "Platform",
				role: "Build, ship, and run",
				tools: [
					"AWS",
					"Docker",
					"Jenkins",
					"GitHub Actions",
					"Vercel",
					"Cloudflare R2",
				],
			},
		],
	},
	contact: {
		intro: {
			marker: "07 / Contact",
			title: "Let's work together",
			description:
				"Whether it's a role, a project, or a question about something I've built, I'd like to hear about it.",
		},
		email: {
			address: "apply.bhavya.kandhari@gmail.com",
			send: "Send email",
			copy: { idle: "Copy email", copied: "Copied", failed: "Copy failed" },
			announcements: {
				copied: "Email address copied to clipboard.",
				failed: "Couldn't copy automatically. Select the address to copy it.",
			},
		},
		links: [
			{
				label: "LinkedIn",
				href: "https://linkedin.com/in/kandharibhavya",
				kind: "linkedin",
			},
			{ label: "GitHub", href: "https://github.com/bkandh30", kind: "github" },
			{
				label: "Resume",
				href: "/resume.pdf",
				download: "Bhavya-Kandhari-Resume.pdf",
				kind: "resume",
			},
		],
	},
	footer: {
		builtWith: [
			{ label: "TanStack Start", href: "https://tanstack.com/start" },
			{ label: "TypeScript", href: "https://www.typescriptlang.org" },
			{ label: "Tailwind CSS", href: "https://tailwindcss.com" },
			{ label: "Motion", href: "https://motion.dev" },
		],
		owner: "Bhavya Kandhari",
		rights: "All rights reserved.",
	},
} as const;
