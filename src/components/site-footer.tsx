import { Fragment } from "react";
import { portfolio } from "../data/portfolio";

// reads as "A, B, C, and D" however many technologies are listed
function separatorBefore(index: number, count: number) {
	if (index === 0) return "";
	if (index < count - 1) return ", ";
	return count > 2 ? ", and " : " and ";
}

// The footer on every route: one quiet row on the page's edges, the owner on
// the left and the credits on the right; phones stack them, left-aligned.
export function SiteFooter() {
	const { footer } = portfolio;

	return (
		<footer className="site-footer">
			<div className="rails">
				<p>
					© {new Date().getFullYear()} {footer.owner}
				</p>
				<p>
					Built with{" "}
					{footer.builtWith.map((technology, index) => (
						<Fragment key={technology.label}>
							{separatorBefore(index, footer.builtWith.length)}
							<a href={technology.href} target="_blank" rel="noreferrer">
								{technology.label}
								<span className="sr-only"> (opens in a new tab)</span>
							</a>
						</Fragment>
					))}
					.
				</p>
			</div>
		</footer>
	);
}
