import { useQuery } from "@tanstack/react-query";
import { fetchProfileById } from "./profileApi";

export function useProfileDetails(id: string) {
  return useQuery({
    queryKey: ["profile", id],
    queryFn: () => fetchProfileById(id)
  });
}
