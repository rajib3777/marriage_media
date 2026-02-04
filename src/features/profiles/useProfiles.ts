import { useQuery } from "@tanstack/react-query";
import { fetchProfiles, ProfileSearchParams } from "./profileApi";

export function useProfiles(params: ProfileSearchParams) {
  return useQuery({
    queryKey: ["profiles", params],
    queryFn: () => fetchProfiles(params)
  });
}
