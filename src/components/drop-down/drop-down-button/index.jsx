import { ICChevronDown } from "icons/chevron-down";
import { ICChevronRight } from "icons/chevron-right";

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
      className={`w-full row-between focus:outline-none
          ${
            active
              ? "text-blue-500 font-seminole"
              : " text-dark transform hover:opacity-80"
          }
          ${className}`}
      onClick={() => toggle()}
      role="button"
      type="button"
    >
      <div className="row-items-center">
        {icon && icon()}
        <div
          className={`flex items-center whitespace-nowrap
            ${active ? "text-blue-500" : "text-dark"}`}
        >
          {label}
        </div>
      </div>
      {!hideArrow && (
        <>
          {open ? (
            <ICChevronDown className="w-3 h-3" role="close" id="close" />
          ) : (
            <ICChevronRight className="w-3 h-3 " />
          )}
        </>
      )}
    </button>
  );
};
