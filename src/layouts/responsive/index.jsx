import { ICAppointment } from "icons/appointment";
import { ICDoctor } from "icons/doctor";
import { ICPatient } from "icons/patient";
import { ICPerson } from "icons/person";
import { ICChat } from "icons/chat";
import { ICBack } from "icons/back";
import { MenuItem } from "components/menu-item";
export const ResponsiveLayout = (props) => {
  const role = "admin";
  const menuItems = [
    {
      key: "02",

      name: "پروفایل",
      icon: <ICPerson className="w-5 h-5 text-inherit md:w-8 md:h-8" />,
      route: "/profile",
    },
    {
      key: "01",
      name: "پزشکان",
      icon: <ICDoctor className="w-5 h-5 text-inherit md:w-8 md:h-8" />,
      route: "/doctors",
    },

    {
      key: "03",

      name: "بیماران",
      icon: <ICPatient className="w-5 h-5 text-inherit md:w-8 md:h-8" />,
      route: "/patients",
    },
    {
      key: "04",

      name: "نوبت ها",
      icon: <ICAppointment className="w-5 h-5 text-inherit md:w-8 md:h-8" />,
      route: "/appointments",
    },
    {
      key: "04",

      name: "گفت و گو",
      icon: <ICChat className="w-5 h-5 text-inherit md:w-8 md:h-8" />,
      route: "/chats",
    },
  ];

  return (
    <div className="w-full h-screen">
      <div className="relative hidden w-full h-full grid-cols-12 md:grid">
        <div className="flex flex-col items-center justify-start w-full h-full pt-16 bg-white border-l border-gray-200 shadow space-y-14 ">
          {menuItems?.map((item) => (
            <MenuItem {...item} />
          ))}
        </div>
        <div className="relative flex w-full h-full col-span-11 ">
          <div className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-4 bg-white shadow h-14">
            <span className="w-10">
              <ICBack className="w-5 h-5" />
            </span>
            <span className="text-center">مدلینک</span>
            <span className="w-10" />
          </div>
          <div className="w-full overflow-y-scroll px-14 bg-gray-50">
            {props.children}
          </div>
        </div>
      </div>
      <div className="relative w-full h-full md:hidden">
        <div className="fixed top-0 left-0 z-10 flex items-center justify-between w-full px-4 bg-white shadow h-14 ">
          <span className="w-10">
            <ICBack className="w-5 h-5" />
          </span>
          <span className="text-center ">مدلینک</span>
          <span className="w-10" />
        </div>
        <div className="w-full overflow-y-scroll pt-14 bg-gray-50">
          {props.children}
        </div>
        <div className="fixed bottom-0 left-0 flex items-center justify-between w-full h-16 px-5 bg-white border-t border-gray-10">
          {menuItems?.map((item) => (
            <MenuItem {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
