import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";
import type { GitHubActivityData } from "../lib/github";
import { GithubIcon } from "./brand-icons";
import { SectionIntro } from "./section-intro";
import { GitHubActivity } from "./ui/github-activity";

// levels 1-4 of the calendar; level 0 keeps the component's neutral empty cell
const ACCENT = [
	"var(--brand-100)",
	"var(--brand-300)",
	"var(--brand-500)",
	"var(--brand-700)",
];

function ProfileLink() {
	const { profile } = portfolio.github;

	return (
		<a
			href={profile.href}
			target="_blank"
			rel="noreferrer"
			className="project-link"
		>
			<GithubIcon aria-hidden="true" className="size-4" />
			{profile.label}
			<ArrowUpRight
				aria-hidden="true"
				className="project-link-arrow size-4"
				strokeWidth={1.8}
			/>
		</a>
	);
}

export function GitHubSection({ activity }: { activity: GitHubActivityData }) {
	const { github } = portfolio;

	return (
		<section
			id="github"
			aria-labelledby="github-title"
			className="github-section border-neutral-50 border-b pt-[var(--section-space)] pb-[clamp(2.75rem,4.5vw,4rem)]"
		>
			<div className="content-container">
				<SectionIntro
					id="github-title"
					marker={github.intro.marker}
					title={github.intro.title}
					description={github.intro.description}
				/>

				<div className="github-panel mt-[clamp(2.25rem,4vw,3rem)]">
					{activity.status === "ready" ? (
						<>
							<GitHubActivity
								contributions={activity.contributions}
								accent={ACCENT}
								showMonths
								showLegend
								scrollable
								className="rounded-none bg-transparent"
							/>

							<div className="github-panel-footer">
								<dl className="github-stats">
									<div>
										<dt>{github.stats.activeDays}</dt>
										<dd>{activity.activeDays}</dd>
									</div>
									<div>
										<dt>{github.stats.longestStreak}</dt>
										<dd>
											{activity.longestStreak}{" "}
											{activity.longestStreak === 1 ? "day" : "days"}
										</dd>
									</div>
									<div>
										<dt>{github.stats.repositories}</dt>
										<dd>{activity.repositoryCount}</dd>
									</div>
								</dl>
								<ProfileLink />
							</div>
						</>
					) : (
						<div className="github-fallback">
							<h3>{github[activity.status].title}</h3>
							<p className="github-fallback-description">
								{github[activity.status].description}
							</p>
							<ProfileLink />
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
