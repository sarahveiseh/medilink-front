import { Select } from "components/select";

export const LoadableSelect = ({
  label,
  name,
  isLoading,
  control,
  options,
  required,
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor="loading" className="mb-2 text-gray-900">
          {label}
        </label>
        <div className="w-full h-[40px] p-2 rounded bg-gray-200 animate-pulse" />
      </div>
    );
  } else {
    return (
      <Select
        name={name}
        label={label}
        control={control}
        options={options}
        required={required}
      />
    );
  }
};
