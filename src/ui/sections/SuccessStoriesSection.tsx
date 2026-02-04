import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";
import { cn } from "../lib/cn";

type Story = {
  couple: string;
  location: string;
  year: string;
  img: string; // e.g. "/assets/stories/s1.jpg"
  title: string;
  story: string; // bigger paragraph
  highlights: string[];
};

const stories: Story[] = [
  {
    couple: "নুসরাত & রাকিব",
    location: "ঢাকা",
    year: "২০২৫",
    img: "/assets/stories/s1.jpg",
    title: "ভেরিফাইড প্রোফাইলেই শুরু, সিদ্ধান্তে ছিল আত্মবিশ্বাস",
    story:
      "আমরা দুজনেই চাইছিলাম অযথা সময় নষ্ট না করে সিরিয়াস ও বিশ্বস্ত প্রস্তাবের মধ্যেই কথা এগোতে। এখানে ভেরিফাইড প্রোফাইল, বেসিক তথ্য ও পারিবারিক ব্যাকগ্রাউন্ড পরিষ্কার থাকায় প্রথম থেকেই একটা আস্থা তৈরি হয়। কিছুদিনের কথাবার্তার পর দুই পরিবার মিলে দেখা করি। আলহামদুলিল্লাহ—কম সময়ে সুন্দরভাবে সিদ্ধান্ত নেওয়া সম্ভব হয়েছে এবং আমাদের বিয়ে সম্পন্ন হয়।",
    highlights: ["ভেরিফাইড প্রোফাইল", "পরিবারের সাথে দ্রুত মিট", "কম সময়ে সিদ্ধান্ত"]
  },
  {
    couple: "সাদিয়া & ফাহিম",
    location: "চট্টগ্রাম",
    year: "২০২৫",
    img: "/assets/stories/s2.jpg",
    title: "অ্যাডভান্সড সার্চ ফিল্টার সময় বাঁচিয়েছে অনেক",
    story:
      "অনেক জায়গায় খোঁজাখুঁজি করতে গিয়ে আমরা বুঝেছি—সঠিক ফিল্টারিং না থাকলে ভালো প্রোফাইল পেতে কষ্ট হয়। এখানে শহর, বয়স, পেশা ও অন্যান্য পছন্দ অনুযায়ী ফিল্টার দিয়ে আমরা আমাদের ম্যাচগুলো দ্রুত short-list করি। এরপর ধাপে ধাপে কথা বলে এবং পরিবারকে যুক্ত করে সিদ্ধান্ত চূড়ান্ত করি। সবচেয়ে ভালো লেগেছে—সবকিছু একটা স্ট্রাকচারড প্রসেসে এগোনো যায়।",
    highlights: ["স্মার্ট ফিল্টারিং", "শর্টলিস্টিং সুবিধা", "স্ট্রাকচারড প্রসেস"]
  },
  {
    couple: "রিয়া & তানভীর",
    location: "সিলেট",
    year: "২০২৪",
    img: "/assets/stories/s3.jpg",
    title: "নিরাপদ যোগাযোগ + প্রাইভেসি কন্ট্রোল ছিল সবচেয়ে বড় সুবিধা",
    story:
      "আমাদের জন্য privacy ছিল সবচেয়ে গুরুত্বপূর্ণ। এখানে কন্টাক্ট তথ্য ডিফল্টভাবে গোপন থাকে এবং ধাপে ধাপে যোগাযোগ এগোনোর অপশন আছে। ফলে অপ্রয়োজনীয় ঝামেলা কমে যায়। নিরাপদে আলোচনা করে আমরা দুজনেই ভবিষ্যৎ পরিকল্পনা নিয়ে ক্লিয়ার হতে পেরেছি। পরিবারও সন্তুষ্ট ছিল কারণ তথ্য যাচাই ও কথাবার্তা সবকিছু নিয়মের মধ্যে হয়েছে।",
    highlights: ["প্রাইভেসি কন্ট্রোল", "নিরাপদ যোগাযোগ", "ভরসাযোগ্য প্রসেস"]
  }
];

// small hook for scroll-in animation
function useInView<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px", ...(opts ?? {}) }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [opts]);

  return { ref, inView };
}

export function SuccessStoriesSection() {
  const list = useMemo(() => stories, []);
  return (
    <section className="relative py-14">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[rgba(var(--accent),0.12)] blur-3xl" />
        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-[rgba(var(--accent),0.08)] blur-3xl" />
      </div>

      <Container className="relative">
        <SectionTitle
          title="বিয়ের সফল গল্প"
          subtitle="সত্যিকারের বিশ্বাস, নিরাপদ যোগাযোগ এবং স্মার্ট ম্যাচিং—যেভাবে অনেকে জীবনসঙ্গী খুঁজে পেয়েছেন।"
        />

        <div className="mt-8 space-y-8">
          {list.map((s, idx) => (
            <StoryRow key={s.couple} story={s} reverse={idx % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StoryRow({ story, reverse }: { story: Story; reverse?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "grid gap-6 md:grid-cols-2 md:items-stretch",
        reverse ? "md:[&>div:first-child]:order-2" : ""
      )}
    >
      {/* Image */}
      <Card
        className={cn(
          "relative overflow-hidden p-0",
          "transition-all duration-700",
          inView
            ? "opacity-100 translate-y-0"
            : reverse
            ? "opacity-0 translate-y-6 md:translate-x-10"
            : "opacity-0 translate-y-6 md:-translate-x-10"
        )}
      >
        <div className="relative h-[260px] md:h-full">
          <img
            src={story.img}
            alt={story.couple}
            className="h-full w-full object-cover"
            onError={(e) => ((e.currentTarget as HTMLImageElement).src = "/assets/hero.png")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-white" />
            সফল বিয়ে • {story.location} • {story.year}
          </div>

          <div className="absolute bottom-0 w-full p-5">
            <div className="text-lg font-semibold text-white">{story.couple}</div>
            <div className="mt-1 text-xs text-white/85">{story.title}</div>
          </div>
        </div>
      </Card>

      {/* Text */}
      <Card
        className={cn(
          "p-7 md:p-8",
          "transition-all duration-700 delay-150",
          inView
            ? "opacity-100 translate-y-0"
            : reverse
            ? "opacity-0 translate-y-6 md:-translate-x-10"
            : "opacity-0 translate-y-6 md:translate-x-10"
        )}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="text-sm text-[rgb(var(--muted))]">
              {story.location} • {story.year}
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{story.title}</h3>
          </div>

          <div className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-1 text-xs text-[rgb(var(--muted))]">
            সফল গল্প
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">
          {story.story}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {story.highlights.map((h) => (
            <div
              key={h}
              className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-3 text-xs font-medium"
            >
              {h}
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-[rgb(var(--muted))]">
          * ডেমো গল্প — চাইলে তুমি রিয়েল কনটেন্ট দিয়ে replace করতে পারবে।
        </div>
      </Card>
    </div>
  );
}
