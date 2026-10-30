import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./brand-icons";
import { SectionIntro } from "./section-intro";

type CopyState = "idle" | "copied" | "failed";

const COPY_RESET_DELAY = 2000;

const linkIcons = {
	linkedin: LinkedinIcon,
	github: GithubIcon,
	resume: Download,
} as const;

function CopyEmailButton() {
	const { email } = portfolio.contact;
	const [state, setState] = useState<CopyState>("idle");

	useEffect(() => {
		if (state === "idle") return;

		const timeout = window.setTimeout(() => setState("idle"), COPY_RESET_DELAY);
		return () => window.clearTimeout(timeout);
	}, [state]);

	const copy = async () => {
		try {
			// the clipboard API is missing outside secure contexts, which lands in the catch
			await navigator.clipboard.writeText(email.address);
			setState("copied");
		} catch {
			setState("failed");
		}
	};

	const Icon = state === "copied" ? Check : Copy;

	return (
		<>
			<button
				type="button"
				onClick={copy}
				className="inline-flex min-h-11 min-w-[9.5rem] flex-1 items-center justify-center gap-2 rounded-md border border-neutral-100 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-[background-color,border-color,color] hover:border-brand-200 hover:bg-brand-25 hover:text-brand-700 sm:flex-none"
			>
				<Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
				{email.copy[state]}
			</button>
			<span role="status" className="sr-only">
				{state === "idle" ? "" : email.announcements[state]}
			</span>
		</>
	);
}

export function ContactSection() {
	const { contact } = portfolio;

	return (
		<section
			id="contact"
			aria-labelledby="contact-title"
			className="contact-section pt-[var(--section-space)] pb-[clamp(2.75rem,4.5vw,4rem)]"
		>
			<div className="content-container">
				<SectionIntro
					id="contact-title"
					marker={contact.intro.marker}
					title={contact.intro.title}
					description={contact.intro.description}
				/>

				<div className="contact-card mt-[clamp(2.25rem,4vw,3rem)]">
					<p className="contact-email">{contact.email.address}</p>

					<div className="contact-actions">
						<a
							href={`mailto:${contact.email.address}`}
							className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-md bg-neutral-990 px-5 py-2.5 text-sm font-semibold text-neutral-0 no-underline shadow-sm transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-700 hover:text-neutral-0 sm:flex-none"
						>
							{contact.email.send}
							<ArrowUpRight
								aria-hidden="true"
								className="size-4"
								strokeWidth={2}
							/>
						</a>
						<CopyEmailButton />
					</div>
				</div>

				<ul className="contact-links" aria-label="Other ways to connect">
					{contact.links.map((link) => {
						const Icon = linkIcons[link.kind];
						const isDownload = "download" in link;

						return (
							<li key={link.label}>
								<a
									href={link.href}
									download={isDownload ? link.download : undefined}
									target={isDownload ? undefined : "_blank"}
									rel={isDownload ? undefined : "noreferrer"}
									className="project-link"
								>
									<Icon
										aria-hidden="true"
										className="size-4"
										strokeWidth={1.8}
									/>
									{link.label}
									{isDownload ? null : (
										<ArrowUpRight
											aria-hidden="true"
											className="project-link-arrow size-4"
											strokeWidth={1.8}
										/>
									)}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
