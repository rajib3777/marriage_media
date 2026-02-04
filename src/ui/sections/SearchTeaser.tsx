import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function SearchTeaser() {
  return (
    <section className="py-14">
      <Container>
        <Card className="overflow-hidden">
          <div className="grid gap-6 p-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-2xl font-semibold tracking-tight">Advanced Search that converts</div>
              <p className="mt-3 text-sm text-[rgb(var(--muted))]">
                শহর, ধর্ম, বয়স এবং ভেরিফাইড প্রোফাইল অনুযায়ী ফিল্টার করে সহজেই সঠিক ম্যাচ খুঁজুন—দ্রুত ও নির্ভরযোগ্য সার্চ এক্সপেরিয়েন্স।
              </p>

              <div className="mt-6 flex gap-3">
                <Link to="/search">
                  <Button>Try search</Button>
                </Link>
                <Link to="/profiles">
                  <Button variant="secondary">Browse profiles</Button>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-5">
              <div className="text-sm font-semibold">Example filters</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Chip label="City: Dhaka" />
                <Chip label="Religion: Islam" />
                <Chip label="Age: 23-30" />
                <Chip label="Verified only" />
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-3 py-2 text-sm">
      {label}
    </div>
  );
}
