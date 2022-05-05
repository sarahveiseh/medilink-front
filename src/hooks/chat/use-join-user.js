import { useEffect } from "react";

import { useSocketContext, useUserContext } from "hooks";
import { useParams } from "react-router-dom";

export const useJoinUser = () => {
  const socket = useSocketContext();
  const { conversationId } = useParams();

  const { userState } = useUserContext();

  //join user in socket
  useEffect(() => {
    socket.emit("user-join-conversation", {
      conversationId,
      userId: userState?.user?.user?._id,
    });
  }, [conversationId, socket, userState?.user?.user?._id]);
};
