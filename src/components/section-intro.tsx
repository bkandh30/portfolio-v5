type SectionIntroProps = {
	id: string;
	marker: string;
	title: string;
	description: string;
};

export function SectionIntro({
	id,
	marker,
	title,
	description,
}: SectionIntroProps) {
	return (
		<header className="mx-auto max-w-[42rem] text-center">
			<p className="font-mono text-[0.6875rem] leading-4 font-medium text-brand-700 uppercase tracking-[0.12em]">
				{marker}
			</p>
			<h2
				id={id}
				className="mt-4 text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] font-bold tracking-[-0.045em]"
			>
				{title}
			</h2>
			<p className="mx-auto mt-5 max-w-[36rem] text-base leading-7 text-neutral-600 sm:text-[1.0625rem]">
				{description}
			</p>
		</header>
	);
}
