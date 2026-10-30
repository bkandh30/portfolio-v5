import { Fragment } from "react";
import { portfolio } from "../data/portfolio";

// reads as "A, B, C, and D" however many technologies are listed
function separatorBefore(index: number, count: number) {
	if (index === 0) return "";
	if (index < count - 1) return ", ";
	return count > 2 ? ", and " : " and ";
}

export function SiteFooter() {
	const { footer } = portfolio;

	return (
		<footer className="border-neutral-50 border-t bg-neutral-25">
			<div className="site-container py-[clamp(2rem,3.5vw,2.75rem)] text-center">
				<p className="text-sm leading-6 text-neutral-600">
					Built with{" "}
					{footer.builtWith.map((technology, index) => (
						<Fragment key={technology.label}>
							{separatorBefore(index, footer.builtWith.length)}
							<a
								href={technology.href}
								target="_blank"
								rel="noreferrer"
								className="font-medium text-neutral-700 underline decoration-neutral-200 underline-offset-4 transition-colors hover:text-brand-700 hover:decoration-brand-300"
							>
								{technology.label}
							</a>
						</Fragment>
					))}
					.
				</p>
				<p className="mt-2 text-[0.8125rem] leading-5 text-neutral-500">
					© {new Date().getFullYear()} {footer.owner}. {footer.rights}
				</p>
			</div>
		</footer>
	);
}
