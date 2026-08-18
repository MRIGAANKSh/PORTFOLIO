import { siteConfig } from "@/lib/constants";

const GITHUB_API = "https://api.github.com/graphql";

type GraphQLResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

type ContributionDay = {
  date: string;
  contributionCount: number;
};

type Week = {
  contributionDays: ContributionDay[];
};

type PinnedRepo = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  primaryLanguage: { name: string } | null;
};

export type ContributionPoint = {
  date: string;
  value: number;
};

export type GithubProject = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazers_count: number;
  language: string | null;
};

async function githubFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const token = process.env.GITHUB_ACCESS_TOKEN;
  if (!token) {
    throw new GithubError("GitHub token not configured", 500);
  }

  const res = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new GithubError("GitHub API request failed", res.status);
  }

  const json = (await res.json()) as GraphQLResponse<T>;
  if (json.errors?.length) {
    throw new GithubError(json.errors[0].message, 502);
  }
  if (!json.data) {
    throw new GithubError("Unexpected GitHub API response structure", 502);
  }
  return json.data;
}

export class GithubError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export async function fetchContributions(): Promise<ContributionPoint[]> {
  const to = new Date();
  const from = new Date();
  from.setFullYear(to.getFullYear() - 1);

  const data = await githubFetch<{
    user: {
      contributionsCollection: {
        contributionCalendar: {
          weeks: Week[];
        };
      };
    };
  }>(
    `
      query($login: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $login) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `,
    {
      login: siteConfig.githubUsername,
      from: from.toISOString(),
      to: to.toISOString(),
    },
  );

  return data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
    (week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        value: day.contributionCount,
      })),
  );
}

export async function fetchPinnedRepos(): Promise<GithubProject[]> {
  const data = await githubFetch<{
    user: {
      pinnedItems: {
        nodes: PinnedRepo[];
      };
    };
  }>(
    `
      query($login: String!) {
        user(login: $login) {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                stargazerCount
                primaryLanguage {
                  name
                }
              }
            }
          }
        }
      }
    `,
    { login: siteConfig.githubUsername },
  );

  return data.user.pinnedItems.nodes.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.url,
    stargazers_count: repo.stargazerCount,
    language: repo.primaryLanguage?.name ?? null,
  }));
}
