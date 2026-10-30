import { portfolio } from "../data/portfolio";
import { SectionIntro } from "./section-intro";

export function SkillsSection() {
	const { skills } = portfolio;

	return (
		<section
			id="skills"
			aria-labelledby="skills-title"
			className="skills-section border-neutral-50 border-b pt-[var(--section-space)] pb-[clamp(2.75rem,4.5vw,4rem)]"
		>
			<div className="content-container">
				<SectionIntro
					id="skills-title"
					marker={skills.intro.marker}
					title={skills.intro.title}
					description={skills.intro.description}
				/>

				<ol className="stack-layers mt-[clamp(2rem,3.5vw,2.75rem)]">
					{skills.layers.map((layer) => {
						const focus = "focus" in layer ? layer.focus : null;

						return (
							<li
								key={layer.name}
								className={
									focus ? "stack-layer stack-layer-focus" : "stack-layer"
								}
							>
								<span aria-hidden="true" className="stack-node" />
								<div className="stack-layer-body">
									<div className="stack-layer-heading">
										<h3 className="stack-layer-name">{layer.name}</h3>
										<p className="stack-layer-role">{layer.role}</p>
									</div>
									<div>
										<ul
											className="stack-tools"
											aria-label={`${layer.name} tools`}
										>
											{layer.tools.map((tool) => (
												<li key={tool}>{tool}</li>
											))}
										</ul>
										{focus ? <p className="stack-focus">{focus}</p> : null}
									</div>
								</div>
							</li>
						);
					})}
				</ol>
			</div>
		</section>
	);
}
