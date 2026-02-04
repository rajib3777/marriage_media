import { Seo } from "./seo";
import { Container } from "../components/Container";
import { useProfiles } from "../../features/profiles/useProfiles";
import { ProfileCard } from "../shared/ProfileCard";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export function ProfilesPage() {
  const { data, isLoading } = useProfiles({});

  return (
    <>
      <Seo title="Profiles — Alif Marriage Media" />
      <Container className="py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Browse Profiles</h1>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">A scalable profile listing page.</p>
          </div>
          <Link to="/search"><Button variant="secondary">Use filters</Button></Link>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 9 }).map((_, i) => <Card key={i} className="h-[260px] animate-pulse p-6" />)
            : (data ?? []).map((p) => <ProfileCard key={p.id} profile={p} />)}
        </div>
      </Container>
    </>
  );
}
