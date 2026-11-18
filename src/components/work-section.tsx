import { Fragment } from "react";
import { portfolio } from "../data/portfolio";
import { ActionLink } from "./ui/button";

type ProjectLink = { label: string; href: string };

function ProjectLinks({ links }: { links: readonly ProjectLink[] }) {
	return (
		<div className="work-links">
			{links.map((link) => (
				<ActionLink
					key={link.href}
					href={link.href}
					target="_blank"
					rel="noreferrer"
				>
					{link.label}
					<span className="sr-only"> (opens in a new tab)</span>
				</ActionLink>
			))}
		</div>
	);
}

// Arrows and bars in the note's code strip are drawn in violet.
function CodeStrip({ code }: { code: string }) {
	return (
		<code className="work-note-code">
			{code.split(/(→|\|)/).map((part, index) =>
				part === "→" || part === "|" ? (
					// biome-ignore lint/suspicious/noArrayIndexKey: the strip is static text
					<span key={index} className="text-action">
						{part}
					</span>
				) : (
					// biome-ignore lint/suspicious/noArrayIndexKey: the strip is static text
					<Fragment key={index}>{part}</Fragment>
				),
			)}
		</code>
	);
}

function Chain({ nodes }: { nodes: readonly string[] }) {
	return (
		<span className="work-branch">
			{nodes.map((node, index) => (
				<Fragment key={node}>
					{index > 0 ? <span className="work-link" /> : null}
					<span className="work-node">{node}</span>
				</Fragment>
			))}
		</span>
	);
}

// The first node leads to each branch; each branch is a chain of nodes. Several
// branches hang off one dashed spine, so the first node visibly reaches each.
function Diagram({
	label,
	from,
	branches,
}: {
	label: string;
	from: string;
	branches: readonly (readonly string[])[];
}) {
	return (
		<div className="work-diagram" role="img" aria-label={label}>
			<span className="work-node">{from}</span>
			<span className="work-link" />
			{branches.length === 1 ? (
				<Chain nodes={branches[0]} />
			) : (
				<span className="work-fork">
					{branches.map((branch) => (
						<Chain key={branch.join()} nodes={branch} />
					))}
				</span>
			)}
		</div>
	);
}

// Work: the lead project's text sits beside the section statement, so the
// screen in its colour field follows what it shows. Supporting projects are
// compact rows on Pale Paper, their text on the same column line as the lead's.
// Four type steps: statement 32, lead name 26 with an 18px description,
// supporting name 22 with a 16px description, then 14px stacks.
export function WorkSection() {
	const { work } = portfolio;
	const { lead } = work;

	return (
		<section id="work" aria-labelledby="work-title" className="band">
			<div className="rails">
				<div className="work-intro">
					<h2 id="work-title" className="text-statement">
						{work.statement.lead}{" "}
						<span className="quiet">{work.statement.continuation}</span>
					</h2>

					<div>
						<h3 className="text-title">{lead.name}</h3>
						<p className="mt-3 text-lead text-ink-secondary">{lead.summary}</p>
						<p className="mt-2 text-small text-ink-quiet">
							{lead.stack.join(", ")}
						</p>
						<ProjectLinks links={lead.links} />
					</div>
				</div>

				<figure className="work-figure">
					<div className="work-field">
						<img
							src={lead.image.src}
							alt={lead.image.alt}
							width={lead.image.width}
							height={lead.image.height}
							loading="lazy"
							decoding="async"
						/>
					</div>
					<figcaption className="work-note">
						<span className="work-note-body">
							<span className="block text-body text-ink">
								{lead.note.title}
							</span>
							{lead.note.body}
						</span>
						<CodeStrip code={lead.note.code} />
					</figcaption>
				</figure>

				{work.supporting.map((project) => (
					<article key={project.name} className="work-row">
						<div className="work-visual">
							<Diagram {...project.diagram} />
						</div>
						<div>
							<h3 className="text-subtitle">{project.name}</h3>
							<p className="mt-3 text-ink-secondary">{project.summary}</p>
							<p className="mt-2 text-small text-ink-quiet">
								{project.stack.join(", ")}
							</p>
							<ProjectLinks links={project.links} />
						</div>
					</article>
				))}
			</div>
			<div className="rule" />
		</section>
	);
}
