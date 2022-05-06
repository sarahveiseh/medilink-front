import { useForm } from "react-hook-form";
import { Input } from "components/input";
import { TextArea } from "components/text-area";
import { Button } from "components/button";

const Index = () => {
  const { control, handleSubmit } = useForm();
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="font-semibold text-lg sm:text-3xl px-10 text-blue-400">
        افرودن بیمار
      </h1>
      <form className="md:grid md:grid-cols-2 gap-5 md:mx-10 my-5 border border-gray-200 rounded-md p-5">
        <Input label="نام" name="name" control={control} />
        <Input label="نام خانوادگی" name="lastName" control={control} />
        <Input label="شماره ملی" name="username" control={control} />
        <div className=" col-span-2">
          <TextArea label="توضیحات" name="description" control={control} />
        </div>
        <Input label="بیماری" name="speciality" control={control} />
        <Input label="بیماری" name="speciality" control={control} />
        <Input label="بیماری" name="speciality" control={control} />
      </form>
      <div className="md:w-1/2 w-full self-end md:pl-10 sm:flex space-y-3 sm:space-y-0 gap-2 justify-end">
        <Button className="w-full bg-blue-500 text-white">افزودن</Button>
        <Button className="w-full border border-blue-500 text-blue-500">
          انصراف
        </Button>
      </div>
    </div>
  );
};

export default Index;
