import { Seo } from "./seo";
import { Container } from "../components/Container";
import { Card } from "../components/Card";

export function AboutPage() {
  return (
    <>
      <Seo title="About — Alif Marriage Media" />
      <Container className="py-10">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">
          This is a frontend foundation built for a large-scale Marriage Media platform.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card className="p-6">
            <div className="text-base font-semibold">Mission</div>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">
              Build a safe, privacy-first matchmaking experience with verification and great UX.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-base font-semibold">Tech stack</div>
            <ul className="mt-2 space-y-2 text-sm text-[rgb(var(--muted))]">
              <li>React + TypeScript + Vite</li>
              <li>Tailwind + CSS variables for theming</li>
              <li>TanStack Query + Zustand</li>
              <li>React Hook Form + Zod validation</li>
            </ul>
          </Card>
        </div>
      </Container>
    </>
  );
}
