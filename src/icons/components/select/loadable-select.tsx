import { Select } from 'components/select'
import { Control } from 'react-hook-form'

type Props = {
  label: string
  name: string
  isLoading: boolean
  options: { title: string; value: string }[]
  control?: Control<any>
  required?: boolean
}

export const LoadableSelect = ({
  label,
  name,
  isLoading,
  control,
  options,
  required,
}: Props) => {
  if (isLoading) {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor="loading" className="text-gray-900 mb-2">
          {label}
        </label>
        <div className="w-full h-[40px] p-2 rounded bg-gray-200 animate-pulse" />
      </div>
    )
  } else {
    return (
      <Select
        name={name}
        label={label}
        control={control}
        options={options}
        required={required}
      />
    )
  }
}
