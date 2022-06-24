import { useMutation } from "react-query";
import { useFetcher } from "./../fetcher/use-fetch";

export const useDeleteUser = () => {
  const fetcherKey = "/users/delete-user/{id}";
  const fetchDelete = useFetcher({
    url: fetcherKey,
    method: "DELETE",
    replaceParamsInUrl: true,
    useToken: true,
  });
  return useMutation({
    mutationKey: fetcherKey,
    mutationFn: fetchDelete,
  });
};
