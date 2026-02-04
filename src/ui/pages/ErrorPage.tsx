import { Link, useRouteError } from "react-router-dom";
import { Container } from "../components/Container";
import { Button } from "../components/Button";

export function ErrorPage() {
  const err: any = useRouteError();
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-xl rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 shadow-soft">
        <div className="text-xl font-semibold">Something went wrong</div>
        <div className="mt-2 text-sm text-[rgb(var(--muted))]">
          {err?.statusText || err?.message || "Unknown error"}
        </div>
        <div className="mt-6 flex gap-3">
          <Link to="/"><Button>Go Home</Button></Link>
          <Link to="/contact"><Button variant="secondary">Contact support</Button></Link>
        </div>
      </div>
    </Container>
  );
}
