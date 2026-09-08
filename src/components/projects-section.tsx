import { ArrowUpRight, Github } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { SectionIntro } from "./section-intro";

type ProjectLink = {
	label: string;
	href: string;
	kind: "source" | "live";
};

const waveform = [28, 46, 72, 38, 84, 58, 92, 48, 76, 34, 64, 42, 80, 52];

function ProjectLinks({ links }: { links: readonly ProjectLink[] }) {
	return (
		<div className="project-links">
			{links.map((link) => (
				<a
					key={link.href}
					href={link.href}
					target="_blank"
					rel="noreferrer"
					className="project-link"
				>
					{link.kind === "source" ? (
						<Github aria-hidden="true" className="size-4" strokeWidth={1.8} />
					) : null}
					{link.label}
					<ArrowUpRight
						aria-hidden="true"
						className="project-link-arrow size-4"
						strokeWidth={1.8}
					/>
				</a>
			))}
		</div>
	);
}

function ProjectStack({ stack }: { stack: readonly string[] }) {
	return (
		<div className="project-stack">
			<p>Stack</p>
			<ul aria-label="Technology stack">
				{stack.map((technology) => (
					<li key={technology}>{technology}</li>
				))}
			</ul>
		</div>
	);
}

function EchoForgeVisual() {
	return (
		<div
			className="project-technical-visual echoforge-visual"
			aria-hidden="true"
		>
			<div className="technical-flow-diagram">
				<span className="technical-node">Script</span>
				<span className="technical-connector" />
				<div className="technical-wave-node">
					<div className="audio-waveform">
						{waveform.map((height) => (
							<span key={height} style={{ height: `${height}%` }} />
						))}
					</div>
					<span className="technical-node">Voice</span>
				</div>
				<span className="technical-connector" />
				<span className="technical-node">Audio</span>
			</div>
			<div className="technical-notes">
				<span>Built-in + custom voices</span>
				<span>Cloudflare R2 storage</span>
			</div>
		</div>
	);
}

function GoFlixVisual() {
	return (
		<div className="project-technical-visual goflix-visual" aria-hidden="true">
			<div className="technical-flow-diagram">
				<span className="technical-node">Request</span>
				<span className="technical-connector" />
				<span className="technical-node">Router + auth</span>
				<span className="technical-connector" />
				<span className="technical-node">PostgreSQL</span>
			</div>
			<div className="technical-notes">
				<span>Background email</span>
				<span>Metrics</span>
				<span>Graceful shutdown</span>
			</div>
		</div>
	);
}

export function ProjectsSection() {
	const { projects } = portfolio;

	return (
		<section
			id="projects"
			aria-labelledby="projects-title"
			className="projects-section border-neutral-50 border-b pt-[var(--section-space)] pb-[clamp(2.75rem,4.5vw,4rem)]"
		>
			<div className="content-container">
				<SectionIntro
					id="projects-title"
					marker={projects.intro.marker}
					title={projects.intro.title}
					description={projects.intro.description}
				/>

				<article className="project-feature mt-[clamp(2.25rem,4vw,3rem)]">
					<div className="project-media">
						<img
							src={projects.featured.image.src}
							alt={projects.featured.image.alt}
							width={projects.featured.image.width}
							height={projects.featured.image.height}
							loading="lazy"
							className="project-image"
						/>
					</div>

					<div className="project-feature-copy">
						<p className="project-kicker">{projects.featured.label}</p>
						<h3>{projects.featured.name}</h3>
						<p className="project-purpose">
							<span>{projects.featured.purpose}</span>{" "}
							{projects.featured.summary}
						</p>

						<div className="project-highlights">
							<p>Engineering highlights</p>
							<ul>
								{projects.featured.highlights.map((highlight) => (
									<li key={highlight}>{highlight}</li>
								))}
							</ul>
						</div>

						<ProjectStack stack={projects.featured.stack} />
						<ProjectLinks links={projects.featured.links} />
					</div>
				</article>

				<div className="project-support-grid">
					{projects.supporting.map((project) => (
						<article key={project.name} className="project-support">
							{project.visual === "audio" ? (
								<EchoForgeVisual />
							) : (
								<GoFlixVisual />
							)}

							<div className="project-support-copy">
								<p className="project-kicker">{project.label}</p>
								<h3>{project.name}</h3>
								<p className="project-purpose">
									<span>{project.purpose}</span>
								</p>

								<div className="project-highlights project-highlights-compact">
									<p>Engineering highlights</p>
									<ul>
										{project.highlights.map((highlight) => (
											<li key={highlight}>{highlight}</li>
										))}
									</ul>
								</div>

								<ProjectStack stack={project.stack} />
								<ProjectLinks links={project.links} />
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
