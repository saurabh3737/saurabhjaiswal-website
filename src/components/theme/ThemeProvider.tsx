"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
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

const STORAGE_KEY =
  "saurabh-theme";

const THEME_EVENT =
  "saurabh-theme-change";

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

function getThemeSnapshot(): ThemeId {
  const stored =
    window.localStorage.getItem(
      STORAGE_KEY,
    );

  return isValidTheme(stored)
    ? stored
    : DEFAULT_THEME;
}

function getServerSnapshot(): ThemeId {
  return DEFAULT_THEME;
}

function subscribe(
  callback: () => void,
) {
  window.addEventListener(
    "storage",
    callback,
  );

  window.addEventListener(
    THEME_EVENT,
    callback,
  );

  return () => {
    window.removeEventListener(
      "storage",
      callback,
    );

    window.removeEventListener(
      THEME_EVENT,
      callback,
    );
  };
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme =
    useSyncExternalStore(
      subscribe,
      getThemeSnapshot,
      getServerSnapshot,
    );

  useEffect(() => {
    document.documentElement.dataset.theme =
      theme;
  }, [theme]);

  function setTheme(
    nextTheme: ThemeId,
  ) {
    window.localStorage.setItem(
      STORAGE_KEY,
      nextTheme,
    );

    document.documentElement.dataset.theme =
      nextTheme;

    window.dispatchEvent(
      new Event(THEME_EVENT),
    );
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