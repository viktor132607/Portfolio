import { bg } from "./bg";
import { en } from "./en";
import type { Lang, NavItem } from "./types";

export type { Lang, NavItem };

export function normalizeLang(lang?: string): Lang {
  return lang === "bg" ? "bg" : "en";
}

export const content = {
  bg,
  en
} as const;

export const dictionary = content;
