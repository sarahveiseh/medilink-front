import { Link } from "react-router-dom";
import { classNames } from "utils/classes";

export const DropDownOption = ({ children, onClick, active, to }) => {
  return (
    <Link
      to={to}
      slot="wrapper"
      className={classNames(
        active ? "text-blue-400" : "text-gray-200",
        " cursor-pointer hover:opacity-80 px-4 pt-3"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
