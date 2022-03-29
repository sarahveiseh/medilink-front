import { ReactComponent as LoginSvg } from "assets/login.svg";
import { LoginForm } from ".";

export const LoginWrapper = () => {
  return (
    <div className="w-2/3 bg-white shadow-lg rounded h-[500px] flex md:flex-row flex-col  ">
      <div className=" md:hidden flex items-center justify-center w-full h-full ">
        <LoginSvg className="w-full h-full" />
      </div>
      <div className="w-full pt-16 px-6 flex flex-col items-center space-y-4 bg-gray-50 border-r">
        <span className="font-bold text-center w-full text-sm sm:text-xl ">
          به مدلینک وارد شوید
        </span>
        <LoginForm />
      </div>
      <div className=" hidden md:flex items-center justify-center w-full h-full ">
        <LoginSvg className="w-full h-full" />
      </div>
    </div>
  );
};
