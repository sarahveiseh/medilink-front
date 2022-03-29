import { DropDown } from "components/drop-down";
import { DropDownOption } from "components/drop-down-option";
import { ICDoctor } from "icons/doctor";

export const DoctorDropDown = ({ pathname }) => {
  return (
    <DropDown
      label="پزشکان"
      active={pathname.startsWith("/doctors")}
      icon={() => (
        <ICDoctor
          className={`w-10 h-10 p-0.5 cursor-pointer
            ${
              pathname.startsWith("/doctors")
                ? "text-blue-500"
                : "text-gray-200"
            }`}
        />
      )}
    >
      <DropDownOption to="/doctors" active={pathname === "/doctors"}>
        لیست
      </DropDownOption>
    </DropDown>
  );
};
