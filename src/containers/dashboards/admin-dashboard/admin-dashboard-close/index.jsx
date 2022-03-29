import { Button } from "components/button";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ICPatient } from "icons/patient";
import { ICDoctor } from "icons/doctor";
import { ICPerson } from "icons/person";

export const AdminDashboardClose = ({ setElement, setPosition }) => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const getBtn = (e) => {
    if (e?.tagName === "BUTTON") {
      return e;
    } else {
      return getBtn(e?.parentNode);
    }
  };

  const showSubMenu = (e, menu) => {
    const el = getBtn(e?.target);

    setPosition([
      +el?.offsetRight - +el?.parentNode?.scrollRight,
      +el?.offsetTop - +el?.offsetParent?.scrollTop + (+e?.pageY - +e?.clientY),
    ]);
    setElement(menu);
  };

  const hideSubMenu = (_) => {
    setElement("");
  };

  return (
    // overflow-y-scroll scrollbar-hide
    <div className="flex flex-col items-center space-y-8 scrollbar-hide h-full py-12">
      <Link to="/dashboard" className="mb-10 ml-[14px]">
        {/* <ICUtopiopsSmall /> */}
      </Link>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "profile")}
        onMouseLeave={hideSubMenu}
        className=" flex justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/admin")}
      >
        <ICPerson
          className={`w-10 h-10 p-0.5
            ${
              pathname.startsWith("/admin") ? "text-blue-500" : "text-gray-200"
            }`}
        />
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "doctors")}
        onMouseLeave={hideSubMenu}
        className=" flex justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/doctors")}
      >
        <ICDoctor
          className={`w-10 h-10
            ${
              pathname.startsWith("/doctors")
                ? "text-blue-500"
                : "text-gray-200"
            }`}
        />
      </Button>
      <Button
        onMouseEnter={(e) => showSubMenu(e, "patients")}
        onMouseLeave={hideSubMenu}
        className="flex justify-start items-center shrink-0 w-full h-14 hover:cursor-pointer  "
        icon
        onClick={() => push("/patients")}
      >
        <ICPatient
          className={`w-10 h-10 text-white
            ${
              pathname.startsWith("/patients")
                ? "text-blue-500"
                : "text-gray-200"
            }`}
        />
      </Button>
    </div>
  );
};
