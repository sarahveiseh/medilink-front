import { useGetAllMessages } from "services";

export const ChatPageHeader = ({ conversationId }) => {
  const { data } = useGetAllMessages({ params: { conversationId } });

  const { firstName = "", lastName = "" } = data?.result?.chatWith;
  return (
    <div className="p-4">
      <p>
        گفتگو با {firstName} {lastName}
      </p>
    </div>
  );
};
