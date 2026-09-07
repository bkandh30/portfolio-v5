// beui.dev/components/motion/text-animation

import {
	domAnimation,
	LazyMotion,
	type MotionStyle,
	type UseInViewOptions,
	useInView,
	useReducedMotion,
} from "motion/react";
import * as m from "motion/react-m";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type ChromaticTextRevealProps = {
	/** Sentence fragment that remains fixed while the final word changes. */
	prefix: string;
	/** Words revealed one after another after the fixed prefix. */
	words: readonly string[];
	/** Sweep duration in seconds. */
	duration?: number;
	/** Delay before the first sweep, in seconds. */
	delay?: number;
	/** Rest after a word finishes revealing, in seconds. */
	pauseDuration?: number;
	/** Returns to the first word after the final word. */
	loop?: boolean;
	/** Starts when the text enters the viewport. */
	startOnView?: boolean;
	/** Only starts on the first viewport entry. */
	once?: boolean;
	/** IntersectionObserver root margin used by the viewport trigger. */
	inViewMargin?: UseInViewOptions["margin"];
	className?: string;
};

export function ChromaticTextReveal({
	prefix,
	words,
	duration = 1.2,
	delay = 0,
	pauseDuration = 0.8,
	loop = true,
	startOnView = true,
	once = true,
	inViewMargin,
	className,
}: ChromaticTextRevealProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const timerRef = useRef<number | null>(null);
	const [wordIndex, setWordIndex] = useState(0);
	const reduceMotion = useReducedMotion();
	const isInView = useInView(ref, {
		once,
		margin: inViewMargin,
		amount: 0.4,
	});
	const shouldReveal = !startOnView || isInView || reduceMotion;
	const hasWords = words.length > 0;
	const activeIndex = hasWords ? wordIndex % words.length : 0;
	const activeWord = words[activeIndex] ?? "";
	const sizingWords = Array.from(new Set(words));

	const clearPendingWord = useCallback(() => {
		if (timerRef.current !== null) {
			window.clearTimeout(timerRef.current);
			timerRef.current = null;
		}
	}, []);

	const scheduleNextWord = useCallback(() => {
		clearPendingWord();
		const isLastWord = activeIndex === words.length - 1;
		if (
			reduceMotion ||
			!shouldReveal ||
			words.length < 2 ||
			(isLastWord && !loop)
		) {
			return;
		}

		timerRef.current = window.setTimeout(() => {
			setWordIndex((index) => (index + 1) % words.length);
		}, pauseDuration * 1000);
	}, [
		activeIndex,
		clearPendingWord,
		loop,
		pauseDuration,
		reduceMotion,
		shouldReveal,
		words.length,
	]);

	useEffect(() => clearPendingWord, [clearPendingWord]);

	return (
		<LazyMotion features={domAnimation} strict>
			<span ref={ref} className={cn("inline-flex items-baseline", className)}>
				<span className="whitespace-nowrap">
					{prefix}
					{hasWords ? "\u00A0" : null}
				</span>
				{hasWords ? (
					<span className="relative inline-grid">
						{sizingWords.map((word) => (
							<span
								key={word}
								aria-hidden
								className="invisible col-start-1 row-start-1 whitespace-nowrap"
							>
								{word}
							</span>
						))}
						{/* Matching negative offsets and padding preserve alignment while
								giving blurred glyph edges room to render during the reveal. */}
						<m.span
							key={`${activeWord}-${activeIndex}`}
							aria-hidden
							initial={
								reduceMotion
									? false
									: {
											"--chromatic-sweep": "-14%",
											opacity: 0.56,
											filter: "blur(6px)",
											transform: "translateY(5px)",
										}
							}
							animate={{
								"--chromatic-sweep": shouldReveal ? "114%" : "-14%",
								opacity: 1,
								filter: "blur(0px)",
								transform: "translateY(0px)",
							}}
							transition={{
								"--chromatic-sweep": reduceMotion
									? { duration: 0 }
									: { duration, delay, ease: [0.77, 0, 0.175, 1] },
								opacity: reduceMotion
									? { duration: 0 }
									: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
								filter: reduceMotion
									? { duration: 0 }
									: { duration: 0.36, ease: [0.16, 1, 0.3, 1] },
								transform: reduceMotion
									? { duration: 0 }
									: { duration: 0.36, ease: [0.16, 1, 0.3, 1] },
							}}
							onAnimationComplete={scheduleNextWord}
							className="chromatic-text-word"
							style={
								{
									"--chromatic-sweep": reduceMotion ? "114%" : "-14%",
								} as MotionStyle
							}
						>
							{activeWord}
						</m.span>
						<span className="sr-only">{activeWord}</span>
					</span>
				) : null}
			</span>
		</LazyMotion>
	);
}
