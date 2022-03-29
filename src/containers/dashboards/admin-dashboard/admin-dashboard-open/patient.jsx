import { DropDown } from "components/drop-down";
import { DropDownOption } from "components/drop-down-option";
import { ICPatient } from "icons/patient";

export const PatientDropDown = ({ pathname }) => {
  return (
    <DropDown
      label="بیماران"
      active={pathname.startsWith("/patients")}
      icon={() => (
        <ICPatient
          className={`w-10 h-10 p-0.5 cursor-pointer
            ${
              pathname.startsWith("/patients")
                ? "text-blue-500"
                : "text-gray-200"
            }`}
        />
      )}
    >
      <DropDownOption to="/patients" active={pathname === "/patients"}>
        لیست
      </DropDownOption>
    </DropDown>
  );
};
