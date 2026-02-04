import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";
import { cn } from "../lib/cn";

type SuccessCouple = {
  name: string;
  city?: string;
  date?: string;
  img: string; // e.g. "/assets/success/c1.jpg"
};

const couples: SuccessCouple[] = [
  { name: "নুসরাত & রাকিব", city: "ঢাকা", date: "২০২৫", img: "/assets/success/c1.jpg" },
  { name: "সাদিয়া & ফাহিম", city: "চট্টগ্রাম", date: "২০২৫", img: "/assets/success/c2.jpg" },
  { name: "রিয়া & তানভীর", city: "সিলেট", date: "২০২৪", img: "/assets/success/c3.jpg" },
  { name: "ইশতিয়াক & মিম", city: "রাজশাহী", date: "২০২৪", img: "/assets/success/c4.jpg" },
  { name: "আরিফ & তুলি", city: "খুলনা", date: "২০২৫", img: "/assets/success/c5.jpg" },
  { name: "নাবিলা & সাইফ", city: "ঢাকা", date: "২০২৪", img: "/assets/success/c6.jpg" }
];

// helper: duplicate list for seamless loop
const loop = <T,>(arr: T[]) => [...arr, ...arr, ...arr];

export function SuccessGallerySection() {
  const rowA = loop(couples);
  const rowB = loop([...couples].reverse());

  return (
    <section className="relative overflow-hidden py-14">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[rgba(var(--accent),0.16)] blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-[rgba(var(--accent),0.10)] blur-3xl" />
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        @keyframes floaty {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .marquee {
          will-change: transform;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .pause-on-hover:hover .marquee {
          animation-play-state: paused;
        }
      `}</style>

      <Container>
        <SectionTitle
          title="সফল বিয়ের গ্যালারি"
          subtitle="এখানে আমাদের প্ল্যাটফর্ম থেকে সফলভাবে বিয়ে হওয়া দম্পতিদের কিছু স্মরণীয় মুহূর্ত।"
        />

        {/* Gallery wrapper */}
        <Card className="relative overflow-hidden p-6 md:p-8">
          {/* top gradient fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[rgb(var(--card))] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[rgb(var(--card))] to-transparent" />

          <div className="space-y-6 pause-on-hover">
            {/* Row A */}
            <div className="overflow-hidden">
              <div
                className="marquee flex gap-4"
                style={{ animationName: "marqueeLeft", animationDuration: "28s" }}
              >
                {rowA.map((c, idx) => (
                  <GalleryCard key={`${c.name}-a-${idx}`} c={c} />
                ))}
              </div>
            </div>

            {/* Row B (reverse) */}
            <div className="overflow-hidden">
              <div
                className="marquee flex gap-4"
                style={{ animationName: "marqueeRight", animationDuration: "34s" }}
              >
                {rowB.map((c, idx) => (
                  <GalleryCard key={`${c.name}-b-${idx}`} c={c} />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

function GalleryCard({ c }: { c: SuccessCouple }) {
  return (
    <div
      className={cn(
        "group relative w-[220px] flex-none overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] shadow-soft",
        "transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03]"
      )}
      style={{ animation: "floaty 4.2s ease-in-out infinite" }}
    >
      <div className="relative h-[150px] overflow-hidden">
        <img
          src={c.img}
          alt={c.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
          onError={(e) => {
            // fallback if image missing
            (e.currentTarget as HTMLImageElement).src = "/assets/hero.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-90" />
        <div className="absolute left-3 top-3 rounded-full bg-white/15 px-3 py-1 text-[11px] text-white backdrop-blur">
          সফল বিয়ে
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm font-semibold">{c.name}</div>
        <div className="mt-1 flex items-center gap-2 text-xs text-[rgb(var(--muted))]">
          {c.city ? <span className="rounded-full border border-[rgb(var(--border))] px-2 py-0.5">{c.city}</span> : null}
          {c.date ? <span className="rounded-full border border-[rgb(var(--border))] px-2 py-0.5">{c.date}</span> : null}
        </div>

        <div className="mt-3 text-xs text-[rgb(var(--accent))]">
          গল্প দেখুন →
        </div>
      </div>
    </div>
  );
}
