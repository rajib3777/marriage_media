import { create } from "zustand";
import { DEFAULT_THEME, ThemeActions, ThemeState, ThemeMode } from "./themeTypes";

const STORAGE_KEY = "alif_theme_v1";

function loadTheme(): ThemeState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_THEME;
    const parsed = JSON.parse(raw) as Partial<ThemeState>;
    return {
      mode: parsed.mode === "dark" ? "dark" : "light",
      accent: typeof parsed.accent === "string" ? parsed.accent : DEFAULT_THEME.accent
    };
  } catch {
    return DEFAULT_THEME;
  }
}

function saveTheme(state: ThemeState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export const useThemeStore = create<ThemeState & ThemeActions>((set, get) => ({
  ...DEFAULT_THEME,
  setMode: (mode: ThemeMode) => {
    set({ mode });
    saveTheme({ ...get(), mode });
  },
  toggleMode: () => {
    const next = get().mode === "light" ? "dark" : "light";
    set({ mode: next });
    saveTheme({ ...get(), mode: next });
  },
  setAccent: (hex: string) => {
    set({ accent: hex });
    saveTheme({ ...get(), accent: hex });
  }
}));

export function initThemeFromStorage() {
  const st = loadTheme();
  useThemeStore.setState(st);
}
