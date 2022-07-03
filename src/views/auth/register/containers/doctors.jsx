import { Wrapper } from "../components/wrapper";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { Input } from "components/input";
import { Button } from "components";
import { TextArea } from "components/text-area";
import { Specialty } from "../components/speciallity-array-input";
import { WorkDays } from "../components/work-days-aray-input";
import { AuthWrapper } from "components/auth-wrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterDoctor } from "services";
import { toast } from "react-toastify";
import { RegisterDoctorValidationSchema } from "constants/form-validation-schema";

export const DoctorRegister = () => {
  const history = useHistory();
  const { mutate, isLoading } = useRegisterDoctor();
  const [step, setStep] = useState(1);
  const currentValidationSchema = RegisterDoctorValidationSchema[step - 1];

  const { control, handleSubmit, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(currentValidationSchema),
  });
  const submitForm = (formData) => {
    mutate(
      {
        username: formData.username,
        password: formData.password,
        firstName: formData.name,
        lastName: formData.lastName,
        medicalCode: formData.medicalCode,
        speciality: formData.speciality,
        WorkSchedule: {
          activeDays: formData.activeDays,
          bookingInAdvance: formData.bookingInAdvance,
        },
        sex: "female",
        dateOfBirth: "1345-05-02",
        phoneNumber: formData.phoneNumber,
        address: formData.address,
      },
      {
        onSuccess: (res) => {
          toast.success(res.message);
          history.push("/auth?role=doctor");
        },
      },
    );
  };
  const handleNextStep = async (stepNumber) => {
    const isStepValid = await trigger();
    if (isStepValid) setStep(stepNumber);
  };
  return (
    <AuthWrapper>
      <Wrapper title="ثبت نام پزشک">
        <div className="m-5 space-y-6 p-7">
          <div className="flex items-center justify-between p-5 border border-blue-400 rounded">
            <span>بیمار هستید؟</span>
            <Link
              className="p-2 mx-2 text-center text-white bg-blue-400 rounded"
              to="/register?role=patient">
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
              <form
                onSubmit={handleSubmit(submitForm)}
                className="space-y-5 border border-blue-400 rounded p-7">
                {step === 1 && (
                  <>
                    <Input
                      name="name"
                      label="نام"
                      placeholder="نام خود را وارد کنید"
                      control={control}
                    />
                    <Input
                      name="lastName"
                      label="نام خانوادگی"
                      placeholder="نام خانوادگی خود را وارد کنید"
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
                        onClick={() => {
                          handleNextStep(2);
                        }}
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
                      control={control}
                    />
                    <Input
                      name="city"
                      label="شهر"
                      placeholder="نام شهر خود را وارد کنید"
                      control={control}
                    />
                    <TextArea
                      name="address"
                      label="آدرس"
                      placeholder="آدرس مطب خود را وارد کنید"
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
                        onClick={() => handleNextStep(3)}
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
                      name="bookingInAdvance"
                      label="محدودیت رزرو از قبل"
                      placeholder="بیماران از چند روز پیش میتوانند وقت رزرو کنند؟"
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
                        loading={isLoading}
                        className="p-4 text-white bg-blue-400 ">
                        ثبت نام
                      </Button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
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
