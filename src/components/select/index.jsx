import { useValidation } from "hooks/use-validation";
import { memo } from "react";
import { Controller } from "react-hook-form";
import { ToolTip } from "../q-tooltip";
import { SelectSkeleton } from "./skeleton";

export const Select = memo((props) => {
  const { validate } = useValidation(props);
  if (props.loading) return <SelectSkeleton {...props} />;
  else if (props.control)
    return (
      <Controller
        name={props.name}
        control={props.control}
        rules={{ validate }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className="relative flex flex-col items-start w-full">
            <div className="flex items-center mb-2">
              {props.label && (
                <label className="text-gray-700" htmlFor={props.name}>
                  {props.label}
                </label>
              )}
              {props.tooltip && (
                <ToolTip name={props.name} tooltip={props.tooltip} />
              )}
            </div>
            <select
              id={props.name}
              data-testid={props.name}
              value={value || ""}
              disabled={props.disabled}
              onChange={(e) => {
                onChange(e.target.value);
                if (props?.extraOnChange) props?.extraOnChange(e.target.value);
              }}
              className={`w-full  rounded focus:outline-none focus:shadow  px-3 h-[44px] bg-white  text-gray-900  disabled:text-gray-500 disabled:bg-gray-100
                ${props.className || ""}
                ${
                  error
                    ? "border-2 border-red-400 shadow"
                    : "border border-gray-300 "
                }`}
            >
              <option value="" hidden disabled></option>
              {props.options?.map((option, index) => (
                <option value={option.value} key={index}>
                  {option.title}
                </option>
              ))}
            </select>
            {error && (
              <p className="text-red-500 text-[12px] mt-1">{error.message}</p>
            )}
          </div>
        )}
      />
    );
  else
    return (
      <div className="relative flex flex-col items-start w-full">
        <div className="flex items-center mb-2">
          {props.label && (
            <label className="text-gray-900" htmlFor={props.name}>
              {props.label}
            </label>
          )}
          {props.tooltip && (
            <ToolTip name={props.name} tooltip={props.tooltip} />
          )}
        </div>
        <select
          id={props.name}
          data-testid={props.name}
          name={props.name}
          value={props.value || ""}
          onChange={props.onChange}
          disabled={props.disabled}
          className={`border border-gray-300 w-full  rounded focus:outline-none focus:shadow  px-3 h-[44px]  text-gray-900 bg-white ${
            props.className || ""
          }`}
        >
          <option value="" disabled>
            {props.placeholder}
          </option>
          {props.options?.map((option, index) => (
            <option value={option.value} key={index}>
              {option.title}
            </option>
          ))}
        </select>
        {props.error && (
          <p className="text-red-500 text-[12px]  mt-2">{props.error}</p>
        )}
      </div>
    );
});
