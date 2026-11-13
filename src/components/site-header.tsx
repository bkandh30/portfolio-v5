import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "./ui/button";

// How I build points at the section its own branch will add; production is not
// on this domain yet, so the gap is accepted. Work becomes #work when rebuilt.
// Contact is the primary action rather than a link, like Stripe's "Contact sales".
const navigationItems = [
	{ label: "Work", href: "/#projects" },
	{ label: "How I build", href: "/#how" },
	{ label: "Skills", href: "/#skills" },
	{ label: "Experience", href: "/#experience" },
] as const;

const resumeHref = "/resume.pdf";
const contactHref = "/#contact";
const desktopQuery = "(min-width: 56.25rem)";

export function SiteHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const headerRef = useRef<HTMLElement>(null);
	const closeMenu = () => setIsMenuOpen(false);
	const toggleMenu = () => {
		// The Header scrolls away, so the sheet is measured from the top of the page.
		if (!isMenuOpen && window.scrollY > 0) {
			window.scrollTo({ top: 0, behavior: "instant" });
		}
		setIsMenuOpen((isOpen) => !isOpen);
	};

	// While the sheet is open the page behind it stays still and out of reach:
	// everything outside the Header is inert, so Tab and screen readers stay in
	// the menu, as with a modal dialog. Widening to the desktop layout closes it.
	useEffect(() => {
		if (!isMenuOpen) return;
		const root = document.documentElement;
		const previousOverflow = root.style.overflow;
		root.style.overflow = "hidden";
		const header = headerRef.current;
		const outside = [...document.body.children].filter(
			(element): element is HTMLElement =>
				element instanceof HTMLElement &&
				element !== header &&
				!element.contains(header) &&
				!element.inert,
		);
		for (const element of outside) element.inert = true;
		// Escape closes the menu wherever focus is, even on the browser's own stop.
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key !== "Escape") return;
			setIsMenuOpen(false);
			menuButtonRef.current?.focus();
		};
		document.addEventListener("keydown", closeOnEscape);
		const desktop = window.matchMedia(desktopQuery);
		const closeOnDesktop = () => desktop.matches && setIsMenuOpen(false);
		desktop.addEventListener("change", closeOnDesktop);
		return () => {
			root.style.overflow = previousOverflow;
			for (const element of outside) element.inert = false;
			document.removeEventListener("keydown", closeOnEscape);
			desktop.removeEventListener("change", closeOnDesktop);
		};
	}, [isMenuOpen]);

	return (
		<>
			<a
				href="#main-content"
				className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-control bg-action px-4 py-2.5 text-small text-paper no-underline transition-transform focus:translate-y-0 focus:text-paper"
			>
				Skip to content
			</a>

			<header
				ref={headerRef}
				className="site-header"
				data-menu-open={isMenuOpen || undefined}
			>
				{/* 64px bar below the desktop layout, as on stripe.com; 72px with the links. */}
				<div className="site-header-inner flex h-16 items-center gap-7 min-[56.25rem]:h-[var(--header-height)]">
					<a href="/" className="site-wordmark">
						Bhavya Kandhari
					</a>

					<nav aria-label="Primary" className="hidden min-[56.25rem]:block">
						<ul className="flex items-center gap-6">
							{navigationItems.map((item) => (
								<li key={item.href}>
									<a href={item.href} className="site-header-link">
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className="ml-auto flex items-center gap-2">
						{/* Below the desktop layout the bar is only the name and menu, as on
						stripe.com; the actions move to the bottom of the menu. */}
						<div className="hidden items-center gap-2 min-[56.25rem]:flex">
							<ButtonLink
								href={resumeHref}
								target="_blank"
								rel="noreferrer"
								variant="secondary"
								size="compact"
							>
								Resume
							</ButtonLink>
							<ButtonLink href={contactHref} size="compact">
								Contact
							</ButtonLink>
						</div>

						<button
							ref={menuButtonRef}
							type="button"
							aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
							aria-controls="mobile-navigation"
							aria-expanded={isMenuOpen}
							className="menu-toggle min-[56.25rem]:hidden"
							onClick={toggleMenu}
						>
							<svg
								className="menu-bars"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								aria-hidden="true"
								focusable="false"
							>
								<rect className="bar-outer" x="0" y="3" width="16" height="2" />
								<rect
									className="bar-cross-a"
									x="0"
									y="7"
									width="16"
									height="2"
								/>
								<rect
									className="bar-cross-b"
									x="0"
									y="7"
									width="16"
									height="2"
								/>
								<rect
									className="bar-outer"
									x="0"
									y="11"
									width="16"
									height="2"
								/>
							</svg>
						</button>
					</div>
				</div>

				<div
					id="mobile-navigation"
					aria-hidden={!isMenuOpen}
					inert={!isMenuOpen}
					className={`site-header-menu min-[56.25rem]:hidden ${
						isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
					}`}
				>
					<nav
						aria-label="Primary on phones"
						className="site-header-inner flex w-full flex-1 flex-col pt-4 pb-4"
					>
						<ul>
							{navigationItems.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className="site-menu-link"
										onClick={closeMenu}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
						{/* Pinned to the bottom of the sheet, as Stripe pins its call to action. */}
						<div className="mt-auto grid grid-cols-2 gap-2 pt-6">
							<ButtonLink
								href={contactHref}
								className="min-h-11"
								onClick={closeMenu}
							>
								Contact
							</ButtonLink>
							<ButtonLink
								href={resumeHref}
								target="_blank"
								rel="noreferrer"
								variant="secondary"
								className="min-h-11"
								onClick={closeMenu}
							>
								Resume
							</ButtonLink>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
}
