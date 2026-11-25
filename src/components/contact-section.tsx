import { Fragment, useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";
import { ActionLink, Button, ButtonLink } from "./ui/button";

type CopyState = "idle" | "copied" | "failed";

const COPY_RESET_DELAY = 2000;

// The address with invisible break points after each dot in the name and after
// the "@", so a narrow screen wraps it there rather than mid-word. Selecting and
// copying the text still gives the plain address.
function BreakableEmail({ address }: { address: string }) {
	const [name = "", domain = ""] = address.split("@");
	const parts = name.split(".");

	return (
		<>
			{parts.map((part, index) => (
				<Fragment key={part}>
					{part}
					{index < parts.length - 1 && (
						<>
							.<wbr />
						</>
					)}
				</Fragment>
			))}
			@<wbr />
			{domain}
		</>
	);
}

// The label changes for sighted users; a status message tells screen readers.
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

	return (
		<>
			<Button variant="secondary" onClick={copy}>
				{email.copy[state]}
			</Button>
			<span role="status" className="sr-only">
				{state === "idle" ? "" : email.announcements[state]}
			</span>
		</>
	);
}

// Contact: the page's close. One Display line, "Let's talk." in Quiet Slate
// then the email in Ink as selectable text, the two actions, and quiet links.
export function ContactSection() {
	const { contact } = portfolio;

	return (
		<section
			id="contact"
			aria-labelledby="contact-title"
			className="band contact-band"
		>
			<div className="rails">
				<h2 id="contact-title" className="contact-statement text-display">
					<span className="quiet">{contact.lead}</span>{" "}
					<BreakableEmail address={contact.email.address} />
				</h2>

				<div className="contact-actions">
					<ButtonLink href={`mailto:${contact.email.address}`}>
						{contact.email.send}
					</ButtonLink>
					<CopyEmailButton />
				</div>

				<ul className="contact-links" aria-label="Other ways to connect">
					{contact.links.map((link) => (
						<li key={link.label}>
							{/* Plain text links, as in the mock: the button's chevron is the
							one arrow here, so it points to the main action. */}
							<ActionLink
								href={link.href}
								target="_blank"
								rel="noreferrer"
								chevron={false}
							>
								{link.label}
								<span className="sr-only"> (opens in a new tab)</span>
							</ActionLink>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
