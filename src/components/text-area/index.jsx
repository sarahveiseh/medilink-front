import { useValidation } from "hooks/use-validation";
import { Controller } from "react-hook-form";
import { TextareaSkeleton } from "./skeleton";

export const TextArea = (props) => {
  const { validate } = useValidation(props);
  if (props.loading) return <TextareaSkeleton {...props} />;
  else if (props.control)
    return (
      <Controller
        name={props.name}
        control={props.control}
        rules={{ validate }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className="relative flex flex-col items-start w-full">
            {props.label && (
              <label className="mb-2 text-gray-700" htmlFor={props.name}>
                {props.label}
              </label>
            )}
            <textarea
              id={props.name}
              data-testid={props.name}
              value={value || ""}
              onChange={onChange}
              placeholder={props.placeholder}
              disabled={props.disabled}
              className={`w-full  rounded focus:outline-none focus:shadow h-24 p-3  text-gray-900 bg-white placeholder-gray-500 disabled:bg-gray-100 disabled:text-gray-500
                ${
                  error
                    ? "border-2 border-red-400 shadow"
                    : "border border-gray-300 focus:ring-1 focus:ring-indigo-400 "
                }`}
            />
            {error && (
              <p className="text-red-500 text-[12px]  mt-1">{error.message}</p>
            )}
          </div>
        )}
      />
    );
  else return null;
};
