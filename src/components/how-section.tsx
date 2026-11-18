import { portfolio } from "../data/portfolio";

type Principle = (typeof portfolio.how.principles)[number];
type Evidence = Principle["evidence"];

// Real code, data, or measurements, so the code face. Wide tables scroll inside
// their panel on narrow phones, so the panel is a labelled region keyboard
// users can focus and scroll.
function EvidenceTable({
	evidence,
}: {
	evidence: Extract<Evidence, { kind: "table" }>;
}) {
	return (
		<section
			className="how-evidence how-evidence-scroll"
			aria-label={evidence.label}
			// biome-ignore lint/a11y/noNoninteractiveTabindex: a scrollable region must be reachable by keyboard
			tabIndex={0}
		>
			<table className="how-table">
				<thead>
					<tr>
						{evidence.columns.map((column) => (
							<th key={column} scope="col">
								{column}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{evidence.rows.map((row, rowIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: rows are static and may repeat while they are placeholders
						<tr key={rowIndex}>
							{row.map((cell, cellIndex) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: cells are static and may repeat
								<td key={cellIndex}>{cell}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}

// A chain of steps: solid violet for the path that runs, dashed outlines for
// how failure is handled. Left to right on desktop, top to bottom on phones.
function EvidenceFlow({
	evidence,
}: {
	evidence: Extract<Evidence, { kind: "flow" }>;
}) {
	return (
		<div className="how-evidence">
			<ol className="how-flow" aria-label={evidence.label}>
				{evidence.steps.map((step, index) => (
					<li
						// biome-ignore lint/suspicious/noArrayIndexKey: steps are static and in order
						key={index}
						className={`how-flow-step ${index < evidence.handled ? "how-step" : "how-step-quiet"}`}
					>
						{step}
					</li>
				))}
			</ol>
			<p className="how-evidence-note">{evidence.note}</p>
		</div>
	);
}

// How I Build: the page's one night band. Not a project: principles of how
// Bhavya works, each on Work's 5/7 grid beside one piece of evidence.
export function HowSection() {
	const { how } = portfolio;

	return (
		<section id="how" aria-labelledby="how-title" className="band band-night">
			<div className="rails">
				<h2 id="how-title" className="how-statement text-statement">
					{how.statement.lead}{" "}
					<span className="quiet">{how.statement.continuation}</span>
				</h2>

				<div className="how-principles">
					{how.principles.map((principle) => (
						<article key={principle.title} className="how-principle">
							<div>
								<h3 className="text-subtitle">{principle.title}</h3>
								<p className="mt-3 text-night-text-secondary">
									{principle.description}
								</p>
							</div>
							{/* The evidence carries its source as a caption, so each panel
							says where it comes from. */}
							<figure>
								{principle.evidence.kind === "table" ? (
									<EvidenceTable evidence={principle.evidence} />
								) : (
									<EvidenceFlow evidence={principle.evidence} />
								)}
								<figcaption className="how-source text-small">
									Evidence:{" "}
									<span className="text-paper">{principle.source.name}</span>,{" "}
									{principle.source.detail}
								</figcaption>
							</figure>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
