import { portfolio } from "../data/portfolio";
import type { Contribution, GitHubActivityData } from "../lib/github";
import { ActionLink } from "./ui/button";

const MONTH = new Intl.DateTimeFormat("en-US", {
	month: "short",
	timeZone: "UTC",
});
const DAY = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric",
	year: "numeric",
	timeZone: "UTC",
});

// A month is labelled on the first week it starts, but only when it runs for
// at least three weeks; a shorter run is narrower than its label.
function monthLabels(weeks: Contribution[][]) {
	const monthOf = (week: Contribution[] | undefined) =>
		week?.[0]?.date.slice(0, 7);
	const labels: (string | null)[] = weeks.map(() => null);

	let start = 0;
	for (let index = 1; index <= weeks.length; index++) {
		if (index < weeks.length && monthOf(weeks[index]) === monthOf(weeks[start]))
			continue;
		const first = weeks[start]?.[0];
		if (index - start >= 3 && first) {
			labels[start] = MONTH.format(new Date(`${first.date}T00:00:00Z`));
		}
		start = index;
	}

	return labels;
}

function describe({ count, date }: Contribution) {
	const noun = count === 1 ? "contribution" : "contributions";
	return `${count} ${noun} on ${DAY.format(new Date(`${date}T00:00:00Z`))}`;
}

// The standard GitHub calendar, drawn as a grid whose week columns share the
// panel's width, so it fills the panel at every desktop width. Server
// rendered, with no script. Phones keep a 760px minimum and scroll; the
// right-to-left wrapper opens them on the newest week.
function ContributionCalendar({
	contributions,
	total,
}: {
	contributions: Contribution[];
	total: string;
}) {
	const weeks: Contribution[][] = [];
	for (let index = 0; index < contributions.length; index += 7) {
		weeks.push(contributions.slice(index, index + 7));
	}
	const labels = monthLabels(weeks);
	const summary = `${total} contributions in the last year`;

	return (
		<section
			className="calendar-scroll"
			aria-label={`${summary}, scrollable`}
			// biome-ignore lint/a11y/noNoninteractiveTabindex: a scrollable calendar must be reachable by keyboard
			tabIndex={0}
		>
			<div
				className="calendar-inner"
				style={{ "--weeks": weeks.length } as React.CSSProperties}
			>
				<div className="calendar-months" aria-hidden="true">
					{weeks.map((week, index) => (
						<span key={week[0]?.date}>{labels[index]}</span>
					))}
				</div>
				<div className="calendar-days" role="img" aria-label={summary}>
					{contributions.map((day) => (
						<span key={day.date} data-level={day.level} title={describe(day)} />
					))}
				</div>
			</div>
		</section>
	);
}

function ProfileLink() {
	const { profile } = portfolio.github;

	return (
		<ActionLink href={profile.href} target="_blank" rel="noreferrer">
			{profile.label}
			<span className="sr-only"> (opens in a new tab)</span>
		</ActionLink>
	);
}

// In Public: the second half of the night band, under a rule after How I
// Build. The standard calendar on a Night Panel, kept conventional on purpose
// so evaluators read it instantly. Data is live, fetched on the server.
export function GitHubSection({ activity }: { activity: GitHubActivityData }) {
	const { github } = portfolio;

	return (
		<section
			id="github"
			aria-labelledby="github-title"
			className="band band-night github-band"
		>
			<div className="rails">
				<div className="github-divider" />
				<h2 id="github-title" className="github-statement text-statement">
					{github.statement.lead}{" "}
					<span className="quiet">{github.statement.continuation}</span>
				</h2>

				<div className="github-panel">
					{activity.status === "ready" ? (
						<ReadyPanel activity={activity} />
					) : (
						<div className="github-fallback">
							<h3 className="text-subtitle">{github[activity.status].title}</h3>
							<p className="mt-3 text-night-text-secondary">
								{github[activity.status].description}
							</p>
							<div className="mt-3">
								<ProfileLink />
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

function ReadyPanel({
	activity,
}: {
	activity: Extract<GitHubActivityData, { status: "ready" }>;
}) {
	const { stats } = portfolio.github;
	const total = activity.contributions
		.reduce((sum, day) => sum + day.count, 0)
		.toLocaleString("en-US");

	return (
		<>
			<p className="text-night-text-secondary">
				<span className="text-paper tabular-nums">{total}</span> contributions
				in the last year
			</p>
			<ContributionCalendar
				contributions={activity.contributions}
				total={total}
			/>
			<div className="github-panel-footer">
				<dl className="github-stats">
					<div>
						<dt>{stats.activeDays}</dt>
						<dd>{activity.activeDays}</dd>
					</div>
					<div>
						<dt>{stats.longestStreak}</dt>
						<dd>
							{activity.longestStreak}{" "}
							{activity.longestStreak === 1 ? "day" : "days"}
						</dd>
					</div>
					<div>
						<dt>{stats.repositories}</dt>
						<dd>{activity.repositoryCount}</dd>
					</div>
				</dl>
				<ProfileLink />
			</div>
		</>
	);
}
