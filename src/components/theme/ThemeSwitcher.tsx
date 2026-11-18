"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "founder-noir";
  const label = isDark
    ? "Switch to light theme"
    : "Switch to dark theme";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() =>
        setTheme(
          isDark
            ? "executive-light"
            : "founder-noir",
        )
      }
      aria-label={label}
      title={label}
    >
      {isDark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
