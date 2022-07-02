import { ReactComponent as LoginSvg } from "assets/login.svg";
import { LoginForm } from ".";
import { Link } from "react-router-dom";

export const LoginWrapper = () => {
  return (
    <div className="flex flex-col w-[90%] lg:w-1/2 bg-white rounded shadow-md xl:flex-row min-h-[500px] ">
      <div className="flex items-center justify-center w-full h-full xl:hidden">
        <LoginSvg className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center w-full px-6 pt-16 space-y-4 border-r bg-gray-50">
        <span className="text-sm font-bold text-center sm:text-xl">
          به مدلینک وارد شوید
        </span>
        <LoginForm />
        <div className="w-full">
          <div className="w-full text-center ">حساب کاربری ندارید؟</div>
          <div className="flex justify-between w-full px-7">
            <Link
              className="mx-1 text-sm text-blue-400 hover:cursor-pointer"
              to="/register?role=doctor">
              ثبت نام پزشک
            </Link>
            <Link
              className="mx-1 text-sm text-blue-400 hover:cursor-pointer"
              to="/register?role=patient">
              ثبت نام بیمار
            </Link>
          </div>
        </div>
      </div>
      <div className="items-center justify-center hidden w-full h-full xl:flex">
        <LoginSvg className="w-full h-full" />
      </div>
    </div>
  );
};
