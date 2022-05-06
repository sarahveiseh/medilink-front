import { Button } from "components";
import { Input } from "components/input";
import { TextArea } from "components/text-area";
import { useForm } from "react-hook-form";
export const AddPrescription = () => {
  const { control } = useForm();
  return (
    <div>
      <form>
        <Input name="type" control={control} required label="نوع" />
        <Input name="name" control={control} required label="نام" />
        <TextArea name="details" control={control} required label="توضیحات" />
        <Button>ذخیره</Button>
      </form>
    </div>
  );
};
