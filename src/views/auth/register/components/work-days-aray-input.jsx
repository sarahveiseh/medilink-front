import { useFieldArray } from "react-hook-form";
import { Input } from "components/input";
import { Button } from "components/button";
import { ICDelete } from "icons/delete";
import { ICPlus } from "icons/plus";
import { Select } from "components/select";

export const WorkDays = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "activeDays",
  });
  return (
    <fieldset className="p-3 border border-gray-400 rounded">
      <legend>روز های کاری</legend>
      <div className="flex flex-col">
        {fields.map((field, index) => (
          <div className="flex flex-col items-center space-x-3">
            <Select
              name={`activeDays.${index}.day`}
              label="روز هفته"
              placeholder="روز هفته مد نظر خود را وارد انتخاب کنید"
              required
              options={[
                { value: "sat", title: "شنبه" },
                { value: "sun", title: "یکشنبه" },
                { value: "mon", title: "دوشنبه" },
                { value: "tue", title: "سه شنبه" },
                { value: "wed", title: "جهارشنبه" },
                { value: "thu", title: "پنجشنبه" },
                { value: "fri", title: "جمعه" },
              ]}
            />
            <div className="flex justify-between">
              <Input
                name={`activeDays.${index}.start`}
                required
                placeholder="شروع کار"
              />
              <Input
                name={`activeDays.${index}.end`}
                required
                placeholder="پایان کار"
              />
              <Input
                name={`activeDays.${index}.duration`}
                type="number"
                placeholder="طول هر جلسه به دقیقه وارد کنید"
                required
              />
            </div>
            <Button
              type="button"
              tooltip="حذف این روز"
              icon
              onClick={() => remove(field.id)}
              className="mx-5 mt-5">
              <ICDelete className="w-5 h-5 text-red-400" />
            </Button>
          </div>
        ))}
        <Button
          tooltip="افزودن روز کاری جدید"
          icon
          type="button"
          onClick={() => append({})}
          className="self-end">
          <ICPlus className="w-5 h-5 text-blue-400" />
        </Button>
      </div>
    </fieldset>
  );
};
