import { useMutation } from "react-query";
import { useFetcher } from "./../fetcher/use-fetch";

export const useLogin = () => {
  const fetcherKey = "/users/login";
  const fetchLogin = useFetcher({
    url: fetcherKey,
    method: "POST",
  });
  return useMutation({
    mutationKey: fetcherKey,
    mutationFn: fetchLogin,
  });
};
