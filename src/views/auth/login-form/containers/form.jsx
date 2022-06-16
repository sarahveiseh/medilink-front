import { Button } from "components/button";
import { Input } from "components/input";
import { useUserContext } from "hooks";
import { userTypes } from "providers/user-provider/types";
import { useForm } from "react-hook-form";
import { useLogin } from "services";

export const LoginForm = () => {
  const { control, handleSubmit } = useForm();
  const { mutate, isLoading } = useLogin();

  const { dispatchUser } = useUserContext();

  const submit = (formData) => {
    mutate(formData, {
      onSuccess: (res) => {
        dispatchUser({ type: userTypes.LOGIN_USER, payload: res?.result });
      },
    });
  };

  return (
    <form
      className="grid grid-cols-1 pb-5 gap-y-4 "
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
