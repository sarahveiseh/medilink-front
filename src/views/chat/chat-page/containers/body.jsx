import { useGetAllMessages } from "services";
import { MessageItem } from "./message-item";

export const ChatPageBody = ({ conversationId }) => {
  const { data } = useGetAllMessages({ params: { conversationId } });
  if (!Array.isArray(data?.result?.messages)) return null;
  return (
    <div className="overflow-y-scroll flex flex-1 flex-col-reverse  bg-gray-100">
      {data?.result?.messages?.map((_item) => (
        <MessageItem data={_item} key={_item?._id} />
      ))}
    </div>
  );
};
