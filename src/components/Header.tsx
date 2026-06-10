"use client";

import { useEffect, useMemo, useState } from "react";
import { content, type Lang } from "@/data/profile";

type HeaderProps = {
  lang: Lang;
};

const sectionOrder = ["skills", "about", "experience", "projects", "education", "certificates", "contact"] as const;

export function Header({ lang }: HeaderProps) {
  const t = content[lang] as any;
  const [activeSection, setActiveSection] = useState("top");
  const [isDark, setIsDark] = useState(false);

  const navItems = useMemo(() => {
    const labels = new Map<string, string>(t.navItems.map((item: any) => [item.href, item.label] as [string, string]));

    return sectionOrder.map((id) => ({
      id,
      href: `#${id}`,
      label: labels.get(`#${id}`) ?? id
    }));
  }, [t.navItems]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialDark = savedTheme === "dark";

    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  useEffect(() => {
    const sectionIds = ["top", ...sectionOrder];

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const headerOffset = 90;

      let bestSection = "top";
      let bestVisibleArea = 0;

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        const visibleTop = Math.max(rect.top, headerOffset);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);

        if (visibleArea > bestVisibleArea) {
          bestVisibleArea = visibleArea;
          bestSection = id;
        }
      }

      setActiveSection(bestSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  function toggleTheme() {
    const nextDark = !isDark;

    setIsDark(nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextDark);
  }

  function scrollToSection(id: string) {
    const section = document.getElementById(id);

    if (!section) return;

    const headerHeight = 74;
    const top = section.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top,
      behavior: "smooth"
    });

    setActiveSection(id);
  }

  const nextLang: Lang = lang === "bg" ? "en" : "bg";
  const homeLabel = lang === "bg" ? "Начало" : "Home";

  return (
    <header className="sticky top-0 z-50 border-b border-teal-700 bg-teal-700 shadow-sm dark:border-cyan-900/70 dark:bg-slate-950/95 dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="section-shell flex min-h-16 items-center justify-between gap-6">
        <nav className="hidden items-center gap-5 lg:flex">
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="relative py-2 text-sm font-semibold text-white transition hover:text-white"
          >
            {homeLabel}

            {activeSection === "top" ? (
              <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-red-500 dark:bg-teal-300" />
            ) : null}
          </button>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="relative py-2 text-sm font-semibold text-white transition hover:text-white"
              >
                {item.label}

                {isActive ? (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-red-500 dark:bg-teal-300" />
                ) : null}
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-teal-200/60 bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-500 dark:border-cyan-700/60 dark:bg-slate-950 dark:hover:bg-cyan-950"
          >
            {isDark ? "Light" : "Dark"}
          </button>

          <a
            href={`/${nextLang}`}
            className="rounded-full border border-teal-200/60 bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-500 dark:border-cyan-700/60 dark:bg-slate-950 dark:hover:bg-cyan-950"
          >
            {nextLang.toUpperCase()}
          </a>

          <a
            href={t.profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-teal-200/60 bg-teal-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-500 sm:inline-flex dark:border-cyan-700/60 dark:bg-slate-950 dark:hover:bg-cyan-950"
          >
            {t.buttons.downloadCv}
          </a>
        </div>
      </div>
    </header>
  );
}