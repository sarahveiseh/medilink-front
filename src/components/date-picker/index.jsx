import UnControlledDatePicker from "react-modern-calendar-datepicker";
import { Controller } from "react-hook-form";
import { useValidation } from "hooks/use-validation";

export const DatePicker = (props) => {
  const { validate } = useValidation(props);
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={{ validate }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          {props.label && (
            <label className="mb-2 text-sm text-gray-700">{props.label}</label>
          )}
          <UnControlledDatePicker
            value={value}
            onChange={onChange}
            shouldHighlightWeekends
            locale="fa"
            inputPlaceholder={props.placeholder}
            inputClassName={`disabled:text-gray-500 disabled:bg-gray-100 w-full focus:outline-none border border-gray-300 rounded px-2 h-[48px] bg-transparent focus:ring-1 focus:ring-indigo-400 bg-gray-50 ${
              props.className || ""
            }`}
          />
        </>
      )}
    />
  );
};
