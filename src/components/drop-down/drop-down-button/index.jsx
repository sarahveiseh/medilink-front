import { ICChevronDown } from "icons/chevron-down";
import { ICChevronLeft } from "icons/chevron-left";

export const DropDownButton = ({
  className,
  icon,
  label,
  toggle,
  open,
  active,
  hideArrow,
}) => {
  return (
    <button
      className={`w-full flex justify-between items-center  focus:outline-none
          ${
            active
              ? "text-blue-500"
              : " text-gray-200 transform hover:opacity-80"
          }
          ${className}`}
      onClick={() => toggle()}
      type="button"
    >
      <div className=" flex justify-center">
        {icon && icon()}
        <span
          className={`mt-1
            ${active ? "text-blue-500" : "text-gray-200"}`}
        >
          {label}
        </span>
      </div>
      {open ? (
        <ICChevronDown className="w-5 h-5" id="close" />
      ) : (
        <ICChevronLeft className="w-5 h-5 " />
      )}
    </button>
  );
};
