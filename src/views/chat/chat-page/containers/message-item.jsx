import { useUserContext } from "hooks";

export const MessageItem = ({ data }) => {
  const { userState } = useUserContext();

  const userType = userState?.user?.user?.type;
  const isOwn = data?.viewFor === userType;
  return (
    <div
      className={`w-full px-4 flex my-2 ${
        isOwn ? "justify-start" : " justify-end"
      } `}>
      <div
        className={`  p-4 w-8/12 rounded-xl ${
          isOwn
            ? " bg-blue-500 rounded-br-none text-white"
            : "bg-gray-300 rounded-tl-none"
        }`}>
        <p className="text-neutrals-70 text-14 leading-7 whitespace-pre-line truncate break-words">
          {data?.message}
        </p>
        <div className="flex items-center mt-2">
          <p className="text-neutrals-40 text-10 mr-1">{data?.dt}</p>
        </div>
      </div>
    </div>
  );
};
