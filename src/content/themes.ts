export const THEMES = [
  {
    id: "founder-noir",
    label: "Dark",
  },
  {
    id: "executive-light",
    label: "Light",
  },
] as const;

export type ThemeId =
  (typeof THEMES)[number]["id"];

export const DEFAULT_THEME: ThemeId =
  "founder-noir";
