export type ThemeMode = "light" | "dark";

export type ThemeState = {
  mode: ThemeMode;
  accent: string; // hex
};

export type ThemeActions = {
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  setAccent: (hex: string) => void;
};

export const DEFAULT_THEME: ThemeState = {
  mode: "light",
  accent: "#e11d48"
};
