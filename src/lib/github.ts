import { cacheLife, cacheTag } from "next/cache";
import { githubConfig } from "./github.config";
import { projects as staticProjects } from "./data";
import type { Project } from "@/types";

type GithubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
};

function toTitleCase(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function mapRepo(repo: GithubRepo): Project {
  const { categoryMap } = githubConfig;
  const topics: string[] = repo.topics ?? [];
  const categorySlug = topics.find((t) => t in categoryMap);
  const tech = topics.filter((t) => !(t in categoryMap));

  return {
    title: toTitleCase(repo.name),
    description: {
      pt: repo.description ?? "",
      en: repo.description ?? "",
    },
    tech,
    repoUrl: repo.html_url,
    liveUrl: repo.homepage || undefined,
    category: categorySlug,
    stars: repo.stargazers_count,
    source: "github",
  };
}

async function fetchFromGithub(): Promise<Project[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("github-projects");

  const { username } = githubConfig;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${username}/starred?sort=created&per_page=100`,
    { headers }
  );

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const data = await res.json();
  return (data as GithubRepo[]).map(mapRepo);
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await fetchFromGithub();
  } catch {
    return staticProjects.map((p) => ({ ...p, source: "static" as const }));
  }
}
