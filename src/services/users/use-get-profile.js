import { useQuery } from "react-query";
import { useFetcher } from "../fetcher/use-fetch";

export const useGetProfile = () => {
  const fetcherKey = "/users/profile";
  const fetchData = useFetcher({
    url: fetcherKey,
    method: "GET",
    useToken: true,
  });
  return useQuery({
    queryFn: () => fetchData(),
    queryKey: [fetcherKey],
  });
};
