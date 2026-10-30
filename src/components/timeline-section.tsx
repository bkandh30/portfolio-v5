import { BriefcaseBusiness, Flag, GraduationCap } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { SectionIntro } from "./section-intro";
import { Timeline } from "./ui/timeline";

type Kind = keyof typeof portfolio.timeline.kinds;

const kindIcons = {
	role: BriefcaseBusiness,
	education: GraduationCap,
	milestone: Flag,
} as const;

const MONTH_YEAR = new Intl.DateTimeFormat("en-US", {
	month: "short",
	year: "numeric",
	timeZone: "UTC",
});

// one consistent visual per kind of event until real media exists; it also
// carries the year, which the component's drifting numerals did too loosely
function EventVisual({ kind, year }: { kind: Kind; year: string }) {
	const Icon = kindIcons[kind];

	return (
		<div className="timeline-visual">
			<span className="timeline-visual-year">{year}</span>
			<span className="timeline-visual-kind">
				<Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
				{portfolio.timeline.kinds[kind]}
			</span>
		</div>
	);
}

export function TimelineSection() {
	const { timeline } = portfolio;

	return (
		<section
			id="timeline"
			aria-labelledby="timeline-title"
			className="timeline-section border-neutral-50 border-b pt-[var(--section-space)] pb-[clamp(2.75rem,4.5vw,4rem)]"
		>
			<div className="content-container">
				<SectionIntro
					id="timeline-title"
					marker={timeline.intro.marker}
					title={timeline.intro.title}
					description={timeline.intro.description}
				/>
			</div>

			<div className="site-container mt-[clamp(1.5rem,3vw,2.25rem)]">
				<Timeline
					aria-label={timeline.label}
					height={440}
					years={false}
					cables={false}
					// open on the present; dragging left walks back through the path
					defaultValue={timeline.events.at(-1)?.id}
					formatDate={(date) => MONTH_YEAR.format(date)}
					events={timeline.events.map((event) => ({
						id: event.id,
						date: event.date,
						title: event.title,
						meta: event.meta,
						media: (
							<EventVisual kind={event.kind} year={event.date.slice(0, 4)} />
						),
					}))}
				/>
				<p aria-hidden="true" className="timeline-hint">
					<span>←</span>
					{timeline.hint}
					<span>→</span>
				</p>
			</div>
		</section>
	);
}
