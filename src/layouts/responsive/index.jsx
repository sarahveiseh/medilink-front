import { ICAppointment } from "icons/appointment";
import { ICDoctor } from "icons/doctor";
import { ICPatient } from "icons/patient";
import { ICPerson } from "icons/person";
import { ICChat } from "icons/chat";
import { ICBack } from "icons/back";
import { Children } from "react";

export const ResponsiveLayout = (props) => {
  const role = "admin";
  console.log(props);
  return (
    <div className="w-full h-full">
      <div className="relative hidden w-full h-full grid-cols-12 md:grid">
        <div className="flex flex-col items-center justify-start w-full h-full pt-16 bg-white border-l border-gray-200 shadow space-y-14 ">
          <ICAppointment className="w-5 h-5 text-blue-300 " />
          <ICDoctor className="w-5 h-5 text-blue-300" />
          <ICPatient className="w-5 h-5 text-blue-300" />
          <ICChat className="w-5 h-5 text-blue-300" />
          <ICPerson className="w-5 h-5 text-blue-300" />
        </div>
        <div className="relative flex w-full h-full col-span-11 ">
          <div className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-4 bg-white shadow h-14">
            <span className="w-10">
              <ICBack className="w-5 h-5" />
            </span>
            <span className="text-center">مدلینک</span>
            <span className="w-10" />
          </div>
          <div className="w-full h-[100vh] overflow-y-scroll pt-14 bg-gray-50">
            {props.children}
          </div>
        </div>
      </div>
      <div className="relative w-full h-full md:hidden">
        <div className="absolute top-0 left-0 z-10 flex items-center justify-between w-full px-4 bg-white shadow h-14 ">
          <span className="w-10">
            <ICBack className="w-5 h-5" />
          </span>
          <span className="text-center ">مدلینک</span>
          <span className="w-10" />
        </div>
        <div className="w-full h-[100vh] overflow-y-scroll pt-14 bg-gray-50">
          {props.children}
        </div>
        <div className="absolute bottom-0 left-0 flex items-center justify-between w-full h-16 px-5 bg-white border-t border-gray-10">
          <ICAppointment className="w-5 h-5 text-blue-300 " />
          <ICDoctor className="w-5 h-5 text-blue-300" />
          <ICPatient className="w-5 h-5 text-blue-300" />
          <ICChat className="w-5 h-5 text-blue-300" />
          <ICPerson className="w-5 h-5 text-blue-300" />
        </div>
      </div>
    </div>
  );
};
