import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";

const items = [
  {
    title: "Profile verification",
    points: [
      "ফোন ও ইমেইল ভেরিফিকেশন",
      "ছবি যাচাই (রিভিউ) সিস্টেম",
      "রিপোর্ট ও ব্লক করার সুবিধা"
    ]
  },
  {
    title: "Privacy controls",
    points: [
      "ডিফল্টভাবে কন্টাক্ট তথ্য গোপন থাকবে",
      "প্রোফাইল ভিজিবিলিটি কাস্টমাইজ করার অপশন",
      "নিরাপদ ও নিয়ন্ত্রিত অ্যাক্সেস সিস্টেম"
    ]
  },
  {
    title: "Match quality",
    points: [
      "পছন্দ অনুযায়ী স্মার্ট ম্যাচ র‍্যাংকিং",
      "লোকেশন ভিত্তিক (নিয়ারবাই) সাজেশন",
      "শর্টলিস্ট ও নোট রাখার সুবিধা"
    ]
  }
];


export function TrustSection() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          title="Safe, verified, and built for scale"
          subtitle="Clear product pillars, reusable components, and a clean information architecture."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-semibold">{it.title}</div>
                <Badge tone="accent">Core</Badge>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--muted))]">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[rgb(var(--accent))]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
