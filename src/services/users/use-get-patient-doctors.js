import { useQuery } from "react-query";
import { useFetcher } from "../fetcher/use-fetch";

export const useGetPatientDoctors = () => {
  const fetcherKey = "/users/get-patient-doctors";
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
