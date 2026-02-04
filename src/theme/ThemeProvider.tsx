import React, { useEffect } from "react";
import { useThemeStore, initThemeFromStorage } from "./themeStore";
import { applyAccentToCssVars } from "./themeUtils";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useThemeStore((s) => s.mode);
  const accent = useThemeStore((s) => s.accent);

  useEffect(() => {
    initThemeFromStorage();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  useEffect(() => {
    applyAccentToCssVars(accent);
  }, [accent]);

  return <>{children}</>;
}
