import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { ChromaticTextReveal } from "./text-reveal";

const socialIcons = {
	github: Github,
	linkedin: Linkedin,
	email: Mail,
} as const;

export function HeroSection() {
	const { hero } = portfolio;

	return (
		<section aria-labelledby="hero-title" className="hero-section">
			<div aria-hidden="true" className="hero-grid" />

			<div className="site-container relative grid items-center gap-14 py-16 sm:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:gap-8 lg:pt-8 lg:pb-24">
				<div className="hero-copy lg:order-2">
					<div className="mb-6">
						<span className="inline-flex items-center rounded-md border border-success/20 bg-white/75 px-3.5 py-1.5 font-mono text-[0.6875rem] leading-4 font-medium text-neutral-700 uppercase tracking-[0.08em] shadow-[inset_0_0_12px_color-mix(in_srgb,var(--status-success)_4%,transparent),0_0_18px_color-mix(in_srgb,var(--status-success)_9%,transparent)] backdrop-blur-sm">
							{hero.availability}
						</span>
					</div>

					<h1
						id="hero-title"
						className="text-[clamp(2.25rem,7vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.06em]"
					>
						<span className="sr-only">{hero.headline.accessible}</span>
						<span aria-hidden="true">
							<ChromaticTextReveal
								prefix={hero.headline.prefix}
								words={hero.headline.words}
								delay={0.15}
								duration={1.05}
								pauseDuration={1.7}
								className="flex-col items-start"
							/>
						</span>
					</h1>

					<p className="mt-6 max-w-[34rem] text-[clamp(1rem,1.35vw,1.125rem)] leading-[1.75] text-neutral-700">
						{hero.description}
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-3">
						<a
							href={hero.actions.primary.href}
							className="inline-flex min-h-11 items-center gap-2 rounded-md bg-neutral-990 px-5 py-2.5 text-sm font-semibold text-neutral-0 no-underline shadow-sm transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-700 hover:text-neutral-0"
						>
							{hero.actions.primary.label}
							<ArrowRight
								aria-hidden="true"
								className="size-4"
								strokeWidth={2}
							/>
						</a>
						<a
							href={hero.actions.secondary.href}
							className="inline-flex min-h-11 items-center rounded-md border border-neutral-100 bg-white/70 px-5 py-2.5 text-sm font-semibold text-neutral-800 no-underline transition-[background-color,border-color,color] hover:border-brand-200 hover:bg-brand-25 hover:text-brand-700"
						>
							{hero.actions.secondary.label}
						</a>
					</div>

					<div className="mt-5 flex items-center gap-4">
						<span className="font-mono text-[0.6875rem] font-medium text-neutral-500 uppercase tracking-[0.12em]">
							Connect
						</span>
						<span aria-hidden="true" className="h-px w-8 bg-neutral-200" />
						<div className="flex items-center gap-2">
							{hero.socials.map((social) => {
								const Icon = socialIcons[social.icon];
								const isExternal = !social.href.startsWith("mailto:");

								return (
									<a
										key={social.label}
										href={social.href}
										target={isExternal ? "_blank" : undefined}
										rel={isExternal ? "noopener noreferrer" : undefined}
										aria-label={social.label}
										className="grid size-11 place-items-center rounded-md text-neutral-500 no-underline transition-[background-color,color,transform] hover:-translate-y-0.5 hover:bg-brand-25 hover:text-brand-700"
									>
										<Icon
											aria-hidden="true"
											className="size-[1.125rem]"
											strokeWidth={1.8}
										/>
									</a>
								);
							})}
						</div>
					</div>
				</div>

				<div className="hero-portrait relative mx-auto w-full max-w-[18rem] lg:order-1 lg:ml-0 lg:max-w-[21rem]">
					<div aria-hidden="true" className="hero-portrait-orbit" />
					<div className="relative aspect-4/5 overflow-hidden rounded-[1.75rem] border border-white/90 bg-white p-2 shadow-[0_28px_80px_rgba(28,30,84,0.16)]">
						<img
							src={hero.portrait.src}
							alt={hero.portrait.alt}
							width={hero.portrait.width}
							height={hero.portrait.height}
							fetchPriority="high"
							className="h-full w-full rounded-[1.35rem] object-cover object-[center_38%]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
