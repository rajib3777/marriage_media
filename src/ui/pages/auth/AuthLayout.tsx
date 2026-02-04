import { Link } from "react-router-dom";
import { Container } from "../../components/Container";

export function AuthLayout({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <Container className="py-12">
      <div className="mx-auto grid max-w-4xl overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-soft md:grid-cols-2">
        <div className="relative hidden md:block">
          <img src="/assets/hero.png" alt="hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <div className="text-lg font-semibold">Alif Marriage Media</div>
            <div className="mt-2 text-sm text-white/85">
              Secure login, clean onboarding, and theme personalization built in.
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-2xl font-semibold">{title}</div>
              {subtitle ? <div className="mt-1 text-sm text-[rgb(var(--muted))]">{subtitle}</div> : null}
            </div>
            <Link to="/" className="text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]">
              Home
            </Link>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </Container>
  );
}
