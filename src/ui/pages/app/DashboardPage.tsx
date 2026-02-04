import { Link } from "react-router-dom";
import { Seo } from "../seo";
import { Container } from "../../components/Container";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { useAuthStore } from "../../../auth/authStore";

export function DashboardPage() {
  const user = useAuthStore((s) => s.user);

  return (
    <>
      <Seo title="Dashboard — Alif Marriage Media" />
      <Container className="py-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">
              Welcome, {user?.name ?? "User"} — this is your private app area.
            </p>
          </div>
          <Link to="/app/settings">
            <Button variant="secondary">Settings</Button>
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <Card className="p-6">
            <div className="text-sm font-semibold">Shortlist</div>
            <div className="mt-2 text-sm text-[rgb(var(--muted))]">Saved profiles (mock)</div>
            <div className="mt-6 text-3xl font-semibold">12</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold">Interests</div>
            <div className="mt-2 text-sm text-[rgb(var(--muted))]">Sent + received (mock)</div>
            <div className="mt-6 text-3xl font-semibold">7</div>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold">Verification</div>
            <div className="mt-2 text-sm text-[rgb(var(--muted))]">Status (mock)</div>
            <div className="mt-6 text-3xl font-semibold">Pending</div>
          </Card>
        </div>

        <Card className="mt-6 p-6">
          <div className="text-base font-semibold">Next steps for client delivery</div>
          <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--muted))]">
            <li>• Hook up auth endpoints (login/register/refresh token)</li>
            <li>• Implement profile CRUD + upload + moderation</li>
            <li>• Payments for packages (Stripe/SSLCOMMERZ)</li>
            <li>• Admin panel + reports + analytics</li>
          </ul>
        </Card>
      </Container>
    </>
  );
}
