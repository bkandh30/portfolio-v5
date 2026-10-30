import { createServerFn } from "@tanstack/react-start";
import type {
	Contribution,
	ContributionLevel,
} from "../components/ui/github-activity";
import { portfolio } from "../data/portfolio";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const CACHE_TTL = 60 * 60 * 1000;
const REQUEST_TIMEOUT = 4000;

const LEVELS: Record<string, ContributionLevel> = {
	NONE: 0,
	FIRST_QUARTILE: 1,
	SECOND_QUARTILE: 2,
	THIRD_QUARTILE: 3,
	FOURTH_QUARTILE: 4,
};

const ACTIVITY_QUERY = `
	query ($login: String!) {
		user(login: $login) {
			contributionsCollection {
				contributionCalendar {
					weeks {
						contributionDays {
							date
							contributionCount
							contributionLevel
						}
					}
				}
				commitContributionsByRepository(maxRepositories: 100) {
					repository {
						isPrivate
					}
				}
			}
		}
	}
`;

type ActivityResponse = {
	data?: {
		user: {
			contributionsCollection: {
				contributionCalendar: {
					weeks: {
						contributionDays: {
							date: string;
							contributionCount: number;
							contributionLevel: string;
						}[];
					}[];
				};
				commitContributionsByRepository: {
					repository: { isPrivate: boolean };
				}[];
			};
		} | null;
	};
	errors?: { message: string }[];
};

export type GitHubActivityData =
	| {
			status: "ready";
			contributions: Contribution[];
			activeDays: number;
			longestStreak: number;
			repositoryCount: number;
	  }
	| { status: "empty" }
	| { status: "unavailable" };

let cache: { value: GitHubActivityData; expiresAt: number } | undefined;

function longestStreak(contributions: Contribution[]) {
	let longest = 0;
	let current = 0;

	for (const day of contributions) {
		current = day.count > 0 ? current + 1 : 0;
		longest = Math.max(longest, current);
	}

	return longest;
}

async function fetchActivity(
	login: string,
	token: string,
): Promise<GitHubActivityData> {
	const response = await fetch(GITHUB_GRAPHQL, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ query: ACTIVITY_QUERY, variables: { login } }),
		signal: AbortSignal.timeout(REQUEST_TIMEOUT),
	});

	if (!response.ok) {
		throw new Error(`GitHub responded with ${response.status}`);
	}

	const { data, errors }: ActivityResponse = await response.json();
	const collection = data?.user?.contributionsCollection;

	if (errors?.length || !collection) {
		throw new Error(errors?.[0]?.message ?? "GitHub user not found");
	}

	const days = collection.contributionCalendar.weeks.flatMap(
		(week) => week.contributionDays,
	);
	// the calendar renders weeks as columns, so it has to start on a Sunday
	const start = days.findIndex(
		(day) => new Date(`${day.date}T00:00:00Z`).getUTCDay() === 0,
	);
	const contributions = days.slice(Math.max(start, 0)).map((day) => ({
		date: day.date,
		count: day.contributionCount,
		level: LEVELS[day.contributionLevel] ?? 0,
	}));

	if (!contributions.some((day) => day.count > 0)) {
		return { status: "empty" };
	}

	// private repositories are never counted, even when the token can see them
	const publicRepos = collection.commitContributionsByRepository.filter(
		({ repository }) => !repository.isPrivate,
	);

	return {
		status: "ready",
		contributions,
		activeDays: contributions.filter((day) => day.count > 0).length,
		longestStreak: longestStreak(contributions),
		repositoryCount: publicRepos.length,
	};
}

export const getGitHubActivity = createServerFn({ method: "GET" }).handler(
	async (): Promise<GitHubActivityData> => {
		if (cache && cache.expiresAt > Date.now()) {
			return cache.value;
		}

		const token = process.env.GITHUB_TOKEN;
		if (!token) {
			return { status: "unavailable" };
		}

		try {
			const value = await fetchActivity(portfolio.github.username, token);
			cache = { value, expiresAt: Date.now() + CACHE_TTL };
			return value;
		} catch (error) {
			console.error("Failed to load GitHub activity", error);
			// a stale calendar is more useful than an empty section while GitHub recovers
			return cache?.value ?? { status: "unavailable" };
		}
	},
);
