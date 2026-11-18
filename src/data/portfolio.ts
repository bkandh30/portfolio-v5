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
		// One two-tone sentence. Budget: 20 words, 3 lines.
		statement: {
			lead: "How my stack fits together.",
			continuation:
				"Each layer hands off to the next, and every tool names where I've used it.",
		},
		// The stack drawn as the system it is: Client, APIs, Services and Data left
		// to right, on a Platform base. Every tool names where it was used, so each
		// skill carries its own proof. All mappings are from the approved preview
		// and still unconfirmed: Bhavya confirms each at the content pass (Softpoint
		// is missing, Node.js is inferred, Python is undecided).
		layers: [
			{
				name: "Client",
				role: "Interfaces people use",
				tools: [
					{ name: "React", evidence: "Liberty Mutual, Scouttrace, EchoForge" },
					{
						name: "TypeScript",
						evidence: "Liberty Mutual, Scouttrace, EchoForge",
					},
					{ name: "Angular", evidence: "EY GDS" },
					{ name: "Next.js", evidence: "EchoForge" },
					{ name: "TanStack Start", evidence: "Scouttrace, this site" },
					{ name: "Tailwind CSS", evidence: "Scouttrace, this site" },
				],
			},
			{
				name: "APIs",
				role: "Contracts between systems",
				// JWT was listed with GoFlix as evidence, but GoFlix does not use JWT, so
				// it is left out until there is real evidence for it.
				tools: [
					{ name: "REST APIs", evidence: "Liberty Mutual, EY GDS" },
					{ name: "Spring Security", evidence: "Liberty Mutual" },
					{ name: "tRPC", evidence: "EchoForge" },
				],
			},
			{
				name: "Services",
				role: "Where most of my production work lives",
				// The one Night panel, larger and raised.
				core: true,
				tools: [
					{ name: "Java", evidence: "Liberty Mutual, EY GDS" },
					{ name: "Spring Boot", evidence: "Liberty Mutual, EY GDS" },
					{ name: "Spring Batch", evidence: "EY GDS" },
					{ name: "Kafka", evidence: "Liberty Mutual" },
					{ name: "Go", evidence: "GoFlix" },
					{ name: "Rust", evidence: "Metered Finance API" },
					{ name: "Node.js", evidence: "Scouttrace, EchoForge" },
				],
			},
			{
				name: "Data",
				role: "Storage and access",
				tools: [
					{
						name: "PostgreSQL",
						evidence: "Liberty Mutual, Scouttrace, EchoForge, GoFlix",
					},
					{ name: "MySQL", evidence: "EY GDS" },
					{ name: "SQL", evidence: "EY GDS" },
					{ name: "JPA (Hibernate)", evidence: "EY GDS" },
					{ name: "Prisma", evidence: "Scouttrace, EchoForge" },
				],
			},
			{
				name: "Platform",
				role: "Build, ship, and run everything above",
				// The base: a full-width row under the four layers on desktop.
				base: true,
				tools: [
					{ name: "AWS", evidence: "Liberty Mutual, EY GDS" },
					{ name: "Docker", evidence: "Liberty Mutual" },
					{ name: "Jenkins", evidence: "Liberty Mutual" },
					{ name: "GitHub Actions", evidence: "This site" },
					{ name: "Vercel", evidence: "Scouttrace, this site" },
					{ name: "Cloudflare R2", evidence: "EchoForge" },
				],
			},
		],
	},
	experience: {
		// One two-tone sentence, in a side column beside the roles.
		// Budget: 20 words, 3 lines.
		statement: {
			lead: "Where I've worked.",
			continuation: "From enterprise systems to product engineering.",
		},
		// Newest first; must match the Opening's note. Budget: 3 short bullets
		// per role.
		roles: [
			{
				title: "Software Engineer II",
				company: "Softpoint",
				dates: "May 2026 to present",
				highlights: ["Placeholder: role details to be added."],
			},
			{
				title: "Software Engineer",
				company: "Liberty Mutual Insurance, contract",
				dates: "Jan 2025 to May 2026",
				highlights: [
					"Built backend services for policy and claims workflows, with an emphasis on API design, secure data access, and production reliability.",
					"Contributed to event-driven integrations and internal frontend workflows across core insurance systems.",
				],
			},
			{
				title: "Associate Software Engineer",
				company: "EY GDS",
				dates: "Sep 2020 to Jul 2023",
				highlights: [
					"Developed backend systems and batch-processing workflows for document-heavy business operations.",
					"Built service integrations, operational tooling, and internal dashboards for business teams.",
				],
			},
		],
		// The quiet row that ends the section. From the legacy portfolio; exact
		// degree wording is still to be confirmed at the content pass.
		education: [
			{
				degree: "Master of Science in Computer Science",
				school: "Arizona State University",
				dates: "Aug 2023 to May 2025",
			},
			{
				degree: "Bachelor of Technology in Computer Science",
				school: "Amity University Noida",
				dates: "Aug 2017 to May 2021",
			},
		],
	},
	contact: {
		// The page's closing statement at Display size: the lead in Quiet Slate,
		// then the email itself in Ink.
		lead: "Let's talk.",
		email: {
			address: "apply.bhavya.kandhari@gmail.com",
			send: "Send email",
			copy: { idle: "Copy email", copied: "Copied", failed: "Copy failed" },
			announcements: {
				copied: "Email address copied to clipboard.",
				failed: "Couldn't copy automatically. Select the address to copy it.",
			},
		},
		// Quiet text links under the actions; each opens in a new tab, as the
		// Header's Resume does.
		links: [
			{ label: "LinkedIn", href: "https://linkedin.com/in/kandharibhavya" },
			{ label: "GitHub", href: "https://github.com/bkandh30" },
			{ label: "Resume", href: "/resume.pdf" },
		],
	},
	footer: {
		builtWith: [
			{ label: "TanStack Start", href: "https://tanstack.com/start" },
			{ label: "TypeScript", href: "https://www.typescriptlang.org" },
			{ label: "Tailwind CSS", href: "https://tailwindcss.com" },
		],
		owner: "Bhavya Kandhari",
	},
} as const;
