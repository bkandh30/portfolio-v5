import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "../components/about-section";
import { CapabilitiesSection } from "../components/capabilities-section";
import { ContactSection } from "../components/contact-section";
import { GitHubSection } from "../components/github-section";
import { HeroSection } from "../components/hero-section";
import { ProjectsSection } from "../components/projects-section";
import { SkillsSection } from "../components/skills-section";
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
			<AboutSection />
			<CapabilitiesSection />
			<ProjectsSection />
			<GitHubSection activity={githubActivity} />
			<SkillsSection />
			<ContactSection />
		</main>
	);
}
