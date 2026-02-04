import { Seo } from "../seo";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useThemeStore } from "../../../theme/themeStore";
import { toast } from "sonner";

export function SettingsPage() {
  const mode = useThemeStore((s) => s.mode);
  const toggleMode = useThemeStore((s) => s.toggleMode);
  const accent = useThemeStore((s) => s.accent);
  const setAccent = useThemeStore((s) => s.setAccent);

  return (
    <>
      <Seo title="Settings — Alif Marriage Media" />
      <Container className="py-10">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">Theme + appearance controls (persisted).</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-base font-semibold">Mode</div>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">Switch light/dark for the whole app.</p>
            <div className="mt-4 flex items-center gap-3">
              <Button onClick={toggleMode}>{mode === "light" ? "Enable dark" : "Enable light"}</Button>
              <div className="text-sm text-[rgb(var(--muted))]">Current: {mode}</div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-base font-semibold">Accent color</div>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">
              Change primary brand color instantly (CSS vars).
            </p>
            <div className="mt-4 flex items-end gap-3">
              <Input label="Hex" value={accent} onChange={(e) => setAccent(e.target.value)} />
              <input
                aria-label="accent picker"
                type="color"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                className="h-11 w-14 cursor-pointer rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-1"
              />
            </div>
            <div className="mt-4 flex gap-2">
              {["#e11d48", "#7c3aed", "#2563eb", "#16a34a", "#ea580c"].map((c) => (
                <button
                  key={c}
                  onClick={() => setAccent(c)}
                  className="h-9 w-9 rounded-xl border border-[rgb(var(--border))]"
                  style={{ background: c }}
                />
              ))}
              <Button
                variant="secondary"
                onClick={() => {
                  toast.message("Saved automatically.");
                }}
              >
                Done
              </Button>
            </div>
          </Card>
        </div>

        <Card className="mt-6 p-6">
          <div className="text-base font-semibold">Profile settings (placeholder)</div>
          <p className="mt-2 text-sm text-[rgb(var(--muted))]">
            Add sections like contact visibility, privacy, notification preferences, etc.
          </p>
        </Card>
      </Container>
    </>
  );
}
