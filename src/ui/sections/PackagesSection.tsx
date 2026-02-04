import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const perks = [
  "প্রোফাইল সার্চ ও ফিল্টার",
  "শর্টলিস্ট ও ইন্টারেস্ট পাঠানো",
  "ফটো অ্যালবাম এক্সেস",
  "চ্যাট ও মেসেজিং সুবিধা",
  "পছন্দের সদস্যের কন্টাক্ট দেখা",
  "প্রায়োরিটি কাস্টমার সাপোর্ট",
  "প্রোফাইল বুস্ট (আরও বেশি রিচ)"
];

export function PackagesSection() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          title="প্রিমিয়াম প্যাকেজ"
          subtitle="একটাই প্যাকেজ — সব দরকারি ফিচার একসাথে। সিরিয়াস ম্যাচমেকিং-এর জন্য পারফেক্ট।"
        />

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-stretch">
          {/* Left: Premium Card */}
          <Card className="relative overflow-hidden border-0">
            {/* background */}
            <div className="absolute inset-0 bg-[rgb(var(--accent))]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.55),transparent_45%),radial-gradient(circle_at_90%_30%,rgba(255,255,255,0.35),transparent_40%)]" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

            <div className="relative p-8 md:p-10 text-white">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    প্রিমিয়াম এক্সেস • ভেরিফাইড সুবিধা
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight">PAID</h3>

                  <p className="mt-2 max-w-xl text-sm text-white/85">
                    ভেরিফাইড প্রোফাইল, নিরাপদ যোগাযোগ এবং কন্টাক্ট এক্সেস—সবকিছু এক প্যাকেজে।
                    দ্রুত সিদ্ধান্ত নিন, নিশ্চিন্ত থাকুন।
                  </p>
                </div>

                <div className="rounded-2xl bg-white/12 px-5 py-4 backdrop-blur">
                  <div className="text-xs text-white/80">মূল্য (মাসিক)</div>
                  <div className="mt-1 text-3xl font-semibold">৳ 15000</div>
                  <div className="mt-1 text-xs text-white/80">সব ফিচার আনলক</div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {perks.map((x) => (
                  <Perk key={x} text={x} />
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* IMPORTANT: wrap Button with Link */}
                <Link to="/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-white !text-[rgb(var(--accent))] hover:opacity-95"
                    variant="secondary"
                  >
                    এখনই রেজিস্ট্রেশন করুন
                  </Button>
                </Link>

                <Link to="/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full border border-white/30 bg-transparent !text-white hover:bg-white/10"
                    variant="outline"
                  >
                    ফ্রি একাউন্ট খুলুন
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Right: Feature Summary / Trust Box */}
          <Card className="p-7 md:p-8">
            <div className="text-sm font-semibold">কেন প্রিমিয়াম নেবেন?</div>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">
              সিরিয়াসলি জীবনসঙ্গী খুঁজতে চাইলে কন্টাক্ট দেখা, চ্যাট, বুস্ট এবং প্রায়োরিটি সাপোর্ট খুব দরকার।
            </p>

            <div className="mt-6 grid gap-3">
              <MiniStat k="কন্টাক্ট এক্সেস" v="প্রিমিয়াম" />
              <MiniStat k="চ্যাট সিস্টেম" v="চালু" />
              <MiniStat k="প্রোফাইল বুস্ট" v="উন্নত" />
              <MiniStat k="সাপোর্ট" v="প্রায়োরিটি" />
            </div>

            <div className="mt-6 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
              <div className="text-xs text-[rgb(var(--muted))]">টিপস</div>
              <div className="mt-1 text-sm">
                প্রোফাইল ১০০% সম্পূর্ণ + ছবি আপলোড করলে ম্যাচ পাওয়ার সম্ভাবনা অনেক বেড়ে যায়।
              </div>
            </div>

            {/* Right CTA */}
            <Link to="/register">
              <Button className="mt-6 w-full" variant="primary">
                রেজিস্ট্রেশন করে শুরু করুন
              </Button>
            </Link>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function Perk({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-[rgb(var(--accent))]">
        ✓
      </span>
      <span className="text-sm text-white/90">{text}</span>
    </div>
  );
}

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
      <div className="text-sm text-[rgb(var(--muted))]">{k}</div>
      <div className="text-sm font-semibold">{v}</div>
    </div>
  );
}
