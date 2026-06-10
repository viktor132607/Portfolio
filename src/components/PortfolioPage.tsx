import { content, type Lang } from "@/data/profile";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";

type PortfolioPageProps = {
  lang: Lang;
};

export function PortfolioPage({ lang }: PortfolioPageProps) {
  const t = content[lang] as any;

  return (
    <>
      <Header lang={lang} />

      <main>
        <Hero lang={lang} />

        <section id="skills" className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.skills.eyebrow}
            title={t.sections.skills.title}
            text={t.sections.skills.text}
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {t.techStack.map((group) => (
              <article key={group.title} className="card">
                <h3 className="text-xl font-semibold text-ink dark:text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.badges.map((badge) => (
                    <span
                      key={badge.name}
                      className={`inline-flex items-center rounded-md px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] shadow-sm ${badge.className}`}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell section-padding">
          <SectionHeading eyebrow={t.sections.about.eyebrow} title={t.sections.about.title} />

          <article className="card">
            <div className="space-y-6">
              <div>
                <p className="text-base leading-8 text-muted dark:text-white sm:text-lg">
                  {t.sections.about.text}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {t.aboutCards.map((card) => (
                  <div
                    key={card.number}
                    className="rounded-[1.5rem] border border-line bg-white/50 p-5 backdrop-blur-sm dark:border-cyan-900/50 dark:bg-slate-950/45"
                  >
                    <p className="kicker">{card.number}</p>
                    <h3 className="mt-4 text-lg font-semibold text-ink dark:text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted dark:text-white">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="experience" className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.experience.eyebrow}
            title={t.sections.experience.title}
            text={t.sections.experience.text}
          />

          <div className="space-y-5">
            {t.experience.map((item) => (
              <article key={`${item.period}-${item.title}`} className="card">
                <div className="grid gap-5 lg:grid-cols-[0.3fr_0.7fr]">
                  <div>
                    <p className="kicker">{item.period}</p>
                    <p className="mt-4 text-sm text-muted dark:text-white">{item.company}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink dark:text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-muted dark:text-white">{item.text}</p>

                    <ul className="mt-5 space-y-2 text-sm leading-6 text-muted dark:text-white">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>

                    {item.stack.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <span key={tech} className="pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-padding">
          <div className="section-shell">
            <SectionHeading
              eyebrow={t.sections.projects.eyebrow}
              title={t.sections.projects.title}
              text={t.sections.projects.text}
            />
          </div>

          <div className="mt-10 grid gap-12">
            {t.projects.map((project) => {
              const hasLiveUrl = Boolean(project.previewUrl);
              const hasRepositoryUrl = Boolean(project.repositoryUrl);
              const hasScreenshot = project.previewType === "screenshot" && Boolean(project.previewImage);
              const canOpenPreview = hasScreenshot && hasLiveUrl;

              return (
                <article
                  key={project.number}
                  className="mx-auto w-[80vw] overflow-hidden rounded-[2rem] border border-line bg-panel/80 shadow-soft backdrop-blur dark:border-cyan-900/50 dark:bg-slate-950/80"
                >
                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="kicker">{project.number}</p>

                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-ink dark:text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <div className="mt-6 space-y-4 text-sm leading-7 text-muted dark:text-white">
                      <p>
                        <strong className="text-ink dark:text-white">
                          {t.sections.projects.labels.context}:
                        </strong>{" "}
                        {project.context}
                      </p>

                      <p>
                        <strong className="text-ink dark:text-white">
                          {t.sections.projects.labels.solution}:
                        </strong>{" "}
                        {project.solution}
                      </p>

                      <div>
                        <strong className="text-ink dark:text-white">Key features:</strong>
                        <ul className="mt-2 grid gap-x-6 gap-y-1 md:grid-cols-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="list-disc ml-5">{feature}</li>
                          ))}
                        </ul>
                      </div>

                      {project.sleepNotice ? (
                        <p className="rounded-2xl border border-amber-300/60 bg-amber-50 px-4 py-3 text-xs font-semibold text-amber-900 dark:border-amber-500/40 dark:bg-amber-950/30 dark:text-amber-100">
                          {project.sleepNotice}
                        </p>
                      ) : null}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.previewType === "iframe" && hasLiveUrl ? (
                    <div className="border-t border-line bg-white dark:border-cyan-900/50">
                      <iframe
                        src={project.previewUrl}
                        title={`${project.title} preview`}
                        loading="lazy"
                        className="h-[80vh] w-full bg-white"
                      />

                      <div className="flex flex-wrap items-center justify-end gap-4 border-t border-line bg-panel px-4 py-3 text-xs font-semibold text-muted dark:border-cyan-900/50 dark:bg-slate-950 dark:text-white">
                        {hasRepositoryUrl ? (
                          <a
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-ink dark:hover:text-white"
                          >
                            Open GitHub repository
                          </a>
                        ) : null}

                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition hover:text-ink dark:hover:text-white"
                        >
                          Open live project
                        </a>
                      </div>
                    </div>
                  ) : hasScreenshot ? (
                    <div className="border-t border-line bg-white dark:border-cyan-900/50 dark:bg-slate-950">
                      {canOpenPreview ? (
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block h-[80vh] overflow-y-auto bg-white dark:bg-slate-950"
                          aria-label={`Open ${project.title}`}
                        >
                          <img
                            src={project.previewImage}
                            alt={`${project.title} screenshot preview`}
                            loading="lazy"
                            className="w-full bg-white object-top"
                          />
                        </a>
                      ) : (
                        <div className="h-[80vh] overflow-y-auto bg-white dark:bg-slate-950">
                          <img
                            src={project.previewImage}
                            alt={`${project.title} screenshot preview`}
                            loading="lazy"
                            className="w-full bg-white object-top"
                          />
                        </div>
                      )}

                      <div className="flex flex-wrap items-center justify-end gap-4 border-t border-line bg-panel px-4 py-3 text-xs font-semibold text-muted dark:border-cyan-900/50 dark:bg-slate-950 dark:text-white">
                        {hasRepositoryUrl ? (
                          <a
                            href={project.repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-ink dark:hover:text-white"
                          >
                            Open GitHub repository
                          </a>
                        ) : null}

                        {hasLiveUrl ? (
                          <a
                            href={project.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-ink dark:hover:text-white"
                          >
                            Open live project
                          </a>
                        ) : (
                          <span>Live project coming soon</span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-[80vh] items-center justify-center border-t border-dashed border-line bg-panel/60 text-sm font-semibold text-muted dark:border-slate-700 dark:bg-slate-900/60 dark:text-white">
                      Project preview coming soon
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="education" className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.education.eyebrow}
            title={t.sections.education.title}
            text={t.sections.education.text}
          />

          <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-4">
            {t.education.map((item) => (
              <article key={`${item.title}-${item.period}`} className="card">
                <p className="kicker">{item.period}</p>
                <h3 className="mt-4 text-xl font-semibold text-ink dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-ink dark:text-white">{item.degree}</p>
                <p className="mt-4 text-sm leading-7 text-muted dark:text-white">{item.text}</p>

                <ul className="mt-5 space-y-2 text-sm leading-6 text-muted dark:text-white">
                  {item.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="section-shell section-padding">
          <SectionHeading
            eyebrow={t.sections.certificates.eyebrow}
            title={t.sections.certificates.title}
            text={t.sections.certificates.text}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.certificates.map((certificate) => (
              <article
                key={`${certificate.title}-${certificate.date}`}
                className="overflow-hidden rounded-[2rem] border border-line bg-panel/80 shadow-soft backdrop-blur dark:border-cyan-900/50 dark:bg-slate-950/80"
              >
                <div className="border-b border-line bg-white dark:border-cyan-900/50">
                  <img
                    src={certificate.previewImage}
                    alt={`${certificate.title} certificate preview`}
                    className="w-full bg-white object-contain object-top"
                  />
                </div>

                <div className="p-5">
                  <p className="kicker">{certificate.provider}</p>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-ink dark:text-white">
                    {certificate.title}
                  </h3>

                  <div className="mt-5 grid gap-3 text-sm leading-6 text-muted dark:text-white">
                    <div className="grid grid-cols-[0.35fr_0.65fr] gap-3">
                      <span className="font-semibold text-ink dark:text-white">Course date</span>
                      <span>{certificate.date}</span>
                    </div>

                    <div className="grid grid-cols-[0.35fr_0.65fr] gap-3">
                      <span className="font-semibold text-ink dark:text-white">Issue date</span>
                      <span>{certificate.issueDate}</span>
                    </div>

                    <div className="grid grid-cols-[0.35fr_0.65fr] gap-3">
                      <span className="font-semibold text-ink dark:text-white">Area</span>
                      <span>{certificate.area}</span>
                    </div>

                    <div className="grid grid-cols-[0.35fr_0.65fr] gap-3">
                      <span className="font-semibold text-ink dark:text-white">Level</span>
                      <span>{certificate.level}</span>
                    </div>
                  </div>

                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white dark:border-slate-700 dark:text-white dark:hover:bg-cyan-950"
                  >
                    Open certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell section-padding">
          <div className="rounded-[2rem] border border-sky-200 bg-white/55 p-6 shadow-sm backdrop-blur-md dark:border-cyan-700/60 dark:bg-slate-950/80 sm:p-8 lg:p-12">
            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-ink dark:text-white sm:text-5xl lg:text-6xl">
              {t.sections.contact.title}
            </h2>

            {t.sections.contact.text ? (
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted dark:text-white sm:text-lg">
                {t.sections.contact.text}
              </p>
            ) : null}

            <div className="mt-10 grid gap-4 rounded-[1.5rem] border border-sky-200 bg-white/50 p-5 text-sm font-semibold text-ink backdrop-blur-sm dark:border-teal-500/50 dark:bg-slate-950/50 dark:text-white sm:grid-cols-2 xl:grid-cols-4">
              <a
                href={`mailto:${t.profile.email}`}
                className="rounded-2xl border border-sky-200 bg-white/80 px-5 py-4 text-ink transition hover:border-sky-300 hover:bg-white dark:border-teal-500/40 dark:bg-teal-950/60 dark:text-white dark:hover:border-teal-300 dark:hover:bg-teal-900/80"
              >
                <span className="block text-xs uppercase tracking-[0.18em] text-sky-700 dark:text-white">
                  {t.sections.contact.email}
                </span>
                <span className="mt-2 block break-all text-ink dark:text-white">{t.profile.email}</span>
              </a>

              <a
                href={`tel:${t.profile.phone}`}
                className="rounded-2xl border border-sky-200 bg-white/80 px-5 py-4 text-ink transition hover:border-sky-300 hover:bg-white dark:border-teal-500/40 dark:bg-teal-950/60 dark:text-white dark:hover:border-teal-300 dark:hover:bg-teal-900/80"
              >
                <span className="block text-xs uppercase tracking-[0.18em] text-sky-700 dark:text-white">
                  {t.sections.contact.phone}
                </span>
                <span className="mt-2 block text-ink dark:text-white">{t.profile.phone}</span>
              </a>

              <a
                href={t.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-sky-200 bg-white/80 px-5 py-4 text-ink transition hover:border-sky-300 hover:bg-white dark:border-teal-500/40 dark:bg-teal-950/60 dark:text-white dark:hover:border-teal-300 dark:hover:bg-teal-900/80"
              >
                <span className="block text-xs uppercase tracking-[0.18em] text-sky-700 dark:text-white">GitHub</span>
                <span className="mt-2 block text-ink dark:text-white">Open profile</span>
              </a>

              <a
                href={t.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-sky-200 bg-white/80 px-5 py-4 text-ink transition hover:border-sky-300 hover:bg-white dark:border-teal-500/40 dark:bg-teal-950/60 dark:text-white dark:hover:border-teal-300 dark:hover:bg-teal-900/80"
              >
                <span className="block text-xs uppercase tracking-[0.18em] text-sky-700 dark:text-white">LinkedIn</span>
                <span className="mt-2 block text-ink dark:text-white">Open profile</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-teal-800/80 bg-slate-950 py-10 text-white shadow-sm dark:border-cyan-900/70 dark:bg-slate-950/95 dark:shadow-[0_-10px_40px_rgba(0,0,0,0.35)]">
        <div className="section-shell flex flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-bold tracking-[-0.02em] text-white">{t.profile.name}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href={`mailto:${t.profile.email}`}
              className="font-semibold text-white transition hover:text-white"
            >
              Email
            </a>

            <a
              href={t.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href={t.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-xs font-medium text-white">
            © {new Date().getFullYear()} {t.profile.name}
          </p>
        </div>
      </footer>
    </>
  );
}