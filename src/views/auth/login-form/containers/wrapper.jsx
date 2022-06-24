import { ReactComponent as LoginSvg } from "assets/login.svg";
import { LoginForm } from ".";

export const LoginWrapper = () => {
  return (
    <div className="flex flex-col w-1/2 bg-white rounded shadow-md xl:flex-row min-h-[500px] ">
      <div className="flex items-center justify-center w-full h-full xl:hidden">
        <LoginSvg className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center w-full px-6 pt-16 space-y-4 border-r bg-gray-50">
        <span className="text-sm font-bold text-center  sm:text-xl">
          به مدلینک وارد شوید
        </span>
        <LoginForm />
      </div>
      <div className="items-center justify-center hidden w-full h-full xl:flex">
        <LoginSvg className="w-full h-full" />
      </div>
    </div>
  );
};
