import { useJoinUser, useSocketContext } from "hooks";
import { useListenMessage } from "hooks/chat/use-listen-message";
import { useParams } from "react-router-dom";
import { useGetAllMessages } from "services";
import { ChatPageBody } from "../containers/body";
import { ChatPageFooter } from "../containers/footer";
import { ChatPageHeader } from "../containers/header";

export const ChatPageView = () => {
  const socket = useSocketContext();
  const { conversationId } = useParams();

  const { isLoading } = useGetAllMessages({ params: { conversationId } });

  useJoinUser();
  useListenMessage();

  const send = (message) => {
    if (!message) return;
    socket.emit("send-message", {
      conversationId,
      message,
    });
  };

  if (isLoading) return null;
  return (
    <div className="flex flex-col h-screen">
      <ChatPageHeader conversationId={conversationId} />
      <ChatPageBody conversationId={conversationId} />
      <ChatPageFooter onSend={(_m) => send(_m)} />
    </div>
  );
};
