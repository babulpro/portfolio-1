"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

type ThemeMode = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = (localStorage.getItem("theme") as ThemeMode) || "system";
    setTheme(stored);
  }, []);

  const applyTheme = (mode: ThemeMode) => {
    setTheme(mode);
    const meta = document.querySelector('meta[name="color-scheme"]');
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (mode === "system") {
      localStorage.removeItem("theme");
      if (systemDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      if (meta) meta.setAttribute("content", "light dark");
    } else if (mode === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      if (meta) meta.setAttribute("content", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      if (meta) meta.setAttribute("content", "light");
    }
  };

  const cycleTheme = () => {
    if (theme === "system") applyTheme("dark");
    else if (theme === "dark") applyTheme("light");
    else applyTheme("system");
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/50" />
    );
  }

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Current theme: ${theme}. Click to switch theme.`}
      className="inline-flex items-center justify-center p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
      title={`Theme: ${theme} (Click to toggle)`}
    >
      {theme === "light" && <Sun className="w-4 h-4 text-amber-500" />}
      {theme === "dark" && <Moon className="w-4 h-4 text-blue-400" />}
      {theme === "system" && <Laptop className="w-4 h-4 text-slate-500" />}
    </button>
  );
}
