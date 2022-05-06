import { DropDown } from "components/drop-down";
import { useUserContext } from "hooks";

import { ICLogout } from "icons/logout";
import { userTypes } from "providers/user-provider/types";

export const LogoutDropdown = ({ pathname }) => {
  const { dispatchUser } = useUserContext();
  return (
    <DropDown
      label="خروج"
      active={pathname.startsWith("/logout")}
      onClick={() => {
        dispatchUser({ type: userTypes.LOGOUT_USER });
      }}
      icon={() => (
        <ICLogout
          viewPort="0 0 1024 1024"
          width="36"
          height="36"
          className={` w-6 h-6 ml-2  cursor-pointer
            ${
              pathname.startsWith("/logout") ? "text-blue-500" : "text-gray-200"
            }`}
        />
      )}></DropDown>
  );
};
