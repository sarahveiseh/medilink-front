import { Wrapper } from "../components/wrapper";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { Button } from "components/button";

//!!!!!!!ATTENTION !!!!!!!!
//if the submit action was successful user should be redirected to login page with a query param od role=patient

export const PatientRegister = () => {
  const { control, onSubmit } = useForm();
  return (
    <Wrapper title="ثبت نام بیمار">
      <div className="m-5 space-y-6 p-7">
        <div className="flex justify-between p-5 border border-blue-400 rounded">
          <span>if you are doctor click here</span>
          <Link
            className="p-4 text-center text-white bg-blue-400 rounded"
            to="/">
            doctors register
          </Link>{" "}
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
            label="تائید رمزعبور"
            placeholder="رمزعبور را دوباره وارد کنید"
            required
            control={control}
          />
          <Button type="submit" className="p-4 text-white bg-blue-400 ">
            ثبت نام
          </Button>
        </form>
      </div>
    </Wrapper>
  );
};
