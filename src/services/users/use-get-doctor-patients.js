import { useQuery } from "react-query";
import { useFetcher } from "../fetcher/use-fetch";

export const useGetDoctorPatients = () => {
  const fetcherKey = "/users/get-doctor-patients";
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
