import { portfolio } from "../data/portfolio";
import { ButtonLink } from "./ui/button";

// The Opening: a person and a positioning, side by side. The colour field behind
// the portrait runs up under the transparent Header, as Stripe's artwork does.
// Phones put the portrait first, small, beside its note, then the statement.
export function HeroSection() {
	const { hero } = portfolio;

	return (
		<section aria-labelledby="opening-title" className="opening">
			<div className="rails opening-rails">
				<div className="opening-copy">
					<h1
						id="opening-title"
						className="text-display text-pretty min-[56.25rem]:text-balance"
					>
						{hero.statement.lead}{" "}
						<span className="quiet">{hero.statement.continuation}</span>
					</h1>

					<div className="mt-8 flex flex-wrap items-center gap-3 min-[56.25rem]:mt-10">
						<ButtonLink href={hero.actions.primary.href}>
							{hero.actions.primary.label}
						</ButtonLink>
						<ButtonLink href={hero.actions.secondary.href} variant="secondary">
							{hero.actions.secondary.label}
						</ButtonLink>
					</div>

					<p className="opening-status mt-6 text-small text-ink-quiet">
						{hero.availability}
					</p>
				</div>

				<div className="opening-person">
					{/* The note is placed against the portrait, not the column. */}
					<div className="opening-figure">
						<div className="opening-portrait">
							<img
								src={hero.portrait.src}
								alt={hero.portrait.alt}
								width={hero.portrait.width}
								height={hero.portrait.height}
								fetchPriority="high"
							/>
						</div>
						<p className="opening-note">
							<span className="block text-ink">{hero.note.role}</span>
							{hero.note.previously}
						</p>
					</div>
				</div>
			</div>
			<div className="rule" />
		</section>
	);
}
