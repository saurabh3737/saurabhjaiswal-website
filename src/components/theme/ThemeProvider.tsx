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

function getInitialTheme(): ThemeId {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  const stored =
    window.localStorage.getItem(
      "saurabh-theme",
    );

  return isValidTheme(stored)
    ? stored
    : DEFAULT_THEME;
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] =
    useState<ThemeId>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme =
      theme;

    window.localStorage.setItem(
      "saurabh-theme",
      theme,
    );
  }, [theme]);

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