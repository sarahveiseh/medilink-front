import { useMutation } from "react-query";
import { useFetcher } from "../fetcher/use-fetch";

export const useAddUser = () => {
  const fetcherKey = "/users/add-user";
  const fetchUpdate = useFetcher({
    url: fetcherKey,
    method: "POST",
    useToken: true,
  });
  return useMutation({
    mutationKey: fetcherKey,
    mutationFn: fetchUpdate,
  });
};
