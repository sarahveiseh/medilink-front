import { useQuery } from "react-query";
import { useFetcher } from "../fetcher/use-fetch";

export const useGetAllPatients = () => {
  const fetcherKey = "/users/get-all-patients";
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
