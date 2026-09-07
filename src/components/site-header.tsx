import { ArrowRight, Menu, X } from "lucide-react";
import { useRef, useState } from "react";

const navigationItems = [
	{ label: "About", href: "/#about" },
	{ label: "Projects", href: "/#projects" },
	{ label: "GitHub", href: "/#github" },
	{ label: "Blog", href: "/#blog" },
	{ label: "Contact", href: "/#contact" },
] as const;

export function SiteHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const closeMenuAndReturnFocus = () => {
		setIsMenuOpen(false);
		menuButtonRef.current?.focus();
	};

	return (
		<>
			<a
				href="#main-content"
				className="fixed top-3 left-3 z-[60] -translate-y-20 rounded-md bg-neutral-990 px-4 py-2.5 text-sm font-semibold text-neutral-0 no-underline shadow-lg transition-transform focus:translate-y-0 focus:text-neutral-0"
			>
				Skip to content
			</a>

			<header className="sticky top-0 z-50 border-neutral-50 border-b bg-white/90 backdrop-blur-xl">
				<div className="site-container flex h-[var(--header-height)] items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
					<a
						href="/"
						aria-label="Bhavya Kandhari home"
						className="group flex shrink-0 items-center gap-3 text-neutral-990 no-underline hover:text-neutral-990"
					>
						<span className="relative grid size-8 place-items-center rounded-md bg-neutral-990 font-mono text-[0.6875rem] font-semibold tracking-[-0.04em] text-neutral-0 shadow-sm transition-transform group-hover:-translate-y-0.5">
							BK
							<span
								aria-hidden="true"
								className="absolute -right-1 -bottom-1 size-2.5 rounded-full border-2 border-white bg-orange"
							/>
						</span>
						<span className="text-sm font-bold tracking-[-0.02em] sm:text-[0.9375rem]">
							Bhavya Kandhari
						</span>
					</a>

					<nav
						aria-label="Primary navigation"
						className="hidden items-center gap-1 lg:flex"
					>
						{navigationItems
							.filter((item) => item.label !== "Blog")
							.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="rounded-md px-3 py-2 text-[0.8125rem] font-semibold text-neutral-600 no-underline transition-colors hover:bg-brand-25 hover:text-neutral-990"
								>
									{item.label}
								</a>
							))}
					</nav>

					<a
						href="/#blog"
						className="hidden h-10 items-center gap-1.5 justify-self-end rounded-md bg-neutral-990 px-4 text-[0.8125rem] font-semibold text-neutral-0 no-underline shadow-sm transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-brand-700 hover:text-neutral-0 lg:inline-flex"
					>
						Blog
						<ArrowRight
							aria-hidden="true"
							className="size-3.5"
							strokeWidth={2}
						/>
					</a>

					<button
						ref={menuButtonRef}
						type="button"
						aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
						aria-controls="mobile-navigation"
						aria-expanded={isMenuOpen}
						className={`relative grid size-10 place-items-center rounded-md border text-neutral-0 shadow-sm transition-[background-color,border-color,color,box-shadow] duration-200 lg:hidden ${
							isMenuOpen
								? "border-brand-600 bg-brand-600"
								: "border-neutral-900 bg-neutral-900 hover:border-brand-700 hover:bg-brand-700"
						}`}
						onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
						onKeyDown={(event) => {
							if (event.key === "Escape" && isMenuOpen) {
								closeMenuAndReturnFocus();
							}
						}}
					>
						<span className="sr-only">
							{isMenuOpen ? "Close navigation" : "Open navigation"}
						</span>
						<span className="menu-icon" data-open={isMenuOpen}>
							<Menu
								aria-hidden="true"
								className="hamburger"
								strokeWidth={1.8}
							/>
							<X aria-hidden="true" className="close" strokeWidth={1.8} />
						</span>
					</button>

					<div
						id="mobile-navigation"
						aria-hidden={!isMenuOpen}
						inert={!isMenuOpen}
						className={`absolute inset-x-0 top-full origin-top border-neutral-50 border-b bg-white shadow-[0_18px_40px_rgba(6,27,49,0.08)] transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
							isMenuOpen
								? "visible translate-y-0 opacity-100"
								: "invisible pointer-events-none -translate-y-2 opacity-0"
						}`}
					>
						<nav
							aria-label="Mobile navigation"
							className="site-container grid grid-cols-1 py-4"
							onKeyDown={(event) => {
								if (event.key === "Escape") {
									closeMenuAndReturnFocus();
								}
							}}
						>
							{navigationItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="flex min-h-12 items-center px-1 text-sm font-semibold text-neutral-700 no-underline transition-colors hover:text-brand-700"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</a>
							))}
						</nav>
					</div>
				</div>
			</header>
		</>
	);
}
