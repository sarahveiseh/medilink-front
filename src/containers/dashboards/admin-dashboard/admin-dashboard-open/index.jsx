import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserDropDown } from "./user";

export const AdminDashboardOpen = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full h-full ">
      <div className="flex flex-col w-full h-full px-4 pb-20 space-y-8 overflow-y-scroll scrollbar-hide">
        <Link
          to="/dashboard"
          className="pt-8 text-xl font-semibold text-center text-white "
        >
          icon
        </Link>

        <UserDropDown pathname={pathname} />
      </div>
    </div>
  );
};
