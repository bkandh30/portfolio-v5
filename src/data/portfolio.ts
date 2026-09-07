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
} as const;
