export type Profile = {
  id: string;
  name: string;
  age: number;
  height: string;
  religion: string;
  city: string;
  education: string;
  profession: string;
  maritalStatus: string;
  photoUrl: string;
  verified: boolean;
};

const heroFallback = "/assets/hero.png";

const cities = ["Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna", "Barishal", "Rangpur"];
const religions = ["Islam", "Hinduism", "Christianity", "Buddhism"];
const educations = ["BSc", "MSc", "MBBS", "BA", "MBA", "PhD"];
const professions = ["Engineer", "Doctor", "Teacher", "Business", "Designer", "Banker", "Lawyer"];

function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const mockProfiles: Profile[] = Array.from({ length: 64 }).map((_, idx) => ({
  id: String(idx + 1),
  name: idx % 2 === 0 ? `Ayesha ${idx + 1}` : `Rahim ${idx + 1}`,
  age: 21 + (idx % 12),
  height: `${5 + (idx % 2)}'${2 + (idx % 9)}"`,
  religion: pick(religions),
  city: pick(cities),
  education: pick(educations),
  profession: pick(professions),
  maritalStatus: idx % 3 === 0 ? "Never Married" : idx % 3 === 1 ? "Divorced" : "Widowed",
  photoUrl: heroFallback,
  verified: idx % 4 !== 0
}));
