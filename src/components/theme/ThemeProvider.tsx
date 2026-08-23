"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  THEMES,
  type ThemeId,
} from "@/content/themes";

type ThemeContextValue = {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
};

const ThemeContext =
  createContext<ThemeContextValue | null>(
    null,
  );

const DEFAULT_THEME: ThemeId =
  "founder-noir";

function isValidTheme(
  value: string | null,
): value is ThemeId {
  if (!value) {
    return false;
  }

  return THEMES.some(
    (theme) => theme.id === value,
  );
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  /*
   * IMPORTANT:
   *
   * Server and first client render MUST
   * start with the same theme.
   *
   * We read localStorage only AFTER
   * hydration inside useEffect.
   */
  const [theme, setThemeState] =
    useState<ThemeId>(DEFAULT_THEME);

  const [hydrated, setHydrated] =
    useState(false);

  useEffect(() => {
    const stored =
      window.localStorage.getItem(
        "saurabh-theme",
      );

    const initialTheme =
      isValidTheme(stored)
        ? stored
        : DEFAULT_THEME;

    setThemeState(initialTheme);

    document.documentElement.dataset.theme =
      initialTheme;

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }

    document.documentElement.dataset.theme =
      theme;

    window.localStorage.setItem(
      "saurabh-theme",
      theme,
    );
  }, [theme, hydrated]);

  function setTheme(
    nextTheme: ThemeId,
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