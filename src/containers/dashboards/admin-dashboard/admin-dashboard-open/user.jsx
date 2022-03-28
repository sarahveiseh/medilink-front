import { DropDown } from "components/drop-down";
import { DropDownOption } from "components/drop-down-option";

export const UserDropDown = ({ pathname }) => {
  return (
    <DropDown
      className="reactour-dashboard__user"
      label="User management"
      active={pathname.startsWith("/user-management")}
      // icon={() => (
      //   <ICPeoples
      //     className={classNames(
      //       'w-6 h-6 mx-3 cursor-pointer  ',
      //       pathname.startsWith('/user-management')
      //         ? 'text-blue-500'
      //         : 'text-gray-400'
      //     )}
      //   />
      // )}
    >
      <DropDownOption
        to="/user-management"
        active={pathname === "/user-management"}
      >
        Users
      </DropDownOption>
      <DropDownOption
        to="/user-management/groups"
        active={pathname === "/user-management/groups"}
      >
        Groups
      </DropDownOption>
      <DropDownOption
        to="/user-management/policies"
        active={pathname === "/user-management/policies"}
      >
        Policies
      </DropDownOption>
    </DropDown>
  );
};
