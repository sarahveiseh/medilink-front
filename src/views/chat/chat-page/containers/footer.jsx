import { ICSendMessage } from "icons/send-message";
import { useState } from "react";

export const ChatPageFooter = ({ onSend = () => {} }) => {
  const [message, setMessage] = useState("");
  return (
    <div className="h-20  border-t flex p-2 items-center  ">
      <div className="w-10/12">
        <textarea
          value={message}
          placeholder="پیام خود را بنویسید ..."
          onChange={(e) => setMessage(e.target.value)}
          className=" border-none outline-none w-full  duration-300 p-3 rounded-md resize-none "></textarea>
      </div>
      <div className="w-2/12 flex items-center justify-center h-full">
        <button
          onClick={() => {
            onSend(message);
            setMessage("");
          }}>
          <ICSendMessage
            width="36"
            height="36"
            viewPort="0 0 36 36"
            className={"w-8 h-8 text-blue-300"}
          />
        </button>
      </div>
    </div>
  );
};
