import { useSocketContext } from "hooks/context/use-socket-context";
import { useCallback, useEffect } from "react";
import { useQueryClient } from "react-query";
import cloneDeep from "lodash/cloneDeep";
export const useListenMessage = () => {
  const socket = useSocketContext();
  const client = useQueryClient();

  const handleAddMessage = useCallback(
    (newMessage) => {
      const queryKey = `/messages/${newMessage?.conversationId}`;
      const clonedData = cloneDeep(client.getQueryData(queryKey));
      clonedData.result.messages = [newMessage, ...clonedData.result.messages];
      client.setQueryData(queryKey, clonedData);
    },

    [client],
  );

  useEffect(() => {
    socket.on("message", handleAddMessage);

    return () => {
      socket.off("message", handleAddMessage);
    };
  }, [handleAddMessage, socket]);

  return null;
};
