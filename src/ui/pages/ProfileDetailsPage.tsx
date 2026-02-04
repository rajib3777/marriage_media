import { Link, useParams } from "react-router-dom";
import { Seo } from "./seo";
import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { useProfileDetails } from "../../features/profiles/useProfileDetails";

export function ProfileDetailsPage() {
  const { id } = useParams();
  const { data, isLoading } = useProfileDetails(id!);

  return (
    <>
      <Seo title="Profile Details — Alif Marriage Media" />
      <Container className="py-10">
        <div className="flex items-center justify-between gap-4">
          <Link to="/profiles" className="text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]">
            ← Back to profiles
          </Link>
          <Link to="/packages">
            <Button variant="secondary">Unlock contact (Premium)</Button>
          </Link>
        </div>

        {isLoading ? (
          <Card className="mt-6 h-[420px] animate-pulse p-6" />
        ) : !data ? (
          <Card className="mt-6 p-8 text-center text-sm text-[rgb(var(--muted))]">Profile not found.</Card>
        ) : (
          <div className="mt-6 grid gap-6 md:grid-cols-[360px_1fr]">
            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img src={data.photoUrl} alt={data.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute left-5 top-5">
                  {data.verified ? <Badge tone="accent">Verified</Badge> : <Badge>Unverified</Badge>}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xl font-semibold">{data.name}</div>
                <div className="mt-1 text-sm text-[rgb(var(--muted))]">
                  {data.age} • {data.height} • {data.city}
                </div>
                <div className="mt-4 grid gap-2 text-sm text-[rgb(var(--muted))]">
                  <div><span className="font-medium text-[rgb(var(--fg))]">Religion:</span> {data.religion}</div>
                  <div><span className="font-medium text-[rgb(var(--fg))]">Education:</span> {data.education}</div>
                  <div><span className="font-medium text-[rgb(var(--fg))]">Profession:</span> {data.profession}</div>
                  <div><span className="font-medium text-[rgb(var(--fg))]">Marital Status:</span> {data.maritalStatus}</div>
                </div>
              </div>
            </Card>

            <div className="grid gap-6">
              <Card className="p-6">
                <div className="text-base font-semibold">About</div>
                <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                  This section is a placeholder to plug in a full profile bio, family details, lifestyle, and preferences.
                  In production, load this from your backend.
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-base font-semibold">Preferences</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <Pref k="Preferred city" v="Any in Bangladesh" />
                  <Pref k="Age range" v="23 - 30" />
                  <Pref k="Education" v="Graduate+" />
                  <Pref k="Verified" v="Preferred" />
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-base font-semibold">Actions</div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button>Send interest</Button>
                  <Button variant="secondary">Shortlist</Button>
                  <Button variant="outline">Report</Button>
                </div>
                <div className="mt-3 text-xs text-[rgb(var(--muted))]">
                  Actions are mocked. Hook them to real APIs later.
                </div>
              </Card>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

function Pref({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
      <div className="text-xs text-[rgb(var(--muted))]">{k}</div>
      <div className="mt-1 text-sm font-medium">{v}</div>
    </div>
  );
}
