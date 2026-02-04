import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function CtaSection() {
  return (
    <section className="py-14">
      <Container>
        <Card className="p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="text-2xl font-semibold tracking-tight">Ready to ship a client-grade Marriage Media UI?</div>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                This project includes routing, auth shell, theme system, mock APIs, and reusable UI primitives.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/register"><Button size="lg">Get started</Button></Link>
              <Link to="/packages"><Button size="lg" variant="secondary">View packages</Button></Link>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
