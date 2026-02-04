import { mockProfiles, Profile } from "../../mocks/mockProfiles";

export type ProfileSearchParams = Partial<{
  q: string;
  city: string;
  religion: string;
  ageMin: number;
  ageMax: number;
  verifiedOnly: boolean;
}>;

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function fetchProfiles(params: ProfileSearchParams): Promise<Profile[]> {
  await wait(450);
  let res = [...mockProfiles];

  if (params.q) {
    const q = params.q.toLowerCase();
    res = res.filter((p) => p.name.toLowerCase().includes(q) || p.profession.toLowerCase().includes(q));
  }
  if (params.city) res = res.filter((p) => p.city === params.city);
  if (params.religion) res = res.filter((p) => p.religion === params.religion);
  if (typeof params.ageMin === "number") res = res.filter((p) => p.age >= params.ageMin!);
  if (typeof params.ageMax === "number") res = res.filter((p) => p.age <= params.ageMax!);
  if (params.verifiedOnly) res = res.filter((p) => p.verified);

  return res;
}

export async function fetchProfileById(id: string): Promise<Profile | null> {
  await wait(350);
  return mockProfiles.find((p) => p.id === id) ?? null;
}
