import { Link } from "react-router-dom";
import { Profile } from "../../mocks/mockProfiles";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Link to={`/profiles/${profile.id}`}>
      <Card className="group overflow-hidden">
        <div className="relative h-36">
          <img src={profile.photoUrl} alt={profile.name} className="h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          <div className="absolute left-4 top-4">
            {profile.verified ? <Badge tone="accent">Verified</Badge> : <Badge>Unverified</Badge>}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="text-base font-semibold">{profile.name}</div>
            <div className="text-sm text-[rgb(var(--muted))]">{profile.age}</div>
          </div>
          <div className="mt-1 text-sm text-[rgb(var(--muted))]">{profile.profession}</div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-[rgb(var(--muted))]">
            <span className="rounded-full border border-[rgb(var(--border))] px-2 py-1">{profile.city}</span>
            <span className="rounded-full border border-[rgb(var(--border))] px-2 py-1">{profile.religion}</span>
            <span className="rounded-full border border-[rgb(var(--border))] px-2 py-1">{profile.education}</span>
          </div>
          <div className="mt-4 text-xs text-[rgb(var(--accent))]">View details →</div>
        </div>
      </Card>
    </Link>
  );
}
