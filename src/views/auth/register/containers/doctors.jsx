import { Wrapper } from "../components/wrapper";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "components/input";
import { Button } from "components";
import { TextArea } from "components/text-area";
import { Specialty } from "../components/speciallity-array-input";
import { WorkDays } from "../components/work-days-aray-input";
import { AuthWrapper } from "components/auth-wrapper";

//!!!!!!!ATTENTION !!!!!!!!
//if the submit action was successful user should be redirected to login page with a query param of role=doctor

export const DoctorRegister = () => {
  const [step, setStep] = useState(1);
  const { control, onSubmit } = useForm();
  return (
    <AuthWrapper>
      <Wrapper title="ثبت نام پزشک">
        <div className="m-5 space-y-6 p-7">
          <div className="flex items-center justify-between p-5 border border-blue-400 rounded">
            <span>بیمار هستید؟</span>
            <Link
              className="p-2 mx-2 text-center text-white bg-blue-400 rounded"
              to="/">
              به عنوان بیمار ثبت نام کنید
            </Link>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between ">
              <div
                className={`h-1 w-full mx-1 ${
                  step === 1 ? "bg-blue-400" : "bg-gray-300"
                }  hover:cursor-pointer`}
                onClick={() => setStep(1)}
              />
              <div
                className={`h-1 w-full mx-1 ${
                  step === 2 ? "bg-blue-400" : "bg-gray-300"
                }  hover:cursor-pointer`}
                onClick={() => setStep(2)}
              />
              <div
                className={`h-1 w-full mx-1 ${
                  step === 3 ? "bg-blue-400" : "bg-gray-300"
                } hover:cursor-pointer`}
                onClick={() => setStep(3)}
              />
            </div>
            <div>
              <form className="space-y-5 border border-blue-400 rounded p-7">
                {step === 1 && (
                  <>
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
                      name="medicalCode"
                      label="کد نظام پزشکی"
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
                    <div className="flex justify-between w-full">
                      <Button
                        onClick={() => setStep(2)}
                        type="button"
                        className="p-4 text-white bg-blue-400 ">
                        بعدی
                      </Button>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <Input
                      name="phoneNumber"
                      label="شماره تلفن"
                      placeholder="شماره تلفن مطب خود را وارد کنید"
                      required
                      control={control}
                    />
                    <Input
                      name="city"
                      label="شهر"
                      placeholder="نام شهر خود را وارد کنید"
                      required
                      control={control}
                    />
                    <TextArea
                      name="address"
                      label="آدرس"
                      placeholder="آدرس مطب خود را وارد کنید"
                      required
                      control={control}
                    />
                    <div className="flex justify-between w-full">
                      <Button
                        onClick={() => setStep(1)}
                        type="button"
                        className="p-4 text-blue-400 bg-white border border-blue-400 ">
                        قبلی
                      </Button>
                      <Button
                        onClick={() => setStep(3)}
                        type="button"
                        className="p-4 text-white bg-blue-400 ">
                        بعدی
                      </Button>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <Specialty control={control} />
                    <WorkDays control={control} />
                    <Input
                      name="workSchedule.bookingInAdvance"
                      label="محدودیت رزرو از قبل"
                      placeholder="بیماران از چند روز پیش میتوانند وقت رزرو کنند؟"
                      required
                      control={control}
                    />
                    <div className="flex justify-between w-full">
                      <Button
                        onClick={() => setStep(2)}
                        type="button"
                        className="p-4 text-blue-400 bg-white border border-blue-400 ">
                        قبلی
                      </Button>
                      <Button
                        type="submit"
                        className="p-4 text-white bg-blue-400 ">
                        ثبت نام
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </AuthWrapper>
  );
};
