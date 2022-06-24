import { useQuery } from "react-query";
import { useFetcher } from "../fetcher/use-fetch";

export const useGetAllDoctors = () => {
  const fetcherKey = "/users/get-all-doctors";
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
