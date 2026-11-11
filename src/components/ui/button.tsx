import type { ComponentProps } from "react";
import { cn } from "#/lib/utils";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "compact";

interface ButtonStyle {
	variant?: ButtonVariant;
	/** `compact` is the 40px Header action; everything else is 48px. */
	size?: ButtonSize;
	/** Primary actions carry a chevron by default; secondary actions do not. */
	chevron?: boolean;
}

function buttonClassName(
	variant: ButtonVariant,
	size: ButtonSize,
	className?: string,
) {
	return cn(
		"btn",
		variant === "primary" ? "btn-primary" : "btn-secondary",
		size === "compact" && "btn-compact",
		className,
	);
}

export function Chevron({ className }: { className?: string }) {
	return (
		<svg
			className={cn("chevron", className)}
			viewBox="0 0 10 10"
			aria-hidden="true"
			focusable="false"
		>
			<path
				d="M3 1l4 4-4 4"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

/** An action that navigates: violet primary, or outlined secondary. */
export function ButtonLink({
	variant = "primary",
	size = "default",
	chevron = variant === "primary",
	className,
	children,
	...props
}: ComponentProps<"a"> & ButtonStyle) {
	return (
		<a className={buttonClassName(variant, size, className)} {...props}>
			{children}
			{chevron ? <Chevron /> : null}
		</a>
	);
}

/** An action that does something in place, such as copying the email. */
export function Button({
	variant = "primary",
	size = "default",
	chevron = false,
	className,
	children,
	...props
}: Omit<ComponentProps<"button">, "type"> & ButtonStyle) {
	return (
		<button
			type="button"
			className={buttonClassName(variant, size, className)}
			{...props}
		>
			{children}
			{chevron ? <Chevron /> : null}
		</button>
	);
}

/** A quiet violet text action, such as "View source". */
export function ActionLink({
	chevron = true,
	className,
	children,
	...props
}: ComponentProps<"a"> & { chevron?: boolean }) {
	return (
		<a className={cn("action-link", className)} {...props}>
			{children}
			{chevron ? <Chevron /> : null}
		</a>
	);
}
