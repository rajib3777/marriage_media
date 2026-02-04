import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Seo } from "./seo";
import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";
import { useProfiles } from "../../features/profiles/useProfiles";
import { ProfileCard } from "../shared/ProfileCard";

const cities = ["", "Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna", "Barishal", "Rangpur"];
const religions = ["", "Islam", "Hinduism", "Christianity", "Buddhism"];

export function SearchPage() {
  const [sp, setSp] = useSearchParams();
  const navigate = useNavigate();

  // ✅ 1-minute gate
  const [showGate, setShowGate] = useState(false);

  useEffect(() => {
    // if you want it EVERY time, remove this sessionStorage block
    const seen = sessionStorage.getItem("search_gate_seen_v1");
    if (seen === "1") return;

    const t = window.setTimeout(() => {
      sessionStorage.setItem("search_gate_seen_v1", "1");
      setShowGate(true);
    }, 20_000);

    return () => window.clearTimeout(t);
  }, []);

  const params = useMemo(() => {
    const q = sp.get("q") ?? "";
    const city = sp.get("city") ?? "";
    const religion = sp.get("religion") ?? "";
    const ageMin = sp.get("ageMin") ? Number(sp.get("ageMin")) : undefined;
    const ageMax = sp.get("ageMax") ? Number(sp.get("ageMax")) : undefined;
    const verifiedOnly = sp.get("verified") === "1";
    return { q, city, religion, ageMin, ageMax, verifiedOnly };
  }, [sp]);

  const { data, isLoading } = useProfiles(params);

  return (
    <>
      <Seo title="Advanced Search — Alif Marriage Media" />

      {/* ✅ Gate Modal */}
      {showGate ? (
        <div className="fixed inset-0 z-[60]">
          {/* overlay */}
          <div className="absolute inset-0 bg-black/45 backdrop-blur-md" />

          {/* modal */}
          <div className="relative mx-auto flex h-full max-w-2xl items-center px-4">
            <div className="w-full rounded-2xl border border-white/15 bg-[rgb(var(--card))]/95 p-7 shadow-soft backdrop-blur">
              <div className="text-2xl font-semibold tracking-tight">
                আরও রেজাল্ট দেখতে চান?
              </div>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                নিরাপদ ও ভেরিফাইড প্রোফাইল দেখতে এবং কন্টাক্ট/চ্যাট সুবিধা পেতে এখনই একটি একাউন্ট তৈরি করুন।
                মাত্র ১ মিনিটেই রেজিস্ট্রেশন সম্পন্ন হবে।
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Button
                  className="w-full"
                  onClick={() => navigate("/register")}
                >
                  এখনই Sign up করুন
                </Button>

                <Button
                  className="w-full"
                  variant="secondary"
                  onClick={() => navigate("/register")}
                >
                  ফ্রি একাউন্ট খুলুন
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* ✅ blur + lock background when gate shown */}
      <div className={showGate ? "pointer-events-none blur-[2px] select-none" : ""}>
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold">Advanced Search</h1>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">
                URL-driven filters + cached queries. Perfect for production scaling.
              </p>
            </div>
            <Link to="/profiles">
              <Button variant="secondary">Browse all</Button>
            </Link>
          </div>

          <Card className="mt-6 p-6">
            <div className="grid gap-4 md:grid-cols-5">
              <Input
                label="Keyword"
                placeholder="Name or profession..."
                value={params.q}
                onChange={(e) => {
                  sp.set("q", e.target.value);
                  setSp(sp, { replace: true });
                }}
              />
              <Select
                label="City"
                value={params.city}
                onChange={(e) => {
                  const v = e.target.value;
                  v ? sp.set("city", v) : sp.delete("city");
                  setSp(sp, { replace: true });
                }}
              >
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c || "Any"}
                  </option>
                ))}
              </Select>
              <Select
                label="Religion"
                value={params.religion}
                onChange={(e) => {
                  const v = e.target.value;
                  v ? sp.set("religion", v) : sp.delete("religion");
                  setSp(sp, { replace: true });
                }}
              >
                {religions.map((r) => (
                  <option key={r} value={r}>
                    {r || "Any"}
                  </option>
                ))}
              </Select>
              <Input
                label="Age Min"
                type="number"
                min={18}
                value={params.ageMin ?? ""}
                onChange={(e) => {
                  const v = e.target.value;
                  v ? sp.set("ageMin", v) : sp.delete("ageMin");
                  setSp(sp, { replace: true });
                }}
              />
              <Input
                label="Age Max"
                type="number"
                min={18}
                value={params.ageMax ?? ""}
                onChange={(e) => {
                  const v = e.target.value;
                  v ? sp.set("ageMax", v) : sp.delete("ageMax");
                  setSp(sp, { replace: true });
                }}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <label className="inline-flex cursor-pointer items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={params.verifiedOnly}
                  onChange={(e) => {
                    e.target.checked ? sp.set("verified", "1") : sp.delete("verified");
                    setSp(sp, { replace: true });
                  }}
                />
                Verified only
              </label>
              <div className="ml-auto flex items-center gap-2">
                <Badge tone="accent">{data?.length ?? 0} results</Badge>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSp(new URLSearchParams(), { replace: true });
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 9 }).map((_, i) => <Card key={i} className="h-[260px] animate-pulse p-6" />)
              : (data ?? []).slice(0, 24).map((p) => <ProfileCard key={p.id} profile={p} />)}
          </div>

          {!isLoading && (data?.length ?? 0) === 0 ? (
            <div className="mt-10 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 text-center text-sm text-[rgb(var(--muted))]">
              No results. Try changing filters.
            </div>
          ) : null}
        </Container>
      </div>
    </>
  );
}
