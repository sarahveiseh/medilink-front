import { useMutation } from "react-query";
import { useFetcher } from "./../fetcher/use-fetch";

export const useRegisterPatient = () => {
  const fetcherKey = "/users/register-patient";
  const fetchRegister = useFetcher({
    url: fetcherKey,
    method: "POST",
  });
  return useMutation({
    mutationKey: fetcherKey,
    mutationFn: fetchRegister,
  });
};
