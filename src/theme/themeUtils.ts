export function hexToRgbTuple(hex: string): [number, number, number] | null {
  const v = hex.replace("#", "").trim();
  if (![3, 6].includes(v.length)) return null;
  const full = v.length === 3 ? v.split("").map((c) => c + c).join("") : v;
  const n = Number.parseInt(full, 16);
  if (Number.isNaN(n)) return null;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function applyAccentToCssVars(accentHex: string) {
  const rgb = hexToRgbTuple(accentHex);
  if (!rgb) return;
  const root = document.documentElement;
  root.style.setProperty("--accent", `${rgb[0]} ${rgb[1]} ${rgb[2]}`);
  // Accent 2 as a lighter version (simple blend with white)
  const light = rgb.map((c) => Math.round(c + (255 - c) * 0.35));
  root.style.setProperty("--accent-2", `${light[0]} ${light[1]} ${light[2]}`);
  root.style.setProperty("--ring", `${rgb[0]} ${rgb[1]} ${rgb[2]}`);
}
