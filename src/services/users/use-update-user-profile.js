import { useMutation } from "react-query";
import { useFetcher } from "./../fetcher/use-fetch";

export const useUpdateUserProfile = () => {
  const fetcherKey = "/users/profile";
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
