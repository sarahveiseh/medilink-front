import { ICAppointment } from "icons/appointment";
import { ICDoctor } from "icons/doctor";
import { ICPatient } from "icons/patient";
import { ICPerson } from "icons/person";
import { ICChat } from "icons/chat";

export const getMenuItems = (role) => {
  switch (role) {
    case "admin":
      return [
        {
          key: "00",

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
        // {
        //   key: "04",

        //   name: "نوبت ها",
        //   icon: (
        //     <ICAppointment className="w-5 h-5 text-inherit md:w-8 md:h-8" />
        //   ),
        //   route: "/appointments",
        // },
        // {
        //   key: "04",

        //   name: "گفت و گو",
        //   icon: <ICChat className="w-5 h-5 text-inherit md:w-8 md:h-8" />,
        //   route: "/chats",
        // },
      ];
    default:
      return [];
  }
};
