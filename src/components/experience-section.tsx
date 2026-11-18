import { portfolio } from "../data/portfolio";

// Experience: the statement in a side column beside ruled roles, newest first,
// ending with a quiet Education row. It takes over the #experience target the
// Header links to.
export function ExperienceSection() {
	const { experience } = portfolio;

	return (
		<section
			id="experience"
			aria-labelledby="experience-title"
			className="band"
		>
			<div className="rails career-layout">
				<h2 id="experience-title" className="career-statement text-statement">
					{experience.statement.lead}{" "}
					<span className="quiet">{experience.statement.continuation}</span>
				</h2>

				<div>
					<ol className="career">
						{experience.roles.map((role) => (
							<li key={`${role.company} ${role.title}`}>
								<div className="career-top">
									<h3 className="text-title">{role.title}</h3>
									<span className="career-dates text-small">{role.dates}</span>
								</div>
								{/* The company in Ink, so it reads with the title, apart from the
								grey bullets: title, who, then what. */}
								<p className="text-ink">{role.company}</p>
								<ul className="career-bullets">
									{role.highlights.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>
							</li>
						))}
					</ol>

					<div className="career-education">
						<h3 className="career-education-label text-small">Education</h3>
						<ul>
							{experience.education.map((entry) => (
								<li key={entry.degree}>
									<span>
										<span className="text-ink">{entry.degree}</span>,{" "}
										{entry.school}
									</span>
									<span className="career-dates">{entry.dates}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="rule" />
		</section>
	);
}
