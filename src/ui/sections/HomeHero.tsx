import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/hero.png"
          alt="Wedding"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <Container className="relative py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent-2))]" />
              Verified profiles • Secure messaging • Premium packages
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Find your perfect match — with trust & privacy
            </h1>
            <p className="mt-4 text-base text-white/85">
              জীবনসঙ্গী খোঁজা শুধু সার্চ নয়—এটা বিশ্বাসের যাত্রা। নিরাপদ প্ল্যাটফর্ম, ভেরিফাইড পরিচয় এবং স্মার্ট ম্যাচিং দিয়ে আমরা করি আপনার সিদ্ধান্তকে সহজ ও নিশ্চিন্ত।
            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/search">
                <Button size="lg">Start searching</Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="secondary">
                  Create profile
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat k="64+" v="Profiles" />
              <Stat k="4.8★" v="Trust score" />
              <Stat k="24/7" v="Support" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur mt-64 mr-16 ml-16">
            <div className="grid gap-3 sm:grid-cols-2">
              <MiniCard title="Advanced Search" desc="Filter by city, religion, age & verified profiles." />
              <MiniCard title="Verified Profiles" desc="Badges & checks to reduce fraud risk." />
              <MiniCard title="Premium Access" desc="Unlock contact visibility & priority." />
              <MiniCard title="Private App Area" desc="Dashboard, shortlist, settings, and more." />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl bg-white/10 p-3 text-white backdrop-blur">
      <div className="text-lg font-semibold">{k}</div>
      <div className="text-xs text-white/80">{v}</div>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl bg-white/10 p-4 text-white">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-xs text-white/80">{desc}</div>
    </div>
  );
}
