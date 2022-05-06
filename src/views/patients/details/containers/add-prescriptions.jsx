import { Button } from "components";
import { TextArea } from "components/text-area";
import { useForm } from "react-hook-form";
export const AddPrescription = () => {
  const { control } = useForm();
  return (
    <div>
      <form>
        <TextArea name="details" control={control} required label="توضیحات" />
        <Button>ذخیره</Button>
      </form>
    </div>
  );
};
