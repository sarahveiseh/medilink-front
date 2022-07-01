import { useFieldArray } from "react-hook-form";
import { Input } from "components/input";
import { Button } from "components/button";
import { ICDelete } from "icons/delete";
import { ICPlus } from "icons/plus";
import { Select } from "components/select";

export const WorkDays = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "workSchedule.activeDays",
  });
  return (
    <div>
      <Button
        tooltip="افزودن روز کاری جدید"
        icon
        type="button"
        onClick={() => append("")}>
        <ICPlus className="w-5 h-5 text-blue-400" />
      </Button>
      {fields.map((field, index) => (
        <div className="flex items-center space-x-3">
          <Select
            name={`workSchedule.activeDays.${index}.day`}
            label="روز هفته"
            placeholder="روز هفته مد نظر خود را وارد انتخاب کنید"
            required
            options={[
              { value: "sat", label: "شنبه" },
              { value: "sun", label: "یکشنبه" },
              { value: "mon", label: "دوشنبه" },
              { value: "tue", label: "سه شنبه" },
              { value: "wed", label: "جهارشنبه" },
              { value: "thu", label: "پنجشنبه" },
              { value: "fri", label: "جمعه" },
            ]}
          />
          <Select
            name={`workSchedule.activeDays.${index}.start`}
            label="شروع ساعت کاری"
            required
            options={[
              { value: "sat", label: "شنبه" },
              { value: "sun", label: "یکشنبه" },
              { value: "mon", label: "دوشنبه" },
              { value: "tue", label: "سه شنبه" },
              { value: "wed", label: "جهارشنبه" },
              { value: "thu", label: "پنجشنبه" },
              { value: "fri", label: "جمعه" },
            ]}
          />
          <Select
            name={`workSchedule.activeDays.${index}.end`}
            label="پایان ساعت کاری"
            required
            options={[
              { value: "sat", label: "شنبه" },
              { value: "sun", label: "یکشنبه" },
              { value: "mon", label: "دوشنبه" },
              { value: "tue", label: "سه شنبه" },
              { value: "wed", label: "جهارشنبه" },
              { value: "thu", label: "پنجشنبه" },
              { value: "fri", label: "جمعه" },
            ]}
          />
          <Input
            name={`workSchedule.activeDays.${index}.duration`}
            type="number"
            label="طول هر جلسه"
            placeholder="طول هر جلسه را به دقیق وارد کنید"
            required
          />
          <Button
            type="button"
            tooltip="حذف این روز"
            icon
            onClick={() => remove(field.id)}>
            <ICDelete className="w-5 h-5 text-red-400" />
          </Button>
        </div>
      ))}
    </div>
  );
};
