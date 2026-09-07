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
} as const;
