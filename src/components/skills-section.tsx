import { portfolio } from "../data/portfolio";

type Layer = (typeof portfolio.skills.layers)[number];

// Skills: the Stack Map. Client, APIs, Services and Data are joined left to
// right by dashed connectors, on a Platform base. Services is the one Night
// panel, because most of the production work lives there. Every tool names
// where it was used; there are no chips, ratings, or percentages.
export function SkillsSection() {
	const { skills } = portfolio;

	return (
		<section id="skills" aria-labelledby="skills-title" className="band">
			<div className="rails">
				<h2 id="skills-title" className="skills-statement text-statement">
					{skills.statement.lead}{" "}
					<span className="quiet">{skills.statement.continuation}</span>
				</h2>

				<div className="stack-map">
					{skills.layers.map((layer, index) => (
						<StackTier
							key={layer.name}
							layer={layer}
							// Data ends the row of layers, so it draws no connector to the right.
							last={index === skills.layers.length - 2}
						/>
					))}
				</div>
			</div>
			<div className="rule" />
		</section>
	);
}

function StackTier({ layer, last }: { layer: Layer; last: boolean }) {
	const classes = ["stack-tier"];
	if ("core" in layer) classes.push("stack-tier-core");
	if ("base" in layer) classes.push("stack-tier-base");
	if (last) classes.push("stack-tier-last");

	return (
		<div className={classes.join(" ")}>
			<h3 className="stack-tier-name text-title">{layer.name}</h3>
			<p className="stack-tier-role text-small">{layer.role}</p>
			<ul aria-label={`${layer.name} tools`}>
				{layer.tools.map((tool) => (
					<li key={tool.name}>
						<span className="stack-tool">{tool.name}</span>
						<span className="stack-evidence">{tool.evidence}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
