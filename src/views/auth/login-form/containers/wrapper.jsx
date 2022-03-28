import { ReactComponent as LoginSvg } from "assets/login.svg";
import { LoginForm } from ".";
import { LoginLinks } from "../components";

export const LoginWrapper = () => {
  return (
    <div className="w-2/3 md:w-1/2 bg-white shadow-lg rounded h-[500px] grid grid-cols-2">
      <div className="w-full pt-16 px-6 flex flex-col items-center space-y-4 bg-gray-50 border-r">
        <span className="font-bold text-center w-full text-xl ">
          Log in to Utopiops
        </span>
        <LoginForm />
        <LoginLinks />
      </div>
      <div className="flex justify-center items-center">
        <LoginSvg />
      </div>
    </div>
  );
};
