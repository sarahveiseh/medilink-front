import { Button } from "components/button";
import { Input } from "components/input";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { control, handleSubmit } = useForm();
  return (
    <form className=" grid grid-cols-1 gap-y-4 mb-4">
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
        loading={false}
        className="w-full bg-blue-500 text-white mt-6"
      >
        ورود
      </Button>
    </form>
  );
};
