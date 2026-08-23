"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme =
  | "founder-noir"
  | "executive-light"
  | "ai-ember"
  | "research-blue"
  | "emerald";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext =
  createContext<ThemeContextValue | null>(
    null,
  );

const DEFAULT_THEME: Theme =
  "founder-noir";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const stored =
    window.localStorage.getItem(
      "saurabh-theme",
    ) as Theme | null;

  return stored ?? DEFAULT_THEME;
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] =
    useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme =
      theme;

    window.localStorage.setItem(
      "saurabh-theme",
      theme,
    );
  }, [theme]);

  function setTheme(
    nextTheme: Theme,
  ) {
    setThemeState(nextTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider",
    );
  }

  return context;
}