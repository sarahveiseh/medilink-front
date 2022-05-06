import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProfileDropDown } from "./profile";
import { DoctorDropDown } from "./doctors";
import { PatientDropDown } from "./patient";
import { LogoutDropdown } from "./logut";

export const AdminDashboardOpen = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full h-full ">
      <div className="flex flex-col w-full h-full px-4 pb-20 space-y-12 overflow-y-scroll scrollbar-hide">
        <Link
          to="/dashboard"
          className="pt-8 text-xl font-semibold text-center text-white ">
          مدلینک
        </Link>
        <ProfileDropDown pathname={pathname} />
        <DoctorDropDown pathname={pathname} />
        <PatientDropDown pathname={pathname} />
        <LogoutDropdown pathname={pathname} />
      </div>
    </div>
  );
};
