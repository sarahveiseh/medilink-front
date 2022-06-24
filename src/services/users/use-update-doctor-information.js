import { useMutation } from "react-query";
import { useFetcher } from "../fetcher/use-fetch";

export const useUpdateDoctorInformation = () => {
  const fetcherKey = "/users/profile/doctor-info";
  const fetchUpdate = useFetcher({
    url: fetcherKey,
    method: "PATCH",
    useToken: true,
  });
  return useMutation({
    mutationKey: fetcherKey,
    mutationFn: fetchUpdate,
  });
};
