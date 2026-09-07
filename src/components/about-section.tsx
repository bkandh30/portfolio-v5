import { Download } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { SectionIntro } from "./section-intro";

export function AboutSection() {
	const { about } = portfolio;

	return (
		<section
			id="about"
			aria-labelledby="about-title"
			className="about-section border-neutral-50 border-b pt-[var(--section-space)] pb-[clamp(4rem,6vw,5.5rem)]"
		>
			<div className="content-container">
				<SectionIntro
					id="about-title"
					marker={about.intro.marker}
					title={about.intro.title}
					description={about.intro.description}
				/>

				<div className="mt-[clamp(3.5rem,8vw,5.5rem)] grid items-start gap-12 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
					<aside className="self-start border-brand-100/60 border-l py-1 pl-6 sm:pl-7 lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
						<p className="font-mono text-[0.6875rem] leading-4 font-medium text-brand-700 uppercase tracking-[0.1em]">
							Profile
						</p>
						<h3 className="mt-3 text-xl leading-7 font-bold tracking-[-0.03em] text-neutral-950">
							{about.profile.title}
						</h3>

						<div className="mt-3 space-y-2.5 text-[0.9375rem] leading-6 text-neutral-700">
							{about.profile.summary.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>

						<dl className="mt-5 border-neutral-100 border-t">
							{about.profile.metadata.map((item) => (
								<div
									key={item.label}
									className="grid grid-cols-[4rem_1fr] gap-3 border-neutral-100 border-b py-2"
								>
									<dt className="font-mono text-[0.625rem] leading-5 font-medium text-neutral-500 uppercase tracking-[0.08em]">
										{item.label}
									</dt>
									<dd className="text-sm leading-5 font-semibold text-neutral-800">
										{item.value}
									</dd>
								</div>
							))}
						</dl>

						<a
							href="/resume.pdf"
							download="Bhavya-Kandhari-Resume.pdf"
							className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-md border border-neutral-100 bg-white px-4 py-2 text-sm font-semibold text-neutral-800 no-underline transition-[background-color,border-color,color,transform] hover:-translate-y-px hover:border-brand-200 hover:bg-brand-25 hover:text-brand-700"
						>
							Download resume
							<Download
								aria-hidden="true"
								className="size-4"
								strokeWidth={1.8}
							/>
						</a>
					</aside>

					<div id="experience" className="scroll-mt-24">
						<p className="font-mono text-[0.6875rem] leading-4 font-medium text-brand-700 uppercase tracking-[0.1em]">
							Experience
						</p>
						<h3 className="mt-4 text-2xl leading-8 font-bold tracking-[-0.035em] text-neutral-950 sm:text-[1.75rem]">
							Where I've worked
						</h3>

						<div className="experience-timeline mt-8">
							{about.experience.map((role) => (
								<article
									key={`${role.company}-${role.title}`}
									className="experience-item"
								>
									<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
										<div>
											<h4 className="text-lg leading-6 font-bold tracking-[-0.025em] text-neutral-950">
												{role.title}
											</h4>
											<p className="mt-1 text-sm leading-5 font-semibold text-neutral-700">
												{role.company}
											</p>
										</div>
										<p className="shrink-0 font-mono text-[0.6875rem] leading-5 font-medium text-neutral-500 uppercase tracking-[0.06em]">
											{role.dates}
										</p>
									</div>

									{role.meta ? (
										<p className="mt-2 font-mono text-[0.625rem] leading-5 text-neutral-500 uppercase tracking-[0.07em]">
											{role.meta}
										</p>
									) : null}

									<ul className="mt-4 grid max-w-[40rem] gap-2.5 text-[0.9375rem] leading-7 text-neutral-700">
										{role.highlights.map((highlight) => (
											<li key={highlight} className="relative pl-5">
												<span
													aria-hidden="true"
													className="absolute top-[0.72rem] left-0 size-1 bg-brand-400"
												/>
												{highlight}
											</li>
										))}
									</ul>
								</article>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
