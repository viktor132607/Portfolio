"use client";

import { useEffect, useMemo, useState } from "react";
import { content, type Lang } from "@/data/profile";

type HeroProps = {
  lang: Lang;
};

type GitHubRepo = {
  name: string;
  fork: boolean;
  archived: boolean;
};

type LanguageStat = {
  name: string;
  percent: number;
};

type GitHubStats = {
  repos: number;
  totalCommits: string;
  languages: LanguageStat[];
};

const githubUsername = "viktor132607";
const manualTotalCommits = "600+";

const languageColorMap: Record<string, { solid: string; soft: string }> = {
  "C#": { solid: "#68217A", soft: "#D9B8E5" },
  TypeScript: { solid: "#3178C6", soft: "#B7D7F3" },
  HTML: { solid: "#E34F26", soft: "#F8B9A8" },
  JavaScript: { solid: "#F7DF1E", soft: "#F8E889" },
  CSS: { solid: "#1572B6", soft: "#A8CEE8" },
  React: { solid: "#61DAFB", soft: "#C7F3FD" },
  "Next.js": { solid: "#111111", soft: "#CFCFCF" },
  "Tailwind CSS": { solid: "#38BDF8", soft: "#B9EDFD" }
};

function getLanguageColors(language: string) {
  return languageColorMap[language] ?? { solid: "#0F766E", soft: "#B7E4E1" };
}

function buildConicGradient(languages: LanguageStat[]) {
  if (!languages.length) {
    return "conic-gradient(#ccfbf1 0deg 360deg)";
  }

  let currentDeg = 0;

  const stops = languages.map((language) => {
    const color = getLanguageColors(language.name).solid;
    const start = currentDeg;
    const end = currentDeg + (language.percent / 100) * 360;

    currentDeg = end;

    return `${color} ${start}deg ${end}deg`;
  });

  if (currentDeg < 360) {
    stops.push(`#ccfbf1 ${currentDeg}deg 360deg`);
  }

  return `conic-gradient(${stops.join(", ")})`;
}

async function fetchRepoLanguages(repoName: string) {
  const response = await fetch(`https://api.github.com/repos/${githubUsername}/${repoName}/languages`, {
    headers: {
      Accept: "application/vnd.github+json"
    }
  });

  if (!response.ok) return {};

  return (await response.json()) as Record<string, number>;
}

export function Hero({ lang }: HeroProps) {
  const t = content[lang];
  const { profile, buttons } = t;

  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  const githubUrl = useMemo(() => profile.github || `https://github.com/${githubUsername}`, [profile.github]);

  useEffect(() => {
    let isMounted = true;

    async function loadGitHubStats() {
      try {
        setIsLoadingStats(true);

        const reposResponse = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated&type=owner`,
          {
            headers: {
              Accept: "application/vnd.github+json"
            }
          }
        );

        if (!reposResponse.ok) {
          throw new Error("Could not load GitHub repositories.");
        }

        const repos = ((await reposResponse.json()) as GitHubRepo[]).filter(
          (repo) => !repo.fork && !repo.archived
        );

        const languageResults = await Promise.allSettled(repos.map((repo) => fetchRepoLanguages(repo.name)));

        const languageBytes = new Map<string, number>();

        for (const result of languageResults) {
          if (result.status !== "fulfilled") continue;

          for (const [language, bytes] of Object.entries(result.value)) {
            languageBytes.set(language, (languageBytes.get(language) ?? 0) + bytes);
          }
        }

        const totalBytes = Array.from(languageBytes.values()).reduce((total, bytes) => total + bytes, 0);

        const languages = Array.from(languageBytes.entries())
          .map(([name, bytes]) => ({
            name,
            percent: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0
          }))
          .filter((language) => language.percent > 0)
          .sort((a, b) => b.percent - a.percent)
          .slice(0, 5);

        if (!isMounted) return;

        setStats({
          repos: repos.length,
          totalCommits: manualTotalCommits,
          languages
        });
      } catch {
        if (!isMounted) return;

        setStats({
          repos: 0,
          totalCommits: manualTotalCommits,
          languages: []
        });
      } finally {
        if (isMounted) {
          setIsLoadingStats(false);
        }
      }
    }

    loadGitHubStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const chartLanguages = stats?.languages ?? [];
  const chartGradient = buildConicGradient(chartLanguages);

  return (
    <section id="top" className="section-shell pb-12 pt-10 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:items-stretch">
        <div className="flex max-w-5xl flex-col justify-between">
          <div>
            {profile.role ? <p className="kicker mb-5">{profile.role}</p> : null}

            <h1 className="text-4xl font-semibold tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl 2xl:text-8xl">
              {profile.headline}
            </h1>

            <div className="mt-7 max-w-4xl rounded-[1.5rem] border border-line bg-panel/80 p-5 shadow-soft backdrop-blur-md dark:border-cyan-400/35 dark:bg-slate-950/75 dark:shadow-[0_0_35px_rgba(34,211,238,0.12)]">
              <p className="text-base font-medium leading-8 text-ink dark:text-white sm:text-lg lg:text-xl lg:leading-9">
                {profile.summary}
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 dark:border-cyan-400/50 dark:bg-cyan-500 dark:text-white dark:hover:bg-cyan-300"
            >
              {buttons.viewExperience}
            </a>

            <a
              href="#projects"
              className="rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 dark:border-cyan-400/50 dark:bg-cyan-500 dark:text-white dark:hover:bg-cyan-300"
            >
              {buttons.viewProjects}
            </a>

            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 dark:border-cyan-400/50 dark:bg-cyan-500 dark:text-white dark:hover:bg-cyan-300"
            >
              {buttons.downloadCv}
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:border-fuchsia-400/50 dark:bg-fuchsia-600 dark:text-white dark:hover:bg-fuchsia-500"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="flex rounded-[2rem] border border-teal-200/80 bg-white/80 p-6 shadow-soft backdrop-blur dark:border-cyan-800/50 dark:bg-slate-950/85">
          <div className="flex w-full flex-col">
            <div className="flex items-center justify-between gap-4">
              <p className="kicker">GitHub</p>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-teal-200 px-5 py-2 text-sm font-semibold text-ink transition hover:bg-teal-50 dark:border-cyan-700/60 dark:text-white dark:hover:bg-teal-950"
              >
                Open
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-teal-200/80 bg-white/70 p-4 dark:border-cyan-800/50 dark:bg-slate-950/70">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:text-white">
                  Public repos
                </p>
                <p className="mt-2 text-3xl font-semibold text-ink dark:text-white">
                  {isLoadingStats ? "..." : stats?.repos || "—"}
                </p>
              </div>

              <div className="rounded-2xl border border-teal-200/80 bg-white/70 p-4 dark:border-cyan-800/50 dark:bg-slate-950/70">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:text-white">
                  Total commits
                </p>
                <p className="mt-2 text-3xl font-semibold text-ink dark:text-white">
                  {stats?.totalCommits ?? manualTotalCommits}
                </p>
              </div>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted dark:text-white">
                Tech split
              </p>

              <div className="mt-6 flex flex-col items-center">
                {isLoadingStats ? (
                  <div className="h-40 w-40 rounded-full bg-teal-100 dark:bg-teal-950" />
                ) : (
                  <div className="relative h-40 w-40 rounded-full" style={{ background: chartGradient }}>
                    <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center dark:bg-[#081f1f]">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted dark:text-white">
                        Tech
                      </span>
                      <span className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-ink dark:text-white">
                        {chartLanguages.length}
                      </span>
                      <span className="text-xs text-muted dark:text-white">languages</span>
                    </div>
                  </div>
                )}

                <div className="mt-10 w-full max-w-sm space-y-4">
                  {isLoadingStats ? (
                    <>
                      <div className="h-2 rounded-full bg-teal-100 dark:bg-teal-950" />
                      <div className="h-2 rounded-full bg-teal-100 dark:bg-teal-950" />
                      <div className="h-2 rounded-full bg-teal-100 dark:bg-teal-950" />
                      <div className="h-2 rounded-full bg-teal-100 dark:bg-teal-950" />
                    </>
                  ) : chartLanguages.length ? (
                    chartLanguages.map((language) => {
                      const colors = getLanguageColors(language.name);

                      return (
                        <div key={language.name}>
                          <div className="mb-2 flex items-center justify-between gap-3 text-sm font-semibold text-ink dark:text-white">
                            <div className="flex items-center gap-2">
                              <span
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: colors.solid }}
                              />
                              <span>{language.name}</span>
                            </div>

                            <span>{language.percent}%</span>
                          </div>

                          <div
                            className="h-2 overflow-hidden rounded-full"
                            style={{ backgroundColor: colors.soft }}
                          >
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${language.percent}%`,
                                backgroundColor: colors.solid
                              }}
                            />
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-sm leading-6 text-muted dark:text-white">
                      GitHub language data is temporarily unavailable.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}