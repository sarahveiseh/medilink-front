import { useEffect } from "react";
import { ICClose } from "icons/close";

export const Toast = ({ title, description, type, open, close = () => {} }) => {
  useEffect(() => {
    if (open)
      setTimeout(() => {
        close();
      }, 10000);
  }, [open, type]);

  return (
    <div
      className={`fixed col-start top-4 right-4  w-[400px] h-22 rounded px-4 py-2 shadow-xl z-[1000] animate-fade-in-right
        ${type === "error" ? "bg-red-500" : "bg-green-600"}`}
    >
      <ICClose
        className={`w-6 h-6  absolute top-2 right-2 cursor-pointer
          ${type === "error" ? "text-red-800" : "text-green-400"}`}
        onClick={() => close()}
      />
      <span
        className={`text-lg 
          ${type === "error" ? "text-red-900" : "text-green-400"}`}
      >
        {title}
      </span>
      <span
        className={`pt-1 pb-1 text-sm 
          ${type === "error" ? "text-red-200" : "text-green-200"}`}
      >
        {description}
      </span>
    </div>
  );
};
