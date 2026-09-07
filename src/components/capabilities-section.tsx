import { portfolio } from "../data/portfolio";
import { SectionIntro } from "./section-intro";

export function CapabilitiesSection() {
	const { capabilities } = portfolio;

	return (
		<section
			id="capabilities"
			aria-labelledby="capabilities-title"
			className="capabilities-section border-neutral-50 border-b pt-[clamp(2.75rem,4.5vw,4rem)] pb-[clamp(2.25rem,3.5vw,3.25rem)]"
		>
			<div className="content-container">
				<SectionIntro
					id="capabilities-title"
					marker={capabilities.intro.marker}
					title={capabilities.intro.title}
					description={capabilities.intro.description}
				/>

				<ol className="capabilities-grid mt-[clamp(1.5rem,2.5vw,2rem)]">
					{capabilities.items.map((capability, index) => (
						<li key={capability.title} className="capability-block">
							<div className="capability-copy">
								<p className="flex items-center gap-2.5 font-mono text-[0.6875rem] leading-4 font-medium text-brand-700 uppercase tracking-[0.1em]">
									<span className="text-neutral-500">
										{String(index + 1).padStart(2, "0")}
									</span>
									<span aria-hidden="true" className="text-brand-300">
										/
									</span>
									{capability.phase}
								</p>

								<h3 className="capability-title mt-2.5 font-bold tracking-[-0.04em] text-neutral-950">
									{capability.title}
								</h3>
								<p className="capability-description mt-2 text-[0.9375rem] leading-7 text-neutral-700">
									{capability.description}
								</p>
							</div>

							<ul
								className="capability-details"
								aria-label={`${capability.title} focus areas`}
							>
								{capability.details.map((detail) => (
									<li key={detail}>{detail}</li>
								))}
							</ul>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
