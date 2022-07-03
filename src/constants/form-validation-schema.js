import * as yup from "yup";
export const RegisterDoctorValidationSchema = [
  yup.object({
    name: yup.string().required("نام را وارد کنید"),
    lastName: yup.string().required("نام خانوادگی را وارد کنید"),
    username: yup.string().required("کد ملی را وارد کنید"),
    // .test({
    //   test: (_v) => isValidIranianNationalCode(_v),
    //   message: "کد ملی صحیح نیست",
    // }),
    medicalCode: yup.string().required("کد نظام وظیفه را وارد کنید"),
    password: yup.string().required("رمز عبور را وارد کنید"),
    confirmPassword: yup
      .string()
      .required("تائید رمزعبور را وارد کنید")
      .oneOf([yup.ref("password"), null], "تائید رمزعبور صحیح نیست"),
  }),
  yup.object({
    phoneNumber: yup.string(),
    city: yup.string(),
    address: yup.string(),
  }),
  yup.object({
    activeDays: yup.array().of(
      yup.object().shape({
        duration: yup
          .number()
          .required("طول جلسه را وارد کنید")
          .typeError("صحیح نیست"),
        start: yup
          .number()
          .required("زمان شروع را وارد کنید")
          .typeError("زمان شروع صحیح نیست")
          .max(24, "زمان صحیح نیست")
          .min(0, "زمان صحیح نیست"),
        end: yup
          .number()
          .required("زمان پایان را وارد کنید")
          .typeError("زمان پایان را صحیح نیست")
          .max(24, "زمان صحیح نیست")
          .min(0, "زمان صحیح نیست"),
      }),
    ),
  }),
];

export const RegisterPatientValidationSchema = yup.object({
  name: yup.string().required("نام را وارد کنید"),
  lastName: yup.string().required("نام خانوادگی را وارد کنید"),
  username: yup.string().required("کد ملی را وارد کنید"),
  // .test({
  //   test: (_v) => isValidIranianNationalCode(_v),
  //   message: "کد ملی صحیح نیست",
  // }),
  password: yup.string().required("رمز عبور را وارد کنید"),
  confirmPassword: yup
    .string()
    .required("تائید رمزعبور را وارد کنید")
    .oneOf([yup.ref("password"), null], "تائید رمزعبور صحیح نیست"),
});
