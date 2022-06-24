import { useMutation } from "react-query";
import { useFetcher } from "./../fetcher/use-fetch";

export const useUpdateClientInformation = () => {
  const fetcherKey = "/users/profile/client-info";
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
