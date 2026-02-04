import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";

const items = [
  {
    name: "নুসরাত & রাকিব",
    text: "ভেরিফাইড প্রোফাইল থাকার কারণে আমরা খুব দ্রুত বিশ্বাস করতে পেরেছি। দুই পরিবারের সাথে কথা বলে কয়েক সপ্তাহের মধ্যেই আমাদের বিয়ের সিদ্ধান্ত চূড়ান্ত হয়।"
  },
  {
    name: "ফাহিম & সাদিয়া",
    text: "অ্যাডভান্সড সার্চ ফিল্টার দিয়ে আমরা আমাদের পছন্দ অনুযায়ী প্রোফাইল সহজেই খুঁজে পাই। সময় বাঁচে, বিভ্রান্তি কমে—শেষ পর্যন্ত আলহামদুলিল্লাহ বিয়ে হয়েছে।"
  },
  {
    name: "রিয়া & তানভীর",
    text: "প্রিমিয়াম ফিচার ব্যবহার করে দ্রুত কন্টাক্ট নেওয়া এবং নিরাপদভাবে যোগাযোগ করা সম্ভব হয়েছে। সিরিয়াস প্রপোজাল পাওয়ায় সিদ্ধান্ত নিতে সুবিধা হয়েছে এবং আমাদের বিয়েটা সুন্দরভাবে সম্পন্ন হয়েছে।"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          title="সফল গল্প"
          subtitle="ভেরিফাইড প্রোফাইল, নিরাপদ যোগাযোগ ও স্মার্ট সার্চ—যেভাবে অনেকে জীবনসঙ্গী খুঁজে পেয়েছেন।"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <Card key={t.name} className="p-6">
              <div className="text-sm text-[rgb(var(--muted))]">“{t.text}”</div>
              <div className="mt-4 text-sm font-semibold">{t.name}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
