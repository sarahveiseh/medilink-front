import { useFieldArray } from "react-hook-form";
import { Input } from "components/input";
import { Button } from "components/button";
import { ICDelete } from "icons/delete";
import { ICPlus } from "icons/plus";

export const Specialty = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "speciality",
  });
  return (
    <div>
      <Button
        tooltip="افزودن تخصص"
        icon
        type="button"
        onClick={() => append("")}>
        <ICPlus className="w-5 h-5 text-blue-400" />
      </Button>
      {fields.map((field, index) => (
        <div className="flex items-center space-x-3">
          <Input
            name={`speciality.${index}`}
            label="تخصص"
            control={control}
            required
            placeholder="تخصص خود را وارد کنید"
          />
          <Button
            tooltip="خذف این تخصص"
            type="button"
            icon
            onClick={() => remove(field.id)}>
            <ICDelete className="w-5 h-5 text-red-400" />
          </Button>
        </div>
      ))}
    </div>
  );
};
