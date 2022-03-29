import { useValidation } from "hooks/use-validation";
import { Controller } from "react-hook-form";
import { ToolTip } from "../q-tooltip";

export const Checkbox = (props) => {
  const { validate } = useValidation(props);
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={{ validate }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div className="flex flex-col">
            <div className="w-full flex items-center space-x-2">
              <input
                type="checkbox"
                disabled={props.disabled}
                id={props.name}
                data-testid={props.name}
                checked={value}
                onChange={(e) => {
                  onChange(e.target.checked);
                  if (props?.extraOnChange)
                    props?.extraOnChange(e.target.checked);
                }}
                className={`w-6 h-6 rounded  border border-gray-400 cursor-pointer checked:bg-green-600 checked:border-transparent ${props.className}`}
              />
              <div className="flex items-center h-full">
                {props.label && (
                  <label className="text-gray-600" htmlFor={props.name}>
                    {props.label}
                  </label>
                )}
                {props.tooltip && (
                  <ToolTip name={props.name} tooltip={props.tooltip} />
                )}
              </div>
            </div>
            {error && (
              <p className="text-red-500 text-[12px]  mt-1">{error.message}</p>
            )}
          </div>
        );
      }}
    />
  );
};
