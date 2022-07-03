import { useMutation } from "react-query";
import { useFetcher } from "./../fetcher/use-fetch";

export const useRegisterDoctor = () => {
  const fetcherKey = "/users/register-doctor";
  const fetchRegister = useFetcher({
    url: fetcherKey,
    method: "POST",
  });
  return useMutation({
    mutationKey: fetcherKey,
    mutationFn: fetchRegister,
  });
};
