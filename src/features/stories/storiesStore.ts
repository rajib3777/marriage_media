export type UserStory = {
  id: string;
  couple: string;
  location: string;
  year: string;
  img?: string; // optional: user can paste image URL
  title: string;
  story: string;
  createdAt: number;
};

const KEY = "alif_success_stories_v1";

export function loadStories(): UserStory[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const data = JSON.parse(raw) as UserStory[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function saveStories(list: UserStory[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addStory(payload: Omit<UserStory, "id" | "createdAt">): UserStory {
  const next: UserStory = {
    ...payload,
    id: "st_" + Math.random().toString(36).slice(2),
    createdAt: Date.now()
  };
  const current = loadStories();
  const updated = [next, ...current];
  saveStories(updated);
  return next;
}

export function clearStories() {
  localStorage.removeItem(KEY);
}
