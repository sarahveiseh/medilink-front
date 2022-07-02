import { Wrapper } from "../components/wrapper";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { Button } from "components/button";
import { AuthWrapper } from "components/auth-wrapper";

//!!!!!!!ATTENTION !!!!!!!!
//if the submit action was successful user should be redirected to login page with a query param of role=patient

export const PatientRegister = () => {
  const { control, onSubmit } = useForm();
  return (
    <AuthWrapper>
      <Wrapper title="ثبت نام بیمار">
        <div className="m-5 space-y-6 p-7">
          <div className="flex items-center justify-between p-5 border border-blue-400 rounded">
            <span>پزشک هستید؟</span>
            <Link
              className="p-2 mx-2 text-center text-white bg-blue-400 rounded "
              to="/register?role=doctor">
              به عنوان پزشک ثبت نام کنید
            </Link>
          </div>
          <form className="space-y-5 border border-blue-400 rounded p-7">
            <Input
              name="name"
              label="نام"
              placeholder="نام خود را وارد کنید"
              required
              control={control}
            />
            <Input
              name="lastName"
              label="نام خانوادگی"
              placeholder="نام خانوادگی خود را وارد کنید"
              required
              control={control}
            />
            <Input
              name="username"
              label="کد ملی"
              placeholder="کد ملی خود را وارد کنید"
              required
              control={control}
            />
            <Input
              name="password"
              type="password"
              label="رمزعبور"
              placeholder="رمزعبور"
              required
              control={control}
            />
            <Input
              name="confirmPassword"
              type="password"
              label="تائید رمزعبور"
              placeholder="رمزعبور را دوباره وارد کنید"
              required
              control={control}
            />
            <Button type="submit" className="p-4 text-white bg-blue-400 ">
              ثبت نام
            </Button>
          </form>
          <div className="flex items-center justify-between p-5 border border-blue-400 rounded">
            <span>حساب کاربری دارید؟</span>
            <Link
              className="p-2 mx-2 text-center text-white bg-blue-400 rounded"
              to="/auth">
              وارد شوید
            </Link>
          </div>
        </div>
      </Wrapper>
    </AuthWrapper>
  );
};
