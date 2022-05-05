import { useQuery } from "react-query";

import { useFetcher } from "../fetcher/use-fetch";

export const useGetAllMessages = ({ params: { conversationId } }) => {
  const queryKey = `/messages/${conversationId}`;
  const fetch = useFetcher({
    method: "GET",
    url: queryKey,
    useToken: true,
  });
  return useQuery({
    queryFn: () => fetch(),
    queryKey: [queryKey],
  });
};
