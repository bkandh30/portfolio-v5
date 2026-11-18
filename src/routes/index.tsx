import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "../components/about-section";
import { ContactSection } from "../components/contact-section";
import { GitHubSection } from "../components/github-section";
import { HeroSection } from "../components/hero-section";
import { HowSection } from "../components/how-section";
import { SkillsSection } from "../components/skills-section";
import { WorkSection } from "../components/work-section";
import { getGitHubActivity } from "../lib/github";

export const Route = createFileRoute("/")({
	loader: () => getGitHubActivity(),
	component: App,
});

function App() {
	const githubActivity = Route.useLoaderData();

	return (
		<main id="main-content">
			<HeroSection />
			<WorkSection />
			<HowSection />
			<GitHubSection activity={githubActivity} />
			<SkillsSection />
			<AboutSection />
			<ContactSection />
		</main>
	);
}
