import { useEffect, useMemo, useState } from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { toast } from "sonner";
import { addStory, loadStories, UserStory } from "../../features/stories/storiesStore";

const fallbackImg = "/assets/hero.png";

export function PostStorySection() {
  const [stories, setStories] = useState<UserStory[]>([]);
  const [loading, setLoading] = useState(false);

  // form state
  const [couple, setCouple] = useState("");
  const [location, setLocation] = useState("");
  const [year, setYear] = useState("২০২৫");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  useEffect(() => {
    setStories(loadStories());
  }, []);

  const canSubmit = useMemo(() => {
    return couple.trim().length >= 3 && title.trim().length >= 6 && story.trim().length >= 80;
  }, [couple, title, story]);

  async function onSubmit() {
    if (!canSubmit) {
      toast.error("অনুগ্রহ করে নাম/টাইটেল এবং কমপক্ষে ৮০ অক্ষরের গল্প লিখুন।");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 350));

    const created = addStory({
      couple: couple.trim(),
      location: location.trim() || "বাংলাদেশ",
      year: year.trim() || "২০২৫",
      img: img.trim() || undefined,
      title: title.trim(),
      story: story.trim()
    });

    setStories((prev) => [created, ...prev]);

    // reset
    setCouple("");
    setLocation("");
    setYear("২০২৫");
    setImg("");
    setTitle("");
    setStory("");

    setLoading(false);
    toast.success("আপনার গল্প পোস্ট হয়েছে ");
  }

  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          title="আপনার সফল বিয়ের গল্প পোস্ট করুন"
          subtitle="ফর্ম পূরণ করে সাবমিট করুন—গল্পটি সাথে সাথে এখানে দেখাবে।"
        />

        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          {/* Form */}
          <Card className="p-7 md:p-8">
            <div className="text-base font-semibold">গল্প লিখুন</div>
            <div className="mt-4 grid gap-4">
              <Input
                label="দম্পতির নাম (যেমন: নুসরাত & রাকিব)"
                placeholder="নাম লিখুন"
                value={couple}
                onChange={(e) => setCouple(e.target.value)}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="এলাকা/শহর"
                  placeholder="ঢাকা"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Input
                  label="বছর"
                  placeholder="২০২৫"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>

              <Input
                label="ছবির লিংক (ঐচ্ছিক)"
                placeholder="https://... (না দিলে ডিফল্ট ইমেজ দেখাবে)"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />

              <Input
                label="গল্পের শিরোনাম"
                placeholder="এক লাইনের সুন্দর টাইটেল"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <label className="block">
                <div className="mb-1 text-sm text-[rgb(var(--muted))]">গল্প (কমপক্ষে ৮০ অক্ষর)</div>
                <textarea
                  className="min-h-40 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-3 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]"
                  placeholder="আপনার অভিজ্ঞতা লিখুন—কিভাবে খুঁজে পেলেন, কী সুবিধা পেয়েছেন, কত সময় লেগেছে ইত্যাদি…"
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                />
                <div className="mt-1 text-xs text-[rgb(var(--muted))]">
                  {story.trim().length} / 80 (ন্যূনতম)
                </div>
              </label>

              <Button
                className="w-full"
                isLoading={loading}
                onClick={onSubmit}
                disabled={!canSubmit || loading}
              >
                গল্প পোস্ট করুন
              </Button>

              <div className="text-xs text-[rgb(var(--muted))]">
                * পরে backend API connect করলে storiesStore.ts replace করলেই হবে।
              </div>
            </div>
          </Card>

          {/* Live feed */}
          <Card className="p-7 md:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-base font-semibold">পোস্ট করা গল্পগুলো</div>
                <div className="mt-1 text-sm text-[rgb(var(--muted))]">
                  নতুন পোস্ট উপরে দেখাবে।
                </div>
              </div>
              <div className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs text-[rgb(var(--muted))]">
                মোট: {stories.length}
              </div>
            </div>

            {stories.length > 6 ? (
              <div className="mt-4 text-center text-xs text-[rgb(var(--muted))]">
                
              </div>
            ) : null}
          </Card>
        </div>
      </Container>
    </section>
  );
}

function StoryItem({ s }: { s: UserStory }) {
  const img = s.img?.startsWith("http") || s.img?.startsWith("/") ? s.img : fallbackImg;

  return (
    <div className="grid gap-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4 sm:grid-cols-[120px_1fr]">
      <div className="relative h-24 overflow-hidden rounded-xl border border-[rgb(var(--border))]">
        <img
          src={img}
          alt={s.couple}
          className="h-full w-full object-cover"
          onError={(e) => ((e.currentTarget as HTMLImageElement).src = fallbackImg)}
        />
      </div>

      <div>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="text-sm font-semibold">{s.couple}</div>
          <div className="text-xs text-[rgb(var(--muted))]">{s.location} • {s.year}</div>
        </div>
        <div className="mt-1 text-sm">{s.title}</div>
        <div className="mt-2 text-sm text-[rgb(var(--muted))] line-clamp-3">
          {s.story}
        </div>
      </div>
    </div>
  );
}
