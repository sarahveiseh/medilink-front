import { Button } from "components/button";
import { Input } from "components/input";
import { useUserContext } from "hooks";
import { userTypes } from "providers/user-provider/types";
import { useForm } from "react-hook-form";
import { useLogin } from "services";
import { useSearchParams } from "hooks/use-search-params";

export const LoginForm = () => {
  const { control, handleSubmit } = useForm();
  const { mutate, isLoading } = useLogin();

  const { dispatchUser } = useUserContext();

  //!!!!ATTENTION!!!!!
  const { role } = useSearchParams();
  //USE THIS ROLE TO SEND REQUEST TO LOGIN PATIENT OR DOCTOR
  //IF LOGIN WAS SUCCESSFUL SHOULD BE REDIRECTED TO /profile WITH THIS ROLE SAVED AS THEIR ROLE
  //TO VIEW WITCH DASHBOARD

  const submit = (formData) => {
    mutate(formData, {
      onSuccess: (res) => {
        dispatchUser({ type: userTypes.LOGIN_USER, payload: res?.result });
      },
    });
  };

  return (
    <form
      className="grid w-full grid-cols-1 pb-14 gap-y-4"
      onSubmit={handleSubmit(submit)}>
      <Input label="نام کاربری" name="username" required control={control} />
      <Input
        tooltip="The password must have at least one digit, a capital letter and one of: !@#$%^&*"
        label="رمزعبور"
        name="password"
        type="password"
        min={3}
        max={20}
        required
        control={control}
      />
      <Button
        type="submit"
        loading={isLoading}
        className="w-full my-6 text-white bg-blue-500">
        ورود
      </Button>
    </form>
  );
};
