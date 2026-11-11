import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the design system's named scales. Without this, a custom
// size such as `text-small` is read as a colour and dropped next to `text-ink`.
const twMerge = extendTailwindMerge({
	extend: {
		theme: {
			text: [
				"display",
				"statement",
				"title",
				"subtitle",
				"lead",
				"body",
				"small",
				"caption",
				"code",
			],
			radius: ["control", "panel", "field"],
			shadow: ["float", "panel"],
			font: ["display"],
		},
	},
});

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
