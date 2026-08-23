"use client";

import {
  Check,
  ChevronDown,
  Palette,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  THEMES,
  type ThemeId,
} from "@/content/themes";
import { useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (
      event: MouseEvent,
    ) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(
          event.target as Node,
        )
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutside,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutside,
      );
    };
  }, []);

  const activeTheme =
    THEMES.find(
      (item) => item.id === theme,
    ) ?? THEMES[0];

  return (
    <div
      ref={rootRef}
      className="theme-switcher"
    >
      <button
        type="button"
        className="theme-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <Palette size={17} />
        <span className="theme-trigger-label">
          {activeTheme.label}
        </span>
        <ChevronDown
          size={15}
          className={
            open
              ? "theme-chevron theme-chevron-open"
              : "theme-chevron"
          }
        />
      </button>

      {open ? (
        <div className="theme-menu">
          {THEMES.map((item) => {
            const active =
              item.id === theme;

            return (
              <button
                key={item.id}
                type="button"
                className={
                  active
                    ? "theme-option theme-option-active"
                    : "theme-option"
                }
                onClick={() => {
                  setTheme(
                    item.id as ThemeId,
                  );
                  setOpen(false);
                }}
              >
                <span
                  className={`theme-dot theme-dot-${item.id}`}
                />

                <span>{item.label}</span>

                {active ? (
                  <Check
                    size={15}
                    className="theme-check"
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}