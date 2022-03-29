import { DropDown } from "components/drop-down";
import { DropDownOption } from "components/drop-down-option";
import { ICPerson } from "icons/person";

export const ProfileDropDown = ({ pathname }) => {
  return (
    <DropDown
      label="پروفایل"
      active={pathname.startsWith("/admin")}
      icon={() => (
        <ICPerson
          className={`w-10 h-10 p-0.5 cursor-pointer
            ${
              pathname.startsWith("/admin") ? "text-blue-500" : "text-gray-200"
            }`}
        />
      )}
    >
      <DropDownOption to="/admin" active={pathname === "/admin"}>
        ادمین
      </DropDownOption>
    </DropDown>
  );
};
