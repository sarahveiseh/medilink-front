import { ReactComponent as LoginSvg } from "assets/login.svg";
import { LoginForm } from ".";

export const LoginWrapper = () => {
  return (
    <div className="flex flex-col w-2/3 bg-white rounded shadow-lg md:flex-row min-h-[500px] ">
      <div className="flex items-center justify-center w-full h-full md:hidden">
        <LoginSvg className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center w-full px-6 pt-16 space-y-4 border-r bg-gray-50">
        <span className="w-full text-sm font-bold text-center sm:text-xl ">
          به مدلینک وارد شوید
        </span>
        <LoginForm />
      </div>
      <div className="items-center justify-center hidden w-full h-full md:flex">
        <LoginSvg className="w-full h-full" />
      </div>
    </div>
  );
};
